ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [55.568008, 37.447144],
    zoom: 16,
  });

  var placeMark = new ymaps.Placemark([55.568008, 37.447144], {
    hintContent: "Дубровка",
    balloonContentHeader: "SomeMeat - Мясной ресторан",
    balloonContentBody:
      "Мясной ресторан расположенный в Новой Москве на Калужском шоссе на территории ЖК Дубровка. Смешанная кухня. Большой ассортимент вин.",
    // balloonContentFooter: "Мы пошли в гору",
  });
  myMap.geoObjects.add(placeMark);
}
