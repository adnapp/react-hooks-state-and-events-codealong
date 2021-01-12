import React, {useState} from "react";
import { randomNumber } from "../utils";

function NumberList() {

  const [numbers, setNumbers] = useState([1,2,3])
  const [filterBy, setFilterBy] = useState("All");

  
    let numbersToDisplay = numbers;
    if (filterBy === "Even"){
      numbersToDisplay = numbers.filter((num) => num %2 === 0);
    } else if (filterBy ==="Odd"){
      numbersToDisplay = numbers.filter((num) => num %2 !== 0)
    }
  const numbersList = numbersToDisplay.map((num) => (
      <li key={num} onClick={() => handleLiClick(num)}>
        {num}
      </li>)
  )

  function handleAddNumber() {
    const newNumber = randomNumber();
    const newNumbersArray = [...numbers, newNumber]
    setNumbers(newNumbersArray)
  }

  function handleLiClick(toRemove) {
    const newNumberArray = numbers.map(num =>(
      num === toRemove ? num + 100 : num ));
    setNumbers(newNumberArray)
  }

  function handleFilterChange(event){
    setFilterBy(event.target.value)
  }

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Even">Even</option>
        <option value="Odd">Odd</option>
      </select>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>{numbersList}</ul>
    </div>
  );
}

export default NumberList;
