// import { useReducer } from "react";
// import "./App.css";

// function reducer(state, action) {
//   switch (action.type) {
//     case "CHANGED_NAME": {
//       return {
//         name: action.nextName,
//         age: state.age,
//       };
//     }
//     case "INCREMENT_AGE": {
//       return {
//         name: state.name,
//         age: state.age + 1,
//       };
//     }
//   }
// }

// const initialState = { name: " ", age: 29 };

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <input
//         type="text"
//         value={state.name}
//         onChange={(event) =>
//           dispatch({
//             type: "CHANGED_NAME",
//             nextName: event.target.value,
//           })
//         }
//       />
//       <button
//         onClick={() =>
//           dispatch({
//             type: "INCREMENT_AGE",
//           })
//         }
//       >
//         increment age
//       </button>
//       <p>
//         hello {state.name}. you are {state.age} year old
//       </p>
//     </>
//   );
// }

// export default App;

import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGED_NAME": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
    case "INCREMENT_AGE": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
  }
}

const initialState = { name: " ", age: 29 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <input
        type="text"
        value={state.name}
        onChange={(event) =>
          dispatch({
            type: "CHANGED_NAME",
            nextName: event.target.value,
          })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT_AGE",
          })
        }
      >
        increment age
      </button>
      <p>
        hello {state.name} you are {state.age} year old
      </p>
    </>
  );
}

export default App;
