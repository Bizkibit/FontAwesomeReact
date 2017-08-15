import React from 'react'
import {Fa} from './Fa'

let App = function(props) {
  return (
    <div>
      <Fa kind="camera-retro"/>
      <Fa kind="coffee" spin={true} />
    </div>
  )
}

export default App;
