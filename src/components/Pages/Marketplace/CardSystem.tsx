import { Fragment, useState, useRef } from 'react'
import { useTimeoutFn } from 'react-use'
import { Transition } from '@headlessui/react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import { SparklesIcon, TrendingUpIcon, UserIcon } from '@heroicons/react/outline'


export default function CardSystem({ dataTrader, setOpen }) {
  const refCard = useRef(null);
  const [trader, setTrader] = useState(dataTrader)
  let [isShowing, setIsShowing] = useState(true)
  let [, , resetIsShowing] = useTimeoutFn(() => {/*setIsShowing(true)*/}, 500)

  return ( trader &&
    <div className="relative h-96 mb-8" ref={refCard}>
      <Transition
        show={!isShowing}
        enter="transition duration-[400ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-200 transition ease-in-out"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0"
      >
        <a onClick={() => {
          setIsShowing(!isShowing)
          resetIsShowing()
        }}>
          <CardBack trader={trader} isShowing={isShowing} setIsShowing={setIsShowing} />
        </a>
      </Transition>
      <Transition
        show={isShowing}
        enter="transition duration-[400ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-200 transition ease-in-out"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0"
      >
        <a onClick={() => {
          setIsShowing(!isShowing)
          resetIsShowing()
        }}>
          <CardFront trader={trader} isShowing={isShowing} setIsShowing={setIsShowing} resetIsShowing={resetIsShowing} />
        </a>

      </Transition>
    </div>

  )
}
