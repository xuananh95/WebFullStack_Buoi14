import React from "react";
import { Button, Col, List, notification, Popconfirm, Row, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Search } = Input;

const ManagerUser = ({ users, setUsers }) => {
    const removeUser = (id) => {
        const removedData = users.filter((item) => item.id !== id);
        setUsers(removedData);
        notification["success"]({
            message: "Deleted successfully!",
        });
    };

    const confirmDelete = () => {
        setUsers([]);
        notification["success"]({
            message: "Deleted all members successfully!",
        });
    };

    const cancelDelete = () => {
        return;
    };

    const handleSearch = (e) => {
        // const search_data = data.filter((item) =>
        //     item.email.toLowerCase().includes(e.target.value.toLowerCase())
        // );
        // setPeople(search_data);
    };

    return (
        <>
            <Row>
                <Col span={12}>
                    <h2 style={{ float: "left", marginLeft: "5px" }}>
                        Total number of users: {users.length}
                    </h2>
                </Col>
                <Col span={4}>
                    <Popconfirm
                        title="Are you sure to delete all members?"
                        onConfirm={confirmDelete}
                        onCancel={cancelDelete}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button>Delete all</Button>
                    </Popconfirm>
                </Col>
                <Col span={8}>
                    <Search
                        placeholder="input search text"
                        style={{
                            width: 200,
                        }}
                        onChange={handleSearch}
                    />
                </Col>
            </Row>
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={users}
                    renderItem={(item) => (
                        <List.Item style={{ textAlign: "left" }}>
                            <List.Item.Meta
                                title={
                                    <a href="https://ant.design">{`${item.name}`}</a>
                                }
                                description={
                                    <div>
                                        <Row>
                                            <Col>Tuổi: </Col>
                                            <Col>{item.age}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Giới tính: </Col>
                                            <Col>{item.gender}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Quê quán: </Col>
                                            <Col>{item.country}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Số điện thoại: </Col>
                                            <Col>{item.phone}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Sở thích: </Col>
                                            {item.likeFootball && (
                                                <Col>Bóng đá</Col>
                                            )}
                                            {item.likeVolleyball && (
                                                <Col>Bóng chuyền</Col>
                                            )}
                                        </Row>
                                        <Row>
                                            <Col>Mô tả về bản thân: </Col>
                                            <Col>{item.description}</Col>
                                        </Row>
                                    </div>
                                }
                            />
                            <DeleteOutlined
                                onClick={() => removeUser(item.id)}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
};

export default ManagerUser;
