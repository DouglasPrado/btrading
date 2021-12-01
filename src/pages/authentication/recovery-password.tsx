import Link from 'next/link'
import logo from '@/assets/images/logo.svg'


export default function RecoveryPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src={logo.src}
            alt="albert - licenciados"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">digite seu e-mail para recuperar a senha</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ou{' '}
            <Link href="/authentication/login">
              <a className="font-medium text-primary hover:text-primary-500">
                faça seu login
              </a>
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
          </div>



          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >

              recuperar senha
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
