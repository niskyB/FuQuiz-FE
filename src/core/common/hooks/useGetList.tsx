import * as React from 'react';
import { http } from '../../api';
import { urlQueryParser } from '../../util';
import { ApiListRoutes } from '../enum';
import { GetListWithCount } from '../interface';

export const useGetList = <T, Options>(apiRoute: ApiListRoutes, options?: Options) => {
    const [list, setList] = React.useState<T[]>([]);
    const [count, setCount] = React.useState<number>(0);
    React.useEffect(() => {
        getFilter<T, Options>(apiRoute, options).then((res) => {
            setList(res.data);
            setCount(res.count);
        });
    }, [options]);

    return { list, count };
};

export const getFilter = async <T, Options>(apiRoute: string, options?: Options) => {
    console.log(`/${apiRoute}${urlQueryParser(options)}`);
    const res = await http.get<GetListWithCount<T>>(`/${apiRoute}${urlQueryParser(options)}`);
    return res.data;
};
