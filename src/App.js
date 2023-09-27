import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Component/Main';
import Login from './Component/Login';
import Resgistar from './Component/Resgistar';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registar',
          element:<Resgistar></Resgistar>
        }
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider  router={router}> </RouterProvider>
    </div>
  );
}

export default App;
