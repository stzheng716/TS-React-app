import React, {useState} from "react";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item"
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 as getId } from "uuid";

function App() {

  const [items, setItems] = useState<Item[]>([])
  const addItem = (product: string, quantity: number) => {
    setItems([...items, {id: getId(), product, quantity: quantity}])
  }

  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken Breast", quantity: 2 },
  // ];

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm addItem={addItem}/>
    </div>
  );
}

export default App;
