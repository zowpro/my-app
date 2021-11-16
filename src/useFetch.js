import React, {useEffect, useState} from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect((url) => {
        setLoading(true);
        
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            setData(data);
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setLoading(false)
        });
    }, [url]);
    return {data, loading, error};
}

export default useFetch
