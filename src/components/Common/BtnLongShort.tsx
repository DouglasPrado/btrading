/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { classNames } from '@/utils/helper'
const memoryOptions = [
  { name: 'compra', slug:'long', inStock: true },
  { name: 'venda', slug:'short', inStock: true },
]


export default function BtnLongShort({ type, setType }) {

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">Operação</h2>
        <a href="#" className={classNames("text-sm font-medium",
          type == undefined ? 'text-yellow-400 hover:text-yellow-500' : type == 'long' ? 'text-green-400 hover:text-green-500' : 'text-red-400 hover:text-red-500'
        )}
        >
          saiba mais sobre as operações
        </a>
      </div>

      <RadioGroup value={type} onChange={setType} className="mt-2">
        <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
        <div className="">
          {memoryOptions.map((option) => (
            <RadioGroup.Option
              key={option.slug}
              value={option.slug}
              className={({ active, checked }) =>
                classNames(
                  option.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed',
                  active ? `ring-2 ring-offset-2 ${option.slug == 'long' ? 'ring-green-400' : 'ring-red-500'}` : '',
                  checked
                    ? `${option.slug == 'long' ? 'bg-green-400' : 'bg-red-500'}  border-transparent text-white hover:bg-opacity-60`
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                  'mt-3 border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                )
              }
              disabled={!option.inStock}
              defaultValue={type}
            >
              <RadioGroup.Label as="p" className="lowercase ">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
