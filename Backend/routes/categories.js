import express from 'express';
import Category from '../models/Category.js';
import verifyToken from '../middleware/authMiddleware.js';

const categoriesRouter = express.Router();

// Create a new category
categoriesRouter.post("/", verifyToken, async (req, res) => {
  const { name } = req.body;

  try {
    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = await Category.create({ name });
    res.status(201).json({ createdCategory: newCategory });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all categories
categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get details of a category by ID
categoriesRouter.get("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;

  try {
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { categoriesRouter };
