import { SettingsEnum } from '../../models/setting';
import { SelectionFieldValues } from '../interface';

export const settingFieldData: SelectionFieldValues<SettingsEnum>[] = [
    { label: 'Role', value: SettingsEnum.ROLE },
    { label: 'System Menus', value: SettingsEnum.SYSTEM_MENUS },
    { label: 'Post Categories', value: SettingsEnum.POST_CATEGORIES },
    { label: 'Subject Categories', value: SettingsEnum.SUBJECT_CATEGORIES },
    { label: 'Question Levels', value: SettingsEnum.QUESTION_LEVELS },
    { label: 'Lesson Types', value: SettingsEnum.LESSON_TYPES },
    { label: 'Subject Dimension', value: SettingsEnum.SUBJECT_DIMENSION },
];
