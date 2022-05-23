export interface Subject {
    id: string;
    title: string;
    tagLine: string;
    description: string;
    subjectCategory: SubjectCategory;
    briefInfo: string;
    createAt: string;
    updateAt: string;
    assignTo: string;
}

export interface SubjectCategory {
    id: string;
    name: string;
}
