import { SiteLayout } from '@/components/Layouts'
import { Fragment, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { classNames } from '@/utils/helper'
import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon,
} from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Modal from '@/components/Common/Modal'
import bitcoin from '@/assets/images/currencies/1.png'
import xrp from '@/assets/images/currencies/52.png'
import ether from '@/assets/images/currencies/1027.png'
import cardano from '@/assets/images/currencies/2010.png'
import StackedGroup from '@/components/Common/StackedGroup'
import Badge from '@/components/Common/Badge'
import CardBlog from '@/components/Common/CardBlog'

const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: 'bg-gray-200' },
  advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-yellow-500' },
  completed: { icon: CheckIcon, bgColorClass: 'bg-black' },
}

const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    currency: cardano.src,
    target: 'Cardano',
    date: '$2.20',
  },
  {
    id: 2,
    type: eventTypes.advanced,
    currency: bitcoin.src,
    target: 'Bitcoin',
    date: '$ 65.400.00',
  },
  {
    id: 3,
    type: eventTypes.completed,
    currency: ether.src,
    target: 'Etherium',
    date: '$ 3.400.00',
  },
  {
    id: 4,
    type: eventTypes.advanced,
    currency: bitcoin.src,
    target: 'Bitcoin',
    date: '$ 66.400.00',
  },
  {
    id: 3,
    type: eventTypes.completed,
    currency: ether.src,
    target: 'Etherium',
    date: '$ 3.300.00',
  },
]
const user = {
  name: "Investidor Moderno",
  coins: ['bitcoin', 'cardano', 'etherium'],
  email: 'ajuda@investidormoderno.com',
  monthProfit: '19% mensais',
  yearProfit: '25% mensais',
  about: 'Nós somos a Investidor Moderno.Empresa formada por um time de traders, analistas e programadores, com experiência no mercado financeiro, no criptomercado e em bots - Algotrading.Nossa missão é ensinar você a rentabilizar o seu capital, aprendendo tudo sobre o BITCOIN e os investimentos da NOVA ECONOMIA.',
}

