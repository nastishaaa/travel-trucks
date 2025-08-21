import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import { lazy } from 'react'
import ReviewsUI from './components/CatalogPageUI/ReviewsUI/ReviewsUI';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const CatalogItemPage = lazy(() => import('./pages/CatalogItemPage/CatalogItemPage'));
const FeaturesUI = lazy(() => import('./components/CatalogPageUI/FeaturesUI/FeaturesUI'));

function App() {

  const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'catalog', element: <CatalogPage />, key: Date.now() },
      {
        path: 'catalog/:id',
        element: <CatalogItemPage />, 
        children: [
          { index: true, element: <FeaturesUI /> },
          {path: 'features', element: <FeaturesUI /> },
          {path: 'reviews' , element: <ReviewsUI /> }
        ]
      },
    ]
  }
])

  return (
    <>
      <Toaster position='top' />
      <RouterProvider router={router} />
    </>
  )
}

export default App
