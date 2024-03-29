import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}> 
    <MainProducts />
    </QueryClientProvider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		
	</React.StrictMode>
)