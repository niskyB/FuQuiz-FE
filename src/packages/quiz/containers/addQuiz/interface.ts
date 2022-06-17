import { Question } from '../../../../core/models/question';

export interface AddQuestionQuizDTO extends Pick<Question, 'id' | 'content' | 'lesson' | 'subject' | 'dimension' | 'level'> {}
