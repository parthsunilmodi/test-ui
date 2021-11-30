import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IconContext } from 'react-icons'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import { GlobalStyle } from './GlobalStyle'
import { ConnectedRouter } from 'react-router-redux'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { configureStore, history } from 'reducers/store'
import 'antd/dist/antd.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ color: theme.colors.greyDark }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <ConnectedRouter history={history} store={store}>
            <App />
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
