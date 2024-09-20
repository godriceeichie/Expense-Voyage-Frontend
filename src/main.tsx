import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { AuthContextProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MantineProvider>
  </StrictMode>,
)
