// import React, { useState } from "react";
// void React;
// const losingPositions = [2, 3, 6, 7, 10, 11, 13];
// const isLosingPosition = (pos: number) => losingPositions.includes(pos);

// export default function App() {
//   const [position, setPosition] = useState(0);
//   const [mode, setMode] = useState<"player" | "computer" | null>(null);
//   const [turn, setTurn] = useState("Player 1");

//   const resetGame = () => {
//     setPosition(0);
//     setMode(null);
//     setTurn("Player 1");
//   };

//   const makeMove = (step: number) => {
//     const newPosition = position + step;
//     if (newPosition > 13) return; // don't allow > 13
//     setPosition(newPosition);

//     if (newPosition === 13) {
//       return;
//     }

//     if (mode === "player") {
//       setTurn(turn === "Player 1" ? "Player 2" : "Player 1");
//     } else if (mode === "computer") {
//       if (turn === "Player") {
//         setTurn("Computer");
//         setTimeout(() => computerMove(newPosition), 700);
//       } else {
//         setTurn("Player");
//       }
//     }
//   };

//   const computerMove = (currentPos: number) => {
//     if (currentPos >= 13) return;
//     let move = 1;
//     for (let i = 2; i >= 1; i--) {
//       if (!isLosingPosition(currentPos + i) && currentPos + i <= 13) {
//         move = i;
//         break;
//       }
//     }
//     makeMove(move);
//   };

//   const renderNumberStrip = () => {
//     const numbers = [];
//     for (let i = 0; i <= 13; i++) {
//       const isCurrent = i === position;
//       numbers.push(
//         <div
//           key={i}
//           className={`number-cell ${isCurrent ? "current" : ""}`}
//           aria-current={isCurrent ? "true" : undefined}
//           aria-label={isCurrent ? `Current position ${i}` : `Position ${i}`}
//         >
//           {i}
//         </div>
//       );
//     }
//     return <div className="number-strip">{numbers}</div>;
//   };

//   if (!mode) {
//     return (
//       <>
//         <style>{styles}</style>
//         <main className="main-container start-screen">
//           <section className="card" aria-label="Game Mode Selection">
//             <h1>Don't Say 13!</h1>
//             <p>Select a game mode:</p>
//             <button
//               onClick={() => {
//                 setMode("player");
//                 setTurn("Player 1");
//               }}
//               aria-label="Two Player Mode"
//             >
//               Two Player
//             </button>
//             <button
//               onClick={() => {
//                 setMode("computer");
//                 setTurn("Player");
//               }}
//               aria-label="Play Against Computer"
//             >
//               Vs Computer
//             </button>
//           </section>
//         </main>
//       </>
//     );
//   }

//   return (
//     <>
//       <style>{styles}</style>
//       <main className="main-container game-screen" aria-label="Don't Say 13 Game">
//         <section className="card game-card">
//           <h2>Don't Say 13!</h2>
//           {renderNumberStrip()}
//           <div className="current-position-container">
//             <p>Current Position:</p>
//             <div
//               className="current-position"
//               aria-live="polite"
//               aria-atomic="true"
//             >
//               {position}
//             </div>
//           </div>

//           <div className="turn-info">
//             <p>
//               Turn: <strong>{turn}</strong>
//             </p>
//             <div className="buttons-row">
//               <button
//                 disabled={position >= 13}
//                 onClick={() => makeMove(1)}
//                 aria-disabled={position >= 13}
//                 aria-label="Add 1 to current position"
//               >
//                 +1
//               </button>
//               <button
//                 disabled={position >= 12}
//                 onClick={() => makeMove(2)}
//                 aria-disabled={position >= 12}
//                 aria-label="Add 2 to current position"
//               >
//                 +2
//               </button>
//             </div>
//           </div>

//           <button onClick={resetGame} aria-label="Restart game" className="restart-btn">
//             Restart Game
//           </button>
//         </section>
//       </main>
//     </>
//   );
// }

// const styles = `
//   /* Main container fills viewport and applies original background gradients */
//   .main-container {
//     min-height: 100vh;
//     width: 100vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 1rem;
//     box-sizing: border-box;
//   }

//   .start-screen {
//     background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
//   }

//   .game-screen {
//     background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
//   }

//   /* Card styling */
//   .card {
//     background-color: white;
//     border-radius: 12px;
//     box-shadow: 0 6px 20px rgba(0,0,0,0.15);
//     padding: 2rem 2.5rem;
//     width: 100%;
//     max-width: 480px;
//     box-sizing: border-box;
//     text-align: center;
//     user-select: none;
//   }

//   /* Headings */
//   h1, h2 {
//     margin: 0 0 1.5rem;
//     color: #343a40;
//   }

//   h2 {
//     color: #3b0a45;
//   }

//   p {
//     margin: 0 0 1rem;
//     color: #495057;
//     font-size: 1.1rem;
//   }

//   /* Buttons shared */
//   button {
//     background-color: #6b46c1;
//     border: none;
//     border-radius: 8px;
//     color: white;
//     cursor: pointer;
//     font-weight: 600;
//     padding: 0.9rem 1.8rem;
//     font-size: 1.05rem;
//     transition: background-color 0.3s ease;
//     user-select: none;
//     min-width: 120px;
//   }

//   button:hover:not(:disabled) {
//     background-color: #553c9a;
//   }

//   button:disabled,
//   button[aria-disabled="true"] {
//     background-color: #a0aec0;
//     cursor: not-allowed;
//   }

//   /* Start screen buttons */
//   .start-screen button:nth-child(3) {
//     margin-bottom: 1rem;
//     background-color: #3b82f6;
//   }
//   .start-screen button:nth-child(4) {
//     background-color: #ef4444;
//   }
//   .start-screen button:nth-child(3):hover {
//     background-color: #2563eb;
//   }
//   .start-screen button:nth-child(4):hover {
//     background-color: #dc2626;
//   }

