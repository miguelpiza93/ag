import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const services = [
      { id: 9, name: 'Limpieza Facial', category: 'facial' },
      { id: 10, name: 'Acupuntura', category: 'alternativas' },
      { id: 11, name: 'Tonificacion en gluteos', category: 'corporal' },
      { id: 12, name: 'Reductores', category: 'corporal' },
      { id: 13, name: 'Moldeadores', category: 'corporal' },
      { id: 14, name: 'Pos-Quirúrgicos', category: 'corporal' }
    ];

    const homeServices = [
      { id: 11, name: 'Terapias Alternativas', description: 'Renuevate, Relájate y Recarga Energía.', image: 'assets/img/c1.jpg' },
      { id: 13, name: 'Corporal', description: 'Aportan un beneficio tanto para la mente como para el cuerpo, y los puedes combinar a tu medida.', image: 'assets/img/c2.jpg'},
      { id: 12, name: 'Facial', description: 'Encuentra el tratamiento adecuado que necesitas para cuidar y rejuvenecer tu rostro.', image: 'assets/img/c3.jpg' }
    ];

    const contact = {
      address: "Calle 38 # 42 - 24",
      country: "Cali, Colombia",
      telephone: "+57 316 8963822",
      business_hours: "Lun - Vie: 7am - 8pm\nSab: 8am - 3:30pm",
      email: "alexgomez1814@hotmail.com",
      short_text: "Envíenos su consulta en cualquier momento!"
    };

    const categories = [
      { id: 'pizza-tab', reference: 'facial', name: 'Tratamientos Faciales' },
      { id: 'pills-bread-tab', reference: 'alternativas', name: 'Terapias Alternativas' },
      { id: 'pills-burger-tab', reference: 'corporal', name: 'Tratamientos Corporales' }
    ]

    return {services, homeServices, contact, categories};
  }
}