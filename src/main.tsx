import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient , QueryClientProvider } from '@tanstack/react-query'
import {RecoilRoot} from 'recoil'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/routes.tsx'

const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
    <RouterProvider router={router} />
    </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
)
