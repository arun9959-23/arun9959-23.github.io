
/*function add(...values){
    const su = values.reduce((a,b) => a + b);
    console.log(su);
}
add(1,2,3,4,5); */


const products = [
  { id: 1, name: "Product 1", price: 34,qty:3, status:"pending" },
  { id: 2, name: "Product 2", price: 56,qty:5, status:"pending" },
  { id: 3, name: "Product 3", price: 40,qty:2, status:"pending" },
];

const cart= {1:4,3:5}

const total = products.reduce((sum,value)=>{
    return sum + value.price * (cart[value.id] ?? 0);
});
console.log(`Total is: ${total}`);
