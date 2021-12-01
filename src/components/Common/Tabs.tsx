// eslint-disable-next-line @typescript-eslint/ban-types
//https://headlessui.dev/react/tabs
import { Key, ReactChild, ReactFragment, ReactPortal, SetStateAction, useEffect, useState } from "react"
import { classNames } from "@/utils/helper"
import Pagination from "./Pagination"

export default function Tabs({ tabs, contents, ...props }) {
  const [index, setIndex] = useState('associados')
  const onSelected = (tab: SetStateAction<string>) => {
    setIndex(tab)
  }
  return (
    <div {...props} >
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md lowercase"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab: { name: string | null | undefined }) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="bg-white relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              onClick={() => onSelected(tab.href.replace('#', ''))}
              className={classNames(
                tab.href.replace('#', '') === index ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 cursor-pointer'
              )}
              aria-current={tab.href.replace('#', '') === index ? 'page' : undefined}
            >
              <span className="lowercase">{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.href.replace('#', '') === index ? 'bg-primary' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Data
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Cashback
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Preço
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  { contents[index] && contents[index].map((content: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; date: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; cashback: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; transaction: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => (
                    <tr key={content.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 lowercase">{content.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{content.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{content.cashback}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{content.transaction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pb-5 px-5">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
