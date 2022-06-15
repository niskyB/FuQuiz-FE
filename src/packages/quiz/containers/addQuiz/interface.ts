import { Question } from '../../../../core/models/question';

export interface SelectQuestionDTO extends Omit<Question, 'imageUr   l' | ''> {}
