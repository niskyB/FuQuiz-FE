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
