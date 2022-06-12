import dynamic from 'next/dynamic';
import { RedStar } from '../../../packages/store';
import { useStoreApi } from '../../store';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface QuillInputProps {
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    label?: string;
    name?: string;
    require?: boolean;
}

export const QuillInput: React.FC<QuillInputProps> = ({ description, setDescription, name = '', label = '', require = true }) => {
    const { errorDetails } = useStoreApi();
    return (
        <>
            <div className="w-full">
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 capitalize">
                    {label} {require ? <RedStar /> : ''}
                </label>
                <div className="mt-1">
                    <ReactQuill
                        placeholder="Type something..."
                        value={description}
                        onChange={setDescription}
                        className="col-span-2 min-h-2xl"
                        modules={{
                            toolbar: [
                                ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                                ['blockquote', 'code-block'],
                                ['link', 'video', 'image'],
                                [{ header: 1 }, { header: 2 }], // custom button values
                                [{ list: 'ordered' }, { list: 'bullet' }],
                                [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                                [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                                [{ direction: 'rtl' }], // text direction
                                [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                [{ color: [] }, { background: [] }],
                                [{ font: [] }],
                                [{ align: [] }],
                                ['clean'], // remove formatting button
                            ],
                        }}
                    />
                    {Boolean(errorDetails[name]) && <div className="text-red-500">{errorDetails[name]}</div>}
                </div>
            </div>
        </>
    );
};
