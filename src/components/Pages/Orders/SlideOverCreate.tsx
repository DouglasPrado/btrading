import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { LinkIcon, PlusSmIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import BtnLongShort from '@/components/Common/BtnLongShort'
import { classNames } from '@/utils/helper'

const team = [
  {
    name: 'Tom Cook',
    email: 'tomcook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitneyfrancis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonardkrasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floydmiles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emilyselman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function SlideOverCreate({ open, setOpen }) {
  const [type, setType ] = useState()
  console.log(type)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 pl-16 max-w-full right-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <form className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                  <div className="flex-1 h-0 overflow-y-auto">
                    <div className={classNames(
                      type == undefined ? 'py-6 px-4 bg-yellow-400 sm:px-6' : (type == 'long' ? 'py-6 px-4 bg-green-400 sm:px-6' : 'py-6 px-4 bg-red-400 sm:px-6')
                      )}>
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">Adicionar ordem</Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className={classNames("hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded",
                            type == undefined ? 'bg-yellow-400 rounded-md text-yellow-200' : (type == 'long' ? 'bg-green-700 text-green-200' : 'bg-red-700 text-red-200'))}
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className={classNames("text-sm",
                          type == undefined ? 'text-yellow-900' : type == 'long' ? 'text-green-900' : 'text-red-900'
                        )}>
                          Todos as suas operações serão copiadas automaticamente por quem te segue.
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="px-4 divide-y divide-gray-200 sm:px-6">
                        <div className="space-y-6 pt-6 pb-5">
                          <div>
                            <BtnLongShort type={type} setType={setType}/>
                          </div>
                          <div>
                            <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                              Selecione a exchange.
                            </label>
                            <div className="mt-1">
                              <select
                                name="project-name"
                                id="project-name"
                                className={classNames("block w-full shadow-sm sm:text-sm rounded-md",
                                  type == undefined ? 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 ' : type == 'long' ? 'focus:ring-green-500 focus:border-green-500 border-green-300 ' : 'focus:ring-red-500 focus:border-red-500 border-red-300 '
                                )}

                              >
                                <option value="">Binance</option>
                                <option value="">PancakeSwap</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                              Selecione o par de cripto.
                            </label>
                            <div className="mt-1">
                              <select
                                name="project-name"
                                id="project-name"
                                className={classNames("block w-full shadow-sm sm:text-sm rounded-md",
                                  type == undefined ? 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 ' : type == 'long' ? 'focus:ring-green-500 focus:border-green-500 border-green-300 ' : 'focus:ring-red-500 focus:border-red-500 border-red-300 '
                                )}
                              >
                                <option value="">BTC/USDT</option>
                                <option value="">ETH/USDT</option>
                                <option value="">ADA/USDT</option>
                                <option value="">POK/USDT</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                              Preço de entrada ( 64.234,00 )
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="project-name"
                                id="project-name"
                                className={classNames("block w-full shadow-sm sm:text-sm rounded-md",
                                  type == undefined ? 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 ' : type == 'long' ? 'focus:ring-green-500 focus:border-green-500 border-green-300 ' : 'focus:ring-red-500 focus:border-red-500 border-red-300 '
                                )}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                              Preço para stop
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="project-name"
                                id="project-name"
                                className={classNames("block w-full shadow-sm sm:text-sm rounded-md",
                                  type == undefined ? 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 ' : type == 'long' ? 'focus:ring-green-500 focus:border-green-500 border-green-300 ' : 'focus:ring-red-500 focus:border-red-500 border-red-300 '
                                )}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
                             Preço para saída (take)
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="project-name"
                                id="project-name"
                                className={classNames("block w-full shadow-sm sm:text-sm rounded-md",
                                  type == undefined ? 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 ' : type == 'long' ? 'focus:ring-green-500 focus:border-green-500 border-green-300 ' : 'focus:ring-red-500 focus:border-red-500 border-red-300 '
                                )}
                              />
                            </div>
                          </div>
                          <fieldset>
                            <legend className="text-sm font-medium text-gray-900">Habilitar para seguidores.</legend>
                            <div className="mt-2 space-y-5">
                              <div className="relative flex items-start">
                                <div className="absolute flex items-center h-5">
                                  <input
                                    id="privacy-public"
                                    name="privacy"
                                    aria-describedby="privacy-public-description"
                                    type="radio"
                                    className={classNames("h-4 w-4",
                                      type == undefined ? 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 text-yellow-600' : type == 'long' ? 'focus:ring-green-500 focus:border-green-500 border-green-300 text-green-600' : 'focus:ring-red-500 focus:border-red-500 border-red-300 text-red-600'
                                    )}
                                    defaultChecked
                                  />
                                </div>
                                <div className="pl-7 text-sm">
                                  <label htmlFor="privacy-public" className="font-medium text-gray-900">
                                    Operação pública
                                  </label>
                                  <p id="privacy-public-description" className="text-gray-500">
                                    Todos os seguidores copiarão sua operação.
                                  </p>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id="privacy-private-to-project"
                                      name="privacy"
                                      aria-describedby="privacy-private-to-project-description"
                                      type="radio"
                                      className={classNames("h-4 w-4",
                                        type == undefined ? 'focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 text-yellow-600' : type == 'long' ? 'focus:ring-green-500 focus:border-green-500 border-green-300 text-green-600' : 'focus:ring-red-500 focus:border-red-500 border-red-300 text-red-600'
                                      )}
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label htmlFor="privacy-private-to-project" className="font-medium text-gray-900">
                                      Operação privada.
                                    </label>
                                    <p id="privacy-private-to-project-description" className="text-gray-500">
                                      A operação irá refletir somente na sua conta.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div className="pt-4 pb-6">

                          <div className="mt-4 flex text-sm">
                            <a href="#" className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                              <QuestionMarkCircleIcon
                                className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <span className="ml-2">Para saber mais clique aqui</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      onClick={() => setOpen(false)}
                    >
                      cancelar
                    </button>
                    <button
                      type="submit"
                      className={classNames("ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ",
                        type == undefined ? 'bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500' : type == 'long' ? 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500' : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                      )}
                    >
                      salvar
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
