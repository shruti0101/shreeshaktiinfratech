
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
     type: String, 
     required: true 
    },
  description: { 
     type: String, 
     required: true 
    },
    image: { 
         type: String, 
         required: true 
        },
  date: { 
     type: Date, 
     default: Date.now 
    },
});

const Blog = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default Blog;
