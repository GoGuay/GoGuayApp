export interface Evento {
    id: number;
    ciudad: string;
    fecha: string;
    detalles: string;
    viaje?: any;
    fuentes?: string;
}

export const Eventos: Evento[] = [
    {
        id: 1,
        ciudad: 'Madrid',
        fecha: 'Del 28 de junio al 6 de julio de 2025',
        detalles: 'MADO 2025 celebra el 20º aniversario del matrimonio igualitario en España. Incluye desfiles, conciertos y eventos culturales.',
        fuentes: 'https://shangay.com/2025/01/28/mado-madrid-orgullo-verano-lgtbi/'
    },
    {
        id: 2,
        ciudad: 'Barcelona',
        fecha: 'Del 28 de junio al 20 de julio de 2025',
        detalles: 'Pride Barcelona ofrece casi un mes de celebraciones con actividades culturales, conciertos y desfiles.',
        fuentes: 'https://es.homeexchange.com/es/blog/orgullo-lgbt-calendario-espana/'
    },
    {
        id: 3,
        ciudad: 'A Coruña',
        fecha: 'Del 6 al 13 de julio de 2025',
        detalles: 'Atlantic Pride con actuaciones de Judeline, Edurne, Nia, Merche y Paula Koops. Festival gratuito e inclusivo.',
        fuentes: 'https://cadenaser.com/galicia/2025/02/05/judeline-edurne-nia-merche-y-paula-koops-primeras-artistas-confirmadas-para-el-atlantic-pride-2025-radio-coruna/'
    },
    {
        id: 4,
        ciudad: 'Torremolinos',
        fecha: 'Del 5 al 8 de junio de 2025',
        detalles: 'Celebración del 10º aniversario del Pride de Torremolinos con artistas como Melody, Sonia y Selena, Merche, y más.',
        fuentes: 'https://www.areacostadelsol.com/2025/01/22/guia-eventos-lgtb-torremolinos/'
    },
    {
        id: 5,
        ciudad: 'Sitges',
        fecha: 'Del 4 al 8 de junio de 2025',
        detalles: 'Uno de los eventos LGTBI más antiguos de Europa con desfiles, fiestas y actividades culturales.',
        fuentes: 'https://es.homeexchange.com/es/blog/orgullo-lgbt-calendario-espana/'
    },
    {
        id: 6,
        ciudad: 'Gandía',
        fecha: 'Del 22 al 25 de mayo de 2025',
        detalles: 'Primer orgullo oficial de la Comunitat Valenciana con actividades culturales y el certamen Mr. Gay España.',
        fuentes: 'https://cadenaser.com/comunitat-valenciana/2025/01/23/el-gandia-pride-situa-a-la-ciudad-en-el-epicentro-de-la-diversidad-este-ano-radio-gandia/'
    },
    {
        id: 7,
        ciudad: 'Huesca',
        fecha: 'Junio de 2025',
        detalles: 'Celebración con escenario en la plaza de Navarra, iluminación del Casino y diversas actividades culturales.',
        fuentes: 'https://cadenaser.com/aragon/2025/01/30/huesca-celebrara-el-orgullo-2025-con-un-escenario-en-la-plaza-de-navarra-y-tendra-un-simbolo-fijo-radio-huesca/'
    },
    {
        id: 8,
        ciudad: 'Valencia',
        fecha: 'Del 23 de junio al 6 de julio de 2025',
        detalles: 'Diversas actividades y eventos en celebración del Orgullo LGTBIQ+ en la ciudad.',
        fuentes: 'https://www.hoyvalencia.app/que-hacer-este-orgullo-lgtbiq-en-valencia/'
    },
    {
        id: 9,
        ciudad: 'Sevilla',
        fecha: '28 de junio de 2025',
        detalles: 'Manifestación y eventos culturales en celebración del Orgullo LGTBIQA+ en Andalucía.',
        fuentes: 'https://somosdecoloresradio.com/cuando-es-orgullo-2025-espana/'
    },
    {
        id: 10,
        ciudad: 'Granada',
        fecha: '28 de junio de 2025',
        detalles: 'Manifestación y actividades culturales en celebración del Orgullo LGTBIQA+ en la ciudad.',
        fuentes: 'https://somosdecoloresradio.com/cuando-es-orgullo-2025-espana/'
    }
];