import React from "react"
import { Menu, Dropdown, Space } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate, Link } from "react-router-dom";
import "./index.css"

const items = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeOutlined />,
    },
];

const menu = (
    <Menu
        items={[
            {
                label: (
                    <div className="user1stBox">
                        <div className="userItem">Name: <strong>action</strong></div>
                        <div className="userItem">VIP: <strong>10</strong> days</div>
                    </div>
                )
            },
            {
                label: "VIP CODE",
            },
            {
                label: "Pricing Plans",
            },
            {
                label: (
                    <Link
                        to="/login"
                    >
                        Log Out
                    </Link>
                ),
                danger: true,
            },
        ]}
    />
);

const Header = () => {

    const [current, setCurrent] = React.useState('mail');
    const navigate = useNavigate();

    const onClick = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
        navigate(`/${e.key}`);
    };

    return (
        <div>
            <div className="headerBox">
                <div>
                    <Link to="/home">
                        <img
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            alt="Action Pro Movies"
                            className="headerLogo"
                        />
                    </Link>

                </div>
                <div className="headerBoxRight" >

                    {/* <input
                        placeholder="Search Movie, Series, TV..."
                        className="searchOnHeader"
                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
                    // value={form.name}
                    /> */}

                    <Dropdown overlay={menu} placement="bottomRight" arrow={{ pointAtCenter: true }} overlayStyle={{ width: 200 }}>
                        {/* <a href="#" onClick={(e) => e.preventDefault()}> */}
                        <Space className="userHover">
                            {/* Hover me */}
                            <UserOutlined />
                        </Space>
                        {/* </a> */}
                    </Dropdown>
                </div>
            </div>

            <div className="contactText">
                please, Contact us: 020 99889988
            </div>

            <Menu
                style={{
                    // background: 'black',
                    // color: 'white',
                }}
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
        </div>
    )
}

export default Header