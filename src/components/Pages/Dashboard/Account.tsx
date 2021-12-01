import clsx from 'clsx'
import {
  CheckCircleIcon,
  OfficeBuildingIcon,
  TrendingUpIcon,
  ShieldCheckIcon
} from '@heroicons/react/solid'
import Link from 'next/link'
type ArbitrageProps = {
  className?: string
  variants?: 'primary' | 'secondary'
} & React.ComponentPropsWithoutRef<'button'>

const Account = ({ className = '', variants = 'primary', ...props }: ArbitrageProps) => {
  return (
    <Link href="/account/1" >
      <a className="cursor-pointer w-full ">
        <div className="bg-white dark:bg-gray-800 dark:hover:bg-opacity-80 rounded shadow ">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <img
                    className="hidden h-16 w-16 rounded-full sm:block hover:animate-spin"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                    alt=""
                  />
                  <div>
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 rounded-full sm:hidden"
                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                        alt=""
                      />
                      <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-700 dark:text-gray-100 sm:leading-9 sm:truncate">
                        Binance
                      </h1>
                    </div>
                    <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                      <dt className="sr-only">conta de exchange</dt>
                      <dd className="flex items-center text-sm text-gray-500 font-medium sm:mr-6">
                        <ShieldCheckIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {"conta de exchange"}
                      </dd>
                      <dt className="sr-only">estimativa</dt>
                      <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
                        <TrendingUpIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                        rentabilidade atual 2,1%
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-col sm:flex-wrap">
                  <dt className="sr-only">Estimativa</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
                      <h1 className="text-2xl font-bold leading-7 text-gray-500 sm:leading-9 sm:truncate ">
                        R$ 120,00
                      </h1>
                    </dd>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">total da carteira: R$ 1.390,00</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Account
