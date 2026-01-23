import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </AppProvider>,
);
