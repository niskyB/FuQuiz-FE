export interface FormAddPracticeDTO {
    subject: string;
    numberOfQuestion: number;
    practiceType: string;
    selectedGroup: string;
}

export interface AddPracticeDTO extends Pick<FormAddPracticeDTO, 'subject' | 'numberOfQuestion'> {
    subjectTopic: string;
    dimension: string;
}
