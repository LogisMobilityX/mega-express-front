import { Components } from '@/pages/components'
import { HomePage } from '@/pages/home/home-page'
import { SignUpPage } from '@/pages/sign-up/ui/sign-up-page'
import { HomeLayout } from '@/shared/ui/home-layout'
import { createBrowserRouter } from 'react-router-dom'

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/sign-up', element: <SignUpPage /> },
    ],
  },
  {
    path: '/components',
    element: <Components />,
  },
])
