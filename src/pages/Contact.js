import React, { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        terms: false,
        gender: '',
        color: 'Choose Color',
        message: ''
    })

    const handleChange = (event) => {
        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!formData.terms) {
            return
        }
        else {
            console.log(formData);
        }
    }

    return (
        <>
            <div className="contact-form">
                <div className="container">
                    <h1>Contact Us</h1>
                    <br />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <br/>
                        <input
                            type="email"
                            placeholder="Email Id"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            id="terms"
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                        />
                        <label htmlFor="terms">Accept terms</label>
                        <br />
                        <input
                            id="male"
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        />
                        <label htmlFor="male">Male</label>
                        <br />
                        <input
                            id="female"
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                        />
                        <label htmlFor="female">Female</label>
                        <br />
                        <select
                            id="color"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                        >
                            <option>Choose Color</option>
                            <option>Red</option>
                            <option>Yellow</option>
                            <option>Green</option>
                        </select>
                        <br />
                        <textarea
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <br />
                        <button>Submit</button>
                        
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact;