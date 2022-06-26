import React from 'react';
import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks/useGetList';
import { QuizResult } from '../../../../core/models/quizResult';

export interface GetPracticesDTO {
    subject: string;
    currentPage: number;
    pageSize: number;
}

export const useGetPracticeList = (options: Partial<GetPracticesDTO>) => {
    const { currentPage, pageSize, subject } = options;
    const option = React.useMemo<GetPracticesDTO>(
        () => ({ subject: subject || '', currentPage: currentPage || 1, pageSize: pageSize || 10 }),
        [subject, currentPage, pageSize]
    );
    const { count, list: quizResults } = useGetListWithCount<QuizResult, Partial<GetPracticesDTO>>(ApiListRoutes.QUIZ_RESULTS, option);
    return { quizResults, count };
};
