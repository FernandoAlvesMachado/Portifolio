import React from 'react';

interface CardProps {
    image: string;
    title: string;
    description: string;
    link_Button: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, link_Button }) => {
    return (
        <div className="m-10  relative group flex w-80 flex-col transition-transform rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
            <div
                className="relative transition-transform group-hover:scale-125 mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-cover bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
                style={{ backgroundImage: `url(${image}) ` }}
            >
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h5>
                <p className="block  font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {description}
                </p>
            </div>
            <div className="p-6 pt-0">
                <a
                    href={link_Button}
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all grpup-hover:shadow-lg group-hover:scale-105  group-hover:shadow-blue-500/40 focus:opacity-[0.85] group-focus:shadow-none active:opacity-[0.85] group-active:shadow-none group-disabled:pointer-events-none group-disabled:opacity-50 group-disabled:shadow-none"
                >
                    Saiba mais
                </a>
            </div>
        </div>
    );
};

export default Card;
