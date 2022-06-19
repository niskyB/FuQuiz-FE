import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { Question } from '../../../../core/models/question';
import { FilterQuestionsDTO, QuestionListDTO } from '../../containers/questionList/interface';

export const useGetAllQuestionList = (options: Partial<FilterQuestionsDTO>) => {
    const { count, list: questions } = useGetListWithCount<QuestionListDTO, Partial<FilterQuestionsDTO>>(ApiListRoutes.QUESTIONS, options);
    console.log('options', options);
    return { questions, count };
};
