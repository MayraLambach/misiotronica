
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Store from './Store'
import NotFound from './NotFound'

const routes =
  [
    {path:'/', element:<Home />},
    {path:'/acerca', element:<About />},
    {path:'/contacto', element:<Contact />},
    {path:'/venta', element:<Store />},
    {path:'*', element:<NotFound />},
  ]
;

export default routes;