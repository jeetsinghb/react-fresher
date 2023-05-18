import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductSingle = () => {

    const getId = useParams();
    const currentId = getId.id
    // console.log(currentId)

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const cleanup = new AbortController();
        setLoader(true)
        setError(false)
        const url = "https://dummyjson.com/products/" + currentId
        fetch(url, {signal: cleanup.signal})
        .then((res) => {
            if(!res.ok) {
                throw new Error('Cannot fetch the data from the server...')
            } else {
                return res.json();
            }
        })
        .then((data) => {
            setLoader(false)
            setData(data)
            // console.log(data)
        })
        .catch((err) => {
            if(err.name === 'AbortError') {
                console.log('cleanup')
            } else {
                setLoader(false)
                setError(err.message)
                // console.log(err.message)
            }
        })
    }, [currentId])
    
    return (
        <>
            <div className="product-single">
                <div className="container">
                    { loader && <div>Loading...</div> }
                    { error && <div>{error}</div> }
                    <div className="product-item-single">
                        <h1>{data.title}</h1>
                        <hr />
                        <h3>{data.brand}</h3>
                        <p>{data.description}</p>
                        <h3>Price: {data.price}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSingle;