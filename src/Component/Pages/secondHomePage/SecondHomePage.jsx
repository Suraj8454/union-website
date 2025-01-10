// src/App.js
import React from "react";
import { Card } from "./Card";
import Navbar from "../New";
import Navbar2 from "./Navbar2";
import Footer from "../Footer";

function SecondHomePage() {
    // Example data for the cards
    const cardData = [
        {
            title: "Mediclaim",
            imgSrc: "./image/mediclaim.jpg",
            link: "",
        },
        {
            title: "Insurance",
            imgSrc: "./image/insurance.jpg",
            link: "",
        },
        {
            title: "Benefits",
            imgSrc: "./image/benefit.jpg",
            link: "",
        },
        {
            title: "Invoice",
            imgSrc: "./image/invoice.jpg",
            link: "",
        },
        {
            title: "Challan",
            imgSrc: "./image/challan.jpg",
            link: "",
        },
        {
            title: "Application Status",
            imgSrc: "./image/application.jpg",
            link: "",
        },
        {
            title: "Card Download",
            imgSrc: "./image/card.jpg",
            link: "",
        },
        {
            title: "Membership Status",
            imgSrc: "./image/member.jpg",
            link: "",
        },
        {
            title: "Complain",
            imgSrc: "./image/complain.jpg",
            link: "",
        },
    ];

    return (
        <>
            <Navbar2/>
            <div className="flex items-center justify-center min-w-full min-h-full p-6 mt-6 bg-gray-100 lg:mt-12 md:mt-10">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-12 md:gap-x-14">
                    {cardData.map((card, index) => (
                        <Card key={index} title={card.title} imgSrc={card.imgSrc} link={card.link} />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default SecondHomePage;
