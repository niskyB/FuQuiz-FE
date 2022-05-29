import { http } from '../../../../core/api';
import { FilterBlogListDTO, GetListBlogWithCount } from './interface';

export const getFilterSlider = async ({ createdAt: createdAt, currentPage, isShow, pageSize, title, userId, category }: FilterBlogListDTO) => {
    console.log(
        `/blogs?currentPage=${
            currentPage - 1
        }&pageSize=${pageSize}&title=${title}&userId=${userId}&isShow=${isShow}&category=${category}&createdAt=${createdAt}`
    );
    const res = await http.get<GetListBlogWithCount>(
        `/blogs?currentPage=${
            currentPage - 1
        }&pageSize=${pageSize}&title=${title}&userId=${userId}&isShow=${isShow}&category=${category}&createdAt=${createdAt}`
    );
    return res.data;
};
