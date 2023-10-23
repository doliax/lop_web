import React from 'react'

export const JugadasImportantes = () => {

   //Declaración del objeto (para testear antes del backend)
    const jugadas = [
        {
        id: 1,
        src: 'https://www.youtube.com/embed/xAFmRdSSyb8?autoplay=1&mute=0',
        titulo: 'PDD Rumble'
        },
        {
            id: 2,
            src: 'https://www.youtube.com/embed/ZPCfoCVCx3U?autoplay=1&mute=0',
            titulo: 'Zed Jugada Legendaria'
            },
]

    //Cards con las jugadas
  return (
    <div className='m-0 inline-flex pt-20'>
        {/*Recorro el array de objetos  */}
        {jugadas.map((x) => (
        <div key={x.id} className='pl-14'>
         <iframe className='h-96 w-96' src={x.src} title={x.titulo} frameborder="0" allowfullscreen="allowfullscreen"></iframe>
          <h3 className='font-thin text-xl mt-3'>{x.titulo}</h3>
        </div>
      ))}
    </div>
  )
}
