import Home from "./pages/home/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Profile from "./pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import SignIn from "./pages/signin/signin";
import SignUp from "./pages/Signup";
import EditTask from "./pages/edit-task/editTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/editTask/:StringId",
    element: <EditTask />,
  },
]);
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