const activities = [
  {
    id: 1,
    exchange: 'Binance',
    crypto: 'Bitcoin',
    currency: bitcoin.src,
    profit: '2%'
  },
  {
    id: 1,
    exchange: 'Binance',
    crypto: 'Bitcoin',
    currency: bitcoin.src,
    profit: '1.3%'
  },
  {
    id: 1,
    exchange: 'Binance',
    crypto: 'Bitcoin',
    currency: bitcoin.src,
    profit: '5%'
  }
]

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Show() {
  const [followed, setFollowed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter()
  const { uid } = router.query

  const handleModal = () => {
    if(followed){
     //
    }else{
      setShowModal(true)
    }
  }
  return (
    <SiteLayout fullTitle='Dashboard | BTrading' withHeader withFooter animate>
      <div className="min-h-full">
        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0 dark:text-white">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        className="h-24 w-24 rounded-full"
                        src="https://static-media.hotmart.com/n1EQwg2nY8hdelg5XVcYLDB_yiM=/140x140/smart/filters:format(webp):background_color(white)/hotmart/product_contents/98694212-bbaa-47f5-97b3-9d63c7839526/OInvestidorModerno.png?w=360 1x"
                        alt=""
                      />
                      <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Investidor Moderno</h1>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      especialidade da casa{' '}
                      <a href="#" className="text-gray-900 dark:text-gray-400 dark:hover:text-yellow-300 hover:underline ">
                        fibonnacci
                      </a>{' '}
                       <time dateTime="2020-08-25">ativo desde julho de 2021</time>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                  {/* Description list*/}
                  <section aria-labelledby="applicant-information-title">
                    <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                      <div className="px-4 py-5 sm:px-6">
                        <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                          Informações pessoais
                        </h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">Conheça um pouco mais sobre o trader</p>
                        <div className="mt-6">
                          <Badge title="Bitcoin" bg="yellow" bgNone/>
                          <Badge title="Etherium" bg="yellow" bgNone/>
                          <Badge title="Cardano" bg="yellow" bgNone/>
                          <Badge title="Pokadot" bg="yellow" bgNone/>
                          <Badge title="BNB" bg="yellow" bgNone/>
                          <Badge title="Etherium" bg="yellow" bgNone/>
                          <Badge title="Cardano" bg="yellow" bgNone/>
                        </div>
                      </div>
                      <div className="border-t border-gray-900 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">Principais moedas</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">[bitcoin, cardano, etherium]</dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">E-mail</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">ajuda@investidormoderno.com</dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">Rentabilidade média dos ultimos 6 meses</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">19% mensais</dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">Rentabilidade média dos ultimos 12 meses</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">25% mensais</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </section>
                  <section aria-labelledby="applicant-information-title">
                    <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                      <div className="px-4 py-5 sm:px-6">
                        <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                          Sobre
                        </h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">
                        Este Projeto passa apenas pelo básico da análise técnica e te leva à ESPECIALIZAÇÃO na Análise de SENTIMENTO DE MERCADO, gatilho imprescindível para operar o Criptomercado. A PRIMEIRA ETAPA você fará na plataforma da HotMart, assistindo as aulas. Quantas vezes forem necessárias, sem obrigação de terminar em determinado tempo: é vitalício pra você, incluindo futuras atualizações de conteúdo.
                        </p>
                      </div>

                    </div>
                  </section>
                  <section aria-labelledby="applicant-information-title">
                    <div className="bg-white dark:bg-gray-800 shadow sm:rounded-t-lg">
                      <div className="px-4 py-5 sm:px-6">
                        <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                          Atividades
                        </h2>
                        <div className="flex flex-col">
                          <div className="mt-6 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
                              <div className=" overflow-hidden sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-900">

                                  <tbody>
                                    {activities.map((activity, activityIdx) => (
                                      <tr key={activity.id} className={activityIdx % 2 === 0 ? 'bg-gray-800 border-b border-gray-700 ' : 'bg-gray-800 border-b border-gray-700 '}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-500">
                                          <img src={activity.currency} alt="" className="w-8 h-8" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{activity.crypto}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-500">{activity.exchange}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-300">{activity.profit}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                    <div>
                      <a
                        href="#"
                        className="block bg-gray-700 hover:opacity-90 text-sm font-medium text-gray-900 text-center px-4 py-4 hover:underline sm:rounded-b-lg"
                      >
                        Mostrar todos
                      </a>
                    </div>
                  </section>
                </div>
                <div className="space-y-6 lg:col-start-3 lg:col-span-1">
                  <section>
                    <div className="bg-white dark:bg-gray-800 px-4 py-5 shadow sm:rounded-lg sm:px-6">
                      <h2 className="text-lg font-medium text-gray-900  dark:text-gray-100">
                        Seguidores
                      </h2>

                      {/* Activity Feed */}
                      <div className="mt-3 flex justify-start items-center">
                        <StackedGroup />
                        <a className="ml-3 text-lg text-gray-300 font-semibold cursor-pointer dark:text-gray-400 dark:hover:text-yellow-300 hover:underline">{'1.234 seguidores'}</a>
                      </div>

                    </div>
                  </section>
                  <section>
                    <div className="bg-white dark:bg-gray-800 px-4 py-5 shadow sm:rounded-lg sm:px-6">
                      <h2 id="timeline-title" className="text-lg font-medium text-gray-900  dark:text-gray-100">
                        Principais criptomoedas
                      </h2>

                      {/* Activity Feed */}
                      <div className="mt-6 flow-root">
                        <ul role="list" className="-mb-8">
                          {timeline.map((item, itemIdx) => (
                            <li key={item.id}>
                              <div className="relative pb-8">
                                <div className="relative flex space-x-3">
                                  <div className="mr-3">
                                    <span
                                      className={classNames(
                                        item.type.bgColorClass,
                                        'h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-gray-900'
                                      )}
                                    >
                                      <img src={item.currency} className="text-white dark:text-gray-100" aria-hidden="true" />
                                    </span>
                                  </div>
                                  <div className="min-w-0 flex-1 flex justify-between items-center">
                                    <div>
                                      <p className="text-sm text-gray-500 dark:text-gray-100 flex flex-col">
                                        <a href="#" className="font-medium text-gray-900 dark:text-gray-400">
                                        {item.target}
                                        </a>
                                        <span>{'ver whitepaper'}</span>
                                      </p>
                                    </div>
                                    <div className="text-right text-sm whitespace-nowrap text-gray-500 dark:text-gray-100">
                                      <time dateTime={item.datetime}>{item.date}</time>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 flex flex-col justify-stretch ">
                        <a
                          href="/payment/1"
                          type="button"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-yellow-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 animate-bounce"
                        >
                          quer ver mais? assinatura do trader!
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="space-y-6 lg:col-start-1 lg:col-span-3 hidden">
                  <section >
                    <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                      <div className="px-4 py-5 sm:px-6">
                        <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                          Destaques
                        </h2>
                        <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
                          { posts.map(post => <CardBlog post={post} />) }
                        </div>
                      </div>

                    </div>
                  </section>
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


