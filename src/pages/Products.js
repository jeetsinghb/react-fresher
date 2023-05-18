import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const cleanup = new AbortController();
        setLoader(true)
        setError(false)
        const url = "https://dummyjson.com/products"
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
            setData(data.products)
            // console.log(data.products)
        })
        .catch((err) => {
            if(err.name === 'AbortError') {
                console.log('cleanup!')
            } else {
                setLoader(false)
                setError(err.message)
                // console.log(err.message)
            }
        })
        return () => cleanup.abort();
    }, [])

    const productListing = data.map(data => (
        <div key={data.id} className="product-item">
            <div className="product-thumb">
                <img src={data.thumbnail} alt={data.title} />
            </div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <Link to={`/product/${data.id}`}>View Product</Link>
        </div>
    ))

    return (
        <>
            <div className="products-wrap">
                <div className="container">
                    { loader && <div>Loading...</div> }
                    { error && <div>{error}</div> }
                    { !error &&
                        <div className="products-items">
                            {productListing}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Products;