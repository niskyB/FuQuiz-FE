import { Lesson } from './lesson';

export interface PricePackage {
    id: string;
    originalPrice: number;
    lesson: Lesson;
    name: string;
    duration: number;
    isActive: boolean;
    updateAt: string;
    createAt: string;
    salePrice: number;
    description: string;
}
