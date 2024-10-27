import { Components } from '@/pages/components'
import { HomePage } from '@/pages/home/home-page'
import { LoginPage } from '@/pages/login/login-page'
import RegisterCompanyAccount from '@/pages/register-company-account/ui/register-account-page'
import { SignUpPage } from '@/pages/sign-up/ui/sign-up-page'
import { HomeLayout } from '@/shared/ui/home-layout'
import { createBrowserRouter } from 'react-router-dom'

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
      { path: '/register-company-account', element: <RegisterCompanyAccount /> },
    ],
  },
  {
    path: '/components',
    element: <Components />,
  },
])
