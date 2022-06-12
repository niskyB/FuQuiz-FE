import { Blog } from '../../../../core/models/blog';

export interface AddBlogDTO extends Pick<Blog, 'details' | 'briefInfo' | 'title'> {
    category: string;
    image: File | null;
}
