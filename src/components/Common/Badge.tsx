/* This example requires Tailwind CSS v2.0+ */
export default function Badge({ title, bg, bgNone }) {
  return (
    <>
      {bgNone && <span className={`inline-flex items-center px-10 py-2 mr-3 mb-3 rounded-full text-sm font-medium border-2 border-${bg}-400 text-${bg}-400 hover:bg-${bg}-100 hover:bg-opacity-10 cursor-pointer`}>
        #{title}
      </span>}
      {!bgNone && <span className={`inline-flex items-center px-3 py-0.5 mr-3 mb-3 rounded-full text-sm font-medium bg-${bg}-100 text-${bg}-800`}>
        #{title}
      </span>}
    </>
  )
}
