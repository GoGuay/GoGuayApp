export interface Evento {
  id: number;
  nombre_evento: string;
  ciudad: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  imagen: string;
  enlace_info?: string;
}

export const Eventos: Evento[] = [
  {
    id: 1,
    nombre_evento: 'Mado',
    ciudad: 'Madrid',
    fecha_inicio: '28/06/2026',
    fecha_fin: '01/07/2026',
    descripcion: 'MADO 2025 celebra el 20º aniversario del matrimonio igualitario en España. Incluye desfiles, conciertos y eventos culturales.',
    imagen: 'https://pridechueca.com/wp-content/uploads/2025/12/fauna-chueca.webp',
    enlace_info: 'https://shangay.com/2025/01/28/mado-madrid-orgullo-verano-lgtbi/',
  },
  {
    id: 2,
    nombre_evento: 'Bearbie Madrid',
    ciudad: 'Madrid',
    fecha_inicio: '15/05/2026',
    fecha_fin: '18/05/2026',
    descripcion:
      'Un evento enfocado en la comunidad bear con fiestas temáticas, sesiones de DJ internacionales y actividades culturales en el centro de Madrid.',
    imagen:
      'https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/611665121_1486772676782436_4690226513325619843_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wE3jEVJGjcsQ7kNvwESek9k&_nc_oc=Adnsvjj9l4XfVBOos2KX-ob6s3LXcomPWJUUmBUrEPmORGVadN-_c9CWAJSnpYrjrMk&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=7twGVVuHmcMvSf92u969rA&oh=00_AfroIJirtjbB4cyube5uzPPIoDHgPgobLe1WSNLrg-oHvQ&oe=69636CF8',
    enlace_info: 'https://bearbie.org/',
  },
  {
    id: 3,
    nombre_evento: 'Circuit Festival Barcelona',
    ciudad: 'Barcelona',
    fecha_inicio: '08/08/2026',
    fecha_fin: '16/08/2026',
    descripcion:
      'El mayor festival internacional LGTBI del mundo. Más de una semana de fiestas, Water Park Day y miles de personas de todo el planeta.',
    imagen:
      'https://imagenes.elpais.com/resizer/v2/PJ6REW72NIWXBBXK7GMNEMJYWA.jpg?auth=ea6688adfc8afa2f62a935fb0b46301fcdd88a48fb320aa507c0e9c5dabcbbb8&width=1200',
    enlace_info: 'https://circuitfestival.net/',
  },
  {
    id: 4,
    nombre_evento: 'Benidorm Pride',
    ciudad: 'Benidorm',
    fecha_inicio: '31/08/2026',
    fecha_fin: '06/09/2026',
    descripcion: 'Cierre del verano por todo lo alto con el desfile en la playa de Levante y fiestas nocturnas en los locales del casco antiguo.',
    imagen: 'https://www.orgullogay-benidorm.benidormpride.com/images/portada_FB.jpg',
    enlace_info: 'https://benidormpride.com/',
  },
  {
    id: 5,
    nombre_evento: 'Sónar Barcelona',
    ciudad: 'Barcelona',
    fecha_inicio: '18/06/2026',
    fecha_fin: '20/06/2026',
    descripcion: 'Festival de música avanzada, creatividad y tecnología. Referente mundial para los amantes de la electrónica y el arte digital.',
    imagen:
      'https://storage.googleapis.com/pro-cms-bucket/2662_Village_Martini_Ariel_20230615_f8ff91ebfc/2662_Village_Martini_Ariel_20230615_f8ff91ebfc.jpeg',
    enlace_info: 'https://sonar.es/',
  },
  {
    id: 6,
    nombre_evento: 'MadBear Madrid',
    ciudad: 'Madrid',
    fecha_inicio: '05/12/2026',
    fecha_fin: '10/12/2026',
    descripcion:
      'El encuentro bear de invierno más importante de España, coincidiendo con el puente de la Constitución. Fiestas y cultura en Chueca.',
    imagen: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1171,fit=crop/dWxw7wLZgBtlXPv1/lunes-5-reyes-t6PdwgjJT9pLRjx5.jpg',
    enlace_info: 'https://madbear.org/',
  },
];
