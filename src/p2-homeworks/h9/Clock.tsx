import React, {useEffect, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop

        clearTimeout(timerId);
    }
    // useEffect(() => {
    //     clearTimeout(timerId);
    // }, []);
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }



    const onMouseEnter = () => {
        // show

        // my code
        setShow(!show)
    }
    const onMouseLeave = () => {
        // close
        setShow(!show)
    }

    // const stringTime = 'Time' // fix with date
    // const stringDate = 'Date' // fix with date
    const stringTime = new Date().toLocaleTimeString();
    const stringDate = new Date().toLocaleDateString();

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
