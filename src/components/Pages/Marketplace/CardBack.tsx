import { Fragment, useState, useRef } from 'react'
import { SparklesIcon, TrendingUpIcon, UserIcon } from '@heroicons/react/outline'

export default function CardBack({ trader, isShowing, setIsShowing }) {
  const refBack = useRef(null);
  return(
    <li
      ref={refBack}
      key={`${trader.email}-back`}
      className="border-2 border-yellow-400 h-full cursor-pointer w-full col-span-1 flex flex-auto flex-col text-center bg-white dark:bg-gray-800 dark:hover:bg-opacity-80 rounded-lg hover:shadow absolute"
    >
      <div className="flex flex-1 flex-row dark:bg-gray-700 p-3 justify-center items-center rounded-t-lg">
        <span className="inline-block relative mr-3 ">
          <div className="flex -space-x-1 overflow-hidden justify-between p-1">
            <img
              className="max-w-14 max-h-14 inline-block rounded-full"
              src={"https://yt3.ggpht.com/ytc/AKedOLQ-iN_G3AWRw_z6pYyNE1KsbbMx6Xk9h_Fy1-xjDg=s88-c-k-c0x00ffffff-no-rj"}
              alt=""
            />
          </div>
        </span>
        <span className="inline-block relative ">
          <h3 className="text-gray-900 dark:text-gray-100 text-md font-medium">
          Investidor moderno
          </h3>
          <p className="mt-1 text-xs dark:text-gray-300 font-light hover:underline">investidormoderno.com.br</p>
        </span>

      </div>
      <div className="flex flex-1">
        <div className="-mt-px">
          <dl className="flex-grow flex flex-row justify-between p-3 mb-5">
            <dd className="text-gray-500 dark:text-gray-300 text-sm text-left">
            Empresa formada por um time de Traders, Mentores e Programadores, com experiência no mercado financeiro.
            </dd>
          </dl>
          <dl className="flex-grow flex flex-row justify-between px-3 ">
            <dl className="text-gray-500 dark:text-gray-400 text-sm">
              <img src="#" className="h-6 w-6 opacity-15" alt="" />
            </dl>
            <dd className="text-gray-500 dark:text-gray-400 text-sm">
              <a href="" className="hover:underline">Instagram</a>
            </dd>
          </dl>
          <dl className="flex-grow flex flex-row justify-between px-3 ">
            <dl className="text-gray-500 dark:text-gray-400 text-sm">
              <img src="#" className="h-6 w-6 opacity-15" alt="" />
            </dl>
            <dd className="text-gray-500 dark:text-gray-400 text-sm">
              <a href="" className="hover:underline">Facebook</a>
            </dd>
          </dl>
          <dl className="flex-grow flex flex-row justify-between px-3 pb-5">
            <dl className="text-gray-500 dark:text-gray-400 text-sm">
              <img src="#" className="h-6 w-6 opacity-15" alt="" />
            </dl>
            <dd className="text-gray-500 dark:text-gray-400 text-sm">
              <a href="" className="hover:underline">Twitter</a>
            </dd>
          </dl>
        </div>

      </div>
    </li>
  )
}
