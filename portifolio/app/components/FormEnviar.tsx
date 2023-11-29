'use client'

import React, { useState } from 'react';

const FormEnviar = () => {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleEnviar = () => {
        // Obtém o valor do campo de entrada do nome
        const nomeInput = document.getElementById('nomeInput');
        const nomeValue = nomeInput ? nomeInput.value : '';

        // Obtém o valor do campo de entrada da mensagem
        const mensagemInput = document.getElementById('mensagemInput').value;
        const mensagemValue = mensagemInput ? mensagemInput.value : '';

        // Constrói a mensagem do WhatsApp
        const mensagemWhatsApp = encodeURIComponent(`Olá, meu nome é ${nomeValue}. ${mensagemInput}`);
        const linkWhatsApp = `https://api.whatsapp.com/send?phone=67998128389&text=${mensagemWhatsApp}`;

        // Abre o link em uma nova janela ou guia do navegador
        window.open(linkWhatsApp, '_blank');
    };

    return (
        <div
            class="relative flex w-1/2 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
            <div
                class="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-blue-700 to-blue-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40"
            >
                <h3
                    class="font-sans text-center justify-center text-3xl align-middle flex items-center font-semibold leading-snug tracking-normal text-white antialiased"
                >
                    Entre em contato comigo!
                </h3>
            </div>
            <div class="flex flex-col gap-4 p-6">
                <div class="relative h-11 w-full min-w-[200px]">
                    <input
                        id="nomeInput"
                        placeholder=""
                        class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                        Nome
                    </label>
                </div>

                <div className="relative w-full">
                    <textarea
                        id='mensagemInput'
                        placeholder="Sua mensagem!..."
                        className="text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600 w-full">

                        </textarea>
                </div>
            </div>
            <div className="p-6 pt-0">
                <button
                    onClick={handleEnviar}
                    className="block w-full select-none rounded-lg bg-gradient-to-tr from-blue-700 to-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                    Enviar!
                </button>
            </div>
        </div>

    );
};

export default FormEnviar;