//   /* Number strip container */
//   .number-strip {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin-bottom: 1.5rem;
//     gap: 0.5rem;
//   }

//   /* Number cells */
//   .number-cell {
//     flex: 1 0 30px;
//     min-width: 28px;
//     margin: 0.2rem;
//     padding: 0.6rem 0;
//     border-radius: 6px;
//     background-color: #f8f9fa;
//     color: #212529;
//     font-weight: 500;
//     text-align: center;
//     box-shadow: inset 0 0 3px #ced4da;
//     user-select: none;
//   }

//   .number-cell.current {
//     background-color: #d6336c;
//     color: white;
//     font-weight: 700;
//     box-shadow: 0 0 8px 2px rgba(214, 51, 108, 0.6);
//   }

//   /* Current position display */
//   .current-position-container p {
//     color: #5a2a6a;
//     font-size: 1.15rem;
//     margin-bottom: 0.3rem;
//   }

//   .current-position {
//     font-size: 2.5rem;
//     font-weight: bold;
//     color: #d6336c;
//     margin-bottom: 1.8rem;
//     user-select: none;
//   }

//   /* Turn info */
//   .turn-info p {
//     font-size: 1.15rem;
//     color: #4b2964;
//     margin-bottom: 1rem;
//   }

//   /* Buttons row */
//   .buttons-row {
//     display: flex;
//     gap: 1rem;
//     justify-content: center;
//     flex-wrap: wrap;
//   }

//   .buttons-row button {
//     flex: 1 1 120px;
//   }

//   /* Restart button distinct color */
//   .restart-btn {
//     background-color: #db2777;
//     margin-top: 1rem;
//   }

//   .restart-btn:hover {
//     background-color: #be185d;
//   }

//   /* Responsive adjustments */
//   @media (max-width: 480px) {
//     .card {
//       padding: 1.5rem 1.5rem;
//       max-width: 100%;
//     }

//     .current-position {
//       font-size: 2rem;
//     }

//     button {
//       font-size: 1rem;
//       padding: 0.75rem 1.2rem;
//       min-width: 100px;
//     }

//     .number-cell {
//       flex: 1 0 24px;
//       min-width: 22px;
//       font-size: 0.9rem;
//       padding: 0.45rem 0;
//     }
//   }

//   @media (min-width: 768px) {
//     .card {
//       max-width: 560px;
//       padding: 2.5rem 3rem;
//     }

//     .current-position {
//       font-size: 3rem;
//     }

//     button {
//       font-size: 1.15rem;
//       padding: 1rem 2rem;
//       min-width: 140px;
//     }

//     .number-cell {
//       flex: 1 0 36px;
//       min-width: 32px;
//       font-size: 1.1rem;
//       padding: 0.7rem 0;
//     }
//   }

//   @media (min-width: 1200px) {
//     .card {
//       max-width: 680px;
//         padding: 3rem 4rem;
// }

// .current-position {
//   font-size: 3.8rem;
// }

// button {
//   font-size: 1.25rem;
//   padding: 1.1rem 2.4rem;
//   min-width: 160px;
// }

// .number-cell {
//   flex: 1 0 40px;
//   min-width: 38px;
//   font-size: 1.2rem;
//   padding: 0.8rem 0;
// }
// }`;


// import React, { useState } from "react";
// void React;

// const losingPositions = [2, 3, 6, 7, 10, 11, 13];
// const isLosingPosition = (pos: number) => losingPositions.includes(pos);

// export default function App() {
//   const [position, setPosition] = useState(0);
//   const [mode, setMode] = useState<"player" | "computer" | null>(null);
//   const [turn, setTurn] = useState("Player 1");
//   const [gameOver, setGameOver] = useState(false);
//   const [loser, setLoser] = useState("");

//   const resetGame = () => {
//     setPosition(0);
//     setMode(null);
//     setTurn("Player 1");
//     setGameOver(false);
//     setLoser("");
//   };

//   const makeMove = (step: number) => {
//     if (gameOver) return;
//     const newPosition = position + step;
//     if (newPosition > 13) return;

//     setPosition(newPosition);

//     if (newPosition === 13) {
//       setGameOver(true);
//       if (mode === "player") {
//         setLoser(turn);
//       } else {
//         setLoser(turn === "Player" ? "Player" : "Computer");
//       }
//       return;
//     }

//     if (mode === "player") {
//       setTurn(turn === "Player 1" ? "Player 2" : "Player 1");
//     } else if (mode === "computer") {
//       if (turn === "Player") {
//         setTurn("Computer");
//         setTimeout(() => computerMove(newPosition), 700);
//       } else {
//         setTurn("Player");
//       }
//     }
//   };

//   const computerMove = (currentPos: number) => {
//     if (currentPos >= 13 || gameOver) return;
//     let move = 1;
//     for (let i = 2; i >= 1; i--) {
//       if (!isLosingPosition(currentPos + i) && currentPos + i <= 13) {
//         move = i;
//         break;
//       }
//     }
//     makeMove(move);
//   };

//   const renderNumberStrip = () => {
//     const numbers = [];
//     for (let i = 0; i <= 13; i++) {
//       const isCurrent = i === position;
//       numbers.push(
//         <div
//           key={i}
//           className={`number-cell ${isCurrent ? "current" : ""}`}
//           aria-current={isCurrent ? "true" : undefined}
//           aria-label={isCurrent ? `Current position ${i}` : `Position ${i}`}
//         >
//           {i}
//         </div>
//       );
//     }
//     return <div className="number-strip">{numbers}</div>;
//   };

