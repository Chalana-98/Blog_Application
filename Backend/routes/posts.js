import express from "express";
import Post from "../models/Post.js";
import verifyToken from "../middleware/authMiddleware.js";

const postsRouter = express.Router();

// Get all posts
postsRouter.get("/", verifyToken, async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new post
postsRouter.post("/", verifyToken, async (req, res) => {
  const { title, content, category, tags } = req.body;
  const user = req.user;
  try {
    const post = await Post.create({
      title,
      content,
      user:user.id,
      category,
      tags,
    });

    res.status(201).json({
      createdPost: {
        title: post.title,
        content: post.content,
        user: post.user,
        category: post.category,
        tags: post.tags,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        _id: post._id,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get details of a post by ID
postsRouter.get("/:postId", verifyToken, async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { postsRouter };
