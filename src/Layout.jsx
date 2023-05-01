
import { Layout, Menu, theme } from 'antd';
import React from 'react';
// import Card from './components/card/Card';
import CardComponent from './components/card/CardComponent';
import { links } from './utils/navlinks';



const { Header, Content } = Layout;
const items1 = links.map((link) => ({
  key: link.id,
  label: `${link.name}`,
  link: link.navlink
}))

// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });


const MainLayout= () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header" style={{
        display:"flex" , justifyContent:"space-between",alignItems:"center",color: '#051c2c',
      }}>
        <div className="logo" style={{
          display :  "flex"
        }}>
         <img src="https://www.odos.xyz/_next/image?url=%2Fassets%2Flogo_white_transparent.png&w=256&q=75" width="100px" alt="site logo" /></div>
         <div style={{
          display:"flex"
         }}>
         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        <div>
          <button className='btn'>
            Launch App
          </button>
        </div>
         </div>
        
      </Header>
      <Content
        style={{
          padding: '0 50px',
          backgroundColor: '#051c2c',
          font : 'white',
        }}
      >
       
       
        <Layout className='layout'
          style={{
            
            background: colorBgContainer,
            
          }}
        >
          
          <Content
            style={{
              padding: '0 20px',
              minHeight: '100vh',
              backgroundColor: '#051c2c',
              color: 'black', 
            }}
          >
            Content
            <CardComponent />
           {/* <Card /> */}

          </Content>
        </Layout>
      </Content>
      
    </Layout>
  );
};
export default MainLayout;