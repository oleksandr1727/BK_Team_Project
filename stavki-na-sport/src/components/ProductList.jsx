import React, { useState } from 'react';
import { Button, message, Popconfirm, Space, Table, Tag } from 'antd';
import { DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { data } from './Vmist';

const ProductList = () => {

    const [products, setProducts] = useState(data);

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
            title: 'Ceff1',
            key: 'ceff1',
            dataIndex: 'ceff1',
            render: (text, i) => <Tag color="blue">{i.ceff1}</Tag>
        },

        {
            title: 'Draw',
            key: 'draw',
            dataIndex: 'draw',
            render: (text, i) => <Tag color="gold">{i.draw}</Tag>
        },
        {
            title: 'Ceff2',
            key: 'ceff2',
            dataIndex: 'ceff2',
            render: (text, i) => <Tag color="red">{i.ceff2}</Tag>
        },
    
        {
            title: 'Action',
            id: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/details/${record.key}`}>
                    <Button color primary icon={<InfoCircleOutlined />} />
                    </Link>
                    <Popconfirm
                        Team="Delete the product?"
                        description={`Are you sure to delete ${record.Team}?`}
                        onConfirm={() => onDelete(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                          <Button color danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                </Space>
            ),
        },
    ];
   
    
    const onDelete = (id) => {
        const index = products.findIndex(x => x.key === id);
        if(index !== -1)
                {
                    setProducts(products.filter((_, i) => i !== index))
                    message.success('Product deleted successfully!');
                }
        else
       message.error('Product does not found!');
    }

    return (<Table columns={columns} dataSource={products} />)

}


export default ProductList;