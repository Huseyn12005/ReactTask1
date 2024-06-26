import "./style.css";
const FavoriteFilm = ({ img, Film, year, rejissor, studio }) => {
    return (
      <>
        <img id="img" src={img} alt="" />
        <div id="TitleDiv">
          <p>Film:</p>
          <p>{Film}</p>
        </div>
  
        <div id="TitleDiv">
          <p>Release Year:</p>
          <p>{year}</p>
        </div>
  
        <div id="TitleDiv">
          <p>Rejissor:</p>
          <p>{rejissor}</p>
        </div>
  
        <div id="TitleDiv">
          <p>Studio:</p>
          <p>{studio}</p>
        </div>
      </>
    );
  };
  
  export default FavoriteFilm;