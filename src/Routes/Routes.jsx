import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Error from "../Shared/Error/Error";
import CollegeDetails from "../Home/College/CollegeDetails/CollegeDetails";
import Admission from "../Admission/Admission";
import AdmissionForm from "../Admission/AdmissionForm";
import MyCollege from "../MyCollege/MyCollege";

const router = createBrowserRouter([
  {
    path: '*',
    element: <Error></Error>
  },
  {
    path: "/",
    element: <Main></Main>,
    children: ([
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/photo-gallery',
        element: <PhotoGallery></PhotoGallery>
      },
      {
        path:"/college-details/:id",
        element:<CollegeDetails></CollegeDetails>,
        loader:({params})=>fetch(`http://localhost:5000/college/${params.id}`)
      },
      {
        path:'/admission',
        element:<Admission></Admission>
      },
      {
        path:'/add-college/:id',
        element:<AdmissionForm></AdmissionForm>,
        loader:({params})=>fetch(`http://localhost:5000/admit-college/${params.id}`)
      },
      {
        path:'/my-college',
        element:<MyCollege></MyCollege>
      }

    ])
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);
export default router;