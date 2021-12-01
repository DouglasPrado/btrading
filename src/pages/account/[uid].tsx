import { SiteLayout } from '@/components/Layouts'
import { useRouter } from 'next/router'
import Headings from '@/components/Common/Headings'
import Pagination from '@/components/Common/Pagination'
import Stats from '@/components/Pages/Orders/Stats'

const profile = {
  name: 'Douglas Prado',
}

const wallet = {
  total: '$ 1.128,00',
  open: '$ 120,00'
}


const orders = [
  { id:'1', trader: 'Douglas Prado', exchange: 'Binance', currency: 'BTC', priceStart: '$ 64.350,23', priceTake: '$ 68.050,00', priceStop: '$ 63.200,00', type: 'spot', aport: '$ 120,00', status: 'Ganhou', result: '$ 127,00' },
  { id:'2', trader: 'Thayna', exchange: 'Binance', currency: 'ETH', priceStart: '$ 4.350,23', priceTake: '$ 5.050,00', priceStop: '$ 4.200,00', type: 'future', aport: '$ 120,00', status: 'Perdeu', result: '$ 118,00' },
]
export default function Show() {
  const router = useRouter()
  const { uid } = router.query
  return (
    <SiteLayout fullTitle='Dashboard | BTrading' withHeader withFooter animate>
      <div className="min-h-full">
        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <h1 className="text-white">lembrete: Ver rentabilidade mensal da conta</h1>
              <Headings title={profile.name} btn_title="realizar ordem" />
              <Stats />
              <div className="px-4 py-8 sm:px-0 dark:text-white">
              <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
                <table className=" divide-y divide-yellow-900">
                  <thead className="dark:bg-yellow-500">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          Trader
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          Exchange
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          Criptomoeda
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          Preço de entrada
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          Preço de saída
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          Preço de stop
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          Tipo
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          Resultado
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          Aporte
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y dark:divide-gray-900">
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.trader}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.exchange}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.currency}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.priceStart}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.priceTake}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.priceStop}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.aport}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.status}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.result}</td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                <Pagination />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </SiteLayout>
  )
}
