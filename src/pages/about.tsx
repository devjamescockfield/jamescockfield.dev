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
                    <p className="pb-6 border-b w-full text-gray-400">Software Engineer/Student</p>
                </div>
                <div className={"pt-6"}>
                    <p className="pb-6 border-b w-full text-gray-400">Hello, my name is James and I am a talented
                        Software Engineering student from the UK. My skills span a wide range of domains, with a strong
                        focus on crafting dynamic and user-friendly websites and mobile applications. I have a passion
                        for technology, and I continually strives to expand my knowledge and expertise in the world of
                        software development.<br/><br/>I specialise in taking an idea and making it come alive using a
                        variety of technologies and languages.</p>
                </div>
                <div className={"pt-6 pb-6 border-b w-full"}>
                    <ul>
                        <li>
                            <p><b className={"pr-12"}>Email:</b> dev.jamescockfield@gmail.com</p>
                        </li>
                        <li>
                            <p><b className={"pr-11"}>Study:</b> Heriot-Watt University</p>
                        </li>
                        <li>
                            <p><b className={"pr-8"}>Degree:</b> MSc Software Engineering</p>
                        </li>
                        <li>
                            <p><b className={"pr-3"}>Freelance:</b> Unavailable</p>
                        </li>
                    </ul>
                </div>
                <div className={"pt-8 pb-8 border-b w-full"}>
                    <a className={"pl-6 pr-6 pt-3 pb-3 bg-white text-black"} href={"/JC_2024_CV.pdf"} download>Download
                        CV</a>
                </div>
                <div className="flex pt-8 pb-8 border-b w-full">
                    <div className="w-1/2 p-2">
                        <h1 className={"text-2xl pb-3"}><b>Programming Skills</b></h1>
                        <div>
                            <ul className="space-y-4">
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
                                    <p className="text-sm text-gray-400">Sep 2023 - Present</p>
                                    <p className="text-md">MSc Software Engineering</p>
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
                <div className="pt-8 pb-8 border-b w-full">
                    <h1 className="text-3xl mb-8">Testimonials</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    <h1>Kyle Python</h1>
                                    <p className="text-sm text-gray-400">SimulatorHits Owner</p>
                                </div>
                                <p className="text-gray-300 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    <h1>Brandon Huckin</h1>
                                    <p className="text-sm text-gray-400">Fellow Developer</p>
                                </div>
                                <p className="text-gray-300 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};