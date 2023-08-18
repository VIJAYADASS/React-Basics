
// create the const keyword and set the variable is data
const data = [            
    // inside the 2 obj data each element is used to the property (title)   
    {id : "Number 1", title : "car"}, //ele1
    {id : "Number 2", title : "bus"},  //ele2
];

//  above Obj array, create the one new obj array  => choose the property which means title.

const upperData = data.map((el) => {
            // above the line create the const and set the var upperData => already created the data..
            //.. obj array var added the new array and also access the map method near 
            //the callback fun=> use any words (el) create the callbck fun inside the (el= above the data var each ele)
return el.title.toUpperCase();
    // element.I need specific property which means title after that str is there all are  
    //lowercase. i changed the uppercase to right so, .touppercase(); 
})

console.log(upperData);  //print  the output

// got the output and finally we can create the from one array data  to the new array data can be changed
// using the map method.

