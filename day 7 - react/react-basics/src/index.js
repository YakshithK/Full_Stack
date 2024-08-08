import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

// const element = React.createElement(
//  'h1',
//  { onClick: () => {
//     root.render(React.createElement('h1', null, 'you clicked'))
//  } },
//  'Hello World'
// )

// const rootElement = document.querySelector('#root')

// const h1Element = document.createElement('h1')
// h1Element.textContent = 'Hello World!'
// h1Element.onclick = function(e) {
//   console.log('Clicked')
// }

// rootElement.appendChild(h1Element)

// const element = (
// <h1 onClick={function(e) {console.log('Clicked')}}>Hello World!</h1>
// )

// const element = React.createElement(
//   'div',
//   null,
//   React.createElement('h1', null, 'A heading'), 
//   React.createElement('p', null, 'A paragraph')
// );

// const element = (
//   <div>
//     <h1 style={{ backgroundColor: 'blue', width: 30 }}>A heading</h1>
//     <p>A paragraph</p>
//   </div>
// )

// const element = (
//   <h1 onClick={() => { root.render(<h1>New Content!</h1>) }}>Hello World!</h1>
// )

// function Heading() {
//   const [text, setText] = useState('Hello World!')
//   return (
//     <h1 onClick={() => { setText('useState() in action.') }}>{text}</h1>
//   )
// }

function App() {
  const [button, setButton] = useState('Show')
  const [paragraph, setParagraph] = useState('none')

  function toggleVisibility() {
    setButton(button === 'Show' ? 'Hide': 'Show');
    setParagraph(paragraph === 'none' ? 'block': 'none')
  }

  return (
    <div>
    <button onClick={toggleVisibility}>{button}</button>
    <p style={{ display: paragraph }}>This is some text</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)


