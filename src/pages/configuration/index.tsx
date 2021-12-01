import { SiteLayout } from '@/components/Layouts'
import { useState } from 'react'
import { classNames } from '@/utils/helper'
import { Switch } from '@headlessui/react'
import Accounts from '@/components/Pages/Configuration/Accounts'

const tabs = [
  { name: 'Geral', href: '/', current: true },
]

export default function Index() {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)
  return (
    <SiteLayout fullTitle='Configurações | BTrading' withHeader withFooter animate>
      <div className="min-h-full">
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 sm:px-0">
              <div className="relative">
                <div className="pt-5 pb-16">
                  <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Configurações</h1>
                  </div>
                  <div className="px-4 sm:px-6 md:px-0">
                    <div className="py-6">
                      <div className="lg:hidden">
                        <label htmlFor="selected-tab" className="sr-only">
                          Select a tab
                        </label>
                        <select
                          id="selected-tab"
                          name="selected-tab"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300  focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm rounded-md"
                          defaultValue={tabs.find((tab) => tab.current).name}
                        >
                          {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="hidden lg:block">
                        <div className="border-b border-gray-200">
                          <nav className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                              <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                  tab.current
                                    ? 'border-yellow-400 text-yellow-400'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                )}
                              >
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>

                      {/* Description list with inline editing */}
                      <div className="mt-10 divide-y divide-gray-800">
                        <div className="space-y-1">
                          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Perfil</h3>
                          <p className="max-w-2xl text-sm text-gray-500 dark:text-gray-300">
                            Essas informações serão exibidas publicamente, portanto, tome cuidado com o que você compartilha.
                          </p>
                        </div>
                        <div className="mt-6">
                          <dl className="divide-y divide-gray-800">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">Nome</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 dark:text-gray-300 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">Chelsea Hagon</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="py-2 px-5 rounded-md font-medium text-yellow-400 hover:text-yellow-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                                  >
                                    Atualizar
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">Foto</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                  />
                                </span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                  <button
                                    type="button"
                                    className="py-2 px-5 rounded-md font-medium text-yellow-400 hover:text-yellow-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                                  >
                                    Update
                                  </button>
                                  <span className="text-gray-300" aria-hidden="true">
                                    |
                                  </span>
                                  <button
                                    type="button"
                                    className="py-2 px-5 rounded-md font-medium text-yellow-400 hover:text-yellow-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                                  >
                                    Remover
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">Email</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">douglasprado@example.com</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="py-2 px-5 rounded-md font-medium text-yellow-400 hover:text-yellow-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  >
                                    Atualizar
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-800">
                              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">Trabalho</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">Desenvolvedor</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="py-2 px-5 rounded-md font-medium text-yellow-400 hover:text-yellow-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  >
                                    Atualizar
                                  </button>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <div className="mt-10 divide-y divide-gray-800">
                        <div className="space-y-1">
                          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Conta</h3>
                          <p className="max-w-2xl text-sm text-gray-500 dark:text-gray-300">
                            Gerenciar como as informações são exibidas em sua conta.
                          </p>
                        </div>
                        <div className="mt-6">
                          <dl className="divide-y divide-gray-800">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">Idioma</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">Português</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="py-2 px-5 rounded-md font-medium text-yellow-400 hover:text-yellow-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  >
                                    Atualizar
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">Date format</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">DD-MM-YYYY</span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                  <button
                                    type="button"
                                    className=" py-2 px-5 rounded-md font-medium text-yellow-400 hover:text-yellow-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  >
                                    Atualizar
                                  </button>
                                  <span className="text-gray-300" aria-hidden="true">
                                    |
                                  </span>
                                  <button
                                    type="button"
                                    className="py-2 px-5 rounded-md font-medium text-yellow-400 hover:text-yellow-500 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  >
                                    Remover
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <Switch.Group as="div" className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                              <Switch.Label as="dt" className="text-sm font-medium text-gray-500 dark:text-gray-100" passive>
                                Automatic timezone
                              </Switch.Label>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                  checked={automaticTimezoneEnabled}
                                  onChange={setAutomaticTimezoneEnabled}
                                  className={classNames(
                                    automaticTimezoneEnabled ? 'bg-yellow-900' : 'bg-gray-200',
                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 sm:ml-auto'
                                  )}
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      automaticTimezoneEnabled ? 'translate-x-5' : 'translate-x-0',
                                      'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                    )}
                                  />
                                </Switch>
                              </dd>
                            </Switch.Group>
                            <Switch.Group
                              as="div"
                              className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
                            >
                              <Switch.Label as="dt" className="text-sm font-medium text-gray-500 dark:text-gray-100" passive>
                                Auto-update applicant data
                              </Switch.Label>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                  checked={autoUpdateApplicantDataEnabled}
                                  onChange={setAutoUpdateApplicantDataEnabled}
                                  className={classNames(
                                    autoUpdateApplicantDataEnabled ? 'bg-yellow-900' : 'bg-gray-200',
                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800 sm:ml-auto'
                                  )}
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                      'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                    )}
                                  />
                                </Switch>
                              </dd>
                            </Switch.Group>
                          </dl>
                        </div>
                      </div>
                      <div className="mt-10 divide-y divide-gray-800 mb-5">
                        <div className="space-y-1">
                          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Conta</h3>
                          <p className="max-w-2xl text-sm text-gray-500 dark:text-gray-300 ">
                            Gerenciar como as informações são exibidas em sua conta.
                             <a href="http://" className="m-5 p-2 bg-yellow-900 text-yellow-100 rounded-md"> Adicionar conta</a>
                          </p>
                        </div>
                      </div>
                      <Accounts />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </SiteLayout>
  )
}
