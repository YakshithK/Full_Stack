function App() {
    const [shown, setShown] = useState(false)
  
    function toggleVisibility() {
      setShown(!shown);
    }
  
    return (
      <div>
      <button onClick={toggleVisibility}>{shown ? 'Hide': 'Show'}</button>
      <p style={{ display: shown ? 'block':'none' }}>This is some text</p>
      </div>
    )
 }
 export default App;