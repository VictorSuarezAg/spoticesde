export async function servicioCanciones () {
    const URI = "https://api.spotify.com/v1/artists/13JJKrUewC1CJYmIDXQNoH/top-tracks?market=US"
    const TOKEN = "Bearer BQC8xIiFNmKgII0ckPQt3knuD8e7zaoGDfk9RAbmcco0fpnqa85ywQ1rOz8yMQqBgsrh18lRWaLv_Ml5kqC4WmLkFcJicEsQQjrER344o6CaFjvsaaK7A9dD48VQkmWNqlCQMsR_ygxQ2G2JYT9iNBQ-uxFjmB3qWm_7x0lRGIeFZTP4waVYCjzfRrZeW5qg1LE"
    const PETICION = {
        method: "GET",
        headers: {Authorization: TOKEN},
    }

    let respuesta = await fetch(URI, PETICION)

    let canciones =  await respuesta.json()

    return canciones
}