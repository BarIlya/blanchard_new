ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("practice_map", {
            // center: [55.758468, 37.601088],
            center: [55.7603, 37.5914],
            zoom: 14
        });
        
      var myPlacemark2 = new ymaps.Placemark([55.7608, 37.5908], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/mark.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [0, 0]
        });
      
      myMap.geoObjects.add(myPlacemark2);

      myMap.controls.remove('geolocationControl');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('rulerControl');
    }
