import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./pages/Home";
import PrivacyPolicy from "./components/components_client/PrivacyPolicy";
import TermCondition from "./components/components_client/TermCondition";
import Browse from "./pages/Browse";
import Jobs from "./pages/Jobs";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/term", element: <TermCondition /> },
  { path: "/browse", element: <Browse /> },
  { path: "/jobs", element: <Jobs /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;


//5:52