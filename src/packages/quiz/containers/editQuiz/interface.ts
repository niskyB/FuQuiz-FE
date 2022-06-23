export interface EditQuizDTO {
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
