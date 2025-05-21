const items=[
    {name:"apple",price:50,status:"pending"},
    {name:"banana",price:30,status:"pending"},
    {name:"orange",price:80,status:"pending"},

];

const updateItems=items.map((item)=>({
    ...item,price:item.price+5,status:"complete"

}))
console.log(updateItems);