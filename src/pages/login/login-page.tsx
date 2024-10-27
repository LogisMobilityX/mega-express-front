import { Button } from '@/shared/ui/button'
import { LoginForm } from './login-form'

export const LoginPage = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-7'>
      <div className='text-[36px] font-bold text-p-900'>로그인</div>
      <div className='flex flex-col gap-4'>
        <LoginForm />
        <div className='flex justify-center gap-4'>
          <Button variant='low'>비밀번호 찾기</Button>
          <Button variant='low'>회원가입</Button>
        </div>
      </div>
    </div>
  )
}
