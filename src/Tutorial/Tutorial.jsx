import React from 'react';


const MyArray = ['apple', 'banana', 'orange'];

const MyList = MyArray.map((item) => <p>{item}</p>)


console.log(MyList);


export default MyList;