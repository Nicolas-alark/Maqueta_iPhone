import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const objetoinc = {
    enlace: "https://locate.apple.com/co/es/",
    enlace2: "https://www.apple.com/choose-country-region/",
    enalce3: "https://www.apple.com/legal/privacy/es-la/",
    enlace4: "https://www.apple.com/legal/",
    enlace5: "https://www.apple.com/co/sitemap/",
    parrafo: "Copyright © 2025 Apple Inc. Todos los derechos reservados.",
    parrafo1: "Politica de privacidad",
    parrafo2: "Aviso legal",
    parrafo3: "Mapa del sitio"
  };



  return (
    <>
        <section class="ac-gf-footer">
              <div class="ac-gf-footer-shop">
                  <a href={objetoinc.enlace} data-analytics-title="other retailers or resellers" data-analytics-exit-link="">Busca un distribuidor</a>
                  &nbsp; Cerca a ti. 
              </div>

              <div>
                <a href={objetoinc.enlace2} title='Elige tu país o región' aria-label="Colombia. Elige tu país o región" data-analytics-title="Chooes your country " >Colombia
                </a>
              </div>
              <div>{objetoinc.parrafo}</div>
              <ul>
                <li> <a href={objetoinc.enalce3} data-analytics-title="privacy police">{objetoinc.parrafo1}</a></li>
                <li><a href={objetoinc.enlace4} data-analytics-title="legal"> {objetoinc.parrafo2} </a></li>
                <li><a href={objetoinc.enlace5} data-analytics-title="map">{objetoinc.parrafo3}</a></li>
              </ul>
        </section>
    </>
  )
}

export default App
