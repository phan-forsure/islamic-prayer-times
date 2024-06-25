
import Call from './components/Call';
import Clock from './components/Clock';
import './style/output.css';
import { 
  QueryClient,
  QueryClientProvider,
 } from '@tanstack/react-query';

 const queryClient = new QueryClient();

function App() {
  return (
    <div className="app m-5 mx-80 bg-slate-800 text-slate-300 max-lg:mx-40 max-md:mx-8 max-sm:mx-4">
      <h1 className='p-8 font-bold text-2xl text-center bg-slate-700'>Islamic Prayer Times Application</h1>
      <QueryClientProvider client={queryClient}>
        <Clock />
        <Call />   
      </QueryClientProvider>
    </div>
  )
}

export default App
