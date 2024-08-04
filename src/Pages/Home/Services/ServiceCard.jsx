import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">

            <div className='max-w-1/2 mx-auto py-8'>
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl h-44" />

                <div>
                    <h2 className="card-title py-3">{title}</h2>

                    <div className="card-actions flex justify-between items-center">
                        <p className='text-orange-400'>Price: {price}</p>
                        <Link><button className=""><FaArrowRight className='text-orange-400'></FaArrowRight></button></Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ServiceCard;