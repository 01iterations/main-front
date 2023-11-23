import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./routes/home/home.route";
import Projects from "./routes/projects/projects.route";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CourseDetails from "./routes/course-details/courseDetails.route";
import CoursesView from "./routes/courses-view/coursesView.route";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/courses/1",
        element: <CourseDetails />,
    },{
        path:"/courses",
        element: <CoursesView />
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
