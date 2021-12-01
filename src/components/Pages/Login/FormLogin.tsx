import { useState, useContext } from 'react';
import Link from "next/link"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Input from "@/components/Common/Input";
import { RefreshIcon } from '@heroicons/react/outline';
import { AuthContext } from '@/contexts/AuthContext'

export default function FormLogin(){
  const { signIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false)
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('e-mail é obrigatório.')
      .email('e-mail é inválido.'),
    password: Yup.string()
    .required('senha é obrigatório.')
  })

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit({ email, password }) {
    setLoading(!loading)
    await signIn({ email, password })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
    <div>
      <Input id="email" name="email" title="digite seu e-mail" type="text" errors={errors} register={register('email')} loading={loading}/>
    </div>
    <div>
      <Input id="password" name="password" title="digite sua senha" type="password" errors={errors} register={register('password')} loading={loading} />
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-yellow-900 focus:ring-yellow-500 border-gray-700 bg-gray-900 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
          lembrar-me
        </label>
      </div>

      <div className="text-sm">
        <Link href="/authentication/recovery-password">
          <a className="font-medium text-gray-100 hover:text-yellow-500">
            esqueceu a senha?
          </a>
        </Link>
      </div>
    </div>

    <div>
    {!loading ?
      <button type="submit" className="w-full bg-primary dark:bg-yellow-400 border border-transparent rounded-md shadow-sm py-2 px-6 text-base font-medium text-white dark:text-yellow-900 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-yellow-500">
        logar
      </button>
    :
      <button disabled type="button" className="w-full bg-gray-300 cursor-wait rounded-md shadow-sm py-2 px-6 text-base font-medium text-white flex justify-center items-center">
        logando
        <RefreshIcon className="h-6 w-6 ml-3 text-white animate-spin " />
      </button>
    }
    </div>
  </form>
  )
}
