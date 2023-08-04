import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from "react";
import App from "./App.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: '',
//     children: [ ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//   <RouterProvider router={router} />
// );