//   if (!mode) {
//     return (
//       <>
//         <style>{styles}</style>
//         <main className="main-container start-screen">
//           <section className="card" aria-label="Game Mode Selection">
//             <h1>Don't Say 13!</h1>
//             <p>Select a game mode:</p>
//             <button onClick={() => { setMode("player"); setTurn("Player 1"); }}>Two Player</button>
//             <button onClick={() => { setMode("computer"); setTurn("Player"); }}>Vs Computer</button>
//           </section>
//         </main>
//       </>
//     );
//   }

//   return (
//     <>
//       <style>{styles}</style>
//       <main className="main-container game-screen" aria-label="Don't Say 13 Game">
//         <section className="card game-card">
//           <h2>Don't Say 13!</h2>
//           {renderNumberStrip()}
//           <div className="current-position-container">
//             <p>Current Position:</p>
//             <div className="current-position" aria-live="polite">{position}</div>
//           </div>

//           <div className="turn-info">
//             <p>Turn: <strong>{turn}</strong></p>
//             {gameOver && (
//               <p style={{ color: "#e11d48", fontWeight: "bold" }}>
//                 Game Over! {loser} loses for saying 13!
//               </p>
//             )}
//             <div className="buttons-row">
//               <button
//                 disabled={position >= 13 || gameOver}
//                 onClick={() => makeMove(1)}
//               >
//                 +1
//               </button>
//               <button
//                 disabled={position >= 12 || gameOver}
//                 onClick={() => makeMove(2)}
//               >
//                 +2
//               </button>
//             </div>
//           </div>

//           <button onClick={resetGame} className="restart-btn">Restart Game</button>
//         </section>
//       </main>
//     </>
//   );
// }

// const styles = `
//   /* Main container fills viewport and applies original background gradients */
//   .main-container {
//     min-height: 100vh;
//     width: 100vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 1rem;
//     box-sizing: border-box;
//   }

//   .start-screen {
//     background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
//   }

//   .game-screen {
//     background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
//   }

//   /* Card styling */
//   .card {
//     background-color: white;
//     border-radius: 12px;
//     box-shadow: 0 6px 20px rgba(0,0,0,0.15);
//     padding: 2rem 2.5rem;
//     width: 100%;
//     max-width: 480px;
//     box-sizing: border-box;
//     text-align: center;
//     user-select: none;
//   }

//   /* Headings */
//   h1, h2 {
//     margin: 0 0 1.5rem;
//     color: #343a40;
//   }

//   h2 {
//     color: #3b0a45;
//   }

//   p {
//     margin: 0 0 1rem;
//     color: #495057;
//     font-size: 1.1rem;
//   }

//   /* Buttons shared */
//   button {
//     background-color: #6b46c1;
//     border: none;
//     border-radius: 8px;
//     color: white;
//     cursor: pointer;
//     font-weight: 600;
//     padding: 0.9rem 1.8rem;
//     font-size: 1.05rem;
//     transition: background-color 0.3s ease;
//     user-select: none;
//     min-width: 120px;
//   }

//   button:hover:not(:disabled) {
//     background-color: #553c9a;
//   }

//   button:disabled,
//   button[aria-disabled="true"] {
//     background-color: #a0aec0;
//     cursor: not-allowed;
//   }

//   /* Start screen buttons */
//   .start-screen button:nth-child(3) {
//     margin-bottom: 1rem;
//     background-color: #3b82f6;
//   }
//   .start-screen button:nth-child(4) {
//     background-color: #ef4444;
//   }
//   .start-screen button:nth-child(3):hover {
//     background-color: #2563eb;
//   }
//   .start-screen button:nth-child(4):hover {
//     background-color: #dc2626;
//   }

//   /* Number strip container */
//   .number-strip {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin-bottom: 1.5rem;
//     gap: 0.5rem;
//   }

//   /* Number cells */
//   .number-cell {
//     flex: 1 0 30px;
//     min-width: 28px;
//     margin: 0.2rem;
//     padding: 0.6rem 0;
//     border-radius: 6px;
//     background-color: #f8f9fa;
//     color: #212529;
//     font-weight: 500;
//     text-align: center;
//     box-shadow: inset 0 0 3px #ced4da;
//     user-select: none;
//   }

//   .number-cell.current {
//     background-color: #d6336c;
//     color: white;
//     font-weight: 700;
//     box-shadow: 0 0 8px 2px rgba(214, 51, 108, 0.6);
//   }

//   /* Current position display */
//   .current-position-container p {
//     color: #5a2a6a;
//     font-size: 1.15rem;
//     margin-bottom: 0.3rem;
//   }

//   .current-position {
//     font-size: 2.5rem;
//     font-weight: bold;
//     color: #d6336c;
//     margin-bottom: 1.8rem;
//     user-select: none;
//   }

//   /* Turn info */
//   .turn-info p {
//     font-size: 1.15rem;
//     color: #4b2964;
//     margin-bottom: 1rem;
//   }

//   /* Buttons row */
//   .buttons-row {
//     display: flex;
//     gap: 1rem;
//     justify-content: center;
//     flex-wrap: wrap;
//   }

//   .buttons-row button {
//     flex: 1 1 120px;
//   }

//   /* Restart button distinct color */
//   .restart-btn {
//     background-color: #db2777;
//     margin-top: 1rem;
//   }

//   .restart-btn:hover {
//     background-color: #be185d;
//   }

//   /* Responsive adjustments */
//   @media (max-width: 480px) {
//     .card {
//       padding: 1.5rem 1.5rem;
//       max-width: 100%;
//     }

//     .current-position {
//       font-size: 2rem;
//     }

//     button {
//       font-size: 1rem;
//       padding: 0.75rem 1.2rem;
//       min-width: 100px;
//     }

