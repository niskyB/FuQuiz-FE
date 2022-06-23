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

export interface FilterQuestionsDTO {
    subject: string;
    lesson: string;
    dimension: string;
    content: string;
    level: string;
    isActive: boolean | '';
    currentPage: number;
    pageSize: number;
}

export interface FilterQuestionFormDTO extends Omit<FilterQuestionsDTO, 'subject' | 'currentPage' | 'pageSize'> {}
