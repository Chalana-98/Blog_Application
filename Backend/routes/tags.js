import express from 'express';
import Tag from '../models/Tag.js';
import verifyToken from '../middleware/authMiddleware.js';

const tagsRouter = express.Router();

// Create a new tag
tagsRouter.post("/", verifyToken, async (req, res) => {
  const { name } = req.body;

  try {
    const existingTag = await Tag.findOne({ name });

    if (existingTag) {
      return res.status(400).json({ message: "Tag already exists" });
    }

    const newTag = await Tag.create({ name });
    res.status(201).json({ createdTag: newTag });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all tags
tagsRouter.get("/", async (req, res) => {
  try {
    const tags = await Tag.find({});
    res.status(200).json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get details of a tag by ID
tagsRouter.get("/:tagId", async (req, res) => {
  const { tagId } = req.params;

  try {
    const tag = await Tag.findById(tagId);

    if (!tag) {
      return res.status(404).json({ error: "Tag not found" });
    }

    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { tagsRouter };
