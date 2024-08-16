import { Outlet } from "react-router-dom";
import logo from "../images/blogger.svg";

const Layout = () => {
    return (
        <div className='min-h-screen bg-gray-100'>
            {/* Navigation Bar */}
            <nav className='bg-gray-800 p-4 flex justify-between items-center'>
                <div className='flex flex-row'>
                    <img src={logo} alt='Website Logo' className='h-8 w-8 mr-2' />
                    <span className='text-white text-2xl font-bold'>Blogger</span>
                </div>
                <ul className='flex space-x-8 items-center'>
                    <li className='text-white cursor-pointer hover:underline'>Log In</li>
                    <li className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer'>
                        Sign Up
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className='p-4'>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
