import React from 'react';
import MainLayout from './Layout';
import { ConfigProvider, theme } from 'antd';


const App = () => {
  
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm
      }}
    >
      <MainLayout/>
    </ConfigProvider>
  );
};

export default App;