import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useBreedList from "./useBreed";
import Results from "./Results";
import changeLocation from "./actionCreators/changeLocation";
import changeAnimal from "./actionCreators/changeAnimal";
import changeBreed from "./actionCreators/changeBreed";
import changeTheme from "./actionCreators/changeTheme";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const location = useSelector((state) => state.location);
  const animal = useSelector((state) => state.animal);
  const breed = useSelector((state) => state.breed);
  const theme = useSelector((state) => state.theme);

  // or use - BUT beware of the size of state
  // const { location, animal, breed, theme } = state;

  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const dispatch = useDispatch();

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();

    setPets(json.pets);
  }

  function handleAnimalChange(e) {
    dispatch(changeBreed(""));
    dispatch(changeAnimal(e.target.value));
  }

  useEffect(
    () => {
      requestPets();
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
    // [] - call the API once
    // [animal] - will call the API every time animal's value changes
    // if there's no parameter give, it will do infinite calls
  );

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label className="search-label" htmlFor="location">
          Location
          <input
            className="search-control"
            id="location"
            onChange={(e) => dispatch(changeLocation(e.target.value))}
            value={location}
            placeholder="Location"
          />
        </label>
        <label className="search-label" htmlFor="animal">
          Animals
          <select
            className="search-control"
            id="animal"
            value={animal}
            onChange={handleAnimalChange}
            onBlur={handleAnimalChange}
          >
            <option />
            {ANIMALS.map((animal, index) => (
              <option value={animal} key={index}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label className="search-label" htmlFor="breed">
          Breeds
          <select
            className="search-control disabled:opacity-50"
            id="breed"
            disabled={!breeds.length}
            value={breed}
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) => dispatch(changeBreed(e.target.value))}
          >
            <option />
            {breeds.map((breed, index) => (
              <option value={breed} key={index}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label className="search-label" htmlFor="theme">
          Theme
          <select
            className="search-control"
            value={theme}
            onChange={(e) => dispatch(changeTheme(e.target.value))}
            onBlur={(e) => dispatch(changeTheme(e.target.value))}
          >
            <option value="darkblue">Dark Blue</option>
            <option value="peru">Peru</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button
          className="rounded px-6 py-2 text-white hover:opacity-50 border-none"
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
