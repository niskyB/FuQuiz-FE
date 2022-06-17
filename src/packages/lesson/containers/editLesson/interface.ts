export interface EditLessonDTO {
    name: string;
    htmlContent: string;
    topic: string;
    videoLink: string;
    order: number;
    type: string;
    quiz: string;
}
export interface EditLessonFormDTO extends EditLessonDTO {}