//     .number-cell {
//       flex: 1 0 24px;
//       min-width: 22px;
//       font-size: 0.9rem;
//       padding: 0.45rem 0;
//     }
//   }

//   @media (min-width: 768px) {
//     .card {
//       max-width: 560px;
//       padding: 2.5rem 3rem;
//     }

//     .current-position {
//       font-size: 3rem;
//     }

//     button {
//       font-size: 1.15rem;
//       padding: 1rem 2rem;
//       min-width: 140px;
//     }

//     .number-cell {
//       flex: 1 0 36px;
//       min-width: 32px;
//       font-size: 1.1rem;
//       padding: 0.7rem 0;
//     }
//   }

//   @media (min-width: 1200px) {
//     .card {
//       max-width: 680px;
//         padding: 3rem 4rem;
// }

// .current-position {
//   font-size: 3.8rem;
// }

// button {
//   font-size: 1.25rem;
//   padding: 1.1rem 2.4rem;
//   min-width: 160px;
// }

// .number-cell {
//   flex: 1 0 40px;
//   min-width: 38px;
//   font-size: 1.2rem;
//   padding: 0.8rem 0;
// }
// }`;

// import React, { useState, useEffect } from "react";
// void React;

// const losingPositions = [2, 3, 6, 7, 10, 11, 13];
// const isLosingPosition = (pos: number) => losingPositions.includes(pos);

// export default function App() {
//   const [position, setPosition] = useState(0);
//   const [mode, setMode] = useState<"player" | "computer" | null>(null);
//   const [turn, setTurn] = useState("Player");
//   const [gameOver, setGameOver] = useState(false);
//   const [loser, setLoser] = useState("");

//   // Handle computer move automatically when it's their turn
//   useEffect(() => {
//     if (mode === "computer" && turn === "Computer" && !gameOver) {
//       const timeout = setTimeout(() => {
//         computerMove(position);
//       }, 700);
//       return () => clearTimeout(timeout);
//     }
//   }, [turn, position, gameOver, mode]);

//   const resetGame = () => {
//     setPosition(0);
//     setMode(null);
//     setTurn("Player");
//     setGameOver(false);
//     setLoser("");
//   };

//   const makeMove = (step: number) => {
//     if (gameOver) return;

//     const newPosition = position + step;
//     if (newPosition > 13) return;

//     setPosition(newPosition);

//     if (newPosition === 13) {
//       setGameOver(true);
//       setLoser(turn);
//       return;
//     }

//     // Change turn
//     if (mode === "player") {
//       setTurn(turn === "Player 1" ? "Player 2" : "Player 1");
//     } else if (mode === "computer") {
//       setTurn(turn === "Player" ? "Computer" : "Player");
//     }
//   };

//   const computerMove = (currentPos: number) => {
//     if (currentPos >= 13 || gameOver) return;

//     // Smart strategy to avoid losing positions
//     // let move = 1;
//     // for (let i = 2; i >= 1; i--) {
//     //   const nextPos = currentPos + i;
//     //   if (nextPos <= 13 && !isLosingPosition(nextPos)) {
//     //     move = i;
//     //     break;
//     //   }
//     // }

//     // Smart strategy: prefer non-losing positions, otherwise pick randomly
//     let move = 1;
//     if (
//       currentPos + 2 <= 13 &&
//       !isLosingPosition(currentPos + 2)
//     ) {
//       move = 2;
//     } else if (
//       currentPos + 1 <= 13 &&
//       !isLosingPosition(currentPos + 1)
//     ) {
//       move = 1;
//     } else {
//       // Random choice when no good move
//       move = currentPos + 2 > 13 ? 1 : Math.random() < 0.5 ? 1 : 2;
//     }


//     makeMove(move);
//   };

//   const renderNumberStrip = () => {
//     const numbers = [];
//     for (let i = 0; i <= 13; i++) {
//       const isCurrent = i === position;
//       numbers.push(
//         <div
//           key={i}
//           className={`number-cell ${isCurrent ? "current" : ""}`}
//           aria-current={isCurrent ? "true" : undefined}
//         >
//           {i}
//         </div>
//       );
//     }
//     return <div className="number-strip">{numbers}</div>;
//   };

//   if (!mode) {
//     return (
//       <>
//         <style>{styles}</style>
//         <main className="main-container start-screen">
//           <section className="card" aria-label="Game Mode Selection">
//             <h1>Don't Say 13!</h1>
//             <p>Select a game mode:</p>
//             <button onClick={() => { setMode("player"); setTurn("Player 1"); }}>
//               Two Player
//             </button>
//             <button onClick={() => { setMode("computer"); setTurn("Player"); }}>
//               Vs Computer
//             </button>
//           </section>
//         </main>
//       </>
//     );
//   }

//   return (
//     <>
//       <style>{styles}</style>
//       <main className="main-container game-screen">
//         <section className="card game-card">
//           <h2>Don't Say 13!</h2>
//           {renderNumberStrip()}
//           <div className="current-position-container">
//             <p>Current Position:</p>
//             <div className="current-position">{position}</div>
//           </div>

//           <div className="turn-info">
//             <p>Turn: <strong>{turn}</strong></p>
//             {gameOver && (
//               <p style={{ color: "#e11d48", fontWeight: "bold" }}>
//                 Game Over! {loser} loses for saying 13!
//               </p>
//             )}
//             {turn === "Player" && !gameOver && (
//               <div className="buttons-row">
//                 <button
//                   disabled={position >= 13 || gameOver}
//                   onClick={() => makeMove(1)}
//                 >
//                   +1
//                 </button>
//                 <button
//                   disabled={position >= 12 || gameOver}
//                   onClick={() => makeMove(2)}
//                 >
//                   +2
//                 </button>
//               </div>
//             )}
//           </div>

