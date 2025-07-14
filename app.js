// SPA Navegación
const sidebarLinks = document.querySelectorAll('.navbar-link');
const mainSections = document.querySelectorAll('.main-section');

function showSection(hash) {
  mainSections.forEach(sec => sec.classList.remove('active'));
  sidebarLinks.forEach(link => link.classList.remove('active'));
  const id = hash.replace('#', '') || 'itinerario';
  const section = document.getElementById(id);
  if (section) section.classList.add('active');
  const activeLink = Array.from(sidebarLinks).find(l => l.getAttribute('href') === '#' + id);
  if (activeLink) activeLink.classList.add('active');
}
window.addEventListener('hashchange', () => showSection(location.hash));
document.addEventListener('DOMContentLoaded', () => showSection(location.hash));

// Datos del viaje
const itinerary = [
  // Budapest
  { date: '19/07/25', city: 'Budapest', activities: [
    { desc: 'Vuelo: Barcelona → Budapest (2h 30m aprox)'},
    { desc: 'Supermercado'},
    { desc: 'Parlamento de noche', maps: 'https://maps.app.goo.gl/puxkcgbiLj7Ha9xm8' },
  ]},
  { date: '20/07/25', city: 'Budapest', activities: [
    { desc: 'Iglesia Matías', maps: 'https://maps.app.goo.gl/TpecXGzUow6ThLEK9' },
    { desc: 'Bastión de los Pescadores', maps: 'https://maps.app.goo.gl/zjRgEFxemiTNnt746' },
    { desc: 'Castillo de Buda', maps: 'https://maps.app.goo.gl/Z6BbS6YhjpiTysTC7' },
    { desc: 'Funicular', maps: 'https://maps.app.goo.gl/hW5yREJDUpQkDRGz7' },
    { desc: 'Comida: Mercado Central de Budapest', maps: 'https://maps.app.goo.gl/aTtvWT6MtpGqiG2b7' },
    { desc: 'Avenida Andrássy y Plaza de la Ópera', maps: 'https://maps.app.goo.gl/Z8SSum6AfPoKKfJx7' },
    { desc: 'Ópera / Entrada', maps: 'https://maps.app.goo.gl/nQ85AhRw5UTZP8WGA' },
    { desc: 'Cena por el barrio judío', maps: 'https://maps.app.goo.gl/YieWkWrxveL4qXLn9' },
  ]},
  { date: '21/07/25', city: 'Budapest', activities: [
    { desc: 'Barrio judío y ruin bars', maps: 'https://maps.app.goo.gl/YieWkWrxveL4qXLn9' },
    { desc: 'Isla Margarita', maps: 'https://maps.app.goo.gl/wfDfB8WSbaTcysDWA' },
    { desc: 'Paseo en bici' },
    { desc: 'Torre de agua', maps: 'https://maps.app.goo.gl/rQECkW2A4oQmiT7z5' },
    { desc: 'Calle comercial', maps: 'https://goo.gl/maps/3v8Qw2Qw2Qw2Qw2B' },
  ]},
  // Viena
  { date: '22/07/25', city: 'Viena', activities: [
    { desc: 'Palacio de Schönbrunn (jardines)', maps: 'https://maps.app.goo.gl/KTV4qiVJ9GRTdLnk8' },
    { desc: 'Laberinto', maps: 'https://maps.app.goo.gl/ECjY7baytr8AaU2A8' },
    { desc: 'Gloriette', maps: 'https://maps.app.goo.gl/ugHhsULZ4vK9eZmX6' },
    { desc: 'Comida en Naschmarkt', maps: 'https://maps.app.goo.gl/7ggdCMGyNQWvxLbe6' },
    { desc: 'Ópera de Viena', maps: 'https://maps.app.goo.gl/Rwc6pf5CSYEo9tts5' },
    { desc: 'Catedral de San Esteban', maps: 'https://maps.app.goo.gl/jKmZGLmsjANEX3n47' },
    { desc: 'Museo Sisi', maps: 'https://maps.app.goo.gl/T8Ma81iNbBgMhEF47' },
  ]},
  { date: '23/07/25', city: 'Viena', activities: [
    { desc: 'Museo Klimt (Palacio Belvedere)', maps: 'https://maps.app.goo.gl/4W8ryz3CFX1kNSvd9' },
    { desc: 'Callejear'},
    { desc: 'Tren: Viena (17:10) → Praga (21:15)'},
  ]},
  // Praga
  { date: '24/07/25', city: 'Praga', activities: [
    { desc: 'Día organizado por María y Xavier' },
  ]},
  { date: '25/07/25', city: 'Praga', activities: [
    { desc: 'Día organizado por María y Xavier' },
    { desc: 'Tren: Praga (16:39) → Berlín (20:36)'},
  ]},
  // Berlín
  { date: '26/07/25', city: 'Berlín', activities: [
    { desc: 'Tour bus turístico o bici (hop-on hop-off)', maps: 'https://goo.gl/maps/2v8Qw2Qw2Qw2Qw2C' },
    { desc: 'Puerta de Brandeburgo', maps: 'https://maps.app.goo.gl/zNjKTr4QbeAjbj6n7' },
    { desc: 'Parlamento alemán', maps: 'https://maps.app.goo.gl/BGna2ux78VeMXhsm6' },
    { desc: 'Monumento al Holocausto', maps: 'https://maps.app.goo.gl/3nL7RF8wGTQDZj1k7' },
    { desc: 'Checkpoint Charlie', maps: 'https://maps.app.goo.gl/xRETt5AErVz7RuG29' },
    { desc: 'East Side Gallery', maps: 'https://maps.app.goo.gl/BVK9Q3Lm4SGpYDmb9' },
    { desc: 'Paseo por calles céntricas' },
    { desc: 'Matrix !!' }
  ]},
  { date: '27/07/25', city: 'Berlín', activities: [
    { desc: 'Zona Mitte', maps: 'https://maps.app.goo.gl/WEoq4bN2PUWfhxjs6' },
    { desc: 'Hackesche Höfe', maps: 'https://maps.app.goo.gl/xMGJAKW9hsMxLmB86' },
    { desc: 'Muro de Berlín', maps: 'https://maps.app.goo.gl/kwr7DxQ3y9tarTb78' },
    { desc: 'Tren: Berlín (22:56) → Ámsterdam (06:26)'},
  ]},
  // Ámsterdam
  { date: '28/07/25', city: 'Ámsterdam', activities: [
    { desc: 'Bicis'},
    { desc: 'Museo Van Gogh', maps: 'https://maps.app.goo.gl/77njAGe7SCBxAGEG8' },
    { desc: 'Barrio de los canales', maps: 'https://maps.app.goo.gl/6aMKNYQynUskmhUM7' },
  ]},
  { date: '29/07/25', city: 'Ámsterdam', activities: [
    { desc: 'Mercado de las flores', maps: 'https://goo.gl/maps/5v8Qw2Qw2Qw2Qw2D' },
    { desc: 'Barrio De Pijp', maps: 'https://maps.app.goo.gl/m7ovCjNtcGpdockW6' },
    { desc: 'Albert Cuyp Market', maps: 'https://maps.app.goo.gl/Uv4eA4XhJWcnq4Qw5' },
    { desc: 'Parque Vondelpark', maps: 'https://maps.app.goo.gl/ZPoR9DWaCt1YunjPA' },
  ]},
  // París
  { date: '30/07/25', city: 'París', activities: [
    { desc: 'Tren: Ámsterdam (08:10) → París (11:36)'},
    { desc: 'Louvre', maps: 'https://maps.app.goo.gl/6EpbqUsTM9BRXL5t6' },
    { desc: 'Campos Elíseos', maps: 'https://maps.app.goo.gl/rkxYx8wx8gUEsqUk9' },
    { desc: 'Arco del Triunfo', maps: 'https://maps.app.goo.gl/L7bH7tqjrVr5iw4X9' },
    { desc: 'Ópera Garnier', maps: 'https://maps.app.goo.gl/mpSXNnnHi2r7dMJc7' },
    { desc: 'Torre Eiffel', maps: 'https://maps.app.goo.gl/ouGgmuNBPP1H9dE7A' },
  ]},
  { date: '31/07/25', city: 'París', activities: [
    { desc: 'Notre Dame', maps: 'https://maps.app.goo.gl/6AHyD2Z6HjTnacSi6' },
    { desc: 'Sainte-Chapelle', maps: 'https://maps.app.goo.gl/dcnRgNrAC7hRDhdG6' },
    { desc: 'Montmartre / Sacré-Cœur (atardecer)', maps: 'https://maps.app.goo.gl/dmRT1yrbAb5UdL849' },
    { desc: 'Pastelería Boris Lumé', maps: 'https://maps.app.goo.gl/eqMJBGxvdkyKvUSy7' },
    { desc: 'Pachamama !!' },
  ]},
  { date: '01/08/25', city: 'París', activities: [
    { desc: 'Tren: París (14:21) → Barcelona (21:29)'},
    { desc: 'Día libre / regreso' },
  ]},
];

