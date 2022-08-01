import { useEffect, useRef, useState } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback);
    const [id, setId] = useState<NodeJS.Timer>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!delay && delay !== 0) {
            return;
        }

        const id = setInterval(() => savedCallback.current(), delay);
        setId(id);

        return () => clearInterval(id);
    }, [delay]);

    return () => {
        if (id) clearInterval(id);
    };
}
