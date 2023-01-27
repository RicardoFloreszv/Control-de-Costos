import { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'


function Modal({setModal, guardarGasto, gastoEditar, setGastoEditar}) {

    const[mensaje, setMensaje] = useState("")

    const [nombreGasto, setNombreGasto] = useState("")
    const [cantidadGasto, setCantidadGasto] = useState(0)
    const [categoria, setCategoria] = useState("")
    const [id, setId] = useState("")
    const [fecha, setFecha] = useState("")



    useEffect(() => {

        if(Object.keys(gastoEditar).length > 0){

            setNombreGasto(gastoEditar.nombreGasto)
            setCantidadGasto(gastoEditar.cantidadGasto)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
            

    }, [])
    

    const ocultarModal = () => {
        setModal(false)
        setGastoEditar({})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombreGasto, cantidadGasto, categoria].includes("")){

            setMensaje("Fallo la validacion")

            setTimeout(() => {
                setMensaje("")
            }, 1000);
            return;
        }

        guardarGasto({nombreGasto,cantidadGasto,categoria, id, fecha})

        setModal(false)
    }


  return (
    <>
        <div className=" bg-black w-screen h-screen fixed top-0 left-0 opacity-95 ">

            <div className=" ">
                <img src={CerrarBtn} alt="Cerrar modal" width={60} 
                    className="absolute top-0 right-0 mr-10 mt-10 cursor-pointer"
                    onClick={ocultarModal} />
            </div>



            <div className='my-96  w-1/2 mx-auto bg-white rounded-xl'>
                <form action="" onSubmit={handleSubmit} >



                    <h1 className='p-5 text-center font-bold text-xl'> {Object.keys(gastoEditar).length > 0 ? "Editor" : "Nuevo Gasto" }</h1>



                <div className=' bg-blue-900 p-4 rounded-b-md'>
                    <div className='p-4'>
                        <label htmlFor="nombreGasto" className='text-xl text-white'>Nombre Gasto</label>
                        <input type="text" name="nombre" id="nombre" placeholder='Añade un Nombre de tu Gasto'
                                    className='w-full p-2 rounded-md mt-3 text-center text-xl'
                                    value={nombreGasto}
                                    onChange={(e) => setNombreGasto(e.target.value)} />
                    </div>

                    <div className='p-4'>
                        <label htmlFor="cantidad" className='text-xl text-white'>Cantidad</label>
                        <input type="number" name="cantidad" id="cantidad" placeholder='Añade una cantidad'
                                    className='w-full p-2 rounded-md mt-3 text-center text-xl'
                                    value={cantidadGasto}
                                    onChange={(e) => setCantidadGasto(Number(e.target.value))} />                        
                    </div>

                    <div className='p-4'>
                        <label htmlFor="categoria" className='text-xl text-white'>Categoria del Gasto</label>
                        <select name="categoria" id="categoria" className='w-full p-2 rounded-md mt-3 text-center text-xl'
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)} > 

                            <option value="">-- Seleccione --</option>
                            <option value="ahorro">Ahorro</option>
                            <option value="comida">Comida</option>
                            <option value="casa">Casa</option>
                            <option value="gastos">Gastos Varios</option>
                            <option value="ocio">Ocio</option>
                            <option value="salud">Salud</option>
                            <option value="suscripciones">Suscripciones</option>

                        </select>                     
                    </div>    

                    <div className='p-4'>
                        <input type="submit" value= {Object.keys(gastoEditar).length > 0 ? "Editar Gasto" : "Añadir Gasto" }
                            className='p-3 mt-5 bg-pink-400 rounded-md w-full text-xl cursor-pointer'/>                    
                    </div> 

                    {mensaje && <Mensaje><p>{mensaje}</p></Mensaje> }


                </div>


                </form>   
            </div>


        </div>
    </>
  )
}

export default Modal