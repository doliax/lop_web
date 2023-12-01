
import './App.css';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Link} from 'react-router-dom';
import Contacto from './components/Contacto';

function App() {

  const queryClient = new QueryClient()
  

     return (
       <QueryClientProvider client={queryClient}>
<div className="text-center">
      {/*Parte titulo */}
      <h1 className="m-0 text-9xl pt-14 text-cyan-600">LOP</h1>
     {/*Parte header */}
    <header className='m-0 pt-14'>
      <nav>
        <ul className="inline-flex pl-8">
       
          <li className='text-7xl font-mono px-10  hover:border-b border-gray-400 cursor-pointer'><a href='/jugadas'>Jugadas</a></li>
          <li className="text-7xl font-mono px-10 hover:border-b border-gray-400 cursor-pointer"><a href='/contacto'>Contacto</a></li>
        </ul>
      </nav>
    </header>

   
  {/* Envuelve solo el bloque de Routes con BrowserRouter */}
  <BrowserRouter>
          <Routes>
            <Route path="/jugadas" element={<PaginaPrincipal />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
  </BrowserRouter>


   {/*Parte footer */}
   <footer className='pt-5'>Web hecha por Ramón Moncholí Ros</footer>

</div>
       </QueryClientProvider>
     )
  }

export default App;

