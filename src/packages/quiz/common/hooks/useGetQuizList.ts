import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { Quiz } from '../../../../core/models/quiz';
import * as React from 'react';

export interface FilterQuizListDTO {
    subject: string;
    type: string;
    name: string;
    currentPage: number;
    pageSize: number;
}
export interface FilterQuizListFormDTO extends Omit<FilterQuizListDTO, 'currentPage' | 'pageSize'> {}

export const useGetQuizList = (options: Partial<FilterQuizListDTO>) => {
    const { name, subject, type, currentPage, pageSize } = options;
    const option = React.useMemo<FilterQuizListDTO>(
        () => ({
            name: name || '',
            subject: subject || '',
            type: type || '',
            currentPage: currentPage || 0,
            pageSize: pageSize || 10,
        }),
        [name, subject, type, currentPage, pageSize]
    );

    const { list: quizList, count } = useGetListWithCount<Quiz, Partial<FilterQuizListDTO>>(ApiListRoutes.QUIZZES, option);
    return { quizList, count };
};
