import React from 'react';
import { JugadasImportantes } from './JugadasImportantes';
import { Descripcion } from './Descripcion';


export const PaginaPrincipal = () => {
  return (
    <div>
   
    
    {/* Section Description */}
    <section className='mt-10 bg-slate-300 m-0 md:w-50 text-center'>
      <Descripcion/>
    </section>

      {/* Section Jugadas Importantes */}
    <section className='mr-24'>
      <JugadasImportantes/>
    </section>

   

        
  </div>
  );
};