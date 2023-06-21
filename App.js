import React from "react";
import ReactDOM from "react-dom/client";
// /**
//  *  <div id="parent">
//  *      <div id="child">
//  *          <h1> I am h1 tag </h1>
//  *      </div>
//  *  </div>
//  *
//  */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am H1 tag :)"),
//     React.createElement("h2", {}, "I am h2"),
//   ])
// );

// // const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello From React");

// // //transforming vanilla root into react root to make everything work under it. now react will have access to this root as parent and every dom interaction and manipulation we do will be part of this root

// // console.log(heading); // heading is acrually a object not a plain html. the root.render(heading) will take this "object" and do some manipulation to exctract some info form this object and render the tags inside the root

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //render metohd will be responsible for taking the obj and convert it into h1 tag and put it on dom
// root.render(parent);

//JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)

// const jsxHeading = (<h1 className="heading" tabIndex="5">Namaste React JSX</h1>);
// console.log(jsxHeading);

//React Componet: A function returning JSX syntax



const Title = () => (
    <h1 className="title" tabIndex="5">
        Namaste React usnig JSX
    </h1>
);

const elem = (
    <div>
       <h1>H1 Bulls</h1>
       <Title />
       {<Title />}
       {Title()}
    </div>
);

const Heading = () => (
    <div id="container">
        {elem}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
