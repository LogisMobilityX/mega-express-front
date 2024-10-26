import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

export const Components = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <Button variant='medium'>BUTTON</Button>
      <Button variant='high'>BUTTON</Button>
      <Button variant='low'>BUTTON</Button>
      <Input placeholder='INPUT' />
    </div>
  )
}
