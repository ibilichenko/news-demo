import React from 'react';
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd';
import { Store } from 'antd/lib/form/interface';
import axios from 'axios';
import { fetchComments } from '../slice'
import { SendOutlined } from '@ant-design/icons'
import styles from './style.module.css'

const UserInput = ({ newsId }: { newsId: string }) => {
    const dispatch = useDispatch();
    const onSubmit = (values: Store) => {
        axios.post('http://localhost:3001/comments', {
            author: values.author,
            text: values.text,
            newsId: newsId
        })
            .then(() => {
                dispatch(fetchComments(newsId))
            })
    }
    return (
        <Form
        className={styles.form}
            layout='horizontal'
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onSubmit}
        >
            <Form.Item
                label="Username"
                name="author"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input className={styles.usernameInput} placeholder="Enter your username" />
            </Form.Item>
            <div style={{display: 'flex'}}>
            <Form.Item
                label='Comment'
                name="text"
                rules={[
                    {
                        required: true,
                        message: 'Please input your comment!',
                    },
                ]}
            >
                <Input.TextArea className={styles.commentInput} autoSize placeholder="Type your comment" />
            </Form.Item>
            <Form.Item >
                <Button type="text" htmlType="submit" icon={<SendOutlined />}>
                </Button>
            </Form.Item>
            </div>
        </Form>
    )
}

export default UserInput;