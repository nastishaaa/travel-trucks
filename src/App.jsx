import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import { lazy } from 'react'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const CatalogItemPage = lazy(() => import('./pages/CatalogItemPage/CatalogItemPage'));

function App() {

  const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'catalog', element: <CatalogPage /> },
      {path: 'catalog/:id', element: <CatalogItemPage />},
    ]
  }
])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
