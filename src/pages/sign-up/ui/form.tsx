import { Input } from '@/shared/ui/input'
import { FormItem } from './form-item'
import { Button } from '@/shared/ui/button'
import { z } from 'zod'
import validator from 'validator'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const SignUpFormSchema = z.object({
  email: z.string().min(1).email(),
  certificationNumber: z.string().min(1),
  password: z.string().min(1),
  name: z.string().min(2),
  phoneNumber: z.string().refine(validator.isMobilePhone),
})

type SignUpFormType = z.infer<typeof SignUpFormSchema>

export const Form = () => {
  const {} = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpFormSchema),
  })

  return (
    <div className='item flex h-full w-full flex-col gap-10'>
      <div className='text-center text-3xl font-bold'>회원가입</div>
      <div className='flex flex-col gap-4'>
        <FormItem text='이메일' content={<Input />} />
        <FormItem
          text='인증번호'
          content={
            <div className='flex w-full items-center gap-2'>
              <Input className='flex-1' />
              <Button size='sm' variant='secondary'>
                인증번호 전송
              </Button>
            </div>
          }
        />
        <FormItem text='비밀번호' content={<Input />} />
        <FormItem text='이름' content={<Input />} />
        <FormItem text='전화번호' content={<Input />} />
      </div>
      <div className='flex justify-end'>
        <Button className='w-full'>회원가입 완료</Button>
      </div>
    </div>
  )
}
