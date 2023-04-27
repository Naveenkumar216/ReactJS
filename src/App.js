//import logo from "./logo.svg";
// import React, { useReducer } from "react";
import "./App.css";

import ParentComponent from "./components/ParentComponent";

//import DataFetchingTwo from "./components/DataFetchingTwo";
//import DataFetchingOne from "./components/DataFetchingOne";

// import ComponentG from "./components/ComponentG";
// import ComponentH from "./components/ComponentH";
// import ComponentI from "./components/ComponentI";

//import CounterOne from "./components/CounterOne";
//import CounterTwo from "./components/CounterTwo";
//import CounterThree from "./components/CounterThree";

//import ComponentC from "./components/ComponentC";

//import DataFetching from "./components/DataFetching";

//import IntervalClassCounter from "./components/IntervalClassCounter";
//import IntervalHookCounter from "./components/IntervalHookCounter";

//import MouseContainer from "./components/MouseContainer";
//import HookMouse from "./components/HookMouse";
//import ClassMouse from "./components/ClassMouse";
//import ClassCounterOne from "./components/ClassCounterOne";
//import HookCounterOne from "./components/HookCounterOne";

//import HookCounterFour from "./components/HookCounterFour";
//import HookCounterThree from "./components/HookCounterThree";
//import HookCounterTwo from "./components/HookCounterTwo";
//import HookCounter from "./components/HookCounter";

//import ClassCounter from "./components/ClassCounter";

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div className="App">
      <ParentComponent></ParentComponent>
      {/* <DataFetchingTwo></DataFetchingTwo> */}

      {/* <DataFetchingOne></DataFetchingOne> */}

      {/* Count - {count}
        <ComponentG></ComponentG>
        <ComponentH></ComponentH>
        <ComponentI></ComponentI> */}

      {/* <CounterThree></CounterThree> */}
      {/* <CounterTwo></CounterTwo> */}
      {/* <CounterOne></CounterOne> */}
      {/* <ComponentC></ComponentC> */}
      {/* <DataFetching></DataFetching> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <IntervalClassCounter></IntervalClassCounter> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <HookMouse></HookMouse> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookCounterOne></HookCounterOne> */}
      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounter></HookCounter> */}
      {/* <ClassCounter></ClassCounter> */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
