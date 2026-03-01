/**
 * BIOMAS — Atlas dos Ecossistemas Terrestres
 * script.js — Lógica principal da aplicação
 */

'use strict';

/* ================================================================
   DADOS DOS BIOMAS
   ================================================================ */
const B = {
  floresta: {
    name: 'Florestas', label: 'FLORESTAS TROPICAIS', it: 'Floresta Tropical Úmida',
    color: '#4ade80', glow: 'rgba(74,222,128,.15)',
    heroBg: 'radial-gradient(ellipse at 40% 65%,#0a2d12 0%,#000 72%)',
    st: { a: '8.3M', s: '1.4M+', t: '28°C', c: '6%' },
    bg: 'img/floresta.jpg',
    sub: 'Floresta Tropical Úmida',
    intro: 'As florestas tropicais são os ecossistemas mais biologicamente diversos da Terra. Apesar de cobrirem apenas 6% da superfície terrestre, abrigam mais da metade de todas as espécies conhecidas. A densidade do dossel, a umidade constante e a temperatura estável criam um mosaico de nichos ecológicos sem paralelo.',
    mapP: 'As Florestas Tropicais se concentram na faixa equatorial: Amazônia, Bacia do Congo e Sudeste Asiático formam os três grandes blocos verdes do planeta.',
    msB: 'FLORESTAS', msS: '10 REGIÕES ATIVAS',
    faunaP: 'Espécies adaptadas ao dossel denso, alta umidade e estratificação vertical complexa das florestas tropicais.',
    regions: ['Amazônia (Brasil)', 'Floresta do Congo', 'Sudeste Asiático', 'Mata Atlântica'],
    threats: [
      { t: 'Desmatamento', d: 'A conversão de floresta para agricultura e pecuária destrói 4.7 milhões de hectares por ano, fragmentando habitats críticos.' },
      { t: 'Mudanças Climáticas', d: 'O aumento de temperatura e a alteração dos padrões de chuva ameaçam as condições úmidas essenciais para a floresta.' },
      { t: 'Mineração Ilegal', d: 'Garimpos irregulares contaminam rios com mercúrio e destroem ecossistemas ripários de forma permanente.' },
      { t: 'Espécies Invasoras', d: 'Plantas e animais exóticos competem com espécies nativas, alterando dinamicamente a estrutura dos ecossistemas.' },
    ],
    tvBars: [{ n: 'Desmatamento', v: 78 }, { n: 'Perda Hídrica', v: 55 }, { n: 'Biodiversidade', v: 88 }, { n: 'Status Crítico', v: 65 }],
    quote: 'Estamos destruindo a farmácia mais completa que a natureza já criou, e ainda nem catalogamos todos os seus medicamentos.',
    quoteSrc: '— Dr. Thomas Lovejoy, Biólogo de Conservação',
    hl: { 'BRA': '65%', 'COD': '55%', 'IDN': '70%', 'MYS': '62%', 'COL': '58%', 'PER': '60%', 'CMR': '45%', 'GAB': '85%', 'PNG': '72%', 'VEN': '50%' },
    hd: { 'BRA': 'Amazônia, maior floresta tropical do mundo', 'COD': 'Floresta do Congo — 2ª maior', 'IDN': 'Florestas de Sumatra e Borneo', 'MYS': 'Matas pluviais da Malásia', 'COL': 'Florestas Amazônicas e andinas', 'PER': 'Floresta Amazônica peruana', 'CMR': 'Bacia do Congo central', 'GAB': 'Maior cobertura florestal per capita', 'PNG': 'Florestas da Melanésia', 'VEN': 'Amazônia e tepuis venezuelanos' },
    fauna: [
      { n: 'Jaguar', l: 'Panthera onca', d: 'Maior felino das Américas. Nada com maestria e caça tanto na terra quanto na água.', p: 'img/jaguar.jpg', v: 90, s: 80, r: 75 },
      { n: 'Arara Azul', l: 'Anodorhynchus hyacinthinus', d: 'Maior psitacídeo do mundo. Constrói seus ninhos em ocos de palmeiras.', p: 'img/arara.jpg', v: 70, s: 85, r: 90 },
      { n: 'Preguiça Três Dedos', l: 'Bradypus tridactylus', d: 'Habitante do dossel, move-se apenas 38 metros por dia. Seu pelo abriga algas simbióticas.', p: 'img/preguica.jpg', v: 55, s: 20, r: 80 },
    ],
    particle: 'leaves',
    introCards: [
      { bg: 'img/pulmao.jpg', tag: 'Amazônia', name: 'O Pulmão do Mundo', text: 'A floresta amazônica regula o ciclo hídrico de todo o continente sul-americano através dos chamados "rios voadores" — correntes de umidade que percorrem milhares de quilômetros.', big: true },
      { bg: 'img/quatro.jpg', tag: 'Dossel', name: 'Estratificação Vertical', text: 'Quatro camadas distintas — solo, sub-bosque, dossel e emergentes — criam microclimas únicos habitados por espécies altamente especializadas.' },
      { bg: 'img/tucano.jpg', tag: 'Biodiversidade', name: 'Capital Biológico', text: 'Em um hectare de floresta tropical podem existir mais espécies de árvores do que em toda a Europa temperada.' },
    ],
  },

  oceano: {
    name: 'Oceanos', label: 'OCEANOS PROFUNDOS', it: 'Abissal & Zona Fótica',
    color: '#38bdf8', glow: 'rgba(56,189,248,.15)',
    heroBg: 'radial-gradient(ellipse at 50% 70%,#0a1a3d 0%,#000 72%)',
    st: { a: '361M', s: '230K+', t: '3°C', c: '71%' },
    bg: 'img/oceano.jpg',
    sub: 'Zona Pelágica & Abissal',
    intro: 'Os oceanos cobrem 71% da superfície terrestre e representam 94% do volume habitável do planeta. De suas águas iluminadas à superfície às fossas abissais a 11 km de profundidade, escondem a maior diversidade de formas de vida da Terra — a maioria ainda desconhecida pela ciência.',
    mapP: 'Os oceanos cobrem a maior parte da superfície terrestre. Zonas de recife de coral, como o Triângulo do Coral e a Grande Barreira, concentram a maior biodiversidade marinha.',
    msB: 'OCEANOS', msS: 'COBERTURA GLOBAL 71%',
    faunaP: 'Organismos adaptados a pressões extremas, ausência de luz e temperaturas próximas ao zero nas profundezas abissais.',
    regions: ['Pacífico Norte', 'Atlântico Sul', 'Triângulo do Coral', 'Ártico Glacial'],
    threats: [
      { t: 'Acidificação', d: 'A absorção de CO₂ atmosférico reduz o pH oceânico, dissolvendo esqueletos de corais e conchas de moluscos.' },
      { t: 'Aquecimento', d: 'Eventos de branqueamento de corais se tornaram 5× mais frequentes desde 1980, ameaçando recifes em todo o mundo.' },
      { t: 'Sobrepesca', d: '90% dos estoques pesqueiros do mundo estão totalmente explorados ou superexplotados, colapsando cadeias tróficas marinhas.' },
      { t: 'Plástico', d: '8 milhões de toneladas de plástico entram nos oceanos anualmente. Microplásticos foram encontrados nas fossas mais profundas.' },
    ],
    tvBars: [{ n: 'Acidificação', v: 72 }, { n: 'Aquecimento', v: 68 }, { n: 'Sobrepesca', v: 85 }, { n: 'Poluição', v: 70 }],
    quote: 'Proteger 30% do oceano até 2030 poderia salvar mais de 60% das espécies marinhas ameaçadas de extinção.',
    quoteSrc: '— IUCN, Relatório de Biodiversidade Marinha 2023',
    hl: { 'USA': 'Pacífico', 'AUS': 'G. Barreira', 'PHL': 'Triângulo', 'MEX': 'Caribe', 'NOR': 'Ártico', 'ISL': 'Atlântico N.', 'JPN': 'Pac. NW', 'CHL': 'Humboldt' },
    hd: { 'USA': 'Recifes do Pacífico e Golfo do México', 'AUS': 'Grande Barreira de Coral', 'PHL': 'Triângulo de Coral — máxima biodiversidade', 'MEX': 'Mar do Caribe e Golfo', 'NOR': 'Fiordes árticos e mar de Barents', 'ISL': 'Atlântico Norte subártico', 'JPN': 'Pacífico noroeste', 'CHL': 'Corrente de Humboldt' },
    fauna: [
      { n: 'Baleia Jubarte', l: 'Megaptera novaeangliae', d: 'Famosa pelos saltos acrobáticos e cantos complexos que podem durar horas nas profundezas.', p: 'img/baleia.jpg', v: 100, s: 50, r: 65 },
      { n: 'Tubarão Baleia', l: 'Rhincodon typus', d: 'Maior peixe do planeta. Filtra até 6.000 litros de água por hora para se alimentar de plâncton.', p: 'img/tubarao.jpg', v: 85, s: 55, r: 72 },
      { n: 'Manta Ray', l: 'Manta birostris', d: 'Maior raia do mundo, com envergadura de até 7 metros e vida de 40 anos.', p: 'img/manta.jpg', v: 80, s: 65, r: 72 },
    ],
    particle: 'bubbles',
    introCards: [
      { bg: 'img/abismo.jpg', tag: 'Profundezas', name: 'O Abismo Inexplorado', text: 'Menos de 20% do fundo oceânico foi mapeado com alta resolução. As fossas abissais escondem ecossistemas completos dependentes de energia química, não solar.', big: true },
      { bg: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=500&q=80', tag: 'Corais', name: 'Florestas Subaquáticas', text: 'Os recifes de coral ocupam menos de 1% do oceano, mas abrigam 25% de todas as espécies marinhas conhecidas.' },
      { bg: 'img/oxigenio.jpg', tag: 'Zona Fótica', name: 'Fábrica de Oxigênio', text: 'O fitoplâncton oceânico produz metade do oxigênio que respiramos, absorvendo enormes quantidades de CO₂ atmosférico.' },
    ],
  },

  vulcao: {
    name: 'Vulcânico', label: 'ÁREAS VULCÂNICAS', it: 'Anel de Fogo do Pacífico',
    color: '#f97316', glow: 'rgba(249,115,22,.15)',
    heroBg: 'radial-gradient(ellipse at 60% 50%,#3d0a00 0%,#000 72%)',
    st: { a: '0.5M', s: '12K+', t: '45°C', c: '0.3%' },
    bg: 'img/vulcao.jpg',
    sub: 'Anel de Fogo do Pacífico',
    intro: 'As regiões vulcânicas são laboratórios vivos da evolução. O solo enriquecido por minerais e o isolamento geográfico de ilhas vulcânicas criam condições únicas para a especiação acelerada. O Anel de Fogo do Pacífico, com 40.000 km de extensão, concentra 90% dos terremotos e 75% dos vulcões do planeta.',
    mapP: 'O Anel de Fogo circunda o Oceano Pacífico, da Nova Zelândia ao Japão, passando pelas Américas. Islândia e rift zones africanos complementam o mapa vulcânico global.',
    msB: 'VULCÂNICO', msS: '8 ZONAS ATIVAS',
    faunaP: 'Extremófilos e espécies endêmicas adaptadas a solos ácidos, altas temperaturas e isolamento geográfico extremo.',
    regions: ['Islândia', 'Arco Japonês', 'Indonésia', 'Galápagos (Equador)'],
    threats: [
      { t: 'Erupções Imprevisíveis', d: 'Eventos vulcânicos catastróficos destroem habitats estabelecidos em minutos, forçando a recolonização de zero.' },
      { t: 'Acidez do Solo', d: 'Solos ácidos enriquecidos com enxofre limitam drasticamente as espécies capazes de se estabelecer em zonas vulcânicas.' },
      { t: 'Turismo Invasivo', d: 'O apelo estético de paisagens vulcânicas atrai turismo predatório que perturba espécies endêmicas altamente sensíveis.' },
      { t: 'Espécies Introduzidas', d: 'Em ilhas vulcânicas como Galápagos, mamíferos invasores como ratos e cabras devastam fauna sem predadores naturais.' },
    ],
    tvBars: [{ n: 'Atividade Sísmica', v: 92 }, { n: 'Risco de Erupção', v: 78 }, { n: 'Endemismo', v: 85 }, { n: 'Fragilidade', v: 80 }],
    quote: 'As Galápagos são o lugar onde Darwin leu o livro da evolução. Cada espécie ali é um capítulo único, nunca mais se repetirá.',
    quoteSrc: '— Dr. Peter Grant, Biólogo Evolutivo — Princeton',
    hl: { 'ISL': '95%', 'JPN': '80%', 'IDN': '85%', 'PHL': '75%', 'CHL': '70%', 'ECU': '65%', 'USA': '30%', 'MEX': '55%' },
    hd: { 'ISL': 'Terra do fogo e gelo — atividade constante', 'JPN': 'Arco vulcânico, 111 vulcões ativos', 'IDN': 'Maior cadeia vulcânica, 130 vulcões', 'PHL': 'Anel de Fogo Ocidental', 'CHL': 'Cordilheira andina vulcânica', 'ECU': 'Galápagos e vulcões andinos', 'USA': 'Yellowstone e Cascades', 'MEX': 'Cinturão Vulcânico Mexicano' },
    fauna: [
      { n: 'Tentilhão-vampiro', l: 'Geospiza difficilis septentrionalis', d: 'Ave endêmica das Galápagos que se alimenta do sangue de outras aves. Adaptação extrema desenvolvida em ilhas vulcânicas com escassez de recursos.', p: 'img/vampiro.jpg', v: 65, s: 45, r: 88 },
      { n: 'Termófilo', l: 'Thermus aquaticus', d: 'Microrganismo que prospera em fontes hidrotermais acima de 70°C. Sua enzima DNA polimerase revolucionou a biotecnologia moderna.', p: 'img/termofilo.jpg', v: 80, s: 25, r: 90 },
      { n: 'Iguana Terrestre', l: 'Conolophus subcristatus', d: 'Habita as ilhas vulcânicas das Galápagos. Alimenta-se de cactos e flores, sendo capaz de sobreviver semanas sem água.', p: 'img/iguana.jpg', v: 80, s: 75, r: 70 },
    ],
    particle: 'embers',
    introCards: [
      { bg: 'img/vulcaogelo.jpg', tag: 'Islândia', name: 'Terra de Fogo e Gelo', text: 'A Islândia é o único lugar do mundo onde a Dorsal Mesoatlântica emerge acima do nível do mar. Dois continentes se separam visivelmente a 2,5 cm por ano.', big: true },
      { bg: 'img/laboratorio.jpg', tag: 'Galápagos', name: 'Laboratório da Evolução', text: 'O isolamento das ilhas vulcânicas das Galápagos produziu 9.000 espécies endêmicas em 5 milhões de anos — taxa evolutiva sem paralelo.' },
      { bg: 'img/vida.jpg', tag: 'Extremófilos', name: 'Vida no Limite', text: 'Microrganismos arqueanos vivem em fontes hidrotermais a 121°C, revelando os limites extremos da bioquímica da vida.' },
    ],
  },

  montanha: {
    name: 'Montanhas', label: 'MONTANHAS CONGELADAS', it: 'Neves Perpétuas & Tundra',
    color: '#93c5fd', glow: 'rgba(147,197,253,.15)',
    heroBg: 'radial-gradient(ellipse at 30% 40%,#1a2744 0%,#000 72%)',
    st: { a: '14M', s: '85K+', t: '-15°C', c: '10%' },
    bg: 'img/montanha.jpg',
    sub: 'Neves Perpétuas & Tundra Alpina',
    intro: 'As montanhas congeladas são as caixas d\'água do planeta. 70% da água doce superficial global provém do degelo das cadeias montanhosas. O Himalaia, os Andes, as Montanhas Rochosas e as regiões subárticas definem condições extremas que moldaram adaptações evolutivas únicas ao longo de milhões de anos.',
    mapP: 'O Himalaia, Andes, Alasca e Sibéria concentram as maiores extensões de neve e gelo permanente fora dos polos. A Groenlândia abriga 10% do gelo superficial da Terra.',
    msB: 'MONTANHAS', msS: '7 CADEIAS MAPEADAS',
    faunaP: 'Adaptações extremas para suportar frio intenso, altitude elevada, radiação UV intensa e ventos cortantes.',
    regions: ['Himalaia (Nepal/China)', 'Andes (Chile/Peru)', 'Ártico Canadense', 'Sibéria (Rússia)'],
    threats: [
      { t: 'Derretimento Glacial', d: 'Os glaciares mundiais perdem 267 bilhões de toneladas de gelo por ano, ameaçando o fornecimento de água de 2 bilhões de pessoas.' },
      { t: 'Permafrost', d: 'O degelo do permafrost siberiano libera metano armazenado há milhares de anos, acelerando o aquecimento global em ciclo positivo.' },
      { t: 'Altitude Extrema', d: 'Espécies de altitude não têm para onde migrar diante do aquecimento — a cada grau, as zonas climáticas sobem 150 metros.' },
      { t: 'Isolamento Populacional', d: 'Populações de grandes mamíferos em picos isolados enfrentam problemas genéticos por consanguinidade crescente.' },
    ],
    tvBars: [{ n: 'Degelo Glacial', v: 88 }, { n: 'Permafrost', v: 74 }, { n: 'Biodiversidade', v: 55 }, { n: 'Risco Hídrico', v: 82 }],
    quote: 'Quando os últimos glaciares desaparecerem, milhões de pessoas acordarão sem a fonte de água que sempre consideraram eterna.',
    quoteSrc: '— Lonnie Thompson, Glaciologista — Ohio State University',
    hl: { 'CAN': '40%', 'RUS': '35%', 'GRL': '95%', 'NOR': '65%', 'CHN': '45%', 'NPL': '90%', 'USA': '25%', 'ISL': '80%' },
    hd: { 'CAN': 'Montanhas Rochosas e Ártico', 'RUS': 'Sibéria e Urais congelados', 'GRL': 'Calota de gelo — 3km espessura', 'NOR': 'Fiordes e montanhas escandinavas', 'CHN': 'Tibete e Himalaia', 'NPL': 'Everest — 8848m, teto do mundo', 'USA': 'Alasca e Montanhas Rochosas', 'ISL': 'Glaciares e planaltos vulcânicos' },
    fauna: [
      { n: 'Leopardo das Neves', l: 'Panthera uncia', d: 'Felino fantasma das altitudes. Cauda enorme serve como manta no frio intenso das montanhas da Ásia Central.', p: 'img/leopardo.jpg', v: 80, s: 88, r: 96 },
      { n: 'Urso Polar', l: 'Ursus maritimus', d: 'Maior carnívoro terrestre. Pelo translúcido e pele negra absorvem o máximo de calor solar nas regiões árticas.', p: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=500&q=80', v: 95, s: 55, r: 65 },
      { n: 'Lobo do Ártico', l: 'Canis lupus arctos', d: 'Subespécie do lobo cinzento adaptada ao extremo norte. Pelagem branca espessa e patas largas funcionam como raquetes de neve naturais.', p: 'img/lobo.jpg', v: 80, s: 88, r: 70 },
    ],
    particle: 'snow',
    introCards: [
      { bg: 'img/teto.jpg', tag: 'Himalaia', name: 'O Teto do Mundo', text: 'O Himalaia surgiu da colisão entre as placas Indiana e Eurasiana há 50 milhões de anos e continua crescendo 5mm por ano. Abriga 14 picos acima de 8.000 metros.', big: true },
      { bg: 'img/gelo.jpg', tag: 'Ártico', name: 'Gelo em Colapso', text: 'O Ártico aquece 4x mais rápido que o resto do planeta. Em 2023, o gelo marinho atingiu seu mínimo histórico em setembro.' },
      { bg: 'img/musgo.jpg', tag: 'Tundra', name: 'Solo de Musgo e Líquen', text: 'A tundra ártica armazena 1,7 trilhão de toneladas de carbono orgânico congelado — mais que toda a atmosfera terrestre atual.' },
    ],
  },

  deserto: {
    name: 'Desertos', label: 'DESERTOS ÁRIDOS', it: 'Aridez Extrema & Adaptação',
    color: '#fbbf24', glow: 'rgba(251,191,36,.15)',
    heroBg: 'radial-gradient(ellipse at 70% 50%,#2d1a00 0%,#000 72%)',
    st: { a: '50M', s: '28K+', t: '38°C', c: '33%' },
    bg: 'img/deserto.jpg',
    sub: 'Saara & Desertos Quentes',
    intro: 'Os desertos cobrem um terço das terras emersas e são muito mais do que vazios de areia. São ecossistemas de adaptação extrema, onde cada organismo desenvolveu soluções engenhosas para sobreviver com menos de 250mm de chuva por ano. Da captura de orvalho ao metabolismo noturno, a vida encontra formas de persistir.',
    mapP: 'O Saara, Atacama, Gobi, Kalahari e os desertos australianos formam as principais regiões áridas. O Atacama, no Chile, é o deserto mais árido do mundo com menos de 1mm de chuva anual.',
    msB: 'DESERTOS', msS: '11 REGIÕES MAPEADAS',
    faunaP: 'Sobreviventes evolutivos com adaptações únicas para reter água, dissipar calor e caçar no frescor da noite.',
    regions: ['Saara (Argélia/Egito)', 'Atacama (Chile)', 'Gobi (China/Mongólia)', 'Kalahari (Namíbia)'],
    threats: [
      { t: 'Desertificação', d: '12 milhões de hectares de terra produtiva se convertem em deserto a cada ano devido ao manejo inadequado do solo.' },
      { t: 'Urbanização', d: 'O crescimento de cidades em zonas áridas consome aquíferos fósseis formados há 10.000 anos em questão de décadas.' },
      { t: 'Energia Solar', d: 'Instalações de painéis solares em larga escala alteram o albedo e a dinâmica de vento de regiões áridas sensíveis.' },
      { t: 'Caça Ilegal', d: 'Espécies endêmicas como a gazela-dama e o orix-branco foram extintas na natureza por pressão de caça furtiva.' },
    ],
    tvBars: [{ n: 'Desertificação', v: 75 }, { n: 'Escassez Hídrica', v: 88 }, { n: 'Endemismo', v: 60 }, { n: 'Temperatura Extrema', v: 95 }],
    quote: 'O deserto não é vazio. É um arquivo da história climática da Terra, e cada duna é uma página que estamos apagando.',
    quoteSrc: '— Dr. Sharon Nicholson, Climatologista — Florida State University',
    hl: { 'DZA': '85%', 'SAU': '90%', 'AUS': '70%', 'CHL': '25%', 'EGY': '95%', 'IRN': '65%', 'NAM': '80%', 'MAR': '50%', 'LBY': '92%' },
    hd: { 'DZA': 'Saara argelino, maior deserto quente', 'SAU': 'Deserto Árabe e Rub al-Khali', 'AUS': 'Great Victoria Desert', 'CHL': 'Atacama — o mais árido do mundo', 'EGY': 'Saara egípcio', 'IRN': 'Kavir e Lut — calor extremo', 'NAM': 'Namib — o mais antigo', 'MAR': 'Saara marroquino', 'LBY': 'Deserto da Líbia' },
    fauna: [
      { n: 'Camelo Bactriano', l: 'Camelus bactrianus', d: 'Armazena gordura nas corcovas. Pode perder 30% do peso corporal em água sem morrer.', p: 'img/deserto-1.jpg', v: 90, s: 50, r: 65 },
      { n: 'Escorpião do Saara', l: 'Androctonus australis', d: 'Resiste a temperaturas de 45°C. Floresce sob a luz UV que a maioria dos animais evita.', p: 'img/deserto-2.jpg', v: 55, s: 40, r: 70 },
      { n: 'Raposa Fennec', l: 'Vulpes zerda', d: 'Orelhas de 15cm funcionam como radiadores térmicos. Caça pela vibração na areia.', p: 'img/deserto-3.jpg', v: 60, s: 72, r: 68 },
    ],
    particle: 'sand',
    introCards: [
      { bg: 'img/desert-1.jpg', tag: 'Saara', name: 'O Maior Deserto Quente', text: 'O Saara foi um savana verde há apenas 6.000 anos. A mudança climática natural transformou o ecossistema, deixando no solo fósseis de hipopótamos e crocodilos.', big: true },
      { bg: 'img/desert-2.jpg', tag: 'Atacama', name: 'O Mais Árido do Planeta', text: 'Em certas partes do Atacama não chove há séculos. Mesmo assim, organismos extremófilos sobrevivem em rochas translúcidas usando a luz difusa.' },
      { bg: 'img/desert-3.jpg', tag: 'Adaptação', name: 'Engenharia da Sobrevivência', text: 'O cacto pode expandir seu tronco em 20% após a chuva, armazenando centenas de litros de água em tecidos especializados.' },
    ],
  },
};

const BK = ['floresta', 'oceano', 'vulcao', 'montanha', 'deserto'];
let active = 'floresta';

/* ================================================================
   CURSOR PERSONALIZADO
   ================================================================ */
const curEl = document.getElementById('cur');
const curR  = document.getElementById('cur-r');
let cx = 0, cy = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; }, { passive: true });

