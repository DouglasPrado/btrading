/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Newsletter({ hover=false, title="", content="" }) {
  return (
    <div className="w-full py-12 space-x-6 lg:py-8 ">
      <div className={`max-h-40 shadow px-6 ${hover ? 'bg-white hover:bg-gray-100' : 'bg-primary hover:bg-primary-900'} cursor-pointer rounded-3xl sm:py-16 sm:px-12 lg:p-10 lg:flex lg:items-center`}>
        <div className="lg:w-0 lg:flex-1">
          <h2 className={`text-3xl font-extrabold tracking-tight ${hover ? 'text-gray-700' : 'text-white' }`}>{title || 'indique um empreendedor'}</h2>
          <p className={`mt-4 max-w-3xl text-lg ${hover ? 'text-gray-700' : 'text-white' }`}>
            { content || "receba comissão da assinatura do plano para empreendedores. ( licenciado, afiliado ou consultor )"}
          </p>
        </div>
      </div>
    </div>
  )
}
