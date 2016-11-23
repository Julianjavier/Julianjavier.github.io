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
        }
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
