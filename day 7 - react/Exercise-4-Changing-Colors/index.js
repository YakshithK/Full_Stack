import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.createRoot(document.querySelector('#root')).render(
   <App/>
);

ToDo = ['Learn JavaScript', 'Read Story Book', 'Watch Documentary', 'Bake Cupcakes']

function App() {
   return (
      <ul>
         {ToDo.map((item, i) => (
            <li key={i}>{item}<button></button></li>
         ))}
      </ul>
   );
 }
