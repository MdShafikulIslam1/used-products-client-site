import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main/Main";
import Blog from "../../pages/BlogPage/Blog";
import AllUsers from "../../pages/DashboardPages/AllUsersPage/AllUsers";
import MyOrders from "../../pages/DashboardPages/MyOrders/MyOrders";
import AllProducts from "../../pages/HomePage/AllProducts/AllProducts";
import Home from "../../pages/HomePage/Home/Home";
import Login from "../../pages/LoginAndSignupPage/Login";
import Signup from "../../pages/LoginAndSignupPage/Signup";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "../PrivateRouter/PrivateRoute";
import UseAdminRoute from "../PrivateRouter/UseAdminRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute> <AllProducts></AllProducts></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <NotFoundPage></NotFoundPage>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/allUsers',
                element: <UseAdminRoute><AllUsers></AllUsers></UseAdminRoute>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },

        ]
    }


]);

export default router;