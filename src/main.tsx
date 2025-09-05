import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.component";
import Home from "./routes/home/home.route";
import Projects from "./routes/projects/projects.route";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CourseDetails from "./routes/course-details/courseDetails.route";
import CoursesView from "./routes/courses-view/coursesView.route";
import { About } from "./routes/about/about.route";
import ProjectDetails from "./routes/Project-Details/ProjectDetails.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/projects",
    element: <Layout><Projects /></Layout>,
  },
  {
    path: "/projects/:projectNum",
    element: <Layout><ProjectDetails /></Layout>,
  },
  {
    path: "/courses/:courseNum",
    element: <Layout><CourseDetails /></Layout>,
  },
  {
    path: "/courses",
    element: <Layout><CoursesView /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
