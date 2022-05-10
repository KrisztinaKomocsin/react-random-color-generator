import randomColor from 'randomcolor';
import { useState } from 'react';

export default function Div() {
  const [color, setColor] = useState(randomColor());
  return (
    <>
      <button
        onClick={() => setColor(randomColor())}
        style={{
          width: 100,
          height: 30,
          marginBottom: 20,
          marginTop: 30,
          borderRadius: 10,
        }}
      >
        Generate
      </button>

      <div
        style={{
          backgroundColor: color,
          color: 'white',
          height: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      <h1>Click on the button! Creat random colors!</h1>
    </>
  );
}
