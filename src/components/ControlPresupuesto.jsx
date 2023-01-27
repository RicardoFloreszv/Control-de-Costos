import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"


function ControlPresupuesto({presupuesto, gastos, setGastos, setPresupuesto, setIsValidPresupuesto}) {

    const [porcentaje, setPorcentaje] = useState(0)
    const[disponible, setDisponible] = useState(0)
    const[gastado, setGastado] = useState(0)

    //UseEffect para calcular el gastado y el disponible.
    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidadGasto + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        // Calcular el porcentaje gastado
        const nuevoPorcentaje = (( ( presupuesto - totalDisponible ) / presupuesto  ) * 100).toFixed(2);
         
        setGastado(totalGastado)
        setDisponible(totalDisponible)

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
          }, 1000);

    }, [gastos])
    
 
    const formatearCantidad = (cantidad) => {

        return cantidad.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    const handleResetApp = (e) => {
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');

        if(resultado) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        } 
    }

  return (

    <>
        <div className='bg-white rounded-lg py-8 md:p-5 md:grid md:grid-cols-2 '>
            
            <div className="w-64  md:w-56 mx-auto md:mt-7 " >
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? "#EC2525" : "#3B82F6" ,
                        trailColor:"#F5F5F",
                        textColor: porcentaje > 100 ? "#EC2525" : "#3B82F6" ,
                        textSize: "9px",
                        
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                    
                />
            </div>

            <div className="flex flex-col md:mt-5 mt-10 p-2">

                    <button
                    type="button"
                    className="p-3 rounded-md border-2 px-10 bg-rose-600 text-white cursor-pointer "
                    onClick={handleResetApp}>
                        Resetear App
                    </button>
                
                    <div className=" px-10 md:mx-auto  md:my-10 p-5 bg-blue-500 rounded-md font-semibold text-white  mt-8 ">
                        <p className="text-xl  "> <span className="  text-xl mr-10">Presupuesto:  </span> {formatearCantidad(presupuesto)}</p>

                        <p className={disponible < 0 ? " text-red-600  text-xl mr-5 " : " text-xl mr-5 "}> <span className={disponible < 0 ? " text-red-600  text-xl mr-5 " : "  text-xl mr-14 "}>Disponible: </span> {formatearCantidad(disponible)}</p>

                        <p className="text-xl  "> <span className="text-xl mr-20">Gastado: </span> {formatearCantidad(gastado)}</p>
                    </div>

            </div>




        </div>
      
    </>
  )
}

export default ControlPresupuesto
