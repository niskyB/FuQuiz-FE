import { QuestionListProps } from '.';
import { Dimension } from '../../../../core/models/dimension';
import { Lesson } from '../../../../core/models/lesson';
import { Question } from '../../../../core/models/question';
import { Subject } from '../../../../core/models/subject';

interface SubjectQuestion {
    subject: Subject;
}

interface SubjectLesson extends Pick<Lesson, 'id' | 'name'>, SubjectQuestion {}

export interface QuestionListDTO extends Omit<Question, 'lesson'> {
    lesson: SubjectLesson;
}

export interface FilterQuestionsDTO extends Pick<QuestionListProps, 'subject'> {}
