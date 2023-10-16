import React from 'react';
import { JugadasImportantes } from './JugadasImportantes';

export const PaginaPrincipal = () => {
  return (
    <div>
    <h1 className="m-0 text-9xl pt-14 text-cyan-600">LOP</h1>
    <header className='m-0 pt-14'>
      <nav>
        <ul className="inline-flex pl-8">
          <li className='text-7xl font-mono px-10  hover:border-b border-gray-400 cursor-pointer'>Jugadas</li>
          <li className="text-7xl font-mono px-10 hover:border-b border-gray-400 cursor-pointer">Contacto</li>
        </ul>
      </nav>
    </header>
    {/* Section Description */}
    <section className='mt-10 bg-slate-300 m-0 md:w-50 text-center'>
      <h2 className='font-bold text-4xl'>¿Qué es LOP?</h2>
      <p className='pb-5 pt-2'>Lol Old Plays (LOP) que recopila jugadas antiguas de LoL desde S4 hacia atrás.</p>
      <h2 className='font-bold text-4xl'>¿Qué tipo de jugadas admite?</h2>
      <p className='pb-5 pt-2'>Tanto de profesionales como de randoms</p>
      <h2 className='font-bold text-4xl'>¿Se puede votar?</h2>
      <p className='pb-5 pt-2'>Si, incluye un sistema de votación</p>
      <h2 className='font-bold text-4xl'>¿Te ha gustado la jugada?</h2>
      <p className='pb-5 pt-2'>No dudes en darle like al canal del video en cuestión ;)</p>
    </section>

      {/* Section Jugadas Importantes */}
    <section className='mr-24'>
      <JugadasImportantes/>
    </section>
  </div>
  );
};