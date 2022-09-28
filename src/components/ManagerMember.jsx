import React from 'react';
import { Avatar, Col, List, notification, Popconfirm, Row } from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import { useState } from 'react';
import {data} from '../people';


const ManagerMember = () => {
    const [people, setPeople] = useState(data);

    const removePeople = (id) => {
        const removedData = people.filter((item) => item.id !== id);
        setPeople(removedData);
        notification['success']({
            message: 'Deleted successfully!'
          });
    }

    const confirmDelete = () => {
        setPeople([]);
        notification['success']({
            message: 'Deleted all members successfully!'
          });
    }

    const cancelDelete = () => {
        return;
    }

    return (
            <>
                <Row>
                    <Col span={16}>
                        <h2 style={{float: 'left', marginLeft:'5px'}}>Total number of members: {people.length}</h2>
                    </Col>
                    <Col span={8}>
                        <Popconfirm
                            title="Are you sure to delete all members?"
                            onConfirm={confirmDelete}
                            onCancel={cancelDelete}
                            okText="Yes"
                            cancelText="No"
                        >
                            <a href="#">Delete all</a>
                        </Popconfirm>                        
                    </Col>
                </Row>
                <div>
                    <List
                        itemLayout="horizontal"
                        dataSource={people}
                        renderItem={(item) => (
                            <List.Item style={{textAlign:'left'}}>
                                <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href="https://ant.design">{`${item.first_name} ${item.last_name}`}</a>}
                                description={
                                    <div>
                                        <Row>
                                            <Col>Email address:</Col>
                                            <Col>{item.email}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Gender:</Col>
                                            <Col>{item.gender}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Address:</Col>
                                            <Col>{item.address}</Col>
                                        </Row>
                                    </div>
                                }
                                />
                            <DeleteOutlined onClick={() => removePeople(item.id)}/>
                            </List.Item>
                        )}
                    />
                </div>
            </>
    )
}

export default ManagerMember