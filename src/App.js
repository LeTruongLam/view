import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Menu from "./components/Menu"
import "./App.css"
const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
    
    ],
  },
  
]);
function App() {
  return (
    <div className="app">
      <div class="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
export default App;
