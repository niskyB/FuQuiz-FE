import { SettingEnum } from '../../models/setting';
import { SelectionFieldValues } from '../interface';

export const settingFieldData: SelectionFieldValues<SettingEnum>[] = [
    { label: 'Role', value: SettingEnum.ROLE },
    { label: 'System Menus', value: SettingEnum.SYSTEM_MENUS },
    { label: 'Post Categories', value: SettingEnum.POST_CATEGORIES },
    { label: 'Subject Categories', value: SettingEnum.SUBJECT_CATEGORIES },
    { label: 'Question Levels', value: SettingEnum.QUESTION_LEVELS },
    { label: 'Lesson Types', value: SettingEnum.LESSON_TYPES },
    { label: 'Subject Dimension', value: SettingEnum.SUBJECT_DIMENSION },
];
