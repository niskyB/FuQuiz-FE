import { QuizQuestionDTO } from '../../packages/quiz/containers/doQuiz/interface';

export const findQuestionAndDoAction = (questionList: QuizQuestionDTO[], findQuestionId: string, cb: (i: number) => void) => {
    for (let i = 0; i < questionList.length; i++) {
        const question = questionList[i];
        if (question.id === findQuestionId) {
            cb(i);
        }
    }
};
