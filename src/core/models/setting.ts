export interface Setting {
    id: string;
    type: SettingType;
    value: string;
    order: number;
    isActivate: boolean;
}

export interface SettingType {
    id: string;
    name: string;
}

export enum SettingsEnum {
    ROLE = 'Role',
    SYSTEM_MENUS = 'System Menus',
    POST_CATEGORIES = 'Post Categories',
    SUBJECT_CATEGORIES = 'Subject Categories',
    QUESTION_LEVELS = 'Question Levels',
    LESSON_TYPES = 'Lesson Types',
    SUBJECT_DIMENSION = 'Subject Dimension',
    DIMENSION_TYPES = 'Dimension Types',
}

export enum SettingEditEnum {
    POST_CATEGORY = 'Post Category',
    SUBJECT_CATEGORY = 'Subject Category',
}
