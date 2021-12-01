import { useState } from 'react'
import { SparklesIcon, TrendingUpIcon, UserIcon } from '@heroicons/react/outline'
import {  } from '@heroicons/react/solid'
import bitcoin from '@/assets/images/currencies/1.png'
import xrp from '@/assets/images/currencies/52.png'
import ether from '@/assets/images/currencies/1027.png'
import cardano from '@/assets/images/currencies/2010.png'

export default function CardTrader({ dataTrader, setOpen }) {
  const [trader, setTrader] = useState(dataTrader)
  return (
      trader && <li
        key={trader.email}
        className="col-span-1 flex flex-col text-center bg-white dark:bg-gray-800 dark:hover:bg-opacity-80 rounded-lg hover:shadow "
      >
        <div className="flex-1 flex flex-col p-8">
          <span className="inline-block relative">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
              src={trader.imageUrl}
              alt=""
            />
            <span className={`animate-ping absolute bottom-0 right-16 inline-flex h-4 w-4 rounded-full ${trader.status ? 'bg-green-300' : 'bg-red-400'}`}></span>
            <span className={`absolute bottom-0 right-16 block h-4 w-4 rounded-full ring-2 ${trader.status ? 'bg-green-300' : 'bg-red-400'} ring-white opacity-75`} />

          </span>
          <h3 className="mt-6 text-gray-900 dark:text-gray-100 text-sm font-medium ">
            {trader.name}
            <span className="ml-3 text-green-600 font-semibold">{trader.profit}</span>

          </h3>
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-gray-500 dark:text-gray-400 text-sm">

              {trader.title}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3 ">
              <span className={`ring-gray-100 ring-1 px-2 py-1 ${trader.status ? 'text-green-800' : 'text-red-800'} text-xs font-medium ${trader.status ? 'bg-green-100' : 'bg-red-100'} rounded-full`}>
                {trader.role}
              </span>
            </dd>
          </dl>
          <div className="flex -space-x-1 overflow-hidden justify-center mt-3 p-1">
            <img
              className="inline-block h-6 w-6 rounded-full"
              src={bitcoin.src}
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full"
              src={ether.src}
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full"
              src={cardano.src}
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full"
              src={xrp.src}
              alt=""
            />
          </div>
        </div>
          <div>
            <div className="-mt-px flex">
              <div className="w-0 flex-1 flex">
                {!trader.follow &&
                  <a
                    href="/payment/1"
                    className="cursor-pointer relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-yellow-900 font-medium rounded-bl-lg hover:text-yellow-900 bg-yellow-400 dark:hover:bg-yellow-300"
                  >
                    <SparklesIcon className="w-5 h-5 text-yellow-900 " aria-hidden="true" />
                    <span className="ml-3 text-yellow-900">conectar</span>
                  </a>
                }
                 {trader.follow &&
                  <a
                    className="cursor-none relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium rounded-bl-lg hover:text-white bg-green-400"
                  >
                    <SparklesIcon className="w-5 h-5 text-white " aria-hidden="true" />
                    <span className="ml-3 text-white">conectado</span>
                  </a>
                }
              </div>

              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`/marketplace/${trader.id}`}
                  className="cursor-pointer relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-200 font-medium rounded-br-lg hover:text-gray-500 dark:hover:bg-gray-800"
                >
                  <UserIcon className="w-5 h-5 " aria-hidden="true" />
                  <span className="ml-3">perfil</span>
                </a>
              </div>
            </div>
          </div>
      </li>
  )
}
