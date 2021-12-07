import { Fragment, useState, useRef } from 'react'
import { SparklesIcon, TrendingUpIcon, UserIcon } from '@heroicons/react/outline'
import {  } from '@heroicons/react/solid'
import bitcoin from '@/assets/images/currencies/1.png'
import xrp from '@/assets/images/currencies/52.png'
import ether from '@/assets/images/currencies/1027.png'
import cardano from '@/assets/images/currencies/2010.png'

export default function CardFront({ trader, isShowing, setIsShowing, resetIsShowing }) {
  return(
  <li
    key={`${trader.email}-front`}
    className="cursor-pointer h-full w-full col-span-1 flex flex-col text-center bg-white dark:bg-gray-800 dark:hover:bg-opacity-80 rounded-lg hover:shadow absolute"
  >
    <div className="flex-1 flex flex-row dark:bg-gray-700 p-3 justify-center items-center rounded-t-lg">
      <span className="inline-block relative ">
        <h3 className="text-gray-900 dark:text-gray-100 text-md font-medium">
        {trader.title}
        </h3>
        <p className="mt-3 text-xs dark:text-gray-300 font-light">{trader.description || "Trade system realizado pelo investidor moderno"}</p>
      </span>
      <span className="inline-block relative ">
        <div className="flex -space-x-1 overflow-hidden justify-center p-1">
          <img
            className="max-w-16 max-h-16 inline-block rounded-full"
            src={"https://pancakeswap.finance/images/tokens/0x8BDd8DBcBDf0C066cA5f3286d33673aA7A553C10.svg"}
            alt=""
          />
        </div>
      </span>
    </div>
    <div>
      <div className="-mt-px">
        <dl className="mt-1 flex-grow flex flex-row justify-between px-3 pt-3">
          <dt className="text-gray-500 dark:text-gray-400 text-sm">Risco</dt>
          <dd className="text-gray-500 dark:text-green-400 text-sm font-semibold">
            <div className="flex flex-row h-4 items-end">
              <div className="h-1 w-1 mr-0.5 bg-green-400"></div>
              <div className="h-2 w-1 mr-0.5 bg-yellow-500"></div>
              <div className="h-3 w-1 mr-0.5 bg-yellow-600"></div>
              <div className="h-4 w-1 mr-0.5 bg-red-500"></div>
              <div className="h-5 w-1 mr-0.5 bg-red-600"></div>
              {/* <div className="h-6 w-1 mr-1 bg-gray-400"></div> */}
            </div>
          </dd>
        </dl>
        <dl className="mt-1 flex-grow flex flex-row justify-between px-3">
          <dt className="text-gray-500 dark:text-gray-400 text-sm">PNL</dt>
          <dd className="text-gray-500 dark:text-green-400 text-sm font-semibold">
            23,9%
          </dd>
        </dl>
        <dl className="mt-1 flex-grow flex flex-row justify-between px-3">
          <dt className="text-gray-500 dark:text-gray-400 text-sm">Novos seguidores</dt>
          <dd className="text-gray-500 dark:text-gray-400 text-sm">
            273
          </dd>
        </dl>

        <dl className="mt-6 pt-3 flex-grow flex flex-row justify-center border-t-2 dark:border-gray-900">
          <dd className="text-gray-500 dark:text-gray-50 text-lg font-semibold">
          <dt className="text-gray-500 dark:text-gray-400 text-sm">Assine</dt>
            R$ 120,00/mês
          </dd>
        </dl>
        <dl className="mt-1 flex-grow flex flex-row justify-center mb-3">
          <dd className="text-gray-500 dark:text-gray-400 text-sm">
            <div className="flex -space-x-1 overflow-hidden justify-center p-1">
              <img
                className="inline-block h-6 w-6 rounded-full border-2 dark:border-gray-900"
                src={bitcoin.src}
                alt=""
              />
              <img
                className="inline-block h-6 w-6 rounded-full border-2 dark:border-gray-900"
                src={ether.src}
                alt=""
              />
              <img
                className="inline-block h-6 w-6 rounded-full border-2 dark:border-gray-900"
                src={cardano.src}
                alt=""
              />
              <img
                className="inline-block h-6 w-6 rounded-full border-2 dark:border-gray-900"
                src={xrp.src}
                alt=""
              />
            </div>
          </dd>
        </dl>
      </div>
      <div className="-mt-px flex">
        <a
          href="/payment/1"
          className="cursor-pointer relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-yellow-900 font-medium rounded-b-lg hover:text-yellow-900 bg-yellow-400 dark:hover:bg-yellow-300"
        >
          <SparklesIcon className="w-5 h-5 text-yellow-900 " aria-hidden="true" />
          <span className="ml-3 text-yellow-900">começe a ganhar</span>
        </a>
      </div>
    </div>
  </li>
  )
}
