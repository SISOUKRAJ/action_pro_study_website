import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Col, Typography, Button, Skeleton } from 'antd';
import Header from "../header/index";
import Footer from "../footer/index";
import "./index.css";

const { Paragraph } = Typography;

const SingleMovie = () => {
    let { id } = useParams();

    const [lesson, setLesson] = useState("");
    // console.log(lesson);

    const get_lesson = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL_V1}/get_one_lesson.php?name=${id}`)
            .then(res => {
                setLesson(res.data[0]);
                // console.log(res.data);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        get_lesson();
    });

    return (
        <div>
            <Header />

            <div style={{ padding: 10 }}>
                <Row>
                    <Col xs={24} sm={8} md={8} lg={8}>
                        {!lesson ?
                            <Skeleton.Image className="skeletonImage" />
                            :
                            <div style={{ padding: 10, textAlign: "center" }}>
                                <img src={lesson.img} alt={lesson.name} className="sMoviePoster" ></img>
                            </div>
                        }
                    </Col>
                    <Col xs={24} sm={16} md={16} lg={16}>
                        <div className="trailerMovieBox">
                            {!lesson ?
                                <Skeleton.Image className="skeletonVideo" />
                                :
                                <iframe
                                    className="trailerMovie"
                                    // src="ftp://vod_amagtv@103.27.203.70/720p.mp4"
                                    src={lesson.video}
                                    title={lesson.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            }
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={24} sm={8} md={8} lg={8} style={{ padding: 5 }}>
                        <div className="sMovieParagraphLeft">
                            {!lesson ?
                                <Skeleton.Input active block /> :
                                <div className="smpTitle">{lesson.name}</div>
                            }
                        </div>
                    </Col>
                    <Col xs={24} sm={16} md={16} lg={16} style={{ padding: 5 }}>
                        <div className="sMovieParagraphRight">
                            {!lesson ?
                                <div>
                                    <Skeleton.Input active block size="small" style={{ marginBottom: 5 }} />
                                    <Skeleton.Input active block size="small" style={{ marginBottom: 5 }} />
                                    <Skeleton.Input active block size="small" style={{ marginBottom: 5 }} />
                                </div> :
                                <Paragraph>
                                    {lesson.description}
                                </Paragraph>
                            }

                            <div className="filter-box">
                                <Row>
                                    <Col xs={24} sm={12} md={6} lg={6}>
                                        <h3 style={{ color: "#ff1744", fontWeight: "bold" }}>Subject</h3>
                                        <div className="filter-box-btn">
                                            {!lesson ?
                                                <div>
                                                    <Skeleton.Input active size="default" />
                                                </div> :
                                                <Button size="middle" shape="round" style={{ margin: "0px 5px" }}>
                                                    {lesson.subject}
                                                </Button>
                                            }
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={6} lg={6}>
                                        <h3 style={{ color: "#ff1744", fontWeight: "bold" }}>Primary School</h3>
                                        <div className="filter-box-btn">
                                            {!lesson ?
                                                <div>
                                                    <Skeleton.Input active size="default" />
                                                </div> :
                                                <Button size="middle" shape="round" style={{ margin: "0px 5px" }}>
                                                    {lesson.pschool}
                                                </Button>
                                            }
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={6} lg={6}>
                                        <h3 style={{ color: "#ff1744", fontWeight: "bold" }}>High School</h3>
                                        <div className="filter-box-btn">
                                            {!lesson ?
                                                <div>
                                                    <Skeleton.Input active size="default" />
                                                </div> :
                                                <Button size="middle" shape="round" style={{ margin: "0px 5px" }}>
                                                    {lesson.hschool}
                                                </Button>
                                            }
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={6} lg={6}>
                                        <h3 style={{ color: "#ff1744", fontWeight: "bold" }}>Topic</h3>
                                        <div className="filter-box-btn">
                                            {!lesson ?
                                                <div>
                                                    <Skeleton.Input active size="default" />
                                                </div> :
                                                <Button size="middle" shape="round" style={{ margin: "0px 5px" }}>
                                                    {lesson.topic}
                                                </Button>
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <Footer />
        </div>
    )
}

export default SingleMovie

