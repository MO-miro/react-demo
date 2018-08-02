import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { Router } from 'react-router'

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

// ReactDOM.render(<App />, document.getElementById('root'));

//模块热替换的API
if( module.hot ) {
    module.hot.accept('./App', () => {
        render(App)
    })
}
