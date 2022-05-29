import { QuizQuestionDTO } from '../../../quiz/containers/doQuiz/interface';

export interface QuizQuestionReadonlyDTO extends QuizQuestionDTO {
    rightAnswer: string;
}

export interface HintQuestion {
    content: string;
    domain: string;
    source: string;
}
