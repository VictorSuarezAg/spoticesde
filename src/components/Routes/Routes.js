import { Home } from '../Home/Home.js'
import { Historia } from '../Historia/Historia.js'
import { Integrantes } from '../Integrantes/Integrantes.js'
import { Music } from '../Music/Music.js'
import { Routes, Route } from 'react-router-dom'
import { Menu } from '../Menu/Menu.js'
import { Footer } from '../Footer/Footer.js'

export function Rutas () {
    return (
        <div className="App">
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="historia" element={<Historia />} />
                <Route path="integrantes" element={<Integrantes />} />
                <Route path="music" element={<Music />} />
            </Routes>
            <Footer/>
        </div>
    )
}