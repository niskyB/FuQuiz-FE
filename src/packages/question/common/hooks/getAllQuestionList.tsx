import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { FilterQuestionsDTO, QuestionListDTO } from '../../containers/questionList/interface';
import * as React from 'react';

export interface FilterQuestionWithChangeDTO extends Partial<FilterQuestionsDTO> {
    boolean: boolean;
}

export const useGetAllQuestionList = (options: FilterQuestionWithChangeDTO) => {
    const { content, currentPage, dimension, isActive, lesson, level, pageSize, subject, boolean } = options;
    const option = React.useMemo<Partial<FilterQuestionsDTO>>(
        () => ({
            content: options.content || '',
            currentPage: options.currentPage || 0,
            dimension: options.dimension || '',
            isActive: options.isActive || '',
            lesson: options.lesson || '',
            level: options.level || '',
            subject: options.subject || '',
            pageSize: options.pageSize || 10,
        }),
        [content, currentPage, dimension, isActive, lesson, level, pageSize, subject, boolean]
    );
    const { count, list: questions } = useGetListWithCount<QuestionListDTO, Partial<FilterQuestionsDTO>>(ApiListRoutes.QUESTIONS, option);

    return { questions, count };
};