//           <button onClick={resetGame} className="restart-btn">Restart Game</button>
//         </section>
//       </main>
//     </>
//   );
// }

// const styles = `
//   /* Main container fills viewport and applies original background gradients */
//   .main-container {
//     min-height: 100vh;
//     width: 100vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 1rem;
//     box-sizing: border-box;
//   }

//   .start-screen {
//     background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
//   }

//   .game-screen {
//     background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
//   }

//   /* Card styling */
//   .card {
//     background-color: white;
//     border-radius: 12px;
//     box-shadow: 0 6px 20px rgba(0,0,0,0.15);
//     padding: 2rem 2.5rem;
//     width: 100%;
//     max-width: 480px;
//     box-sizing: border-box;
//     text-align: center;
//     user-select: none;
//   }

//   /* Headings */
//   h1, h2 {
//     margin: 0 0 1.5rem;
//     color: #343a40;
//   }

//   h2 {
//     color: #3b0a45;
//   }

//   p {
//     margin: 0 0 1rem;
//     color: #495057;
//     font-size: 1.1rem;
//   }

//   /* Buttons shared */
//   button {
//     background-color: #6b46c1;
//     border: none;
//     border-radius: 8px;
//     color: white;
//     cursor: pointer;
//     font-weight: 600;
//     padding: 0.9rem 1.8rem;
//     font-size: 1.05rem;
//     transition: background-color 0.3s ease;
//     user-select: none;
//     min-width: 120px;
//   }

//   button:hover:not(:disabled) {
//     background-color: #553c9a;
//   }

//   button:disabled,
//   button[aria-disabled="true"] {
//     background-color: #a0aec0;
//     cursor: not-allowed;
//   }

//   /* Start screen buttons */
//   .start-screen button:nth-child(3) {
//     margin-bottom: 1rem;
//     background-color: #3b82f6;
//   }
//   .start-screen button:nth-child(4) {
//     background-color: #ef4444;
//   }
//   .start-screen button:nth-child(3):hover {
//     background-color: #2563eb;
//   }
//   .start-screen button:nth-child(4):hover {
//     background-color: #dc2626;
//   }

//   /* Number strip container */
//   .number-strip {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin-bottom: 1.5rem;
//     gap: 0.5rem;
//   }

//   /* Number cells */
//   .number-cell {
//     flex: 1 0 30px;
//     min-width: 28px;
//     margin: 0.2rem;
//     padding: 0.6rem 0;
//     border-radius: 6px;
//     background-color: #f8f9fa;
//     color: #212529;
//     font-weight: 500;
//     text-align: center;
//     box-shadow: inset 0 0 3px #ced4da;
//     user-select: none;
//   }

//   .number-cell.current {
//     background-color: #d6336c;
//     color: white;
//     font-weight: 700;
//     box-shadow: 0 0 8px 2px rgba(214, 51, 108, 0.6);
//   }

//   /* Current position display */
//   .current-position-container p {
//     color: #5a2a6a;
//     font-size: 1.15rem;
//     margin-bottom: 0.3rem;
//   }

//   .current-position {
//     font-size: 2.5rem;
//     font-weight: bold;
//     color: #d6336c;
//     margin-bottom: 1.8rem;
//     user-select: none;
//   }

//   /* Turn info */
//   .turn-info p {
//     font-size: 1.15rem;
//     color: #4b2964;
//     margin-bottom: 1rem;
//   }

//   /* Buttons row */
//   .buttons-row {
//     display: flex;
//     gap: 1rem;
//     justify-content: center;
//     flex-wrap: wrap;
//   }

//   .buttons-row button {
//     flex: 1 1 120px;
//   }

//   /* Restart button distinct color */
//   .restart-btn {
//     background-color: #db2777;
//     margin-top: 1rem;
//   }

//   .restart-btn:hover {
//     background-color: #be185d;
//   }

//   /* Responsive adjustments */
//   @media (max-width: 480px) {
//     .card {
//       padding: 1.5rem 1.5rem;
//       max-width: 100%;
//     }

//     .current-position {
//       font-size: 2rem;
//     }

//     button {
//       font-size: 1rem;
//       padding: 0.75rem 1.2rem;
//       min-width: 100px;
//     }

//     .number-cell {
//       flex: 1 0 24px;
//       min-width: 22px;
//       font-size: 0.9rem;
//       padding: 0.45rem 0;
//     }
//   }

//   @media (min-width: 768px) {
//     .card {
//       max-width: 560px;
//       padding: 2.5rem 3rem;
//     }

//     .current-position {
//       font-size: 3rem;
//     }

//     button {
//       font-size: 1.15rem;
//       padding: 1rem 2rem;
//       min-width: 140px;
//     }

//     .number-cell {
//       flex: 1 0 36px;
//       min-width: 32px;
//       font-size: 1.1rem;
//       padding: 0.7rem 0;
//     }
//   }

//   @media (min-width: 1200px) {
//     .card {
//       max-width: 680px;
//         padding: 3rem 4rem;
// }

// .current-position {
//   font-size: 3.8rem;
// }

// button {
//   font-size: 1.25rem;
//   padding: 1.1rem 2.4rem;
//   min-width: 160px;
// }

// .number-cell {
//   flex: 1 0 40px;
//   min-width: 38px;
//   font-size: 1.2rem;
//   padding: 0.8rem 0;
// }
// }`;

// import React, { useState, useEffect } from "react";
// void React;

// const losingPositions = [2, 3, 6, 7, 10, 11, 13];
// const isLosingPosition = (pos: number) => losingPositions.includes(pos);

