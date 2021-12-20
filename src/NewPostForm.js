import React, { useState } from "react";
import './NewPostForm.css';


function NewPostForm({post={title: "", description: "", body: ""}, save, cancel}) {
    
    const [formData, setFormData] = useState({
        title: post.title,
        description: post.description,
        body: post.body
    });

    // Submit form data to add/edit post
    async function handleSubmit(evt) {
        evt.preventDefault();
        save(formData);  
    }

    // Handle form data changing
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(f => ({
        ...f,
        [name]: value,
        }));
    }

    return (
        
        <form>
            <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
                id="title"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
                id="description"
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea
                id="body"
                name="body"
                className="form-control"
                value={formData.body}
                onChange={handleChange}
                rows="5"
            ></textarea>
            </div>
            <div>
                <button
                    className="btn btn-primary mr-2"
                    onClick={handleSubmit}
                >
                Save
                </button>
                <button onClick={cancel} className="btn btn-secondary cancelBtn">Cancel</button>
            </div>
        </form>
        
    );
}

export default NewPostForm;
