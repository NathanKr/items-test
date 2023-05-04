import "./App.css";
import ItemsView from "./ItemsView";
import { useRef, useState } from "react";

function App() {
  const minInputRef1 = useRef();
  const maxInputRef = useRef();
  const [arItemsFilter, setArItemsFilter] = useState([]);

  const arItems = [
    { id: 1, name: "item1", price: 33 },
    { id: 2, name: "item2", price: 123 },
    { id: 3, name: "item3", price: 22 },
    { id: 4, name: "item4", price: 55 },
  ];


  return (
    <>
      <label htmlFor="">priceMin</label>
      <input ref={minInputRef1} type="number" />
      <br />
      <label htmlFor="">priceMax</label>
      <input ref={maxInputRef} type="number" />
      <br />
      <button
        onClick={() => {
          const priceMin = minInputRef1.current.value;
          const priceMax = maxInputRef.current.value;
          const filteredItems = arItems.filter((it) => it.price >= priceMin && it.price <= priceMax);
          setArItemsFilter(filteredItems);
        }}
      >
        Filter
      </button>
      <ItemsView items={arItemsFilter} />
    </>
  );
}

export default App;
