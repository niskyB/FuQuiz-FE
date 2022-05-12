import type { NextPage } from 'next';
import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import * as joi from 'joi';

// --- components
import { FormWrapper } from '../src/core/components/form';
import { FormErrorMessage } from '../src/core/components/form/formErrorMessage';
import { TextField } from '../src/core/components/form/textField';
import { RadioField } from '../src/core/components/form/radioField';
import { SelectField } from '../src/core/components/form/selectField';

interface TestDto {
    username: string;
    hello: string;
    lll: string;
}

const schema = joi.object<TestDto>({});

const defaultValues: TestDto = {
    username: '',
    hello: '24',
    lll: '24',
};

const Home: NextPage = () => {
    const methods = useForm({
        defaultValues,
        resolver: joiResolver(schema),
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    return (
        <div>
            <FormWrapper methods={methods}>
                {/* <TextField name="username" label="Username" /> */}
                <TextField name="username" label="Username" type="file" />
                <RadioField
                    name="hello"
                    label="test"
                    values={[
                        { label: 'test', value: '23' },
                        { label: 'tes3t', value: '24' },
                    ]}
                />
                <FormErrorMessage />
                <SelectField
                    name="lll"
                    label="test"
                    values={[
                        { label: 'test', value: '23' },
                        { label: 'tes3t', value: '24' },
                    ]}
                />
            </FormWrapper>
            <h1 className="text-3xl font-bold underline">{process.env.MY_ENV}</h1>
        </div>
    );
};

export default Home;
