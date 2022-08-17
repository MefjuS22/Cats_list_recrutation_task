import { Cat } from "./Cat";
import { useCats } from "./CatsContext";

export const CatList = () => {
  const { cats } = useCats();

  return (
    <>
      <h5>Ilość: {cats.length}</h5>
      {cats.map((singleCat) => {
        return (
          <Cat
            id={singleCat.id}
            key={singleCat.id}
            name={singleCat.name}
            description={singleCat.description}
            image={
              singleCat.image
                ? singleCat.image.url
                : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg"
            }
            isFriendly={singleCat.child_friendly}
          />
        );
      })}
    </>
  );
};
