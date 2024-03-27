// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello world from REACT!");

const parent = React.createElement(
    "div",
    {id: "parent" },[
    React.createElement(
        "div",
        { id : "child 1"},
        [React.createElement("h1", {}, "I'm an h1 tag and child 1"),
        React.createElement("h1", {}, "I'm an h1 tag and child 2")
    ]),

    React.createElement(
        "div",
        { id : "child 1"},
        [React.createElement("h1", {}, "I'm an h1 tag and child 1 slibling 2"),
        React.createElement("h1", {}, "I'm an h1 tag and child 2 sibling 2")
    ]),
]);


//JSX

    console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);