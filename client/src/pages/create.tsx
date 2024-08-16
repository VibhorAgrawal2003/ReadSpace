import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const endpoint = `${import.meta.env.VITE_SERVER}/blogs/create`;

        try {
            await axios.post(endpoint, { title, content });
            navigate("/"); // Redirect to the home page after creating a blog
        } catch (error) {
            console.error("Error creating blog:", error);
        }
    };

    return (
        <div className='create-container'>
            <h1>Create Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Title:
                        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Content:
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                    </label>
                </div>
                <button type='submit'>Create Blog</button>
            </form>
        </div>
    );
};

export default Create;
