import { SettingListProps } from '.';

export interface SettingFilterForm extends SettingListProps {}

export interface SettingFilterDTO extends Omit<SettingFilterForm, 'settingType'> {}
