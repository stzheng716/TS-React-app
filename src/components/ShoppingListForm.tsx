import React, { useRef } from "react";


interface ShoppingListFormProps {
  addItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ addItem }: ShoppingListFormProps): JSX.Element {
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);
    
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = productInputRef.current!.value;
    const quantity = quantityInputRef.current!.value;
    addItem(newProduct, parseInt(quantity));
    productInputRef.current!.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input type="number" min={0} placeholder="Quantity" ref={quantityInputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingListForm;
