import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '../../../core/components/form';
import CommonFieldWrapper from '../../../core/components/form/commonFieldWrapper';
import { Answer } from '../../../core/models/answer';
import { useStoreApi } from '../../../core/store';

interface AnswerListFormProps {
    answers: Answer[];
    label?: string;
    isRequire?: boolean;
    direction?: 'row' | 'column';
    isMultipleChoice: boolean;
    _onChangeRightAnswerBox: Function;
}

export const AnswerListForm: React.FunctionComponent<AnswerListFormProps> = ({
    isMultipleChoice,
    label,
    answers,
    direction,
    isRequire = true,
    _onChangeRightAnswerBox,
}) => {
    const { errorMessage } = useStoreApi();

    const { register } = useFormContext();
    return (
        <CommonFieldWrapper label={label} name="answers" isRequire={isRequire} direction={direction}>
            {answers.map((answer, index) => (
                <div key={'answer' + index}>
                    <TextField direction="column" label={`Answer ${index + 1}`} {...register(`answers.${index}.detail` as const)} />
                    <div className={`flex justify-end col-span-2 col-end-4 space-x-4`}>
                        <div className="flex items-center space-x-2 text-sm font-medium text-gray-900 w-fit">
                            <input
                                defaultChecked={answer.isCorrect}
                                type={isMultipleChoice ? 'checkbox' : 'radio'}
                                name="isCorrect"
                                onChange={(e) => _onChangeRightAnswerBox({ ...e }, index)}
                            />
                            <label>Right Answer</label>
                        </div>
                    </div>
                </div>
            ))}
            {Boolean(errorMessage) && <div className="text-red-500">{errorMessage}</div>}
        </CommonFieldWrapper>
    );
};
