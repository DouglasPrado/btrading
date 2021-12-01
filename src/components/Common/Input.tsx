import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { classNames } from '@/utils/helper'

interface InputProps {
  id: string,
  title: string,
  name: string,
  type: string,
  value?: string,
  register: {},
  errors: object,
  loading?: boolean
}

export default function Input({title, value, name, type, id, register, errors, loading}: InputProps){
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-100">
        {title}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          {...register}
          type={type}
          id={id}
          name={name}
          defaultValue={value}
          disabled={loading}
          className={classNames(
            "block w-full rounded-md shadow-sm sm:text-sm",
            loading ?
            "border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-100 text-gray-400 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800" :
            "border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800" )
            }
        />

        {errors[name]?.message && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        {errors[name]?.message}
      </p>
    </div>
  )
}
