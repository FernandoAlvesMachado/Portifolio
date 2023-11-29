'use client'

import React, { useState } from 'react';
import axios from 'axios';

const FormEnviar = () => {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleEnviar = async (e) => {
        e.preventDefault();

        const accountSid = 'AC8e33ffba7fad140595c8783be8b210f9';
        const authToken = '90ecce0081f4300ccbd5859d527b3c11';
        const twilioPhoneNumber = '+14159693945';
        const targetPhoneNumber = '67998128389';

        const mensagemWhatsApp = `Olá, meu nome é ${nome}. ${mensagem}`;

        try {
            const response = await axios.post(
                `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
                new URLSearchParams({
                    To: `whatsapp:${targetPhoneNumber}`,
                    From: `whatsapp:${twilioPhoneNumber}`,
                    Body: mensagemWhatsApp,
                }).toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Basic ${btoa(`${accountSid}:${authToken}`)}`,
                    },
                }
            );

            // Verificar se a resposta foi bem-sucedida (status 2xx)
            if (response.status >= 200 && response.status < 300) {
                setNome('');
                setNumero('');
                setMensagem('');
                alert('Mensagem enviada com sucesso!');
            } else {
                console.error('Erro ao enviar mensagem via WhatsApp:', response);
                alert('Erro ao enviar mensagem. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem via WhatsApp:', error);
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
        }
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
                        placeholder=""
                        class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                        Nome
                    </label>
                </div>
                <div class="relative h-11 w-full min-w-[200px]">
                    <input
                        type='number'
                        placeholder=""
                        class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label
                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                        Numero
                    </label>
                </div>
                <div className="relative w-full">
                    <textarea placeholder="Sua mensagem!..." className=" text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600 w-full"></textarea>
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
