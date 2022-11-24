export function Integrantes () {
    let integrantes = [
        {
            nombre: "Roberto Musso",
            rol: "Vocalista",
            edad: "59 años",
            fotografia: "https://firebasestorage.googleapis.com/v0/b/spoticesde.appspot.com/o/RobertoMusso.jpg?alt=media&token=f13234ea-b4dc-4700-8a41-6b999075f4ee"
        },
        {
            nombre: "Santiago Tavella",
            rol: "Bajo Electrico",
            edad: "61 años",
            fotografia: "https://firebasestorage.googleapis.com/v0/b/spoticesde.appspot.com/o/SantiTavella.jpg?alt=media&token=475a8c1b-7773-412c-8de7-abedfaabf948"
        },
        {
            nombre: "Álvaro «Alvin» Pintos",
            rol: "Baterista",
            edad: "58 años",
            fotografia: "https://firebasestorage.googleapis.com/v0/b/spoticesde.appspot.com/o/Alvin.jpg?alt=media&token=c0bc7c01-c813-45e8-a248-effc7e797d0a"
        },
        {
            nombre: "Gustavo Antuña",
            rol: "Guitarrista",
            edad: "52 años",
            fotografia: "https://firebasestorage.googleapis.com/v0/b/spoticesde.appspot.com/o/GustavoAntu%C3%B1a.jpg?alt=media&token=bbed35ea-0d44-4b75-9b05-467e898fa94a"
        },
        {
            nombre: "Santiago Marrero",
            rol: "Pianista",
            edad: "36 años",
            fotografia: "https://firebasestorage.googleapis.com/v0/b/spoticesde.appspot.com/o/santiago-marrero.jpg?alt=media&token=d01b570d-9e9a-4b8d-81c6-201b829d6038"
        }
    ]


    return (
        <div className="row row-cols-1 row-cols-md-3 g-2 mt-5 p-5">
            {
                integrantes.map(function (integrante) {
                    return(
                        <>
                            <div className="col mt-3">
                                <div className="card h-100">
                                    <img src={ integrante.fotografia } alt={ integrante.nombre } className="img-fluid w-100" />
                                    <div className="p-2">
                                        <h4>{ integrante.nombre }</h4>
                                        <p><strong>Edad:</strong> { integrante.edad }</p>
                                        <p><strong>Rol:</strong> { integrante.rol }</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}