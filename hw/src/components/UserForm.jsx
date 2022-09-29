import React from "react";
import { Form, Input, Radio, InputNumber, Checkbox } from "antd";
import { useState } from "react";
const { TextArea } = Input;

const initial_user = {
    name: "",
    age: null,
    gender: null,
    country: "",
    phone: null,
    likeFootball: false,
    likeVolleyball: false,
    description: "",
};

const UserForm = ({ users, setUsers }) => {
    const [user, setUser] = useState(initial_user);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { ...user, id: users.length };
        setUsers([...users, newUser]);
    };
    return (
        <div className="form-container">
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onSubmit={handleSubmit}
            >
                <Form.Item label="Họ và tên">
                    <Input
                        value={user.name}
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                    />
                </Form.Item>
                <Form.Item label="Tuổi">
                    <InputNumber
                        value={user.age}
                        onChange={(e) => {
                            setUser({ ...user, age: e });
                        }}
                    />
                </Form.Item>
                <Form.Item label="Giới tính">
                    <Radio.Group
                        onChange={(e) =>
                            setUser({ ...user, gender: e.target.value })
                        }
                    >
                        <Radio value="male"> Nam </Radio>
                        <Radio value="female"> Nữ </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Quê quán">
                    <Input
                        value={user.country}
                        onChange={(e) =>
                            setUser({ ...user, country: e.target.value })
                        }
                    />
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <InputNumber
                        size="large"
                        value={user.phone}
                        onChange={(e) => {
                            setUser({ ...user, phone: e });
                        }}
                    />
                </Form.Item>
                <Form.Item
                    label="Sở thích"
                    name="disabled"
                    valuePropName="checked"
                >
                    <Checkbox
                        onChange={() =>
                            setUser({
                                ...user,
                                likeFootball: !user.likeFootball,
                            })
                        }
                    >
                        Bóng đá
                    </Checkbox>
                    <Checkbox
                        onChange={() =>
                            setUser({
                                ...user,
                                likeVolleyball: !user.likeVolleyball,
                            })
                        }
                    >
                        Bóng chuyền
                    </Checkbox>
                </Form.Item>
                <Form.Item label="Mô tả">
                    <TextArea
                        rows={4}
                        value={user.description}
                        onChange={(e) =>
                            setUser({ ...user, description: e.target.value })
                        }
                    />
                </Form.Item>
                <Form.Item label="Button">
                    <button type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UserForm;
