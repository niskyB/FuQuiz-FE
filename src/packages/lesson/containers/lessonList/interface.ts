export interface FilterLessonListDTO {
    id: string;
    title: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    isActive: string;
    currentPage: number;
    pageSize: number;
}

export interface FilterLessonListFormDTO extends Omit<FilterLessonListDTO, 'id'> {
    pricePackage: string;
}

export interface UpdateLessonActivationDTO {
    isActive: boolean;
}
