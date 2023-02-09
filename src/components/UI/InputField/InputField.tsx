import React, {FC, memo} from 'react';
import cl from './inputField.module.scss';

interface IInputFieldProps {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    propRef?: React.Ref<HTMLInputElement>,
    placeholder?: string,
    type?: string,
}

const InputField: FC<IInputFieldProps> = memo(({
                                              propRef,
                                              placeholder,
                                              value,
                                              setValue,
                                              type,
}) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <input
            className={cl.input}
            ref={propRef}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    );
});

export default InputField;