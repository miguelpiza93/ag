import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const services = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const homeServices = [
      { id: 11, name: 'Terapias Alternativas', description: 'Renuevate, Relájate y Recarga Energía.', image: 'assets/img/c1.jpg' },
      { id: 13, name: 'Corporal', description: 'Aportan un beneficio tanto para la mente como para el cuerpo, y los puedes combinar a tu medida.', image: 'assets/img/c2.jpg'},
      { id: 12, name: 'Facial', description: 'Encuentra el tratamiento adecuado que necesitas para cuidar y rejuvenecer tu rostro.', image: 'assets/img/c3.jpg' }
    ];
    return {services, homeServices};
  }
}