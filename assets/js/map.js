var map = {
    "diana": "",
    "sava": "Capitale mondiale de la <b>vanille</b> <br/> C’est à Bemarivo (district de Sambava) qu’est située la plus grande zone de production de gousses de vanille avec une production annuelle évaluée à 800 tonnes, essentiellement destinée à l’exportation.<div class=\"mt-3\"><h3>Exportation : <b>375 tones  / ans</b></h3><h3>Revenue : <b>3 000 000 000 Ar</b></h3><h3>Agriculteur actif : <b>250</b></h3></div>",
    "sofia": "",
    "analajirofo": "",
    "boeny": "Capitale du <b>Riz</b> <br/> C’est à Bemarivo (district de Sambava) qu’est située la plus grande zone de production de gousses de vanille avec une production annuelle évaluée à 800 tonnes, essentiellement destinée à l’exportation.<div class=\"mt-3\"><h3>Exportation : <b>1005 tones  / ans</b></h3><h3>Revenue : <b>8 000 000 000 Ar</b></h3><h3>Agriculteur actif : <b>2000</b></h3></div>",
    "betsiboka": "",
    "alaotra-Mangoro": "",
    "atsinanana": "",
    "melaky": "",
    "bongolava": "",
    "analamanga": "",
    "itasy": "",
    "menabe": "",
    "vakinakaratra": "",
    "vatovavy-fitovinany": "",
    "amoron-i-mania": "",
    "haute-matsiatra": "",
    "atsimo-andrefana": "",
    "ihorombe": "",
    "atsimo-atsinanana": "",
    "anosy": "",
    "androy": ""
}

const format = (phrase) => {
    if (phrase !== "amoron-i-mania") {
        return phrase
            .toLowerCase()
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    } else {
        return "Amoron'i Mania"
    }

};

$('#map-region-name').html('Sava')
$('#map-region-text').html(map['sava'])
var regions = document.getElementsByClassName('map-region');
Array.prototype.forEach.call(regions, function(el) {
    el.addEventListener('click', (event) => {
        $(regions).removeClass('active')
        $('#map-region-name').hide();
        $('#map-region-text').hide();
        var target = event.currentTarget
        $('#map-region-name').html(format(target.id))
        $('#map-region-text').html(map[target.id])
        $(target).addClass('active');
        $('#map-region-name').show(400);
        $('#map-region-text').show(400);
    })
});