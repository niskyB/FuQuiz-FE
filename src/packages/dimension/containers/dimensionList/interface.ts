export interface GetDimensionListDTO {
    id: string;
    currentPage: number;
    pageSize: number;
}

export interface GetDimensionListFormDTO extends Omit<GetDimensionListDTO, 'currentPage' | 'pageSize'> {}
