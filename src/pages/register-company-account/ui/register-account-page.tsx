import { useState } from 'react'
import { Form } from './form'

const RegisterCompanyAccountPage = () => {
  // Temp : 서버 요청 성공을 담당하고 있는 상태 UI를 위한 임시 구현입니다.
  const [isRequested, setIsRequested] = useState(false)
  const handler = () => {
    setIsRequested(true)
  }

  return (
    <div className='flex size-full items-center justify-center'>
      <div className='w-[500px]'>{isRequested ? <>기다려주세요</> : <Form handler={handler} />}</div>
    </div>
  )
}

export default RegisterCompanyAccountPage
