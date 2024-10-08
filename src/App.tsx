import { RouterProvider } from 'react-router-dom'

import { TanStackQueryProvider } from './app/providers/tan-stack-query-provider'
import { router } from './app/routes'

function App() {
  return (
    <TanStackQueryProvider>
      <RouterProvider router={router} />
    </TanStackQueryProvider>
  )
}

export default App
