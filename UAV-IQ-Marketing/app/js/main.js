$(document).ready(function(){
  var objDiv = document.getElementById("parent-list");

  var dict ={
        "Wondering How To Make Remote Sensing Work For You?": {
          en: "Wondering How To Make Remote Sensing Work For You?",
          sp: "Agricultura de Precisión, Integrada a sus Operaciones Diarias y Estratégicas"
        },
        "Our mobile enterprise software turns your drone-acquired precision agriculture data into actionable information. Mitigate loss, optimize resources and improve your yields.": {
          en: "Our mobile enterprise software turns your drone-acquired precision agriculture data into actionable information. Mitigate loss, optimize resources and improve your yields.",
          sp: "Transforme los datos de agricultura de precisión recolectados con drones en información concreta.  Mitigue las pérdidas, optimize los recursos, mejore su rendimiento."
        },
        "Talk To Us":{
          en: "Talk To Us",
          sp: "Contáctanos",
        },
        "to create a FREE account":{
          en: "to create a FREE account",
          sp: "para crear tu cuenta GRATIS",
        },
        "Use Aerial Imagery for Better Farm Management":{
          en: "Use Aerial Imagery for Better Farm Management:",
          sp: "Imágenes Aéreas para una Mejor Gestión Agrícola:"
        },

        "PICK YOUR INDUSTRY:":{
          en: "PICK YOUR INDUSTRY:",
          sp: "ESCOJA SU INDUSTRIA:"
        },
        "Wine Industry":{
          en: "Wine Industry",
          sp: "Vitivinicultura"
        },
        "Fruit & Nut Production":{
          en: "Fruit & Nut Production",
          sp: "Producción Hortofrutícola"
        },

        "Learn more":{
          en: "Learn more >>",
          sp: "Conocer más >>"
        },

        "Identify Trends, Examine Localized Issues…":{
          en: "Identify Trends, Examine Localized Issues…",
          sp: "Identifique Tendencias, Examine y Localice Problemas..."
        },

        "IMPROVE YOUR RESULTS":{
          en: "IMPROVE YOUR RESULTS",
          sp: "MEJORE SUS RESULTADOS"
        },

        "Observe - Orient - Decide - Act":{
          en: "Observe - Orient - Decide - Act",
          sp: "Observe - Oriente - Decida - Actúe"
        },

        "Intuitive displays and precise ground details allow you to rapidly assess your fields":{
          en: "Intuitive displays and precise ground details allow you to rapidly assess your fields",
          sp: "Visualización intuitiva y detalles precisos del terreno permiten evaluar sus campos rápidamente"
        },

        "Compare images from different time periods or view different contrasts from the same flight":{
          en: "Compare images from different time periods or view different contrasts from the same flight",
          sp: "Compare imágenes de fechas diferentes o con diferentes contrastes del mismo vuelo"
        },

        "Task team members with targeted inspection requests":{
          en:"Task team members with targeted inspection requests",
          sp:"Encargue inspecciones dirigidas a su equipo"
        },

        "Take geolocalized field notes and pictures":{
          en:"Take geolocalized field notes and pictures",
          sp:"Tome fotos y notas geolocalizadas en el campo"
        },

        "Agriculture data is not only used once - index and store your data for future use":{
          en:"Agriculture data is not only used once - index and store your data for future use",
          sp:"Los datos agricolas no se ocupan sólo una vez - catalogue y almacene sus datos para usos futuros"
        },

        "Offline data collection for operating in remote fields":{
          en:"Offline data collection for operating in remote fields",
          sp:"Recolección de datos offline para poder trabajar en zonas sin señal"
        } ,

        "Recall prior observations at any time - in the field or the office":{
          en:"Recall prior observations at any time - in the field or the office",
          sp:"Acceda a observaciones anteriores en cualquier momento - desde el campo o la oficina"
        },

        "Define zones for efficient variable rate cultivation":{
          en:"Define zones for efficient variable rate cultivation",
          sp:"Defina zonas para implementar un manejo sitio-especifico eficiente"
        },

        "Incorporate historic data such as yield maps":{
          en:"Incorporate historic data such as yield maps",
          sp:"Incorpore datos históricos (ej: mapas de rendimiento)"
        },

        "featured in":{
          en:"featured in",
          sp:"Mencionados en"
        },

        "Want to start using the tools but need an imagery provider?":{
          en:"Want to start using the tools but need an imagery provider?",
          sp:"¿Necesita un proveedor de imágenes?"
        },

        "Book a flight now":{
          en:"Book a flight now",
          sp:"Reserve un vuelo ahora"
        },

        "Already have an imagery provider and are interested in using our tools?":{
          en:"Already have an imagery provider and are interested in using our tools?",
          sp:"¿Ya tiene imágenes y quiere utilizar nuestros softwares?"
        },

        "Utilize your data on our Apps":{
          en:"Utilize your data on our Apps",
          sp:"Pruebe nuestras Applicaciones"
        },

        "Home": {
          en:"Home",
          sp:"Inicio",
        },

        "Data Collection":{
          en:"Data Collection",
          sp:"Adquisición de Datos",
        },

        "Enterprise Software":{
          en:"Enterprise software",
          sp:"Software Empresarial",
        },

        "Wine Flight":{
          en:"WineFlight",
          sp:"WineFlight",
        },

        "Instafarm":{
          en:"InstaFarm",
          sp:"InstaFarm",
        },

        "Products":{
          en:"Products",
          sp:"Nuestros Mapas",
        },

        "Drone Operators":{
          en:"Drone Operators",
          sp:"Procesamiento de Datos",
        },

        "Post-Flight Cloud Data Processing. No Further Investment Required":{
          en:"Post-Flight Cloud Data Processing. No Further Investment Required",
          sp:"Proceso de datos en la nube post vuelo. No requiere inversiones adicionales.",
        },

        "GET STARTED NOW":{
          en:"Get Started Now",
          sp:"Comience ahora",
        },

        "We help drone service providers around the world grow their businesses by providing no cost processing and ensuring their clients have the tools required to fully adopt remote sensing technology":{
          en:"We help drone service providers around the world grow their businesses by providing no cost processing and ensuring their clients have the tools required to fully adopt remote sensing technology",
          sp:"Ayudamos a los proveedores de tomas aéreas con drones para la agricultura, a crecer sus negocios. Ofrecemos el procesamiento de datos sin costo y aseguramos que sus clientes tendrán a mano las herramientas que requieran para sacar el máximo provecho de la tecnología de teledetección",
        },

        "Upload your Data":{
          en:"Upload your Data",
          sp:"Suba sus archivos"
        },

        "We provide easy to use tools that upload imagery directly to our servers":{
          en:"We provide easy to use tools that upload imagery directly to our servers",
          sp:"Le entregaremos herramientas fáciles de usar para poder subir imágenes georeferenciada directamente a nuestros servidores"
        },

        "Cloud Processing and Storage":{
          en:"Cloud Processing and Storage",
          sp:"Procesamiento y almacenamiento en la nube"
        },

        "We process imagery into comprehensive intuitive visual presentations or crop health We'll also provide a storage solution so customers can compare current to past results":{
          en:"We process imagery into comprehensive intuitive visual presentations or crop health We'll also provide a storage solution so customers can compare current to past results",
          sp:"Procesamos los datos en mapas de vigor y otros productos visualmente comprensibles. Proveemos una solución de almacenamiento para que los usuarios puedan comparar resultados actuales y anteriores"
        },

        "Delivery on First of the Class Ag Tool":{
          en:"Delivery on First of the Class Ag Tool",
          sp:"Entrega en una plataforma diseñada para la agricultura"
        },

        "We built the tools your clients need to make the most of their data":{
          en:"We built the tools your clients need to make the most of their data",
          sp:"Construimos herramientas en base a lo que industría agricola necesita para sacar el maximo provecho de sus datos"
        },

        "Take Your Precision Agriculture to the Next Level":{
          en:"Take Your Precision Agriculture to the Next Level",
          sp:"Lleve la agricultura de presición al próximo nivel"
        },

        "Focus on customer acquisition and flight operations - we'll make sure your clients are satisfied":{
          en:"Focus on customer acquisition and flight operations - we'll make sure your clients are satisfied",
          sp:"Enfoquese en adquirir clientes y realizar los vuelos -  nos aseguraremos de que sus clientes esten satisfechos"
        },

        "Help your clients get the most of the data you collect.":{
          en:"Help your clients get the most of the data you collect.",
          sp:"Ayude a sus clientes a sacar el mejor provecho de los datos recolectados"
        },

        "We won’t eat your margin & we don’t increase your risk of getting started with overhead":{
          en:"We won’t eat your margin & we don’t increase your risk of getting started with overhead",
          sp:"No afectamos su margen y no aumentaremos sus costos fijos"
        },

        "NDVI, Additional Crop Indices, Digital Surface Models and Advanced Analysis such as Hydrology Mapping… Learn more about the imagery products we can deliver to your clients:":{
          en:"NDVI, Additional Crop Indices, Digital Surface Models and Advanced Analysis such as Hydrology Mapping… Learn more about the imagery products we can deliver to your clients:",
          sp:"NDVI, otros indices de cultivo, modelo digital de superficies y análisis avanzados como  mapas hidrológicos... Más información sobre los tipos de imágenes que podemos entregar a sus clientes:"
        },

        "Maximize Your Vineyard’s Potential":{
          en:"Maximize Your Vineyard’s Potential",
          sp:"Maximice El Potencial De Su Viñedo"
        },

        "Precision agriculture software that enables you to identify and manage variability to increase your bottom-line.":{
          en:"Precision agriculture software that enables you to identify and manage variability to increase your bottom-line.",
          sp:"Software de agricultura de precisión que le permite identificar y gestionar la variabilidad del viñedo para mejorar sus utilidades"
        },

        "to create a free demo account":{
          en:"to create a free demo account",
          sp:"para crear su cuenta GRATIS"
        },
        "Actionable Data Delivered to all of Your Team Members’ Devices. Collaborate & Make Confident, Accurate Decisions.":{
          en:"Actionable Data Delivered to all of Your Team Members’ Devices. Collaborate & Make Confident, Accurate Decisions.",
          sp:"Información concreta entregada en los dispositivos de su equipo de trabajo. Tome decisiones precisas, con confianza."
        },

        "Access Your Data from Anywhere":{
          en:"Access Your Data from Anywhere",
          sp:"Acceda a sus datos desde cualquier lugar"
        },

        "Analyze your data in the office. Ground truth your findings and take action in the field.":{
          en:"Analyze your data in the office. Ground truth your findings and take action in the field.",
          sp:"Analice los datos en la oficina. Verifique sus hallazgos en terreno."
        },

        "Analyze the Evolution of Your Field":{
          en:"Analyze the Evolution of Your Field",
          sp:"Analice la evolución de su campo"
        },

        "Notice the changes at different phenological stages or seasons and see the results of your field management.":{
          en:"Notice the changes at different phenological stages or seasons and see the results of your field management.",
          sp:"Note lo cambios de diferentes estados fenológicos y los resultados de su gestión predial."
        },

        "Better Collaborate with Your Team":{
          en:"Better Collaborate with Your Team",
          sp:"Mejore la colaboración con su equipo"
        },

        "Guide and task your team to areas that require attention and easily report and share observations.":{
          en:"Guide and task your team to areas that require attention and easily report and share observations.",
          sp:"Guíe a su equipo hacía zonas que requieran atención, informe y comparta fácilmente observaciones."
        },

        "Stop the Guess Work. Get Accurate Information":{
          en:"Stop the Guess Work. Get Accurate Information",
          sp:"Deje de Lado las Suposiciones. Obtenga Información Precisa."
        },

        "Monitor change, manage quality and get better yield estimations thanks to accurate imagery and precise stats":{
          en:"Monitor change, manage quality and get better yield estimations thanks to accurate imagery and precise stats",
          sp:"Saque el máximo provecho de su terreno, sepa qué calidad esperar y obtenga una mejor estimación del rendimiento."
        },

        "How Does It Work?":{
          en:"How Does It Work?",
          sp:"¿Cómo funciona?"
        },
        "Collect data of your field with your drone or book a flight with one of our certified drone operators.":{
          en:"Collect data of your field with your drone or book a flight with one of our certified drone operators.",
          sp:"Recolecte datos en su campo con su dron o reserve un vuelo con uno de nuestros pilotos certificados"
        },

        "Learn more our data collection services":{
          en:"Learn more about our data collection services",
          sp:"Ver más"
        },

        "The collected data is sent to the cloud for rapid processing":{
          en:"The collected data is sent to the cloud for rapid processing",
          sp:"Los datos se suben a la nube para un procesamiento rápido"
        },

        "We deliver high quality health maps & additional imagery products to all your devices":{
          en:"We deliver high quality health maps & additional imagery products to all your devices",
          sp:"Entregamos mapas de salud de cultivos y otras imágenes de alta calidad en todos sus dispositivos"
        },
        "Discover our imagery products":{
          en:"Discover our imagery products",
          sp:"Descubra los diversos tipos de imágenes"
        },

        "Ensure Your Best Grapes Make Your Best Wine":{
          en:"Ensure Your Best Grapes Make Your Best Wine",
          sp:"Asegura que sus mejores uvas produzcan su mejor vino"
        },

        "Take advantage of your terroir by determining quality zones":{
          en:"Take advantage of your terroir by determining quality zones",
          sp:"Saque el mejor provecho de su terroir, delimitando zonas de calidad"
        },

        "Ask for inspections and grape sampling":{
          en:"Ask for inspections and grape sampling",
          sp:"Solicite inspecciones y muestreo de uvas"
        },

        "Detect and manage hydric stress":{
          en:"Detect and manage hydric stress",
          sp:"Detecte y maneje el estrés hídrico"
        },

        "Design and implement a detailed harvest plan":{
          en:"Design and implement a detailed harvest plan",
          sp:"Diseñe e implemente detalladamente el plan de cosecha"
        },

        "Adopt Good Farming Practices":{
          en:"Adopt Good Farming Practices",
          sp:"Adopte buenas prácticas agrícolas"
        },

        "Implement variable rate cultivation to optimize use of inputs":{
          en:"Implement variable rate cultivation to optimize use of inputs",
          sp:"Implemente un manejo sitio-especifico y mejore la homogeneidad de la parcela para limitar el uso de insumos."
        },

        "Optimize water ressources":{
          en:"Optimize water ressources",
          sp:"Optimice los recursos hídricos"
        },

        "Identify pests and disease, assess severity of damage":{
          en:"Identify pests and disease, assess severity of damage",
          sp:"Identifique plagas y enfermedades, evalúe la severidad del daño"
        },

        "Detect problems before they are visible to the naked eyes":{
          en:"Detect problems before they are visible to the naked eyes",
          sp:"Detecte problemas antes de ser observados a simple vista"
        },

        "Qualitatively and quantitatively evaluate your vineyard's health over time":{
          en:"Qualitatively and quantitatively evaluate your vineyard's health over time",
          sp:"Evalúe cualitativamente y cuantitativamente la salud de su viñedo a lo largo del tiempo"
        },

        "The WineFlight Advantages For":{
          en:"The WineFlight Advantages For",
          sp:"Las Ventajas de WineFlight Para"
        },

        "Consultant":{
          en:"Consultant",
          sp:"El Asesor"
        },

        "Better prepare your visit to your clients":{
          en:"Better prepare your visit to your clients",
          sp:"Mejore la preparación de las visitas en terreno"
        },

        "Request inspections and sampling":{
          en:"Request inspections and sampling",
          sp:"Solicite inspecciones y muestras"
        },

        "Share pictures, notes with your clients":{
          en:"Share pictures, notes with your clients",
          sp:"Comparta fotos y notas con sus clientes"
        },

        "Vineyard Manager":{
          en:"Vineyard Manager",
          sp:"El Gerente de Viñedo"
        },

        "Make team communication easier":{
          en:"Make team communication easier",
          sp:"Mejore la colaboración entre el equipo"
        },

        "Focus your effort where it's most needed":{
          en:"Focus your effort where it's most needed",
          sp:"Enfoque sus esfuerzos donde más se necesite"
        },

        "Assess effectiveness of expensive solutions":{
          en:"Assess effectiveness of expensive solutions",
          sp:"Evalúe la eficiencia de soluciones costosas"
        },

        "Winemaker":{
          en:"Winemaker",
          sp:"El Enólogo"
        },

        "Track varietals & vineyards":{
          en:"Track varietals & vineyards",
          sp:"Siga las variedades y los viñedos"
        },

        "Assess blending options & influence final quality":{
          en:"Assess blending options & influence final quality",
          sp:"Evalúe opciones de ensamblaje"
        },

        "Buy with confidence":{
          en:"Buy with confidence",
          sp:"Compre con confianza"
        },

        "Want to start using the tools but need an imagery provider?":{
          en:"Want to start using the tools but need an imagery provider?",
          sp:"¿Necesita un proveedor de imágenes?"
        },

        "Already have an imagery provider and are interested in using the WineFlight Precision Viticulture?":{
          en:"Already have an imagery provider and are interested in using the WineFlight Precision Viticulture?",
          sp:"¿Ya tiene imágenes y quiere utilizar WineFlight?"
        },

        "Utilize your data in the App":{
          en:"Utilize your data in the App",
          sp:"Pruebe nuestra plataforma"
        },

        "From Data to Better Yields":{
          en:"From Data to Better Yields",
          sp:"Desde los Datos a un Mejor Rendimiento"
        },

        "Enterprise software to make the most of your field knowledge and remote sensing data. *Observe, Orient, Decide, Act":{
          en:"Enterprise software to make the most of your field knowledge and remote sensing data. *Observe, Orient, Decide, Act",
          sp:"Software empresarial para sacar el mejor provecho de su conocimiento del campo y de los datos obtenidos mediante teledetección."
        },

        "Sign Up":{
          en:"Sign up",
          sp:"Contáctenos"
        },

        "Analyze your data in the office. Ground truth your findings and take action in the field.":{
          en:"Analyze your data in the office. Ground truth your findings and take action in the field.",
          sp:"Analice los datos en la oficina. Verifique sus hallazgos en terreno."
        },

        "Analyze the Evolution of Your Field":{
          en:"Analyze the Evolution of Your Field",
          sp:"Analice la evolución de su campo"
        },

        "Notice the changes at different phenological stages or seasons and see the results of your field management.":{
          en:"Notice the changes at different phenological stages or seasons and see the results of your field management.",
          sp:"Note lo cambios de diferentes estados fenológicos y los resultados de su gestión predial."
        },

        "Better Collaborate with Your Team":{
          en:"Better Collaborate with Your Team",
          sp:"Mejore la colaboración con su equipo"
        },

        "Guide and task your team to areas that require attention and easily report and share observations.":{
          en:"Guide and task your team to areas that require attention and easily report and share observations.",
          sp:"Guíe a su equipo hacía zonas que requieran atención, informe y comparta fácilmente observaciones."
        },

        "Stop the Guess Work. Get Accurate Information":{
          en:"Stop the Guess Work. Get Accurate Information",
          sp:"Deje de lado las suposiciones. Obtenga información precisa."
        },

        "Monitor change, manage quality and get better yield estimations thanks to accurate imagery and precise stats":{
          en:"Monitor change, manage quality and get better yield estimations thanks to accurate imagery and precise stats",
          sp:"Monitoree cambios, maneje la calidad y obtenga mejor estimación de rendimiento gracias a imágenes y estadísticas precisas"
        },

        "InstaFarms Make Your Remote Sensing Data Actionable to Improve Your Bottom Line":{
          en:"InstaFarms Make Your Remote Sensing Data Actionable to Improve Your Bottom Line",
          sp:"InstaFarm ayuda a sacar el mejor provecho de sus datos de agricultura de precisión para mejorar sus utilidades"
        },

        "Detect pests and disease and assess severity of damage":{
          en:"Detect pests and disease and assess severity of damage",
          sp:"Detecte amenazas de plagas y enfermedades, y evalúe la intensidad del daño."
        },

        "Implement variable rate cultivation and improve uniformity of the blocks to limit use of inputs":{
          en:"Implement variable rate cultivation and improve uniformity of the blocks to limit use of inputs",
          sp:"Implemente un manejo sitio-especifico y mejore la homogeneidad de la parcela para limitar el uso de insumos"
        },

        "Identify stress and optimize water ressources":{
          en:"Identify stress and optimize water ressources",
          sp:"Identifique estrés y optimice los recursos hídricos"
        },

        "Compare evolution of your fields and detect trends":{
          en:"Compare evolution of your fields and detect trends",
          sp:"Compare la evolución de los campos y detecte tendencias"
        },

        "Utilize your experience to correlate imagery products and targeted field inspections to form testable hypotheses":{
          en:"Utilize your experience to correlate imagery products and targeted field inspections to form testable hypotheses",
          sp:"Use nuestras imágenes, junto a las inspecciones en terreno y su experiencia para crear hipótesis comprobables"
        },

        "Collect data of your field with your drone or book a flight with one of our certified drone operators.":{
          en:"Collect data of your field with your drone or book a flight with one of our certified drone operators.",
          sp:"Recolecte datos en su campo con su dron o reserve un vuelo con uno de nuestros pilotos certificados"
        },

        "Learn more our data collection services":{
          en:"Learn more our data collection services",
          sp:"Ver más"
        },

        "The collected data is sent to the cloud for rapid processing":{
          en:"The collected data is sent to the cloud for rapid processing",
          sp:"Los datos se suben a la nube para un procesamiento rápido"
        },

        "We deliver high quality health maps & additional imagery products to all your devices":{
          en:"We deliver high quality health maps & additional imagery products to all your devices",
          sp:"Entregamos mapas de salud de cultivos y otras imágenes de alta calidad en todos sus dispositivos"
        },

        "Tools and Data to Help Your Team From Planting to Harvest":{
          en:"Tools and Data to Help Your Team From Planting to Harvest",
          sp:"Herramientas y datos para ayudar a su equipo desde la plantación hasta la cosecha"
        },

        "Terrain analysis to help you design new plantation, irrigation systems and water drainage":{
          en:"Terrain analysis to help you design new plantation, irrigation systems and water drainage",
          sp:"Análisis de terreno para ayudar a diseñar nuevas plantaciones, sistemas de riego  y drenaje de agua"
        },

        "Identify and measure under-planted areas to optimize land usage":{
          en:"Identify and measure under-planted areas to optimize land usage",
          sp:"Identifique y mida áreas sub-plantadas para optimizar el uso del terreno"
        },

        "Test the efffectiveness of expensive solutions such as fertilizer or irrigation system":{
          en:"Test the efffectiveness of expensive solutions such as fertilizer or irrigation system",
          sp:"Testee la efectividad de soluciones costosas, como fertilizantes o sistema de riego"
        },

        "Improve yield estimation, plan and execute your harvests":{
          en:"Improve yield estimation, plan and execute your harvests",
          sp:"Mejore la estimación del rendimiento, planifique y lleve a cabo la cosecha"
        },

        "Some of the Crops Currently Being Managed Under InstaFarm":{
          en:"Some of the Crops Currently Being Managed Under InstaFarm",
          sp:"Algunos de los cultivos actualmente gestionados con InstaFarm"
        },

        "Table Grapes":{
          en:"Table Grapes",
          sp:"Uva de Mesa"
        },

        "Blueberries":{
          en:"Blueberries",
          sp:"Arándano"
        },

        "Avocados":{
          en:"Avocados",
          sp:"Aguacate / Palta"
        },

        "Oranges":{
          en:"Oranges",
          sp:"Naranja"
        },

        "Walnuts":{
          en:"Walnuts",
          sp:"Nuez"
        },

        "Bananas":{
          en:"Bananas",
          sp:"Plátano"
        },

        "Mango":{
          en:"Mango",
          sp:"Mango"
        },

        "On-Demand Aerial Scouting":{
          en:"On-Demand Aerial Scouting",
          sp:"Recolección de Imágenes Aéreas"
        },

        "Let drones and professional grade sensors help you detect what your eyes can’t":{
          en:"Let drones and professional grade sensors help you detect what your eyes can’t",
          sp:"Deje que drones y sensores de nivel profesional detecten lo que sus ojos no pueden"
        },

        "How it Works":{
          en:"How it Works",
          sp:"Como Funciona"
        },

        "Use our simple web-based tools to define the area(s) you want scouted":{
          en:"Use our simple web-based tools to define the area(s) you want scouted",
          sp:"Utilice nuestra plataforma web fácil de uso para definir las áreas que necesita monitorear"
        },

        "Licensed drone operators scout your field without disturbing your operations":{
          en:"Licensed drone operators scout your field without disturbing your operations",
          sp:"Pilotos de drones monitorean su campo sin interrumpir sus operaciones"
        },

        "We deliver your data to your team in our mobile App":{
          en:"We deliver your data to your team in our mobile App",
          sp:"Entregamos los datos a su equipo a través de una aplicación móvil"
        },

        "Why Drones ?":{
          en:"Why Drones ?",
          sp:"Ventajas de los drones"
        },

        "Schedule field surveys where and when you need it - as often as you need it":{
          en:"Schedule field surveys where and when you need it - as often as you need it",
          sp:"Agende un vuelo donde y cuando lo necesite - tan seguido como lo necesite"
        },

        "Resolution as high as 2 cm / pixel":{
          en:"Resolution as high as 2 cm / pixel",
          sp:"Resolución hasta 2cm/pixel"
        },

        "(10x better than manned aviation)":{
          en:"(10x better than manned aviation)",
          sp:"(20x más preciso que con imágenes satelitales)"
        },

        "Rapid processing and delivery of results":{
          en:"Rapid processing and delivery of results",
          sp:"Entrega rápida de los resultados"
        },

        "Flights can be flown at optimal times of day to avoid problematic sun angles":{
          en:"Flights can be flown at optimal times of day to avoid problematic sun angles",
          sp:"Los vuelos se pueden realizar en el momento del día con angulos de luz solar óptimos"
        },

        "Fly under cloud decks to collect data on days when manned aircraft or satellites can't":{
          en:"Fly under cloud decks to collect data on days when manned aircraft or satellites can't",
          sp:"Sobrevuelan bajo las nubes para recolectar datos en momento cuando aviones o satelites no lo podrían"
        },

        "Drone-collected data can be utilized to build 3-D models for topographic study":{
          en:"Drone-collected data can be utilized to build 3-D models for topographic study",
          sp:"Los datos recolectados mediante drones permiten desarollar modelos 3D, utilizados para hacer estudios topográficos"
        },

        "California - USA":{
          en:"California - USA",
          sp:"California - EE.UU"
        },

        "Southern-Australia":{
          en:"Southern-Australia",
          sp:"Australia Meridional"
        },

        "France":{
          en:"France",
          sp:"Francia"
        },

        "East Coast - USA":{
          en:"East Coast - USA",
          sp:"Costa Oeste - EE.UU."
        },

        "Chile":{
          en:"Chile",
          sp:"Chile"
        },

        "PUERTO RICO":{
          en:"PUERTO RICO",
          sp:"Puerto Rico"
        },

        "Want to know if we already cover you area?":{
          en:"Want to know if we already cover you area?",
          sp:"¿Quiere saber si ya operamos en su área?"
        },

        "Are you a drone pilot?":{
          en:"Are you a drone pilot?",
          sp:"¿Es usted un piloto de dron?"
        },

        "Learn how we can help you serve your clients better":{
          en:"Learn how we can help you serve your clients better",
          sp:"Averigüe como podemos ayudarle a servir mejor a sus clientes"
        },

        "Products and services":{
          en:"Products and services",
          sp:"Productos y Servicios"
        },

        "Highly informative imagery products ready for immediate use - without a learning curve":{
          en:"Highly informative imagery products ready for immediate use - without a learning curve",
          sp:"Mapas altamente informativos, facíl de entender y listos para uso inmediato"
        } ,

        "Actionable Data Delivered to all of Your Team Members’ Devices. Collaborate & Make Confident, Accurate Decisions.":{
          en:"Actionable Data Delivered to all of Your Team Members’ Devices. Collaborate & Make Confident, Accurate Decisions.",
          sp:"Información concreta entregada en los dispositivos de su equipo de trabajo.\nTome decisiones precisas, con confianza."
        },

        "Crop Health Assessment":{
          en:"Crop Health Assessment",
          sp:"Estado de Salud del Cultivo"
        },

        "(NDVI or other indexes by request)":{
          en:"(NDVI or other indexes by request)",
          sp:"(NDVI u otros índices solicitados)."
        },

        "Precise assesment, row by row, plant by plant.":{
          en:"Precise assesment, row by row, plant by plant.",
          sp:"Evaluación precisa, hilera por hilera, planta por planta."
        },

        "Detect stress caused by pests, irrigation issues, nutrition deficiencies.":{
          en:"Detect stress caused by pests, irrigation issues, nutrition deficiencies.",
          sp:"Detecte el estrés causado por plagas, problemas de riego, carencia de nutrientes."
        },

        "Identify and monitor movement of zonal boundaries":{
          en:"Identify and monitor movement of zonal boundaries",
          sp:"Identifique y controle cambios en los límites de zonas."
        },

        "Zone Maps":{
          en:"Zone Maps",
          sp:"Mapa de Zonas"
        },

        "Maps specifically designed to show trends help you find the signal in the noise.":{
          en:"Maps specifically designed to show trends help you find the signal in the noise.",
          sp:"Mapa desiñado específicamente para mostrar tendencias."
        },

        "Identify trends before examining spot issues":{
          en:"Identify trends before examining spot issues",
          sp:"Identifique tendencias antes de examinar problemas localizados"
        },

        "Helps you implement variable rate cultivation and selective harvest":{
          en:"Helps you implement variable rate cultivation and selective harvest",
          sp:"Ayuda a implementar un manejo sitio-especifico y cosechas selectivas"
        },

        "Multiple Contrasts and Ground Detail":{
          en:"Multiple Contrasts and Ground Detail",
          sp:"Diferentes contrastes y detalles de suelo"
        },

        "Utilizing multiple contrasts help your eyes detect different details.":{
          en:"Utilizing multiple contrasts help your eyes detect different details.",
          sp:"Utilizar varios contrastes permite detectar detalles diferentes"
        },

        "Viewing images that show high definition ground detail along with your crop status enables more precise field work":{
          en:"Viewing images that show high definition ground detail along with your crop status enables more precise field work",
          sp:"Imágenes con detalles del suelo en alta definición junto al estado de salud del cultivo, permiten un trabajo en terreno más preciso"
        },

        "Premium Products":{
          en:"Premium Products",
          sp:"Productos Premium"
        },

        "Elevation Maps":{
          en:"Elevation Maps",
          sp:"Mapa de Elevación de terreno"
        },

        "Helps explain performance when compared to health maps and other imagery products":{
          en:"Helps explain performance when compared to health maps and other imagery products",
          sp:"Permite explicar el comportamiento de plantas cuando se compara con los mapas de vigor y otras imágenes"
        },

        "Can be used to predict how your field will react to changing variables":{
          en:"Can be used to predict how your field will react to changing variables",
          sp:"Puede ser utilizado para predecir como reaccionará su campo ante la evolución de algunas variables"
        },

        "Serves as the basis for more advanced analysis such as solar/shade analysis, soil erosion evaluation and hydrology charts.":{
          en:"Serves as the basis for more advanced analysis such as solar/shade analysis, soil erosion evaluation and hydrology charts.",
          sp:"Sirve de base para análisis más avanzados, como análisis solares, erosión de suelo y mapas hidrológicos"
        },

        "Hydrology Charts":{
          en:"Hydrology Charts",
          sp:"Mapa Hidrológico"
        },

        "Predict where water will pool on your field":{
          en:"Predict where water will pool on your field",
          sp:"Anticipe donde se estancará o drenará  el agua en el campo."
        },

        "Determine water flow direction and velocity across your fields":{
          en:"Determine water flow direction and velocity across your fields",
          sp:"Determine la dirección de los flujos de agua a través del campo"
        },

        "Can be used to optimize irrigation design & to help diagnose crop stress":{
          en:"Can be used to optimize irrigation design & to help diagnose crop stress",
          sp:"Puede ser utilizada para optimizar el diseño de sistema de riego y ayuda a a diagnosticar estrés hídrico"
        },

        "Interested in custom indeces or additional products?":{
          en:"Interested in custom indeces or additional products?",
          sp:"¿Le interesan índices personalizados o mapas adicionales?"
        },

        "Specialized Projects":{
          en:"Specialized Projects",
          sp:"Proyectos Especializados"
        },

        "In conjunction with our engineering partners, UAV-IQ can work with you to meet your specific needs. Whether you want to evaluate a new location, design an irrigation system, certify compliance with local regulations or accomplish something never done before, we're ready to help.":{
          en:"In conjunction with our engineering partners, UAV-IQ can work with you to meet your specific needs. Whether you want to evaluate a new location, design an irrigation system, certify compliance with local regulations or accomplish something never done before, we're ready to help.",
          sp:"Junto a nuestros ingenieros asociados, UAV-IQ puede trabajar con usted para resolver sus necesidades específicas. Ya sea, evaluar un nueva campo, diseñar un sistema de riego, certificar el cumplimiento de las regulaciones locales, estamos listos para ayudar."
        },

        "Some examples:":{
          en:"Some examples:",
          sp:"Algunos ejemplos:"
        },

        "Irrigation design":{
          en:"Irrigation design",
          sp:"Diseño de sistema de riego"
        },

        "Environmental Site Assessment (ESA)":{
          en:"Environmental Site Assessment (ESA)",
          sp:"Evaluación ambiental de emplazamientos"
        },

        "Critical Issues Analysis (CIA)":{
          en:"Critical Issues Analysis (CIA)",
          sp:"Cartografía digital de suelos"
        },

        "Soil Mapping":{
          en:"Soil Mapping",
          sp:"Cartografía digital de suelos"
        },

        "Agricultural Erosion Control Plan":{
          en:"Agricultural Erosion Control Plan",
          sp:"Control de la erosión"
        },

        "Survey grade Topographic Mapping":{
          en:"Survey grade Topographic Mapping",
          sp:"Mapa avanzado de la elevación del terreno"
        },

        "Hydrologic and Hydraulic Analysis":{
          en:"Hydrologic and Hydraulic Analysis",
          sp:"Análisis hídrico e hidráulico"
        },

        "Land Potential Assessment":{
          en:"Land Potential Assessment",
          sp:"Potencial del predio"
        },

        "Ground sensor integration":{
          en:"Ground sensor integration",
          sp:"Integración de datos de Sensores de suelo"
        },

        "Advanced Research Capabilities":{
          en:"Advanced Research Capabilities",
          sp:"Habilidades de Investigación Avanzada"
        },

        "UAV-IQ also offers expertise to clients and partners who are conducting agricultural research.":{
          en:"UAV-IQ also offers expertise to clients and partners who are conducting agricultural research.",
          sp:"UAV-IQ también ofrece expertices a sus clientes y asociados que guían investigaciones en agricultura."
        },

        "By leveraging its experience in database strategy, the company can support small to medium sized research projects on its existing infrastructure and it can design, implement and support infrastructure dedicated to large-scale projects.":{
          en:"By leveraging its experience in database strategy, the company can support small to medium sized research projects on its existing infrastructure and it can design, implement and support infrastructure dedicated to large-scale projects.",
          sp:"Aprovechando la experiencia en estrategia de base de datos, UAV-IQ puede ayudar con su infrastrucura actual a proyectos de investigación de baja o mediana embergadura. Así como también se puede diseñar y implementar una nueva infraestructura para proyectos de gran escala."
        },

        "Fully licensed by the FAA, the company offers the ability to conduct research flights 12 months a year through its operations in both hemispheres and can incorporate additional sensor types and data sets, both historic and newly acquired.":{
          en:"Fully licensed by the FAA, the company offers the ability to conduct research flights 12 months a year through its operations in both hemispheres and can incorporate additional sensor types and data sets, both historic and newly acquired.",
          sp:"Autorizado por las FFAA, la compañía tiene la facultad de conducir vuelos durante los 12 meses del año ya que opera en ambos hemisferios y puede incorporar diferentes tipos de sensores y datos adicionales, ya sea histórica o recientemente adquirida."
        },

        "First Name":{
          en:"First Name",
          sp:"Nombre"
        },

        "Last Name":{
          en:"Last Name",
          sp:"Apellido"
        },

        "E-Mail":{
          en:"E-Mail",
          sp:"Correo electrónico"
        },

        "Location":{
          en:"Location",
          sp:"Ciudad / País"
        },

        "Message":{
          en:"Message",
          sp:"Mensaje"
        },

        "SEND":{
          en:"SEND",
          sp:"Enviar"
        },

        "Get in touch with us":{
          en:"Get in touch with us",
          sp:"Póngase en contacto con nosotros"
        },

        "Are you a drone operator or a farmer flying your own drone?":{
          en:"Are you a drone operator or a farmer flying your own drone?",
          sp:"¿Es un operador de aviones no tripulados o un granjero que vuela su propio avión?"
        }
    }

  // This is for stacked headers
  $(".navbar .stack .fa-reorder").click(function(){
    $(".nav").toggleClass("show");
  });

  var size = window.innerHeight || document.body.clientHeight
  $(".jumbotron").css("min-height", size);

  if (localStorage.getItem("infiniteScrollEnabled") === null) {
    //...
  }

  //this is for the moblie version of the stacked headers
  $(".navbar .nav .stacked-nav").click(function() {
    var target = this.getElementsByTagName("ul")[0];
    $(target).toggleClass("nav-active");
    objDiv.scrollTop = objDiv.scrollHeight;
  });

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
          $(".navbar").addClass("changeHeader");
          $(".droneOperators").addClass("displayNone");
          $(".navbar .navbar-brand img").attr("src","img/logos/uav-iq-precision-agriculture-logo-horizontal.png");
      } else {
          $(".navbar").removeClass("changeHeader");
          $(".droneOperators").removeClass("displayNone");
          $(".navbar .navbar-brand img").attr("src","img/logos/uav-iq-precision-agriculture-logo-horizontal_white.png");
      }
  });

  var translator = $('body').translate({lang: "en", t: dict}); //use English
  var str = translator.g("translate")

  if (localStorage.getItem("language") != null) {
    translator.lang(localStorage.getItem("language"));
  }

  $(".language ul li a").click(function() {
    $(".navbar .stack .fa-reorder").trigger( "click" );
    translator.lang($(this).data().language);
    localStorage.setItem('language', $(this).data().language);
  });
})
