// Parent component -> the entire calculator

import React, {useState} from 'react'
import ButtonPanel from './ButtonPanel'
import Panel from './Panel'

export default function Calculator() {
  const [current, setCurrent] = useState("")
  const [previous, setPrevious] = useState("")
  const [operation, setOperation] = useState("")

  return (
    <div className="calculator">
      <Panel
        current={current}
        previous={previous}
        operation={operation}
      />
      <ButtonPanel
        current={current}
        setCurrent={setCurrent}
        operation={operation}
        setOperation={setOperation}
        previous={previous}
        setPrevious={setPrevious}
      />
    </div>
  )
}
