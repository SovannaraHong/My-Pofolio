import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RoutLayout from "./layouts/RoutLayout";
import HomePage from "./pages/HomePage";

import AboutLayout from "./layouts/AboutLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RoutLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutLayout />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
