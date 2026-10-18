interface SaludoProps {
    nombre: string;
}
export const Saludo: React.FC<SaludoProps> = ({ nombre }) => {
    return(
        <div className="saludo">
            <p id="saludo">Hola, {nombre}!</p>
            <p id="descripcion">Mi primera app con react!</p>
        </div>
    )
}