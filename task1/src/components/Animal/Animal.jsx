const Animal = ({img,name,breed,year}) => {
    return (
      <>
        <img id="img" src={img} alt="" />
        <div id="TitleDiv">
          <p>Name:</p>
          <p>{name}</p>
        </div>
  
        <div id="TitleDiv">
          <p>Breed:</p>
          <p>{breed}</p>
        </div>

        <div id="TitleDiv">
          <p>Year:</p>
          <p>{year}</p>
        </div>

      </>
    );
  };
  
  
  export default Animal;