import { useEffect, useState } from "react";

export default function useFetchWithDelay(url, delay = 1000) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((json) => {
                    setData(json);
                    setLoading(false);
                });
        }, delay);

        return () => clearTimeout(timer);
    }, [url, delay]);

    return { data, loading };
}
