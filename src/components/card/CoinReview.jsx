import React from 'react'
import './coinreview.css';
import {Layout, Menu, theme } from 'antd';
const { Content } = Layout;

const CoinReview = () => {

    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <div>
        {/* <Layout>
        <Content
        className="site-layout"
        style={{
         
        }}
      >
          
        <div
          style={{
            padding: 24,
            minHeight: 220,
            backgroundColor:'darkgrey'
          }}
        >
          <button></button>
        </div>
      </Content>
        </Layout> */}
    </div>
  )
}

export default CoinReview