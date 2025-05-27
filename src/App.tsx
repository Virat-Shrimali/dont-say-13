import React, { useState } from 'react';

const losingPositions = [2, 3, 6, 7, 10, 11, 13];

const isLosingPosition = (pos) => losingPositions.includes(pos);

export default function App() {
  const [position, setPosition] = useState(0);
  const [mode, setMode] = useState(null); // "player" | "computer"
  const [turn, setTurn] = useState('Player 1'); // or "Player 2" or "Player"/"Computer"
  const [log, setLog] = useState([]);

  const resetGame = () => {
    setPosition(0);
    setMode(null);
    setTurn('Player 1');
    setLog([]);
  };

  const makeMove = (step) => {
    const newPosition = position + step;
    const newLog = [...log, `${turn} moved to ${newPosition}`];
    setPosition(newPosition);
    setLog(newLog);

    if (newPosition === 13) {
      setLog((prev) => [...prev, `${turn} lost!`]);
      return;
    }

    if (mode === 'player') {
      setTurn(turn === 'Player 1' ? 'Player 2' : 'Player 1');
    } else if (mode === 'computer') {
      if (turn === 'Player') {
        setTurn('Computer');
        setTimeout(() => computerMove(newPosition), 800);
      } else {
        setTurn('Player');
      }
    }
  };

  const computerMove = (currentPos) => {
    if (currentPos >= 13) return;
    let move = 1;
    for (let i = 2; i >= 1; i--) {
      if (!isLosingPosition(currentPos + i) && currentPos + i <= 13) {
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
          style={{
            flex: 1,
            padding: 6,
            margin: 2,
            textAlign: 'center',
            backgroundColor: isCurrent ? '#ff69b4' : '#f0f0f0',
            borderRadius: 6,
            boxShadow: isCurrent
              ? '0 0 10px rgba(255, 105, 180, 0.6)'
              : 'inset 0 0 3px #ccc',
            fontWeight: isCurrent ? 'bold' : 'normal',
            color: isCurrent ? 'white' : '#333',
            fontSize: 14,
            position: 'relative',
            minWidth: 30,
          }}
        >
          {i}
        </div>
      );
    }
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          marginBottom: 20,
          maxWidth: '100%',
        }}
      >
        {numbers}
      </div>
    );
  };

  if (!mode) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
          background: 'linear-gradient(135deg, #fbc7a4, #f7dba0, #d4e6b5)',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: 20,
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            textAlign: 'center',
            width: '100%',
            maxWidth: 320,
          }}
        >
          <h1 style={{ fontSize: 24, color: '#4b0082', marginBottom: 16 }}>
            Don't Say 13!
          </h1>
          <p style={{ marginBottom: 12 }}>Choose a mode:</p>
          <button
            style={{
              width: '100%',
              marginBottom: 8,
              padding: 12,
              backgroundColor: '#4b0082',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
            onClick={() => {
              setMode('player');
              setTurn('Player 1');
            }}
          >
            Two Player
          </button>
          <button
            style={{
              width: '100%',
              padding: 12,
              backgroundColor: '#ff69b4',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
            onClick={() => {
              setMode('computer');
              setTurn('Player');
            }}
          >
            Vs Computer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f7dba0, #d4e6b5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <h2 style={{ color: '#4b0082', textAlign: 'center' }}>Don't Say 13!</h2>
      {renderNumberStrip()}

      <div
        style={{
          background: 'white',
          padding: 24,
          borderRadius: 10,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
          marginBottom: 16,
        }}
      >
        <h3 style={{ color: '#4b0082', marginBottom: 12 }}>
          Current Position: {position}
        </h3>
        <p style={{ fontSize: 18, color: '#333', marginBottom: 20 }}>
          {turn}'s turn
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <button
            disabled={position >= 13}
            onClick={() => makeMove(1)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4b0082',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              cursor: position >= 13 ? 'not-allowed' : 'pointer',
            }}
          >
            +1
          </button>
          <button
            disabled={position >= 12}
            onClick={() => makeMove(2)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4b0082',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              cursor: position >= 12 ? 'not-allowed' : 'pointer',
            }}
          >
            +2
          </button>
        </div>
      </div>

      <div
        style={{
          background: 'white',
          padding: 16,
          borderRadius: 8,
          boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: 400,
          height: 140,
          overflowY: 'auto',
          textAlign: 'left',
          fontSize: 14,
          color: '#555',
          marginBottom: 16,
          userSelect: 'text',
        }}
      >
        <h3 style={{ fontWeight: 'bold', marginBottom: 8, color: '#4b0082' }}>
          Game Log:
        </h3>
        {log.map((entry, idx) => (
          <div key={idx}>{entry}</div>
        ))}
      </div>

      <button
        onClick={resetGame}
        style={{
          padding: '10px 30px',
          backgroundColor: '#4b0082',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Restart Game
      </button>
    </div>
  );
}
