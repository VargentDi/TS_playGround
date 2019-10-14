import React, { useState } from 'react'
import PopUp from "./components/popUp";

interface Props {
  name:string
}

const App: React.FC<Props> = (Props) => {
  const [DialogOpenState, setDialogOpenState] = useState<boolean  >(false)
  const thisResetHandler=()=>{
    alert(' you are trying to rest')
  }
  console.log(Props.name)
  return (
    <div>
      <div>
        <ul>
          <li onClick={e=>setDialogOpenState(true)}>
            this is the row 1 and the current state for rowClicker event is {`${DialogOpenState}`}
          </li>
          <li onClick={()=>{thisResetHandler();setDialogOpenState(false)}}>
            this is the row 2 and i am using this to display the pop up window
          </li>
        </ul>
      </div>
      <PopUp SetDialog ={DialogOpenState} handleClose={(prev)=>{setDialogOpenState(!prev)}} User={["di"]}/>
    </div>
  )
}

export default App
