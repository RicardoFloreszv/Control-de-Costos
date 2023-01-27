import Gasto from "./Gasto"

function ListadoGastos({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) {
  return (
    <div>
        <div className="w-96 mx-auto  mt-20">
           

            { filtro ? (
                    <>
                        <h2 className="font-semibold text-2xl text-white">{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta categoría'}</h2>
                        {gastosFiltrados.map( gasto => (
                            <div>
                                <Gasto 
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            </div>

                        ))}
                    </>
                ) : (
                    <>
                        <h2 className="font-semibold text-2xl text-white ">{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
                        {gastos.map( gasto => (
                            <div className="">
                                <Gasto 
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            </div>

                        ))}
                    </>
                )
            }

        </div>
        


    </div>
  )
}

export default ListadoGastos