(function animateCursor() {
  curEl.style.left = cx + 'px';
  curEl.style.top  = cy + 'px';
  rx += (cx - rx) * 0.11;
  ry += (cy - ry) * 0.11;
  curR.style.left = rx + 'px';
  curR.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
})();

document.addEventListener('mousedown', () => curEl.style.transform = 'translate(-50%,-50%) scale(.45)', { passive: true });
document.addEventListener('mouseup',   () => curEl.style.transform = 'translate(-50%,-50%) scale(1)',   { passive: true });

/* ================================================================
   SISTEMA DE PARTÍCULAS
   ================================================================ */
const pCvs = document.getElementById('ptx');
const pCtx = pCvs.getContext('2d');
let pts = [], ptFrame, lastPtTime = 0;
const PT_COUNT = 35;

function rszPtx() {
  pCvs.width  = window.innerWidth;
  pCvs.height = window.innerHeight;
}
rszPtx();

class Pt {
  constructor() { this.t = B[active].particle; this.reset(true); }

  reset(ini = false) {
    this.x  = Math.random() * pCvs.width;
    this.y  = ini ? Math.random() * pCvs.height : (this.t === 'bubbles' || this.t === 'embers' ? pCvs.height + 8 : -8);
    if (this.t === 'sand') { this.x = -8; this.y = Math.random() * pCvs.height; }
    this.op = Math.random() * 0.65 + 0.15;
    this.c  = B[active].color;
    switch (this.t) {
      case 'leaves':  this.vx = (Math.random() - 0.5) * 0.9;  this.vy = Math.random() * 0.55 + 0.18; this.rot = Math.random() * 360; this.rs = (Math.random() - 0.5) * 1.6; this.sz = Math.random() * 5 + 2;   break;
      case 'bubbles': this.vx = (Math.random() - 0.5) * 0.3;  this.vy = -(Math.random() * 0.35 + 0.18); this.sz = Math.random() * 3.5 + 1.2; break;
      case 'embers':  this.vx = (Math.random() - 0.5) * 1.2;  this.vy = -(Math.random() * 1.4 + 0.35);  this.sz = Math.random() * 2 + 0.5;   break;
      case 'snow':    this.vx = (Math.random() - 0.5) * 0.45; this.vy = Math.random() * 0.6 + 0.18;  this.sz = Math.random() * 2 + 0.8;   break;
      case 'sand':    this.vx = Math.random() * 1.6 + 0.7;    this.vy = (Math.random() - 0.5) * 0.28; this.sz = Math.random() * 1 + 0.3;  break;
    }
  }

  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.t === 'leaves') this.rot += this.rs;
    if (this.y > pCvs.height + 12 || this.y < -12 || this.x < -12 || this.x > pCvs.width + 12) this.reset();
  }

  draw() {
    pCtx.save();
    pCtx.globalAlpha = this.op;
    pCtx.fillStyle   = this.c;
    pCtx.strokeStyle = this.c;
    pCtx.translate(this.x, this.y);
    switch (this.t) {
      case 'leaves':  pCtx.rotate(this.rot * Math.PI / 180); pCtx.beginPath(); pCtx.ellipse(0, 0, this.sz, this.sz * 0.38, 0, 0, Math.PI * 2); pCtx.fill(); break;
      case 'bubbles': pCtx.beginPath(); pCtx.arc(0, 0, this.sz, 0, Math.PI * 2); pCtx.lineWidth = 0.6; pCtx.stroke(); break;
      case 'embers':  pCtx.beginPath(); pCtx.arc(0, 0, this.sz, 0, Math.PI * 2); pCtx.fill(); break;
      case 'snow':    pCtx.lineWidth = 0.6; for (let i = 0; i < 6; i++) { pCtx.beginPath(); const a = i * Math.PI / 3; pCtx.moveTo(0, 0); pCtx.lineTo(Math.cos(a) * this.sz, Math.sin(a) * this.sz); pCtx.stroke(); } break;
      case 'sand':    pCtx.fillRect(0, 0, this.sz, this.sz * 0.5); break;
    }
    pCtx.restore();
  }
}

