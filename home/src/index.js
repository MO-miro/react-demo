import React from 'react'
import { Route } from 'react-router-dom'
import MyHeader from 'COMPONENT/MyHeader'
import HomePage from 'VIEW/home'
import MyFooter from 'COMPONENT/MyFooter'
import 'antd/dist/antd.css'

// 主布局文件
const PrimaryLayout = () => (
    <div className="primary-layout">
      <header>
        <MyHeader />
      </header>
      <main>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/users" component={UsersPage} /> */}
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )

  export default PrimaryLayout
  