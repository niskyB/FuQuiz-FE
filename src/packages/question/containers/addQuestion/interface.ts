import { AttributeType } from '../../../../core/common/interface';
import { Question } from '../../../../core/models/question';

export interface AddQuestionDTO extends Omit<Question, 'id'> {}
