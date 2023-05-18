import React, { useEffect, useState } from "react";

const JsonData = () => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = () => {
        setLoader(true)
        setError(false)
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
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
        })
        .catch((err) => {
            setLoader(false)
            setError(err.message)
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    const dataListing = data.slice(0, 3).map((data) => (
        <div className="json-data-item" key={data.id}>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            <hr />
        </div>
    ))

    return (
        <>
            <div className="json-data">
                <div className="container">
                    { loader && <div>Loading...</div> }
                    { error && <div>{error}</div> }
                    { !error && dataListing }
                </div>
            </div>
        </>
    )
}

export default JsonData;