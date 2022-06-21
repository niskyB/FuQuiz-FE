import { Answer } from '../../../../core/models/answer';
import { Question } from '../../../../core/models/question';

export interface EditQuestionDTO extends Omit<Question, 'id' | 'answers' | 'subject' | 'dimensions' | 'lesson' | 'imageUrl'> {
    answers: Omit<Answer, 'id'>[];
    image: File;
}

export interface EditQuestionForm extends Omit<EditQuestionDTO, 'subject' | 'questionLevel'> {
    questionLevel: string;
}
