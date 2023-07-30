
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './pages/Routes';
import NavBar from './components/NavBar';


const router = createBrowserRouter(routes);

function App() {
  return (
    <div className='app'>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
