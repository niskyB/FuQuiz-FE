import { AttributeType } from '../common/interface';
import { Subject } from './subject';

export interface LessonType extends AttributeType {}

export interface LessonDetail {
    id: string;
    lesson: Lesson;
    description: string;
    videoLink: string;
}
export interface Lesson {
    id: string;
    name: string;
    createAt: string;
    subject: Subject;
    lessonType: LessonType;
    updateAt: string;
    isActive: boolean;
}
