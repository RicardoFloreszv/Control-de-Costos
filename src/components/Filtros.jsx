import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {


    return (
        <div className="md:w-1/2 md:mx-auto px-10 mt-20 ">
            <form className='p-5 bg-white rounded-md text-center  font-bold'>
                <div className="">
                    <label>Filtrar Gastos  </label>
                    <select
                        className='border-2 border-black md:p-1 md:px-10 md:ml-10'
                        value={filtro}
                        onChange={e => setFiltro(e.target.value)}
                    >
                        <option value="">-- Todas las Categorías --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
