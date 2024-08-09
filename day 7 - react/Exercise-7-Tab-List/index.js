import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function TabList({
    labels,
    panels,
    selected: propSelected = 0
 }) {
    const [selected, setSelected] = useState(propSelected);
 
    return (
       <section className="tablist">
          <div>
             {labels.map((label, i) => (
                <button
                   key={i}
                   className={'tablist_label' + (selected === i ? ' tablist_label--sel' : '')}
                   onClick={() => setSelected(i)}
                >{label}</button>
             ))}
          </div>
          <main>
             {panels[selected]}
          </main>
       </section>
    );
}
  
 function App() {
    return (
       <TabList
          labels={['Courses', 'About', 'Contact']}
          panels={[
             <h1>Courses</h1>,
             <h1>About</h1>,
             <h1>Contact</h1>
          ]}
          selected={0}
       />
    );
 }
 
 ReactDOM.createRoot(document.querySelector('#root')).render(
    <App/>
 );