/*
 * Product catalog. Spanish copy is taken verbatim from fmp.com.do;
 * English copy is a faithful translation (the old site left most EN pages in Spanish).
 * Section types the ProductDetail page understands:
 *   { type: 'text', title, paras: [] }
 *   { type: 'leads', title, intro?, items: [{ lead, text }] }
 *   { type: 'modules', title, items: [{ icon, label }] }
 *   { type: 'bars', title, items: [{ label, value }] }
 *   { type: 'steps', title, items: [{ lead, text }] }   // numbered
 */

export const productCats = {
  es: {
    erp: 'Sistemas ERP',
    hr: 'Sistemas de RRHH y Nómina',
    cloud: 'Servidores en la Nube',
    pos: 'Sistemas de Punto de Venta',
    medical: 'Sistemas Médicos',
    billing: 'Facturación Electrónica',
    microsoft: 'Productos de Microsoft',
    addons: "Addon's",
  },
  en: {
    erp: 'ERP Systems',
    hr: 'HR & Payroll Systems',
    cloud: 'Cloud Servers',
    pos: 'Point of Sale Systems',
    medical: 'Medical Systems',
    billing: 'Electronic Billing',
    microsoft: 'Microsoft Products',
    addons: 'Add-ons',
  },
}

export const catOrder = ['erp', 'hr', 'cloud', 'pos', 'medical', 'billing', 'microsoft', 'addons']

const SECTOR_BARS = [
  { label: 'Energía, Servicios Públicos, Combustibles y Metalúrgica', labelEn: 'Energy, Utilities, Fuels & Metallurgy', value: 32 },
  { label: 'Comercio, Retail y Telecomunicaciones', labelEn: 'Commerce, Retail & Telecommunications', value: 21 },
  { label: 'Servicios Financieros', labelEn: 'Financial Services', value: 11 },
  { label: 'Agricultura', labelEn: 'Agriculture', value: 10 },
  { label: 'Sector Gubernamental', labelEn: 'Government Sector', value: 8 },
  { label: 'Industria Automotríz', labelEn: 'Automotive Industry', value: 5 },
  { label: 'Salud y Servicios Sociales', labelEn: 'Health & Social Services', value: 3 },
  { label: 'Industria Química', labelEn: 'Chemical Industry', value: 3 },
  { label: 'Tecnología de la Información (TI)', labelEn: 'Information Technology (IT)', value: 2 },
  { label: 'Educación', labelEn: 'Education', value: 2 },
  { label: 'Transporte y Logística', labelEn: 'Transport & Logistics', value: 2 },
  { label: 'Producción Musical', labelEn: 'Music Production', value: 2 },
]

