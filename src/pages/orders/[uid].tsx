import { useState } from 'react'
import { SiteLayout } from '@/components/Layouts'
import { useRouter } from 'next/router'
import Headings from '@/components/Pages/Orders/Headings'
import Pagination from '@/components/Common/Pagination'
import Stats from '@/components/Pages/Orders/Stats'
import SlideOverCreate from '@/components/Pages/Orders/SlideOverCreate'
import { BanIcon, PencilIcon, PlusIcon } from '@heroicons/react/outline'
import CardInfo from '@/components/Common/CardInfo'
import bitcoin from '@/assets/images/currencies/1.png'
import eth from '@/assets/images/currencies/1027.png'
import Progress from '@/components/Common/Progress'

const profile = {
  title: 'estocastico rsi + hold',
  description: `Este Projeto passa apenas pelo básico da análise técnica e te leva à ESPECIALIZAÇÃO na Análise de SENTIMENTO DE MERCADO, gatilho imprescindível para operar o Criptomercado. A PRIMEIRA ETAPA você fará na plataforma da HotMart, assistindo as aulas. Quantas vezes forem necessárias, sem obrigação de terminar em determinado tempo: é vitalício pra você, incluindo futuras atualizações de conteúdo.

  A SEGUNDA ETAPA é o PROGRAMA DE MENTORIA com SEMINÁRIO SEMANAL, ao vivo, onde você vai tirar as dúvidas, com nosso time de 6 Traders Sêniores, na medida em que vai concluindo as aulas.

  A TERCEIRA ETAPA, a mais legal, é o seu ESTÁGIO real na plataforma de LIVE TRADING da BeloTrade, um escritório profissional de trading. Nele vamos fundamentar e operar juntos OPORTUNIDADES reais de Trading, sob critérios profissionais de gerenciamento de risco e proteção de capital. Você vai participar, ao vivo, da dinâmica que leva ao GATILHO do trading, desde o monitoramento dos ativos, posicionamento de alarmes, abertura da posição e o seu acompanhamento.`
}

const wallet = {
  total: '$ 1.128,00',
  open: '$ 120,00'
}


const orders = [
  { id:'1', exchange: 'Binance', currency: 'BTC', priceStart: '$ 64.350,23', priceTake: '$ 68.050,00', priceStop: '$ 63.200,00', type: 'spot', aport: '$ 120,00', status: 'Ganhou', result: '$ 127,00' },
  { id:'2', exchange: 'Binance', currency: 'ETH', priceStart: '$ 4.350,23', priceTake: '$ 5.050,00', priceStop: '$ 4.200,00', type: 'future', aport: '$ 120,00', status: 'Perdeu', result: '$ 118,00' },
]
export default function Show() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { uid } = router.query
  return (
    <SiteLayout fullTitle='Dashboard | BTrading' withHeader withFooter animate>
      <SlideOverCreate open={open} setOpen={setOpen}/>
      <div className="min-h-full">
        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <Headings title={profile.title} btn_edit={true} btn_title="realizar ordem" btn_function={() => setOpen(true)} />
              <div className="grid px-4 sm:px-0 grid-cols-1 sm:grid-cols-4 sm:gap-5">
                <div className="col-span-1">
                  <div className="flex flex-col mt-5 p-3 dark:bg-gray-800 rounded-md justify-center items-center">
                    <img className="w-44 h-44 border-4 dark:border-yellow-400 flex-shrink-0 mx-auto rounded-full" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
                    <button className="dark:bg-gray-700 p-3 rounded m-5 dark:hover:bg-opacity-60">
                      <PencilIcon className="h-4 w-4 text-white" />
                    </button>
                  </div>

                  <CardInfo className="mt-5">
                    <div className="flex flex-col relative">
                      <h3 className="dark:text-gray-50 text-lg">Nivel do seu perfil </h3>
                      <span className="mt-3">
                        <Progress/>
                      </span>
                    </div>

                  </CardInfo>
                  <CardInfo className="mt-5" title="Categoria" value="Stake" sm />
                  <CardInfo className="mt-5" title="Risco" value="5" sm/>
                  <CardInfo className="mt-5" title="Preço" value="R$ 18,90" sm/>
                  <CardInfo className="mt-5" title="Último trade" value="12/02/2021" sm />

                </div>
                <div className="col-span-3">


                  <div className="mt-5 dark:bg-gray-800 rounded-md">
                    <div className="flex flex-row justify-between items-center">
                      <h3 className="p-5 dark:text-gray-300 text-lg font-semibold">Descrição</h3>
                      <button className="dark:bg-gray-700 p-3 rounded m-5 dark:hover:bg-opacity-60">
                        <PencilIcon className="h-4 w-4 text-white" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 px-5 pb-5">{profile.description}</p>
                  </div>

                  <div className="mt-5 dark:bg-gray-800 rounded-md mt-5">
                    <div className="flex flex-row justify-between items-center ">
                      <div>
                        <h3 className="px-5 pt-5 pb-2 dark:text-gray-300 text-lg font-semibold">Principais criptomoedas</h3>
                        <p className="px-5 text-xs text-gray-600">Adicione as principais criptomoedas utilizadas nessa estratégia.</p>
                      </div>

                    </div>
                    <div className="flex flex-row justify-self-start align-center">
                      <div>
                        <CardInfo >
                          <img className="border-2 border-gray-700 hover:border-gray-400 rounded-full"  src={bitcoin.src} alt="" />
                        </CardInfo>
                      </div>
                      <div>
                        <CardInfo >
                          <img className="border-2 border-gray-700 hover:border-gray-400 rounded-full"  src={eth.src} alt="" />
                        </CardInfo>
                      </div>
                      <div>
                        <CardInfo >
                          <div className="block border-2 border-gray-700 border-dashed rounded-full text-center hover:border-gray-400 p-5 cursor-pointer">
                            <PlusIcon className="h-6 text-yellow-400" />
                          </div>
                        </CardInfo>
                      </div>

                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:gap-3 mt-5">
                    <CardInfo className="mt-5 sm:mt-0" title="Risco" value="5"/>
                    <CardInfo className="mt-5 sm:mt-0" title="PNL" value="23%"/>
                    <CardInfo className="mt-5 sm:mt-0" title="Seguidores" value="212"/>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-3 mt-5">
                    <CardInfo className="mt-5 sm:mt-0" title="Longs" value="5"/>
                    <CardInfo className="mt-5 sm:mt-0" title="Shorts" value="14"/>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-3 mt-5">
                    <CardInfo className="mt-5 sm:mt-0" title="Binance" value="19"/>
                    <CardInfo className="mt-5 sm:mt-0" title="Pancake" value="0"/>
                    <CardInfo className="mt-5 sm:mt-0" title="1Inch" value="0"/>
                  </div>


                  <div className="flex flex-col sm:flex-row sm:gap-3 mt-5">
                    <CardInfo >
                      <div className="flex flex-col">
                        <a className="text-red-400 hover:text-opacity-70 hover:underline" href="">cancelar</a>
                        <p className="text-xs text-gray-600">você desabilita para novos assinantes, porém lembre-se de atender os usuários que já assinaram.</p>
                      </div>
                    </CardInfo>
                  </div>
                </div>
              </div>




              <div className="px-4 py-8 sm:px-0 dark:text-white">
              <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-yellow-900">
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
