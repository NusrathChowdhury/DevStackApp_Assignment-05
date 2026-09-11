

import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import Logo from '../assets/logo-text.png'

const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 sticky top-0 bg-white z-50">

            <nav className="flex justify-between items-center gap-4 max-w-6xl mx-auto py-4 ">
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FaBars size={22} />
                </button>
                <div className="flex items-center gap-2">
                    <img src={Logo} className="w-30 h-10" alt="Dev Stack" />
                    
                </div>
                <ul
                    className={`${menuOpen ? "flex" : "hidden"
                        } md:flex flex-col md:flex-row gap-4 md:gap-6 items-center`}
                >                    <li><a href="" className="text-[#DB2777]">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects </a></li>
                    <li><a href="">About </a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="flex gap-4 items-center">


                    <button className="px-4 py-2 rounded-full hover:bg-gray-200 hover:scale-110 transition-transform duration-300">
                        SignIn
                    </button>

                    <button className="bg-[#D91B7E] text-white px-4 py-2 rounded-full hover:bg-[#D91B7E] hover:scale-110 transition-transform duration-300">
                        SignUp
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navber;