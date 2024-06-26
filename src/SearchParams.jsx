import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  // const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  // const [breed, setBreed] = useState("");
  const [requestParam, setRequestParam] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  // const [pets, setPets] = useState([]);

  const results = useQuery(["search", requestParam], fetchSearch);
  const pets = results?.data?.pets ?? [];

  // useEffect(() => {
  //   requestPets();
  // }, []);

  // async function requestPets() {
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   const json = await res.json();
  //   setPets(json.pets);
  // }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // requestPets();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setRequestParam(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            // onChange={(e) => setLocation(e.target.value)}
            id="location"
            // value={location}
            name="location"
            placeholder="Location "
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            // value={animal}
            name="animal"
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            // value={breed}`
            name="breed"
            // onChange={(e) => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
      {/* {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))} */}
    </div>
  );
};

export default SearchParams;
