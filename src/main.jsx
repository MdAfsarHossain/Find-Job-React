import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import './index.css'
import MainLayouts from './layouts/MainLayouts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        // loader: () => fetch('jobs.json'),
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/job-details/:jobId',
        element: <JobDetails></JobDetails>,
        // loader: () => fetch('jobs.json'),
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
    {/* <ToastContainer /> */}
  </StrictMode>,
)
