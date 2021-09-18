// The number pad which includes all buttons

import React, { useState } from 'react'

export default function ButtonPanel(props) {
  const {current,
    setCurrent,
    operation,
    setOperation,
    previous,
    setPrevious} = props

  const handleClick = (e) => {
    const value = e.target.innerHTML

    // Others logic
    if (value === "AC") {  // Clears the inputs
      setCurrent("")
      setPrevious("")
      setOperation("")
    } else if (value === "DEL") {  // Deletes the last digit of current
        setCurrent(current.slice(0, -1))
    } else if (value === "=") {  // Does the actual math
      if (current !== "" && previous !== "") {
        if (operation === "+")
          setCurrent((parseFloat(previous) + parseFloat(current)).toString())
        else if (operation === "-") {
          setCurrent((parseFloat(previous) - parseFloat(current)).toString())
        } else if (operation === "*") {
          setCurrent((parseFloat(previous) * parseFloat(current)).toString())
        } else if (operation === "/") {
          setCurrent((parseFloat(previous) / parseFloat(current)).toFixed(2).toString())
        }
      }
    } else if (value === "." && !current.includes(value)) {  // Prevents the repetition of "."
        if (current === "") {
          setCurrent("0.")
        } else {
          setCurrent(current + value)
        }
    }

    // Digits logic
    if (value === "0" && current === "0") {
      return  // Prevents a number from starting with 00
    }

    if (value >= 0 && value <=9) {
      setCurrent(current + value)
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
        if (current !== "") {  // Prevents the operation from being the first input
          setOperation(value)
          setPrevious(current)
          setCurrent("")
        }
    }
  }

  return (
    <>
      <button className="two" onClick={(e) => handleClick(e)}>AC</button>
      <button onClick={(e) => handleClick(e)}>DEL</button>
      <button onClick={(e) => handleClick(e)}>/</button>
      <button onClick={(e) => handleClick(e)}>1</button>
      <button onClick={(e) => handleClick(e)}>2</button>
      <button onClick={(e) => handleClick(e)}>3</button>
      <button onClick={(e) => handleClick(e)}>*</button>
      <button onClick={(e) => handleClick(e)}>4</button>
      <button onClick={(e) => handleClick(e)}>5</button>
      <button onClick={(e) => handleClick(e)}>6</button>
      <button onClick={(e) => handleClick(e)}>+</button>
      <button onClick={(e) => handleClick(e)}>7</button>
      <button onClick={(e) => handleClick(e)}>8</button>
      <button onClick={(e) => handleClick(e)}>9</button>
      <button onClick={(e) => handleClick(e)}>-</button>
      <button onClick={(e) => handleClick(e)}>.</button>
      <button onClick={(e) => handleClick(e)}>0</button>
      <button className="two" onClick={(e) => handleClick(e)}>=</button>
    </>
  )
}
