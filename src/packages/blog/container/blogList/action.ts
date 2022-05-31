import { http } from '../../../../core/api';
import { urlQueryParser } from '../../../../core/util';
import { FilterBlogListDTO, GetListBlogWithCount } from './interface';

export const getFilterBlogList = async (options: FilterBlogListDTO) => {
    const res = await http.get<GetListBlogWithCount>(`/blogs?${urlQueryParser(options)}`);
    return res.data;
};