export const products = {
  'sap-business-one': {
    cat: 'erp',
    img: 'assets/img/sap-business-one.jpg',
    logo: 'assets/img/sapb1-logo.png',
    badge: 'assets/img/sap-partner-badge.jpg',
    es: {
      name: 'SAP Business One',
      tagline: 'El ERP para pequeñas y medianas empresas',
      intro: [
        'SAP Business One es una solución de software ERP diseñada específicamente para pequeñas y medianas empresas (PYMES). Este sistema integrado proporciona una visión en tiempo real de todos los aspectos de su negocio, desde finanzas y ventas hasta operaciones y recursos humanos, ayudando a las empresas a optimizar sus procesos, así como a tomar decisiones más informadas.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Gestión financiera', desc: 'Automatiza procesos contables, controla flujos de caja, gestiona informes financieros y facilita el cumplimiento normativo.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Ventas y atención al cliente', desc: 'Mejora la gestión de ventas, desde la generación de oportunidades hasta la gestión de pedidos y el servicio postventa, fortaleciendo la relación con el cliente.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Compras y gestión de inventarios', desc: 'Optimiza el control de inventarios, gestiona las compras y facilita la planificación de la demanda para mantener los niveles adecuados de stock.' },
        { icon: 'assets/icons/recursos.svg', title: 'Operaciones y producción', desc: 'Coordina los procesos de producción, controla los costos y gestiona las operaciones de manufactura y logística.' },
        { icon: 'assets/icons/reportes.svg', title: 'Informes y análisis', desc: 'Ofrece herramientas avanzadas de análisis y generación de informes para proporcionar información valiosa sobre el rendimiento del negocio.' },
        { icon: 'assets/icons/compras.svg', title: 'Interfaz intuitiva y accesibilidad', desc: 'Diseñado para ser fácil de usar, SAP Business One está disponible tanto en versiones on-premise como en la nube, adaptándose a las necesidades de su empresa.' },
      ],
      sections: [
        {
          type: 'modules', title: 'Módulos',
          items: [
            { icon: 'assets/icons/existencias.svg', label: 'Existencias' }, { icon: 'assets/icons/finanzas.svg', label: 'Finanzas' }, { icon: 'assets/icons/ventas.svg', label: 'Ventas' },
            { icon: 'assets/icons/reportes.svg', label: 'Reportes' }, { icon: 'assets/icons/compras.svg', label: 'Compras' }, { icon: 'assets/icons/manufactura.svg', label: 'Manufactura' },
          ],
        },
        {
          type: 'leads', title: 'Opciones de base de datos',
          items: [
            { lead: 'SAP HANA', text: 'La versión más avanzada que ofrece análisis en tiempo real, una mayor velocidad de procesamiento y la capacidad de manejar grandes volúmenes de datos con eficiencia.' },
            { lead: 'Microsoft SQL Server', text: 'Una opción confiable y ampliamente utilizada que proporciona robustez y estabilidad en la gestión de datos.' },
          ],
        },
        {
          type: 'leads', title: 'Modalidades de licenciamiento',
          items: [
            { lead: 'Licenciamiento perpetuo', text: 'Este modelo permite adquirir la licencia del software con un pago único. Incluye un mantenimiento anual que brinda acceso a nuevas actualizaciones y parches del software. El costo del mantenimiento anual es del 17% del monto de la licencia.' },
            { lead: 'Licenciamiento por suscripción', text: 'Este modelo ofrece acceso continuo a la versión más reciente de SAP Business One, con todas sus nuevas funcionalidades, correcciones de errores y mejoras. También proporciona la flexibilidad de agregar o desactivar licencias según sus necesidades e incluye el servicio de base de datos y su mantenimiento.' },
          ],
        },
        {
          type: 'leads', title: 'Beneficios de SAP Business One',
          items: [
            { lead: 'Visión integral', text: 'Centraliza toda la información en un solo sistema, proporcionando una visión unificada de las operaciones.' },
            { lead: 'Eficiencia operativa', text: 'Automatiza tareas rutinarias y reduce el riesgo de errores, permitiendo a los empleados concentrarse en tareas estratégicas.' },
            { lead: 'Escalabilidad', text: 'Se adapta al crecimiento de su empresa con funcionalidades adicionales y soporte para múltiples usuarios y ubicaciones.' },
            { lead: 'Decisiones basadas en datos', text: 'Facilita el acceso a datos precisos y actualizados para tomar decisiones informadas y oportunas.' },
          ],
        },
        { type: 'bars', title: 'Porcentaje por sector', items: SECTOR_BARS.map((b) => ({ label: b.label, value: b.value })) },
      ],
    },
    en: {
      name: 'SAP Business One',
      tagline: 'The ERP built for small and midsize businesses',
      intro: [
        'SAP Business One is an ERP software solution designed specifically for small and medium-sized enterprises (SMEs). This integrated system provides a real-time view of every aspect of your business — from finance and sales to operations and human resources — helping companies streamline their processes and make better-informed decisions.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Financial management', desc: 'Automates accounting processes, controls cash flow, manages financial reporting, and simplifies regulatory compliance.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Sales and customer care', desc: 'Improves sales management from lead generation to order handling and after-sales service, strengthening customer relationships.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Purchasing and inventory', desc: 'Optimizes inventory control, manages purchasing, and supports demand planning to keep stock at the right levels.' },
        { icon: 'assets/icons/recursos.svg', title: 'Operations and production', desc: 'Coordinates production processes, controls costs, and manages manufacturing and logistics operations.' },
        { icon: 'assets/icons/reportes.svg', title: 'Reporting and analytics', desc: 'Delivers advanced analysis and reporting tools that turn business performance into actionable insight.' },
        { icon: 'assets/icons/compras.svg', title: 'Intuitive interface, anywhere access', desc: 'Designed to be easy to use, SAP Business One is available both on-premise and in the cloud, adapting to your company’s needs.' },
      ],
      sections: [
        {
          type: 'modules', title: 'Modules',
          items: [
            { icon: 'assets/icons/existencias.svg', label: 'Inventory' }, { icon: 'assets/icons/finanzas.svg', label: 'Finance' }, { icon: 'assets/icons/ventas.svg', label: 'Sales' },
            { icon: 'assets/icons/reportes.svg', label: 'Reporting' }, { icon: 'assets/icons/compras.svg', label: 'Purchasing' }, { icon: 'assets/icons/manufactura.svg', label: 'Manufacturing' },
          ],
        },
        {
          type: 'leads', title: 'Database options',
          items: [
            { lead: 'SAP HANA', text: 'The most advanced option, offering real-time analytics, faster processing, and the ability to handle large data volumes efficiently.' },
            { lead: 'Microsoft SQL Server', text: 'A reliable, widely adopted option that provides robustness and stability in data management.' },
          ],
        },
        {
          type: 'leads', title: 'Licensing models',
          items: [
            { lead: 'Perpetual licensing', text: 'Acquire the software license with a one-time payment. Includes annual maintenance with access to new updates and patches; the annual maintenance fee is 17% of the license amount.' },
            { lead: 'Subscription licensing', text: 'Continuous access to the latest version of SAP Business One with all new features, fixes, and improvements — plus the flexibility to add or deactivate licenses as needed, with database service and maintenance included.' },
          ],
        },
        {
          type: 'leads', title: 'Benefits of SAP Business One',
          items: [
            { lead: 'A complete picture', text: 'Centralizes all information in a single system, providing a unified view of operations.' },
            { lead: 'Operational efficiency', text: 'Automates routine tasks and reduces the risk of errors, freeing your team to focus on strategic work.' },
            { lead: 'Scalability', text: 'Grows with your company through additional functionality and support for multiple users and locations.' },
            { lead: 'Data-driven decisions', text: 'Puts accurate, up-to-date data at your fingertips for informed, timely decision-making.' },
          ],
        },
        { type: 'bars', title: 'Our client base by sector', items: SECTOR_BARS.map((b) => ({ label: b.labelEn, value: b.value })) },
      ],
    },
  },

  'sap-s4hana-rise': {
    cat: 'erp',
    img: 'assets/img/sap-rise.jpg',
    es: {
      name: 'SAP S/4HANA Rise',
      tagline: 'ERP en la nube privada para empresas medianas y grandes',
      intro: [
        'RISE con SAP y GROW con SAP son soluciones de ERP en la nube que facilitan la adopción de SAP S/4HANA, adaptándose a diferentes necesidades empresariales.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Dirigido a', desc: 'Empresas medianas a grandes con requisitos complejos.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Personalización', desc: 'Altamente personalizable, con opciones de implementación Greenfield, Brownfield y Bluefield.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Implementación', desc: 'Nube privada, con flexibilidad en entornos de alojamiento (AWS, Google Cloud, Azure).' },
        { icon: 'assets/icons/recursos.svg', title: 'Soporte', desc: 'Modelo de soporte flexible y control sobre las actualizaciones.' },
      ],
      sections: [],
    },
    en: {
      name: 'SAP S/4HANA Rise',
      tagline: 'Private-cloud ERP for midsize and large enterprises',
      intro: [
        'RISE with SAP and GROW with SAP are cloud-based ERP solutions that make adopting SAP S/4HANA easier, adapting to different business needs.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Built for', desc: 'Medium to large companies with complex requirements.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Customization', desc: 'Highly customizable, with Greenfield, Brownfield, and Bluefield deployment options.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Deployment', desc: 'Private cloud, with flexible hosting environments (AWS, Google Cloud, Azure).' },
        { icon: 'assets/icons/recursos.svg', title: 'Support', desc: 'Flexible support model and control over updates.' },
      ],
      sections: [],
    },
  },

  'sap-s4hana-grow': {
    cat: 'erp',
    img: 'assets/img/sap-grow.jpg',
    es: {
      name: 'SAP S/4HANA Grow',
      tagline: 'ERP en la nube pública, listo para crecer rápido',
      intro: [
        'GROW con SAP reúne soluciones de ERP en la nube que facilitan la adopción de SAP S/4HANA, adaptándose a diferentes necesidades empresariales.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Dirigido a', desc: 'Pequeñas y medianas empresas que buscan simplificación.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Personalización', desc: 'Limitada, enfocada en procesos estandarizados.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Implementación', desc: 'Nube pública, preconfigurada para una rápida implementación.' },
        { icon: 'assets/icons/recursos.svg', title: 'Soporte', desc: 'Actualizaciones regulares cada seis meses gestionadas por SAP.' },
      ],
      sections: [],
    },
    en: {
      name: 'SAP S/4HANA Grow',
      tagline: 'Public-cloud ERP, ready to grow fast',
      intro: [
        'GROW with SAP brings together cloud ERP solutions that make adopting SAP S/4HANA easier, adapting to different business needs.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Built for', desc: 'Small and midsize companies looking for simplification.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Customization', desc: 'Focused and standardized, built around best-practice processes.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Deployment', desc: 'Public cloud, preconfigured for rapid implementation.' },
        { icon: 'assets/icons/recursos.svg', title: 'Support', desc: 'Regular updates every six months, managed by SAP.' },
      ],
      sections: [],
    },
  },

  'trebol-hrm-cloud': {
    cat: 'hr',
    img: 'assets/img/trebol-hero.jpg',
    logo: 'assets/img/trebol-logo.png',
    es: {
      name: 'Trebol HRM Cloud',
      tagline: 'RRHH y nómina, en una sola plataforma',
      intro: [
        'Solución integral avanzada diseñada para optimizar la gestión de recursos humanos y el proceso de nómina en empresas de cualquier tamaño. Ofrece una interfaz intuitiva y moderna que facilita la administración eficiente y el aprendizaje de los procesos administrativos.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Interfaz intuitiva', desc: 'Una experiencia de usuario amigable que simplifica la navegación y el manejo de la información.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Gestión integral', desc: 'Centraliza toda la información del personal, desde el reclutamiento hasta la desvinculación.' },
        { icon: 'assets/icons/finanzas.svg', title: 'Automatización de nómina', desc: 'Optimiza el cálculo, administración y procesamiento de la nómina, incluyendo la integración con instituciones bancarias.' },
        { icon: 'assets/icons/recursos.svg', title: 'Evaluación del personal', desc: 'Permite realizar evaluaciones de desempeño, planificar carreras y gestionar programas de capacitación.' },
        { icon: 'assets/icons/compras.svg', title: 'Gestión de beneficios', desc: 'Administra paquetes salariales, beneficios y bonificaciones de manera eficiente.' },
        { icon: 'assets/icons/existencias.svg', title: 'Salud ocupacional', desc: 'Maneja aspectos relacionados con la seguridad y bienestar de los empleados.' },
      ],
      sections: [
        {
          type: 'modules', title: 'Módulos',
          items: [
            { icon: 'assets/icons/existencias.svg', label: 'Recursos Humanos' }, { icon: 'assets/icons/finanzas.svg', label: 'Nómina' }, { icon: 'assets/icons/ventas.svg', label: 'Clima Laboral' },
          ],
        },
      ],
    },
    en: {
      name: 'Trebol HRM Cloud',
      tagline: 'HR and payroll, on a single platform',
      intro: [
        'An advanced, comprehensive solution designed to streamline human resources management and payroll processing for companies of any size. It offers a modern, intuitive interface that makes day-to-day administration efficient and easy to learn.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Intuitive interface', desc: 'A friendly user experience that simplifies navigating and managing information.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'End-to-end management', desc: 'Centralizes all personnel information, from recruitment through offboarding.' },
        { icon: 'assets/icons/finanzas.svg', title: 'Payroll automation', desc: 'Streamlines payroll calculation, administration, and processing, including integration with banking institutions.' },
        { icon: 'assets/icons/recursos.svg', title: 'Performance evaluation', desc: 'Run performance reviews, plan careers, and manage training programs.' },
        { icon: 'assets/icons/compras.svg', title: 'Benefits management', desc: 'Administer salary packages, benefits, and bonuses efficiently.' },
        { icon: 'assets/icons/existencias.svg', title: 'Occupational health', desc: 'Manage everything related to employee safety and well-being.' },
      ],
      sections: [
        {
          type: 'modules', title: 'Modules',
          items: [
            { icon: 'assets/icons/existencias.svg', label: 'Human Resources' }, { icon: 'assets/icons/finanzas.svg', label: 'Payroll' }, { icon: 'assets/icons/ventas.svg', label: 'Workplace Climate' },
          ],
        },
      ],
    },
  },

  'huawei-cloud': {
    cat: 'cloud',
    img: 'assets/img/huawei.jpg',
    es: {
      name: 'Huawei Cloud',
      tagline: 'Alojamiento en la nube para SAP Business One',
      intro: [
        'HUAWEI Cloud ofrece soluciones avanzadas para el alojamiento de SAP Business One, asegurando un entorno seguro y eficiente para tus operaciones comerciales. Su infraestructura en la nube se extiende a múltiples regiones, proporcionando baja latencia y alta disponibilidad, lo que es crucial para aplicaciones empresariales críticas. Con un enfoque en la innovación, HUAWEI permite a las empresas escalar sus operaciones y mejorar la integración de addons de SAP, facilitando la personalización y adaptación a las necesidades del negocio.',
      ],
      highlights: [
        { icon: 'assets/icons/versatilidad.svg', title: 'Multi-región', desc: 'Infraestructura distribuida que garantiza baja latencia y alta disponibilidad para aplicaciones críticas.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Entorno seguro', desc: 'Un entorno protegido y eficiente para tus operaciones comerciales sobre SAP Business One.' },
        { icon: 'assets/icons/recursos.svg', title: 'Escalabilidad', desc: 'Escala tus operaciones e integra add-ons de SAP adaptados a las necesidades del negocio.' },
      ],
      sections: [],
    },
    en: {
      name: 'Huawei Cloud',
      tagline: 'Cloud hosting for SAP Business One',
      intro: [
        'HUAWEI Cloud offers advanced hosting solutions for SAP Business One, ensuring a secure and efficient environment for your business operations. Its cloud infrastructure spans multiple regions, delivering low latency and high availability — crucial for mission-critical business applications. With a focus on innovation, HUAWEI lets companies scale their operations and improve SAP add-on integration, making it easy to customize and adapt to business needs.',
      ],
      highlights: [
        { icon: 'assets/icons/versatilidad.svg', title: 'Multi-region', desc: 'Distributed infrastructure that guarantees low latency and high availability for critical applications.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Secure environment', desc: 'A protected, efficient environment for your business operations on SAP Business One.' },
        { icon: 'assets/icons/recursos.svg', title: 'Scalability', desc: 'Scale your operations and integrate SAP add-ons tailored to your business needs.' },
      ],
      sections: [],
    },
  },

  'sky-one': {
    cat: 'cloud',
    img: 'assets/img/skyone.jpg',
    logo: 'assets/img/skyone-logo.png',
    stat: { value: '99.995%', label: { es: 'disponibilidad continua sobre Oracle Cloud', en: 'continuous availability on Oracle Cloud' } },
    es: {
      name: 'Sky.One',
      tagline: 'SAP Business One en la nube, sobre Oracle Cloud',
      intro: [
        'SKY.ONE se especializa en el alojamiento de SAP Business One en la nube, utilizando Oracle Cloud Infrastructure (OCI) para proporcionar un modelo de servicio escalable y eficiente. Su plataforma asegura una disponibilidad continua de hasta 99.995%, lo que permite a las empresas operar sin interrupciones. Con un enfoque en la transformación digital, SKY.ONE facilita la migración de aplicaciones SAP y la integración de addons, optimizando el rendimiento y reduciendo costos. Los servicios de copias de seguridad automatizadas y recuperación ante desastres brindan una capa adicional de seguridad, permitiendo que las empresas se concentren en su crecimiento y satisfacción del cliente.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Soluciones a medida', desc: 'Migración de aplicaciones SAP e integración de add-ons optimizando rendimiento y costos.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Enfoque en la seguridad', desc: 'Copias de seguridad automatizadas y recuperación ante desastres como capa adicional de protección.' },
        { icon: 'assets/icons/recursos.svg', title: 'Consultoría y soporte', desc: 'Acompañamiento en la transformación digital para que te concentres en crecer.' },
      ],
      sections: [],
    },
    en: {
      name: 'Sky.One',
      tagline: 'SAP Business One in the cloud, on Oracle Cloud',
      intro: [
        'SKY.ONE specializes in hosting SAP Business One in the cloud, using Oracle Cloud Infrastructure (OCI) to deliver a scalable, efficient service model. Its platform ensures continuous availability of up to 99.995%, letting companies operate without interruption. With a focus on digital transformation, SKY.ONE simplifies SAP application migration and add-on integration, optimizing performance and reducing costs. Automated backup and disaster-recovery services add an extra layer of security, so companies can stay focused on growth and customer satisfaction.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Tailored solutions', desc: 'SAP application migration and add-on integration that optimize performance and costs.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Security first', desc: 'Automated backups and disaster recovery as an additional layer of protection.' },
        { icon: 'assets/icons/recursos.svg', title: 'Consulting and support', desc: 'Guidance through your digital transformation so you can focus on growing.' },
      ],
      sections: [],
    },
  },

  'pos-b1': {
    cat: 'pos',
    img: 'assets/img/pos-b1.jpg',
    es: {
      name: 'POS B1',
      tagline: 'Punto de venta integrado con SAP Business One',
      intro: [
        'Sistema avanzado diseñado para facilitar las operaciones de tu negocio y mejorar la experiencia de compra de tus clientes. Desarrollado con tecnologías de última generación, POS B1 es compatible con Microsoft SQL Server y SAP HANA, brindando flexibilidad y continuidad en todas tus estaciones de trabajo.',
      ],
      highlights: [
        { icon: 'assets/icons/ventas.svg', title: 'Integración con SAP', desc: 'Punto de venta integrado con SAP Business One para comercios minoristas y empresas con operaciones de venta directa.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Compatibilidad', desc: 'Compatible con Microsoft SQL Server y SAP HANA, con flexibilidad y continuidad en todas tus estaciones de trabajo.' },
        { icon: 'assets/icons/pymes.svg', title: 'Experiencia de compra', desc: 'Operaciones ágiles que mejoran la experiencia de tus clientes en el piso de venta.' },
      ],
      sections: [
        {
          type: 'modules', title: 'Suite LYNX',
          intro: 'Complementa tu operación comercial con los módulos de la Suite LYNX:',
          items: [
            { icon: 'assets/icons/ventas.svg', label: 'Sales By Lynx' }, { icon: 'assets/icons/existencias.svg', label: 'Stock By Lynx' }, { icon: 'assets/icons/manufactura.svg', label: 'PM By Lynx' },
          ],
        },
      ],
    },
    en: {
      name: 'POS B1',
      tagline: 'Point of sale, integrated with SAP Business One',
      intro: [
        'An advanced system designed to streamline your business operations and improve your customers’ shopping experience. Built with state-of-the-art technology, POS B1 is compatible with Microsoft SQL Server and SAP HANA, giving you flexibility and continuity across all your workstations.',
      ],
      highlights: [
        { icon: 'assets/icons/ventas.svg', title: 'SAP integration', desc: 'A point of sale integrated with SAP Business One, built for retailers and companies with direct-sales operations.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Compatibility', desc: 'Compatible with Microsoft SQL Server and SAP HANA, with flexibility and continuity across every workstation.' },
        { icon: 'assets/icons/pymes.svg', title: 'Better checkout', desc: 'Fast, reliable operations that improve the customer experience on the sales floor.' },
      ],
      sections: [
        {
          type: 'modules', title: 'LYNX Suite',
          intro: 'Complete your retail operation with the LYNX Suite modules:',
          items: [
            { icon: 'assets/icons/ventas.svg', label: 'Sales By Lynx' }, { icon: 'assets/icons/existencias.svg', label: 'Stock By Lynx' }, { icon: 'assets/icons/manufactura.svg', label: 'PM By Lynx' },
          ],
        },
      ],
    },
  },

  'medical-suite': {
    cat: 'medical',
    img: 'assets/img/medical-suite.jpg',
    es: {
      name: 'Medical Suite',
      tagline: 'Plataforma integral para la gestión hospitalaria',
      intro: [
        'La gestión de una institución de salud requiere precisión, eficiencia y control en cada uno de sus procesos. Hospital Suite está diseñada para optimizar todas las áreas de operación de clínicas y hospitales, integrando desde la atención médica hasta los procesos administrativos y financieros, todo en una sola plataforma.',
        'Hospital Suite se adapta fácilmente a cualquier entorno de ERP como SAP Business One, S/4HANA o Dynamics, permitiendo una gestión fluida y centralizada.',
      ],
      highlights: [],
      sections: [
        {
          type: 'leads', title: 'Módulos principales',
          items: [
            { lead: 'Hospitalización', text: 'Gestión completa de la admisión, estancia y alta del paciente; asignación de camas y monitoreo de ocupación; integración con recetas médicas y control de medicamentos; facturación automática basada en los servicios recibidos.' },
            { lead: 'Consultorios', text: 'Administración de consultorios médicos con asignación de personal y recursos; registro de consultas, procedimientos y servicios adicionales; facturación automática y en tiempo real con el ERP, ajustada a políticas de precios institucionales o convenios con aseguradoras.' },
            { lead: 'Atención ambulatoria', text: 'Programación y gestión de citas para consultas externas; dispensación de medicamentos y control de servicios recibidos; cierre de cuentas automatizado integrando precios, seguros y políticas definidas en el ERP.' },
            { lead: 'Urgencias', text: 'Administración completa de la atención de urgencias con asignación automática de triage; monitoreo de salas con alertas visuales y personalizables; control de cargos y medicamentos con integración en tiempo real al ERP.' },
            { lead: 'Quirófanos', text: 'Asignación de personal médico, equipos y materiales para cada cirugía; bitácoras detalladas con carga automática de procedimientos y materiales; control de costos ajustado a paquetes quirúrgicos o plantillas predefinidas.' },
            { lead: 'Registros médicos electrónicos', text: 'Expedientes clínicos integrados, accesibles desde cualquier dispositivo; formularios médicos personalizables por especialidad; integración con firma electrónica y certificación normativa, garantizando seguridad y confidencialidad.' },
          ],
        },
        {
          type: 'leads', title: 'Beneficios clave',
          items: [
            { lead: 'Automatización completa', text: 'Desde la gestión de camas y recursos hasta la facturación de servicios, Hospital Suite automatiza cada paso para garantizar eficiencia y precisión.' },
            { lead: 'Integración en tiempo real', text: 'Todos los módulos están conectados en tiempo real con los sistemas ERP, permitiendo un flujo continuo de información entre áreas administrativas y operativas.' },
            { lead: 'Acceso móvil y web', text: 'Disponible en cualquier dispositivo móvil o navegador, proporcionando acceso instantáneo a los datos desde cualquier lugar.' },
            { lead: 'Escalabilidad', text: 'Diseñado para adaptarse tanto a pequeñas clínicas como a redes hospitalarias. Hospital Suite crece junto con las necesidades de la institución.' },
            { lead: 'Análisis de datos y KPIs', text: 'Genera reportes personalizados e indicadores clave de desempeño, permitiendo tomar decisiones informadas basadas en datos actualizados en tiempo real.' },
          ],
        },
        {
          type: 'text', title: '',
          paras: ['Con Hospital Suite las instituciones de salud pueden mejorar significativamente la gestión operativa, reducir costos y proporcionar una atención más eficiente y de calidad a los pacientes.'],
        },
      ],
    },
    en: {
      name: 'Medical Suite',
      tagline: 'A complete platform for hospital management',
      intro: [
        'Running a healthcare institution demands precision, efficiency, and control across every process. Hospital Suite is designed to optimize every operational area of clinics and hospitals, integrating everything from medical care to administrative and financial processes on a single platform.',
        'Hospital Suite adapts easily to any ERP environment — SAP Business One, S/4HANA, or Dynamics — enabling smooth, centralized management.',
      ],
      highlights: [],
      sections: [
        {
          type: 'leads', title: 'Core modules',
          items: [
            { lead: 'Inpatient care', text: 'Complete management of patient admission, stay, and discharge; bed assignment and occupancy monitoring; integration with prescriptions and medication control; automatic billing based on the services each patient receives.' },
            { lead: 'Physician offices', text: 'Manage medical offices with staff and resource assignment; record consultations, procedures, and additional services; automatic, real-time ERP billing aligned to institutional pricing policies or insurer agreements.' },
            { lead: 'Outpatient care', text: 'Appointment scheduling and management for outpatient visits; medication dispensing and service tracking; automated account closing that integrates pricing, insurance, and ERP-defined policies.' },
            { lead: 'Emergency room', text: 'Complete ER management with automatic triage assignment; room monitoring with visual, customizable alerts; charge and medication control with real-time ERP integration.' },
            { lead: 'Operating rooms', text: 'Assign medical staff, equipment, and materials for each surgery; detailed logs with automatic capture of procedures and materials used; cost control aligned to surgical packages or predefined templates.' },
            { lead: 'Electronic medical records', text: 'Integrated clinical records accessible anytime, from any device; customizable medical forms per specialty; integration with electronic signature and regulatory certification, guaranteeing security and confidentiality.' },
          ],
        },
        {
          type: 'leads', title: 'Key benefits',
          items: [
            { lead: 'Full automation', text: 'From bed and resource management to service billing, Hospital Suite automates every step to guarantee efficiency and precision.' },
            { lead: 'Real-time integration', text: 'Every module connects to your ERP in real time, keeping information flowing between administrative and operational areas.' },
            { lead: 'Mobile and web access', text: 'Available on any mobile device or browser, giving you instant access to data from anywhere.' },
            { lead: 'Scalability', text: 'Designed for everything from small clinics to hospital networks — Hospital Suite grows with your institution.' },
            { lead: 'Analytics and KPIs', text: 'Generates custom reports and key performance indicators for informed decisions based on real-time data.' },
          ],
        },
        {
          type: 'text', title: '',
          paras: ['With Hospital Suite, healthcare institutions can significantly improve operational management, reduce costs, and deliver more efficient, higher-quality patient care.'],
        },
      ],
    },
  },

  'facturacion-electronica': {
    cat: 'billing',
    img: 'assets/img/facturacion.jpg',
    es: {
      name: 'Facturación Electrónica',
      tagline: 'Cumple con la DGII y factura sin papel',
      intro: [
        'La facturación electrónica es el sistema más eficiente y seguro para gestionar las transacciones comerciales en República Dominicana. Cumple con las normativas de la DGII, reduce el uso de papel, mejora la precisión y la rapidez en el procesamiento de tus facturas.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Cumple con la normativa de la DGII', desc: 'Emisión de comprobantes fiscales electrónicos conforme a la regulación dominicana.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Ahorro de tiempo y recursos', desc: 'Menos papel, menos procesos manuales, más agilidad.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Seguridad y trazabilidad', desc: 'Cada comprobante queda registrado, validado y auditable.' },
        { icon: 'assets/icons/recursos.svg', title: 'Accesibilidad y almacenamiento', desc: 'Tus facturas disponibles de forma digital, cuando las necesites.' },
      ],
      sections: [
        {
          type: 'steps', title: 'Beneficios clave',
          items: [
            { lead: 'Integración sencilla', text: 'Integra tu sistema de facturación electrónica con los principales softwares contables como son SAP BUSINESS ONE y S/4 HANA.' },
            { lead: 'Reducción de costos', text: 'Elimina los gastos de impresión, almacenamiento físico y envío de facturas en papel.' },
            { lead: 'Mejora en la relación con tus clientes', text: 'Envía facturas de manera instantánea y permite a tus clientes recibir y validar la información en tiempo real.' },
          ],
        },
        {
          type: 'steps', title: '¿Cómo funciona?',
          items: [
            { lead: 'Emisión', text: 'Genera la factura electrónica y recibe el código de autorización electrónica (CAE) de la DGII.' },
            { lead: 'Envío', text: 'Envía la factura electrónica a tu cliente de forma automática por correo electrónico.' },
            { lead: 'Recepción y almacenamiento', text: 'Tanto tú como tu cliente podrán acceder a la factura de manera digital cumpliendo con todos los requisitos legales.' },
          ],
        },
      ],
    },
    en: {
      name: 'Electronic Billing',
      tagline: 'DGII-compliant, paperless invoicing',
      intro: [
        'Electronic billing is the most efficient and secure system for managing business transactions in the Dominican Republic. It complies with DGII regulations, reduces paper usage, and improves the accuracy and speed of invoice processing.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'DGII compliant', desc: 'Electronic tax receipts issued in full compliance with Dominican regulations.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Saves time and resources', desc: 'Less paper, fewer manual processes, more agility.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Security and traceability', desc: 'Every receipt is recorded, validated, and auditable.' },
        { icon: 'assets/icons/recursos.svg', title: 'Accessibility and storage', desc: 'Your invoices available digitally, whenever you need them.' },
      ],
      sections: [
        {
          type: 'steps', title: 'Key benefits',
          items: [
            { lead: 'Easy integration', text: 'Integrate your electronic invoicing system with leading accounting software such as SAP BUSINESS ONE and S/4HANA.' },
            { lead: 'Cost reduction', text: 'Eliminates the expenses of printing, physical storage, and shipping of paper invoices.' },
            { lead: 'A better customer relationship', text: 'Send invoices instantly and let your customers receive and validate information in real time.' },
          ],
        },
        {
          type: 'steps', title: 'How does it work?',
          items: [
            { lead: 'Issuance', text: 'Generate the electronic invoice and receive the electronic authorization code (CAE) from the DGII.' },
            { lead: 'Delivery', text: 'Automatically send the electronic invoice to your customer via email.' },
            { lead: 'Reception and storage', text: 'Both you and your client can access the invoice digitally, complying with all legal requirements.' },
          ],
        },
      ],
    },
  },

  'microsoft-365': {
    cat: 'microsoft',
    img: 'assets/img/microsoft-365.jpg',
    es: {
      name: 'Microsoft 365 para empresas',
      tagline: 'Productividad y seguridad para cada tamaño de empresa',
      intro: [
        'Optimiza la productividad de tu negocio con nuestros planes para empresas. Desde el Microsoft 365 Business Basic, que incluye herramientas esenciales, hasta el Microsoft 365 Business Premium, que combina seguridad avanzada y funciones completas de productividad.',
        'Para grandes organizaciones, nuestros planes Enterprise ofrecen capacidades avanzadas de seguridad y cumplimiento, así como herramientas de colaboración de alto rendimiento.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Para MiPymes', desc: 'Microsoft 365 Business Basic, Standard y Premium: desde herramientas esenciales hasta seguridad avanzada.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Para empresas grandes', desc: 'Planes Enterprise E1, E3 y E5 con capacidades avanzadas de seguridad, cumplimiento y colaboración.' },
        { icon: 'assets/icons/recursos.svg', title: 'Acompañamiento FMP', desc: 'Te asesoramos en la elección del plan adecuado y en todo el proceso de activación.' },
      ],
      sections: [
        {
          type: 'modules', title: 'Planes disponibles',
          items: [
            { icon: '▫', label: 'Business Basic' }, { icon: '▪', label: 'Business Standard' }, { icon: '◆', label: 'Business Premium' },
            { icon: '▫', label: 'Enterprise E1' }, { icon: '▪', label: 'Enterprise E3' }, { icon: '◆', label: 'Enterprise E5' },
          ],
        },
      ],
    },
    en: {
      name: 'Microsoft 365 for business',
      tagline: 'Productivity and security for every company size',
      intro: [
        'Boost your business productivity with our company plans. From Microsoft 365 Business Basic, which includes the essential tools, to Microsoft 365 Business Premium, which combines advanced security with a full productivity suite.',
        'For large organizations, our Enterprise plans deliver advanced security and compliance capabilities along with high-performance collaboration tools.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'For SMBs', desc: 'Microsoft 365 Business Basic, Standard, and Premium: from essential tools to advanced security.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'For large enterprises', desc: 'Enterprise E1, E3, and E5 plans with advanced security, compliance, and collaboration capabilities.' },
        { icon: 'assets/icons/recursos.svg', title: 'FMP guidance', desc: 'We help you choose the right plan and walk you through the entire activation process.' },
      ],
      sections: [
        {
          type: 'modules', title: 'Available plans',
          items: [
            { icon: '▫', label: 'Business Basic' }, { icon: '▪', label: 'Business Standard' }, { icon: '◆', label: 'Business Premium' },
            { icon: '▫', label: 'Enterprise E1' }, { icon: '▪', label: 'Enterprise E3' }, { icon: '◆', label: 'Enterprise E5' },
          ],
        },
      ],
    },
  },

  'office-365': {
    cat: 'microsoft',
    img: 'assets/img/office-365.webp',
    es: {
      name: 'Office',
      tagline: 'Licencias perpetuas de Microsoft Office',
      intro: [
        'En FMP Technology Services te ofrecemos la posibilidad de acceder a las aplicaciones esenciales de Microsoft Office de forma permanente, sin suscripciones ni pagos recurrentes. Contamos con versiones oficiales y 100% legales de Office Home & Student 2021, Home & Business 2021, y Professional 2021, diseñadas para cubrir las necesidades de estudiantes, profesionales independientes y pequeñas empresas.',
        'Estas licencias perpetuas te permiten instalar las aplicaciones clásicas como Word, Excel, PowerPoint y Outlook (según la versión elegida) en tu equipo, garantizando estabilidad, seguridad y productividad a largo plazo. Es una solución ideal para quienes buscan una inversión única en herramientas de oficina confiables, sin depender de la nube o del pago mensual.',
        'Nuestro equipo te asesora en la elección de la versión más adecuada según tu perfil o actividad, y te acompaña durante todo el proceso de activación e instalación para asegurar una experiencia sin complicaciones.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Home & Student 2021', desc: 'Para estudiantes: las aplicaciones esenciales con un solo pago.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Home & Business 2021', desc: 'Para profesionales independientes: incluye Outlook para gestionar tu correo.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Professional 2021', desc: 'Para pequeñas empresas: la suite completa de productividad.' },
      ],
      sections: [],
    },
    en: {
      name: 'Office',
      tagline: 'Perpetual Microsoft Office licenses',
      intro: [
        'At FMP Technology Services we give you permanent access to the essential Microsoft Office applications — no subscriptions, no recurring payments. We offer official, 100% legal versions of Office Home & Student 2021, Home & Business 2021, and Professional 2021, designed to cover the needs of students, independent professionals, and small businesses.',
        'These perpetual licenses let you install the classic applications — Word, Excel, PowerPoint, and Outlook (depending on the edition) — on your computer, guaranteeing stability, security, and productivity for the long run. It’s the ideal solution for anyone looking for a one-time investment in reliable office tools, without depending on the cloud or a monthly payment.',
        'Our team helps you choose the edition that best fits your profile or activity, and guides you through the entire activation and installation process for a hassle-free experience.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Home & Student 2021', desc: 'For students: the essential apps with a single payment.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Home & Business 2021', desc: 'For independent professionals: includes Outlook for managing your email.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Professional 2021', desc: 'For small businesses: the complete productivity suite.' },
      ],
      sections: [],
    },
  },

  windows: {
    cat: 'microsoft',
    img: 'assets/img/windows.jpg',
    es: {
      name: 'Windows',
      tagline: 'Sistemas operativos para tu infraestructura',
      intro: [
        'En FMP Technology Services, te ofrecemos una amplia selección de sistemas operativos Windows diseñados para adaptarse a las necesidades específicas de tu entorno tecnológico. Puedes elegir entre Windows 10 Pro, Windows 11 Pro y Windows Server, cada uno optimizado para ofrecer un rendimiento robusto, estabilidad y seguridad.',
        'Ya sea que necesites un sistema confiable para estaciones de trabajo individuales, equipos de alto rendimiento para profesionales, o servidores potentes para gestionar redes empresariales, contamos con la solución ideal. Nuestro equipo se encargará de la instalación, configuración y mantenimiento, asegurando que cada sistema operativo funcione a la perfección con tu infraestructura existente.',
        'Confía en FMP Technology Services para garantizarte una experiencia de usuario fluida, actualizaciones constantes y un soporte técnico especializado que te acompañará en cada paso.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Windows 10 / 11 Pro', desc: 'Estaciones de trabajo confiables y equipos de alto rendimiento para profesionales.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Windows Server', desc: 'Servidores potentes para gestionar redes empresariales completas.' },
        { icon: 'assets/icons/recursos.svg', title: 'Instalación y soporte', desc: 'Instalación, configuración, mantenimiento y soporte técnico especializado.' },
      ],
      sections: [],
    },
    en: {
      name: 'Windows',
      tagline: 'Operating systems for your infrastructure',
      intro: [
        'At FMP Technology Services we offer a wide selection of Windows operating systems designed to fit the specific needs of your technology environment. Choose between Windows 10 Pro, Windows 11 Pro, and Windows Server — each optimized for robust performance, stability, and security.',
        'Whether you need a reliable system for individual workstations, high-performance machines for professionals, or powerful servers to manage enterprise networks, we have the right solution. Our team handles installation, configuration, and maintenance, making sure every operating system runs flawlessly with your existing infrastructure.',
        'Trust FMP Technology Services for a smooth user experience, constant updates, and specialized technical support with you at every step.',
      ],
      highlights: [
        { icon: 'assets/icons/pymes.svg', title: 'Windows 10 / 11 Pro', desc: 'Reliable workstations and high-performance machines for professionals.' },
        { icon: 'assets/icons/versatilidad.svg', title: 'Windows Server', desc: 'Powerful servers to manage complete enterprise networks.' },
        { icon: 'assets/icons/recursos.svg', title: 'Installation and support', desc: 'Installation, configuration, maintenance, and specialized technical support.' },
      ],
      sections: [],
    },
  },

  addons: {
    cat: 'addons',
    img: 'assets/img/addons.jpg',
    es: {
      name: "Addon's",
      tagline: 'Verticales que completan tu ciclo de negocio',
      intro: [
        'Somos el Partner de SAP que más addons o verticales ofrece en su portafolio para complementar el 360 de los procesos de negocio. Potencia tu experiencia con nuestras soluciones adicionales:',
      ],
      highlights: [
        { icon: 'assets/icons/reportes.svg', title: 'Localización fiscal', desc: 'Adaptación a normativas locales para República Dominicana, México, Guatemala y Venezuela.' },
        { icon: 'assets/icons/finanzas.svg', title: 'Caja chica', desc: 'Gestión eficiente de pequeños gastos.' },
        { icon: 'assets/icons/compras.svg', title: 'Viáticos', desc: 'Control y administración de gastos de viaje.' },
        { icon: 'assets/icons/manufactura.svg', title: 'Mantenimiento', desc: 'Soporte y gestión de activos.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Conciliación bancaria', desc: 'Automatización del proceso de conciliación.' },
        { icon: 'assets/icons/existencias.svg', title: 'Requisiciones', desc: 'Optimización en la gestión de pedidos y compras.' },
      ],
      sections: [],
    },
    en: {
      name: 'Add-ons',
      tagline: 'Verticals that complete your business cycle',
      intro: [
        'We are the SAP Partner with the most add-ons and verticals in our portfolio, built to complement the full 360 of your business processes. Power up your experience with our additional solutions:',
      ],
      highlights: [
        { icon: 'assets/icons/reportes.svg', title: 'Tax localization', desc: 'Adaptation to local regulations for the Dominican Republic, Mexico, Guatemala, and Venezuela.' },
        { icon: 'assets/icons/finanzas.svg', title: 'Petty cash', desc: 'Efficient management of small expenses.' },
        { icon: 'assets/icons/compras.svg', title: 'Travel expenses', desc: 'Control and administration of travel spending.' },
        { icon: 'assets/icons/manufactura.svg', title: 'Maintenance', desc: 'Asset support and management.' },
        { icon: 'assets/icons/adaptacion.svg', title: 'Bank reconciliation', desc: 'Automation of the reconciliation process.' },
        { icon: 'assets/icons/existencias.svg', title: 'Requisitions', desc: 'Streamlined order and purchasing management.' },
      ],
      sections: [],
    },
  },
}
