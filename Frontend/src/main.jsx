import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Authprovider } from './context/Authcontext.jsx'

createRoot(document.getElementById('root')).render(
<Authprovider>

  <BrowserRouter>
  <App/>
  </BrowserRouter>
</Authprovider>
)
