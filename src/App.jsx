import { RouterProvider } from "./components/router-provider/router-provider";
import { AppPath } from "./assets/app-path.enum";
import { Toaster } from "react-hot-toast";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import NotFound from "./pages/NotFound/NotFound";
const App = () => {
  return (
    <>
      <Container>
        <Header />
        <RouterProvider
          routes={[
            {
              path: AppPath.ROOT,
              element: <LoginPage />,
            },
            {
              path: AppPath.FORGOT_PASSWORD,
              element: <ForgotPasswordPage />,
            },
            {
              path: AppPath.RESET_PASSWORD,
              element: <ResetPasswordPage />,
            },
            {
              path: AppPath.ANY,
              element: <NotFound />,
            },
          ]}
        />
      </Container>
      <Toaster />
    </>
  );
};

export default App;
