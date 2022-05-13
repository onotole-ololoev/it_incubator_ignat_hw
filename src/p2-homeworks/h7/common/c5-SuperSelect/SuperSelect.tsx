import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e);
        const currentOption: any = options?.find( o => o === e.currentTarget.value)
        onChangeOption?.(currentOption);
    }

    const mappedOptions: any[] = options?.map((option, i) =>  <option key={i} >{option}</option>) || []

    return (
        <select onChange={onChangeCallback} value={restProps.value} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