const alojamientos = [
  {
    ciudad: 'Budapest', fechas: '19-22 julio', nombre: 'Souper Apartments Downtown', direccion: 'Andrassy út 1', checkin: '14:00', checkout: '11:00', link: 'https://www.booking.com/hotel/hu/souper-apartments-downtown.html',
    foto: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/123456789.jpg',
    ubicacion: 'https://goo.gl/maps/abcdBudapestAlojamiento'
  },
  {
    ciudad: 'Viena', fechas: '22-23 julio', nombre: 'Charmante zentral gelegne wohnung', direccion: 'Kärntner Strasse 2', checkin: '15:00', checkout: '10:00', link: 'https://www.booking.com/hotel/at/charmante-zentral-gelegene-wohnung.html',
    foto: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/553273229.jpg?k=8c44774fb3d4e230ac3fa6198026a427dad29a643f5dc0c11b60f5a3b4e84223&o=',
    ubicacion: 'https://maps.app.goo.gl/kcFrf6yky8QfVPD57'
  },
  {
    ciudad: 'Praga', fechas: '23-26 julio', nombre: 'Letna Garden Suites', direccion: 'Karlova 3', checkin: '13:00', checkout: '11:00', link: 'https://www.booking.com/hotel/cz/letna-garden-suites.html',
    foto: 'https://cf.bstatic.com/xdata/images/hotel/max300/201141434.jpg?k=99b3b51b20ad7bf40f9d177409a981769e2e98dba1aaddd70ba6f66c3a597fa9&o=',
    ubicacion: 'https://maps.app.goo.gl/JV8Kqpb1dhaBjUg38'
  },
  {
    ciudad: 'Berlín', fechas: '26-27 julio', nombre: 'AMANO HOME Apartments', direccion: 'Alexanderplatz 5', checkin: '16:00', checkout: '12:00', link: 'https://www.booking.com/hotel/de/amano-home-apartments.html',
    foto: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456789012.jpg',
    ubicacion: 'https://goo.gl/maps/abcdBerlinAlojamiento'
  },
  {
    ciudad: 'Ámsterdam', fechas: '27-29 julio', nombre: 'Hotel Library Amsterdam', direccion: 'Damrak 10', checkin: '14:00', checkout: '11:00', link: 'https://www.booking.com/hotel/nl/library-amsterdam.html',
    foto: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60434479.jpg?k=02332269594dbda7806321ca99c82d8a2d86479bead15ed3923c55891386fdd8&o=',
    ubicacion: 'https://maps.app.goo.gl/jaeJYcT3MEGrhtoK8'
  },
  {
    ciudad: 'París', fechas: '29 julio - 1 agosto', nombre: 'WS Saint-Lazare - Lafayette', direccion: 'Rue de Rivoli 20', checkin: '15:00', checkout: '10:00', link: 'https://www.booking.com/hotel/fr/ws-saint-lazare-lafayette.html',
    foto: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/678901234.jpg',
    ubicacion: 'https://goo.gl/maps/abcdParisAlojamiento'
  },
];

