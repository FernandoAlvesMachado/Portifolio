'use client';
import React, { useState } from 'react';

const BotaoLerMais = () => {
  const [LerMais, setLerMais] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px'); // Defina a altura inicial como 0px

  const toggleTexto = () => {
    setLerMais(!LerMais);

    // Altere a altura máxima com base no estado "LerMais"
    setMaxHeight(LerMais ? '0px' : '100%');
  };

  return (
    <div className=' w-full lg:w-2/5 transition-max-height transition-transform flex items-center justify-center lg:p-10 '>
      <div className='transition-max-height transition-transform flex flex-col max-w-4xl gap-3  text-justify' >
        <div className='items-center flex justify-center lg:justify-start'>

        <h1 className='text-3xl font-semibold '>Fernando Alves!</h1>
        </div>
        <p>
          Desde os meus 14 anos, minha paixão pelo <strong>Design gráfico</strong> e <strong>Web design</strong> tem sido o centro da minha jornada profissional. Iniciei minha trajetória estudando pelas noções básicas do design e, aprimorei minhas habilidades em diversas áreas do campo. Atualmente, minha expertise está centrada no <strong>Web design</strong>, e no <strong>UI/UX design</strong>.
        </p>
        {LerMais ? (
          <>
            <p>
              Com mais de 5 anos de experiência, minha especialização abrange a criação de <strong>Wireframes</strong>, <strong>Protótipos</strong> e <strong>Layouts</strong> para aplicativos e sites, sempre com foco na <strong>usabilidade</strong> e nas melhores práticas de design, garantindo que os projetos sejam verdadeiramente intuitivos e criativos para os usuários. Além disso, minha <strong>aprendizagem constante e aprimoramentos</strong> fazem parte da minha rotina, garantindo que eu esteja sempre atualizado com o mercado.
            </p>
            <p>
              Quando se trata de desenvolvimento front-end, minha experiência abrange tecnologias atuais e essenciais, como <strong>TypeScript</strong>, <strong>JavaScript</strong>, <strong>Next.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>HTML</strong> e <strong>CSS</strong>. Estou preparado para criar <strong>interfaces de usuário interativas e responsivas</strong>, assim como essa que está vendo aqui mesmo!
            </p>
            <p>
          Estou animado com a oportunidade de unir meu conhecimento como designer e web designer à minha habilidade como desenvolvedor front-end. Acredito que essa combinação única pode proporcionar resultados <strong> excepcionais </strong> para sua equipe e projetos. Estou ansioso para discutir como posso contribuir efetivamente para sua organização.
        </p>
          </>
        ) : null}
        <button onClick={toggleTexto} className='bg-white border-2 hover:scale-110 transition-transform border-blue-700 px-10 py-2 shadow-white text-blue-700 font-semibold shadow-2xl rounded-full'>
          {LerMais ? 'Ler menos' : 'Ler mais'}
        </button>
      </div>
    </div>
  );
};

export default BotaoLerMais;

