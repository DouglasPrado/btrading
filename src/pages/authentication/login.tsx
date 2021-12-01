import Link from 'next/link'
import { parseCookies } from 'nookies'
import logo from '@/assets/images/logo-en.svg'
import FormLogin from '@/components/Pages/Login/FormLogin';

export default function Login() {

  return (
    <>
      <div className="min-h-screen dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src={logo.src}
            alt="albert licenciado"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">faça seu login</h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            ou{' '}
            <Link href="/payment">
              <a className="font-medium text-primary hover:text-yellow-400">
                adquire uma de nossas licenças
              </a>
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  )
}



export const getServerSideProps = async (ctx) => {
  const { ['trading.token']: token } = parseCookies(ctx)
  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}
