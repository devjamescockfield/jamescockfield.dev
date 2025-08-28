import React from 'react';
import Title from "@/components/tools/title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Title title={"Home"}/>
                {/* Large text */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold">James Cockfield</h1>
                </div>

                {/* Small text below large text */}
                <div className="text-center mt-4">
                    <p>Software Engineer</p>
                </div>

                {/* Social links */}
                <div className="text-center mt-4">
                    <Link className={"pr-3"} href={"https://www.linkedin.com/in/devjamescockfield/"} target={"_blank"}>
                        <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:scale-125"/>
                    </Link>
                    <Link className={"pr-3"} href={"https://github.com/devjamescockfield"} target={"_blank"}>
                        <FontAwesomeIcon icon={faGithub} className="text-xl hover:scale-125"/>
                    </Link>
                    <Link className={"pr-3"} href={"https://discord.gg/83YwsRUm4g"} target={"_blank"}>
                        <FontAwesomeIcon icon={faDiscord} className="text-xl hover:scale-125"/>
                    </Link>
                </div>
            </div>
        </>
    );
};