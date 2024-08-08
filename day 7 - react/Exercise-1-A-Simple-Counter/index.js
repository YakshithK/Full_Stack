function Counter() {
    const [num, setNum] = useState(0)
    return (
      <div>
      <h1>{num}</h1>
      <button onClick={() => { setNum(num+1) }}>Increase</button>
      <button onClick={() => {setNum(0) }}>Reset</button>
      </div>
    )
  }
  
  const root = ReactDOM.createRoot(document.querySelector('#root'))
  root.render(<Counter/>)
  
  