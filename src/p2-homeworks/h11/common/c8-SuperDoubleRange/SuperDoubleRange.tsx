import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    // value?: [number, number]
    value?: any


    /// my code
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChangeRange && onChangeRange(+e.currentTarget.value, +e.currentTarget.value)
    // }
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange([+e.currentTarget.value, +e.currentTarget.value])
    }



    return (
        <div className={"superDoubleRange-wrapper"}>
            {value}
            <input
                onChange={onChangeHandle}
                type={"range"}
                min={value[0]}
            >
                DoubleRange
            </input>
            <input
                onChange={onChangeHandle}
                max={value[1]}
                type={"range"}
            >
                DoubleRange
            </input>
        </div>

    )
}

export default SuperDoubleRange






// import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from "react";
// import "./SuperDoubleRange.css";
//
// let thumbsize = 14;
// // let thumbsize = 0;
//
// type SuperDoubleRangeType = {
//     min: number
//     max: number
//     onChangeRange: (value: number) => void
//     onChangeRangeMax: (value: number) => void
//
// }
// const SuperDoubleRange = (props: SuperDoubleRangeType) => {
//     const [avg, setAvg] = useState((props.min + props.max)/ 2);
//     const [minVal, setMinVal] = useState(0);
//     const [maxVal, setMaxVal] = useState(100);
//
//     const width = 300;
//     const minWidth =
//         thumbsize + ((avg - props.min) / (props.max - props.min)) * (width - 2 * thumbsize);
//     const minPercent = ((minVal - props.min) / (avg - props.min)) * 100;
//     const maxPercent = ((maxVal - avg) / (props.max - avg)) * 100;
//     const styles = {
//         min: {
//             width: minWidth,
//             left: 0,
//             "--minRangePercent": `${minPercent}%`
//         },
//         max: {
//             width: thumbsize + ((props.max - avg) / (props.max - props.min)) * (width - 2 * thumbsize),
//             left: minWidth,
//             "--maxRangePercent": `${maxPercent}%`
//         }
//     };
//
//     useLayoutEffect(() => {
//         setAvg((maxVal + minVal) / 2);
//     }, [minVal, maxVal]);
//
//     console.log(maxVal, avg, props.min, props.max, maxPercent);
//
//
//     const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
//         // onChange && onChange(e) // сохраняем старую функциональность
//         //
//         // onChangeRange && onChangeRange(+e.currentTarget.value)
//         props.onChangeRange(Number(e.currentTarget.value))
//     }
//     const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
//         // onChange && onChange(e) // сохраняем старую функциональность
//         //
//         // onChangeRange && onChangeRange(+e.currentTarget.value)
//         // setMaxVal(Number(e.currentTarget.value))
//         props.onChangeRangeMax(Number(e.currentTarget.value))
//     }
//
//
//     return (
//         <div
//             className="min-max-slider"
//             data-legendnum="2"
//             data-rangemin={props.min}
//             data-rangemax={props.max}
//             data-thumbsize={thumbsize}
//             data-rangewidth={width}
//         >
//             <label htmlFor="min">Minimum price</label>
//             <input
//                 id="min"
//                 className="min"
//                 style={styles.min}
//                 name="min"
//                 type="range"
//                 step="1"
//                 min={props.min}
//                 max={avg}
//                 value={minVal}
//                 // onChange={({ target }) => setMinVal(Number(target.value))}
//                 onChange={onChangeMin}
//             />
//             <label htmlFor="max">Maximum price</label>
//             <input
//                 id="max"
//                 className="max"
//                 style={styles.max}
//                 name="max"
//                 type="range"
//                 step="1"
//                 min={avg}
//                 max={props.max}
//                 value={maxVal}
//                 // onChange={({ target }) => setMaxVal(Number(target.value))}
//                 onChange={onChangeMax}
//             />
//         </div>
//     );
// };
// export default SuperDoubleRange
// export default function App() {
//     return (
//         <div className="App">
//             <h1>Hello CodeSandbox</h1>
//             <h2>Start editing to see some magic happen!</h2>
//             <SuperDoubleRange min={300} max={3000} />
//         </div>
//     );
// }
