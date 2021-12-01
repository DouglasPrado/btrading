/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CheckIcon, ArchiveIcon, CogIcon, FireIcon } from '@heroicons/react/outline'
import { classNames } from '@/utils/helper'
import PopOver from '@/components/Common/PopOver'
const defaultStats = [
  { id: 1, name: 'Total Carteira', stat: 'R$ 71.897', icon: ArchiveIcon, change: '122', changeType: 'increase',
   popMessage: {
    button: "Detalhes",
    title: "Sobre a carteira",
    message: "Rentabilidade total das arbitragens realizadas pelo robô."
  } },
  {
    id: 2, name: 'Rentabilidade', stat: '58.16%', icon: FireIcon, change: '5.4%', changeType: 'increase', popMessage: {
      button: "Detalhes",
      title: "Sobre rentabilidade",
      message: "Rentabilidade total das arbitragens realizadas pelo robô."
  }},
]

export default function Stats({ stats = defaultStats }) {
  return (
    <div className="pb-8">
      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50">PNL dos ultimos 30 dias</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white dark:bg-gray-800 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-yellow-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 dark:text-gray-300 truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowSmDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                {item.change}
              </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 dark:bg-gray-700 px-4 py-4 sm:px-6">
                <div className="text-sm mb-5">
                  <PopOver popMessage={item.popMessage} className="font-medium text-gray-900 dark:text-gray-50 hover:text-gray-100" />
                </div>
              </div>
            </dd>
          </div>
        ))}
        <div
            className="relative bg-white dark:bg-gray-800 pt-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <div className="w-full flex items-center justify-between space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 dark:text-gray-100 text-sm font-medium truncate">Habilitar arbitragem</h3>
              </div>
              <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm truncate">Ative a arbitragem para aumentar seus ganhos.</p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-900 absolute bottom-0 inset-x-0 bg-gray-50 dark:bg-gray-700">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 dark:text-gray-100 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 dark:hover:text-gray-100"
                >
                  <CheckIcon className="w-5 h-5 text-green-400" aria-hidden="true" />
                  <span className="ml-3 text-green-400">Ativar</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:$`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <CogIcon className="w-5 h-5 text-gray-400 dark:hover:text-gray-100 dark:text-gray-50" aria-hidden="true" />
                  <span className="ml-3 dark:text-gray-50 dark:hover:text-gray-300">Configurações</span>
                </a>
              </div>
            </div>
          </div>
          </div>
      </dl>
    </div>
  )
}
