const ToDo = ['Learn JavaScript', 'Read Story Book', 'Watch Documentary', 'Bake Cupcakes']
 
 function GetItem({item}) {

   const [isShown, setIsShown] = useState(false)
   
    return (
       <ul>
            <li>
            {isShown ? <s>{item}</s>: item}
            {!isShown && <button onClick={() => setIsShown(true)}>Done</button>}
            </li>
       </ul>
    );
  }

function ItemList({items}) {
   return (
      <ul>
         {items.map((items, i) => (
            <GetItem item={items}/>
         ))}
      </ul>
   )
}

function App() {
   return (
      <ItemList items={[
         'Learn JavaScript',
         'Read story book',
         'Watch documentary',
         'Bake cupcakes',
      ]}/>
   )
}

ReactDOM.createRoot(document.querySelector('#root')).render(
    <App/>
);