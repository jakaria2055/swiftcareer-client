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
import ProtectedRoutes from "./components/adminComponents/ProtectedRoutes";
import CompanyDetails from "./pages/CompanyDetails";
import CompaniesJobPage from "./pages/CompaniesJobPage";

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
  { path: "/company/job/:id", element: <CompaniesJobPage /> },

  // ADMIN ROUTES
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoutes>
        <Companies />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoutes>
        <CreateCompanies />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoutes>
        <SetupCompany />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoutes>
        <AdminJob />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoutes>
        <PostJob />{" "}
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoutes>
        <Applicants />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/company/details/:id",
    element: (
      <ProtectedRoutes>
        <CompanyDetails />
      </ProtectedRoutes>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;

// 11:26  next
