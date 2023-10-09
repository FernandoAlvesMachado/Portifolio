import Image from 'next/image'
import Header from './components/Header';
import Card from './components/Card.tsx';
import Habilities from './components/Habilities';
import ContactButton from './components/ContactButton';



export default function Home() {

  return (
    <body className='bg-gradient-all w-full h-full '>
      <Header />
      <div className='pl-5 flex-col-reverse lg:flex justify-evenly flex pt-10 lg:flex-row bg-inherit items-center'>
        <div>
          <div className='pb-5'>
            <p className='text-base'>Olá, sou o</p>
            <h1 className='text-4xl font-bold'>Fernando Alves</h1>
            <p className='text-base'>Front End Dev</p>
          </div>
          <div className='flex gap-2'>

            <a
              href="/DEV%20FRONTEND%20-%20Fernando%20Alves%20Machado.pdf"
              download="DEV FRONTEND - Fernando Alves Machado.pdf"
              className='bg-blue-700 border-2 hover:scale-110 transition-transform border-white px-10 py-2 shadow-blue-700 shadow-2xl font-semibold rounded-full'>
              Baixar CV
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=5567998128389'
              className='bg-white border-2 hover:scale-110 transition-transform border-blue-700 px-10 py-2 shadow-white text-blue-700 font-semibold shadow-2xl rounded-full'>
              Entrar em contato
            </a>

          </div>
          <div className='flex lg:flex justify-center lg:justify-start items-center lg:items-start'>
            <div className='text-black gap-5 h-20 self-center flex items-center justify-center'>
              <ContactButton
                icon={
                  <svg width="25" height="25" viewBox="0 0 313 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.6873 33.1258C65.683 41.907 62.2185 50.3267 56.056 56.5328C49.8936 62.7389 41.5379 66.2229 32.8272 66.2186C24.1166 66.2142 15.7644 62.7217 9.60807 56.5094C3.45177 50.2971 -0.00435123 41.8738 4.11139e-06 33.0927C0.00435945 24.3116 3.46884 15.8919 9.6313 9.68578C15.7938 3.47969 24.1494 -0.00438642 32.8601 4.14464e-06C41.5708 0.00439471 49.9229 3.49689 56.0792 9.70919C62.2355 15.9215 65.6917 24.3447 65.6873 33.1258ZM66.6726 90.736H0.985313V298H66.6726V90.736ZM170.459 90.736H105.1V298H169.802V189.236C169.802 128.646 248.134 123.018 248.134 189.236V298H313V166.722C313 64.5796 197.062 68.3872 169.802 118.548L170.459 90.736Z" fill="White" />
                  </svg>

                }
                name="Linkedin"
                link='https://www.linkedin.com/in/fernando-alves-machado/'
              />
              <ContactButton
                icon={
                  <svg width="35" height="35" viewBox="0 0 328 209" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M296.107 10.5976H213.027V33.9248H296.435L296.107 10.5976ZM278.573 171.076C272.271 175.292 264.828 177.431 257.271 177.197C252.268 177.723 247.212 177.202 242.419 175.665C237.625 174.127 233.198 171.608 229.413 168.263C222.416 160.254 218.774 149.814 219.254 139.145H327.733C328.515 128.037 327.575 116.873 324.948 106.057C322.406 95.7671 317.957 86.0558 311.838 77.4359C305.679 69.0745 297.723 62.2304 288.569 57.4175C278.384 52.3474 267.15 49.7955 255.796 49.9726C245.117 49.8936 234.53 51.975 224.661 56.0939C215.624 59.9403 207.435 65.5643 200.573 72.6381C193.73 79.8532 188.431 88.4131 185.005 97.7851C181.33 107.903 179.498 118.608 179.598 129.384C179.429 140.314 181.205 151.185 184.842 161.48C187.93 170.803 192.833 179.409 199.262 186.793C205.913 194.041 214.088 199.694 223.186 203.337C233.331 207.239 244.122 209.148 254.976 208.962C270.207 209.441 285.243 205.416 298.237 197.381C311.362 187.965 320.81 174.211 324.948 158.502H288.733C286.794 163.699 283.227 168.114 278.573 171.076ZM222.367 102.914C223.642 98.7891 225.759 94.9798 228.582 91.7314C231.404 88.483 234.869 85.8675 238.754 84.0535C243.898 81.7156 249.501 80.5843 255.14 80.7447C259.214 80.3934 263.315 80.936 267.162 82.3353C271.009 83.7345 274.51 85.9574 277.426 88.8513C282.994 95.7326 286.567 104.035 287.75 112.84H219.745C220.01 109.478 220.614 106.152 221.548 102.914H222.367ZM135.682 94.9726C144.022 91.4663 151.269 85.7502 156.657 78.4285C161.609 70.6528 164.069 61.5259 163.703 52.2888C164.024 43.8651 162.397 35.4818 158.951 27.8035C156.055 21.1514 151.408 15.4289 145.514 11.2593C139.265 6.92433 132.168 3.99089 124.703 2.65639C115.867 0.785475 106.855 -0.102175 97.8284 0.00933678H0V208.134H99.9587C109.081 208.141 118.167 206.974 126.997 204.66C135.366 202.474 143.295 198.836 150.43 193.907C157.34 189.071 162.968 182.594 166.816 175.046C171.075 166.605 173.16 157.217 172.879 147.748C173.19 136.014 169.93 124.466 163.539 114.66C156.666 104.799 146.473 97.8003 134.862 94.9726H135.682ZM45.3911 35.5792H87.8325C91.7316 35.5744 95.624 35.9065 99.467 36.5719C103.006 37.1013 106.404 38.3387 109.463 40.2116C112.418 41.8993 114.813 44.4321 116.345 47.491C118.243 51.1591 119.148 55.2683 118.967 59.4028C119.272 62.9637 118.733 66.5468 117.394 69.8554C116.054 73.164 113.954 76.1028 111.265 78.4285C105.401 82.4989 98.3836 84.5314 91.2737 84.2189H45.3911V35.5792ZM124.703 158.668C123.019 162.039 120.473 164.895 117.329 166.94C114.056 168.994 110.451 170.451 106.677 171.241C102.483 172.189 98.1929 172.633 93.8956 172.565H44.7356V115.487H93.8956C102.332 115.114 110.663 117.493 117.656 122.27C120.816 125.133 123.263 128.707 124.801 132.702C126.338 136.697 126.922 141.001 126.505 145.267C126.948 149.814 126.331 154.404 124.703 158.668Z" fill="white" />
                  </svg>

                }
                name="Behance"
                link='https://www.behance.net/fernandopwe'
              />
              <ContactButton
                icon={
                  <svg width="25" height="25" viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.10434 41.4654C7.34018 40.9559 6.68301 40.3038 5.91375 39.3868C5.51448 38.8981 5.11881 38.4064 4.72676 37.9119C3.5474 36.4472 2.80362 35.7697 2.03691 35.492C1.71431 35.3852 1.41633 35.215 1.16053 34.9913C0.90472 34.7676 0.696255 34.495 0.547408 34.1895C0.398561 33.884 0.312341 33.5519 0.293824 33.2126C0.275307 32.8732 0.324868 32.5337 0.439589 32.2138C0.55431 31.8939 0.731872 31.6002 0.961818 31.35C1.19176 31.0998 1.46945 30.8982 1.77851 30.7569C2.08758 30.6157 2.42178 30.5377 2.76144 30.5276C3.1011 30.5175 3.43935 30.5755 3.75627 30.6981C5.67177 31.3858 6.96829 32.5703 8.71567 34.7431C8.47624 34.4451 9.58172 35.8308 9.81861 36.1161C10.3026 36.6943 10.6592 37.0458 10.9394 37.2318C11.459 37.5808 12.4371 37.7311 13.8687 37.5884C13.9298 36.6154 14.1081 35.6703 14.3832 34.7966C6.8231 32.9498 2.5438 28.0718 2.5438 18.5043C2.5438 15.3508 3.48627 12.5055 5.23874 10.1212C4.68345 7.84396 4.76751 5.09037 6.008 1.99034C6.14846 1.6392 6.36536 1.32374 6.64293 1.06687C6.9205 0.809998 7.25179 0.618161 7.61274 0.505282C7.81906 0.444148 7.93623 0.418675 8.14255 0.385561C10.188 0.0722467 13.0765 0.818596 16.8412 3.17991C19.0848 2.65539 21.3815 2.39212 23.6856 2.39536C26.0086 2.39536 28.3189 2.65772 30.5223 3.17991C34.2845 0.803312 37.1807 0.0544158 39.2388 0.385561C39.4553 0.421222 39.6413 0.467073 39.7941 0.515471C40.1477 0.632076 40.4715 0.824795 40.7426 1.08005C41.0137 1.33531 41.2255 1.64691 41.3632 1.99289C42.6036 5.08782 42.6877 7.84142 42.1324 10.1187C43.8925 12.5029 44.8274 15.3278 44.8274 18.5043C44.8274 28.0769 40.5633 32.9371 33.0032 34.789C33.3216 35.8461 33.4872 37.0255 33.4872 38.3042C33.4872 39.9956 33.4821 41.6131 33.4694 43.4242C33.4694 43.9082 33.4643 44.4278 33.4566 45.2226C34.0274 45.3483 34.5376 45.6664 34.9016 46.1236C35.2656 46.5808 35.4614 47.1493 35.456 47.7337C35.4506 48.3181 35.2444 48.8829 34.8721 49.3333C34.4997 49.7837 33.9838 50.0924 33.4108 50.2076C30.507 50.7884 28.3571 48.8524 28.3571 46.3256L28.3622 45.1869L28.375 43.3911C28.3877 41.5902 28.3954 39.9829 28.3954 38.3042C28.3954 36.5288 27.9267 35.3698 27.3102 34.8374C25.6265 33.3854 26.4799 30.6242 28.6883 30.3771C36.2433 29.5263 39.733 26.5995 39.733 18.5068C39.733 16.0742 38.9382 14.0618 37.4074 12.3806C37.0857 12.0272 36.87 11.5903 36.7849 11.1201C36.6998 10.6498 36.7486 10.1651 36.9259 9.7213C37.3488 8.66418 37.5271 7.28356 37.1679 5.61001L37.1424 5.6151C35.8918 5.97172 34.315 6.7359 32.4097 8.03501C32.1025 8.24352 31.7534 8.38233 31.3869 8.44173C31.0204 8.50114 30.6453 8.47969 30.2879 8.37889C28.138 7.7827 25.9167 7.48275 23.6856 7.48735C21.4186 7.48735 19.1719 7.79302 17.0832 8.37889C16.7277 8.47887 16.3548 8.50035 15.9901 8.44185C15.6255 8.38335 15.278 8.24627 14.9716 8.0401C13.0536 6.74864 11.4717 5.98446 10.2083 5.62784C9.84408 7.29121 10.0249 8.66928 10.4452 9.7213C10.6225 10.1651 10.6714 10.6498 10.5863 11.1201C10.5011 11.5903 10.2854 12.0272 9.9638 12.3806C8.44312 14.0517 7.63821 16.0971 7.63821 18.5043C7.63821 26.5842 11.1304 29.534 18.6472 30.3746C20.8505 30.6242 21.7089 33.3752 20.0354 34.8297C19.5438 35.2551 18.9401 36.6943 18.9401 38.3042V46.3256C18.9401 48.8372 16.8158 50.7221 13.9476 50.2203C13.3649 50.1196 12.8354 49.8192 12.4499 49.3707C12.0644 48.9221 11.847 48.3535 11.8349 47.7622C11.8229 47.1709 12.0169 46.5939 12.3838 46.13C12.7507 45.6662 13.2676 45.3445 13.8457 45.22V42.6982C11.5278 42.8562 9.61484 42.4766 8.10434 41.4654Z" fill="white" />
                  </svg>

                }
                name="GitHub"
                link='https://github.com/fernandoalvesmachado'
              />
              <ContactButton
                icon={
                  <svg width="25" height="25" viewBox="0 0 326 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M163.655 0.000976939C74.21 0.000976939 1.31056 72.9808 1.31056 162.524C1.31056 191.224 8.84623 219.104 22.9347 243.704L0 328L86.005 305.368C109.759 318.324 136.461 325.212 163.655 325.212C253.1 325.212 326 252.232 326 162.688C326 119.229 309.127 78.3927 278.492 47.7248C263.474 32.5373 245.584 20.4955 225.868 12.3018C206.151 4.10809 185.003 -0.0734737 163.655 0.000976939ZM163.819 27.3889C199.859 27.3889 233.606 41.4929 259.162 67.0768C271.704 79.6286 281.648 94.5355 288.423 110.943C295.197 127.35 298.67 144.935 298.642 162.688C298.642 237.144 238.029 297.66 163.655 297.66C139.41 297.66 115.656 291.264 95.0151 278.8L90.1005 276.012L38.9889 289.46L52.5859 239.604L49.3095 234.356C35.7771 212.851 28.6194 187.942 28.6683 162.524C28.8322 88.0687 89.2814 27.3889 163.819 27.3889ZM106.155 87.4127C103.534 87.4127 99.1105 88.3967 95.3427 92.4967C91.7387 96.5967 81.0904 106.601 81.0904 126.445C81.0904 146.453 95.6703 165.64 97.4724 168.428C99.7658 171.216 126.305 212.216 167.095 229.6C176.761 234.028 184.296 236.488 190.194 238.292C199.859 241.408 208.706 240.916 215.75 239.932C223.613 238.784 239.667 230.092 243.108 220.58C246.548 211.068 246.548 203.032 245.565 201.228C244.418 199.588 241.797 198.604 237.701 196.8C233.606 194.504 213.62 184.664 210.016 183.352C206.248 182.04 203.955 181.384 200.842 185.32C198.221 189.42 190.358 198.604 188.064 201.228C185.607 204.016 183.314 204.344 179.382 202.376C175.123 200.244 162.017 195.98 146.618 182.204C134.495 171.38 126.468 158.097 124.011 153.997C122.045 150.061 123.847 147.601 125.813 145.797C127.615 143.993 130.236 141.041 131.874 138.581C134.004 136.285 134.659 134.481 135.97 131.857C137.28 129.069 136.625 126.773 135.642 124.805C134.659 123.001 126.468 102.665 123.028 94.6287C119.752 86.7567 116.475 87.7407 113.854 87.5767C111.561 87.5767 108.94 87.4127 106.155 87.4127Z" fill="White" />
                  </svg>
                }
                name="WhatsApp"
                link='https://api.whatsapp.com/send?phone=5567998128389'
              />
            </div>
          </div>

        </div>
        <div className='hover:scale-125 transition-transform slide-in-right'>
          <a href="https://github.com/FernandoAlvesMachado">
            <Image
              src="/./../Images/perfil.svg"
              alt="Meu perfil"
              width={500}
              height={500}
            />
          </a>
        </div>
      </div>
      <div className=' bg-hero-pattern bg-cover bg-blend-overlay bg-black mt-12 lg:items-center bg-opacity-30 flex-col mb-14 flex items-center justify-center w-full h-52 bg-repeat-x bg-fixed '>
        <h1 className='font-bold text-2xl lg:text-3xl text-center'>"Tudo o que for fazer, sempre faça bem feito!"</h1>
        <span className='font-thin text-2xl'> -Meu pai</span>
        <span className='font-thin text-1xl max-w-4xl text-center'>Um conselho dado de pai para filho que levo para todas as áreas da minha vida, sempre fazendo tudo ao meu alcance para superar expectativas.</span>
      </div>
      <div className='lg:items-center lg:justify-center transition-transform lg:flex lg:flex-row flex-wrap flex justify-center items-center w-full h-full  '>
        <Card
          image={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/f5f00f172386935.647ea39e1dd11.png"}
          title={"Landing Page Energia Solar"}
          description={"Landing Page desenvolvida, personalizada e responsiva para a indústria de Energia Solar!"}
          link_Button={'https://sustentarems.com.br/'}
        />
        <Card
          image={"../Images/Capas05.png"}
          title={"Landing Page - Assassin's Creed"}
          description={"Landing Page para o lançamento do novo jogo da franquia Assassin's creed"}
          link_Button={'https://github.com/FernandoAlvesMachado/Assassin-s-Creed'}
        />
        <Card
          image={"../Images/Capas04.png"}
          title={"Tela de Login "}
          description={"Página de login para a captação de dados com validação com o banco de dados dos usuários!"}
          link_Button={'https://github.com/FernandoAlvesMachado/tela-de-login'}
        />

        <Card
          image={"../Images/Capas03.png"}
          title={"Sistema planetário"}
          description={"Criei uma apresentação breve e intuitiva para explicar o desenvolvimento do curso em FrontEnd aos meus colegas"}
          link_Button={'https://github.com/FernandoAlvesMachado/planetas/tree/main'}
        />
        <Card
          image={"../Images/Capas02.png"}
          title={"Projeto - Maquina do tempo"}
          description={"Realizando testes para a implementação de API com tela para inserir novas informações ao banco de dados"}
          link_Button={'https://github.com/FernandoAlvesMachado/spacetime'}
        />
        <Card
          image={"../Images/Capas01.png"}
          title={"Desenvolvedor Front End e Designer?"}
          description={"É isso que acontece quando junta os dois em um único profissional, da uma olhadinha!"}
          link_Button={'https://www.behance.net/gallery/169549989/Portifolio-SOCIAL-MEDIA'}
        />
      </div>
      <div>
        <Habilities />
      </div>
      <div>

      </div>
      <div className='flex flex-wrap lg:flex lg:items-center lg:justify-center text-3xl font-bold justify-center'>
        <h1>Entre em contato:</h1>
      </div>

    </body >
  )
}
