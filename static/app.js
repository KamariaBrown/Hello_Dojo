//for each thing of text, use React.createElement(html tag, null, text)
//and then ReactDOM.render(react element to load, 'target html id to load into')
//ex:const myButton = React.createElement('button', null, 'Click Me');
//ReactDOM.render(myButton, document.getElementById('app'));
var a = React.createElement("h1", null, "Hello Dojo");
var b= React.createElement("h2", null, "Things I need to do:");
var c= [
    React.createElement("li", null, "Learn React"),
    React.createElement("li", null, "Climb Mt Everest"),
    React.createElement("li", null, "Run a marathon"),
    React.createElement("li", null, "Feed the dogs"),
]
ReactDOM.render(a, document.getElementById('header')); 
ReactDOM.render(b, document.getElementById('subheader')); 
ReactDOM.render(c, document.getElementById('list')); 
console.log("saying hello")

