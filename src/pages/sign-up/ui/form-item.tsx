type Props = {
  text: string
  content: React.ReactNode
}

export const FormItem = ({ text, content }: Props) => {
  return (
    <div className='flex items-center gap-2'>
      <span className='min-w-24 font-bold'>{text}</span>
      {content}
    </div>
  )
}
