import React from "react";
import fakeData from "./fakeData.ts"
import Topic from "./Topic";

const TopicTree = () => {
    return <>
        {
            fakeData.map((topic) => {
                if (topic.parent == null) {
                    return <Topic content={topic.content} uuid={topic.uuid} parent={topic.parent} children={topic.children}></Topic>
                }
            })
        }
    </>
}

export default TopicTree;