import React from 'react'
import { Outlet} from "react-router-dom";

const BlankPage = () => {
    
  return (
    <div>
         <Outlet />
    </div>
  )
}

export default BlankPage