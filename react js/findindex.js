const index = [
    {id : "Number 1", title : "car"}, //ele1
    {id : "Number 2", title : "bus"},  //ele2
    {id : "Number 3", title : "a"}, //ele1
    {id : "Number 4", title : "b"},  //ele2
];

const itemindex= index.findIndex((el)=>{
    return el.title == "car";

})

console.log(itemindex);