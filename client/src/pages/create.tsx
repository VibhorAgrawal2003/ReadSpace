import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const token = sessionStorage.getItem("token");
        const username = sessionStorage.getItem("username");

        if (!username) {
            console.error("No username found in session");
            return;
        }

        const endpoint = `${import.meta.env.VITE_SERVER}/client/blogs/new`;

        try {
            await axios.post(
                endpoint,
                { title, content, user: username },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            navigate("/");
        } catch (error) {
            console.error("Error creating blog:", error);
        }
    };

    return (
        <div className='create-container p-6 max-w-4xl mx-auto'>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <input
                        id='title'
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder='Title'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                <div>
                    <textarea
                        id='content'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows={10}
                        placeholder='This is where your blog content goes...'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                <div className='flex justify-between'>
                    <button
                        type='submit'
                        className='py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        Create Blog
                    </button>
                    <button
                        type='button'
                        className='py-2 px-4 bg-gray-400 text-white font-bold rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onClick={() => navigate("/")}
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Create;
