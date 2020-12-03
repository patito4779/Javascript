const students = [
    {name: "patrick", age: 26},
    {name: "lucky", age: 27},
    {name: "tochukwu", age: 30}
    
  ]
  
  
  const findItem = students.find((student) => {
    return student.name === "lucky"
  });
  
  console.log(findItem)