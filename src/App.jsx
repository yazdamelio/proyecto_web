import './App.css'
import { DatosProvider } from './contexts/DatosContext'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Contextos
import { LoginProvider } from './contexts/LoginContext'
import { AdminProvider } from './contexts/AdminContext'
import LogoutContext from './contexts/LogoutContext'
import AdminLogoutContext from './contexts/AdminLogoutContext'

//Componentes
import Navbar from './components/Navbar'

//Páginas
import Inicio from './pages/Inicio'
import Productos from './pages/ProductosList'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import Error404 from './pages/Error404'
import Login from './pages/Login'
import LoginAdmin from './pages/LoginAdmin'
import Privado from './pages/Privado'
import PanelAdmin from './pages/PanelAdmin'

//Java Script and XML
export default function App() {

  return (
    <AdminProvider>
      <LoginProvider>
        <DatosProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/login' element={<Login />} />
              <Route path='/loginAdmin' element={<LoginAdmin />} />
              <Route path='*' element={<Error404 />} />
              <Route path='/privado' element={
                <LogoutContext> {/*si esta logueado ve el contenido*/}
                  <Privado />
                </LogoutContext>
              }/>
              <Route path='/panelAdmin' element={
                <AdminLogoutContext> {/*si es administrador ve el contenido*/}
                  <PanelAdmin />
                </AdminLogoutContext>
              }/>
            </Routes>
          </BrowserRouter>
        </DatosProvider>
      </LoginProvider>
    </AdminProvider>
  )

}
