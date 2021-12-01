import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { classNames } from '@/utils/helper'
const stats = [
  { name: 'Total da carteira', stat: '$ 1.239,00', previousStat: '$ 1.000,00', change: '12%', changeType: 'increase' },
  { name: 'Operações spot', stat: '54.57%', previousStat: '52.10%', change: '2.02%', changeType: 'increase' },
  { name: 'Operações futuro', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

export default function Stast() {
  return (
    <div>
      <dl className="mt-6 grid grid-cols-1 rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow divide-y divide-gray-200 dark:divide-gray-900 md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 sm:p-6">
            <dt className="text-base font-normal text-gray-900 dark:text-gray-50">{item.name}</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-yellow-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">inicial {item.previousStat}</span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowSmDownIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
