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
    { time: '17:00', desc: 'Llegada y check-in' },
    { time: '18:00', desc: 'Supermercado' },
    { time: '20:00', desc: 'Parlamento de noche' },
  ]},
  { date: '20/07/25', city: 'Budapest', activities: [
    { time: '09:00', desc: 'Distrito del castillo: Iglesia Matías, Bastión de los Pescadores' },
    { time: '11:30', desc: 'Castillo de Buda' },
    { time: '13:00', desc: 'Funicular' },
    { time: '14:00', desc: 'Comida: Mercado Central de Budapest (Pest)' },
    { time: '16:00', desc: 'Avenida Andrássy y Plaza de la Ópera' },
    { time: '19:00', desc: 'Ópera / Entrada' },
    { time: '21:00', desc: 'Cena por el barrio judío' },
  ]},
  { date: '21/07/25', city: 'Budapest', activities: [
    { time: '09:00', desc: 'Barrio judío y ruin bars' },
    { time: '11:30', desc: 'Isla Margarita' },
    { time: '13:00', desc: 'Paseo en bici' },
    { time: '16:00', desc: 'Torre de agua' },
    { time: '18:00', desc: 'Café comercial' },
  ]},
  // Viena
  { date: '22/07/25', city: 'Viena', activities: [
    { time: '09:00', desc: 'Palacio de Schönbrunn (jardines y palacio)' },
    { time: '13:00', desc: 'Café Central o Gloriette' },
    { time: '14:30', desc: 'Comida en Naschmarkt' },
    { time: '17:00', desc: 'Ópera de Viena' },
  ]},
  { date: '23/07/25', city: 'Viena', activities: [
    { time: '09:00', desc: 'Catedral de San Esteban' },
    { time: '11:00', desc: 'Museo Sisi' },
    { time: '13:00', desc: 'Museo Klimt (Palacio Belvedere)' },
    { time: '15:00', desc: 'Café Figlmüller' },
  ]},
  // Praga
  { date: '24/07/25', city: 'Praga', activities: [
    { time: '', desc: 'Día organizado por María y Xavier' },
  ]},
  { date: '25/07/25', city: 'Praga', activities: [
    { time: '', desc: 'Día organizado por María y Xavier' },
  ]},
  // Berlín
  { date: '26/07/25', city: 'Berlín', activities: [
    { time: '10:00', desc: 'Tour en bus turístico / bici (hop-on hop-off)' },
    { time: '12:00', desc: 'Puerta de Brandeburgo' },
    { time: '13:00', desc: 'Parlamento alemán' },
    { time: '14:00', desc: 'Monumento al Holocausto' },
    { time: '16:00', desc: 'Checkpoint Charlie' },
    { time: '17:00', desc: 'East Side Gallery' },
    { time: '19:00', desc: 'Paseo por calles céntricas' },
  ]},
  { date: '27/07/25', city: 'Berlín', activities: [
    { time: '10:00', desc: 'Hackescher Markt' },
    { time: '11:00', desc: 'Hackesche Höfe' },
    { time: '13:00', desc: 'Muro de Berlín' },
  ]},
  // Ámsterdam
  { date: '28/07/25', city: 'Ámsterdam', activities: [
    { time: '10:00', desc: 'Bicis' },
    { time: '11:00', desc: 'Museo Van Gogh' },
    { time: '13:00', desc: 'Barrio de los canales' },
  ]},
  { date: '29/07/25', city: 'Ámsterdam', activities: [
    { time: '10:00', desc: 'Mercado de las flores' },
    { time: '11:30', desc: 'Barrio De Pijp + Mercado Albert Cuyp' },
    { time: '13:00', desc: 'Comida' },
    { time: '15:00', desc: 'Parque Vondelpark' },
    { time: '17:00', desc: 'Paseo' },
  ]},
  // París
  { date: '30/07/25', city: 'París', activities: [
    { time: '10:00', desc: 'Louvre (mediodía)' },
    { time: '13:00', desc: 'Campos Elíseos' },
    { time: '15:00', desc: 'Ópera Garnier' },
    { time: '17:00', desc: 'Arco del Triunfo' },
    { time: '19:00', desc: 'Torre Eiffel (foto nocturna)' },
  ]},
  { date: '31/07/25', city: 'París', activities: [
    { time: '09:00', desc: 'Notre Dame' },
    { time: '10:30', desc: 'Sainte-Chapelle' },
    { time: '12:00', desc: 'Montmartre / Sacré-Cœur (atardecer)' },
    { time: '19:00', desc: 'Pastelería Ladurée o Boris Lumé' },
  ]},
  { date: '01/08/25', city: 'París', activities: [
    { time: '', desc: 'Día libre / regreso' },
  ]},
];

const alojamientos = [
  {
    ciudad: 'Budapest', fechas: '19-22 julio', nombre: 'Souper Apartments Downtown', direccion: 'Andrassy út 1', checkin: '14:00', checkout: '11:00', link: 'https://www.booking.com/hotel/hu/souper-apartments-downtown.html'
  },
  {
    ciudad: 'Viena', fechas: '22-23 julio', nombre: 'Charmante zentral gelegne wohnung', direccion: 'Kärntner Strasse 2', checkin: '15:00', checkout: '10:00', link: 'https://www.booking.com/hotel/at/charmante-zentral-gelegene-wohnung.html'
  },
  {
    ciudad: 'Praga', fechas: '23-26 julio', nombre: 'Letna Garden Suites', direccion: 'Karlova 3', checkin: '13:00', checkout: '11:00', link: 'https://www.booking.com/hotel/cz/letna-garden-suites.html'
  },
  {
    ciudad: 'Berlín', fechas: '26-27 julio', nombre: 'AMANO HOME Apartments', direccion: 'Alexanderplatz 5', checkin: '16:00', checkout: '12:00', link: 'https://www.booking.com/hotel/de/amano-home-apartments.html'
  },
  {
    ciudad: 'Ámsterdam', fechas: '27-29 julio', nombre: 'Hotel Library Amsterdam', direccion: 'Damrak 10', checkin: '14:00', checkout: '11:00', link: 'https://www.booking.com/hotel/nl/library-amsterdam.html'
  },
  {
    ciudad: 'París', fechas: '29 julio - 1 agosto', nombre: 'WS Saint-Lazare - Lafayette', direccion: 'Rue de Rivoli 20', checkin: '15:00', checkout: '10:00', link: 'https://www.booking.com/hotel/fr/ws-saint-lazare-lafayette.html'
  },
];

const personas = [
  'Bruno', 'María', 'Xabier', 'Lucia', 'Andrea'
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
        ${day.activities.map(act => `
          <div class="itinerary-activity">
            <span class="itinerary-activity-time">${act.time ? act.time : ''}</span>
            <span>${act.desc}</span>
          </div>
        `).join('')}
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
      <div class="alojamiento-info">
        <span>${aloj.fechas}</span>
        <span>${aloj.nombre}</span>
        <span>${aloj.direccion}</span>
        <span>Check-in: ${aloj.checkin} | Check-out: ${aloj.checkout}</span>
        <a href="${aloj.link}" target="_blank">Ver en Booking</a>
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
