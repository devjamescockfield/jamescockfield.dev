import React from 'react';
import Title from "@/components/tools/title";
import Link from "next/link";
import * as fs from "fs";

export default function About() {
    return (
        <>
            <Title title={"About"}/>
            <div className="lg:p-40 md:p-24 p-10">
                <div>
                    <h1 className="text-3xl">James Cockfield</h1>
                    <p className="pb-6 border-b w-full text-gray-400">Software Engineer</p>
                </div>
                <div className={"pt-6"}>
                    <p className="pb-6 border-b w-full text-gray-400">Hello, my name is James and I am an
                        innovative full-stack developer with hands-on experience across web, mobile and
                        game projects using frameworks like React, Flutter and Django. Proven leadership
                        and adaptability through academic excellence, client-facing roles and team-driven
                        environments.
                    </p>
                </div>
                <div className={"pt-6 pb-6 border-b w-full"}>
                    <ul>
                        <li>
                            <p><b className={"pr-12"}>Email:</b> dev.jamescockfield@gmail.com</p>
                        </li>
                        <li>
                            <p><b className={"pr-3"}>Freelance:</b> Available</p>
                        </li>
                    </ul>
                </div>
                <div className="flex pt-8 pb-8 border-b w-full">
                    <div className="w-1/2 p-2">
                        <h1 className={"text-2xl pb-3"}><b>Programming Skills</b></h1>
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <p className="text-md">C++</p>
                                    <div className="bg-gray-200 h-2">
                                        <div className="bg-blue-500 h-2" style={{width: '80%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <p className="text-md">JavaScript</p>
                                    <div className="bg-gray-200 h-2">
                                        <div className="bg-blue-500 h-2" style={{width: '90%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <p className="text-md">HTML/CSS</p>
                                    <div className="bg-gray-200 h-2">
                                        <div className="bg-blue-500 h-2" style={{width: '90%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <p className="text-md">PHP</p>
                                    <div className="bg-gray-200 h-2">
                                        <div className="bg-blue-500 h-2" style={{width: '75%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <p className="text-md">Java</p>
                                    <div className="bg-gray-200 h-2">
                                        <div className="bg-blue-500 h-2" style={{width: '95%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <p className="text-md">Dart</p>
                                    <div className="bg-gray-200 h-2">
                                        <div className="bg-blue-500 h-2" style={{width: '85%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <p className="text-md">C#</p>
                                    <div className="bg-gray-200 h-2">
                                        <div className="bg-blue-500 h-2" style={{width: '70%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <p className="text-md">Lua</p>
                                    <div className="bg-gray-200 h-2">
                                        <div className="bg-blue-500 h-2" style={{width: '75%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <p className="text-md">Python</p>
                                    <div className="bg-gray-200 h-2">
                                        <div className="bg-blue-500 h-2" style={{width: '60%'}}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 p-2 ml-5">
                        <h1 className={"text-2xl pb-3"}><b>Soft Skills</b></h1>
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <p className="text-md">Adaptability and Flexibility</p>
                                </li>
                                <li>
                                    <p className="text-md">Leadership</p>
                                </li>
                                <li>
                                    <p className="text-md">Interpersonal Communication</p>
                                </li>
                                <li>
                                    <p className="text-md">Problem-Solving</p>
                                </li>
                                <li>
                                    <p className="text-md">Teamwork</p>
                                </li>
                                <li>
                                    <p className="text-md">Resilience</p>
                                </li>
                                <li>
                                    <p className="text-sm">Organizational Skills</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex pt-8 pb-8 border-b w-full">
                    <div className="w-1/2 p-2">
                        <h1 className={"text-2xl pb-3"}><b>Technologies</b></h1>
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <p className="text-md">Laravel</p>
                                </li>
                                <li>
                                    <p className="text-md">React</p>
                                </li>
                                <li>
                                    <p className="text-md">Next.JS</p>
                                </li>
                                <li>
                                    <p className="text-md">Flutter</p>
                                </li>
                                <li>
                                    <p className="text-md">Git</p>
                                </li>
                                <li>
                                    <p className="text-md">MySQL</p>
                                </li>
                                <li>
                                    <p className="text-sm">Django</p>
                                </li>
                                <li>
                                    <p className="text-sm">Firebase</p>
                                </li>
                                <li>
                                    <p className="text-sm">MongoDB</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 p-2 ml-5">
                        <h1 className={"text-2xl pb-3"}><b>Interests</b></h1>
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <p className="text-md">Custom Websites</p>
                                </li>
                                <li>
                                    <p className="text-md">Front-End Systems</p>
                                </li>
                                <li>
                                    <p className="text-md">Back-End Systems</p>
                                </li>
                                <li>
                                    <p className="text-md">Mobile Apps</p>
                                </li>
                                <li>
                                    <p className="text-md">Games</p>
                                </li>
                                <li>
                                    <p className="text-md">Scripts</p>
                                </li>
                                <li>
                                    <p className="text-md">Desktop Applications</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex pt-8 pb-8 border-b w-full">
                    <div className="w-1/2 p-2">
                        <h1 className={"text-2xl pb-3"}><b>Education</b></h1>
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <p className="text-lg">Heriot-Watt University</p>
                                    <p className="text-sm text-gray-400">Sep 2023 - June 2025</p>
                                    <p className="text-md">PGCert Computer Science</p>
                                </li>
                                <li>
                                    <p className="text-lg">University of Stirling</p>
                                    <p className="text-sm text-gray-400">Sep 2019 - June 2023</p>
                                    <p className="text-md">BSc (Hons) Software Engineering</p>
                                </li>
                                <li>
                                    <p className="text-lg">Shimna Integrated Collage</p>
                                    <p className="text-sm text-gray-400">Sep 2017 - June 2019</p>
                                    <p className="text-md">A-Levels</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 p-2 ml-5">
                        <h1 className={"text-2xl pb-3"}><b>Experience</b></h1>
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <p className="text-lg">Manchester</p>
                                    <p className="text-sm text-gray-400">Sep 2024 - Present</p>
                                    <p className="text-md">Software Engineer</p>
                                </li>
                                <li>
                                    <p className="text-lg">CO-OP, Ballyholme</p>
                                    <p className="text-sm text-gray-400">July 2023 - Sep 2023</p>
                                    <p className="text-md">Team Leader</p>
                                </li>
                                <li>
                                    <p className="text-lg">CO-OP, Doune</p>
                                    <p className="text-sm text-gray-400">May 2022 - July 2023</p>
                                    <p className="text-md">Team Leader</p>
                                </li>
                                <li>
                                    <p className="text-lg">CO-OP, Doune</p>
                                    <p className="text-sm text-gray-400">Aug 2021 - May 2022</p>
                                    <p className="text-md">Team Member</p>
                                </li>
                                <li>
                                    <p className="text-lg">Dominos, Downpatrick</p>
                                    <p className="text-sm text-gray-400">April 2020 - Aug 2021</p>
                                    <p className="text-md">Delivery Driver</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};