function mkPts() { pts = Array.from({ length: PT_COUNT }, () => new Pt()); }

/* Throttle a ~24fps, pausa quando aba oculta */
function aPts(ts) {
  ptFrame = requestAnimationFrame(aPts);
  if (document.hidden) return;
  if (ts - lastPtTime < 42) return;
  lastPtTime = ts;
  pCtx.clearRect(0, 0, pCvs.width, pCvs.height);
  pts.forEach(p => { p.update(); p.draw(); });
}

/* ================================================================
   TELA DE CARREGAMENTO
   ================================================================ */
(function initLoading() {
  const f  = document.getElementById('ld-bf');
  const n  = document.getElementById('ld-n');
  const lb = document.getElementById('ld-lb');
  const gh = document.getElementById('ld-ghost');

  const biomes = [
    { ghost: 'FLORESTAS', label: 'Florestas Tropicais' },
    { ghost: 'OCEANOS',   label: 'Oceanos Profundos'  },
    { ghost: 'VULCÂNICO', label: 'Zonas Vulcânicas'   },
    { ghost: 'MONTANHAS', label: 'Cadeias Montanhosas' },
    { ghost: 'DESERTOS',  label: 'Desertos Áridos'    },
  ];

  let v = 0, bi = 0;

  function rotateBiome() {
    bi = (bi + 1) % biomes.length;
    const b = biomes[bi];
    if (gh) gh.style.opacity = '0';
    if (lb) lb.style.opacity = '0';
    setTimeout(() => {
      if (gh) { gh.textContent = b.ghost; gh.style.opacity = '1'; }
      if (lb) { lb.textContent = b.label; lb.style.opacity = '1'; }
    }, 280);
  }

  const biomeIv = setInterval(rotateBiome, 520);

  const iv = setInterval(() => {
    const remaining = 100 - v;
    const step = remaining > 30 ? Math.random() * 5 + 2 : Math.random() * 2 + 0.5;
    v = Math.min(v + step, 100);

    if (f) f.style.width = v + '%';
    if (n) n.textContent = Math.floor(v);

    if (v >= 100) {
      clearInterval(iv);
      clearInterval(biomeIv);
      if (gh) { gh.style.opacity = '0'; setTimeout(() => { gh.textContent = 'BIOMAS'; gh.style.opacity = '1'; }, 280); }
      if (lb) { lb.style.opacity = '0'; setTimeout(() => { lb.style.opacity = '1'; lb.textContent = 'Pronto'; }, 280); }

      setTimeout(() => {
        const ld = document.getElementById('loading');
        ld.style.transition = 'opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1)';
        ld.style.opacity   = '0';
        ld.style.transform = 'scale(1.04)';
        setTimeout(() => { ld.style.display = 'none'; boot(); }, 720);
      }, 320);
    }
  }, 38);
})();

