import { Button } from '@/shared/ui/button'

export const HomePage = () => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='flex flex-col items-center gap-10'>
        <img src='src/assets/Logo.png' width={241} height={44} />
        <div className='flex flex-col gap-4'>
          <Button>로그인</Button>
          <Button variant='medium'>회원가입</Button>
        </div>
      </div>
    </div>
  )
}
