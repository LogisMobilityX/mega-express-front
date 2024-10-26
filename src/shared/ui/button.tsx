import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        high: 'h-[72px] bg-gradient-to-r from-[#15489C] to-[#002562] text-[20px] font-bold rounded-[15px] w-[482px] text-white px-4 py-2',
        medium:
          'h-[72px] border border-p-900 border-[2px] text-[20px] font-bold text-[#15489C] rounded-[15px] w-[482px] px-4 py-2',
        low: 'underline w-[64px] h-[19px] text-[16px] leading-[19.2px] text-g-500 font-normal',
      },
    },
    defaultVariants: {
      variant: 'high',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
