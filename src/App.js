import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';

function App() {

  let peliculas = peliculasJson;
  return (
        <PageWrapper>
            <Pelicula titulo="oblivion" año="(2012)" calificacion="8.1" director="Joss whedon" actores="Robert Downey Jr., Chris Evans, Chris Hemsworth" fecha="1 May 2015" duracion="2h 21min" img="images/uploads/mv1.jpg">
                  Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
            </Pelicula>
            {peliculas.map(pelicula =>
              <Pelicula titulo={pelicula.titulo} año={pelicula.a} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
                    {pelicula.descripcion}
              </Pelicula>

            )}


                

        </PageWrapper>
    
  );
}

export default App;
