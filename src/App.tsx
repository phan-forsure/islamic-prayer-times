
import Call from './components/Call';
import './style/app.css';
import { 
  QueryClient,
  QueryClientProvider,
 } from '@tanstack/react-query';

 const queryClient = new QueryClient();
function App() {
  return (
    <div className="app">
      <h1>Islamic Prayer Times Application</h1>
      <QueryClientProvider client={queryClient}>
        <Call />   
      </QueryClientProvider>
    </div>
  )
}

export default App
