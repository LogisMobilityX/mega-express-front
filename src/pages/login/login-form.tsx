import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginFormSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
})

type LoginForm = z.infer<typeof loginFormSchema>

export const LoginForm = () => {
  const [error, setError] = useState<string>()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit = () => {}

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit((values) => {})}>
      <div>
        <Input placeholder='아이디' {...register('email')} />
      </div>
      <div>
        <Input placeholder='비밀번호' {...register('password')} />
      </div>
      {error && <div></div>}
      <Button disabled={!isValid}>로그인</Button>
    </form>
  )
}
