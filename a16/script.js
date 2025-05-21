const items = [
  { id: 1, name: "apple", price: 50 },
  { id: 2, name: "banana", price: 30 },
  { id: 3, name: "orange", price: 80 }
];

const updateItems = items.map(item => {
  let qty = 0;
  if (item.id === 1) {
    qty = 7;
  } else if (item.id === 3) {
    qty = 5;
  }

  return {
    ...item,
    price: item.price + 5,
    qty,
    total: (item.price + 5) * qty,
    
  };
});

console.log(updateItems);