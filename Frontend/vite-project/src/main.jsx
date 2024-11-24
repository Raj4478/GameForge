import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import  { RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import GameDetails from "./components/GameDetails/GameDetails.jsx";
import { Provider } from "react-redux";
import store from "./components/store/store.js";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Loggedin.jsx";
import CurrentUser from "./Pages/CurrentUser.jsx";
import Saved from "./Pages/Saved.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gameDetail",
        element: <GameDetails />,
      },
      {
        path: "/currentuser",
        element: <CurrentUser />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
     
     
      
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>
);
