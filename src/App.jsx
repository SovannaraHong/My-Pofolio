import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";

import {
  RoutLayout,
  PotfoLayout,
  AboutLayout,
  ContactLayout,
} from "./layouts/layout";
import ScrollPage from "../ScrollPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RoutLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutLayout />}></Route>
        <Route path="profolio" element={<PotfoLayout />}></Route>

        <Route path="contact" element={<ContactLayout />}></Route>
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
