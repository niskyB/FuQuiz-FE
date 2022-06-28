export interface AddQuizDTO {
    name: string;
    duration: number;
    passRate: number;
    numberOfQuestion: number;
    isPublic: boolean;
    type: string;
    quizLevel: string;
    subject: string;
    questions: string[];
}

export interface AddQuizFormDTO extends Omit<AddQuizDTO, 'questions'> {}
