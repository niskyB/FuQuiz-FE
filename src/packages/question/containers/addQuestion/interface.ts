import { Answer } from '../../../../core/models/answer';
import { Question } from '../../../../core/models/question';

export interface AddQuestionDTO extends Omit<Question, 'id' | 'answers' | 'subject' | 'dimension' | 'lesson' | 'level'> {
    answers: Omit<Answer, 'id'>[];
    subject: string;
    lesson: string;
    dimension: string;
    level: string;
}
