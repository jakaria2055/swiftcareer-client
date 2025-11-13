import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./pages/Home";
import PrivacyPolicy from "./components/components_client/PrivacyPolicy";
import TermCondition from "./components/components_client/TermCondition";
import Browse from "./pages/Browse";
import Jobs from "./pages/Jobs";
import UserProfile from "./pages/UserProfile";
import JobDetails from "./pages/JobDetails";
import Companies from "./pages/Companies";
import CreateCompanies from "./components/adminComponents/CreateCompanies";
import SetupCompany from "./components/adminComponents/SetupCompany";
import AdminJob from "./pages/AdminJob";
import PostJob from "./pages/PostJob";
import Applicants from "./pages/Applicants";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/term", element: <TermCondition /> },
  { path: "/browse", element: <Browse /> },
  { path: "/jobs", element: <Jobs /> },
  { path: "/profile", element: <UserProfile /> },
  { path: "/job-details/:id", element: <JobDetails /> },
  { path: "/admin/companies", element: <Companies /> },
  { path: "/admin/companies/create", element: <CreateCompanies /> },
  { path: "/admin/companies/:id", element: <SetupCompany /> },
  { path: "/admin/jobs", element: <AdminJob /> },
  { path: "/admin/jobs/create", element: <PostJob /> },
  { path: "/admin/jobs/:id/applicants", element: <Applicants /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;


// 10:43  next