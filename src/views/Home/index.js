import React, { useState, useContext } from "react"
import { Row, Col, BackTop, Card, Input, List, Radio, Space, Collapse } from 'antd';
import { Link } from "react-router-dom";
import { LessonOptionContext } from "../../context/index";
import Header from "../header/index"
import Footer from "../footer/index"
import "./index.css"

// * Images
// const poster = require("../../assets/images/morgan.jpg")

const movies = [];
for (let i = 1; i <= 300; i++) {
    movies.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        subject: "ພາສາຟຣັ່ງ",
        pschool: `ປ${i}`,
        hschool: `ມ${i}`,
        topic: "ການອ່ານ",
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team. ',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const filterData = [
    {
        id: 1,
        title: "ວິຊາຮຽນ:",
        children: [
            {
                id: 1,
                value: "",
                label: "All",
            },
            {
                id: 2,
                value: "ກະສິກຳ",
                label: "ກະສິກຳ",
            },
            {
                id: 3,
                value: "ການເຮືອນ",
                label: "ການເຮືອນ",
            },
            {
                id: 4,
                value: "ກໍ່ສ້າງເຄຫາສະຖານ",
                label: "ກໍ່ສ້າງເຄຫາສະຖານ",
            },
            {
                id: 5,
                value: "ຄະນິດສາດ",
                label: "ຄະນິດສາດ",
            },
            {
                id: 6,
                value: "ຄຸນສົມບັດສຶກສາ",
                label: "ຄຸນສົມບັດສຶກສາ",
            },
            {
                id: 6,
                value: "ຄຸນສົມບັດສຶກສາ ແລະ ໂລກອ້ອມໂຕເຮົາ",
                label: "ຄຸນສົມບັດສຶກສາ ແລະ ໂລກອ້ອມໂຕເຮົາ",
            },
            {
                id: 7,
                value: "ສຶກສາພົນລະເມືອງ",
                label: "ສຶກສາພົນລະເມືອງ",
            },
            {
                id: 8,
                value: "ຊ່າງລົດຍົນ",
                label: "ຊ່າງລົດຍົນ",
            },
            {
                id: 9,
                value: "ຊ່າງໄຟຟ້າ",
                label: "ຊ່າງໄຟຟ້າ",
            },
            {
                id: 10,
                value: "ຊີວະວິທະຍາ",
                label: "ຊີວະວິທະຍາ",
            },
            {
                id: 11,
                value: "ທຸລະກິດ",
                label: "ທຸລະກິດ",
            },
            {
                id: 12,
                value: "ທຸລະກິດສຳລັບຮຽນຄວບກັບ 6 ສາຊາວິຊາ",
                label: "ທຸລະກິດສຳລັບຮຽນຄວບກັບ 6 ສາຊາວິຊາ",
            },
            {
                id: 13,
                value: "ປະຫວັດສາດ",
                label: "ປະຫວັດສາດ",
            },
            {
                id: 14,
                value: "ພາສາຟຣັ່ງ",
                label: "ພາສາຟຣັ່ງ",
            },
            {
                id: 15,
                value: "ພາສາຢີ່ປຸ່ນ",
                label: "ພາສາຢີ່ປຸ່ນ",
            },
            {
                id: 16,
                value: "ພາສາລາວ",
                label: "ພາສາລາວ",
            },
            {
                id: 17,
                value: "ພາສາອັງກິດ",
                label: "ພາສາອັງກິດ",
            },
            {
                id: 18,
                value: "ພື້ນຖານວິຊາຊີບ",
                label: "ພື້ນຖານວິຊາຊີບ",
            },
            {
                id: 19,
                value: "ພູມສາດ",
                label: "ພູມສາດ",
            },
            {
                id: 20,
                value: "ຟີຊິກສາດ",
                label: "ຟີຊິກສາດ",
            },
            {
                id: 21,
                value: "ວິທະຍາສາດ ແລະ ສີ່ງແວດລ້ອມ",
                label: "ວິທະຍາສາດ ແລະ ສີ່ງແວດລ້ອມ",
            },
            {
                id: 22,
                value: "ວິທະຍາສາດທຳມະຊາດ",
                label: "ວິທະຍາສາດທຳມະຊາດ",
            },
            {
                id: 23,
                value: "ວັນນະຄະດີ",
                label: "ວັນນະຄະດີ",
            },
            {
                id: 24,
                value: "ເຄມີສາດ",
                label: "ເຄມີສາດ",
            },
            {
                id: 25,
                value: "ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ ແລະ ການສື່ສານ",
                label: "ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ ແລະ ການສື່ສານ",
            },
            {
                id: 26,
                value: "ໂລຫະວິທະຍາ",
                label: "ໂລຫະວິທະຍາ",
            },
        ]
    },
    {
        id: 2,
        title: "ປະຖົມສຶກສາ:",
        children: [
            {
                id: 1,
                value: "",
                label: "All",
            },
            {
                id: 21,
                value: "ປ1",
                label: "ປ 1",
            },
            {
                id: 22,
                value: "ປ2",
                label: "ປ 2",
            },
            {
                id: 23,
                value: "ປ3",
                label: "ປ 3",
            },
            {
                id: 24,
                value: "ປ4",
                label: "ປ 4",
            },
            {
                id: 25,
                value: "ປ5",
                label: "ປ 5",
            },
        ]
    },
    {
        id: 3,
        title: "ມັດທະຍົມສຶກສາ:",
        children: [
            {
                id: 1,
                value: "",
                label: "All",
            },
            {
                id: 31,
                value: "ມ1",
                label: "ມ 1",
            },
            {
                id: 32,
                value: "ມ2",
                label: "ມ 2",
            },
            {
                id: 33,
                value: "ມ3",
                label: "ມ 3",
            },
            {
                id: 34,
                value: "ມ4",
                label: "ມ 4",
            },
            {
                id: 35,
                value: "ມ5",
                label: "ມ 5",
            },
            {
                id: 36,
                value: "ມ6",
                label: "ມ 6",
            },
            {
                id: 37,
                value: "ມ7",
                label: "ມ 7",
            },
        ]
    },
    {
        id: 4,
        title: "ຄວາມສາມາດສະເພາະທາງ:",
        children: [
            {
                id: 1,
                value: "",
                label: "All",
            },
            {
                id: 41,
                value: "ການອ່ານ",
                label: "ການອ່ານ",
            },
            {
                id: 42,
                value: "ການຂຽນ",
                label: "ການຂຽນ",
            },
            {
                id: 43,
                value: "ການແຕ້ມ",
                label: "ການແຕ້ມ",
            },
            {
                id: 44,
                value: "ການເຕັ້ນ",
                label: "ການເຕັ້ນ",
            }
        ]
    }
]

