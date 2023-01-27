import { useState } from 'react'

function Mensaje({children}) {
  return (
    <>
        <div className=' bg-red-500 rounded-md p-3 text-center font-semibold text-lg '>
            {children}
        </div>
      
    </>
  )
}

export default Mensaje
