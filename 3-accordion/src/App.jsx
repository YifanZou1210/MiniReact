// App.jsx
import React from 'react'
import { Accordion } from './Accordion'
import accordionData from './accordionData'
function App () {

  return (
    <div className="bg-blue-200 w-full h-screen ">
      {/* <h1>Basic Accordion Component</h1> */}
      <Accordion className="w-3xs" data={accordionData} />
    </div>
  )
}

export default App;

