import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import AllJobs from "../pages/public/AllJobs";
import AddJobs from "../pages/private/AddJobs";
import BidRequests from "../pages/private/BidRequests";
import MyPostedJobs from "../pages/private/MyPostedJobs";
import MyBids from "../pages/private/MyBids";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-jobs',
                element: <AllJobs></AllJobs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-job',
                element: <AddJobs></AddJobs>
            },
            {
                path: '/bid-request',
                element: <BidRequests></BidRequests>
            },
            {
                path: '/my-posted-jobs',
                element: <MyPostedJobs></MyPostedJobs>
            },
            {
                path: '/my-bids',
                element: <MyBids></MyBids>
            }
        ]
    }
])


export default router;