/* ================================================================
   CARROSSEL
   ================================================================ */
const REEL_W_BASE = 368;
let sX = 0, drag = false, dSX = 0, dSS = 0, gTween = null;

function getReelW() {
  const r = document.querySelector('.reel');
  if (r) return r.offsetWidth + (window.innerWidth <= 480 ? 6 : 8);
  return REEL_W_BASE;
}

function buildCarousel() {
  const strip = document.getElementById('sstrip');
  const nav   = document.getElementById('cnav');
  strip.innerHTML = '';
  nav.innerHTML   = '';

  BK.forEach((k, i) => {
    const b = B[k];

    // Card do carrossel
    const s = document.createElement('div');
    s.className = 'reel' + (k === active ? ' active' : '');
    s.dataset.k = k;
    s.dataset.i = i;
    s.innerHTML = `
      <div class="rbg" style="background-image:url('${b.bg}')"></div>
      <div class="rgrad"></div>
      <div class="rdot"></div>
      <div class="rinfo">
        <div class="rnum">0${i + 1}&nbsp;/&nbsp;0${BK.length}</div>
        <div class="rname">${b.name}</div>
        <div class="rsub">${b.sub}</div>
      </div>`;
    s.addEventListener('click', () => { switchBiome(k); snapTo(i); });
    strip.appendChild(s);

    // Pílula de navegação
    const p = document.createElement('button');
    p.className = 'cpill' + (k === active ? ' active' : '');
    p.textContent = b.name;
    p.dataset.k = k;
    p.dataset.i = i;
    p.setAttribute('aria-label', 'Selecionar bioma: ' + b.name);
    p.addEventListener('click', () => { switchBiome(k); snapTo(i); });
    nav.appendChild(p);
  });

  requestAnimationFrame(() => snapTo(BK.indexOf(active), true));
}

function sctr() {
  const rw = getReelW();
  return document.getElementById('souter').offsetWidth / 2 - rw / 2;
}

function snapTo(idx, instant = false) {
  const rw = getReelW();
  const t  = sctr() - idx * rw;
  if (gTween) gTween.kill();
  const strip = document.getElementById('sstrip');
  if (instant) {
    sX = t;
    strip.style.transform = `translateX(${sX}px)`;
    updActive(idx);
    return;
  }
  gTween = gsap.to({ v: sX }, {
    v: t, duration: 0.55, ease: 'power3.out',
    onUpdate: function () { sX = this.targets()[0].v; strip.style.transform = `translateX(${sX}px)`; },
    onComplete: () => updActive(idx),
  });
}

function updActive(idx) {
  document.querySelectorAll('.reel').forEach((r, i) => r.classList.toggle('active', i === idx));
}

/* Drag & Touch para carrossel */
const so       = document.getElementById('souter');
const strip_el = document.getElementById('sstrip');

function onDS(e) {
  drag = true;
  const cl = e.touches ? e.touches[0].clientX : e.clientX;
  dSX = cl; dSS = sX;
  if (gTween) gTween.kill();
  strip_el.style.willChange = 'transform';
}

function onDM(e) {
  if (!drag) return;
  if (e.cancelable && e.type === 'touchmove') e.preventDefault();
  const cl = e.touches ? e.touches[0].clientX : e.clientX;
  sX = dSS + (cl - dSX);
  strip_el.style.transform = `translateX(${sX}px)`;
}

function onDE() {
  if (!drag) return;
  drag = false;
  strip_el.style.willChange = 'auto';
  const rw = getReelW();
  let idx = Math.round((sctr() - sX) / rw);
  idx = Math.max(0, Math.min(BK.length - 1, idx));
  if (BK[idx] !== active) switchBiome(BK[idx]);
  snapTo(idx);
}

so.addEventListener('mousedown',  onDS);
so.addEventListener('touchstart', onDS, { passive: true });
document.addEventListener('mousemove', onDM, { passive: false });
document.addEventListener('touchmove', onDM, { passive: false });
document.addEventListener('mouseup',   onDE);
document.addEventListener('touchend',  onDE);

/* ================================================================
   TROCA DE BIOMA
   ================================================================ */
function switchBiome(key) {
  if (key === active) return;
  active = key;
  const b = B[key];

  if (txRaf) { cancelAnimationFrame(txRaf); txRaf = null; txCtx.clearRect(0, 0, txCvs.width, txCvs.height); }

  /* Flash de sobreposição simples */
  const ov = document.getElementById('tov');
  ov.style.transition = 'opacity .18s ease';
  ov.style.opacity    = '.25';
  setTimeout(() => { ov.style.transition = 'opacity .4s ease'; ov.style.opacity = '0'; }, 180);

  /* Atualiza variáveis CSS de cor do bioma */
  document.documentElement.style.setProperty('--bc',  b.color);
  document.documentElement.style.setProperty('--bg2', b.glow);

  /* Atualiza partículas */
  mkPts();

  /* Atualiza Hero */
  document.getElementById('hbg').style.background = b.heroBg;
  document.getElementById('hey').textContent  = 'Atlas dos Ecossistemas — ' + b.name;
  document.getElementById('hit').textContent  = b.it;
  document.getElementById('hsa').textContent  = b.st.a;
  document.getElementById('hss').textContent  = b.st.s;
  document.getElementById('hst').textContent  = b.st.t;
  document.getElementById('hsc').textContent  = b.st.c;
  document.getElementById('hbadge').textContent = b.label;

  document.querySelectorAll('.cpill').forEach(p => p.classList.toggle('active', p.dataset.k === key));
  document.querySelectorAll('.sdot').forEach(d  => d.classList.toggle('active', d.dataset.biome === key));

  playBiomeAudio(key);

  /* Atualiza conteúdo dinâmico no próximo frame para não travar animação */
  requestAnimationFrame(() => {
    document.getElementById('map-p').textContent = b.mapP;
    document.getElementById('msb').textContent   = b.msB;
    document.getElementById('mss').textContent   = b.msS;
    updateMapWithCSS(key);
    buildLegend(key);
    buildStrip(b);
  });

  setTimeout(() => {
    buildIntro(b);
    buildThreats(b);
    buildFauna(b);
    buildClimateChart(key);
  }, 350);
}

