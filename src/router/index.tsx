import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Layout from "../components/layout";
import * as Page from "../features";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout />}>
        <Route index element={<Page.Beranda />} />
        <Route path=":id" element={<Page.Detail />} />
        <Route path=":id" element={<Page.Tentang />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
