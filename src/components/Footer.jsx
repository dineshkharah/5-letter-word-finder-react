import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full py-4 bg-[#1c1c1e] text-gray-400 text-center text-sm mt-auto">
            <div className="flex items-center justify-center gap-3">
                <a
                    href="https://www.linkedin.com/in/dinesh-kharah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                    <FaLinkedin className="text-lg" />
                </a>
                <span>|</span>
                <span className="whitespace-nowrap">Created by
                    <a
                        href="https://github.com/dineshkharah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 font-bold transition-colors duration-300 hover:text-white"
                    >
                        Dinesh Kharah
                    </a>
                </span>
                <span>|</span>
                <a
                    href="https://github.com/dineshkharah/movie-review.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 font-bold transition-colors duration-300 hover:text-white"
                >
                    Source Code
                </a>
            </div>
        </footer>
    );
};

export default Footer;
