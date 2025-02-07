import React from 'react';
import { Button, Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

function AntDesignPage() {
  return (
    <Layout>
      <Header>
        <Title style={{ color: 'white' }}>Ant Design</Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Button type="primary">Hello Ant Design</Button>
      </Content>
    </Layout>
  );
}

export default AntDesignPage;