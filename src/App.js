import Testimonio from './components/testimonio.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen los Estudiantes de CEUTEC</h1>
   <Testimonio 
   imagen = ''
   nombre='Emma Bostian'
   pais='Suecia'
   cargo='Ingeniera de Software'
   empresa='Spotify'
   testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>
   </div>
    </div>
  );
}

export default App;
