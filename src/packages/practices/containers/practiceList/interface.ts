import { QuizResult } from '../../../../core/models/quizResult';
import { Subject } from '../../../../core/models/subject';

export interface SelectSubject extends Pick<Subject, 'id' | 'name'> {}
