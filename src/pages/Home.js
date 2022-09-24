import '../assets/css/Home.css';

export default function Home() {
  return (
    <>
        <div className="portada">
          <h1>PIEDRA PAPEL O TIJERAS</h1>
          <img src="./img/PPT.gif" alt="" />
          <div className="contenedor-btn">
            <a class="btn btn-danger" href="/jugar">¡A jugar!</a>
            <a class="btn btn-info" href="/info">¿Quiénes somos?</a>
          </div>
        </div>
    </>
  );
}
