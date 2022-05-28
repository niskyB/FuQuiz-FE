import { Blog } from '../../../../core/models/blog';

export interface EditBlogDTO extends Pick<Blog, 'details' | 'briefInfo' | 'title'> {
    category: string;
    thumbnail: File | null;
}
