import { Question } from '../../../../core/models/question';

export interface AddQuestionQuizDTO extends Pick<Question, 'id' | 'content' | 'lesson' | 'dimension'> {
    level: string;
    subject: string;
}
