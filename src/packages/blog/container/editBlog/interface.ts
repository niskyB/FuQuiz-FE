import { Blog } from '../../../../core/models/blog';

export interface EditBlogDTO extends Pick<Blog, 'details' | 'briefInfo' | 'title' | 'isShow' | 'isFeature'> {
    category: string;
    image: File | null;
}

export interface EditBlogFormDTO extends Omit<EditBlogDTO, 'image' | 'details'> {}
