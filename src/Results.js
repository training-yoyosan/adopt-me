import Pet from "./Pet";

const Results = ({ pets }) => {
  {
    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {!pets.length ? (
          <h2>No pets found</h2>
        ) : (
          pets.map((pet) => (
            <Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              key={pet.id}
              id={pet.id}
              location={`${pet.city}, ${pet.state}`}
              images={pet.images}
            />
          ))
        )}
      </div>
    );
  }
};

export default Results;
