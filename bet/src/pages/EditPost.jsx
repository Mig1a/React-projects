import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const EditPost = ({ data }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({ title: "", author: "", description: "" });

    useEffect(() => {
        // Fetch the post data by ID when the component mounts
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error("Error fetching post:", error);
            } else {
                setPost(data);
            }
        };

        fetchPost();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updatePost = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('Posts')
            .update({ title: post.title, author: post.author, description: post.description })
            .eq('id', id);

        if (error) {
            console.error("Error updating post:", error);
        } else {
            navigate("/");
        }
    };

    const deletePost = async () => {
        const { error } = await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        if (error) {
            console.error("Error deleting post:", error);
        } else {
            navigate("/");
        }
    };

    return (
        <div>
            <form onSubmit={updatePost}>
                <label htmlFor="title">Title</label> <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                /><br /><br />

                <label htmlFor="author">Author</label><br />
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={post.author}
                    onChange={handleChange}
                /><br /><br />

                <label htmlFor="description">Description</label><br />
                <textarea
                    rows="5"
                    cols="50"
                    id="description"
                    name="description"
                    value={post.description}
                    onChange={handleChange}
                ></textarea>
                <br /><br />
                
                <input type="submit" value="Submit" />
                <button type="button" className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    );
};

export default EditPost;