// export default function App() {
//   const [position, setPosition] = useState(0);
//   const [mode, setMode] = useState<"player" | "computer" | null>(null);
//   const [turn, setTurn] = useState("Player");
//   const [gameOver, setGameOver] = useState(false);
//   const [loser, setLoser] = useState("");

//   // Computer's automatic move
//   useEffect(() => {
//     if (mode === "computer" && turn === "Computer" && !gameOver) {
//       const timeout = setTimeout(() => {
//         computerMove(position);
//       }, 700);
//       return () => clearTimeout(timeout);
//     }
//   }, [turn, position, gameOver, mode]);

//   const resetGame = () => {
//     setPosition(0);
//     setMode(null);
//     setTurn("Player");
//     setGameOver(false);
//     setLoser("");
//   };

//   const makeMove = (step: number) => {
//     if (gameOver) return;

//     const newPosition = position + step;
//     if (newPosition > 13) return;

//     setPosition(newPosition);

//     if (newPosition === 13) {
//       setGameOver(true);
//       setLoser(turn);
//       return;
//     }

//     // Toggle turn
//     if (mode === "player") {
//       setTurn(turn === "Player 1" ? "Player 2" : "Player 1");
//     } else if (mode === "computer") {
//       setTurn(turn === "Player" ? "Computer" : "Player");
//     }
//   };

//   const computerMove = (currentPos: number) => {
//     if (currentPos >= 13 || gameOver) return;

//     let move = 1;
//     for (let i = 2; i >= 1; i--) {
//       const nextPos = currentPos + i;
//       if (nextPos <= 13 && !isLosingPosition(nextPos)) {
//         move = i;
//         break;
//       }
//     }

//     makeMove(move);
//   };

//   const renderNumberStrip = () => {
//     const numbers = [];
//     for (let i = 0; i <= 13; i++) {
//       const isCurrent = i === position;
//       numbers.push(
//         <div
//           key={i}
//           className={`number-cell ${isCurrent ? "current" : ""}`}
//           aria-current={isCurrent ? "true" : undefined}
//         >
//           {i}
//         </div>
//       );
//     }
//     return <div className="number-strip">{numbers}</div>;
//   };

//   if (!mode) {
//     return (
//       <>
//         <style>{styles}</style>
//         <main className="main-container start-screen">
//           <section className="card" aria-label="Game Mode Selection">
//             <h1>Don't Say 13!</h1>
//             <p>Select a game mode:</p>
//             <button onClick={() => { setMode("player"); setTurn("Player 1"); }}>
//               Two Player
//             </button>
//             <button onClick={() => { setMode("computer"); setTurn("Player"); }}>
//               Vs Computer
//             </button>
//           </section>
//         </main>
//       </>
//     );
//   }

//   return (
//     <>
//       <style>{styles}</style>
//       <main className="main-container game-screen">
//         <section className="card game-card">
//           <h2>Don't Say 13!</h2>
//           {renderNumberStrip()}
//           <div className="current-position-container">
//             <p>Current Position:</p>
//             <div className="current-position">{position}</div>
//           </div>

//           <div className="turn-info">
//             <p>Turn: <strong>{turn}</strong></p>
//             {gameOver && (
//               <p style={{ color: "#e11d48", fontWeight: "bold" }}>
//                 Game Over! {loser} loses for saying 13!
//               </p>
//             )}
//             {!gameOver && (
//               (mode === "player" ||
//                 (mode === "computer" && turn === "Player")) && (
//                 <div className="buttons-row">
//                   <button
//                     disabled={position >= 13 || gameOver}
//                     onClick={() => makeMove(1)}
//                   >
//                     +1
//                   </button>
//                   <button
//                     disabled={position >= 12 || gameOver}
//                     onClick={() => makeMove(2)}
//                   >
//                     +2
//                   </button>
//                 </div>
//               )
//             )}
//           </div>

//           <button onClick={resetGame} className="restart-btn">Restart Game</button>
//         </section>
//       </main>
//     </>
//   );
// }

// const styles = `
//   /* Main container fills viewport and applies original background gradients */
//   .main-container {
//     min-height: 100vh;
//     width: 100vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 1rem;
//     box-sizing: border-box;
//   }

//   .start-screen {
//     background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
//   }

//   .game-screen {
//     background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
//   }

//   /* Card styling */
//   .card {
//     background-color: white;
//     border-radius: 12px;
//     box-shadow: 0 6px 20px rgba(0,0,0,0.15);
//     padding: 2rem 2.5rem;
//     width: 100%;
//     max-width: 480px;
//     box-sizing: border-box;
//     text-align: center;
//     user-select: none;
//   }

//   /* Headings */
//   h1, h2 {
//     margin: 0 0 1.5rem;
//     color: #343a40;
//   }

//   h2 {
//     color: #3b0a45;
//   }

//   p {
//     margin: 0 0 1rem;
//     color: #495057;
//     font-size: 1.1rem;
//   }

//   /* Buttons shared */
//   button {
//     background-color: #6b46c1;
//     border: none;
//     border-radius: 8px;
//     color: white;
//     cursor: pointer;
//     font-weight: 600;
//     padding: 0.9rem 1.8rem;
//     font-size: 1.05rem;
//     transition: background-color 0.3s ease;
//     user-select: none;
//     min-width: 120px;
//   }

//   button:hover:not(:disabled) {
//     background-color: #553c9a;
//   }

//   button:disabled,
//   button[aria-disabled="true"] {
//     background-color: #a0aec0;
//     cursor: not-allowed;
//   }

