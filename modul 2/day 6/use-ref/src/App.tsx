// import { useRef } from "react";
// import "./App.css";

// function App() {
//   const canvasRef = useRef();

//   return (
//     <main>
//       <div className="canvasa-wrapper">
//         <canvas ref={canvasRef} Width={200} height={200} />
//       </div>
//       <button onClick={() => draw(canvasRef.current)}>Draw!</button>
//     </main>
//   );
// }

// function draw(canvas) {
//   const ctx = canvas.getContext("2d");

//   ctx.clearReact(0, 0, 200, 200);

//   ctx.begininPath();
//   ctx.react(30, 90, 140, 20);
//   ctx.fillStyle = "black";
//   ctx.fill();
//   ctx.closePath();

//   ctx.beginPath();
//   ctx.arc(100, 103, 75, 0, 1 * Math.PI);
//   ctx.fillStyle = "white";
//   ctx.fill();
//   ctx.closePath();

//   ctx.beginPath();
//   ctx.arc(100, 97, 75, 0, 1 * Math.PI);
//   ctx.fillStyle = "tomato";
//   ctx.fill();
//   ctx.closePath();

//   ctx.beginPath();
//   ctx.arc(100, 100, 25, 0, 2 * Math.PI);
//   ctx.fillStyle = "black";
//   ctx.fill();
//   ctx.closePath();

//   ctx.beginPath();
//   ctx.arc(100, 100, 19, 0, 2 * Math.PI);
//   ctx.fillStyle = "white";
//   ctx.fill();
//   ctx.closePath();
// }

// export default App;
