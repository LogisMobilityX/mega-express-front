import { Components } from '@/pages/components'
import { SignUpPage } from '@/pages/sign-up/ui/sign-up-page'
import { createBrowserRouter } from 'react-router-dom'

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/components',
    element: <Components />,
  },
])
