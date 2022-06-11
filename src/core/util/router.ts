import { NextRouter } from 'next/router';

export const pushWithParams = (router: NextRouter, pathname: string, options: any) => {
    router.push({
        pathname,
        query: { ...router.query, ...options },
    });
};
