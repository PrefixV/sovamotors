// ОТКРЫТИЕ МОБИЛЬНОГО МЕНЮ

const navMobileButton = document.querySelector(".nav__mobile__button");
const header = document.querySelector(".header");

navMobileButton.addEventListener('click', () => {
    header.classList.toggle("header__mobile__active");
});

// БЛОК СОЦИАЛОК

const socialBlock = document.querySelector('.social__block');
const triggerBtn = document.getElementById('social-trigger');

triggerBtn.addEventListener('click', () => {
  socialBlock.classList.toggle('social__block__hidden');
});

document.addEventListener('click', (e) => {
  if (!socialBlock.contains(e.target) && !triggerBtn.contains(e.target)) {
    socialBlock.classList.add('social__block__hidden');
  }
});

// ДОБАВЛЕНИЕ DATA-INDEX ДЛЯ SERVICE

const serviceItems = document.querySelectorAll(".service__item");
serviceItems.forEach((el, index) => {
  el.dataset.index = index + 1;
})

// РАСКРЫТИЕ ПОСЛЕДНЕГО SERVICE ROW WRAPPER

const serviceOpenButton = document.querySelector(".service__open__button");
const lastServiceWrapper = document.querySelector(".last__service__wrapper");
serviceOpenButton.addEventListener('click', () => {
  lastServiceWrapper.classList.toggle("service__row__wrapper__hidden");
})

// СОЗДАНИЕ ОКНА ПОДРОБНО В БЛОКЕ SERVICE

const serviceInformationContainer = document.querySelector(".service__information__container");
const serviceInformationImage = document.querySelector(".service__information__image");
const serviceInformationTitle = document.querySelector(".service__information__title");
const serviceInformationDescription = document.querySelector(".service__information__description");
const serviceInformationCloseButton = document.querySelector(".service__information__close__button");

const servicesData = {
    "Капитальный ремонт Корейских двигателей" : {
      description: "Проводим капитальный ремонт корейских двигателей: G4NA, G4KD, G4KE, G4KG, полная разборка, дефектовка, шлифовка плоскости: ГБЦ, блока и опресовка: ГБЦ и блока,расточка +0.5, гильзовка, сборка с проверкой всех параметров. Гарантия качества и долгой службы мотора.",
      image: "/images/img/repair__engine.png",
    },

    "Ремонт двигателей" : {
      description: "Проводим качественный ремонт двигателей: полная диагностика, замена изношенных деталей, восстановление мощности и надежности, гарантия на все виды работ.",
      image: "/images/img/repair__engine.png",
    },

    "Замена ГРМ" : {
      description: "Выполняем замену ремня ГРМ: точная установка по меткам, замена роликов и помпы, проверка натяжения, гарантия надежной и безопасной работы двигателя.",
      image: "/images/img/repair__engine.png",
    },

    "Чип-тюнинг" : {
      description: "Каждый современный автомобиль оснащён ECU, который управляет различными параметрами работы двигателя, включая подачу топлива, зажигание и работу турбонагнетателя. Заводские настройки часто делаются с запасом, чтобы обеспечить стабильную работу машины в любых условиях. Это означает, что мощность и экономичность могут быть не полностью реализованы.",
      image: "/images/img/ri-1.jpg",
    },

    "Клонирование ЭБУ" : {
      description: "Электронный блок управления (ЭБУ) является “мозгом” автомобиля, контролирующим работу двигателя, трансмиссии и других систем. Иногда возникает необходимость заменить ЭБУ, например, при его поломке или модернизации. В таких случаях применяется процедура клонирования, которая позволяет перенести все данные и настройки из старого блока в новый.",
      image: "/images/img/ri-2.jpg",
    },

    "Отключение ЕГР" : {
      description: "Система рециркуляции отработавших газов (EGR, Exhaust Gas Recirculation) – это экологический компонент, установленный на большинстве современных автомобилей. Она снижает выбросы оксидов азота (NOx) за счет возвращения части выхлопных газов обратно в двигатель для повторного сжигания. Однако со временем EGR может стать причиной проблем, влияющих на эксплуатационные характеристики и надежность автомобиля.",
      image: "/images/img/ri-3.jpg",
    },

    "Отключение сажевого фильтра" : {
      description: "Сажевый фильтр (DPF, Diesel Particulate Filter) — это элемент выхлопной системы дизельного автомобиля, предназначенный для улавливания и сжигания частиц сажи, образующихся при работе двигателя. Он играет ключевую роль в снижении выбросов вредных веществ в атмосферу. Однако со временем этот компонент может вызывать проблемы, и некоторые автовладельцы принимают решение о его отключении.-тюнинг — это процесс изменения программного обеспечения электронного блока управления (ЭБУ) автомобиля для улучшения его характеристик. Эта процедура позволяет оптимизировать работу двигателя, увеличивая его мощность, крутящий момент или улучшая топливную экономичность.",
      image: "/images/img/ri-4.jpg"
    },

    "Прошивка чипа" : {
      description: "Чип-тюнинг — это процесс изменения программного обеспечения электронного блока управления (ЭБУ) автомобиля для улучшения его характеристик. Эта процедура позволяет оптимизировать работу двигателя, увеличивая его мощность, крутящий момент или улучшая топливную экономичность.",
      image: "/images/img/ri-5.jpg"
    },

    "Отключение мочевины" : {
      description: "Современные дизельные автомобили оснащены системой избирательного каталитического восстановления (SCR) для снижения выбросов оксидов азота (NOx). Работа этой системы основана на использовании специальной жидкости AdBlue (мочевины), которая впрыскивается в выхлопную систему и способствует нейтрализации вредных веществ.",
      image: "/images/img/ri-6.jpg",
    },

    "Диагностика эндоскопом" : {
      description: "Эндоскопия автомобиля – это современный метод диагностики, позволяющий заглянуть в труднодоступные места без разборки машины. С помощью компактной камеры эндоскопа наши специалисты проводят детальный осмотр двигателя, цилиндров, выпускной системы и других узлов, чтобы выявить скрытые дефекты, износ или повреждения. Эндоскопия автомобиля – это ваш инструмент уверенности в техническом состоянии машины. Запишитесь на диагностику и узнайте всё о своем авто!",
      image: "/images/img/ri-7.jpg",
    },

    "Компьютерная Диагностика" : {
      description: "В нашем автосервисе мы предлагаем высококачественную компьютерную диагностику двигателя, которая позволяет быстро и точно выявить проблемы в работе вашего автомобиля. С помощью современного оборудования и специализированного программного обеспечения мы считываем коды ошибок и анализируем параметры работы двигателя в реальном времени. Это помогает не только определить причину неисправностей, но и предотвратить возможные поломки в будущем.",
      image: "/images/img/ri-8.jpg",
    },

    "Гильзовка двигателей" : {
      description: "Гильзовка двигателя — это процесс восстановления цилиндров двигателя внутреннего сгорания путем установки новых гильз. Этот метод ремонта позволяет продлить срок службы двигателя, восстановить его заводские характеристики и сэкономить на дорогостоящей замене. Гильзовка представляет собой установку специальной металлической вставки (гильзы) в цилиндры двигателя. Она выполняет роль рабочей поверхности для поршня, обеспечивая оптимальное уплотнение и минимизируя износ. Процедура может быть выполнена как для ремонта изношенных цилиндров, так и для их модификации, например, при переходе на нестандартные размеры.",
      image: "/images/img/ri-9.jpg",
    },

  }