//   /* Start screen buttons */
//   .start-screen button:nth-child(3) {
//     margin-bottom: 1rem;
//     background-color: #3b82f6;
//   }
//   .start-screen button:nth-child(4) {
//     background-color: #ef4444;
//   }
//   .start-screen button:nth-child(3):hover {
//     background-color: #2563eb;
//   }
//   .start-screen button:nth-child(4):hover {
//     background-color: #dc2626;
//   }

//   /* Number strip container */
//   .number-strip {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin-bottom: 1.5rem;
//     gap: 0.5rem;
//   }

//   /* Number cells */
//   .number-cell {
//     flex: 1 0 30px;
//     min-width: 28px;
//     margin: 0.2rem;
//     padding: 0.6rem 0;
//     border-radius: 6px;
//     background-color: #f8f9fa;
//     color: #212529;
//     font-weight: 500;
//     text-align: center;
//     box-shadow: inset 0 0 3px #ced4da;
//     user-select: none;
//   }

//   .number-cell.current {
//     background-color: #d6336c;
//     color: white;
//     font-weight: 700;
//     box-shadow: 0 0 8px 2px rgba(214, 51, 108, 0.6);
//   }

//   /* Current position display */
//   .current-position-container p {
//     color: #5a2a6a;
//     font-size: 1.15rem;
//     margin-bottom: 0.3rem;
//   }

//   .current-position {
//     font-size: 2.5rem;
//     font-weight: bold;
//     color: #d6336c;
//     margin-bottom: 1.8rem;
//     user-select: none;
//   }

//   /* Turn info */
//   .turn-info p {
//     font-size: 1.15rem;
//     color: #4b2964;
//     margin-bottom: 1rem;
//   }

//   /* Buttons row */
//   .buttons-row {
//     display: flex;
//     gap: 1rem;
//     justify-content: center;
//     flex-wrap: wrap;
//   }

//   .buttons-row button {
//     flex: 1 1 120px;
//   }

//   /* Restart button distinct color */
//   .restart-btn {
//     background-color: #db2777;
//     margin-top: 1rem;
//   }

//   .restart-btn:hover {
//     background-color: #be185d;
//   }

//   /* Responsive adjustments */
//   @media (max-width: 480px) {
//     .card {
//       padding: 1.5rem 1.5rem;
//       max-width: 100%;
//     }

//     .current-position {
//       font-size: 2rem;
//     }

//     button {
//       font-size: 1rem;
//       padding: 0.75rem 1.2rem;
//       min-width: 100px;
//     }

//     .number-cell {
//       flex: 1 0 24px;
//       min-width: 22px;
//       font-size: 0.9rem;
//       padding: 0.45rem 0;
//     }
//   }

//   @media (min-width: 768px) {
//     .card {
//       max-width: 560px;
//       padding: 2.5rem 3rem;
//     }

//     .current-position {
//       font-size: 3rem;
//     }

//     button {
//       font-size: 1.15rem;
//       padding: 1rem 2rem;
//       min-width: 140px;
//     }

//     .number-cell {
//       flex: 1 0 36px;
//       min-width: 32px;
//       font-size: 1.1rem;
//       padding: 0.7rem 0;
//     }
//   }

//   @media (min-width: 1200px) {
//     .card {
//       max-width: 680px;
//         padding: 3rem 4rem;
// }

// .current-position {
//   font-size: 3.8rem;
// }

// button {
//   font-size: 1.25rem;
//   padding: 1.1rem 2.4rem;
//   min-width: 160px;
// }

// .number-cell {
//   flex: 1 0 40px;
//   min-width: 38px;
//   font-size: 1.2rem;
//   padding: 0.8rem 0;
// }
// }`;

import React, { useState, useEffect } from "react";
void React;

const losingPositions = [2, 3, 6, 7, 10, 11, 13];
const isLosingPosition = (pos: number) => losingPositions.includes(pos);

