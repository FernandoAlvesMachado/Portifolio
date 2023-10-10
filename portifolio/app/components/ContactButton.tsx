import React from 'react';

interface ContactButtonProps {
    icon: React.ReactNode;
    name: string;
    link: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ icon, name, link }) => {
    return (
        <a href={link}>
            <div className="group relative">
                <button className='text-white'>
                    {icon}
                </button>
                <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    {name}
                </span>
            </div>
        </a>
    );
};

export default ContactButton;
