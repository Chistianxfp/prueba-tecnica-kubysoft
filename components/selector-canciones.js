$(document).ready(function(){
    var canciones = [];
    var multipleSelect = '';

    var $div = $('#div-select-canciones');
    var $checkbox = $('#check-multiple');
    var $select = null;

    var template = $('#selector-canciones-template').html();

    //binds
    $checkbox.on('change', setMultipleSelect);
    $div.delegate('#select-canciones', 'change', function(){ events.emit("selectCancionesChanged", $(this).val())});
    
    setData();
    setMultipleSelect();

    function render() {
       $div.html(Mustache.render(template, {canciones: canciones, multipleSelect: multipleSelect}));
    }

    function setMultipleSelect(){
        multipleSelect = $checkbox.is(":checked")?'multiple':'';
        events.emit("selectCancionesChanged", multipleSelect==''?JSON.stringify(canciones[0]):null) //Seleccionamos el primer valor del select al pasarlo a no-multiple
        render();
    }

    function setData(){
        canciones = [
            {"id": "1", "nombre": "...Baby One More Time", "fecha": "1990s"},
            {"id": "2", "nombre": "(I Can't Get No) Satisfaction", "fecha": "1960s"},
            {"id": "3", "nombre": "A Whiter Shade of Pale", "fecha": "1960s"},
            {"id": "4", "nombre": "Bad Guy", "fecha": "2010s"},
            {"id": "5", "nombre": "Beat It", "fecha": "1980s"},
            {"id": "6", "nombre": "Billie Jean", "fecha": "1980s"},
            {"id": "7", "nombre": "Blinding Lights", "fecha": "2020s"},
            {"id": "8", "nombre": "Blinding Lights", "fecha": "2010s"},
            {"id": "9", "nombre": "Blueberry Hill", "fecha": "1950s"},
            {"id": "10", "nombre": "Bohemian Rhapsody", "fecha": "1970s"},
            {"id": "11", "nombre": "Can't Stop the Feeling!", "fecha": "2010s"},
            {"id": "12", "nombre": "Chantilly Lace", "fecha": "1950s"},
            {"id": "13", "nombre": "Creep", "fecha": "1990s"},
            {"id": "14", "nombre": "Crazy", "fecha": "2000s"},
            {"id": "15", "nombre": "Dancing Queen", "fecha": "1970s"},
            {"id": "16", "nombre": "Despacito", "fecha": "2010s"},
            {"id": "17", "nombre": "Drivers License", "fecha": "2020s"},
            {"id": "18", "nombre": "Dream On", "fecha": "1970s"},
            {"id": "19", "nombre": "Enter Sandman", "fecha": "1990s"},
            {"id": "20", "nombre": "Every Breath You Take", "fecha": "1980s"},
            {"id": "21", "nombre": "Gangsta's Paradise", "fecha": "1990s"},
            {"id": "22", "nombre": "Good 4 U", "fecha": "2020s"},
            {"id": "23", "nombre": "Good Vibrations", "fecha": "1960s"},
            {"id": "24", "nombre": "Great Balls of Fire", "fecha": "1950s"},
            {"id": "25", "nombre": "Hey Jude", "fecha": "1960s"},
            {"id": "26", "nombre": "Hey Ya!", "fecha": "2000s"},
            {"id": "27", "nombre": "Hips Don't Lie", "fecha": "2000s"},
            {"id": "28", "nombre": "Hotel California", "fecha": "1970s"},
            {"id": "29", "nombre": "Hound Dog", "fecha": "1950s"},
            {"id": "30", "nombre": "Hot in Herre", "fecha": "2000s"},
            {"id": "31", "nombre": "I Want to Hold Your Hand", "fecha": "1960s"},
            {"id": "32", "nombre": "I Will Always Love You", "fecha": "1990s"},
            {"id": "33", "nombre": "Imagine", "fecha": "1970s"},
            {"id": "34", "nombre": "Johnny B. Goode", "fecha": "1950s"},
            {"id": "35", "nombre": "Kiss Me More", "fecha": "2020s"},
            {"id": "36", "nombre": "La Bamba", "fecha": "1950s"},
            {"id": "37", "nombre": "Layla", "fecha": "1970s"},
            {"id": "38", "nombre": "Let It Be", "fecha": "1970s"},
            {"id": "39", "nombre": "Levitating", "fecha": "2020s"},
            {"id": "40", "nombre": "Light My Fire", "fecha": "1960s"},
            {"id": "41", "nombre": "Like a Rolling Stone", "fecha": "1960s"},
            {"id": "42", "nombre": "Like a Virgin", "fecha": "1980s"},
            {"id": "43", "nombre": "Livin' on a Prayer", "fecha": "1980s"},
            {"id": "44", "nombre": "Losing My Religion", "fecha": "1990s"},
            {"id": "45", "nombre": "Lose Yourself", "fecha": "2000s"},
            {"id": "46", "nombre": "Montero (Call Me By Your Name)", "fecha": "2020s"},
            {"id": "47", "nombre": "My Generation", "fecha": "1960s"},
            {"id": "48", "nombre": "Old Town Road", "fecha": "2010s"},
            {"id": "49", "nombre": "Peggy Sue", "fecha": "1950s"},
            {"id": "50", "nombre": "Peaches", "fecha": "2020s"},
            {"id": "51", "nombre": "Purple Haze", "fecha": "1960s"},
            {"id": "52", "nombre": "Purple Rain", "fecha": "1980s"},
            {"id": "53", "nombre": "Respect", "fecha": "1960s"},
            {"id": "54", "nombre": "Rock Around the Clock", "fecha": "1950s"},
            {"id": "55", "nombre": "Rolling in the Deep", "fecha": "2010s"},
            {"id": "56", "nombre": "Rolling in the Deep", "fecha": "2000s"},
            {"id": "57", "nombre": "Royals", "fecha": "2010s"},
            {"id": "58", "nombre": "Save Your Tears", "fecha": "2020s"},
            {"id": "59", "nombre": "Seven Nation Army", "fecha": "2000s"},
            {"id": "60", "nombre": "Shape of You", "fecha": "2010s"},
            {"id": "61", "nombre": "Single Ladies", "fecha": "2000s"},
            {"id": "62", "nombre": "Smells Like Teen Spirit", "fecha": "1990s"},
            {"id": "63", "nombre": "Someone Like You", "fecha": "2010s"},
            {"id": "64", "nombre": "Stairway to Heaven", "fecha": "1970s"},
            {"id": "65", "nombre": "Stay", "fecha": "2020s"},
            {"id": "66", "nombre": "Stayin' Alive", "fecha": "1970s"},
            {"id": "67", "nombre": "Superstition", "fecha": "1970s"},
            {"id": "68", "nombre": "Sweet Child o' Mine", "fecha": "1980s"},
            {"id": "69", "nombre": "Take On Me", "fecha": "1980s"},
            {"id": "70", "nombre": "Torn", "fecha": "1990s"},
            {"id": "71", "nombre": "Tutti Frutti", "fecha": "1950s"},
            {"id": "72", "nombre": "Umbrella", "fecha": "2000s"},
            {"id": "73", "nombre": "Uptown Funk", "fecha": "2010s"},
            {"id": "74", "nombre": "Wake Me Up Before You Go-Go", "fecha": "1980s"},
            {"id": "75", "nombre": "Watermelon Sugar", "fecha": "2020s"},
            {"id": "76", "nombre": "With or Without You", "fecha": "1980s"},
            {"id": "77", "nombre": "Wonderwall", "fecha": "1990s"}
        ];
    }
});