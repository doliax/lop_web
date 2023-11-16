
import './App.css';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


function App() {

  const queryClient = new QueryClient()
  

     return (
       <QueryClientProvider client={queryClient}>
<div className="text-center">
<PaginaPrincipal/>
</div>
       </QueryClientProvider>
     )
  }

export default App;

