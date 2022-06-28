
interface Topic {
    content: string,
    uuid: string,
    parent: any,
    children: Array<string>,
}

const fakeDataArray: Array<Topic> = [
    {
        content: "Politics",
        uuid: "123",
        parent: null,
        children: ["44", "55", "66"]
    },
    {
        content: "Gaming",
        uuid: "334",
        parent: null,
        children: ["77"]
    },
    {
        content: "Politics1",
        uuid: "44",
        parent: "123",
        children: ["234"]
    },
    {
        content: "Politics2",
        uuid: "55",
        parent: "123",
        children: []
    },
    {
        content: "Politics3",
        uuid: "66",
        parent: "123",
        children: []
    },
    {
        content: "Abortion",
        uuid: "666",
        parent: "66",
        children: []
    },
    {
        content: "Skyrim",
        uuid: "77",
        parent: "334",
        children: []
    },
    {
        content: "BenGhazi",
        uuid: "234",
        parent: "44",
        children: []
    },
]

export default fakeDataArray;