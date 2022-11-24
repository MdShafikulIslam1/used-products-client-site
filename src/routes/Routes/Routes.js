import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import AllProducts from "../../pages/HomePage/AllProducts/AllProducts";
import Home from "../../pages/HomePage/Home/Home";

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
            }
        ]
    }
]);

export default router;