import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const cleanup = new AbortController();
        // console.log(cleanup)
        // console.log(cleanup.signal)
        setLoader(true)
        setError(false)
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
            setData(data.quotes)
            // console.log(data.quotes);
        })
        .catch((err) => {
            if(err.name === 'AbortError') {
                console.log('cleanup!');
            } else {
                setLoader(false)
                setError(err.message)
                // console.log(err.message)
            }
        })
        return () => cleanup.abort();
    }, [url])

    return {data, loader, error}

}

export default useFetch;