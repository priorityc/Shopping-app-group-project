import './App.css';
import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import nextId from 'react-id-generator';




function App() {
  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState('');
 
//event plus alert repeated items
  const addButton = (e) => {
    e.preventDefault();
    if (items.includes(inputItem)) {
      alert(`${inputItem} is already on the list`)
    }else {
    const newItems = [...items, inputItem]
    setItems(newItems)
    }
    setInputItem('')
  
  }
    
   //delate the shopping item added 
    const deleteItems =(index)=> {
      let tempArreyItem=items[index];
      setItems(items.filter((t)=> t!=tempArreyItem))
     
    }
    //count the shopping list items
    let newArrey=(items);
    const countItems =()=> {
    let result=newArrey.length;
    alert(`Your shopping list contains ${result} items`);
   
  }




return (
    <div className="App">
      <header className="App-header">
        Shopping List
      </header>
      <form>
        <label>
      
        <input value={inputItem} onChange={(event) => setInputItem(event.target.value)} type="text" name="name" placeholder='New item' />
        </label>
        <input type="submit" value="Add" className='addButton' onClick={addButton} />
      </form>
      <div className='list'>
      <table>
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
      {items.map((n,i)=>(
  <tr key={nextId()}>
  <td>{i + 1}.</td>
  <td>{n}</td>
  <td>
    <i
      className="pi pi-trash taskDelete"
     onClick={() => deleteItems(i)}
    />
  </td>
</tr>
))}
   </tbody>
    </table>
    <br/>
    <button type='button'  onClick={() => countItems()}>Count it!</button>
   </div>
    </div>
        );
      }


export default App;
