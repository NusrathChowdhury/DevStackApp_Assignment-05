import dsLogo from "../assets/Background.png";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100">

            {/* Main Footer */}
            <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    <div className="md:col-span-6 text-center md:text-left">

                        {/* Logo + Name */}
                        <div className="mb-3 flex items-center justify-center md:justify-start gap-2">

                            <img
                                src={dsLogo}
                                alt="DevStack"
                                className="h-6 w-6 rounded-md"
                            />

                            <span className="text-lg font-bold tracking-tight">

                                <span className="text-gray-900">
                                    Dev
                                </span>

                                <span className="brand-gradient bg-clip-text text-transparent">
  Stack
</span>

                            </span>

                        </div>

                        {/* Description */}
                        <p className="max-w-md mx-auto md:mx-0 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-400">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-4 flex items-center justify-center md:justify-start gap-4 text-xs sm:text-sm font-medium text-slate-600">

                            <a
                                href="#"
                                className="hover:text-slate-900 transition"
                            >
                                GitHub
                            </a>

                            <span className="text-slate-300">•</span>

                            <a
                                href="#"
                                className="hover:text-slate-900 transition"
                            >
                                Twitter
                            </a>

                            <span className="text-slate-300">•</span>

                            <a
                                href="#"
                                className="hover:text-slate-900 transition"
                            >
                                LinkedIn
                            </a>

                        </div>

                    </div>


                    <div className="hidden md:block md:col-span-2">

                        <h3 className="text-[10px] font-bold uppercase text-slate-800 mb-3">
                            Product
                        </h3>

                        <ul className="space-y-2 text-xs text-slate-500">

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-slate-900 transition"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-slate-900 transition"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-slate-900 transition"
                                >
                                    Projects
                                </a>
                            </li>

                        </ul>

                    </div>


                    <div className="hidden md:block md:col-span-2">

                        <h3 className="text-[10px] font-bold uppercase text-slate-800 mb-3">
                            Company
                        </h3>

                        <ul className="space-y-2 text-xs text-slate-500">

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-slate-900 transition"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-slate-900 transition"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-slate-900 transition"
                                >
                                    Careers
                                </a>
                            </li>

                        </ul>

                    </div>


                    <div className="hidden md:block md:col-span-2">

                        <h3 className="text-[10px] font-bold uppercase text-slate-800 mb-3">
                            Legal
                        </h3>

                        <ul className="space-y-2 text-xs text-slate-500">

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-slate-900 transition"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-slate-900 transition"
                                >
                                    Terms of Service
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>


                <div className="
          mt-7
          pt-5
          border-t border-gray-100
          flex
          items-center
          justify-between
          gap-3
        ">

                    {/* Copyright */}
                    <p className="text-[9px] sm:text-xs text-slate-400 whitespace-nowrap">
                        © 2026 DevStack. All rights reserved.
                    </p>

                    {/* Privacy + Terms */}
                    <div className="flex items-center gap-3 text-[9px] sm:text-xs text-slate-400 whitespace-nowrap">

                        <a
                            href="#"
                            className="hover:text-slate-900 transition"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="hover:text-slate-900 transition"
                        >
                            Terms
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
