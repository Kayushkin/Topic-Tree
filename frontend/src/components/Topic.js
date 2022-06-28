import React from "react";
import ChildrenContainer from "./ChildrenContainer";
import fakeDataArray from "./fakeData.ts";
import TopicComment from "./TopicComment";

const Topic = ({ content, uuid, parent, children }) => {
    return <>
        <TopicComment content={content} />
        <ChildrenContainer uuid={uuid} children={children} />
    </>
}



export default Topic;