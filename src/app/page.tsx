'use client'

import { X, Minus, Plus, Tag } from '@phosphor-icons/react';
import monitor from '../assets/monitor.svg'
import cadeira from '../assets/cadeira.svg'
import teclado from '../assets/teclado.svg'
import headset from '../assets/headset.svg'
import patinho from '../assets/patinho.svg'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-[428px] bg-surface-color">
      <header className="h-[72px] flex justify-around items-center border-b-2 border-stroke-color">
        <h1 className="py-6 text-color-primary">Seu carrinho tem <strong>5 itens</strong></h1>
        <X size={24} className='text-close-button-color hover:text-color-primary cursor-pointer'/>
      </header>

      <main className='h-[506px] p-8 gap-12 grid overflow-y-scroll'>
        <div className='flex justify-between items-center gap-6'>
          <Image src={monitor} width={104} height={104} alt='Monitor Gamer' className='object-cover rounded-lg'/>
          <div className='w-[232px] gap-6 flex flex-col'>
            <div>
              <p className='text-color-primary'>Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e... </p>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-color-primary'><strong>R$8.599,90</strong></span>
              <span className='border border-stroke-color w-[40px] h-[40px] flex justify-center items-center rounded-lg cursor-pointer'>
                <Minus size={16} className='text-brand-color-light' /> 
              </span>
              <span className='text-color-primary'>1</span>
              <span className='border border-brand-color-light w-[40px] h-[40px] flex justify-center items-center rounded-lg'>
                <Plus size={16} className='text-brand-color-light' />
              </span>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center gap-6'>
          <Image src={cadeira} width={104} height={104} alt='Monitor Gamer' className='object-cover rounded-lg'/>
          <div className='w-[232px] gap-6 flex flex-col'>
            <div>
              <p className='text-color-primary'>Cadeira Gamer  RGB - Preta com Iluminação (Led)</p>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-color-primary'><strong>R$959,90</strong></span>
              <span className='border border-stroke-color w-[40px] h-[40px] flex justify-center items-center rounded-lg'>
                <Minus size={16} className='text-brand-color-light' /> 
              </span>
              <span className='text-color-primary'>1</span>
              <span className='border border-brand-color-light w-[40px] h-[40px] flex justify-center items-center rounded-lg'>
                <Plus size={16} className='text-brand-color-light' />
              </span>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center gap-6'>
          <Image src={teclado} width={104} height={104} alt='Monitor Gamer' className='object-cover rounded-lg'/>
          <div className='w-[232px] gap-6 flex flex-col'>
            <div>
              <p className='text-color-primary'>Teclado Gamer Mecânico Low Profile RGB AW510K 580</p>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-color-primary'><strong>R$1.002,00</strong></span>
              <span className='border border-stroke-color w-[40px] h-[40px] flex justify-center items-center rounded-lg'>
                <Minus size={16} className='text-brand-color-light' /> 
              </span>
              <span className='text-color-primary'>1</span>
              <span className='border border-brand-color-light w-[40px] h-[40px] flex justify-center items-center rounded-lg'>
                <Plus size={16} className='text-brand-color-light' />
              </span>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center gap-6'>
          <Image src={headset} width={104} height={104} alt='Monitor Gamer' className='object-cover rounded-lg'/>
          <div className='w-[232px] gap-6 flex flex-col'>
            <div>
              <p className='text-color-primary'>Teclado Gamer Mecânico Low Profile RGB AW510K 580</p>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-color-primary'><strong>R$1.002,00</strong></span>
              <span className='border border-stroke-color w-[40px] h-[40px] flex justify-center items-center rounded-lg'>
                <Minus size={16} className='text-brand-color-light' /> 
              </span>
              <span className='text-color-primary'>1</span>
              <span className='border border-brand-color-light w-[40px] h-[40px] flex justify-center items-center rounded-lg'>
                <Plus size={16} className='text-brand-color-light' />
              </span>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center gap-6'>
          <Image src={patinho} width={104} height={104} alt='Monitor Gamer' className='object-cover rounded-lg'/>
          <div className='w-[232px] gap-6 flex flex-col'>
            <div>
              <p className='text-color-primary'>Teclado Gamer Mecânico Low Profile RGB AW510K 580</p>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-color-primary'><strong>R$1.002,00</strong></span>
              <span className='border border-stroke-color w-[40px] h-[40px] flex justify-center items-center rounded-lg'>
                <Minus size={16} className='text-brand-color-light' /> 
              </span>
              <span className='text-color-primary'>1</span>
              <span className='border border-brand-color-light w-[40px] h-[40px] flex justify-center items-center rounded-lg'>
                <Plus size={16} className='text-brand-color-light' />
              </span>
            </div>
          </div>
        </div>


      </main>

      <footer className='h-[224px] p-8 grid gap-8'>
       <div className='grid gap-4'>
        <div className='flex justify-between item-center text-color-primary text-xl'>
          <p>Total:</p>
          <span><strong>R$10.681,69</strong></span>
        </div>
        <div className='flex justify-end items-center gap-2 text-brand-color-light'>
          <Tag size={24}/>
          <span>Adicionar cupom</span>
        </div>
       </div>
       <div>
        <button className='bg-brandColor w-[364px] h-16 rounded-lg text-color-primary'>Finalizar Compra</button>
       </div>
      </footer>
    </div>
  )
}