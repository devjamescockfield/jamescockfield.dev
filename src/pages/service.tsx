import React from 'react';
import Title from "@/components/tools/title";
import Link from "next/link";

export default function Service() {
    return (
        <>
            <Title title={"Service"} />
            <div className="lg:p-40 md:p-24 p-10">
                <h1 className={"text-3xl mb-5"}>Services</h1>
                <p>You can find my services on <a className={"text-blue-300"} href={"https://www.fiverr.com/theiceberg01"} target={"_blank"}>Fiverr</a> or you can <Link className={"text-blue-300"} href={"/contact"}>contact me</Link> to discuss what you need</p>
            </div>
        </>
    );
};