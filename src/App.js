import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route>
        <Route path="login" element={<Login />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
