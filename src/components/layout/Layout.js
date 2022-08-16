import React from 'react'
import Header from './Header';
import Main from './Main';

const Layout = () => {
  return (
    <div className="tm-page-wrap mx-auto">
      <Header></Header>
      <Main></Main>
    </div>
  )
}

export default Layout;