const personas = [
  'Bruno', 'María', 'Xavier', 'Lucia', 'Andrea'
];

// Render Itinerario
function renderItinerary() {
  const container = document.getElementById('itinerary-list');
  container.innerHTML = '';
  itinerary.forEach(day => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'itinerary-day';
    dayDiv.innerHTML = `
      <div class="itinerary-date">${day.date}</div>
      <div class="itinerary-city">${day.city}</div>
      <div class="itinerary-activities">
        <ul>
        ${day.activities.map(act => {
          const isTren = act.desc && (act.desc.startsWith('Tren:') || act.desc.startsWith('Tren nocturno:'));
          const isVuelo = act.desc && act.desc.startsWith('Vuelo:');
          return `
            <li class="itinerary-activity">
              <span${(isTren || isVuelo) ? ' style="font-weight:700"' : ''}>${act.desc}
                ${act.maps ? `<a href='${act.maps}' target='_blank' class='maps-link' title='Ver en Google Maps' style='margin-left:0.4em;vertical-align:middle;'><svg xmlns='http://www.w3.org/2000/svg' width='1.1em' height='1.1em' viewBox='0 0 24 24' fill='none' stroke='#6366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M7 17L17 7'></path><path d='M7 7h10v10'></path></svg></a>` : ''}
              </span>
            </li>
          `;
        }).join('')}
        </ul>
      </div>
    `;
    container.appendChild(dayDiv);
  });
}

