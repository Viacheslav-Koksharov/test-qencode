import {
  RouterProvider as LibraryRouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const RouterProvider = ({ routes }) => {
  const router = createBrowserRouter(routes);
  return <LibraryRouterProvider router={router} />;
};

export { RouterProvider };
