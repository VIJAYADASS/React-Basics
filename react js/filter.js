// create the const keyword and set the variable is play
const play = [            
    // inside the 6 obj data each element is used to the property (title)   
    {id : "  1", title : " cricket"}, //ele1
    {id : "  2", title : "volley ball"}, 
    {id : " 3", title : " football"},
    {id : " 4", title : " hockey"},
    {id : "  5", title : " badminton"},
    {id : " 6", title : "table tennis"}, //ele2
];

//  above Obj array, create the one new obj array  => totally 6 obj is there i want to all the 
//  odds and even the get obj 

const filteredData = play.filter((obj) => {
    // above the line set the var in filtered Data after that already create the var play
    // add the new array and access the  filter method
    // then callbck fun inside the i can choose the (obj is the keyword)
 return obj.id % 2 == 0;
   // already create the keyword is used in obj. id means all object i get even numbers only
   // so add the boolean method use the modules [2] even no. 
})

// print 
console.log(filteredData);
