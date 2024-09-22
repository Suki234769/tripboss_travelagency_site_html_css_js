const stadiums = [
    // England
    { name: "Wembley Stadium", price: 150, country: "England", url: "https://www.wembleystadium.com/" },
    { name: "Old Trafford", price: 120, country: "England", url: "https://www.manutd.com/en/Old-Trafford" },
    { name: "Anfield", price: 110, country: "England", url: "https://www.liverpoolfc.com/stadium" },
    { name: "Emirates Stadium", price: 100, country: "England", url: "https://www.arsenal.com/emirates-stadium" },
    { name: "Etihad Stadium", price: 90, country: "England", url: "https://www.mancity.com/etihad-stadium" },
    { name: "St. James' Park", price: 80, country: "England", url: "https://www.nufc.co.uk/stadium/st-james-park/" },
    { name: "Villa Park", price: 70, country: "England", url: "https://www.avfc.co.uk/club/villa-park" },
    { name: "London Stadium", price: 75, country: "England", url: "https://www.londonstadium.com/" },
    { name: "St Mary's Stadium", price: 65, country: "England", url: "https://www.southamptonfc.com/st-marys" },
    { name: "Molineux Stadium", price: 60, country: "England", url: "https://www.wolves.co.uk/stadium/molineux/" },

    // Spain
    { name: "Camp Nou", price: 120, country: "Spain", url: "https://www.fcbarcelona.com/en/camp-nou" },
    { name: "Santiago Bernabéu", price: 140, country: "Spain", url: "https://www.realmadrid.com/en/santiago-bernabeu-stadium" },
    { name: "Metropolitano Stadium", price: 110, country: "Spain", url: "https://www.atleticodemadrid.com/en/stadium" },
    { name: "Mestalla", price: 90, country: "Spain", url: "https://www.valenciacf.com/en/stadium" },
    { name: "San Mamés", price: 85, country: "Spain", url: "https://www.athletic-club.eus/en/stadium/san-mames.html" },
    { name: "Benito Villamarín", price: 70, country: "Spain", url: "https://www.realbetisbalonpie.es/en/stadium" },
    { name: "Estadio de la Cerámica", price: 65, country: "Spain", url: "https://www.villarrealcf.es/en/estadio" },
    { name: "Ramon Sanchez Pizjuán", price: 80, country: "Spain", url: "https://www.sevillafc.es/en/stadium" },
    { name: "Estadio José Zorrilla", price: 60, country: "Spain", url: "https://www.realvalladolid.es/en/stadium" },
    { name: "Estadio El Sadar", price: 50, country: "Spain", url: "https://www.osasuna.es/en/stadium" },

    // Germany
    { name: "Allianz Arena", price: 130, country: "Germany", url: "https://allianz-arena.com/en/" },
    { name: "Signal Iduna Park", price: 120, country: "Germany", url: "https://www.bvb.de/eng/Club/Signal-Iduna-Park" },
    { name: "Volksparkstadion", price: 100, country: "Germany", url: "https://www.hsv.de/en/stadium" },
    { name: "Mercedes-Benz Arena", price: 110, country: "Germany", url: "https://www.vfb.de/en/club/stadium/" },
    { name: "Red Bull Arena", price: 90, country: "Germany", url: "https://www.dierotenbullen.com/en/stadium/" },
    { name: "Veltins-Arena", price: 80, country: "Germany", url: "https://www.schalke04.de/en/stadium/" },
    { name: "Commerzbank-Arena", price: 85, country: "Germany", url: "https://www.eintracht.de/en/stadium/" },
    { name: "WWK Arena", price: 70, country: "Germany", url: "https://www.fcaugsburg.de/en/stadium/" },
    { name: "Olympiastadion", price: 75, country: "Germany", url: "https://www.olympiastadion-berlin.de/en/" },
    { name: "DFB-Pokal Stadium", price: 60, country: "Germany", url: "https://www.dfb.de/en/home/" },

    // Italy
    { name: "San Siro", price: 150, country: "Italy", url: "https://www.acmilan.com/en/club/stadium" },
    { name: "Stadio Olimpico", price: 130, country: "Italy", url: "https://www.asroma.com/en/stadio-olimpico" },
    { name: "Allianz Stadium", price: 100, country: "Italy", url: "https://www.juventus.com/en/stadium" },
    { name: "Stadio San Nicola", price: 90, country: "Italy", url: "https://www.bari1908.com/stadium" },
    { name: "Stadio Artemio Franchi", price: 85, country: "Italy", url: "https://www.acffiorentina.com/en/stadium" },
    { name: "Stadio Dall'Ara", price: 70, country: "Italy", url: "https://www.bolognafc.it/en/stadium" },
    { name: "Stadio Marcantonio Bentegodi", price: 60, country: "Italy", url: "https://www.hellasverona.it/en/stadium" },
    { name: "Stadio Renato Dall'Ara", price: 75, country: "Italy", url: "https://www.bolognafc.it/en/stadium" },
    { name: "Stadio Paolo Mazza", price: 65, country: "Italy", url: "https://www.spalferrara.it/en/stadium" },
    { name: "Stadio Comunale", price: 55, country: "Italy", url: "https://www.frosinonecalcio.com/en/stadium" },

    // France
    { name: "Stade de France", price: 140, country: "France", url: "https://www.stadefrance.com/en/" },
    { name: "Parc des Princes", price: 120, country: "France", url: "https://en.psg.fr/stadium" },
    { name: "Stade Vélodrome", price: 110, country: "France", url: "https://www.stadevelodrome.com/" },
    { name: "Groupama Stadium", price: 100, country: "France", url: "https://www.ol.fr/en/groupama-stadium" },
    { name: "Stade de Nice", price: 90, country: "France", url: "https://www.ogcnice.com/en/stadium" },
    { name: "Stade Pierre-Mauroy", price: 85, country: "France", url: "https://www.losc.fr/en/stadium" },
    { name: "Stade de la Beaujoire", price: 75, country: "France", url: "https://www.fc Nantes.com/en/stadium" },
    { name: "Stade Auguste Delaune", price: 70, country: "France", url: "https://www.staderennais.com/en/stadium" },
    { name: "Stade de Reims", price: 65, country: "France", url: "https://www.stade-de-reims.com/en/stadium" },
    { name: "Stade de la Meinau", price: 60, country: "France", url: "https://www.rcstrasbourgalsace.fr/en/stadium" }
];

document.getElementById('travelForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const destination = document.getElementById('destination').value.toLowerCase();
    const maxPrice = parseFloat(document.getElementById('maxPrice').value);
    const resultsContainer = document.getElementById('results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    const results = stadiums.filter(stadium => 
        (stadium.name.toLowerCase().includes(destination) || stadium.country.toLowerCase().includes(destination)) && stadium.price <= maxPrice
    );

    if (results.length > 0) {
        const ul = document.createElement('ul');
        results.forEach(stadium => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = stadium.url; // Set the URL
            link.textContent = `${stadium.name} - $${stadium.price} (${stadium.country})`;
            link.classList.add('stadium-link'); // Add the CSS class
            link.target = "_blank"; // Open in a new tab
            li.appendChild(link); // Append link to the list item
            ul.appendChild(li); // Append list item to the unordered list
        });
        resultsContainer.appendChild(ul);
    } else {
        resultsContainer.textContent = 'No stadiums found.';
    }
});
