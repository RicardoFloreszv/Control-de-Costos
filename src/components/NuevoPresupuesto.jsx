import { useState } from 'react'
import Mensaje from "./Mensaje";

function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValidPresupuesto}) {

    const [mensaje, setMensaje] = useState("")


    const handlePresupuesto =  (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0 ){
            setMensaje("Presupuesto invalido")
            return
        } 

        setMensaje("")
        setIsValidPresupuesto(true)

    }


  return (
    <>
        <form onSubmit={handlePresupuesto}> 
        {mensaje && <Mensaje>{mensaje}</Mensaje> }
            <div className="bg-gray-200  rounded-md   mt-5 p-20">
                <p className="text-blue-800 text-2xl text-center
                                mb-10">
                                Definir Presupuesto</p>            
                
                <input type="number" name="presupuesto" id="presupuesto" placeholder="Coloca tu presupuesto " 
                            className=" w-full p-3 rounded-md text-center font-semibold text-2xl"
                            value={presupuesto}
                            onChange={e => setPresupuesto(Number(e.target.value))}/>
                
                <input type="submit" value="Añadir"
                        className="w-full p-4 bg-blue-800 text-white mt-5 rounded-md cursor-pointer text-xl font-semibold" />
            </div>

           

        </form>

      
    </>
  )
}

export default NuevoPresupuesto
