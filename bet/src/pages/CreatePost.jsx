import React, { useState } from 'react';
import './CreatePost.css';
import { supabase } from '../client';

const CreatePost = () => {
    const [post, setPost] = useState({ title: "", author: "", description: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('Posts')
            .insert({ title: post.title, author: post.author, description: post.description })
            .select();

        if (error) {
            console.error("Error inserting post:", error);
        } else {
            window.location = "/";
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label><br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br /><br />

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br /><br />

                <label htmlFor="description">Description</label><br />
                <textarea
                    rows="5"
                    cols="50"
                    id="description"
                    name="description"
                    onChange={handleChange}
                ></textarea>
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CreatePost;
