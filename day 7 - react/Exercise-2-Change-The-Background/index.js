function BackgroundChanger() {
    const [color, setColor] = useState('#eee')
    return (
    <div onMouseLeave={() => { setColor('#eee') }} onMouseEnter={() => { setColor('yellow') }} style={{ backgroundColor: color , height: 200 }}></div>
    )
  }
  
  const root = ReactDOM.createRoot(document.querySelector('#root'))
  root.render(<BackgroundChanger/>)
  
  