/**
 * 主入口文件
 * 模块热加载 react-hot-loader
 * redux
 * react-router 4.x 动态路由BrowserRouter
**/
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import PrimaryLayout from './index'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { Router} from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import store from 'STORE'
import routes from 'ROUTE'
  
const renderWithHotReload = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}> 
                <BrowserRouter>
                    <Component/>
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

renderWithHotReload(PrimaryLayout)


// 模块热替换的API
if(module.hot) {
    module.hot.accept('./index', () => {
      
        renderWithHotReload(PrimaryLayout)
    })
}
