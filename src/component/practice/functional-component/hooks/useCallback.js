import React, {useCallback} from 'react';

function AnimalCallback() {
    const [animal, setAnimal] = React.useState("");
    const [animals, setAnimals] = React.useState(["Lion", "Tiger", "Zebra"]);
  
    function handleChangeInput(event) {
      setAnimal(event.target.value);
    }

    function handleAddAnimal() {
      setAnimals(animals.concat(animal));
    }

    const handleRemoveAnimal = useCallback(animal => {
      setAnimals(animals.filter((p) => p !== animal));
    }, [animals]);


    // const handleRemoveAnimal = () => {
    //   setAnimals(animals.filter((p) => p !== animal));
    // };
  
    return (
      <>
        <input onChange={handleChangeInput} />
        <button onClick={handleAddAnimal}>Add Animal</button>
        <AnimalList animals={animals} handleRemoveAnimal={handleRemoveAnimal} />
      </>
    );
  }
  
  function AnimalList({ animals, handleRemoveAnimal }) {
    console.log('Animal component re-rendered');
    return (
      <ul>
        {animals.map((animal) => (
          <li key={animal} onClick={() => handleRemoveAnimal(animal)}>
            {animal}
          </li>
        ))}
      </ul>
    );
  }



  export default AnimalCallback;