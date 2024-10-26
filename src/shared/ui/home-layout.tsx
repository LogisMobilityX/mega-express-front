import { Outlet } from 'react-router-dom'

export const HomeLayout = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[#EBF2FF]'>
      <div className='box-shadow-[0px_4px_140px_0px_rgba(0, 0, 0, 0.05)] h-[800px] w-[735px] rounded-bl-[30px] rounded-tl-[30px] bg-white/50'></div>
      <div className='box-shadow-[0px_4px_140px_0px_rgba(0, 0, 0, 0.05)] h-[900px] w-[750px] rounded-[30px] bg-white'>
        <Outlet />
      </div>
    </div>
  )
}
