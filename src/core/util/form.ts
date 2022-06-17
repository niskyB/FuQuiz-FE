import { serialize } from 'object-to-formdata';

export const FormParser = (input: any): FormData => {
    let form = new FormData();

    for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key)) {
            const element = (input as any)[key];
            form.append(key, element);
        }
    }

    return form;
    // return serialize(input, { allowEmptyArrays: true });
};

export const SendFormRequestConfig = () => {
    return {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
};
