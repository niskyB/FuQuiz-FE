import * as React from 'react';
import { http } from '../../api';
import { urlQueryParser } from '../../util';
import { ApiListRoutes } from '../enum';
import { GetListWithCount } from '../interface';

export const useGetListWithCount = <T, Options>(apiRoute: ApiListRoutes, options?: Options) => {
    const [list, setList] = React.useState<T[]>([]);
    const [count, setCount] = React.useState<number>(0);
    React.useEffect(() => {
        getFilterWithCount<T, Options>(apiRoute, options).then((res) => {
            setList(res.data);
            setCount(res.count);
        });
    }, [options]);

    return { list, count };
};

export const getFilterWithCount = async <T, Options>(apiRoute: string, options?: Options) => {
    const res = await http.get<GetListWithCount<T>>(`/${apiRoute}${urlQueryParser(options)}`);
    return res.data;
};

export const useGetList = <T, Options>(apiRoute: ApiListRoutes, options?: Options) => {
    const [list, setList] = React.useState<T[]>([]);
    React.useEffect(() => {
        getFilter<T, Options>(apiRoute, options).then((data) => {
            setList(data);
        });
    }, [options]);

    return { list };
};

export const getFilter = async <T, Options>(apiRoute: string, options?: Options) => {
    const res = await http.get<T[]>(`/${apiRoute}${urlQueryParser(options)}`);
    return res.data;
};
