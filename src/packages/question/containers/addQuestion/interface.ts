import { Answer } from '../../../../core/models/answer';
import { Question } from '../../../../core/models/question';

export interface AddQuestionDTO extends Omit<Question, 'id' | 'answers' | 'subject' | 'dimension' | 'lesson' | 'questionLevel' | 'imageLink'> {
    answers: Omit<Answer, 'id'>[];
    image: File | null;
    subject: string;
    lesson: string;
    dimensions: string;
    questionLevel: string;
}

export interface AddQuestionForm extends Omit<AddQuestionDTO, 'subject'> {}
