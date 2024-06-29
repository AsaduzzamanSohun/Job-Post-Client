import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="py-4 px-2 lg:px-0" >
            <div className="flex justify-between items-center">
                <div>
                    <Link to='/' className="text-xl font-bold">
                        Job<span className="text-cyan-500">Post</span>
                    </Link>
                </div>

                <div className="space-x-4 font-medium text-black text-sm">
                    <Link to='/all-jobs'>
                        All Jobs
                    </Link>

                    <Link to='/login'>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;