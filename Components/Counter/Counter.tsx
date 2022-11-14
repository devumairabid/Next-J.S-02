import { useState } from "react";
import Button from "../Button/Button";



const Counter=()=> {
    const [countValue, setCountValue] = useState<number>(1)

    const onClickIncrementHandler = () => {
       

        setCountValue(countValue + 1)
       
    }
    const onClickDecrementHandler = () => {
       
        setCountValue(countValue - 1)
       

    }
    console.log("above the return");

    return (
        <div>
            Counter App - var value {countValue}
            <div>
                <Button buttonTitle="-" onClickHandler={onClickDecrementHandler} />
                {countValue}
                <Button buttonTitle="+" onClickHandler={onClickIncrementHandler} />
            </div>
        </div>
    )
}
export default Counter