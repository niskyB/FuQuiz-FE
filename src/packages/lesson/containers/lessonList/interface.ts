export interface FilterLessonListDTO {
    id: string;
    title: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    isActive: string;
}

export interface UpdateLessonActivationDTO {
    isActive: boolean;
}
