import { useEffect, useState } from 'react';

export const useFetch = url => {
    const [state, setState] = useState({data: null, loading: true });

    useEffect(() => {
        setState(state => ({data: state.data, loading: true}));
        const fetchData = async () => {
            const res = await fetch(url);
            const txt = await res.text();
            setState({data: txt, loading: false});
        };
        fetchData().catch(e => console.log(e));
    }, [url]);

    return state;
};