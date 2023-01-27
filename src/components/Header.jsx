import { useState } from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from "./NuevoPresupuesto"

function Header({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos}) {
  return (
    <>
        <div className="w-3/4 mx-auto">
            <h1 className="text-center text-4xl font-semibold text-white 
                        my-20">
                    Control de Gastos</h1>

            { isValidPresupuesto ? (

                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  gastos={gastos}
                  setGastos={setGastos}
                  setPresupuesto={setPresupuesto}
                  setIsValidPresupuesto={setIsValidPresupuesto}/>


              ) :  (
                <NuevoPresupuesto 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
                />        
              )
            }
 
        </div>


    </>
  )
}

export default Header
