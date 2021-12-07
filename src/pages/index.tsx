import { parseCookies } from 'nookies'
import { SiteLayout } from '@/components/Layouts'
import { getAPIClient } from '@/services/axios'
import Account from '@/components/Pages/Dashboard/Account'
import Banner from '@/components/Common/Banner'
import Headings from '@/components/Common/Headings'
import { PlusCircleIcon } from '@heroicons/react/outline'
import CardTrader from '@/components/Common/CardTrader'
import CardCrypto from '@/components/Common/CardCrypto'
import btcImg from '@/assets/images/currencies/1.png'
import usdtImg from '@/assets/images/currencies/825.png'
import xrpImg from '@/assets/images/currencies/52.png'
import ethImg from '@/assets/images/currencies/1027.png'
import bnbImg from '@/assets/images/currencies/1839.png'
import adaImg from '@/assets/images/currencies/2010.png'
import solImg from '@/assets/images/currencies/5426.png'

const traders = [
  {
    name: 'Douglas Prado',
    title: 'Fundamentalista',
    role: 'futuro',
    email: 'douglasprado@example.com',
    telephone: '+1-202-555-0170',
    profit: '+ 1,2%',
    status: true,
    follow: true,
    imageUrl:
      'https://lh3.googleusercontent.com/ogw/ADea4I4D8PXIbXuZya5-fH4FD-svLx-zRpdPWdwi8SDXZQ',
  }
]
const cryptos = [
  {
    id:1,
    name: 'Bitcoin',
    price: '$ 64.123,34',
    imageUrl:btcImg.src
  },
  {
    id:2,
    name: 'Etherium',
    price: '$ 4.123,34',
    imageUrl:ethImg.src
  },
  {
    id:3,
    name: 'Cardano',
    price: '$ 3,34',
    imageUrl:adaImg.src
  },
  {
    id:4,
    name: 'USDT',
    price: '$ 1,00',
    imageUrl:usdtImg.src
  },
  {
    id:1,
    name: 'XRP',
    price: '$ 423,34',
    imageUrl:xrpImg.src
  },
  {
    id:2,
    name: 'BNB',
    price: '$ 422,41',
    imageUrl:bnbImg.src
  },
  {
    id:3,
    name: 'Solana',
    price: '$ 127,34',
    imageUrl:solImg.src
  },
  {
    id:4,
    name: 'USDT',
    price: '$ 1,00',
    imageUrl:usdtImg.src
  },
  {
    id:1,
    name: 'Bitcoin',
    price: '$ 64.123,34',
    imageUrl:btcImg.src
  },
  {
    id:2,
    name: 'Etherium',
    price: '$ 4.123,34',
    imageUrl:ethImg.src
  },
  {
    id:3,
    name: 'Cardano',
    price: '$ 3,34',
    imageUrl:adaImg.src
  },
  {
    id:4,
    name: 'USDT',
    price: '$ 1,00',
    imageUrl:usdtImg.src
  },
  {
    id:1,
    name: 'Bitcoin',
    price: '$ 64.123,34',
    imageUrl:btcImg.src
  },
  {
    id:2,
    name: 'Etherium',
    price: '$ 4.123,34',
    imageUrl:ethImg.src
  },
  {
    id:3,
    name: 'Cardano',
    price: '$ 3,34',
    imageUrl:adaImg.src
  },
  {
    id:4,
    name: 'USDT',
    price: '$ 1,00',
    imageUrl:usdtImg.src
  },
]
export default function Home() {

  return (
    <SiteLayout fullTitle='Dashboard | BTrading' withHeader withFooter animate>
      <div className="min-h-full ">
      {/* <Banner /> */}

        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="flex flex-col items-center ">
                <Account className="w-full" />
                <a href="/configuration" className="text-sm text-gray-50 hover:underline hover:text-yellow-400 mt-3">adicionar nova conta</a>
              </div>
              <div className="px-4 py-6 sm:px-0">
                <h1 className="text-xl text-gray-700 mb-1 dark:text-gray-50">minhas criptos</h1>
                <div className="overflow-x-auto hide-scroll-bar pt-5">
                  <div className="relative flex ">
                    {cryptos.map(crypto => (
                      <CardCrypto crypto={crypto}/>
                    ))}
                  </div>
                </div>
              </div>
              <div className="">
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl text-gray-700 mb-6 dark:text-gray-50">últimos trades</h1>
                    <a href="" className="text-sm text-gray-50 hover:underline hover:text-yellow-400">ver todos</a>
                  </div>
                  <table className="min-w-full divide-y divide-gray-900">
                    <tbody>
                      <tr  className={'bg-gray-800 border-l-4 border-red-400 border-b-2 border-b-gray-900 hover:bg-opacity-80'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-500">PancakeSwap</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Analise RSI </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">BTC/USDT</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-300">-1.5%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-300">Completo</td>
                      </tr>
                      <tr  className={'bg-gray-800 border-l-4 border-l-green-400 border-b-2 border-b-gray-900  hover:bg-opacity-80 '}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-500">Binance</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Analise RSI</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">BTC/USDT</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-300">2%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-300">Completo</td>
                      </tr>
                      <tr  className={'bg-gray-800 border-l-4 border-l-red-400 border-b-2 border-b-gray-900  hover:bg-opacity-80 '}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-500">Binance</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Hold</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">BTC/USDT</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-300">2%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-300">Aberto</td>
                      </tr>
                      <tr  className={'bg-gray-800 border-l-4 border-l-green-400 border-b-2 border-b-gray-900  hover:bg-opacity-80 '}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-500">Binance</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Estocastico</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">BTC/USDT</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-300">2%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-300">Completo</td>
                      </tr>
                      <tr  className={'bg-gray-800 border-l-4 border-l-red-400 border-b-2 border-b-gray-900  hover:bg-opacity-80 '}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-500">Binance</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Analise RSI</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">BTC/USDT</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-300">2%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-300">Completo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              {/* Replace with your content */}
              <div className="px-4 py-6 sm:px-0">
                <h1 className="text-xl text-gray-700 mb-6 dark:text-gray-50">minhas conexões</h1>
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  { traders.map(trader => <CardTrader dataTrader={trader} cta={false} />)}
                  <li key='0-add'
                    className="col-span-1 flex flex-col text-center bg-white dark:bg-gray-800 dark:hover:bg-opacity-80 rounded-lg shadow border-2 border-dashed dark:text-gray-700 dark:border-gray-700 dark:border-opacity-50"
                  >
                    <div className="flex-1 flex flex-col p-4 justify-center items-center">
                      <span className="inline-block relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28 border-2 border-dashed rounded-full dark:border-gray-700 dark:opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <h3 className="mt-8 text-gray-900 dark:text-gray-500 text-sm font-medium bg-gray-900 dark:hover:bg-opacity-50 cursor-pointer rounded-md py-2 px-5 animate-bounce-slow">adicionar conexões</h3>
                    </div>
                  </li>
                </ul>

              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
      <style>{`
        .hide-scroll-bar {
          -ms-overflow-style: none!important;
          scrollbar-width: none!important;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none!important;
        }
    `}</style>
    </SiteLayout>
  )
}

export const getServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ['trading.token']: token } = parseCookies(ctx)
  if (!token) {
    return {
      redirect: {
        destination: '/authentication/login',
        permanent: false,
      }
    }
  }

  return {
    props: { }
  }
}
