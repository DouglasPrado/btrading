export default function CardCrypto({crypto}) {
  return (
    <div key={crypto.id} className="hover:animate-bounce-slow cursor-pointer mr-3 text-center bg-white dark:bg-gray-800 rounded-lg shadow divide-y divide-gray-200">
      <div className="flex flex-col p-3 w-32 ">
        <img className="w-12 h-12 flex-shrink-0 mx-auto rounded-full" src={crypto.imageUrl} alt="" />
        <h3 className="mt-6 text-gray-900 dark:text-gray-100 text-sm font-medium">{crypto.name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-gray-500 text-sm">{crypto.price}</dd>
        </dl>
      </div>
    </div>
  )
}
