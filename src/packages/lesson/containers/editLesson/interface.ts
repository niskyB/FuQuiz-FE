export interface EditLessonDTO {
    name: string;
    isActive: boolean;
    htmlContent: string;
    topic: string;
    videoLink: string;
    order: number;
    type: string;
    subject: string;
    quiz: string;
}
export interface EditLessonFormDTO extends Omit<EditLessonDTO, 'isActive' | 'subject' | 'htmlContent'> {}
