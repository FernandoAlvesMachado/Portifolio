import React from 'react';

const Header = () => {
    return (
        <header className='items-center self-center justify-evenly h-24 flex w-full'>
            <h1 className='font-normal hover:scale-150 transition-transform hover:underline hover:cursor-pointer text-xl'>
                <a href="https://www.behance.net/fernandopwe">

                    Portifólio
                </a>
            </h1>
            <h1 className='font-normal hover:scale-150 transition-transform hover:underline hover:cursor-pointer text-xl'>
                <a href="https://github.com/FernandoAlvesMachado">

                    Projetos

                </a>
            </h1>
            <h1 className='font-normal hover:scale-150 transition-transform hover:underline hover:cursor-pointer text-xl'>
                <a href="https://api.whatsapp.com/send?phone=5567998128389'">

                    Contato
                </a>
            </h1>
        </header>
    );
};

export default Header;
