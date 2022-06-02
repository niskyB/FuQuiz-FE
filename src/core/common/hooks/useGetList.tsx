import * as React from 'react';
import { http } from '../../api';
import { urlQueryParser } from '../../util';
import { ApiListRoutes } from '../enum';
import { GetListWithCount } from '../interface';

export const useGetList = <T, Options>(options: Options, apiRoute: ApiListRoutes) => {
    const [list, setList] = React.useState<T[]>([]);
    const [count, setCount] = React.useState<number>(0);
    React.useEffect(() => {
        getFilter<T, Options>(options, apiRoute).then((res) => {
            setList(res.data);
            setCount(res.count);
        });
    }, [options]);

    return { list, count };
};

export const getFilter = async <T, Options>(options: Options, apiRoute: string) => {
    const res = await http.get<GetListWithCount<T>>(`/${apiRoute}?${urlQueryParser(options)}`);
    return res.data;
};
