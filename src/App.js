import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Main from './components/Layout/Main';
import Login from './components/Login';
import Order from './components/Order';
import ProtectedRoute from './components/Protected/ProtectedRoute';
import Register from './components/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>
        },
        {
          path: "/order",
          element: <ProtectedRoute><Order></Order></ProtectedRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
} 

export default App;
