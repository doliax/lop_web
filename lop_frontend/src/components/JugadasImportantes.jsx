import React, { useEffect } from 'react';

import axios from 'axios';

export const JugadasImportantes = () => {


  const baseURL = "http://localhost:4000/jugadas";

  const [post, setPost] = React.useState(null);
//Hay que poner los datos en el setPost mediante el useEffect!!!!!!!!
  React.useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);
  
  React.useEffect(() => {
    console.log(post);
  }, [post]);
  
  {/*const { data: jugadas, isLoading } = useQuery('jugadas', async () => {
    const response = await axios.get('http://localhost:3000/jugadas');
    return response.data;
  });

  useEffect(() => {
    // Puedes realizar acciones adicionales cuando cambian los datos, si es necesario
    console.log('Datos actualizados:', jugadas);
  }, [jugadas]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

 return (
    <div className='m-0 inline-flex pt-20'>
      <h2>Test</h2>
      {jugadas.map((x) => (
        <div key={x._id} className='pl-14'>
          <iframe className='h-96 w-96' src={x.src} title={x.titulo} frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
          <h3 className='font-thin text-xl mt-3'>{x.titulo}</h3>
        </div>
      ))}
    </div>
  );
*/}


return (
  <div className='m-0 inline-flex pt-20'>
    {/*Si hay posts mapealos si no mete un div */}
    {post ? (
      post.map((x) => (
        <div key={x._id} className='pl-14'>
          <iframe className='h-96 w-96' src={x.video} title={x.nombre} frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
          <h3 className='font-thin text-xl mt-3'>{x.nombre}</h3>
        </div>
      ))
    ) : (
      <div>Cargando...</div>
    )}
  </div>
);

  
 
};
