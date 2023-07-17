import '../assets/Exercise2.css'
import { useState } from "react";

const Exercise2 = () => {
    const [age, setNumber] = useState(5)
    const [inputValue, setInputvalue] = useState("")

    const increaseAge = () => {
        setNumber(age + 1)
    }

    const handleInputOnchange = (event) => {
        setInputvalue(event.target.value)
    }

    const decreaseAge = () => {
        setNumber(age - 1)
    }
    return (
        <div className="container">
            <div className='vertical-center'>
                <div className='iteration'>
                    <button onClick={decreaseAge}>Decrease Number</button>
                    <span>{age}</span>
                    <button onClick={increaseAge}>Increase Number</button>
                </div>
                <div className='input-value'>
                    <input onChange={handleInputOnchange} />
                </div>
                <span>{inputValue}</span>
            </div>

        </div>
    )
}

export default Exercise2