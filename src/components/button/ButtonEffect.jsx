import Link from "next/link"

const ButtonEffect = ({path , outline , children , size, flex , target, active , padding}) => {
  return (
    <Link target={target}  href={path} className={`${padding ? 'px-[0.5rem] pt-[0.2rem] pb-[0.4rem]' : 'px-6 py-2'} overflow-hidden relative group text-center ${active && 'after:w-2 after:h-2 after:bg-[#fff] after:absolute after:top-1/2 after:right-0 after:rounded-full after:-translate-y-1/2'} ${outline && "border border-[#fff] rounded-full "} `}>
        <span className={`text-text ${size == 'lg' ? 'text-lg' : size == 'xl' ? 'text-xl' : size == '2xl' ? 'text-xl md:text-2xl' : size == '3xl' ? 'text2xl lg:text-3xl' : 'text-base'} tracking-wider capitalize ${flex ? 'inline-flex' : 'inline-block'} group-hover:-translate-y-[160%] group-hover:-rotate-12 transition-transform duration-300`}>
            {children}
        </span>
        <span className={`text-text ${size == 'lg' ? 'text-lg' : size == 'xl' ? 'text-xl' : size == '2xl' ? 'text-xl md:text-2xl' : size == '3xl' ? 'text2xl lg:text-3xl' : 'text-base'} tracking-wider capitalize ${flex ? 'inline-flex' : 'inline-block'} absolute ${padding ? 'left-[0.5rem]' : 'left-6'} translate-y-[160%] group-hover:translate-y-0 group-hover:rotate-0 rotate-12 transition-transform duration-300`}>
            {children}
        </span>
    </Link>
  )
}

export default ButtonEffect