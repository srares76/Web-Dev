// The Panel where the results are shown

import React, { useState } from 'react'

export default function Panel(props) {
  const {current, previous, operation} = props
  return (
    <div className="output">
      <span className="previous">{previous}{operation}</span>
      <span className="current">{current}</span>
    </div>
  )
}
