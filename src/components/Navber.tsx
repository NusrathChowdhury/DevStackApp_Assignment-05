import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import Logo from '../assets/logo-text.png'

const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 sticky top-0 bg-white z-50">

            <nav className="max-w-6xl mx-auto py-4">

                {/* Main Navbar */}
                <div className="relative flex justify-between items-center gap-4">

                    {/* Hamburger - Mobile */}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FaBars size={22} />
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-2 md:static absolute left-1/2 -translate-x-1/2">
                        <img
                            src={Logo}
                            className="w-30 h-10"
                            alt="Dev Stack"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex flex-row gap-6 items-center">
                        <li>
                            <a href="" className="text-[#DB2777]">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="">Technologies</a>
                        </li>

                        <li>
                            <a href="">Projects</a>
                        </li>

                        <li>
                            <a href="">About</a>
                        </li>

                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>

                    {/* Sign In / Sign Up */}
                    <div className="flex gap-2 md:gap-4 items-center">

                        <button
                            className="px-2 md:px-4 py-2 rounded-full hover:bg-gray-200 hover:scale-110 transition-transform duration-300"
                        >
                            SignIn
                        </button>

                        <button
                            className="bg-[#D91B7E] text-white px-2 md:px-4 py-2 rounded-full hover:bg-[#D91B7E] hover:scale-110 transition-transform duration-300"
                        >
                            SignUp
                        </button>

                    </div>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="md:hidden flex flex-col gap-4 items-start mt-4 pb-2">
                        <li>
                            <a href="" className="text-[#DB2777]">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="">Technologies</a>
                        </li>

                        <li>
                            <a href="">Projects</a>
                        </li>

                        <li>
                            <a href="">About</a>
                        </li>

                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                )}

            </nav>
        </div>
    )
}
export default Navber;