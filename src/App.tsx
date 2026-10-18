import {Saludo} from './saludo';
import { Tarjeta } from './tajeta';
export default function App() {
  return (
    <main className="App">
      <Saludo nombre="Juan" />

      <section className="equipo">
        <Tarjeta nombre="Juan" carrera="Ingeniería" semestre={3} />
        <Tarjeta nombre="María" carrera="Medicina" semestre={2} />
        <Tarjeta nombre="Pedro" carrera="Derecho" semestre={4} />
      </section>
    </main>
  );
}
