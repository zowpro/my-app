import {useEffect, useState, useCallback} from 'react'

const useFetch = () => { 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const doFetch = useCallback((options = {}) => {
        setLoading(true);
    }, []);

    useEffect(() => {
        if(!loading) {
            return;
        }
        fetch("http://localhost:3004/posts")
        .then((res) => res.json())
        .then(data => {
            setData(data);
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setLoading(false)
        });
    }, [loading]);
    return [{ data, loading, error }, doFetch];
}

export default useFetch
