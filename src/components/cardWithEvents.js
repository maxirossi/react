import './styles.css';
//import imagenTest from '../images/imagen.jpg';

function Card(props) {

    const loveMe = (e) => {
      const elementClass = e.target.className;
      if (elementClass.indexOf('loveme') == -1){
        e.target.classList.add('loveme');
      }else{
        e.target.classList.remove('loveme');
      }
  };

  const cambiarArojo = (e) => {
    e.target.classList.add('genero-rojo');
  };


    const searchArtistInfo = (e) => {
        const name = e.target.innerHTML;
        const googleUrl = 'https://www.google.com.ar/search?q=' + name;
        window.open(googleUrl);
    }

    return (
    <div className="album-container">
      <div className="album-contenido">
        <img height="100%" src={props.portada} alt="album cover" />
      </div>
      <div className="album-info">
        <h1 onClick={searchArtistInfo} className="album-titulo">{props.artista}</h1>
        <h3>{props.agrupacion}</h3>
        <p className="album-subtitulo">{props.titulo}</p>
        <p>({props.lanzamiento})</p>
        <div onClick={cambiarArojo} className="genero">{props.genero}</div>
        <div className="loveIcon">
        <i onClick={loveMe} className="far fa-smile"></i>
        </div>
      </div>
    </div>
    )
}

export default Card;