/* ================================================================
   CARDS DE INTRODUÇÃO
   ================================================================ */
function buildIntro(b) {
  const grid = document.getElementById('intro-grid');
  document.getElementById('intro-p').textContent = b.intro;
  grid.innerHTML = '';
  b.introCards.forEach(c => {
    const div = document.createElement('div');
    div.className = 'icard' + (c.big ? ' big' : '');
    div.innerHTML = `
      <div class="icard-bg" style="background-image:url('${c.bg}')"></div>
      <div class="icard-ov"></div>
      <div class="icard-body">
        <div class="icard-tag">${c.tag}</div>
        <div class="icard-name">${c.name}</div>
        <div class="icard-rule"></div>
        <div class="icard-text">${c.text}</div>
      </div>`;
    grid.appendChild(div);
  });
}

/* ================================================================
   SEÇÃO DE AMEAÇAS
   ================================================================ */
function buildThreats(b) {
  document.getElementById('thr-p').textContent = b.threats[0]
    ? `${b.name}: ${b.threats.length} ameaças prioritárias identificadas.` : '';

  const list = document.getElementById('thr-list');
  list.innerHTML = '';
  b.threats.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = 'thr';
    div.innerHTML = `<div class="thr-num">0${i + 1}</div><div><div class="thr-title">${t.t}</div><div class="thr-body">${t.d}</div></div>`;
    list.appendChild(div);
  });

  const bars = document.getElementById('tv-bars');
  bars.innerHTML = '';
  b.tvBars.forEach(item => {
    const div = document.createElement('div');
    div.className = 'tv-item';
    div.innerHTML = `
      <div class="tv-label">
        <span class="tv-name">${item.n}</span>
        <span class="tv-val">${item.v}%</span>
      </div>
      <div class="tv-track"><div class="tv-fill" style="width:${item.v}%"></div></div>`;
    bars.appendChild(div);
  });

  document.getElementById('tv-qt').textContent = b.quote;
  document.getElementById('tv-qs').textContent = b.quoteSrc;
}

/* ================================================================
   FAIXA DE FATOS ROLANTE
   ================================================================ */
function buildStrip(b) {
  const facts = [
    `Temperatura Média <span>${b.st.t}</span>`,
    `Área Total <span>${b.st.a} km²</span>`,
    `Espécies Conhecidas <span>${b.st.s}</span>`,
    `Cobertura Global <span>${b.st.c}</span>`,
    `Bioma Ativo <span>${b.name}</span>`,
    /* Duplicado para animação contínua de scroll */
    `Temperatura Média <span>${b.st.t}</span>`,
    `Área Total <span>${b.st.a} km²</span>`,
    `Espécies Conhecidas <span>${b.st.s}</span>`,
    `Cobertura Global <span>${b.st.c}</span>`,
    `Bioma Ativo <span>${b.name}</span>`,
  ];
  document.getElementById('fs-inner').innerHTML = facts.map(f => `<span class="fs-item">${f}</span>`).join('');
}

/* ================================================================
   MAPA MUNDIAL COM D3
   ================================================================ */
const ISONUM = { 76: 'BRA', 180: 'COD', 360: 'IDN', 458: 'MYS', 170: 'COL', 604: 'PER', 120: 'CMR', 266: 'GAB', 598: 'PNG', 862: 'VEN', 352: 'ISL', 392: 'JPN', 608: 'PHL', 152: 'CHL', 218: 'ECU', 840: 'USA', 484: 'MEX', 124: 'CAN', 643: 'RUS', 304: 'GRL', 578: 'NOR', 156: 'CHN', 524: 'NPL', 12: 'DZA', 682: 'SAU', 36: 'AUS', 818: 'EGY', 364: 'IRN', 516: 'NAM', 504: 'MAR', 434: 'LBY', 788: 'TUN', 566: 'NGA', 24: 'AGO' };

function gISO(d) { return ISONUM[+d.id] || String(d.id); }

let mSvg, mPath, mG, pRaf;

function initMap() {
  const W = 960, H = 480;
  const proj = d3.geoNaturalEarth1().scale(153).translate([W / 2, H / 2 + 10]);
  mPath = d3.geoPath().projection(proj);
  mSvg  = d3.select('#wmap');
  mSvg.append('rect').attr('width', W).attr('height', H).attr('fill', '#050c12');
  mSvg.append('path').datum({ type: 'Sphere' }).attr('d', mPath).attr('fill', '#071820');
  mSvg.append('path').datum(d3.geoGraticule()()).attr('d', mPath).attr('fill', 'none').attr('stroke', 'rgba(255,255,255,.04)').attr('stroke-width', 0.3);
  mG = mSvg.append('g');

  const ts = document.createElement('script');
  ts.src = 'https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js';
  ts.onload = () => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(r => r.json())
      .then(w => {
        drawCountries(topojson.feature(w, w.objects.countries).features);
        buildLegend(active);
        updateMapWithCSS(active);
      })
      .catch(() => mSvg.append('text').attr('x', W / 2).attr('y', H / 2)
        .attr('text-anchor', 'middle').attr('fill', 'rgba(255,255,255,.12)')
        .attr('font-family', 'DM Mono,monospace').attr('font-size', 10)
        .text('Conecte-se à internet para carregar o mapa'));
  };
  document.head.appendChild(ts);
}

function drawCountries(data) {
  const mf = document.getElementById('mframe');
  const tt = document.getElementById('mtt');

  function showTooltip(ev, d, isTouch) {
    const iso = gISO(d), hl = B[active].hl || {};
    if (!hl[iso]) return;
    document.getElementById('mttc').textContent = (B[active].hd || {})[iso]?.split('—')[0]?.trim() || iso;
    document.getElementById('mttp').textContent = '◉ ' + hl[iso] + ' de cobertura';
    document.getElementById('mttd').textContent = (B[active].hd || {})[iso]?.split('—').slice(1).join('—').trim() || '';

    const mttFlag = document.getElementById('mtt-flag');
    if (mttFlag) mttFlag.textContent = 'ISO: ' + iso;

    const fr = mf.getBoundingClientRect();
    let clientX, clientY;
    if (isTouch && ev.touches?.[0])        { clientX = ev.touches[0].clientX;        clientY = ev.touches[0].clientY; }
    else if (isTouch && ev.changedTouches?.[0]) { clientX = ev.changedTouches[0].clientX; clientY = ev.changedTouches[0].clientY; }
    else { clientX = ev.clientX; clientY = ev.clientY; }

    const ttW = 190, ttH = 90;
    let tx = clientX - fr.left + 12;
    let ty = clientY - fr.top  - 78;
    if (tx + ttW > fr.width  - 8) tx = clientX - fr.left - ttW - 8;
    if (tx < 5) tx = 5;
    if (ty < 5) ty = 5;
    if (ty + ttH > fr.height - 5) ty = fr.height - ttH - 5;
    tt.style.left = tx + 'px';
    tt.style.top  = ty + 'px';
    tt.classList.add('on');
  }

  mG.selectAll('path').data(data).enter().append('path')
    .attr('d', mPath)
    .attr('fill', 'rgba(32,44,54,.9)')
    .attr('stroke', 'rgba(255,255,255,.055)')
    .attr('stroke-width', 0.35)
    .attr('class', d => 'cnt cnt-' + gISO(d))
    .on('mouseover', function (ev, d) {
      const iso = gISO(d), hl = B[active].hl || {};
      if (!hl[iso]) return;
      showTooltip(ev, d, false);
      d3.select(this).raise()
        .attr('fill',   B[active].color + '99')
        .attr('stroke', B[active].color)
        .attr('stroke-width', 1.5)
        .attr('filter', `drop-shadow(0 0 4px ${B[active].color}66)`);
    })
    .on('mouseout', function (ev, d) {
      tt.classList.remove('on');
      const iso = gISO(d), hl = B[active].hl || {};
      d3.select(this)
        .attr('fill',         hl[iso] ? B[active].color + '28' : 'rgba(32,44,54,.9)')
        .attr('stroke',       hl[iso] ? B[active].color : 'rgba(255,255,255,.055)')
        .attr('stroke-width', hl[iso] ? 0.6 : 0.35)
        .attr('filter', null);
    })
    .on('touchstart', function (ev, d) {
      if (ev.cancelable) ev.preventDefault();
      const iso = gISO(d), hl = B[active].hl || {};
      if (!hl[iso]) { tt.classList.remove('on'); return; }
      showTooltip(ev, d, true);
      d3.select(this).raise()
        .attr('fill',   B[active].color + '80')
        .attr('stroke', B[active].color)
        .attr('stroke-width', 1.2);
      setTimeout(() => tt.classList.remove('on'), 2500);
    }, { passive: false });
}

