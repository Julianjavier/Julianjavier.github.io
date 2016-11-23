$(document).ready(function(){

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

        "Learn more >>":{
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

        "Get Started Now":{
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

        "Talk to us":{
          en:"Talk to us",
          sp:"Contáctenos"
        },

        "to create a free demo account":{
          en:"to create a free demo account",
          sp:"para crear su cuenta GRATIS"
        },
        // "Actionable Data Delivered to all of Your Team Members’ Devices. Collaborate & Make Confident, Accurate Decisions.": "Información concreta entregada en los dispositivos de su equipo de trabajo.\nTome decisiones precisas, con confianza.",
        // "Access Your Data from Anywhere\n": "Acceda a sus datos desde cualquier lugar",
        // "Analyze your data in the office. Ground truth your findings and take action in the field.": "Analice los datos en la oficina. Verifique sus hallazgos en terreno.",
        // "Analyze the Evolution of Your Field": "Analice la evolución de su campo",
        // "Notice the changes at different phenological stages or seasons and see the results of your field management.": "Note lo cambios de diferentes estados fenológicos y los resultados de su gestión predial.",
        // "Better Collaborate with Your Team": "Mejore la colaboración con su equipo",
        // "Guide and task your team to areas that require attention and easily report and share observations.": "Guíe a su equipo hacía zonas que requieran atención, informe y comparta fácilmente observaciones.",
        // "Stop the Guess Work. Get Accurate Information": "Deje de Lado las Suposiciones. Obtenga Información Precisa.",
        // "Monitor change, manage quality and get better yield estimations thanks to accurate imagery and precise stats": "Saque el máximo provecho de su terreno, sepa qué calidad esperar y obtenga una mejor estimación del rendimiento.",
        // "How Does It Work?": "¿Cómo funciona?",
        // "Collect data of your field with your drone or book a flight with one of our certified drone operators.": "Recolecte datos en su campo con su dron o reserve un vuelo con uno de nuestros pilotos certificados",
        // "Learn more our data collection services": "Ver más",
        // "The collected data is sent to the cloud for rapid processing": "Los datos se suben a la nube para un procesamiento rápido",
        // "Learn more our data processing services": "Ver más",
        // "We deliver high quality health maps & additional imagery products to all your devices": "Entregamos mapas de salud de cultivos y otras imágenes de alta calidad en todos sus dispositivos",
        // "Discover our imagery products": "Descubra los diversos tipos de imágenes",
        // "Ensure Your Best Grapes Make Your Best Wine": "Asegura que sus mejores uvas produzcan su mejor vino",
        // "Take advantage of your terroir by determining quality zones": "Saque el mejor provecho de su terroir, delimitando zonas de calidad",
        // "Ask for inspections and grape sampling": "Solicite inspecciones y muestreo de uvas",
        // "Detect and manage hydric stress": "Detecte y maneje el estrés hídrico",
        // "Design and implement a detailed harvest plan": "Diseñe e implemente detalladamente el plan de cosecha",
        // "Adopt Good Farming Practices": "Adopte buenas prácticas agrícolas",
        // "Implement variable rate cultivation to optimize use of inputs": "Implemente un manejo sitio-especifico y mejore la homogeneidad de la parcela para limitar el uso de insumos.",
        // "Optimize water ressources": "Optimice los recursos hídricos",
        // "Identify pests and disease, assess severity of damage": "Identifique plagas y enfermedades, evalúe la severidad del daño",
        // "Detect problems before they are visible to the naked eyes": "Detecte problemas antes de ser observados a simple vista",
        // "Qualitatively and quantitatively evaluate your vineyard's health over time": "Evalúe cualitativamente y cuantitativamente la salud de su viñedo a lo largo del tiempo",
        // "The WineFlight Advantages For": "Las Ventajas de WineFlight Para",
        // "Consultant": "El Asesor",
        // "Better prepare your visit to your clients": "Mejore la preparación de las visitas en terreno",
        // "Request inspections and sampling": "Solicite inspecciones y muestras",
        // "Share pictures, notes with your clients": "Comparta fotos y notas con sus clientes",
        // "Vineyard Manager": "El Gerente de Viñedo",
        // "Make team communication easier": "Mejore la colaboración entre el equipo",
        // "Focus your effort where it's most needed": "Enfoque sus esfuerzos donde más se necesite",
        // "Assess effectiveness of expensive solutions": "Evalúe la eficiencia de soluciones costosas",
        // "Winemaker": "El Enólogo",
        // "Track varietals & vineyards": "Siga las variedades y los viñedos",
        // "Assess blending options & influence final quality": "Evalúe opciones de ensamblaje",
        // "Buy with confidence": "Compre con confianza",
        // "Want to start using the tools but need an imagery provider?": "¿Necesita un proveedor de imágenes?",
        // "Book a flight now": "Reserve un vuelo ahora",
        // "Already have an imagery provider and are interested in using the WineFlight Precision Viticulture?": "¿Ya tiene imágenes y quiere utilizar WineFlight?",
        // "Utilize your data in the App": "Pruebe nuestra plataforma"
      }

  // This is for stacked headers
  $(".navbar .stack .fa-reorder").click(function(){
    console.log(this);
    $(".nav").toggleClass("show");
  });

  var size = window.innerHeight || document.body.clientHeight
  console.log(size);
  $(".jumbotron").css("min-height", size);

  //this is for the moblie version of the stacked headers
  $(".navbar .nav li").click(function() {
    var target = this.getElementsByTagName("ul")[0];
    $(target).toggleClass("nav-active");
    console.log(target);
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
  console.log(str);
  translator.lang("sp");
})
