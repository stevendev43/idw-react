import React from 'react'

const CrudTable = ({ alojamientos, deleteAlojamiento, setEditData }) => {
  return <>
    <h5 className="text-2xl font-bold text-gray-800 mb-8 mt-12">Alojamientos actuales</h5>
    <table className='w-[1300px] text-center justify-center mx-auto'>
        <tbody>
          <tr className='bg-[#CDFADB]'>
            <td className='p-4 text-gray-700 font-semibold border border-gray-600'>Nombre</td>
            <td className='p-4 text-gray-700 font-semibold border border-gray-600'>Tipo</td>
            <td className='p-4 text-gray-700 font-semibold border border-gray-600'>Descripcion</td>
            <td className='p-4 text-gray-700 font-semibold border border-gray-600'>Cantidad de dormitorios</td>
            <td className='p-4 text-gray-700 font-semibold border border-gray-600'>Cantidad de baños</td>
            <td className='p-4 text-gray-700 font-semibold border border-gray-600'>Precio por dia</td>
            <td className='p-4 text-gray-700 font-semibold border border-gray-600'>Valoracion</td>
          </tr>
          {
            alojamientos.length == 0 ? <tr><td>No hay datos</td></tr>
            : alojamientos.map((alojamiento, index) => {
              return  <tr key={index}>
                        <td className='border border-gray-600'>{alojamiento.alojamiento}</td>
                        <td className='border border-gray-600'>{alojamiento.tipo}</td>
                        <td className='border border-gray-600'>{alojamiento.descripcion}</td>
                        <td className='border border-gray-600'>{alojamiento.cdormitorios}</td>
                        <td className='border border-gray-600'>{alojamiento.cbaños}</td>
                        <td className='border border-gray-600'>{alojamiento.ppdia}</td>
                        <td className='border border-gray-600'>{alojamiento.valoracion}</td>
                        <td className='flex w-100'>
                          <button className='w-1/2 bg-transparent hover:bg-[#CDFADB] text-gray-700 font-semibold hover:text-gray-800 py-2 px-6 border border-gray-700 hover:border-none text-xl border-opacity-50 rounded text-opacity-80 mr-2 ml-2' onClick={() => setEditData(alojamiento)}>Actualizar</button>
                          <button className='w-1/2 bg-transparent hover:bg-red-500 text-gray-700 font-semibold hover:text-gray-800 py-2 px-6 border border-gray-700 hover:border-red-500 text-xl border-opacity-50 rounded text-opacity-80' onClick={() => deleteAlojamiento(alojamiento.id)}>Eliminar</button>
                        </td>
                      </tr>
                    })
          }
      </tbody>  
    </table>
  </>
}

export default CrudTable