import React from "react";

const TopicComment = ({ content }) => {
    return <>
        {
            content && <h1> {content}</h1>
        }
    </>
}

export default TopicComment;