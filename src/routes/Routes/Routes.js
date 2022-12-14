import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main/Main";
import Blog from "../../pages/BlogPage/Blog";
import AddProduct from "../../pages/DashboardPages/AddProductPage/AddProduct";
import AllUsers from "../../pages/DashboardPages/AllUsersPage/AllUsers";
import MyOrders from "../../pages/DashboardPages/MyOrders/MyOrders";
import Payment from "../../pages/DashboardPages/PaymentPage/Payment";
import AllProducts from "../../pages/HomePage/AllProducts/AllProducts";
import Home from "../../pages/HomePage/Home/Home";
import AllAddProductsData from "../../pages/HomePage/MoreProductsSection/AllAddProductsData";
import Login from "../../pages/LoginAndSignupPage/Login";
import Signup from "../../pages/LoginAndSignupPage/Signup";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "../PrivateRouter/PrivateRoute";
import SellerRoute from "../PrivateRouter/SellerRoute";
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
                loader: ({ params }) => fetch(`https://used-products-resale-server-site.vercel.app/categories/${params.id}`)
            },

            {
                path: '/addProductsData/:category_name',
                element: <PrivateRoute><AllAddProductsData></AllAddProductsData></PrivateRoute>,
                loader: ({ params }) => fetch(`https://used-products-resale-server-site.vercel.app/addProductsData/${params.category_name}`)
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
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://used-products-resale-server-site.vercel.app/dashboard/payment/${params.id}`)
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },

        ]
    }


]);

export default router;