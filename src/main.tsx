import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { Router } from './shared'

import { ShoppingCartProvider, UserProvider } from './context'

import { defaultTheme, GlobalStyles } from './styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartProvider>
        <UserProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserProvider>
      </ShoppingCartProvider>

      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
