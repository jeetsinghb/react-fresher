import React from "react";
import useFetch from "../hooks/useFetch";

const Quotes = () => {

    const {data, loader, error} = useFetch('https://dummyjson.com/quotes')

    const postLisitng = data.map(data => (
        <div className="json-data-item" key={data.id}>
            <h3>{data.quote}</h3>
            <span>- {data.author}</span>
            <hr />
        </div>
    ))

    return (
        <>
            <div className="dummy-data">
                <div className="container">
                    { loader && <div>Loading...</div> }
                    { error && <div>{error}</div> }
                    { !error &&
                        <div className="quotes-wrap">
                            {postLisitng}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Quotes;