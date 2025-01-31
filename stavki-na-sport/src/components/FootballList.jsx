import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Team',
    dataIndex: 'team',
    key: 'team',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Ceff_1',
    dataIndex: 'ceff_1',
    key: 'ceff_1',
  },
  {
    title: 'Selected',
    key: 'selected',
    dataIndex: 'selected',
    render: (_, record) => {
      record.quantity > 0 ?
      <>
      <Tag color="green-inverse">Available {record.quantity}</Tag>
      <Tag color="volcano">Out of Stock</Tag>
      </>
    },
  },

  {
    title: 'Ceff_2',
    dataIndex: 'ceff_2',
    key: 'ceff_2',
  },

  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    Team: 'Динамо',
    Score: 1,
    Ceff_1: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    Ceff_2: '',
  },
  {
    key: '2',
    Team: 'Шахтар',
    Score: 2,
    Ceff_1: 'London No. 1 Lake Park',
    tags: ['loser'],
    Ceff_2: '',
  },
  {
    key: '3',
    Team: 'Ліверпуль',
    Score: 0,
    Ceff_1: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    Ceff_2: '',
  },
  {
    key: '4',
    Team: 'Карпати',
    Score: 5,
    Ceff_1: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    Ceff_2: '',
  },
];
const FootballList = () => <Table columns={columns} dataSource={data} />;

export default FootballList;