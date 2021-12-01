/* This example requires Tailwind CSS v2.0+ */
import { AdjustmentsIcon, ShieldCheckIcon } from '@heroicons/react/outline'

const accounts = [
  {
    id: '1',
    name: 'Binance',
    title: 'Verificada',
    saldo: 'R$ 120,00',
    imageUrl:
      'data:image/png;base64,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',
  },
  // More people...
]

export default function Accounts() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {accounts.map((account) => (
        <li key={account.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" alt="" />
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-base font-medium truncate">{account.name}</h3>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate inline-flex">
                <ShieldCheckIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                {account.title}
                </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`#`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <AdjustmentsIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Configurações</span>
                </a>
              </div>

            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
