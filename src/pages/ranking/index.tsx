import Pagination from '@/components/Common/Pagination'
import { StarIcon, ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/react/outline'
import { SiteLayout } from '@/components/Layouts'
import { classNames } from '@/utils/helper'


// https://api.coinmarketcap.com/data-api/v3/topsearch/rank
const currencies = [
  {
    "id": 5994,
    "dataType": 2,
    "name": "SHIBA INU",
    "symbol": "SHIB",
    "slug": "shiba-inu",
    "rank": 9,
    "status": "active",
    "marketCap": 36812500071.78,
    "priceChange": {
    "price": 0.00006704207086,
    "priceChange24h": -3.33,
    "priceChange7d": 37.58,
    "priceChange30d": 691.39,
    "volume24h": 4808691002.74
  }
  },
  {
    "id": 10586,
    "dataType": 2,
    "name": "TABOO TOKEN",
    "symbol": "TABOO",
    "slug": "taboo-token",
    "rank": 241,
    "status": "active",
    "marketCap": 438104810.86,
    "priceChange": {
    "price": 0.0447837296979,
    "priceChange24h": 67.61,
    "priceChange7d": 327.38,
    "priceChange30d": 4370.39,
    "volume24h": 38154838.20
  }
  },
  {
    "id": 1966,
    "dataType": 2,
    "name": "Decentraland",
    "symbol": "MANA",
    "slug": "decentraland",
    "rank": 38,
    "status": "active",
    "marketCap": 5300014366.82,
    "priceChange": {
    "price": 2.91700616671666,
    "priceChange24h": -9.42,
    "priceChange7d": 245.47,
    "priceChange30d": 290.46,
    "volume24h": 3792440179.20
  }
  },
  {
    "id": 6210,
    "dataType": 2,
    "name": "The Sandbox",
    "symbol": "SAND",
    "slug": "the-sandbox",
    "rank": 64,
    "status": "active",
    "marketCap": 2558301126.64,
    "priceChange": {
    "price": 2.86725946072151,
    "priceChange24h": 5.06,
    "priceChange7d": 230.47,
    "priceChange30d": 244.50,
    "volume24h": 6084014449.30
  }
  },
  {
    "id": 13190,
    "dataType": 2,
    "name": "MiniFlokiADA",
    "symbol": "MFLOKIADA",
    "slug": "miniflokiada",
    "rank": 3017,
    "status": "active",
    "marketCap": 0,
    "priceChange": {
    "price": 0.00000610234243,
    "priceChange24h": 44.40,
    "priceChange7d": 194.94,
    "priceChange30d": 0,
    "volume24h": 1892445.43
  }
  },
  {
    "id": 6636,
    "dataType": 2,
    "name": "Polkadot",
    "symbol": "DOT",
    "slug": "polkadot-new",
    "rank": 8,
    "status": "active",
    "marketCap": 49759963280.59,
    "priceChange": {
    "price": 50.38578930012975,
    "priceChange24h": 2.82,
    "priceChange7d": 13.67,
    "priceChange30d": 60.58,
    "volume24h": 3580564850.31
  }
  },
  {
    "id": 12562,
    "dataType": 2,
    "name": "Mononoke Inu",
    "symbol": "Mononoke-Inu",
    "slug": "mononoke-inu",
    "rank": 2798,
    "status": "active",
    "marketCap": 0,
    "priceChange": {
    "price": 3.23e-10,
    "priceChange24h": -17.29,
    "priceChange7d": 0,
    "priceChange30d": 0,
    "volume24h": 10570175.32
  }
  },
  {
    "id": 11541,
    "dataType": 2,
    "name": "Ariva",
    "symbol": "ARV",
    "slug": "ariva",
    "rank": 699,
    "status": "active",
    "marketCap": 37264352.45,
    "priceChange": {
    "price": 0.00073019610043,
    "priceChange24h": -10.85,
    "priceChange7d": -19.01,
    "priceChange30d": 313.22,
    "volume24h": 7647951.64
  }
  },
  {
    "id": 13313,
    "dataType": 2,
    "name": "Shiboki",
    "symbol": "SHIBOKI",
    "slug": "shiboki",
    "rank": 3031,
    "status": "active",
    "marketCap": 0,
    "priceChange": {
    "price": 0.00000648046968,
    "priceChange24h": 39.41,
    "priceChange7d": 0,
    "priceChange30d": 0,
    "volume24h": 1787830.41
  }
  },
  {
    "id": 1839,
    "dataType": 2,
    "name": "Binance Coin",
    "symbol": "BNB",
    "slug": "binance-coin",
    "rank": 3,
    "status": "active",
    "marketCap": 92154817107.07,
    "priceChange": {
      "price": 552.48,
      "priceChange24h": 1.22,
      "priceChange7d": 15.23,
      "priceChange30d": 31.83,
      "volume24h": 2406087345.71
  }
  }
  ]

export default function Index() {
  return (
    <SiteLayout fullTitle='Ranking Fundamentalista | BTrading' withHeader withFooter animate>
      <div className="min-h-full">
        <div className="py-10">

          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4m:px-0">
                <h1 className="text-lg leading-6 font-medium text-gray-900">Ranking Fundamentalista</h1>
                <div className="px-4 py-8 sm:px-0">
                <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th></th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              #
                            </th>
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
                              Preço
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              24%
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Marketcap
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Volume
                            </th>
                            <th></th>

                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {currencies.map((currency) => (
                            <tr key={currency.id}>
                              <td className="px-6 py-7 whitespace-nowrap text-sm font-medium text-gray-900">
                                <StarIcon className="w-5 h-5 text-gray-400" />
                              </td>
                              <td className="px-3 py-7 whitespace-nowrap text-sm font-medium text-gray-900">{currency.rank}</td>
                              <td className="px-6 py-7 whitespace-nowrap text-sm font-medium text-gray-900">
                                <img className="h-10 w-10 rounded-full" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} alt="" />
                              </td>
                              <td className="px-6 py-7 whitespace-nowrap text-sm font-medium text-gray-900">{currency.name}</td>
                              <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500">{currency.priceChange.price}</td>
                              <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500 inline-flex">
                                <p className={classNames(
                                      currency.priceChange.priceChange24h > 0 ? 'text-green-600' : 'text-red-600',
                                      'ml-2 flex items-baseline text-sm font-semibold'
                                    )}
                                  >
                                    {currency.priceChange.priceChange24h > 0 ? (
                                      <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                    ) : (
                                      <ArrowSmDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                                    )}
                                    {currency.priceChange.priceChange24h}
                                  </p>
                                </td>
                              <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500">{currency.marketCap}</td>
                              <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500">{currency.priceChange.volume24h}</td>
                              <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500"><a className="text-primary-500 underline" href={currency.href}>whitepaper</a></td>
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
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </SiteLayout>
  )
}
