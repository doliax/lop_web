import React from 'react';
import { JugadasImportantes } from './JugadasImportantes';
import { Descripcion } from './Descripcion';

export const PaginaPrincipal = () => {
  return (
    <div>
       {/*Parte titulo */}
    <h1 className="m-0 text-9xl pt-14 text-cyan-600">LOP</h1>
     {/*Parte header */}
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
      <Descripcion/>
    </section>

      {/* Section Jugadas Importantes */}
    <section className='mr-24'>
      <JugadasImportantes/>
    </section>

    {/*Parte footer */}
    <footer className='pt-5'>Web hecha por Ramón Moncholí Ros</footer>
  </div>
  );
};