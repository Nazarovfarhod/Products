//rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//LayOuts
import MainLayout from "./layouts/MainLayout";
//Pages
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ProductInfo from "./pages/ProductInfo";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "productInfo/:id",
          element: <ProductInfo />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
