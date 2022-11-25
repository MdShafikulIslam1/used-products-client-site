import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Blog from "../../pages/BlogPage/Blog";
import AllProducts from "../../pages/HomePage/AllProducts/AllProducts";
import Home from "../../pages/HomePage/Home/Home";
import Login from "../../pages/LoginAndSignupPage/Login";
import Signup from "../../pages/LoginAndSignupPage/Signup";

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
                element: <AllProducts></AllProducts>,
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
            }
        ]
    }
]);

export default router;