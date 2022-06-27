import { SubmitAnswerQuizDTO } from '../../packages/quiz/containers/doQuiz/interface';
import { ClientQuestionInQuiz } from '../models/quizResult';

export const findQuestionAndDoAction = (questionList: ClientQuestionInQuiz[], findQuestionId: string, cb: (i: number) => void) => {
    for (let i = 0; i < questionList.length; i++) {
        const question = questionList[i];
        if (question.id === findQuestionId) {
            cb(i);
        }
    }
};

export const convertQuestionListToQuestionAnswerToSend = (questionList: ClientQuestionInQuiz[]): SubmitAnswerQuizDTO[] => {
    return questionList.map((question) => ({ answerId: question.userAnswers || '', attendedQuestionId: question.id, isMarked: question.isMarked }));
};
