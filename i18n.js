/* Pixelcore · selector de idioma ES <-> CA
   El HTML está en español; este script traduce al catalán y recuerda la elección. */
(function () {
  'use strict';

  // ---- Textos (clave = español, valor = catalán) ----
  var T = {
    // Navegación / común
    'Inicio': 'Inici',
    'PC a medida': 'PC a mida',
    '© Pixelcore · Pedidos y consultas:': '© Pixelcore · Comandes i consultes:',
    '← Volver al inicio': '← Tornar a l\'inici',
    'Especificaciones técnicas': 'Especificacions tècniques',
    'IVA y mano de obra incluidos': 'IVA i mà d\'obra inclosos',
    'IVA incluido': 'IVA inclòs',
    'Pack Raspberry Pi 3 completo': 'Pack Raspberry Pi 3 complet',
    'Pack PC HP completo': 'Pack PC HP complet',
    'Precio y pedido': 'Preu i comanda',
    'Pack Raspberry Pi 3 con monitor Alurin de 22 pulgadas, teclado, ratón y alfombrilla Mars Gaming': 'Pack Raspberry Pi 3 amb monitor Alurin de 22 polzades, teclat, ratolí i estoreta Mars Gaming',
    'Pack PC HP con monitor Alurin de 22 pulgadas y periféricos Mars Gaming RGB': 'Pack PC HP amb monitor Alurin de 22 polzades i perifèrics Mars Gaming RGB',
    'PC a medida con torre Tacens, monitor de 27 pulgadas, teclado y ratón': 'PC a mida amb torre Tacens, monitor de 27 polzades, teclat i ratolí',

    // Inicio
    'Ordenadores completos, listos para conectar y usar': 'Ordinadors complets, llestos per connectar i utilitzar',
    'En Pixelcore montamos packs con todo incluido: equipo, monitor y periféricos. Elige el tuyo y haz tu pedido por correo.':
      'A Pixelcore muntem packs amb tot inclòs: equip, monitor i perifèrics. Escull el teu i fes la teva comanda per correu.',
    'Ver los packs': 'Veure els packs',
    'Escríbenos': 'Escriu-nos',
    'Nuestros packs': 'Els nostres packs',
    'Kit plug & play con monitor Full HD y periféricos gaming. Ideal para domótica, centro multimedia, videovigilancia o aprender a programar.':
      'Kit plug & play amb monitor Full HD i perifèrics gaming. Ideal per a domòtica, centre multimèdia, videovigilància o aprendre a programar.',
    'HP Omnidesk Slim con Intel Core i3, monitor de 22" y periféricos RGB. Para estudiar, teletrabajar y entretenimiento.':
      'HP Omnidesk Slim amb Intel Core i3, monitor de 22" i perifèrics RGB. Per estudiar, teletreballar i entreteniment.',
    'AMD Ryzen 5 5500, GTX 1050 4GB y monitor QHD de 27" a 165 Hz. Con Ubuntu incluido gratis.':
      'AMD Ryzen 5 5500, GTX 1050 4GB i monitor QHD de 27" a 165 Hz. Amb Ubuntu inclòs gratis.',
    'Cómo hacer tu pedido': 'Com fer la teva comanda',
    'Elige el pack que quieres o si prefieres solo el equipo (sin monitor ni periféricos).':
      'Tria el pack que vols o si prefereixes només l\'equip (sense monitor ni perifèrics).',
    'Escribe a': 'Escriu a',
    'indicando el pack, tu nombre y tu teléfono. Cada página de pack tiene un botón que te prepara el correo.':
      'indicant el pack, el teu nom i el teu telèfon. Cada pàgina de pack té un botó que et prepara el correu.',
    'Te confirmamos disponibilidad, forma de pago y entrega por correo.':
      'Et confirmem disponibilitat, forma de pagament i lliurament per correu.',

    // Raspberry Pi
    'Pack Raspberry Pi 3 completo: conecta y usa': 'Pack Raspberry Pi 3 complet: connecta i utilitza',
    '¡Todo lo que necesitas en un solo pack! Kit todo en uno listo para conectar (plug & play), con monitor Full HD IPS y periféricos gaming incluidos.':
      'Tot el que necessites en un sol pack! Kit tot en un llest per connectar (plug & play), amb monitor Full HD IPS i perifèrics gaming inclosos.',
    'Placa': 'Placa',
    'Conectividad': 'Connectivitat',
    'Kit incluido': 'Kit inclòs',
    'Monitor': 'Monitor',
    'Periféricos': 'Perifèrics',
    'Usos recomendados': 'Usos recomanats',
    'Raspberry Pi 3 Model B (compatible 3B y 3B+), 1 GB de RAM, procesador Broadcom BCM2837':
      'Raspberry Pi 3 Model B (compatible 3B i 3B+), 1 GB de RAM, processador Broadcom BCM2837',
    '4 puertos USB, puerto Ethernet, HDMI, conector micro USB de alimentación, jack de audio 3.5 mm, 40 pines GPIO':
      '4 ports USB, port Ethernet, HDMI, connector micro USB d\'alimentació, jack d\'àudio 3,5 mm, 40 pins GPIO',
    'Caja protectora negra, fuente de alimentación con cable micro USB, cable HDMI, tarjeta microSD de 64 GB con adaptador USB, 3 disipadores de calor de aluminio':
      'Caixa protectora negra, font d\'alimentació amb cable micro USB, cable HDMI, targeta microSD de 64 GB amb adaptador USB, 3 dissipadors de calor d\'alumini',
    'Alurin CoreVision 120 IPS Lite 22 pulgadas, panel IPS, resolución Full HD':
      'Alurin CoreVision 120 IPS Lite 22 polzades, panell IPS, resolució Full HD',
    'Combo teclado, ratón y alfombrilla Mars Gaming MCP124, retroiluminación RGB, distribución español':
      'Combo teclat, ratolí i estoreta Mars Gaming MCP124, retroil·luminació RGB, distribució espanyol',
    'Domótica, centro multimedia, sistema de videovigilancia, aprendizaje de programación, proyectos DIY':
      'Domòtica, centre multimèdia, sistema de videovigilància, aprenentatge de programació, projectes DIY',
    'Pack completo. IVA y mano de obra incluidos.': 'Pack complet. IVA i mà d\'obra inclosos.',
    'Solo Raspberry. IVA y mano de obra incluidos.': 'Només Raspberry. IVA i mà d\'obra inclosos.',
    'Pedir pack completo': 'Demanar pack complet',
    'Pedir solo Raspberry': 'Demanar només Raspberry',

    // PC HP
    'Pack PC HP completo: todo lo que necesitas en un solo pack': 'Pack PC HP complet: tot el que necessites en un sol pack',
    'Todo incluido y listo para conectar y usar. Ideal para estudiar, teletrabajar y entretenimiento.':
      'Tot inclòs i llest per connectar i utilitzar. Ideal per estudiar, teletreballar i entreteniment.',
    'Ordenador': 'Ordinador',
    'Procesador': 'Processador',
    'Memoria RAM': 'Memòria RAM',
    'Almacenamiento': 'Emmagatzematge',
    'Gráfica': 'Gràfica',
    'Sistema operativo': 'Sistema operatiu',
    'Teclado': 'Teclat',
    'Ratón': 'Ratolí',
    'Alfombrilla': 'Estoreta',
    'FreeDOS (sin sistema operativo instalado)': 'FreeDOS (sense sistema operatiu instal·lat)',
    'Alurin 22 pulgadas, Full HD 1920x1080, panel IPS, 120 Hz, HDR10': 'Alurin 22 polzades, Full HD 1920x1080, panell IPS, 120 Hz, HDR10',
    'Mars Gaming con retroiluminación RGB, distribución español, conexión por cable':
      'Mars Gaming amb retroil·luminació RGB, distribució espanyol, connexió per cable',
    'Mars Gaming RGB con cable': 'Mars Gaming RGB amb cable',
    'Mars Gaming con borde RGB iluminado': 'Mars Gaming amb vora RGB il·luminada',
    'Pack completo. IVA incluido.': 'Pack complet. IVA inclòs.',
    'Solo torre.': 'Només torre.',
    'Pedir solo torre': 'Demanar només torre',

    // PC a medida
    'PC a medida: rendimiento y calidad en un solo pack': 'PC a mida: rendiment i qualitat en un sol pack',
    '¡PC completo listo para usar! Con sistema operativo Linux Ubuntu incluido gratis.':
      'PC complet llest per utilitzar! Amb sistema operatiu Linux Ubuntu inclòs gratis.',
    'Tarjeta gráfica': 'Targeta gràfica',
    'Caja': 'Caixa',
    'Refrigeración': 'Refrigeració',
    'Fuente de alimentación': 'Font d\'alimentació',
    'Disco duro Intenso 256 GB': 'Disc dur Intenso 256 GB',
    'Combo teclado y ratón Logitech MK540': 'Combo teclat i ratolí Logitech MK540',
    'Linux Ubuntu (incluido, gratuito)': 'Linux Ubuntu (inclòs, gratuït)',
    'PC completo. IVA y mano de obra incluidos.': 'PC complet. IVA i mà d\'obra inclosos.',
    'Pedir PC completo': 'Demanar PC complet'
  };

  // Títulos y meta descripción
  var TITLES = {
    'Inicio | Pixelcore': 'Inici | Pixelcore',
    'Pack Raspberry Pi 3 completo | Pixelcore': 'Pack Raspberry Pi 3 complet | Pixelcore',
    'Pack PC HP completo | Pixelcore': 'Pack PC HP complet | Pixelcore',
    'PC a medida | Pixelcore': 'PC a mida | Pixelcore'
  };
  var DESCS = {
    'Pixelcore: packs de ordenador completos, listos para conectar y usar.': 'Pixelcore: packs d\'ordinador complets, llestos per connectar i utilitzar.',
    'Pack Raspberry Pi 3 completo con monitor Full HD y periféricos gaming. 199,99 €.': 'Pack Raspberry Pi 3 complet amb monitor Full HD i perifèrics gaming. 199,99 €.',
    'Pack PC HP completo con monitor 22 pulgadas y periféricos RGB. 599,99 €.': 'Pack PC HP complet amb monitor de 22 polzades i perifèrics RGB. 599,99 €.',
    'PC a medida con AMD Ryzen 5 5500, GTX 1050 y monitor QHD 27 pulgadas. 719,99 €.': 'PC a mida amb AMD Ryzen 5 5500, GTX 1050 i monitor QHD de 27 polzades. 719,99 €.'
  };

  // Frases de los correos de pedido (asunto y cuerpo)
  var MAIL = [
    ['Hola, quiero pedir:', 'Hola, vull demanar:'],
    ['Dirección de entrega:', 'Adreça d\'entrega:'],
    ['Teléfono:', 'Telèfon:'],
    ['Nombre:', 'Nom:'],
    ['Pedido ', 'Comanda '],
    [' completo', ' complet'],
    ['Solo ', 'Només '],
    ['a medida', 'a mida']
  ];

  var STORE_KEY = 'pixelcore-lang';
  var originals = new Map();   // nodo de texto -> texto original (es)
  var lang = 'es';

  function getSaved() {
    try { var v = localStorage.getItem(STORE_KEY); return v === 'ca' || v === 'es' ? v : null; }
    catch (e) { return null; }
  }
  function save(v) { try { localStorage.setItem(STORE_KEY, v); } catch (e) {} }

  function textNodes() {
    var out = [];
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || /^(SCRIPT|STYLE)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('.lang-btn, .pxa')) return NodeFilter.FILTER_REJECT;
        return n.data.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    while (w.nextNode()) out.push(w.currentNode);
    return out;
  }

  function translateMail(href) {
    var i = href.indexOf('?');
    if (i < 0) return href;
    var base = href.slice(0, i);
    var params = new URLSearchParams(href.slice(i + 1));
    var subject = params.get('subject') || '';
    var body = params.get('body') || '';
    MAIL.forEach(function (p) {
      subject = subject.split(p[0]).join(p[1]);
      body = body.split(p[0]).join(p[1]);
    });
    return base + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  function apply(target) {
    var toCa = target === 'ca';

    // Texto de la página
    textNodes().forEach(function (n) {
      if (!originals.has(n)) originals.set(n, n.data);
      var orig = originals.get(n);
      if (!toCa) { n.data = orig; return; }
      var key = orig.trim();
      if (T[key]) {
        var lead = orig.match(/^\s*/)[0], trail = orig.match(/\s*$/)[0];
        n.data = lead + T[key] + trail;
      }
    });

    // aria-label
    document.querySelectorAll('[aria-label]').forEach(function (el) {
      if (el.closest('.pxa')) return;
      if (!el.hasAttribute('data-es-aria')) el.setAttribute('data-es-aria', el.getAttribute('aria-label'));
      var o = el.getAttribute('data-es-aria');
      el.setAttribute('aria-label', toCa && T[o] ? T[o] : o);
    });

    // Texto alternativo de las imágenes
    document.querySelectorAll('img[alt]').forEach(function (el) {
      if (!el.hasAttribute('data-es-alt')) el.setAttribute('data-es-alt', el.getAttribute('alt'));
      var o = el.getAttribute('data-es-alt');
      el.setAttribute('alt', toCa && T[o] ? T[o] : o);
    });

    // Enlaces de pedido por correo
    document.querySelectorAll('a[href^="mailto:"][href*="?"]').forEach(function (a) {
      if (!a.hasAttribute('data-es-href')) a.setAttribute('data-es-href', a.getAttribute('href'));
      var o = a.getAttribute('data-es-href');
      a.setAttribute('href', toCa ? translateMail(o) : o);
    });

    // Título y meta descripción
    if (!document.documentElement.hasAttribute('data-es-title')) {
      document.documentElement.setAttribute('data-es-title', document.title);
    }
    var t = document.documentElement.getAttribute('data-es-title');
    document.title = toCa && TITLES[t] ? TITLES[t] : t;

    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      if (!meta.hasAttribute('data-es')) meta.setAttribute('data-es', meta.getAttribute('content'));
      var d = meta.getAttribute('data-es');
      meta.setAttribute('content', toCa && DESCS[d] ? DESCS[d] : d);
    }

    document.documentElement.lang = target;
    lang = target;
    updateButton();
  }

  // ---- Botón ----
  var btn;
  function buildButton() {
    btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-btn';
    btn.innerHTML = '<span data-l="es">ES</span><span data-l="ca">CA</span>';
    btn.addEventListener('click', function () {
      var next = lang === 'es' ? 'ca' : 'es';
      save(next);
      apply(next);
    });
    var wrap = document.querySelector('header .wrap');
    (wrap || document.body).appendChild(btn);
  }
  function updateButton() {
    if (!btn) return;
    btn.querySelectorAll('span').forEach(function (s) {
      s.classList.toggle('on', s.getAttribute('data-l') === lang);
    });
    btn.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma a catalán' : 'Canviar l\'idioma a castellà');
    btn.title = lang === 'es' ? 'Canviar a català' : 'Cambiar a castellano';
  }

  function init() {
    buildButton();
    var saved = getSaved();
    if (saved === 'ca') apply('ca'); else { lang = 'es'; updateButton(); }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
