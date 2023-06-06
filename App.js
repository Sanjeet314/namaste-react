/**
 *  <div id="parent">
 *      <div id="child">
 *          <h1> I am h1 tag </h1>
 *      </div>
 *  </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am h2"),
  ])
);

// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello From React");

// //transforming vanilla root into react root to make everything work under it. now react will have access to this root as parent and every dom interaction and manipulation we do will be part of this root

// console.log(heading); // heading is acrually a object not a plain html. the root.render(heading) will take this "object" and do some manipulation to exctract some info form this object and render the tags inside the root

const root = ReactDOM.createRoot(document.getElementById("root"));

//render metohd will be responsible for taking the obj and convert it into h1 tag and put it on dom
root.render(parent);
