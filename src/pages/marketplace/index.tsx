import { useState } from 'react'
import { SiteLayout } from '@/components/Layouts'
import Account from '@/components/Pages/Dashboard/Account'
import Banner from '@/components/Common/Banner'
import CardSystem from '@/components/Pages/Marketplace/CardSystem'
import Notification from '@/components/Common/Notification'
import Pagination from '@/components/Common/Pagination'
import Modal from '@/components/Common/Modal'
import Filters from '@/components/Pages/Marketplace/Filters'



const traders = [
  {
    id: 1,
    name: 'Douglas Prado',
    title: 'Fundamentalista',
    role: 'futuro',
    email: '1janecooper@example.com',
    telephone: '+1-202-555-0170',
    profit: '+ 1,2%',
    status: false,
    follow: false,
    imageUrl: 'https://lh3.googleusercontent.com/ogw/ADea4I4D8PXIbXuZya5-fH4FD-svLx-zRpdPWdwi8SDXZQ',
  },
  {
    id: 2,
    name: 'Douglas Prado',
    title: 'Estocástico RSI',
    role: 'futuro',
    email: '2janecooper@example.com',
    telephone: '+1-202-555-0170',
    reference: ['btc', 'ada', 'shi'],
    profit: '+ 10%',
    status: true,
    follow: false,
    imageUrl: 'https://lh3.googleusercontent.com/ogw/ADea4I4D8PXIbXuZya5-fH4FD-svLx-zRpdPWdwi8SDXZQ',
  },
  {
    id: 3,
    name: 'Douglas Prado',
    title: 'Paradigm Representative',
    role: 'spot',
    profit: '+ 2,2%',
    email: '3janecooper@example.com',
    telephone: '+1-202-555-0170',
    status: true,
    follow: false,
    imageUrl: 'https://lh3.googleusercontent.com/ogw/ADea4I4D8PXIbXuZya5-fH4FD-svLx-zRpdPWdwi8SDXZQ',
  },
  {
    id: 4,
    name: 'Douglas Prado',
    title: 'Fundamentalista',
    role: 'futuro',
    email: '4janecooper@example.com',
    telephone: '+1-202-555-0170',
    profit: '+ 1,2%',
    status: false,
    follow: false,
    imageUrl: 'https://lh3.googleusercontent.com/ogw/ADea4I4D8PXIbXuZya5-fH4FD-svLx-zRpdPWdwi8SDXZQ',
  },
  {
    id: 5,
    name: 'Douglas Prado',
    title: 'Estocástico RSI',
    role: 'futuro',
    email: '5janecooper@example.com',
    telephone: '+1-202-555-0170',
    reference: ['btc', 'ada', 'shi'],
    profit: '+ 10%',
    status: true,
    follow: false,
    imageUrl: 'https://lh3.googleusercontent.com/ogw/ADea4I4D8PXIbXuZya5-fH4FD-svLx-zRpdPWdwi8SDXZQ',
  },
  {
    id: 6,
    name: 'Douglas Prado',
    title: 'Paradigm Representative',
    role: 'spot',
    profit: '+ 2,2%',
    email: '6janecooper@example.com',
    telephone: '+1-202-555-0170',
    status: true,
    follow: false,
    imageUrl: 'https://lh3.googleusercontent.com/ogw/ADea4I4D8PXIbXuZya5-fH4FD-svLx-zRpdPWdwi8SDXZQ',
  },
  {
    id: 7,
    name: 'Douglas Prado',
    title: 'Paradigm Representative',
    role: 'spot',
    profit: '+ 2,2%',
    email: '7janecooper@example.com',
    telephone: '+1-202-555-0170',
    status: true,
    follow: false,
    imageUrl: 'https://lh3.googleusercontent.com/ogw/ADea4I4D8PXIbXuZya5-fH4FD-svLx-zRpdPWdwi8SDXZQ',
  },
  {
    id: 8,
    name: 'Douglas Prado',
    title: 'Fundamentalista',
    role: 'futuro',
    email: '8janecooper@example.com',
    telephone: '+1-202-555-0170',
    profit: '+ 1,2%',
    status: false,
    follow: false,
    imageUrl: 'https://lh3.googleusercontent.com/ogw/ADea4I4D8PXIbXuZya5-fH4FD-svLx-zRpdPWdwi8SDXZQ',
  },
]

export default function Index() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <SiteLayout fullTitle='Marketplace | BTrading' withHeader withFooter animate>
      <Notification title="trader seguido com sucesso!" message="O trader aparecerá na sua dashboard e as configurações poderá ser realizada por lá." show={show} setShow={setShow} />
      <Modal title="Você realmente deseja seguir com esse trader?" message="Atualmente não é cobrado nenhuma mensalidade. Mas a sua assinatura expira em 12/12/2021." modalOpen={open} setModalOpen={setOpen} btnAction={() => setShow(true)} />
      <div className="min-h-full">
        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 sm:px-0">
                <div className="mb-6 justify-between items-center lg:flex">
                  <div className="lg:w-full">
                    <h1 className="text-xl text-gray-700  dark:text-gray-50">todos os traders</h1>
                    <p className="text-sm dark:text-gray-300">3.123 traders ativos</p>
                  </div>
                  <div className="w-full sm:mt-3 lg:w-1/2">
                    <input
                      type="text"
                      name="search"
                      placeholder="O que você procura?"
                      id="search"
                      className="bg-gray-700 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full pr-12 sm:text-sm rounded-md text-gray-50"
                    />
                  </div>
                </div>
                <Filters/>
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  { traders.map(trader => <CardSystem dataTrader={trader} setOpen={setOpen} follow={show} />)}
                </ul>
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