export default function App() {
  const [position, setPosition] = useState(0);
  const [mode, setMode] = useState<"player" | "computer" | null>(null);
  const [turn, setTurn] = useState("Player");
  const [gameOver, setGameOver] = useState(false);
  const [loser, setLoser] = useState("");

  // Computer move in "Vs Computer" mode
  useEffect(() => {
    if (mode === "computer" && turn === "Computer" && !gameOver) {
      const timeout = setTimeout(() => {
        computerMove(position);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [turn, position, gameOver, mode]);

  const resetGame = () => {
    setPosition(0);
    setMode(null);
    setTurn("Player");
    setGameOver(false);
    setLoser("");
  };

  const makeMove = (step: number) => {
    if (gameOver) return;

    const newPosition = position + step;
    if (newPosition > 13) return;

    setPosition(newPosition);

    if (newPosition === 13) {
      setGameOver(true);
      setLoser(turn);
      return;
    }

    // Toggle turn based on mode
    if (mode === "player") {
      setTurn(turn === "Player 1" ? "Player 2" : "Player 1");
    } else if (mode === "computer") {
      setTurn(turn === "Player" ? "Computer" : "Player");
    }
  };

  const computerMove = (currentPos: number) => {
    if (currentPos >= 13 || gameOver) return;

    let move = 1;
    for (let i = 2; i >= 1; i--) {
      const nextPos = currentPos + i;
      if (nextPos <= 13 && !isLosingPosition(nextPos)) {
        move = i;
        break;
      }
    }

    makeMove(move);
  };

  const renderNumberStrip = () => {
    const numbers = [];
    for (let i = 0; i <= 13; i++) {
      const isCurrent = i === position;
      numbers.push(
        <div
          key={i}
          className={`number-cell ${isCurrent ? "current" : ""}`}
          aria-current={isCurrent ? "true" : undefined}
        >
          {i}
        </div>
      );
    }
    return <div className="number-strip">{numbers}</div>;
  };

  if (!mode) {
    return (
      <>
        <style>{styles}</style>
        <main className="main-container start-screen">
          <section className="card" aria-label="Game Mode Selection">
            <h1>Don't Say 13!</h1>
            <p>Select a game mode:</p>
            <button onClick={() => { setMode("player"); setTurn("Player 1"); }}>
              Two Player
            </button>
            <button onClick={() => { setMode("computer"); setTurn("Player"); }}>
              Vs Computer
            </button>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <main className="main-container game-screen">
        <section className="card game-card">
          <h2>Don't Say 13!</h2>
          <div className="current-position-container">
            <p>Current Position:</p>
            <div className="current-position">{position}</div>
          </div>

          <div className="turn-info">
            <p>Turn: <strong>{turn}</strong></p>

            {gameOver ? (
              <p style={{ color: "#e11d48", fontWeight: "bold" }}>
                Game Over! {loser} loses for saying 13!
              </p>
            ) : (
              (mode === "player" ||
                (mode === "computer" && turn === "Player")) && (
                <div className="buttons-row">
                  <button
                    disabled={position >= 13}
                    onClick={() => makeMove(1)}
                  >
                    +1
                  </button>
                  <button
                    disabled={position >= 12}
                    onClick={() => makeMove(2)}
                  >
                    +2
                  </button>
                </div>
              )
            )}
          </div>

          <button onClick={resetGame} className="restart-btn">Restart Game</button>
                    {renderNumberStrip()}

        </section>
      </main>
    </>
  );
}

const styles = `/* paste your existing CSS styles here */`;

const styles = `
  /* Main container fills viewport and applies original background gradients */
  .main-container {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
  }

  .start-screen {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  }

  .game-screen {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  }

  /* Card styling */
  .card {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    padding: 2rem 2.5rem;
    width: 100%;
    max-width: 480px;
    box-sizing: border-box;
    text-align: center;
    user-select: none;
  }

  /* Headings */
  h1, h2 {
    margin: 0 0 1.5rem;
    color: #343a40;
  }

  h2 {
    color: #3b0a45;
  }

  p {
    margin: 0 0 1rem;
    color: #495057;
    font-size: 1.1rem;
  }

  /* Buttons shared */
  button {
    background-color: #6b46c1;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    padding: 0.9rem 1.8rem;
    font-size: 1.05rem;
    transition: background-color 0.3s ease;
    user-select: none;
    min-width: 120px;
  }

  button:hover:not(:disabled) {
    background-color: #553c9a;
  }

  button:disabled,
  button[aria-disabled="true"] {
    background-color: #a0aec0;
    cursor: not-allowed;
  }

  /* Start screen buttons */
  .start-screen button:nth-child(3) {
    margin-bottom: 1rem;
    background-color: #3b82f6;
  }
  .start-screen button:nth-child(4) {
    background-color: #ef4444;
  }
  .start-screen button:nth-child(3):hover {
    background-color: #2563eb;
  }
  .start-screen button:nth-child(4):hover {
    background-color: #dc2626;
  }

  /* Number strip container */
  .number-strip {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1.5rem;
    gap: 0.5rem;
  }

  /* Number cells */
  .number-cell {
    flex: 1 0 30px;
    min-width: 28px;
    margin: 0.2rem;
    padding: 0.6rem 0;
    border-radius: 6px;
    background-color: #f8f9fa;
    color: #212529;
    font-weight: 500;
    text-align: center;
    box-shadow: inset 0 0 3px #ced4da;
    user-select: none;
  }

  .number-cell.current {
    background-color: #d6336c;
    color: white;
    font-weight: 700;
    box-shadow: 0 0 8px 2px rgba(214, 51, 108, 0.6);
  }

  /* Current position display */
  .current-position-container p {
    color: #5a2a6a;
    font-size: 1.15rem;
    margin-bottom: 0.3rem;
  }

  .current-position {
    font-size: 2.5rem;
    font-weight: bold;
    color: #d6336c;
    margin-bottom: 1.8rem;
    user-select: none;
  }

  /* Turn info */
  .turn-info p {
    font-size: 1.15rem;
    color: #4b2964;
    margin-bottom: 1rem;
  }

  /* Buttons row */
  .buttons-row {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .buttons-row button {
    flex: 1 1 120px;
  }

  /* Restart button distinct color */
  .restart-btn {
    background-color: #db2777;
    margin-top: 1rem;
  }

  .restart-btn:hover {
    background-color: #be185d;
  }

  /* Responsive adjustments */
  @media (max-width: 480px) {
    .card {
      padding: 1.5rem 1.5rem;
      max-width: 100%;
    }

    .current-position {
      font-size: 2rem;
    }

    button {
      font-size: 1rem;
      padding: 0.75rem 1.2rem;
      min-width: 100px;
    }

    .number-cell {
      flex: 1 0 24px;
      min-width: 22px;
      font-size: 0.9rem;
      padding: 0.45rem 0;
    }
  }

  @media (min-width: 768px) {
    .card {
      max-width: 560px;
      padding: 2.5rem 3rem;
    }

    .current-position {
      font-size: 3rem;
    }

    button {
      font-size: 1.15rem;
      padding: 1rem 2rem;
      min-width: 140px;
    }

    .number-cell {
      flex: 1 0 36px;
      min-width: 32px;
      font-size: 1.1rem;
      padding: 0.7rem 0;
    }
  }

  @media (min-width: 1200px) {
    .card {
      max-width: 680px;
        padding: 3rem 4rem;
}

.current-position {
  font-size: 3.8rem;
}

button {
  font-size: 1.25rem;
  padding: 1.1rem 2.4rem;
  min-width: 160px;
}

.number-cell {
  flex: 1 0 40px;
  min-width: 38px;
  font-size: 1.2rem;
  padding: 0.8rem 0;
}
}`;
