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
  
  