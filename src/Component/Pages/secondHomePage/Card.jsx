import { Link } from "react-router-dom";

// src/components/Card.js
export const Card = ({ title, imgSrc, link }) => {
    return (
        <div className="transition-all duration-500 transform bg-white rounded-lg shadow-md cursor-pointer hover:scale-110 lg:w-64 lg:h-58 hover:shadow-2xl">
            <Link to={link}>
                <img src={imgSrc} alt={title} className="object-fill w-full rounded-t-lg h-28 lg:w-full lg:h-44" />
                <div className="flex px-3 pt-4 pb-4 place-self-center">
                    <h3 className="text-xl font-semibold text-gray-800 lg:text-xl md:text-xl">{title}</h3>
                </div>
            </Link>
        </div>
    );
};








