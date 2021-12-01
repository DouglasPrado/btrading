import { Popover, Transition } from '@headlessui/react'

const defaultMessage = {
  button: "Detalhes",
  title: "Sobre rentabilidade",
  message: "Rentabilidade total das arbitragens realizadas pelo robô."
}
export default function PopOver({ popMessage=defaultMessage, ...props}) {
  return (
    <div className="max-w-sm" {...props}>
      <Popover className="fixed">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group rounded inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>{popMessage.button}</span>
            </Popover.Button>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 left-4 transform -translate-x-10 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-gray-600 p-3">
                    <h1 className="text-white font-semibold">{popMessage.title}</h1>
                    <p className="text-gray-100">{popMessage.message}</p>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
