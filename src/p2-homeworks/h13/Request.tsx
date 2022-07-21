import React, {useState} from 'react';
import {requestAPI} from "./api/hw13-api";
import Button from "./Button";
import CheckBox from "./CheckBox";


const Request = () => {

    let [isCheck, setIsCheck] = useState<boolean>(false)

    const setBoxHandle = (value: boolean) => {
        setIsCheck(value)
        console.log(value)
    }
    const setBoxValue = () => {
        requestAPI.post(isCheck)
            .then((res) => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <Button onClick={setBoxValue}/>
            <CheckBox isChecked={isCheck} onChange={(value) => setBoxHandle(value)}/>
        </div>
    );
};

export default Request;