interface Props {
  children: React.ReactNode
}

export const HomeLayout = ({ children }: Props) => {
  return <div className='bg-[#EBF2FF]'>{children}</div>
}
