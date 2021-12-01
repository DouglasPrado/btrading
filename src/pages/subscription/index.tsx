import Pagination from '@/components/Common/Pagination'
import { SiteLayout } from '@/components/Layouts'
import Stats from '@/components/Pages/Arbitrage/Stats'
const subscriptions = [
  { id:'1', exchange: 'Binance', transaction: 'BTC > USDT > BNB > BTC', profit: '0,2%', aport: '$ 120,00' },
  { id:'1', exchange: 'Binance', transaction: 'BTC > BNB > LTC > BTC', profit: '0,4%', aport: '$ 80,00' },
  { id:'1', exchange: 'Binance', transaction: 'BTC > AXS > BNB > BTC', profit: '0,7%', aport: '$ 80,00' },
  { id:'1', exchange: 'Binance', transaction: 'BTC > ADA > ETH > BTC', profit: '0,9%', aport: '$ 120,00' },
  { id:'1', exchange: 'Binance', transaction: 'BTC > MOD > ETH > BTC', profit: '0,12%', aport: '$ 80,00' },
]
export default function Index() {
  return (
    <SiteLayout fullTitle='Arbitragem | BTrading' withHeader withFooter animate>
      <div className="min-h-full">
        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <Stats />
              <h1 className="text-lg leading-6 font-medium text-white">Extrato</h1>
              <div className="px-4 py-8 sm:px-0">
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-yellow-900">
                        <thead className="dark:bg-yellow-500">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                            >
                              Exchange
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                            >
                              Transação
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                            >
                              Lucro/Prejuizo
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                            >
                              Aporte
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y dark:divide-gray-900">
                          {subscriptions.map((subscription) => (
                            <tr key={subscription.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{subscription.exchange}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">{subscription.transaction}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">{subscription.profit}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">{subscription.aport}</td>
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
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </SiteLayout>
  )
}
