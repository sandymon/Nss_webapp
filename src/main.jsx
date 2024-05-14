import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Employees from "./routes/Employees";
import Students from "./routes/Students";
import Faculty from './routes/Faculty';
import Staff from './routes/Staff';
import Courses from './routes/Courses';
import Departments from './routes/Departments';
import Majors from './routes/Majors';
import Graduates from './routes/Graduates';
import Employers from './routes/Employers';
import EmploymentRecords from './routes/EmploymentRecords';
import CheatingIncidents from './routes/CheatingIncidents';
import CourseSections from "./routes/CourseSection";
import AddData from "./components/AddData";
import Edit from "./components/Edit"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
  },
  {
    path: "/employees",
    element: <Employees/>
  },
  {
    path: "/students",
    element: <Students/>
  },
  {
    path: "/faculty",
    element: <Faculty/>
  },
  {
    path: "/staff",
    element: <Staff/>
  },
  {
    path: "/courses",
    element: <Courses/>
  },
  {
    path: "/course_sections",
    element: <CourseSections/>
  },
  {
    path: "/departments",
    element: <Departments/>
  },
  {
    path: "/majors",
    element: <Majors/>
  },
  {
    path: "/graduates",
    element: <Graduates/>
  },
  {
    path: "/employers",
    element: <Employers/>
  },
  {
    path: "/employment_records",
    element: <EmploymentRecords/>
  },
  {
    path: "/cheating_incidents",
    element: <CheatingIncidents/>
  },
  {
    path: "/add",
    element: <AddData/>
  },
  {
    path: "/edit",
    element: <Edit/>
  },

  
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);