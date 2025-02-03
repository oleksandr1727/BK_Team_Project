import { Button, message, Form, Input, InputNumber, Select, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

export default function CreateProduct(){

    // const categories = [
    //      { label: "Phones", value: 1 },
    //      { label: "Electronics", value: 2 },
    //      { label: "Fashion", value: 3 },
    //      { label: "Sport", value: 4 }
    // ]

    const onSubmit = () =>{  message.success("Product Create =) ");}


    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Create new match</h2>

            
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 19,
                }}
                layout="horizontal"
                onFinish={onSubmit}
            >
                <Form.Item label="Team" name="team"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                        },
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Ceff1" name="ceff1">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Draw" name="draw">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Ceff2" name="ceff2">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Score" name="score">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                {/* <Form.Item label="Category" name="categoryId">
                    <Select options={categories}></Select>
                </Form.Item> */}
                <Form.Item label="Description" name="description">
                    <TextArea rows={4} />
                </Form.Item>
                {/* <Form.Item label="Image" name="imageUrl">
                    <Input />
                </Form.Item> */}
                
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    <Space>
                        <Button type="default" htmlType="reset">
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Create 
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}