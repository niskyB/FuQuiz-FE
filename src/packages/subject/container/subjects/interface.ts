export interface BlogListFilterDTO {
    currentPage: number;
    pageSize: number;
    category: string;
    name: string;
    isFeature: boolean | '';
}