if(serviceInformationCloseButton) {
  serviceInformationCloseButton.addEventListener('click', () => {
    serviceInformationContainer.classList.remove("service__information__container__active")
  })
}

serviceItems.forEach((el) => {
  
  el.addEventListener('click', () => {
    const parentServiceItem = el;
    const titleElement = parentServiceItem.querySelector("h2");
    const descriptionElement = parentServiceItem.querySelector("p");
  
    if(!titleElement) {
      return;
    }

    const serviceName = titleElement.textContent.trim();
    const serviceData = servicesData[serviceName];

    serviceInformationTitle.textContent = serviceName;

    if(serviceData) {
      serviceInformationDescription.textContent = serviceData.description;
      serviceInformationImage.src = serviceData.image;
    }

    serviceInformationContainer.classList.add("service__information__container__active");
  })
})

// ОТКРЫТИЕ ПРАЙС ЛИСТА


const priceListItem = document.querySelectorAll(".price__list__item");

  priceListItem.forEach(el => {
    el.addEventListener('click', (e) => {
      const parentItemList = el;
      const innerItem = parentItemList.querySelector(".price__list__inner__item");
      const innerArrow = parentItemList.querySelector("svg");
      
      if (innerItem) {
        innerItem.classList.toggle("price__list__inner__item__hidden");
        innerArrow.classList.toggle("rotate__arrow");
      }
    });
  });



// ГАЛЕРЕЯ

function renderGallery() {
  const imgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let currentIndex = 0; 

  const galleryWrapper = document.querySelector(".gallery__wrapper");
  const nextImgArrow = document.querySelector(".arrow__next");
  const prevImgArrow = document.querySelector(".arrow__prev");

  function updateImage(index) {
    if (index < 0) {
      currentIndex = imgArray.length - 1; 
    } else if (index >= imgArray.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const imgElement = galleryWrapper.querySelector("img");
    if (imgElement) {
      imgElement.src = `/images/img/${imgArray[currentIndex]}.jpg`;
    } else {
      galleryWrapper.innerHTML = `<img src="/images/img/${imgArray[currentIndex]}.jpg">`;
    }
  }

  updateImage(currentIndex);

  nextImgArrow.addEventListener('click', () => {
    updateImage(currentIndex + 1);
  });

  prevImgArrow.addEventListener('click', () => {
    updateImage(currentIndex - 1);
  });
}

renderGallery();

// ВСЕ ДЛЯ FOOTER

const footerYear = document.querySelector(".footer__date__year");
footerYear.textContent = "@" + new Date().getFullYear() + " " + "SovaMotors13";