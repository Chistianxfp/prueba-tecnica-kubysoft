$(document).ready(function(){
    var decadas = [];

    var $div = $('#div-decadas');
    var template = $('#decadas-template').html();

    //binds
    events.on('selectCancionesChanged', setDecadas);

    //Modal datos decada
    $('#cancionesModal').on('show.bs.modal', function (event) {
        var modal_body = $(this).find('.modal-body');
        modal_body.html('');
        var title = $(this).find('#cancionesModalLabel');

        var button = $(event.relatedTarget);
        var fecha = button.data('fecha');
        var decada = decadas.filter(function(elem){return elem.fecha == fecha})[0];

        title.html(`Canciones de la década ${decada.fecha}:`)
        
        if($.isArray(decada.canciones)){
            decada.canciones.forEach(cancion => {
                modal_body.append(`<p>${cancion.nombre}</p>`);
            });
        }else{
            modal_body.append(`<p>${decada.canciones.nombre}</p>`);
        }
    });
    
    render();

    function render() {
        $div.html(Mustache.render(template, {decadas: decadas}));
     }

    function setDecadas(cancionesSelected){
        decadas = [];
        
        if($.isArray(cancionesSelected)){ //Si es multiple
            var counts = {};
            var canciones = {};
            
            cancionesSelected.forEach(element => {
                var elementObj = jQuery.parseJSON(element);
                counts[elementObj.fecha] = (counts[elementObj.fecha] || 0) + 1;
                canciones[elementObj.fecha]?canciones[elementObj.fecha].push(elementObj):canciones[elementObj.fecha] = [elementObj];
            });
            
            $.each(counts, function(key, value) {
                decadas.push({total: value, fecha: key, canciones: canciones[key]});
            });
        }else{
            if(cancionesSelected){
                var elementObj = jQuery.parseJSON(cancionesSelected);
                decadas.push({total: 1, fecha: elementObj.fecha, canciones: elementObj});
            }
        }
        
        render();
    }
});