// Render Alojamientos
function renderAlojamientos() {
  const container = document.getElementById('alojamientos-lista');
  container.innerHTML = '';
  alojamientos.forEach(aloj => {
    const card = document.createElement('div');
    card.className = 'alojamiento-card';
    card.innerHTML = `
      <h2>${aloj.ciudad}</h2>
      ${aloj.foto ? `<img src="${aloj.foto}" alt="Foto alojamiento ${aloj.ciudad}" class="alojamiento-foto">` : ''}
      <div class="alojamiento-info">
        <span class="alojamiento-fechas">📅 ${aloj.fechas}</span>
        <span class="alojamiento-nombre">${aloj.nombre}</span>
        <span class="alojamiento-direccion">📍 ${aloj.direccion}</span>
        <span>Check-in: ${aloj.checkin} | Check-out: ${aloj.checkout}</span>
        <div class="alojamiento-btns">
          <a href="${aloj.link}" target="_blank" class="alojamiento-btn" title="Ver en Booking">
            <svg xmlns='http://www.w3.org/2000/svg' width='1.1em' height='1.1em' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M7 17L17 7'></path><path d='M7 7h10v10'></path></svg>
            Booking
          </a>
          ${aloj.ubicacion ? `<a href="${aloj.ubicacion}" target="_blank" class="alojamiento-btn" title="Ver ubicación en Google Maps" style="background: #f59e42;"><svg xmlns='http://www.w3.org/2000/svg' width='1.1em' height='1.1em' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'></circle><path d='M12 16v-4'></path><path d='M12 8h.01'></path></svg>Mapa</a>` : ''}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Documentación
function renderDocumentacion() {
  const container = document.getElementById('personas-docs');
  container.innerHTML = '';
  personas.forEach(nombre => {
    const block = document.createElement('div');
    block.className = 'persona-block';
    block.innerHTML = `<h2>${nombre}</h2><div class="docs-placeholder">[Subir/ver documentos: pasaporte, seguro, reservas, billetes]</div>`;
    container.appendChild(block);
  });
}

// Render info del viaje
function renderViajeInfo() {
  // Datos de trayectos
  const trayectos = [
    // [origen, destino, tipo, km aprox, horas aprox]
    { from: 'Barcelona', to: 'Budapest', tipo: 'avion', km: 1570, horas: 2.5 },
    { from: 'Budapest', to: 'Viena', tipo: 'tren', km: 243, horas: 2.5 },
    { from: 'Viena', to: 'Praga', tipo: 'tren', km: 333, horas: 4.5 },
    { from: 'Praga', to: 'Berlín', tipo: 'tren', km: 350, horas: 4.5 },
    { from: 'Berlín', to: 'Ámsterdam', tipo: 'tren', km: 650, horas: 6.5 },
    { from: 'Ámsterdam', to: 'París', tipo: 'tren', km: 510, horas: 3.5 },
    { from: 'París', to: 'Barcelona', tipo: 'tren', km: 1030, horas: 6.5 },
  ];
  const ciudades = [
    'Barcelona', 'Budapest', 'Viena', 'Praga', 'Berlín', 'Ámsterdam', 'París'
  ];
  const paises = [
    'España', 'Hungría', 'Austria', 'Chequia', 'Alemania', 'Países Bajos', 'Francia'
  ];
  const dias = 14; // 19/07 al 1/08 incluidos
  const fechaInicio = '19/07/2025';
  const fechaFin = '01/08/2025';

  const kmTren = trayectos.filter(t => t.tipo === 'tren').reduce((a, b) => a + b.km, 0);
  const kmAvion = trayectos.filter(t => t.tipo === 'avion').reduce((a, b) => a + b.km, 0);
  const hTren = trayectos.filter(t => t.tipo === 'tren').reduce((a, b) => a + b.horas, 0);
  const hAvion = trayectos.filter(t => t.tipo === 'avion').reduce((a, b) => a + b.horas, 0);
  const trayectosTren = trayectos.filter(t => t.tipo === 'tren').length;
  const trayectosAvion = trayectos.filter(t => t.tipo === 'avion').length;
  const trayectosTotales = trayectos.length;
  const mediaKmDia = Math.round((kmTren + kmAvion) / dias);

  const container = document.getElementById('viaje-info');
  container.innerHTML = `
    <div class="viaje-info-item">
      <span class="viaje-info-label">Km en tren</span>
      <span class="viaje-info-value">${kmTren} km</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Km en avión</span>
      <span class="viaje-info-value">${kmAvion} km</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Horas en tren</span>
      <span class="viaje-info-value">${hTren} h</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Horas en avión</span>
      <span class="viaje-info-value">${hAvion} h</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Trayectos totales</span>
      <span class="viaje-info-value">${trayectosTotales}</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Trayectos en tren</span>
      <span class="viaje-info-value">${trayectosTren}</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Trayectos en avión</span>
      <span class="viaje-info-value">${trayectosAvion}</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Países visitados</span>
      <span class="viaje-info-value">${paises.length}</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Ciudades visitadas</span>
      <span class="viaje-info-value">${ciudades.length}</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Días de viaje</span>
      <span class="viaje-info-value">${dias}</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Media de km/día</span>
      <span class="viaje-info-value">${mediaKmDia} km</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Inicio</span>
      <span class="viaje-info-value">${fechaInicio}</span>
    </div>
    <div class="viaje-info-item">
      <span class="viaje-info-label">Fin</span>
      <span class="viaje-info-value">${fechaFin}</span>
    </div>
  `;
}

// MAPA OPENLAYERS
function initOpenLayers() {
  // Coordenadas de las ciudades principales (lon, lat)
  const cities = [
    { name: 'Barcelona', coords: [2.1734, 41.3851] },
    { name: 'Budapest', coords: [19.0402, 47.4979] },
    { name: 'Viena', coords: [16.3738, 48.2082] },
    { name: 'Praga', coords: [14.4378, 50.0755] },
    { name: 'Berlín', coords: [13.4050, 52.5200] },
    { name: 'Ámsterdam', coords: [4.9041, 52.3676] },
    { name: 'París', coords: [2.3522, 48.8566] },
    { name: 'Barcelona (final)', coords: [2.1734, 41.3851] },
  ];

  // Trayectos: avión (Barcelona-Budapest), tren (resto)
  const avionCoords = [
    ol.proj.fromLonLat(cities[0].coords),
    ol.proj.fromLonLat(cities[1].coords)
  ];
  const trenCoords = [
    ...cities.slice(1, 7).map(c => ol.proj.fromLonLat(c.coords)),
    ol.proj.fromLonLat(cities[7].coords)
  ];

  // Feature para la ruta de avión
  const avionFeature = new ol.Feature({
    geometry: new ol.geom.LineString(avionCoords)
  });
  avionFeature.setStyle(new ol.style.Style({
    stroke: new ol.style.Stroke({ color: '#f59e42', width: 4, lineDash: [12, 8] })
  }));

  // Feature para la ruta de tren
  const trenFeature = new ol.Feature({
    geometry: new ol.geom.LineString(trenCoords)
  });
  trenFeature.setStyle(new ol.style.Style({
    stroke: new ol.style.Stroke({ color: '#6366f1', width: 4 })
  }));

  // Features para los marcadores
  const markerFeatures = cities.map(city => {
    const feature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(city.coords)),
      name: city.name
    });
    feature.setStyle(new ol.style.Style({
      image: new ol.style.Circle({
        radius: 9,
        fill: new ol.style.Fill({ color: '#6366f1' }),
        stroke: new ol.style.Stroke({ color: '#fff', width: 2 })
      })
    }));
    return feature;
  });

  // Capa vectorial
  const vectorSource = new ol.source.Vector({
    features: [avionFeature, trenFeature, ...markerFeatures]
  });
  const vectorLayer = new ol.layer.Vector({ source: vectorSource });

  // Capa base
  const rasterLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });

  // Crear mapa
  const map = new ol.Map({
    target: 'map',
    layers: [rasterLayer, vectorLayer],
    view: new ol.View({
      center: ol.proj.fromLonLat([10, 48]),
      zoom: 4.2
    })
  });

  // Popup simple al hacer click en marcador
  const overlay = new ol.Overlay({
    element: document.createElement('div'),
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -12]
  });
  map.addOverlay(overlay);
  map.on('click', function (evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, f => f);
    if (feature && feature.get('name')) {
      const element = overlay.getElement();
      element.innerHTML = `<div style='background:#fff;padding:6px 12px;border-radius:8px;box-shadow:0 2px 8px #0002;font-weight:600;color:#6366f1;'>${feature.get('name')}</div>`;
      overlay.setPosition(feature.getGeometry().getCoordinates());
} else {
      overlay.setPosition(undefined);
    }
  });
}

// Inicialización
renderItinerary();
renderAlojamientos();
renderDocumentacion();
document.addEventListener('DOMContentLoaded', () => {
  showSection(location.hash);
  initOpenLayers();
  renderViajeInfo();
}); 