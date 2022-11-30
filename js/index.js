let scripts = '<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>'

// Extração das Cidades

// Extraindo via substring - São Paulo
let city1 = scripts.substring(93, 102);

// Extraindo via split - Las Vegas
let city2 = scripts.split('*')[3];

// Extraindo via split - Moscou
let city3 = scripts.split('*')[5];

// Extração de Roteiros 

// São Paulo
let scriptAOfSp = scripts.split('#')[1];
let scriptBOfSp = scripts.split('#')[2];

let indexOfScriptC = scripts.indexOf('Roteiro C');
let scriptCOfSp = scripts.substring(indexOfScriptC, indexOfScriptC + 103);

// Las Vegas
let scriptAOfLv = scripts.split('#')[4];
let scriptBOfLv = scripts.split('#')[5];
let scriptCOfLv = scripts.substring(1150, 1257);

// Moscou
let scriptAOfMs = scripts.split('#')[7];
let scriptBOfMs = scripts.split('#')[8];
let scriptCOfMs = scripts.substring(1150, 1257);

let numberOfLocationsSp = scriptAOfSp.split(';').length;
let numberOfLocationsLv = scriptAOfLv.split(';').length;
let numberOfLocationsMs = scriptAOfMs.split(';').length;

let sightsOfTheCenter = scripts.slice(465, 514);
let sightsOfTheDowntown = scripts.slice(1078, 1149);

let cities = document.getElementById('cities');
let paths = document.getElementById('paths');
let citedSites = document.getElementById('citedSites');
let nameSightsSaoPaulo = document.getElementById('nameSightsSaoPaulo');
let nameSightsLasVegas = document.getElementById('nameSightsLasVegas');

cities.innerHTML = `${city1}, ${city2} e ${city3}.`
paths.innerHTML = `${scriptAOfSp}<br> ${scriptAOfLv}<br> ${scriptAOfMs}`;
citedSites.innerHTML = `São Paulo: ${numberOfLocationsSp},<br> Las Vegas: ${numberOfLocationsLv},<br> Moscou: ${numberOfLocationsMs}<br>`;
nameSightsSaoPaulo.innerHTML = `${sightsOfTheCenter}`;
nameSightsLasVegas.innerHTML = `${sightsOfTheDowntown}`;
