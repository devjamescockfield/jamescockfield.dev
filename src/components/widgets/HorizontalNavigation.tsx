import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faBriefcase, faCircleInfo, faEnvelopeOpen, faGear, faHome} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type VerticalNavigationProps = {
    onNavigationClick: (content: string) => void;
}

export default function HorizontalNavigation({onNavigationClick}: VerticalNavigationProps) {
    const handleItemClick = (content: string) => {
        onNavigationClick(content);
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={"bg-[#000] p-4 flex justify-between items-center"}>
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="text-white focus:outline-none"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-md">
                        <ul>
                            <li>
                                <Link href="/"
                                      className="block px-4 py-2"
                                      onClick={() => handleItemClick("Home")}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about"
                                      className="block px-4 py-2"
                                      onClick={() => handleItemClick("About")}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio"
                                      className="block px-4 py-2"
                                      onClick={() => handleItemClick("Portfolio")}>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact"
                                      className="block px-4 py-2"
                                      onClick={() => handleItemClick("Contact")}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
