// import React, { useState } from "react";
// import "./styles.css";
// // import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

// const Allsymptoms = ['No symptoms', 'shortness of breadth', 'nasal congestion' ,'dry cough',
// 'feaver', 'sore throat', 'runny nose', 'diarrhea', 'abdomnalnpain', 'fatigue', 'pressure in the chest'];

// export default function Example() {
//   const [button, setButton] = useState([]);

//   // const click = setButton([...button])
//   return (
//     <div>
//        <div data-v-2d7880ea="" className="form-field">
                                
//         {Allsymptoms.map((simp, index) => {
//             return <button onClick={() => setButton([...button, simp])} index={index} key={index} type='button'>{simp}</button>
//           })}
//   </div><br/><br/>
//     {button}

//     </div>
//   );
// }







// import React, { useState, useReducer } from "react";
// import "./styles.css";

// export default function example() {

//   const [input, setInput] = useState(0);

//   const [myArray, dispatch] = useReducer((myArray, { type, value }) => {
//     switch (type) {
//       case "add":
//         return [...myArray, value];
//       case "remove":
//         return myArray.filter((_, index) => index !== value);
//       default:
//         return myArray;
//     }
//   }, [1, 2, 3]);

//   return (
//     <div>
//       <input value={input} onInput={e => setInput(e.target.value)} />
//       <button onClick={() => dispatch({ type: "add", value: input})}>
//         Add
//       </button>

//       {myArray.map((item, index) => (
//         <div>
//           <h2>
//             {item}
//             <button onClick={() => dispatch({ type: "remove", value: index })}>
//               Remove
//             </button>
//           </h2>
//         </div>
//       ))}
//     </div>
//   );
// }