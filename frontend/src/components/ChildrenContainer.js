import React from "react";
import fakeDataArray from "./fakeData.ts";
import Topic from "./Topic";

const ChildrenContainer = ({ uuid, children }) => {
    return <>
        <p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#" + "button" + uuid} aria-expanded="false" aria-controls={uuid + "button"}>
                Expand
            </button>
        </p>
        <div class="collapse" id={"button" + uuid}>
            <div class="card card-body">
                {fakeDataArray.map((topic) => {
                    if (children?.includes(topic.uuid))
                        return <>{<Topic content={topic.content} uuid={topic.uuid} parent={topic.parent} children={topic.children} />}</>
                })}
            </div>
        </div>
    </>
}

export default ChildrenContainer;