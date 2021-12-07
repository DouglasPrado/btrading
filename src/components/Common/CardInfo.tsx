import clsx from 'clsx'

const CardInfo = ({ children, title, value, className='', sm }) => {
  return (
    <div  className={clsx("w-full p-5 dark:bg-gray-800 rounded-md", className )}>
    { children ? <div className="flex flex-row justify-between items-center "> { children } </div> :
      <div className="flex flex-row justify-between items-center ">
        <h3 className="dark:text-gray-50 text-lg">{title}</h3>
        <span className={clsx("dark:text-gray-50 font-semibold", sm ? 'text-xl ' : 'text-3xl ' )}>{value}</span>
      </div>
    }
    </div>
  )
}


export default CardInfo