function updateMapWithCSS(key) {
  if (!mG) return;
  if (pRaf) { cancelAnimationFrame(pRaf); pRaf = null; }
  const b = B[key], hl = b.hl || {};
  mG.selectAll('.cnt').each(function (d) {
    const iso      = gISO(d);
    const isActive = !!hl[iso];
    const el       = d3.select(this);
    el.classed('cnt-active', false);
    el.transition().duration(520)
      .attr('fill',         isActive ? b.color + '28' : 'rgba(32,44,54,.9)')
      .attr('stroke',       isActive ? b.color : 'rgba(255,255,255,.055)')
      .attr('stroke-width', isActive ? 0.6 : 0.35)
      .attr('filter', null)
      .on('end', function () { if (isActive) d3.select(this).classed('cnt-active', true); });
  });
  setTimeout(enhanceMapTooltip, 600);
}

function enhanceMapTooltip() {
  const tt = document.getElementById('mtt');
  if (!document.getElementById('mtt-flag')) {
    const f = document.createElement('div');
    f.className = 'mtt-flag'; f.id = 'mtt-flag';
    tt.appendChild(f);
  }
  if (!mG) return;
  /* Re-aplica handlers melhorados após atualização do mapa */
  mG.selectAll('.cnt')
    .on('mouseover.enhanced', function (ev, d) {
      const iso = gISO(d), hl = B[active].hl || {};
      if (!hl[iso]) return;
      document.getElementById('mttc').textContent = (B[active].hd || {})[iso]?.split('—')[0]?.trim() || iso;
      document.getElementById('mttp').textContent = '◉ ' + hl[iso] + ' de cobertura';
      document.getElementById('mttd').textContent = (B[active].hd || {})[iso]?.split('—').slice(1).join('—').trim() || '';
      document.getElementById('mtt-flag').textContent = 'ISO: ' + iso;
      const mf = document.getElementById('mframe');
      const fr = mf.getBoundingClientRect();
      let tx = ev.clientX - fr.left + 14, ty = ev.clientY - fr.top - 78;
      tx = Math.min(tx, fr.width - 190); ty = Math.max(ty, 5);
      tt.style.left = tx + 'px'; tt.style.top = ty + 'px';
      tt.classList.add('on');
      d3.select(this).raise()
        .attr('fill',   B[active].color + '99')
        .attr('stroke', B[active].color)
        .attr('stroke-width', 1.5)
        .attr('filter', `drop-shadow(0 0 4px ${B[active].color}66)`);
    })
    .on('mouseout.enhanced', function (ev, d) {
      tt.classList.remove('on');
      const iso = gISO(d), hl = B[active].hl || {};
      d3.select(this)
        .attr('fill',         hl[iso] ? B[active].color + '28' : 'rgba(32,44,54,.9)')
        .attr('stroke',       hl[iso] ? B[active].color : 'rgba(255,255,255,.055)')
        .attr('stroke-width', hl[iso] ? 0.6 : 0.35)
        .attr('filter', null);
    });
}

function buildLegend(key) {
  const b  = B[key];
  const lg = document.getElementById('mleg');
  lg.innerHTML = '';
  b.regions.forEach(r => {
    const item = document.createElement('div');
    item.className = 'ml on';
    item.setAttribute('aria-label', r);
    item.innerHTML = `<div class="mldot" style="background:${b.color}" aria-hidden="true"></div>${r}`;
    lg.appendChild(item);
  });
}

/* ================================================================
   FAUNA
   ================================================================ */
