export interface AddLessonDTO {
    name: string;
    quizType: string;
    isActive: boolean;
    htmlContent: string;
    topic: string;
    videoLink: string;
    order: number;
    type: string;
    subject: string;
    quiz: string;
}

export interface AddLessonFormDTO extends Omit<AddLessonDTO, 'isActive' | 'subject' | 'htmlContent'> {}
