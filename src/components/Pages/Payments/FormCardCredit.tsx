import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import valid from "card-validator";

import Input from "@/components/Common/Input";
import { RefreshIcon } from '@heroicons/react/outline';

export default function FormUser({ dataPayment={} as any }){
  const [loading, setLoading] = useState(false)
  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .test(
        "test-number",
        "cartão de crédito inválido.",
        value => valid.number(value).isValid
      )
      .required('digite o número do cartão.'),
    cvv: Yup.string()
      .min(3, 'cvv inválido.')
      .max(4, 'cvv inválido.')
      .required('cvv é obrigatório.'),
    exp_month:  Yup.number()
      .typeError('mês inválido. ex: 20')
      .min(1, 'mês inválido. ex: 20')
      .max(12, 'mês inválido. ex: 20')
      .required('mês é obrigatório.'),
    exp_year: Yup.number()
      .typeError('ano inválido. ex: 2022')
      .min(2021,'ano inválido. ex: 2022')
      .max(2030, 'ano inválido. ex: 2022')
      .required('ano é obrigatório.'),
  })

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
      // display form data on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
      setLoading(true)
      Router.push('/payment/2/steps/step-3')
  }

  return (
  <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-6 sm:mx-0 mb-12">
        <h3 id="payment-heading" className="text-lg font-medium text-gray-900 mt-6">
          detalhes do pagamento
        </h3>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
          <div className="col-span-4 sm:col-span-4 ">
            <Input id="number" name="number" title="número do cartão" type="text" errors={errors} register={register('number')} loading={loading} />
          </div>

          <div className="col-span-2 sm:col-span-1 ">
            <Input id="exp_month" name="exp_month" title="mês de exp." type="number" errors={errors} register={register('exp_month')} loading={loading}/>
          </div>
          <div className="col-span-2 sm:col-span-1 ">
            <Input id="exp_year" name="exp_year" title="ano de exp." type="number" errors={errors} register={register('exp_year')} loading={loading} />
          </div>
          <div className="col-span-4 sm:col-span-2">
            <Input id="cvv" name="cvv" title="cvv" type="text" errors={errors} register={register('cvv')} loading={loading}/>
          </div>
        </div>
      </div>

      <div className="mx-6 sm:mx-0 mt-10">
        <h3 id="shipping-heading" className="text-lg font-medium text-gray-900">
          endereço da fatura
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <Input id="address" name="address" title="endereço completo" type="text" errors={errors} register={register('address')} value={dataPayment?.address?.street} loading={loading}/>
          </div>

          <div>
            <Input id="city" name="city" title="cidade" type="text" errors={errors} register={register('city')} value={dataPayment?.address?.city} loading={loading} />
          </div>

          <div>
            <Input id="state" name="state" title="estado" type="text" errors={errors} register={register('state')} value={dataPayment?.address?.state} loading={loading}/>
          </div>

          <div>
            <Input id="cep" name="cep" title="cep" type="text" errors={errors} register={register('cep')} value={dataPayment?.address?.zip_code} loading={loading}/>
          </div>
        </div>
      </div>
      <div className="mx-6 flex justify-end pt-6 ">
        {!loading ?
          <button type="submit" className="sm:w-1/2 bg-green-500 border border-transparent rounded-md shadow-sm py-2 px-6 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500">
            realizar pagamento
          </button>
        :
          <button disabled type="button" className="sm:w-1/2 bg-gray-300 cursor-wait rounded-md shadow-sm py-2 px-6 text-base font-medium text-white flex justify-center items-center">
            realizando pagamento
            <RefreshIcon className="h-6 w-6 ml-3 text-white animate-spin " />
          </button>
        }
      </div>
    </form>
  </div>
  )
}
