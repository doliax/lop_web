// JugadasList.tsx
import { useQuery } from 'react-query';
import axios from 'axios';

const JugadasList = () => {
  const { data: jugadas, isLoading } = useQuery('jugadas', async () => {
    const response = await axios.get('127.0.0.1:27017/lop_jugadas');
    return response.data;
  });

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <ul>
      {jugadas.map((jugada) => (
        <li key={jugada.id}>
          {jugada.nombre}
        </li>
      ))}
    </ul>
  );
};

export default JugadasList;