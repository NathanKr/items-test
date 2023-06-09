import React from "react";

// -- array of items [{id , name , price}]
const ItemsView = (props) => {
  console.log(props.items);
  const elements = props.items.map((it, i) => (
    <li key={i}>
      {it.id} , {it.name} , {it.price}
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default ItemsView;
