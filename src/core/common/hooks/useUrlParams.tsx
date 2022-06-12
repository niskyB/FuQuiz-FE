import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import React from 'react';

interface useParamsProps {
    defaultPath: string;
    query?: string | ParsedUrlQueryInput | null | undefined;
}

export const useUrlParams = ({ defaultPath, query }: useParamsProps) => {
    const router = useRouter();

    React.useEffect(() => {
        if (defaultPath === router.asPath) router.push({ pathname: router.asPath, query });
    }, []);

    return null;
};