const Home = () => {
    const { Meta } = Card;
    const { Panel } = Collapse;
    const [searchMovies, setSearchMovies] = useState("");
    const [filterSubjectValue, setFilterSubjectValue] = useState("");
    const [filterPSchoolValue, setFilterPSchoolValue] = useState("");
    const [filterHSchoolValue, setFilterHSchoolValue] = useState("");
    const [filterTopicValue, setFilterTopicValue] = useState("");

    const { lessons } = useContext(LessonOptionContext);
    // console.log("===>>>", filterSubjectValue);

    const dataMovies = searchMovies !== null ? !!lessons && lessons.filter(movie => movie.name.toLowerCase().includes(searchMovies.toLowerCase())) : movies;
    const filterSubjects = filterSubjectValue !== "" ? dataMovies.filter(movie => movie.subject === filterSubjectValue) : dataMovies;
    const filterPSchools = filterPSchoolValue !== "" ? filterSubjects.filter(movie => movie.pschool === filterPSchoolValue) : filterSubjects;
    const filterHSchools = filterHSchoolValue !== "" ? filterPSchools.filter(movie => movie.hschool === filterHSchoolValue) : filterPSchools;
    const filterTopics = filterTopicValue !== "" ? filterHSchools.filter(movie => movie.topic === filterTopicValue) : filterHSchools;
    const allData = filterTopics;
    // console.log('allData = ', allData);

    function onChangeSubject(e) {
        // console.log('onChangeSubject = ', e.target.value);
        setFilterSubjectValue(e.target.value);
    }
    function onChangePSchool(e) {
        // console.log('onChangePSchool = ', e.target.value);
        setFilterPSchoolValue(e.target.value);
    }
    function onChangeHSchool(e) {
        // console.log('onChangeHSchool = ', e.target.value);
        setFilterHSchoolValue(e.target.value);
    }
    function onChangeTopic(e) {
        // console.log('onChangeTopic = ', e.target.value);
        setFilterTopicValue(e.target.value);
    }

    return (
        <div>
            <BackTop />

            <Header />

            <div style={{ padding: 10 }}>
                <div className="search-section">
                    <div className="search-section-title-box">
                        <div className="search-section-title">Search Your Lesson</div>
                    </div>
                    <div className="search-section-input-box">
                        <Input
                            placeholder={`Search...`}
                            className="search-section-input"
                            onChange={(e) => setSearchMovies(e.target.value)}
                            value={searchMovies}
                            allowClear={true}
                        />
                    </div>
                </div>
                <Row>
                    <Col md={4}>
                        <div style={{ margin: 15 }}>
                            <h3 style={{ color: "darkgray" }}>Filter by:</h3>
                            {filterData.map((item, idx) => {
                                const { title, children } = item;
                                return (
                                    <div key={idx}>
                                        {/* <Divider plain>{title}</Divider> */}
                                        <Collapse ghost>
                                            <Panel header={title} key="1">
                                                <Radio.Group
                                                    value={title === "ວິຊາຮຽນ:"
                                                        ? filterSubjectValue : title === "ປະຖົມສຶກສາ:"
                                                            ? filterPSchoolValue : title === "ມັດທະຍົມສຶກສາ:"
                                                                ? filterHSchoolValue : filterTopicValue
                                                    }
                                                    id={title}
                                                    name={title}
                                                    style={{ width: '100%' }}
                                                    onChange={title === "ວິຊາຮຽນ:"
                                                        ? onChangeSubject : title === "ປະຖົມສຶກສາ:"
                                                            ? onChangePSchool : title === "ມັດທະຍົມສຶກສາ:"
                                                                ? onChangeHSchool : onChangeTopic
                                                    }
                                                >
                                                    <Space direction="vertical">
                                                        {children.map((child, idx) => (
                                                            <Radio key={idx} value={child.value}>{child.label}</Radio>
                                                        ))}
                                                    </Space>
                                                </Radio.Group>
                                            </Panel>
                                        </Collapse>

                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                    <Col md={20}>
                        <div style={{ padding: 10 }}>
                            <List
                                style={{ marginTop: 10 }}
                                grid={{
                                    gutter: 16,
                                    xs: 1,
                                    sm: 2,
                                    md: 4,
                                    lg: 4,
                                    xl: 6,
                                    xxl: 3,
                                }}
                                itemLayout="vertical"
                                // size="large"
                                pagination={{
                                    // onChange: page => {
                                    //     console.log(page);
                                    // },
                                    pageSize: 18,
                                    centered: true,
                                }}
                                dataSource={allData}
                                // footer={
                                //     <div>
                                //         <b>ant design</b> footer part
                                //     </div>
                                // }
                                renderItem={item => (
                                    <List.Item>
                                        <Link to={`/name=${item.name}`}>
                                            <Card
                                                hoverable
                                                className="movieBox"
                                                cover={<img alt={item.name} src={`${item.img}`} className="imgPoster" />}
                                            >
                                                <Meta title={item.name}
                                                // description={movie.description}
                                                />
                                            </Card>
                                        </Link>
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                </Row>

            </div>

            <Footer />
        </div>
    )
}

export default Home