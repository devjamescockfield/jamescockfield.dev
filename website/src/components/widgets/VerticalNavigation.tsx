import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase, faCircleInfo, faEnvelopeOpen, faGear, faHome} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type VerticalNavigationProps = {
    onNavigationClick: (content: string) => void;
}

export default function VerticalNavigation({onNavigationClick}: VerticalNavigationProps) {
    const handleItemClick = (content: string) => {
        onNavigationClick(content);
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className="h-full flex flex-col justify-center items-center nav">
            {/* Navigation List */}
            <div>
                <ul className="mt-6 space-y-2">
                    <li>
                        <Link href="/"
                              className="block px-4 py-2 text-white hover:bg-gray-400 hover:shadow-md rounded-2xl transition duration-300 hover:bg-opacity-10 hover:scale-110"
                              onClick={() => handleItemClick("Home")}>
                            <FontAwesomeIcon icon={faHome} className={'pr-3'}/> Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about"
                              className="block px-4 py-2 text-white hover:bg-gray-400 hover:shadow-md rounded-2xl transition duration-300 hover:bg-opacity-10 hover:scale-110"
                              onClick={() => handleItemClick("About")}>
                            <FontAwesomeIcon icon={faCircleInfo} className={'pr-3'}/> About
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio"
                              className="block px-4 py-2 text-white hover:bg-gray-400 hover:shadow-md rounded-2xl transition duration-300 hover:bg-opacity-10 hover:scale-110"
                              onClick={() => handleItemClick("Portfolio")}>
                            <FontAwesomeIcon icon={faBriefcase} className={'pr-3'}/> Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact"
                              className="block px-4 py-2 text-white hover:bg-gray-400 hover:shadow-md rounded-2xl transition duration-300 hover:bg-opacity-10 hover:scale-110"
                              onClick={() => handleItemClick("Contact")}>
                            <FontAwesomeIcon icon={faEnvelopeOpen} className={'pr-3'}/> Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div className="pt-40 text-center text-gray-400">
                &copy; {currentYear} James Cockfield
            </div>
        </div>
    );
};
