import express from "express";
import Thread from "../models/Thread.js";
import getGeminiResponse from "../utils/Gemini.js";


const router = express.Router();

//test
router.post("/test", async(req,res) => {
    try{
        const thread = new Thread({
            threadId : "12733388xyz",
            title : "Testing New Thread"
        });
         const response = await thread.save();
         res.send(response);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error : "failed to save in db"});
    }
});

//Get all threads
router.get("/thread", async(req,res) => {
     try{
        const threads = await Thread.find({});
        threads.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)); //descending order(most recent are at top)
        res.json(threads);
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Failed to fetch Threads"});
    }
});

router.get("/thread/:threadId", async(req,res) =>{
    const {threadId} = req.params;

    try{
        const thread = await Thread.findOne({threadId});

        if(!thread){
            res.status(404).json({error : "Thread not found"});
        }
        res.json(thread.messages);
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Failed to fetch chat"});
    }
});

router.delete("/thread/:threadId", async(req,res) =>{
    const {threadId} = req.params;

    try{
        const deleteThread = await Thread.findOneAndDelete({threadId});

        if(!deleteThread){
            res.status(404).json({error : "Thread not found"});
        }
        res.status(200).json({success : "Thread deleted successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Failed to delete chat"});
    }
});



router.post("/chat", async(req,res) => {
    const {threadId, message} = req.body;
    
    if(!threadId || !message){
        res.status(400).json({error: "missing required fields"});
    }

    try{
        let thread = await Thread.findOne({threadId});

        if(!thread){
            //create new thread in db
            thread = new Thread({
                threadId,
                title : message,
                messages :[{role:"user",content : message}]
            });
        }else{
            thread.messages.push({role:"user",content : message});
        }
        
       const assistantReply = await getGeminiResponse(message);
        thread.messages.push({role:"assistant",content : assistantReply});
        thread.updatedAt = new Date();

        await thread.save();
        res.json({reply : assistantReply});
    }catch(err){
        console.log(err);
        res.status(500).json({error : "something went wrong"});
    }

    
});

export default router;