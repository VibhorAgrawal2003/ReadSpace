import React from "react";

interface Blog {
    bid: number;
    title: string;
    content: string;
    likes: number;
    tags: Array<string>;
    date_upload: Date;
    date_modify: Date;
}

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
    return (
        <div key={blog.bid} className='border border-gray-300 rounded-md p-4'>
            <h3 className='text-xl font-semibold text-left'>{blog.title}</h3>
            <div className='flex justify-between text-gray-600 text-sm'>
                <p className='text-sm text-gray-500 text-left'>Likes: {blog.likes}</p>
                <p className='text-sm text-gray-500 text-left'>
                    Uploaded on: {new Date(blog.date_upload).toLocaleDateString()}
                </p>
            </div>

            {blog.tags && (
                <div className='mt-2 text-gray-700 text-left'>
                    <div className='flex flex-wrap gap-2 mt-1'>
                        {blog.tags.slice(0, 5).map((tag, index) => (
                            <span key={index} className='text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md'>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogCard;
