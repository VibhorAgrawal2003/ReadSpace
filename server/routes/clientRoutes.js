import express from "express";
import {
  getBlogsAll,
  getBlogsId,
  getBlogsUser,
  updateBlog,
  deleteBlog,
  searchBlogs,
  createBlog,
} from "../controllers/blogs.js";
import {
  getCommentsBlog,
  getCommentsUser,
  deleteComment,
  updateComment,
} from "../controllers/comments.js";
import { getUsersAll, getUser, searchUsers } from "../controllers/users.js";

const router = express.Router();

// Blog routes
router.get("/blogs/user/:username", getBlogsUser);
router.get("/blogs/:id", getBlogsId);
router.get("/blogs", getBlogsAll);
router.get("/search/blogs", searchBlogs);
router.put("/blogs/:id", updateBlog);
router.post("/blogs/new", createBlog);
router.delete("/blogs/:id", deleteBlog);

// Comment routes
router.get("/comments/blog/:blogId", getCommentsBlog);
router.get("/comments/user/:username", getCommentsUser);
router.put("/comments/:id", updateComment);
router.delete("/comments/:id", deleteComment);

// User routes
router.get("/users", getUsersAll);
router.get("/users/:username", getUser);
router.get("/search/users", searchUsers);

export default router;
