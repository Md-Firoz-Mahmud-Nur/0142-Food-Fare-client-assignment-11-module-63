import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Login from "./Components/Login";
import AuthProvider from "./AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Register from "./Components/Register";
import Home from "./Components/Home/Home";
import AddFood from "./Components/AddFood";
import PrivateRoute from "./PrivateRoute";
import AllAvailableFoods from "./Components/AllAvailableFoods";
import ViewDetails from "./Components/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/sixFood"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allAvailableFoods",
        element: <AllAvailableFoods></AllAvailableFoods>,
        loader: () => fetch("http://localhost:3000/allAvailableFoods"),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/food/${params.id}`),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
);
