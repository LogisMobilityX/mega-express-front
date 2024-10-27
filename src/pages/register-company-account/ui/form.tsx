import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormItem } from './form-item'

const RegisterCompanyAccountFormSchema = z.object({
  // 회사 이름
  companyName: z.string().min(1),
  // 대표자 이름
  representativeName: z.string().min(2),
  // 사업 등록 번호는?
  businessRegistrationNumber: z.string().min(1),
  // 어떤 타입?
  businessRegistrationCertificate: z.string().min(2),
  // 어떤 업종 String이 가능한가?
  industryType: z.string().min(2),
  // 어떤 조건?
  companyCode: z.string().min(2),
})

type RegisterCompanyAccountType = z.infer<typeof RegisterCompanyAccountFormSchema>

export const Form = ({ handler }: { handler: VoidFunction }) => {
  const {} = useForm<RegisterCompanyAccountType>({
    resolver: zodResolver(RegisterCompanyAccountFormSchema),
  })

  return (
    <form className='item flex w-full flex-col gap-10'>
      <h1 className='text-center text-3xl font-bold text-p-900'>회사 생성</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <FormItem text='companyName' content={<Input placeholder='회사명' className='w-full' />} />
          <FormItem text='representativeName' content={<Input placeholder='대표자명' className='w-full' />} />
        </div>
        <FormItem text='representativeName' content={<Input placeholder='사업자 등록 번호' className='w-full' />} />
        <FormItem
          text='representativeName'
          content={<Input placeholder='설립일 (MM / DD / YYYY)' className='w-full' />}
        />

        <FormItem
          text='businessRegistrationNumber'
          content={<Input placeholder='사업자 등록증' className='w-full' />}
        />
        <FormItem text='industryType' content={<Input placeholder='업종' className='w-full' />} />
        <FormItem text='companyCode' content={<Input placeholder='회사 코드' className='w-full' />} />
      </div>
      <div className='flex justify-end'>
        <Button
          className='w-full'
          onClick={() => {
            console.log('생성 상태 변경 및 유저에게 알려줘야힙니다.')
            handler()
          }}
        >
          다음
        </Button>
      </div>
    </form>
  )
}
