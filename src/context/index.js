import React, { useState, useEffect, createContext } from "react"
import axios from "axios";

export const LessonOptionContext = createContext({ lessons: [] });

const GetDriver = (props) => {
    const [lessons, setLessons] = useState([]);

    const get_lessons = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL_V1}/get_all_lesson.php`,
            // {
            //     headers: {
            //         "Authorization": `Bearer ${localStorage.getItem("token")}`,
            //     },
            // }
        )
            .then(res => {
                setLessons(res.data);
                // console.log(res.data);
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        get_lessons();
    }, []);

    return (
        <div>
            <LessonOptionContext.Provider
                value={{ lessons }}
            >
                {props.children}
            </LessonOptionContext.Provider>
        </div>
    )
}

export default GetDriver