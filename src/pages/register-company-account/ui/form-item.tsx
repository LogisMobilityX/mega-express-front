type Props = {
  text: string
  content: React.ReactNode
}

export const FormItem = ({ text, content }: Props) => {
  return (
    <div className='flex items-center gap-2'>
      <label className='sr-only min-w-24 font-bold'>{text}</label>
      {content}
    </div>
  )
}
