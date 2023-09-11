import Image from 'next/image';
import React from 'react'
import service1 from "../../../public/service-1.png"

const Card = () => {
    return (
        <div>
            <p className='text-5xl mt-5 service font-bold'>Our <span className=''>Outsourcing</span> Serv<span className='text-[#48b7d9] text-5xl '>i</span>ces</p>

<div className='card grid grid-cols-4 mt-5 gap-3'>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" flex justify-start pt-10">
            <Image src={service1}></Image>
        </figure>
        <div className="card-body items-start text-left">
            <h1 className="card-title text-left text-2xl text-[#33464c]">Team Work</h1>
            <h2 className="card-title text-left text-[#3FBFEB]">From Start $335</h2>
            <p>
                IT-experts who can be integrated seamlessly into your team at a reasonable price. Accelerate the pace of project development without employment
            </p>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" flex justify-start pt-10">
            <Image src={service1}></Image>
        </figure>
        <div className="card-body items-start text-left">
            <h2 className="card-title text-left text-[#3FBFEB]">From Start $335</h2>
            <p>
                IT-experts who can be integrated seamlessly into your team at a reasonable price. Accelerate the pace of project development without employment
            </p>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" flex justify-start pt-10">
            <Image src={service1}></Image>
        </figure>
        <div className="card-body items-start text-left">
            <h2 className="card-title text-left text-[#3FBFEB]">From Start $335</h2>
            <p>
                IT-experts who can be integrated seamlessly into your team at a reasonable price. Accelerate the pace of project development without employment
            </p>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" flex justify-start pt-10">
            <Image src={service1}></Image>
        </figure>
        <div className="card-body items-start text-left">
            <h2 className="card-title text-left text-[#3FBFEB]">From Start $335</h2>
            <p>
                IT-experts who can be integrated seamlessly into your team at a reasonable price. Accelerate the pace of project development without employment
            </p>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" flex justify-start pt-10">
            <Image src={service1}></Image>
        </figure>
        <div className="card-body items-start text-left">
            <h2 className="card-title text-left text-[#3FBFEB]">From Start $335</h2>
            <p>
                IT-experts who can be integrated seamlessly into your team at a reasonable price. Accelerate the pace of project development without employment
            </p>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" flex justify-start pt-10">
            <Image src={service1}></Image>
        </figure>
        <div className="card-body items-start text-left">
            <h2 className="card-title text-left text-[#3FBFEB]">From Start $335</h2>
            <p>
                IT-experts who can be integrated seamlessly into your team at a reasonable price. Accelerate the pace of project development without employment
            </p>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" flex justify-start pt-10">
            <Image src={service1}></Image>
        </figure>
        <div className="card-body items-start text-left">
            <h2 className="card-title text-left text-[#3FBFEB]">From Start $335</h2>
            <p>
                IT-experts who can be integrated seamlessly into your team at a reasonable price. Accelerate the pace of project development without employment
            </p>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" flex justify-start pt-10">
            <Image src={service1}></Image>
        </figure>
        <div className="card-body items-start text-left">
            <h2 className="card-title text-left text-[#3FBFEB]">From Start $335</h2>
            <p>
                IT-experts who can be integrated seamlessly into your team at a reasonable price. Accelerate the pace of project development without employment
            </p>
        </div>
    </div>
</div>
        </div>
    );
};

export default Card;