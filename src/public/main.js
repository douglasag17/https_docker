$(function() {
    var $h1 = $("h1")
    var $latitude = $("input[name='latitude']")
    var $longitude= $("input[name='longitude']")
    var btnLocation = $("input[name='btnLocation']")

    btnLocation.on('click',obtener)

    function obtener() {
        geoconfig = {
        enableHighAccuracy:true,
        timeout:3000,
        maximunAge:60000
        }
        navigator.geolocation.getCurrentPosition( mostrar, errores, geoconfig )
    }

    function mostrar(position) {
        $latitude.val(position.coords.latitude )
        $longitude.val(position.coords.longitude)
    }

    function errores(error) {// este objeto tine dos atributos: error y message
        alert('Error: '+error.code + ' '+error.message)
    }
})  