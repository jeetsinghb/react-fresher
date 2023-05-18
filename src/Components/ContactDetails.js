import React, { useState } from "react";

const ContactDetails = () => {

    const [data, setData] = useState({
        name: 'John Doe',
        age: 26,
        email: 'johndoe@yahoo.com',
        isFav: false,
    })

    const star = data.isFav ? 'YES' : 'NO'

    const toggleFav = () => {
        // console.log('you clicked me');
        setData(prevData => {
            return {
                ...prevData,
                isFav: !data.isFav
            }
        })
    }

    return (
        <>
            <div className="contact-details">
                <div className="container">
                    <h3>{data.name}</h3>
                    <h3>{data.age}</h3>
                    <h3>{data.email}</h3>
                    <button onClick={toggleFav}>{star}</button>
                </div>
            </div>
        </>
    )
}

export default ContactDetails;