import { useState } from 'react';

import logo from '@/assets/images/logo.svg'
import app from '@/assets/images/download_app.png'
import { ShieldCheckIcon, CheckIcon } from '@heroicons/react/outline'
import { Tab } from '@headlessui/react'
import { classNames } from '@/utils/helper'
import Testimonials from '@/components/Common/Testimonials';
import Steps from '@/components/Common/Steps';

const steps = [
  { id: '01', name: 'Dados pessoais', href: '/payment/2/steps/step-1', status: 'complete' },
  { id: '02', name: 'Pagamento', href: '/payment/2/steps/step-2', status: 'complete' },
  { id: '03', name: 'Confirmação', href: '/payment/2/steps/step-3', status: 'current' },
]

export default function StepsThree({ product }) {
  return (
    <div className="bg-white">
      <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
      <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full" aria-hidden="true" />

      <header className="relative max-w-full ml-3 mx-auto py-6 lg:bg-transparent lg:grid lg:grid-cols-2 lg:gap-x-16 lg:px-8 lg:pt-16 lg:pb-10">
        <div className="max-w-full mx-auto flex px-4 lg:max-w-lg lg:w-full lg:px-0">
          <a>
            <span className="sr-only">albert</span>
            <img
              className="block h-6 w-auto"
              src={logo.src}
              alt="albert"
              />
          </a>
        </div>
      </header>

      <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 ">
        <h1 className="sr-only">Checkout</h1>
        <section
          aria-labelledby="summary-heading"
          className=" text-gray-900 pb-12 md:px-10 lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2 "
        >
          <div className="rounded-lg shadow overflow-hidden flex justify-center p-5 lg:p-0">
            <div className="lg:p-5 w-full">
              <h2 id="summary-heading" className="sr-only">
                resumo
              </h2>
              <div className="flex justify-end hidden">
                <div className="mb-6 w-1/2 h-6 bg-green-600 px-10 py-5 rounded-md flex justify-center items-center">
                  <ShieldCheckIcon className="h-6 w-6 mr-3 text-white" />
                  <h1 className="text-white">compra segura</h1>
                </div>
              </div>

              <div className="flex">
              <img
                  className="block h-28  w-auto "
                  src={app.src}
                  alt="albert"
                />
              <ul role="list" className="text-sm font-medium divide-y divide-gray-900 divide-opacity-10">

                <li key={product.id} className="flex items-start py-3 space-x-4">
                  <div className="flex-auto space-y-1">
                    <h3 className="text-lg font-bold text-gray-700">{product.name} <b>{product.type}</b></h3>
                    <p className="text-gray-400" >{product.description}</p>
                  </div>
                </li>
              </ul>
              </div>
              <dl className="text-sm font-medium border-t border-gray-900 border-opacity-10 pt-3">

                <div className="flex items-center justify-start border-t border-white border-opacity-10 text--gray-900 pt-3">
                  <dd className="mt-1 text-3xl font-extrabold text-gray-700">R$ 232,00</dd>
                </div>
                <div>
                  <dd className="text-gray-400 mt-3">ou em 12 x de 32,00 sem juros</dd>
                </div>
              </dl>
              <Testimonials testimonials={product.testimonials[0]} />

            </div>
          </div>
        </section>

        <section
          aria-labelledby="payment-and-shipping-heading"
          className="lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
        >
          <Steps steps={steps} />
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { uid } = context.params
  const dataPayment = {
    paymentId: 'r7em09QV',
  }
  const product = {
    id: 1,
    name: 'assinatura para licenca de 12 meses',
    type: 'licenciado',
    description: 'você pode solicitar seu convite pelo site ou através de um amigo já cadastrado na plataforma.',
    price: 'R$ 210,00',
    testimonials: [{
      name: "Lindomara Cardozo",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      message: "retorno imediato, em 15 dias eu paguei minha licença e agora é só lucro.",
      licence: "Licenciado",
      region: "São José dos Ca..."
    }]
  }

  if (!dataPayment) {
    return {
      redirect: {
        destination: `/payment/${uid}/steps/step-2`,
        permanent: false,
      },
    }
  }

  return {
    props: { dataPayment, product },
  }

}
