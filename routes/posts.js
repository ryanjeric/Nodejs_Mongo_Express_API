const express = require('express');
const router = express.Router();

// IMPORT MODEL
const Post = require('../models/Posts');

// GETS ALL POST
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
})

/* router.get('/specific', (req,res) => {
    res.send('We are on specific posts')
}) */

// CREATE A POST
router.post('/', async (req,res) => {
    //console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    }catch(err){
        res.json({message:err});
    }
})

// SPECIFIC POST
router.get('/:postId',async (req,res)=>{
    //console.log(req.params.postId);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});
// DELETE POST
router.delete('/:postId', async (req,res)=>{
    try{
        const removePost = await Post.remove({_id:req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message:err});
    }
})

router.patch('/:postId', async (req,res)=>{
    try{
        const updatePost = await Post.updateOne({_id:req.params.postId},{
            $set: {
                title: req.body.title
            }
        });
        res.json(updatePost);
    }catch(err){
        res.json({message:err});
    }
});


module.exports = router;