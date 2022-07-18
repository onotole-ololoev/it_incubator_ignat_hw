import React, {ChangeEvent} from 'react';

type CheckBoxType = {
    isChecked: boolean
    onChange: (value: boolean) => void
}

const CheckBox = (props: CheckBoxType) => {

    const onchangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        // props.onChange(!!e.currentTarget.value)
        console.log('click')
        props.onChange(!props.isChecked)
    }

    return (
        <input type="checkbox" checked={props.isChecked} onChange={onchangeHandle}/>
    );
};

export default CheckBox;