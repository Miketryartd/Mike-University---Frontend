import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from "../src/pages/Home.tsx";
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import Dashboard from './pages/Dashboard.tsx'
import { AuthProvider } from './context/auth.tsx'
import AnnouncementDetail from './pages/AnnouncementDetail.tsx'
import Profile from './pages/Profile.tsx'
import Create from './pages/Create.announcement.tsx'
import MakeClass from './pages/Create.class.tsx'
import MakeAnnouncement from './pages/Create.announcement.tsx'
import Classes from './pages/Classes.tsx'

function ProtectedRoute({children}: {children: ReactNode}){
  return <AuthProvider>{children}</AuthProvider>
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "/Home",
    element: <Home/>
  },

  {
    path: "/Register",
    element: <Register/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Dashboard",
    element: <ProtectedRoute>
      <Dashboard/>
    </ProtectedRoute>
  },
  {
    path: "/Detail/:id",
    element: <ProtectedRoute>
      <AnnouncementDetail/>
    </ProtectedRoute>
  },
  {

    path: "/Profile/:id",
    element: <ProtectedRoute>
      <Profile/>
    </ProtectedRoute>
  },
  {
    path: "/Create/Announcement",
    element: <ProtectedRoute>
      <MakeAnnouncement/>
    </ProtectedRoute>
  },
    {
    path: "/Create/Class",
    element: <ProtectedRoute>
       <MakeClass/>
    </ProtectedRoute>
  },
  {
    path: "/Classes",
    element: <ProtectedRoute>
      <Classes/>
    </ProtectedRoute>
  }

])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
