import './App.css';
import ComponentOne from "./components/ComponentOne"
import ComponentTwo from "./components/ComponentTwo"
import ComponentThree from "./components/ComponentThree"

// const aFunction = function (){
//   return "I'm just a function"
// }

function App() {
  return (
    <div className="App">
        <h1>Props Playground</h1>
        <p>"props" is an object that React components can make use of.</p><p> The components in THIS app are set up to give us a peek at the props object of each:</p>
        <ComponentOne propOne={"hurly-burly"}/>
        <ComponentTwo fruit={"apple"} target={"Isaac Newton"}/>
        <ComponentThree list={["A","B","C"] } numberList={[1,2,3]} />

        {/* <ComponentOne functionProp={aFunction}/> */}
        {/* <ComponentTwo /> */}
        {/* <ComponentThree/> */}

    </div>
  );
}

export default App;