function buildFauna(b) {
  const grid = document.getElementById('fgrid');
  grid.style.opacity    = '0';
  grid.style.transition = 'opacity .2s';

  setTimeout(() => {
    document.getElementById('fauna-p').textContent = b.faunaP;
    grid.innerHTML = '';
    let activeCard = null;

    b.fauna.forEach(a => {
      const card = document.createElement('article');
      card.className = 'fc';
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${a.n} — ${a.l}`);

      const expandHTML = `
        <div class="fc-expand" aria-hidden="true">
          <div class="fc-expand-inner">
            <span class="fc-tag">↗ Dados do espécime</span>
            <div class="fc-stat-row">
              <span class="fc-stat-label">Vitalidade</span>
              <div class="fc-stat-bar"><div class="fc-stat-fill" style="width:${a.v}%;--dl:0s"></div></div>
              <span class="fc-stat-val">${a.v}</span>
            </div>
            <div class="fc-stat-row">
              <span class="fc-stat-label">Velocidade</span>
              <div class="fc-stat-bar"><div class="fc-stat-fill" style="width:${a.s}%;--dl:.07s"></div></div>
              <span class="fc-stat-val">${a.s}</span>
            </div>
            <div class="fc-stat-row">
              <span class="fc-stat-label">Raridade</span>
              <div class="fc-stat-bar"><div class="fc-stat-fill" style="width:${a.r}%;--dl:.14s"></div></div>
              <span class="fc-stat-val">${a.r}</span>
            </div>
          </div>
        </div>`;

      card.innerHTML = `
        <div class="fc-sheen" aria-hidden="true"></div>
        <div class="fcpw">
          <img class="fcp" src="${a.p}" alt="Foto de ${a.n} (${a.l})" loading="lazy">
        </div>
        <div class="fcb">
          <div class="fcn">${a.n}</div>
          <div class="fcl">${a.l}</div>
          <div class="fcd">${a.d}</div>
          <div class="fcbars" aria-label="Indicadores">
            <div class="frow"><span class="frl">Vitalidade</span><div class="frt" role="progressbar" aria-valuenow="${a.v}" aria-valuemin="0" aria-valuemax="100"><div class="frf" style="width:${a.v}%"></div></div><span class="frv">${a.v}</span></div>
            <div class="frow"><span class="frl">Velocidade</span><div class="frt" role="progressbar" aria-valuenow="${a.s}" aria-valuemin="0" aria-valuemax="100"><div class="frf" style="width:${a.s}%"></div></div><span class="frv">${a.s}</span></div>
            <div class="frow"><span class="frl">Raridade</span><div class="frt" role="progressbar" aria-valuenow="${a.r}" aria-valuemin="0" aria-valuemax="100"><div class="frf" style="width:${a.r}%"></div></div><span class="frv">${a.r}</span></div>
          </div>
          ${expandHTML}
        </div>`;

      /* Efeito tilt com sheen no hover */
      const sheen = card.querySelector('.fc-sheen');
      card.addEventListener('mousemove', e => {
        const r   = card.getBoundingClientRect();
        const mx  = (e.clientX - r.left) / r.width;
        const my  = (e.clientY - r.top)  / r.height;
        const rotY = (mx - 0.5) * 16;
        const rotX = (0.5 - my) * 10;
        card.style.transform = `perspective(700px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale3d(1.02,1.02,1.02)`;
        card.style.setProperty('--mx', mx * 100 + '%');
        card.style.setProperty('--my', my * 100 + '%');
        sheen.style.setProperty('--sx', mx * 150 + '%');
        sheen.style.setProperty('--sy', my * 100 + '%');
      }, { passive: true });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'border-color .3s, transform .35s cubic-bezier(.34,1.3,.64,1)';
        card.style.transform  = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
        setTimeout(() => card.style.transition = 'border-color .3s', 380);
      }, { passive: true });

      /* Clique / teclado — expande detalhes */
      function toggleCard() {
        const isActive = card.classList.contains('fc-active');
        if (activeCard && activeCard !== card) activeCard.classList.remove('fc-active');
        if (isActive) {
          card.classList.remove('fc-active');
          activeCard = null;
        } else {
          card.classList.remove('fc-active');
          void card.offsetWidth; // reinicia animação CSS
          card.classList.add('fc-active');
          activeCard = card;
        }
      }

      card.addEventListener('click', toggleCard);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCard(); } });

      grid.appendChild(card);
    });

    grid.style.opacity = '1';
  }, 220);
}

/* ================================================================
   PONTOS LATERAIS DE NAVEGAÇÃO
   ================================================================ */
document.querySelectorAll('.sdot').forEach(d => {
  d.addEventListener('click', () => {
    switchBiome(d.dataset.biome);
    snapTo(BK.indexOf(d.dataset.biome));
  }, { passive: true });
});

/* ================================================================
   REVEAL POR SCROLL (IntersectionObserver)
   ================================================================ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transition = 'opacity .55s ease, transform .55s ease';
        e.target.style.opacity    = '1';
        e.target.style.transform  = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.95) {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    } else {
      obs.observe(el);
    }
  });
}

/* ================================================================
   CANVAS DE TRANSIÇÃO ENTRE BIOMAS
   ================================================================ */
const txCvs = document.getElementById('bio-tx');
const txCtx = txCvs.getContext('2d');
let txRaf = null, txParticles = [];

function resizeTx() { txCvs.width = window.innerWidth; txCvs.height = window.innerHeight; }
resizeTx();

const TX_CONFIGS = {
  deserto:  { color: '#fbbf24', count: 28, spawn: () => ({ x: -8, y: Math.random() * txCvs.height, vx: Math.random() * 6 + 3, vy: (Math.random() - 0.5) * 0.6, sz: Math.random() * 2.5 + 0.5, op: Math.random() * 0.5 + 0.2, life: 1 }) },
  oceano:   { color: '#38bdf8', count: 22, spawn: () => ({ x: Math.random() * txCvs.width, y: txCvs.height * 0.3 + Math.random() * txCvs.height * 0.5, vx: (Math.random() - 0.5) * 1.2, vy: (Math.random() - 0.5) * 1.2, sz: Math.random() * 18 + 8, op: 0.12 + Math.random() * 0.1, life: 1, ripple: true }) },
  vulcao:   { color: '#f97316', count: 25, spawn: () => ({ x: Math.random() * txCvs.width, y: txCvs.height + 5, vx: (Math.random() - 0.5) * 2.2, vy: -(Math.random() * 4 + 2), sz: Math.random() * 3 + 0.8, op: Math.random() * 0.6 + 0.2, life: 1 }) },
  montanha: { color: '#93c5fd', count: 24, spawn: () => ({ x: Math.random() * txCvs.width, y: -8, vx: (Math.random() - 0.5) * 0.4, vy: Math.random() * 1.4 + 0.5, sz: Math.random() * 6 + 2, op: Math.random() * 0.35 + 0.1, life: 1 }) },
  floresta: { color: '#4ade80', count: 26, spawn: () => ({ x: Math.random() * txCvs.width, y: -10, vx: (Math.random() - 0.5) * 0.9, vy: Math.random() * 0.8 + 0.3, sz: Math.random() * 6 + 2, op: Math.random() * 0.35 + 0.12, rot: Math.random() * 360, rs: (Math.random() - 0.5) * 3, life: 1 }) },
};

function runTransition(key) {
  if (txRaf) { cancelAnimationFrame(txRaf); txRaf = null; }
  txCtx.clearRect(0, 0, txCvs.width, txCvs.height);
  txCvs.style.opacity = '1';
  const cfg = TX_CONFIGS[key];
  if (!cfg) return;
  txParticles = Array.from({ length: cfg.count }, () => cfg.spawn());
  const startTime = performance.now();
  const duration  = 600;

  function tick(ts) {
    const elapsed  = ts - startTime;
    const progress = Math.min(elapsed / duration, 1);
    txCtx.clearRect(0, 0, txCvs.width, txCvs.height);
    const fade = progress < 0.4 ? progress / 0.4 : 1 - ((progress - 0.4) / 0.6);
    txParticles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.rot !== undefined) p.rot += p.rs;
      txCtx.save();
      txCtx.globalAlpha = p.op * fade;
      txCtx.fillStyle   = cfg.color;
      txCtx.strokeStyle = cfg.color;
      txCtx.translate(p.x, p.y);
      if (p.ripple) {
        txCtx.beginPath(); txCtx.arc(0, 0, p.sz * (1 + progress * 0.8), 0, Math.PI * 2);
        txCtx.lineWidth = 0.8; txCtx.stroke();
      } else if (p.rot !== undefined) {
        txCtx.rotate(p.rot * Math.PI / 180);
        txCtx.beginPath(); txCtx.ellipse(0, 0, p.sz, p.sz * 0.35, 0, 0, Math.PI * 2); txCtx.fill();
      } else {
        txCtx.beginPath(); txCtx.arc(0, 0, p.sz, 0, Math.PI * 2); txCtx.fill();
      }
      txCtx.restore();
    });
    if (elapsed < duration) { txRaf = requestAnimationFrame(tick); }
    else { txCtx.clearRect(0, 0, txCvs.width, txCvs.height); txCvs.style.opacity = '0'; txRaf = null; txParticles = []; }
  }
  txRaf = requestAnimationFrame(tick);
}

/* ================================================================
   SISTEMA DE ÁUDIO AMBIENTE
   ================================================================ */
const AUDIO_SRC = {
  floresta: 'https://cdn.freesound.org/previews/416/416529_5121236-lq.mp3',
  vulcao:   'https://cdn.freesound.org/previews/385/385098_5937039-lq.mp3',
  montanha: 'https://cdn.freesound.org/previews/102/102572_321967-lq.mp3',
  oceano:   null,
  deserto:  'https://cdn.freesound.org/previews/104/104320_382855-lq.mp3',
};

const AUDIO = {
  enabled:     false,
  ctx:         null,
  activeNodes: [],
  playTimer:   null,
  bufCache:    {},

  getCtx() {
    if (!this.ctx || this.ctx.state === 'closed')
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    return this.ctx;
  },

  async fetchBuf(url) {
    if (this.bufCache[url]) return this.bufCache[url];
    try {
      const ctx = this.getCtx();
      const res = await fetch(url, { mode: 'cors' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const arr = await res.arrayBuffer();
      const buf = await ctx.decodeAudioData(arr);
      this.bufCache[url] = buf;
      return buf;
    } catch (e) { return null; }
  },

  stopAll(fadeMs = 350) {
    clearTimeout(this.playTimer);
    const nodes  = this.activeNodes;
    this.activeNodes = [];
    const master = nodes.find(n => n._isMaster);
    if (master) {
      try {
        const ctx = this.getCtx();
        const now = ctx.currentTime;
        master.gain.cancelScheduledValues(now);
        master.gain.setValueAtTime(master.gain.value, now);
        master.gain.linearRampToValueAtTime(0, now + fadeMs / 1000);
        setTimeout(() => {
          nodes.forEach(n => { try { if (n.stop) n.stop(); } catch (e) {} });
          nodes.forEach(n => { try { if (n.disconnect) n.disconnect(); } catch (e) {} });
        }, fadeMs + 80);
      } catch (e) {
        nodes.forEach(n => { try { if (n.stop) n.stop(); } catch (e2) {} });
      }
    } else {
      nodes.forEach(n => { try { if (n.stop) n.stop(); } catch (e) {} });
    }
  },

  async play(key) {
    if (!this.enabled) return;
    this.stopAll(250);
    const ctx = this.getCtx();
    if (ctx.state === 'suspended') await ctx.resume().catch(() => {});
    if (!this.enabled) return;

    const dur = 9, fadeIn = 1.0, fadeOut = 1.5;
    const now = ctx.currentTime;
    const nodes = [];

    const master = ctx.createGain();
    master.gain.setValueAtTime(0, now);
    master.gain.linearRampToValueAtTime(0.3, now + fadeIn);
    master.gain.setValueAtTime(0.3, now + dur - fadeOut);
    master.gain.linearRampToValueAtTime(0, now + dur);
    master.connect(ctx.destination);
    master._isMaster = true;
    nodes.push(master);

    const url = AUDIO_SRC[key];

    if (url) {
      const buf = await this.fetchBuf(url);
      if (!this.enabled) return;
      if (buf) {
        const src = ctx.createBufferSource();
        src.buffer = buf; src.loop = false;
        src.connect(master);
        src.start(now); src.stop(now + dur);
        nodes.push(src);
      } else {
        this._buildBirdSynth(ctx, master, nodes, now, dur);
      }
    } else if (key === 'oceano') {
      const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
      const d   = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource(); src.buffer = buf; src.loop = false;
      const lp  = ctx.createBiquadFilter(); lp.type = 'lowpass';  lp.frequency.value = 900; lp.Q.value = 0.5;
      const hp  = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 55;
      const wg  = ctx.createGain();
      wg.gain.setValueAtTime(0.05, now);
      wg.gain.linearRampToValueAtTime(0.9, now + 2.0);
      wg.gain.linearRampToValueAtTime(0.2, now + 4.0);
      wg.gain.linearRampToValueAtTime(0.85, now + 6.2);
      wg.gain.linearRampToValueAtTime(0.08, now + 8.5);
      src.connect(lp); lp.connect(hp); hp.connect(wg); wg.connect(master);
      src.start(now); src.stop(now + dur);
      nodes.push(src);
    }

    this.activeNodes = nodes;
    this.playTimer = setTimeout(() => {
      const old = this.activeNodes;
      this.activeNodes = [];
      old.forEach(n => { try { if (n.stop) n.stop(); } catch (e) {} });
      old.forEach(n => { try { if (n.disconnect) n.disconnect(); } catch (e) {} });
    }, (dur + 0.3) * 1000);
  },

  _buildBirdSynth(ctx, master, nodes, now, dur) {
    const wBuf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const wd   = wBuf.getChannelData(0);
    for (let i = 0; i < wd.length; i++) wd[i] = Math.random() * 2 - 1;
    const wSrc = ctx.createBufferSource(); wSrc.buffer = wBuf; wSrc.loop = false;
    const wLp  = ctx.createBiquadFilter(); wLp.type = 'bandpass'; wLp.frequency.value = 380; wLp.Q.value = 0.25;
    const wGn  = ctx.createGain(); wGn.gain.value = 0.055;
    wSrc.connect(wLp); wLp.connect(wGn); wGn.connect(master);
    wSrc.start(now); nodes.push(wSrc);
    const freqs = [2800, 3400, 2200, 3900, 2600, 4100, 3000, 3600];
    const times = [0.5, 1.3, 2.2, 3.0, 4.1, 4.9, 5.8, 6.6, 7.4];
    times.forEach((t, bi) => {
      if (t >= dur - 0.4) return;
      const f  = freqs[bi % freqs.length];
      const cd = 0.16 + Math.random() * 0.1;
      const o  = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(f, now + t);
      o.frequency.linearRampToValueAtTime(f * 1.2, now + t + cd * 0.5);
      o.frequency.linearRampToValueAtTime(f * 0.9, now + t + cd);
      const eg = ctx.createGain();
      eg.gain.setValueAtTime(0, now + t);
      eg.gain.linearRampToValueAtTime(0.16, now + t + cd * 0.25);
      eg.gain.linearRampToValueAtTime(0, now + t + cd);
      o.connect(eg); eg.connect(master);
      o.start(now + t); o.stop(now + t + cd + 0.05);
      nodes.push(o);
    });
  },

  stop() {
    this.stopAll(400);
    this.enabled = false;
    document.getElementById('audio-btn').classList.remove('on');
  },

  toggle(key) {
    this.enabled = !this.enabled;
    document.getElementById('audio-btn').classList.toggle('on', this.enabled);
    if (this.enabled) {
      const ctx = this.getCtx();
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      this.play(key);
    } else {
      this.stop();
    }
  },
};

function playBiomeAudio(key) {
  if (!AUDIO.enabled) return;
  AUDIO.stopAll(200);
  document.getElementById('audio-btn').classList.add('on');
  setTimeout(() => { if (AUDIO.enabled) AUDIO.play(key); }, 240);
}

document.getElementById('audio-btn').addEventListener('click', () => AUDIO.toggle(active));

/* ================================================================
   GRÁFICO CLIMÁTICO (Canvas)
   ================================================================ */
const CLIMATE_DATA = {
  floresta: [27, 27, 27, 27, 27, 26, 26, 26, 27, 27, 27, 27],
  oceano:   [22, 22, 22, 21, 20, 18, 17, 17, 18, 19, 21, 22],
  vulcao:   [40, 42, 45, 45, 44, 38, 32, 32, 38, 42, 43, 41],
  montanha: [-18, -16, -10, -2, 5, 10, 12, 11, 5, -3, -12, -17],
  deserto:  [35, 37, 40, 43, 46, 48, 50, 49, 46, 43, 38, 34],
};
const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

let chartInstance = null;
let chartState    = { xS: null, yS: null, data: null, pad: null, W: 0, H: 0, color: '', canvas: null };

/* Tooltip do gráfico — criado uma vez */
const chartTT = (() => {
  const el = document.createElement('div');
  el.id = 'chart-tt';
  Object.assign(el.style, {
    position: 'absolute', pointerEvents: 'none', opacity: '0',
    transition: 'opacity .12s', zIndex: '100',
    background: 'rgba(6,6,6,.96)', border: '1px solid rgba(255,255,255,.1)',
    borderRadius: '5px', padding: '8px 13px',
    fontFamily: 'DM Mono,monospace', minWidth: '90px',
    boxShadow: '0 4px 20px rgba(0,0,0,.6)',
  });
  document.getElementById('chart-wrap')?.appendChild(el);
  return el;
})();

function buildClimateChart(key) {
  if (chartInstance) { cancelAnimationFrame(chartInstance); chartInstance = null; }

  const canvas = document.getElementById('climate-chart');
  if (!canvas) return;

  /* Substitui o canvas para remover listeners antigos */
  const fresh = canvas.cloneNode(false);
  canvas.parentNode.replaceChild(fresh, canvas);
  const cvs = document.getElementById('climate-chart');

  const data  = CLIMATE_DATA[key] || [];
  const color = B[key].color;
  const dpr   = Math.min(window.devicePixelRatio || 1, 2);

  const wrapEl    = document.getElementById('chart-wrap');
  const wrapStyle = wrapEl ? window.getComputedStyle(wrapEl) : null;
  const wrapPadH  = wrapStyle ? (parseFloat(wrapStyle.paddingLeft) || 0) + (parseFloat(wrapStyle.paddingRight) || 0) : 48;
  const availW    = wrapEl ? (wrapEl.clientWidth - wrapPadH) : (cvs.parentElement?.clientWidth || 600);
  const W = Math.max(availW, 200);
  const H = window.innerWidth <= 480 ? 150 : window.innerWidth <= 768 ? 170 : 200;

  cvs.style.width  = '100%';
  cvs.style.height = H + 'px';
  cvs.width  = W * dpr;
  cvs.height = H * dpr;

  const ctx = cvs.getContext('2d');
  ctx.scale(dpr, dpr);

  const pad = { t: 22, r: 24, b: 36, l: 44 };
  const iW  = W - pad.l - pad.r;
  const iH  = H - pad.t - pad.b;
  const min = Math.min(...data) - 5;
  const max = Math.max(...data) + 5;
  const xS  = i => pad.l + i * (iW / (data.length - 1));
  const yS  = v => pad.t + iH - (v - min) / (max - min) * iH;

  chartState = { xS, yS, data, pad, W, H, color, canvas: cvs };

  function render(prog) {
    ctx.clearRect(0, 0, W, H);

    /* Grades e labels do eixo Y */
    ctx.strokeStyle = 'rgba(255,255,255,.05)'; ctx.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
      const y = pad.t + iH * (i / 3);
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + iW, y); ctx.stroke();
      const val = Math.round(max - (max - min) * (i / 3));
      ctx.fillStyle = 'rgba(255,255,255,.22)';
      ctx.font = '9px DM Mono,monospace'; ctx.textAlign = 'right';
      ctx.fillText(val + '°', pad.l - 6, y + 4);
    }

    const nPts  = Math.max(1, Math.ceil(prog * (data.length - 1)));
    const bgGrad = ctx.createLinearGradient(0, pad.t, 0, pad.t + iH);
    bgGrad.addColorStop(0, color + '20'); bgGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = bgGrad;
    ctx.beginPath();
    for (let i = 0; i <= nPts; i++) {
      const x = xS(i), y = yS(data[i]);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.lineTo(xS(nPts), pad.t + iH); ctx.lineTo(xS(0), pad.t + iH);
    ctx.closePath(); ctx.fill();

    /* Linha */
    ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.lineJoin = 'round';
    for (let i = 0; i <= nPts; i++) {
      const x = xS(i), y = yS(data[i]);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    /* Pontos */
    for (let i = 0; i <= nPts; i++) {
      ctx.beginPath(); ctx.arc(xS(i), yS(data[i]), 3.5, 0, Math.PI * 2);
      ctx.fillStyle = color; ctx.fill();
      ctx.beginPath(); ctx.arc(xS(i), yS(data[i]), 1.2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.fill();
    }

    /* Labels dos meses */
    data.forEach((_, i) => {
      ctx.fillStyle = 'rgba(255,255,255,.2)'; ctx.font = '9px DM Mono,monospace';
      ctx.textAlign = 'center'; ctx.fillText(MONTHS[i], xS(i), H - pad.b + 16);
    });
  }

  /* Animação de desenho progressivo */
  let prog = 0;
  function tick() {
    render(prog);
    if (prog < 1) { prog = Math.min(prog + 0.05, 1); chartInstance = requestAnimationFrame(tick); }
    else { chartInstance = null; render(1); }
  }
  tick();

  /* Tooltip de mouse no gráfico */
  const wrap = document.getElementById('chart-wrap');
  if (!wrap) return;
  if (!wrap.contains(chartTT)) wrap.appendChild(chartTT);
  wrap.style.position = 'relative';

  cvs.addEventListener('mousemove', e => {
    const r  = cvs.getBoundingClientRect();
    const mx = e.clientX - r.left;
    let best = -1, bestDist = Infinity;
    data.forEach((_, i) => {
      const dist = Math.abs(mx - xS(i));
      if (dist < bestDist) { bestDist = dist; best = i; }
    });
    if (best < 0 || bestDist > iW / (data.length - 1) * 0.8) { chartTT.style.opacity = '0'; return; }
    const px  = xS(best), py = yS(data[best]);
    const val = data[best];
    chartTT.innerHTML = `
      <div style="font-size:.46rem;letter-spacing:.22em;color:${color};margin-bottom:3px;">${MONTHS[best]}</div>
      <div style="font-size:1rem;color:#fff;font-family:Archivo Black,sans-serif;line-height:1;">${val}°C</div>`;
    const wr = wrap.getBoundingClientRect();
    const cr = cvs.getBoundingClientRect();
    let tx = cr.left - wr.left + px + 12;
    let ty = cr.top  - wr.top  + py - 48;
    if (tx + 100 > wr.width - 8) tx = cr.left - wr.left + px - 112;
    chartTT.style.left    = tx + 'px';
    chartTT.style.top     = Math.max(4, ty) + 'px';
    chartTT.style.opacity = '1';
  }, { passive: true });

  cvs.addEventListener('mouseleave', () => { chartTT.style.opacity = '0'; }, { passive: true });
}

/* ================================================================
   DEBOUNCE PARA RESIZE
   ================================================================ */
let resizeTimer = null;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    buildClimateChart(active);
    rszPtx();
    resizeTx();
    snapTo(BK.indexOf(active), true);
  }, 250);
}, { passive: true });

/* ================================================================
   BOOT — inicialização pós-loading
   ================================================================ */
function boot() {
  mkPts();
  requestAnimationFrame(aPts);
  buildCarousel();
  buildIntro(B[active]);
  buildThreats(B[active]);
  buildStrip(B[active]);
  buildFauna(B[active]);
  initMap();
  initReveal();
  setTimeout(() => buildClimateChart(active), 800);

  /* Entrada do Hero */
  const hb = document.querySelector('.hbot');
  hb.style.opacity   = '1';
  hb.style.transform = 'translateY(0)';
  document.querySelector('header').style.opacity = '1';

  /* Libera will-change após snap inicial */
  setTimeout(() => {
    const strip = document.getElementById('sstrip');
    if (strip) strip.style.willChange = 'auto';
  }, 700);
}
