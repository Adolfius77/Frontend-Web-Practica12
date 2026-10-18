interface TarjetaProps {
    nombre: string;
    carrera: string;
    semestre: number;
}

export function Tarjeta({ nombre, carrera, semestre }: TarjetaProps) {
    const iniciales = nombre.split(' ').map((n) => n[0]).join('');

    return (
        <article className="tarjeta-container">   
        <div className="tarjeta">
            <h2 className="tarjeta__avatar">{iniciales}</h2>
            <p className="tarjeta__nombre">Nombre: {nombre}</p>
            <p className="tarjeta__carrera">Carrera: {carrera}</p>
            <p className="tarjeta__semestre">Semestre: {semestre}</p>
        </div>
        </article>
    );
}