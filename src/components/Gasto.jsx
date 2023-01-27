import { useEffect } from 'react';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import { formatearFecha } from "../helpers";

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'



const diccionarioIconos = {
    ahorro : IconoAhorro,
    comida : IconoComida,
    casa : IconoCasa,
    gastos : IconoGastos,
    ocio : IconoOcio,
    salud : IconoSalud,
    suscripciones : IconoSuscripciones
}

    
function Gasto({gasto, setGastoEditar, eliminarGasto}) {

    const {categoria, nombreGasto, cantidadGasto, id, fecha} = gasto;




    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => eliminarGasto(id)}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

  return (
    
    <SwipeableList>
        <SwipeableListItem
                            leadingActions={leadingActions()}
                            trailingActions={trailingActions()}
        >
        <div className=''>
            <div className="mt-10 bg-gray-300 rounded-md p-3">
                <div className="flex justify-between p-4 font-semibold">
                    <div>
                        <img src={diccionarioIconos[categoria]} alt="imagen-categoria" width={50} />
                        <h1 className="text-xl text-gray-500 ">{categoria}</h1>
                        <h1 className="text-xl ">{nombreGasto}</h1>
                        <h1>Agregado el: {formatearFecha(fecha)}</h1>
                    </div>

                    <h1 className="pt-2 text-2xl">$ {cantidadGasto}</h1>
                </div>

            </div>            
        </div>

        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto