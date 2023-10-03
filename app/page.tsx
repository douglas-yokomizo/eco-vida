'use client'

import { useState } from 'react';
import Image from 'next/image'
import appIcon from '@/public/icon-forest.png'
import heroImage from '@/public/green-planet.png'

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [donation, setDonation] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({
    transporte: 0,
    energia: 0,
    consumo: 0,
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const transporteEmissao = formState.transporte * 0.2;
    const energiaEmissao = formState.energia * 0.5;
    const consumoEmissao = formState.consumo * 27;

    const totalEmissao = transporteEmissao + energiaEmissao + consumoEmissao;
    const donationNeeded = (totalEmissao * 0.29).toFixed(2)

    setDonation(parseFloat(donationNeeded));
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between lg:max-w-7xl w-full m-auto p-8 lg:py-16">
        <a href="/" className='flex items-center'>
          <Image src={appIcon} width={40} alt="logo" />
          <h1 className='text-white text-3xl lg:text-4xl'>EcoVida</h1>
        </a>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Compense agora</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Dicas e Desafios</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Sobre nós</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>
          </section>
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-white font-semibold">
            <li className='hover:animate-bounce hover:text-green-400'>
              <a href="#">Compense agora</a>
            </li>
            <li className='hover:animate-bounce hover:text-green-400'>
              <a href="#">Dicas e Desafios</a>
            </li>
            <li className='hover:animate-bounce hover:text-green-400'>
              <a href="#">Sobre nós</a>
            </li>
            <li className='hover:animate-bounce hover:text-green-400'>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </header>
      <main>
        <section className='HERO flex flex-col lg:flex-row lg:justify-between lg:pt-10 items-center gap-8 lg:max-w-7xl w-full m-auto'>
          <h2 className='text-white lg:text-start lg:text-3xl text-2xl text-center lg:order-2 lg:w-3/5 p-8'>
            Compense a sua pegada de carbono e contribua para um mundo mais sustentável
          </h2>
          <Image src={heroImage} className='lg:w-1/3 lg:order-1' width={320} alt='green world' />
        </section>
        <section className='lg:hidden flex flex-col items-center justify-center gap-12'>
          <div className="flex flex-col items-center p-4">
            <div className="flex items-center mt-4">
              <span className="text-lg font-semibold mr-4 text-white">R$ {donation}</span>
              <input
                className='accent-green-200'
                type='range'
                min={10}
                max={1000}
                value={donation}
                onChange={(e) => setDonation(e.target.valueAsNumber)}
              />
            </div>

          </div>
          <div className='BUTTONS flex gap-12'>
            <button onClick={() => setIsOpen(!isOpen)} className='w-32 bg-slate-50 rounded-3xl p-1 hover:scale-110 transition font-bold'>
              Calcular sua emissão
            </button>
            <button className='w-32 bg-green-300 rounded-3xl hover:scale-110 transition font-bold'>
              Doar
            </button>
          </div>
          {isOpen && (
            <div className='fixed top-0 left-1/2 -translate-x-1/2 max-w-[90%] w-full h-full flex items-center justify-center'>
              <div className="MODAL-CONTENT bg-white rounded-2xl">
                <button className="CLOSE cursor-pointer px-2 py-1 text-xl text-red-500 hover:scale-125" onClick={() => setIsOpen(!isOpen)}>X</button>
                <h2 className='text-center text-xl font-bold mb-4 text-green-700'>Calculadora de Emissão de Carbono</h2>
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-6'>
                  <label className='font-bold flex justify-between items-center w-2/3'>
                    Km&apos;s percorridos com transporte:
                    <input className='max-w-[25%] w-full border-b-2 focus:outline-none text-right' type="number" name="transporte" value={formState.transporte} onChange={handleChange} />
                  </label>
                  <label className='font-bold flex justify-between items-center w-2/3 '>
                    Consumo em kWh por mês:
                    <input className='max-w-[25%] w-full focus:outline-none text-right border-b-2' type="number" name="energia" value={formState.energia} onChange={handleChange} />
                  </label>
                  <label className='font-bold flex justify-between items-center w-2/3'>
                    Consumo de carne em kg por semana:
                    <input className='max-w-[25%] w-full focus:outline-none text-right border-b-2' type="number" name="consumo" value={formState.consumo} onChange={handleChange} />
                  </label>
                  <button className='bg-green-500 p-3 rounded-3xl my-4' type="submit">Calcular Emissão</button>
                </form>
              </div>
            </div>
          )}
        </section>
      </main>
    </>

  )
}
