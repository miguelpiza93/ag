import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const services = [
      { id: 9, name: 'Limpieza Facial', category: 'facial', description: 'Desintoxica, rejuvenece, protege e hidrata la piel, está avanzada tecnología estimula la restauración natural de la piel sin dolor ni tiempo de recuperación.' },
      { id: 10, name: 'Acupuntura', category: 'alternativas', description: 'Terapia alternativa para aliviar distintas afecciones y mejorar su calidad de vida.' },
      { id: 11, name: 'Tonificacion en gluteos', category: 'corporal', description: ' Los glúteos soñados dependen no sólo de un trabajo intenso de la zona.' },
      { id: 12, name: 'Reductores', category: 'corporal', description: 'Disfruta de un paquete de 10 sesiones Reductoras y Reafirmantes: Gimnasia Pasiva Vacunoterapia Manta Térmica Masaje Reductor Cavitación Sauna.' },
      { id: 13, name: 'Moldeadores', category: 'corporal', description: 'Los masajes modeladores son una de las técnicas más usadas para quien desea eliminar grasas localizadas, es un método totalmente natural e indoloro.' },
      { id: 14, name: 'Post-Quirúrgicos', category: 'corporal', description: 'Es una especialidad de masaje que actúa directamente sobre el sistema linfático, activando la circulación y produciendo efectos benéficos para la piel.' }
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