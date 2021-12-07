import { PencilIcon } from "@heroicons/react/outline";

export default function Headings({ title="", btn_title="", btn_edit=false, btn_function }) {
  return (
    <div className="px-4 sm:px-0 pb-5 border-b border-gray-200 dark:border-gray-700 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50 lowercase">{title}
        { btn_edit && <button className="dark:bg-gray-800 p-3 rounded ml-5 dark:hover:bg-opacity-60">
            <PencilIcon className="h-4 w-4 text-white" />
          </button>
        }
      </h3>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <button
          onClick={btn_function}
          className="lowercase cursor-pointer inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white dark:text-yellow-900 dark:bg-yellow-400 bg-primary dark:hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          {btn_title}
        </button>
      </div>
    </div>
  )
}
