import { useState } from 'react';
import Link from "next/link"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Input from "@/components/Common/Input";
import Router from 'next/router'
import { RefreshIcon } from '@heroicons/react/outline';
export default function FormUser({ dataUser = {} as any }){

  const [loading, setLoading] = useState(false)
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('e-mail é obrigatório.')
      .email('e-mail é inválido.'),
    name: Yup.string()
        .required('nome é obrigatório.'),
    document_number: Yup.string()
      .required('cpf é obrigatório.')
      .matches(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/, 'cpf inválido.'),
    address: Yup.string()
      .required('endereço é obrigatório.'),
    city: Yup.string()
      .required('cidade é obrigatório.'),
    state: Yup.string()
      .required('estado é obrigatório.'),
    cep: Yup.string()
      .required('cep é obrigatório.'),
  })

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
      setLoading(true)
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
      Router.push('/payment/2/steps/step-2')
  }
  return (
  <div className="mx-6 sm:mx-0 mb-12">
    <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900 mt-6">
      dados pessoais
    </h3>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-6">
        <Input id="name" name="name" title="nome completo" type="text" errors={errors} register={register('name')} value={dataUser?.name} loading={loading}/>
      </div>

      <div className="mt-6">
        <Input id="email" name="email" title="e-mail" type="email" errors={errors} register={register('email')} value={dataUser?.email} loading={loading}/>
      </div>
      <div className="mt-6">
        <Input id="document_number" name="document_number" title="cpf" type="text" errors={errors} register={register('document_number')} value={dataUser?.document_number} loading={loading}/>
      </div>

      <div className="mt-10">
        <h3 id="shipping-heading" className="text-lg font-medium text-gray-900">
          endereço
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <Input id="address" name="address" title="endereço completo" type="text" errors={errors} register={register('address')} value={dataUser?.address?.street} loading={loading}/>
          </div>

          <div>
            <Input id="city" name="city" title="cidade" type="text" errors={errors} register={register('city')} value={dataUser?.address?.city} loading={loading}/>
          </div>

          <div>
            <Input id="state" name="state" title="estado" type="text" errors={errors} register={register('state')} value={dataUser?.address?.state} loading={loading}/>
          </div>

          <div>
            <Input id="cep" name="cep" title="cep" type="text" errors={errors} register={register('cep')} value={dataUser?.address?.zip_code} loading={loading}/>
          </div>
        </div>
      </div>

      <div className=" flex justify-end pt-6">
        {!loading ?
          <button type="submit" className="w-1/2 bg-primary border border-transparent rounded-md shadow-sm py-2 px-6 text-base font-medium text-white hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500">
            próximo
          </button>
        :
        <button disabled type="button" className="w-1/2 bg-gray-300 cursor-wait rounded-md shadow-sm py-2 px-6 text-base font-medium text-white flex justify-center items-center">
          próximo
          <RefreshIcon className="h-6 w-6 ml-3 text-white animate-spin " />
      </button>
        }
      </div>
    </form>
  </div>
  )
}
