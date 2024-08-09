import React, { useState } from 'react';

function App() {
   const [backgroundColor, setBackgroundColor] = useState();

   function changeBackgroundColor() {
      var rgb = [
         Math.floor(Math.random() * 256),
         Math.floor(Math.random() * 256),
         Math.floor(Math.random() * 256)
      ];
      var color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      setBackgroundColor(color);
   }

   return (
      <div>
         <h1 style={{ textShadow: '2px 1px 5px white', backgroundColor }}>A heading</h1>
         <button onClick={changeBackgroundColor}>Change color</button>
      </div>
   );
 }

