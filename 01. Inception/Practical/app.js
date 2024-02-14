// ✅Using JS to manipulate the DOM

// const h1 = document.createElement('h1');
// h1.innerHTML = "Hello World using JavaScript";
// const root = document.getElementById('root');
// root.appendChild(h1)




// ✅Using React
// ✅Create nested React Elements 

// we are going to create the following HTML structure using React 
{/* <div id="parent">
    <div id="child">
        <h1>Hello World from React</h1>
    </div>
</div> */}

const parent = React.createElement("div", { id: "parent" }, 
React.createElement("div", { id: "child" }, 
React.createElement("h1", {}, "Hello World from React")))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)

// use console to see the HTML structure 





