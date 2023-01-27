import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import Filtros from './components/Filtros'

import { generarId } from './helpers'

import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])



  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0)
      setModal(true)

  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presupuestoLS > 0 ) {
      setIsValidPresupuesto(true)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if(filtro) {
        const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
        setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro]);


  const handleNuevoGasto = () => {
    setGastoEditar({})
    setModal(true)

  }

  const guardarGasto= gasto  => {

    if(gasto.id){
      //Si existe gasto.id estamos Actualizando, entonces comprobamos que sean igual y que a gastos se le asigne el nuevo gasto. osea lo que editamos.
      const gastosActualizados = gastos.map( gastoState => gasto.id === gastoState.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    }
    else{
      //Serie un nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }
  }

  const eliminarGasto= id =>  {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id );
    setGastos(gastosActualizados);

  }


  return (
    <>
      <div className='  lg:w-1/2 mx-auto'>
        <Header 
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          gastos={gastos}
          setGastos={setGastos}/>

        {isValidPresupuesto && (
          <>
            <main>

          
              <Filtros 
                filtro={filtro}
                setFiltro={setFiltro}/>
            
              <ListadoGastos
                gastos={gastos}
                setGastoEditar= {setGastoEditar}
                eliminarGasto={eliminarGasto}
                filtro={filtro}
                gastosFiltrados={gastosFiltrados}/>
                

            </main>


            <div className=' fixed bottom-0 right-0 mr-10  '>
              <img src={IconoNuevoGasto} alt="IconoAgregar" width={70}  
                  className="  mr-10 mb-10 cursor-pointer"
                  onClick={handleNuevoGasto} 
                  data-modal-target="defaultModal" data-modal-toggle="defaultModal"
                  />              
            </div>
          </>
        ) }

        {modal && <Modal 
                    setModal={setModal}
                    guardarGasto={guardarGasto}
                    gastoEditar={gastoEditar}
                    setGastoEditar={setGastoEditar}
                    /> }

      </div>

    </>
  )
}

export default App
