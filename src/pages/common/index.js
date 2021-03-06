import React from 'react';
import { Card, Avatar, Tag, Table, Divider } from 'antd';

export const createItem = (item, index, width = '20%') => (
  <Card.Grid key={index} style={{ width }}>
    <Card bodyStyle={{ padding: 0 }} bordered={false}>
      <Card.Meta
        title={
          <span>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Avatar src={item.logo} />&nbsp;&nbsp;&nbsp;
              <span>{item.name}</span>&nbsp;&nbsp;&nbsp;
            </a>
            {item.reg ? <a href={item.reg} target="_blank" rel="noopener noreferrer">
              <Tag color='orange'>直达</Tag>
            </a> : ''}
          </span>
        }
      />
    </Card>
  </Card.Grid>
)

export const createCard = (title, data, width = '20%', extra = '') => (
  <Card
    style={{ marginBottom: 24 }}
    bodyStyle={{ padding: 0 }}
    bordered={false}
    title={<span style={{fontWeight: 'bold'}}>{title}</span>}
    extra={extra}
  >
    {
      data.map((item, index) => (
        createItem(item, index, width)
      ))
    }
  </Card>
)

export const createCard4 = (title, data) =>  (
  createCard(title, data, '25%')
)

export const createCard3 = (title, data) =>  (
  createCard(title, data, '33.33%')
)

export const createCard2 = (title, data) =>  (
  createCard(title, data, '50%')
)

export const createCard1 = (title, data) => (
  createCard(title, data, '100%')
)

export const createTableCard = (title, columns, data) => (
  <Card
      style={{ marginBottom: 24 }}
      bodyStyle={{ padding: 20 }}
      bordered={false}
      title={<span style={{fontWeight: 'bold'}}>{title}</span>}
    >
      <Table columns={columns} dataSource={data} />
  </Card>
)

export const divider = (text) => (
  <Divider style={{fontWeight:'bold', color: 'green'}}>{text}</Divider>
)