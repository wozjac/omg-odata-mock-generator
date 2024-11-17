'use strict';

var e=[{name:"Aegean Airlines",iataCode:"A3"},{name:"Aeroflot",iataCode:"SU"},{name:"Aerolineas Argentinas",iataCode:"AR"},{name:"Aeromexico",iataCode:"AM"},{name:"Air Algerie",iataCode:"AH"},{name:"Air Arabia",iataCode:"G9"},{name:"Air Canada",iataCode:"AC"},{name:"Air China",iataCode:"CA"},{name:"Air Europa",iataCode:"UX"},{name:"Air France-KLM",iataCode:"AF"},{name:"Air India",iataCode:"AI"},{name:"Air Mauritius",iataCode:"MK"},{name:"Air New Zealand",iataCode:"NZ"},{name:"Air Niugini",iataCode:"PX"},{name:"Air Tahiti",iataCode:"VT"},{name:"Air Tahiti Nui",iataCode:"TN"},{name:"Air Transat",iataCode:"TS"},{name:"AirAsia X",iataCode:"D7"},{name:"AirAsia",iataCode:"AK"},{name:"Aircalin",iataCode:"SB"},{name:"Alaska Airlines",iataCode:"AS"},{name:"Alitalia",iataCode:"AZ"},{name:"All Nippon Airways",iataCode:"NH"},{name:"Allegiant Air",iataCode:"G4"},{name:"American Airlines",iataCode:"AA"},{name:"Asiana Airlines",iataCode:"OZ"},{name:"Avianca",iataCode:"AV"},{name:"Azul Linhas Aereas Brasileiras",iataCode:"AD"},{name:"Azur Air",iataCode:"ZF"},{name:"Beijing Capital Airlines",iataCode:"JD"},{name:"Boliviana de Aviacion",iataCode:"OB"},{name:"British Airways",iataCode:"BA"},{name:"Cathay Pacific",iataCode:"CX"},{name:"Cebu Pacific Air",iataCode:"5J"},{name:"China Airlines",iataCode:"CI"},{name:"China Eastern Airlines",iataCode:"MU"},{name:"China Southern Airlines",iataCode:"CZ"},{name:"Condor",iataCode:"DE"},{name:"Copa Airlines",iataCode:"CM"},{name:"Delta Air Lines",iataCode:"DL"},{name:"Easyfly",iataCode:"VE"},{name:"EasyJet",iataCode:"U2"},{name:"EcoJet",iataCode:"8J"},{name:"Egyptair",iataCode:"MS"},{name:"El Al",iataCode:"LY"},{name:"Emirates Airlines",iataCode:"EK"},{name:"Ethiopian Airlines",iataCode:"ET"},{name:"Etihad Airways",iataCode:"EY"},{name:"EVA Air",iataCode:"BR"},{name:"Fiji Airways",iataCode:"FJ"},{name:"Finnair",iataCode:"AY"},{name:"Flybondi",iataCode:"FO"},{name:"Flydubai",iataCode:"FZ"},{name:"FlySafair",iataCode:"FA"},{name:"Frontier Airlines",iataCode:"F9"},{name:"Garuda Indonesia",iataCode:"GA"},{name:"Go First",iataCode:"G8"},{name:"Gol Linhas Aereas Inteligentes",iataCode:"G3"},{name:"Hainan Airlines",iataCode:"HU"},{name:"Hawaiian Airlines",iataCode:"HA"},{name:"IndiGo Airlines",iataCode:"6E"},{name:"Japan Airlines",iataCode:"JL"},{name:"Jeju Air",iataCode:"7C"},{name:"Jet2",iataCode:"LS"},{name:"JetBlue Airways",iataCode:"B6"},{name:"JetSMART",iataCode:"JA"},{name:"Juneyao Airlines",iataCode:"HO"},{name:"Kenya Airways",iataCode:"KQ"},{name:"Korean Air",iataCode:"KE"},{name:"Kulula.com",iataCode:"MN"},{name:"LATAM Airlines",iataCode:"LA"},{name:"Lion Air",iataCode:"JT"},{name:"LOT Polish Airlines",iataCode:"LO"},{name:"Lufthansa",iataCode:"LH"},{name:"Libyan Airlines",iataCode:"LN"},{name:"Linea Aerea Amaszonas",iataCode:"Z8"},{name:"Malaysia Airlines",iataCode:"MH"},{name:"Nordwind Airlines",iataCode:"N4"},{name:"Norwegian Air Shuttle",iataCode:"DY"},{name:"Oman Air",iataCode:"WY"},{name:"Pakistan International Airlines",iataCode:"PK"},{name:"Pegasus Airlines",iataCode:"PC"},{name:"Philippine Airlines",iataCode:"PR"},{name:"Qantas Group",iataCode:"QF"},{name:"Qatar Airways",iataCode:"QR"},{name:"Republic Airways",iataCode:"YX"},{name:"Royal Air Maroc",iataCode:"AT"},{name:"Ryanair",iataCode:"FR"},{name:"S7 Airlines",iataCode:"S7"},{name:"SAS",iataCode:"SK"},{name:"Satena",iataCode:"9R"},{name:"Saudia",iataCode:"SV"},{name:"Shandong Airlines",iataCode:"SC"},{name:"Sichuan Airlines",iataCode:"3U"},{name:"Singapore Airlines",iataCode:"SQ"},{name:"Sky Airline",iataCode:"H2"},{name:"SkyWest Airlines",iataCode:"OO"},{name:"South African Airways",iataCode:"SA"},{name:"Southwest Airlines",iataCode:"WN"},{name:"SpiceJet",iataCode:"SG"},{name:"Spirit Airlines",iataCode:"NK"},{name:"Spring Airlines",iataCode:"9S"},{name:"SriLankan Airlines",iataCode:"UL"},{name:"Star Peru",iataCode:"2I"},{name:"Sun Country Airlines",iataCode:"SY"},{name:"SunExpress",iataCode:"XQ"},{name:"TAP Air Portugal",iataCode:"TP"},{name:"Thai AirAsia",iataCode:"FD"},{name:"Thai Airways",iataCode:"TG"},{name:"TUI Airways",iataCode:"BY"},{name:"Tunisair",iataCode:"TU"},{name:"Turkish Airlines",iataCode:"TK"},{name:"Ukraine International",iataCode:"PS"},{name:"United Airlines",iataCode:"UA"},{name:"Ural Airlines",iataCode:"U6"},{name:"VietJet Air",iataCode:"VJ"},{name:"Vietnam Airlines",iataCode:"VN"},{name:"Virgin Atlantic Airways",iataCode:"VS"},{name:"Virgin Australia",iataCode:"VA"},{name:"VivaAerobus",iataCode:"VB"},{name:"VOEPASS Linhas Aereas",iataCode:"2Z"},{name:"Volaris",iataCode:"Y4"},{name:"WestJet",iataCode:"WS"},{name:"Wingo",iataCode:"P5"},{name:"Wizz Air",iataCode:"W6"}];var a=[{name:"Aerospatiale/BAC Concorde",iataTypeCode:"SSC"},{name:"Airbus A300",iataTypeCode:"AB3"},{name:"Airbus A310",iataTypeCode:"310"},{name:"Airbus A310-200",iataTypeCode:"312"},{name:"Airbus A310-300",iataTypeCode:"313"},{name:"Airbus A318",iataTypeCode:"318"},{name:"Airbus A319",iataTypeCode:"319"},{name:"Airbus A319neo",iataTypeCode:"31N"},{name:"Airbus A320",iataTypeCode:"320"},{name:"Airbus A320neo",iataTypeCode:"32N"},{name:"Airbus A321",iataTypeCode:"321"},{name:"Airbus A321neo",iataTypeCode:"32Q"},{name:"Airbus A330",iataTypeCode:"330"},{name:"Airbus A330-200",iataTypeCode:"332"},{name:"Airbus A330-300",iataTypeCode:"333"},{name:"Airbus A330-800neo",iataTypeCode:"338"},{name:"Airbus A330-900neo",iataTypeCode:"339"},{name:"Airbus A340",iataTypeCode:"340"},{name:"Airbus A340-200",iataTypeCode:"342"},{name:"Airbus A340-300",iataTypeCode:"343"},{name:"Airbus A340-500",iataTypeCode:"345"},{name:"Airbus A340-600",iataTypeCode:"346"},{name:"Airbus A350",iataTypeCode:"350"},{name:"Airbus A350-900",iataTypeCode:"359"},{name:"Airbus A350-1000",iataTypeCode:"351"},{name:"Airbus A380",iataTypeCode:"380"},{name:"Airbus A380-800",iataTypeCode:"388"},{name:"Antonov An-12",iataTypeCode:"ANF"},{name:"Antonov An-24",iataTypeCode:"AN4"},{name:"Antonov An-26",iataTypeCode:"A26"},{name:"Antonov An-28",iataTypeCode:"A28"},{name:"Antonov An-30",iataTypeCode:"A30"},{name:"Antonov An-32",iataTypeCode:"A32"},{name:"Antonov An-72",iataTypeCode:"AN7"},{name:"Antonov An-124 Ruslan",iataTypeCode:"A4F"},{name:"Antonov An-140",iataTypeCode:"A40"},{name:"Antonov An-148",iataTypeCode:"A81"},{name:"Antonov An-158",iataTypeCode:"A58"},{name:"Antonov An-225 Mriya",iataTypeCode:"A5F"},{name:"Boeing 707",iataTypeCode:"703"},{name:"Boeing 717",iataTypeCode:"717"},{name:"Boeing 720B",iataTypeCode:"B72"},{name:"Boeing 727",iataTypeCode:"727"},{name:"Boeing 727-100",iataTypeCode:"721"},{name:"Boeing 727-200",iataTypeCode:"722"},{name:"Boeing 737 MAX 7",iataTypeCode:"7M7"},{name:"Boeing 737 MAX 8",iataTypeCode:"7M8"},{name:"Boeing 737 MAX 9",iataTypeCode:"7M9"},{name:"Boeing 737 MAX 10",iataTypeCode:"7MJ"},{name:"Boeing 737",iataTypeCode:"737"},{name:"Boeing 737-100",iataTypeCode:"731"},{name:"Boeing 737-200",iataTypeCode:"732"},{name:"Boeing 737-300",iataTypeCode:"733"},{name:"Boeing 737-400",iataTypeCode:"734"},{name:"Boeing 737-500",iataTypeCode:"735"},{name:"Boeing 737-600",iataTypeCode:"736"},{name:"Boeing 737-700",iataTypeCode:"73G"},{name:"Boeing 737-800",iataTypeCode:"738"},{name:"Boeing 737-900",iataTypeCode:"739"},{name:"Boeing 747",iataTypeCode:"747"},{name:"Boeing 747-100",iataTypeCode:"741"},{name:"Boeing 747-200",iataTypeCode:"742"},{name:"Boeing 747-300",iataTypeCode:"743"},{name:"Boeing 747-400",iataTypeCode:"744"},{name:"Boeing 747-400D",iataTypeCode:"74J"},{name:"Boeing 747-8",iataTypeCode:"748"},{name:"Boeing 747SP",iataTypeCode:"74L"},{name:"Boeing 747SR",iataTypeCode:"74R"},{name:"Boeing 757",iataTypeCode:"757"},{name:"Boeing 757-200",iataTypeCode:"752"},{name:"Boeing 757-300",iataTypeCode:"753"},{name:"Boeing 767",iataTypeCode:"767"},{name:"Boeing 767-200",iataTypeCode:"762"},{name:"Boeing 767-300",iataTypeCode:"763"},{name:"Boeing 767-400",iataTypeCode:"764"},{name:"Boeing 777",iataTypeCode:"777"},{name:"Boeing 777-200",iataTypeCode:"772"},{name:"Boeing 777-200LR",iataTypeCode:"77L"},{name:"Boeing 777-300",iataTypeCode:"773"},{name:"Boeing 777-300ER",iataTypeCode:"77W"},{name:"Boeing 787",iataTypeCode:"787"},{name:"Boeing 787-8",iataTypeCode:"788"},{name:"Boeing 787-9",iataTypeCode:"789"},{name:"Boeing 787-10",iataTypeCode:"781"},{name:"Canadair Challenger",iataTypeCode:"CCJ"},{name:"Canadair CL-44",iataTypeCode:"CL4"},{name:"Canadair Regional Jet 100",iataTypeCode:"CR1"},{name:"Canadair Regional Jet 200",iataTypeCode:"CR2"},{name:"Canadair Regional Jet 700",iataTypeCode:"CR7"},{name:"Canadair Regional Jet 705",iataTypeCode:"CRA"},{name:"Canadair Regional Jet 900",iataTypeCode:"CR9"},{name:"Canadair Regional Jet 1000",iataTypeCode:"CRK"},{name:"De Havilland Canada DHC-2 Beaver",iataTypeCode:"DHP"},{name:"De Havilland Canada DHC-2 Turbo-Beaver",iataTypeCode:"DHR"},{name:"De Havilland Canada DHC-3 Otter",iataTypeCode:"DHL"},{name:"De Havilland Canada DHC-4 Caribou",iataTypeCode:"DHC"},{name:"De Havilland Canada DHC-6 Twin Otter",iataTypeCode:"DHT"},{name:"De Havilland Canada DHC-7 Dash 7",iataTypeCode:"DH7"},{name:"De Havilland Canada DHC-8-100 Dash 8 / 8Q",iataTypeCode:"DH1"},{name:"De Havilland Canada DHC-8-200 Dash 8 / 8Q",iataTypeCode:"DH2"},{name:"De Havilland Canada DHC-8-300 Dash 8 / 8Q",iataTypeCode:"DH3"},{name:"De Havilland Canada DHC-8-400 Dash 8Q",iataTypeCode:"DH4"},{name:"De Havilland DH.104 Dove",iataTypeCode:"DHD"},{name:"De Havilland DH.114 Heron",iataTypeCode:"DHH"},{name:"Douglas DC-3",iataTypeCode:"D3F"},{name:"Douglas DC-6",iataTypeCode:"D6F"},{name:"Douglas DC-8-50",iataTypeCode:"D8T"},{name:"Douglas DC-8-62",iataTypeCode:"D8L"},{name:"Douglas DC-8-72",iataTypeCode:"D8Q"},{name:"Douglas DC-9-10",iataTypeCode:"D91"},{name:"Douglas DC-9-20",iataTypeCode:"D92"},{name:"Douglas DC-9-30",iataTypeCode:"D93"},{name:"Douglas DC-9-40",iataTypeCode:"D94"},{name:"Douglas DC-9-50",iataTypeCode:"D95"},{name:"Douglas DC-10",iataTypeCode:"D10"},{name:"Douglas DC-10-10",iataTypeCode:"D1X"},{name:"Douglas DC-10-30",iataTypeCode:"D1Y"},{name:"Embraer 170",iataTypeCode:"E70"},{name:"Embraer 175",iataTypeCode:"E75"},{name:"Embraer 190",iataTypeCode:"E90"},{name:"Embraer 195",iataTypeCode:"E95"},{name:"Embraer E190-E2",iataTypeCode:"290"},{name:"Embraer E195-E2",iataTypeCode:"295"},{name:"Embraer EMB.110 Bandeirante",iataTypeCode:"EMB"},{name:"Embraer EMB.120 Brasilia",iataTypeCode:"EM2"},{name:"Embraer Legacy 600",iataTypeCode:"ER3"},{name:"Embraer Phenom 100",iataTypeCode:"EP1"},{name:"Embraer Phenom 300",iataTypeCode:"EP3"},{name:"Embraer RJ135",iataTypeCode:"ER3"},{name:"Embraer RJ140",iataTypeCode:"ERD"},{name:"Embraer RJ145 Amazon",iataTypeCode:"ER4"},{name:"Ilyushin IL18",iataTypeCode:"IL8"},{name:"Ilyushin IL62",iataTypeCode:"IL6"},{name:"Ilyushin IL76",iataTypeCode:"IL7"},{name:"Ilyushin IL86",iataTypeCode:"ILW"},{name:"Ilyushin IL96-300",iataTypeCode:"I93"},{name:"Ilyushin IL114",iataTypeCode:"I14"},{name:"Lockheed L-182 / 282 / 382 (L-100) Hercules",iataTypeCode:"LOH"},{name:"Lockheed L-188 Electra",iataTypeCode:"LOE"},{name:"Lockheed L-1011 Tristar",iataTypeCode:"L10"},{name:"Lockheed L-1049 Super Constellation",iataTypeCode:"L49"},{name:"McDonnell Douglas MD11",iataTypeCode:"M11"},{name:"McDonnell Douglas MD80",iataTypeCode:"M80"},{name:"McDonnell Douglas MD81",iataTypeCode:"M81"},{name:"McDonnell Douglas MD82",iataTypeCode:"M82"},{name:"McDonnell Douglas MD83",iataTypeCode:"M83"},{name:"McDonnell Douglas MD87",iataTypeCode:"M87"},{name:"McDonnell Douglas MD88",iataTypeCode:"M88"},{name:"McDonnell Douglas MD90",iataTypeCode:"M90"},{name:"Sukhoi Superjet 100-95",iataTypeCode:"SU9"},{name:"Tupolev Tu-134",iataTypeCode:"TU3"},{name:"Tupolev Tu-154",iataTypeCode:"TU5"},{name:"Tupolev Tu-204",iataTypeCode:"T20"},{name:"Yakovlev Yak-40",iataTypeCode:"YK4"},{name:"Yakovlev Yak-42",iataTypeCode:"YK2"}];var o=[{name:"Adelaide International Airport",iataCode:"ADL"},{name:"Adolfo Suarez Madrid-Barajas Airport",iataCode:"MAD"},{name:"Aeroparque Jorge Newbery Airport",iataCode:"AEP"},{name:"Afonso Pena International Airport",iataCode:"CWB"},{name:"Alfonso Bonilla Aragon International Airport",iataCode:"CLO"},{name:"Amsterdam Airport Schiphol",iataCode:"AMS"},{name:"Arturo Merino Benitez International Airport",iataCode:"SCL"},{name:"Auckland International Airport",iataCode:"AKL"},{name:"Beijing Capital International Airport",iataCode:"PEK"},{name:"Belem Val de Cans International Airport",iataCode:"BEL"},{name:"Belo Horizonte Tancredo Neves International Airport",iataCode:"CNF"},{name:"Berlin-Tegel Airport",iataCode:"TXL"},{name:"Bole International Airport",iataCode:"ADD"},{name:"Brasilia-Presidente Juscelino Kubitschek International Airport",iataCode:"BSB"},{name:"Brisbane International Airport",iataCode:"BNE"},{name:"Brussels Airport",iataCode:"BRU"},{name:"Cairns Airport",iataCode:"CNS"},{name:"Cairo International Airport",iataCode:"CAI"},{name:"Canberra Airport",iataCode:"CBR"},{name:"Capetown International Airport",iataCode:"CPT"},{name:"Charles de Gaulle International Airport",iataCode:"CDG"},{name:"Charlotte Douglas International Airport",iataCode:"CLT"},{name:"Chengdu Shuangliu International Airport",iataCode:"CTU"},{name:"Chhatrapati Shivaji International Airport",iataCode:"BOM"},{name:"Chicago O'Hare International Airport",iataCode:"ORD"},{name:"Chongqing Jiangbei International Airport",iataCode:"CKG"},{name:"Christchurch International Airport",iataCode:"CHC"},{name:"Copenhagen Kastrup Airport",iataCode:"CPH"},{name:"Dallas Fort Worth International Airport",iataCode:"DFW"},{name:"Daniel K. Inouye International Airport",iataCode:"HNL"},{name:"Denver International Airport",iataCode:"DEN"},{name:"Don Mueang International Airport",iataCode:"DMK"},{name:"Dubai International Airport",iataCode:"DXB"},{name:"Dublin Airport",iataCode:"DUB"},{name:"Dusseldorf Airport",iataCode:"DUS"},{name:"El Dorado International Airport",iataCode:"BOG"},{name:"Eleftherios Venizelos International Airport",iataCode:"ATH"},{name:"Faa'a International Airport",iataCode:"PPT"},{name:"Fort Lauderdale Hollywood International Airport",iataCode:"FLL"},{name:"Fortaleza Pinto Martins International Airport",iataCode:"FOR"},{name:"Frankfurt am Main Airport",iataCode:"FRA"},{name:"George Bush Intercontinental Houston Airport",iataCode:"IAH"},{name:"Gold Coast Airport",iataCode:"OOL"},{name:"Guarulhos - Governador Andre Franco Montoro International Airport",iataCode:"GRU"},{name:"Hartsfield-Jackson Atlanta International Airport",iataCode:"ATL"},{name:"Helsinki Vantaa Airport",iataCode:"HEL"},{name:"Hobart International Airport",iataCode:"HBA"},{name:"Hong Kong International Airport",iataCode:"HKG"},{name:"Houari Boumediene Airport",iataCode:"ALG"},{name:"Hurgada International Airport",iataCode:"HRG"},{name:"Incheon International Airport",iataCode:"ICN"},{name:"Indira Gandhi International Airport",iataCode:"DEL"},{name:"Istanbul Airport",iataCode:"IST"},{name:"Jacksons International Airport",iataCode:"POM"},{name:"Jeju International Airport",iataCode:"CJU"},{name:"John F Kennedy International Airport",iataCode:"JFK"},{name:"Jorge Chavez International Airport",iataCode:"LIM"},{name:"Jose Maria Cordova International Airport",iataCode:"MDE"},{name:"Josep Tarradellas Barcelona-El Prat Airport",iataCode:"BCN"},{name:"Kahului Airport",iataCode:"OGG"},{name:"King Abdulaziz International Airport",iataCode:"JED"},{name:"Kuala Lumpur International Airport",iataCode:"KUL"},{name:"Kunming Changshui International Airport",iataCode:"KMG"},{name:"La Tontouta International Airport",iataCode:"NOU"},{name:"Leonardo da Vinci-Fiumicino Airport",iataCode:"FCO"},{name:"London Heathrow Airport",iataCode:"LHR"},{name:"Los Angeles International Airport",iataCode:"LAX"},{name:"McCarran International Airport",iataCode:"LAS"},{name:"Melbourne International Airport",iataCode:"MEL"},{name:"Mexico City International Airport",iataCode:"MEX"},{name:"Miami International Airport",iataCode:"MIA"},{name:"Ministro Pistarini International Airport",iataCode:"EZE"},{name:"Minneapolis-St Paul International/Wold-Chamberlain Airport",iataCode:"MSP"},{name:"Mohammed V International Airport",iataCode:"CMN"},{name:"Moscow Domodedovo Airport",iataCode:"DME"},{name:"Munich Airport",iataCode:"MUC"},{name:"Murtala Muhammed International Airport",iataCode:"LOS"},{name:"Nadi International Airport",iataCode:"NAN"},{name:"Nairobi Jomo Kenyatta International Airport",iataCode:"NBO"},{name:"Narita International Airport",iataCode:"NRT"},{name:"Newark Liberty International Airport",iataCode:"EWR"},{name:"Ninoy Aquino International Airport",iataCode:"MNL"},{name:"Noumea Magenta Airport",iataCode:"GEA"},{name:"O. R. Tambo International Airport",iataCode:"JNB"},{name:"Orlando International Airport",iataCode:"MCO"},{name:"Oslo Lufthavn",iataCode:"OSL"},{name:"Perth Airport",iataCode:"PER"},{name:"Phoenix Sky Harbor International Airport",iataCode:"PHX"},{name:"Recife Guararapes-Gilberto Freyre International Airport",iataCode:"REC"},{name:"Rio de Janeiro Galeao International Airport",iataCode:"GIG"},{name:"Salgado Filho International Airport",iataCode:"POA"},{name:"Salvador Deputado Luis Eduardo Magalhaes International Airport",iataCode:"SSA"},{name:"San Francisco International Airport",iataCode:"SFO"},{name:"Santos Dumont Airport",iataCode:"SDU"},{name:"Sao Paulo-Congonhas Airport",iataCode:"CGH"},{name:"Seattle Tacoma International Airport",iataCode:"SEA"},{name:"Shanghai Hongqiao International Airport",iataCode:"SHA"},{name:"Shanghai Pudong International Airport",iataCode:"PVG"},{name:"Shenzhen Bao'an International Airport",iataCode:"SZX"},{name:"Sheremetyevo International Airport",iataCode:"SVO"},{name:"Singapore Changi Airport",iataCode:"SIN"},{name:"Soekarno-Hatta International Airport",iataCode:"CGK"},{name:'Stockholm-Arlanda Airport"',iataCode:"ARN"},{name:"Suvarnabhumi Airport",iataCode:"BKK"},{name:"Sydney Kingsford Smith International Airport",iataCode:"SYD"},{name:"Taiwan Taoyuan International Airport",iataCode:"TPE"},{name:"Tan Son Nhat International Airport",iataCode:"SGN"},{name:"Tokyo Haneda International Airport",iataCode:"HND"},{name:"Toronto Pearson International Airport",iataCode:"YYZ"},{name:"Tunis Carthage International Airport",iataCode:"TUN"},{name:"Vancouver International Airport",iataCode:"YVR"},{name:"Vienna International Airport",iataCode:"VIE"},{name:"Viracopos International Airport",iataCode:"VCP"},{name:"Vnukovo International Airport",iataCode:"VKO"},{name:"Wellington International Airport",iataCode:"WLG"},{name:"Xi'an Xianyang International Airport",iataCode:"XIY"},{name:"Zhukovsky International Airport",iataCode:"ZIA"},{name:"Zurich Airport",iataCode:"ZRH"}];var qa={airline:e,airplane:a,airport:o},r=qa;var n=["American black bear","Asian black bear","Brown bear","Giant panda","Polar bear","Sloth bear","Spectacled bear","Sun bear"];var i=["Abert's Towhee","Acadian Flycatcher","Acorn Woodpecker","Alder Flycatcher","Aleutian Tern","Allen's Hummingbird","Altamira Oriole","American Avocet","American Bittern","American Black Duck","American Coot","American Crow","American Dipper","American Golden-Plover","American Goldfinch","American Kestrel","American Oystercatcher","American Pipit","American Redstart","American Robin","American Tree Sparrow","American White Pelican","American Wigeon","American Woodcock","Ancient Murrelet","Anhinga","Anna's Hummingbird","Antillean Nighthawk","Antillean Palm Swift","Aplomado Falcon","Arctic Loon","Arctic Tern","Arctic Warbler","Ash-throated Flycatcher","Ashy Storm-Petrel","Asian Brown Flycatcher","Atlantic Puffin","Audubon's Oriole","Audubon's Shearwater","Aztec Thrush","Azure Gallinule","Bachman's Sparrow","Bachman's Warbler","Bahama Mockingbird","Bahama Swallow","Bahama Woodstar","Baikal Teal","Baird's Sandpiper","Baird's Sparrow","Bald Eagle","Baltimore Oriole","Bananaquit","Band-rumped Storm-Petrel","Band-tailed Gull","Band-tailed Pigeon","Bank Swallow","Bar-tailed Godwit","Barn Owl","Barn Swallow","Barnacle Goose","Barred Owl","Barrow's Goldeneye","Bay-breasted Warbler","Bean Goose","Bell's Vireo","Belted Kingfisher","Bendire's Thrasher","Berylline Hummingbird","Bewick's Wren","Bicknell's Thrush","Black Catbird","Black Guillemot","Black Noddy","Black Oystercatcher","Black Phoebe","Black Rail","Black Rosy-Finch","Black Scoter","Black Skimmer","Black Storm-Petrel","Black Swift","Black Tern","Black Turnstone","Black Vulture","Black-and-white Warbler","Black-backed Wagtail","Black-backed Woodpecker","Black-bellied Plover","Black-bellied Whistling-Duck","Black-billed Cuckoo","Black-billed Magpie","Black-browed Albatross","Black-capped Chickadee","Black-capped Gnatcatcher","Black-capped Petrel","Black-capped Vireo","Black-chinned Hummingbird","Black-chinned Sparrow","Black-crowned Night-Heron","Black-faced Grassquit","Black-footed Albatross","Black-headed Grosbeak","Black-headed Gull","Black-legged Kittiwake","Black-necked Stilt","Black-tailed Gnatcatcher","Black-tailed Godwit","Black-tailed Gull","Black-throated Blue Warbler","Black-throated Gray Warbler","Black-throated Green Warbler","Black-throated Sparrow","Black-vented Oriole","Black-vented Shearwater","Black-whiskered Vireo","Black-winged Stilt","Blackburnian Warbler","Blackpoll Warbler","Blue Bunting","Blue Grosbeak","Blue Grouse","Blue Jay","Blue Mockingbird","Blue-footed Booby","Blue-gray Gnatcatcher","Blue-headed Vireo","Blue-throated Hummingbird","Blue-winged Teal","Blue-winged Warbler","Bluethroat","Boat-tailed Grackle","Bobolink","Bohemian Waxwing","Bonaparte's Gull","Boreal Chickadee","Boreal Owl","Botteri's Sparrow","Brambling","Brandt's Cormorant","Brant","Brewer's Blackbird","Brewer's Sparrow","Bridled Tern","Bridled Titmouse","Bristle-thighed Curlew","Broad-billed Hummingbird","Broad-billed Sandpiper","Broad-tailed Hummingbird","Broad-winged Hawk","Bronzed Cowbird","Brown Booby","Brown Creeper","Brown Jay","Brown Noddy","Brown Pelican","Brown Shrike","Brown Thrasher","Brown-capped Rosy-Finch","Brown-chested Martin","Brown-crested Flycatcher","Brown-headed Cowbird","Brown-headed Nuthatch","Budgerigar","Buff-bellied Hummingbird","Buff-breasted Flycatcher","Buff-breasted Sandpiper","Buff-collared Nightjar","Bufflehead","Buller's Shearwater","Bullock's Oriole","Bumblebee Hummingbird","Burrowing Owl","Bushtit","Cactus Wren","California Condor","California Gnatcatcher","California Gull","California Quail","California Thrasher","California Towhee","Calliope Hummingbird","Canada Goose","Canada Warbler","Canvasback","Canyon Towhee","Canyon Wren","Cape May Warbler","Caribbean Elaenia","Carolina Chickadee","Carolina Parakeet","Carolina Wren","Caspian Tern","Cassin's Auklet","Cassin's Finch","Cassin's Kingbird","Cassin's Sparrow","Cassin's Vireo","Cattle Egret","Cave Swallow","Cedar Waxwing","Cerulean Warbler","Chestnut-backed Chickadee","Chestnut-collared Longspur","Chestnut-sided Warbler","Chihuahuan Raven","Chimney Swift","Chinese Egret","Chipping Sparrow","Chuck-will's-widow","Chukar","Cinnamon Hummingbird","Cinnamon Teal","Citrine Wagtail","Clapper Rail","Clark's Grebe","Clark's Nutcracker","Clay-colored Robin","Clay-colored Sparrow","Cliff Swallow","Colima Warbler","Collared Forest-Falcon","Collared Plover","Common Black-Hawk","Common Chaffinch","Common Crane","Common Cuckoo","Common Eider","Common Goldeneye","Common Grackle","Common Greenshank","Common Ground-Dove","Common House-Martin","Common Loon","Common Merganser","Common Moorhen","Common Murre","Common Nighthawk","Common Pauraque","Common Pochard","Common Poorwill","Common Raven","Common Redpoll","Common Ringed Plover","Common Rosefinch","Common Sandpiper","Common Snipe","Common Swift","Common Tern","Common Yellowthroat","Connecticut Warbler","Cook's Petrel","Cooper's Hawk","Cordilleran Flycatcher","Corn Crake","Cory's Shearwater","Costa's Hummingbird","Couch's Kingbird","Crane Hawk","Craveri's Murrelet","Crescent-chested Warbler","Crested Auklet","Crested Caracara","Crested Myna","Crimson-collared Grosbeak","Crissal Thrasher","Cuban Martin","Curlew Sandpiper","Curve-billed Thrasher","Dark-eyed Junco","Dickcissel","Double-crested Cormorant","Double-striped Thick-knee","Dovekie","Downy Woodpecker","Dunlin","Dusky Flycatcher","Dusky Thrush","Dusky Warbler","Dusky-capped Flycatcher","Eared Grebe","Eared Trogon","Eastern Bluebird","Eastern Kingbird","Eastern Meadowlark","Eastern Phoebe","Eastern Screech-Owl","Eastern Towhee","Eastern Wood-Pewee","Elegant Tern","Elegant Trogon","Elf Owl","Emperor Goose","Eskimo Curlew","Eurasian Blackbird","Eurasian Bullfinch","Eurasian Collared-Dove","Eurasian Coot","Eurasian Curlew","Eurasian Dotterel","Eurasian Hobby","Eurasian Jackdaw","Eurasian Kestrel","Eurasian Oystercatcher","Eurasian Siskin","Eurasian Tree Sparrow","Eurasian Wigeon","Eurasian Woodcock","Eurasian Wryneck","European Golden-Plover","European Starling","European Storm-Petrel","European Turtle-Dove","Evening Grosbeak","Eyebrowed Thrush","Falcated Duck","Fan-tailed Warbler","Far Eastern Curlew","Ferruginous Hawk","Ferruginous Pygmy-Owl","Field Sparrow","Fieldfare","Fish Crow","Five-striped Sparrow","Flame-colored Tanager","Flammulated Owl","Flesh-footed Shearwater","Florida Scrub-Jay","Fork-tailed Flycatcher","Fork-tailed Storm-Petrel","Fork-tailed Swift","Forster's Tern","Fox Sparrow","Franklin's Gull","Fulvous Whistling-Duck","Gadwall","Gambel's Quail","Garganey","Gila Woodpecker","Gilded Flicker","Glaucous Gull","Glaucous-winged Gull","Glossy Ibis","Golden Eagle","Golden-cheeked Warbler","Golden-crowned Kinglet","Golden-crowned Sparrow","Golden-crowned Warbler","Golden-fronted Woodpecker","Golden-winged Warbler","Grace's Warbler","Grasshopper Sparrow","Gray Bunting","Gray Catbird","Gray Flycatcher","Gray Hawk","Gray Jay","Gray Kingbird","Gray Partridge","Gray Silky-flycatcher","Gray Vireo","Gray Wagtail","Gray-breasted Martin","Gray-cheeked Thrush","Gray-crowned Rosy-Finch","Gray-crowned Yellowthroat","Gray-headed Chickadee","Gray-spotted Flycatcher","Gray-tailed Tattler","Great Auk","Great Black-backed Gull","Great Blue Heron","Great Cormorant","Great Crested Flycatcher","Great Egret","Great Frigatebird","Great Gray Owl","Great Horned Owl","Great Kiskadee","Great Knot","Great Skua","Great Spotted Woodpecker","Great-tailed Grackle","Greater Flamingo","Greater Pewee","Greater Prairie-chicken","Greater Roadrunner","Greater Scaup","Greater Shearwater","Greater White-fronted Goose","Greater Yellowlegs","Green Heron","Green Jay","Green Kingfisher","Green Sandpiper","Green Violet-ear","Green-breasted Mango","Green-tailed Towhee","Green-winged Teal","Greenish Elaenia","Groove-billed Ani","Gull-billed Tern","Gyrfalcon","Hairy Woodpecker","Hammond's Flycatcher","Harlequin Duck","Harris's Hawk","Harris's Sparrow","Hawfinch","Heermann's Gull","Henslow's Sparrow","Hepatic Tanager","Herald Petrel","Hermit Thrush","Hermit Warbler","Herring Gull","Himalayan Snowcock","Hoary Redpoll","Hooded Merganser","Hooded Oriole","Hooded Warbler","Hook-billed Kite","Hoopoe","Horned Grebe","Horned Lark","Horned Puffin","House Finch","House Sparrow","House Wren","Hudsonian Godwit","Hutton's Vireo","Iceland Gull","Inca Dove","Indigo Bunting","Island Scrub-Jay","Ivory Gull","Ivory-billed Woodpecker","Jabiru","Jack Snipe","Jungle Nightjar","Juniper Titmouse","Kentucky Warbler","Key West Quail-Dove","Killdeer","King Eider","King Rail","Kirtland's Warbler","Kittlitz's Murrelet","La Sagra's Flycatcher","Labrador Duck","Ladder-backed Woodpecker","Lanceolated Warbler","Lapland Longspur","Large-billed Tern","Lark Bunting","Lark Sparrow","Laughing Gull","Lawrence's Goldfinch","Laysan Albatross","Lazuli Bunting","Le Conte's Sparrow","Le Conte's Thrasher","Leach's Storm-Petrel","Least Auklet","Least Bittern","Least Flycatcher","Least Grebe","Least Sandpiper","Least Storm-Petrel","Least Tern","Lesser Black-backed Gull","Lesser Frigatebird","Lesser Goldfinch","Lesser Nighthawk","Lesser Prairie-chicken","Lesser Scaup","Lesser White-fronted Goose","Lesser Yellowlegs","Lewis's Woodpecker","Limpkin","Lincoln's Sparrow","Little Blue Heron","Little Bunting","Little Curlew","Little Egret","Little Gull","Little Ringed Plover","Little Shearwater","Little Stint","Loggerhead Kingbird","Loggerhead Shrike","Long-billed Curlew","Long-billed Dowitcher","Long-billed Murrelet","Long-billed Thrasher","Long-eared Owl","Long-tailed Jaeger","Long-toed Stint","Louisiana Waterthrush","Lucifer Hummingbird","Lucy's Warbler","MacGillivray's Warbler","Magnificent Frigatebird","Magnificent Hummingbird","Magnolia Warbler","Mallard","Mangrove Cuckoo","Manx Shearwater","Marbled Godwit","Marbled Murrelet","Marsh Sandpiper","Marsh Wren","Masked Booby","Masked Duck","Masked Tityra","McCown's Longspur","McKay's Bunting","Merlin","Mew Gull","Mexican Chickadee","Mexican Jay","Middendorff's Grasshopper-Warbler","Mississippi Kite","Mongolian Plover","Monk Parakeet","Montezuma Quail","Mottled Duck","Mottled Owl","Mottled Petrel","Mountain Bluebird","Mountain Chickadee","Mountain Plover","Mountain Quail","Mourning Dove","Mourning Warbler","Mugimaki Flycatcher","Murphy's Petrel","Muscovy Duck","Mute Swan","Narcissus Flycatcher","Nashville Warbler","Nelson's Sharp-tailed Sparrow","Neotropic Cormorant","Northern Beardless-Tyrannulet","Northern Bobwhite","Northern Cardinal","Northern Flicker","Northern Fulmar","Northern Gannet","Northern Goshawk","Northern Harrier","Northern Hawk Owl","Northern Jacana","Northern Lapwing","Northern Mockingbird","Northern Parula","Northern Pintail","Northern Pygmy-Owl","Northern Rough-winged Swallow","Northern Saw-whet Owl","Northern Shoveler","Northern Shrike","Northern Waterthrush","Northern Wheatear","Northwestern Crow","Nuttall's Woodpecker","Nutting's Flycatcher","Oak Titmouse","Oldsquaw","Olive Sparrow","Olive Warbler","Olive-backed Pipit","Olive-sided Flycatcher","Orange-crowned Warbler","Orchard Oriole","Oriental Cuckoo","Oriental Greenfinch","Oriental Pratincole","Oriental Scops-Owl","Oriental Turtle-Dove","Osprey","Ovenbird","Pacific Golden-Plover","Pacific Loon","Pacific-slope Flycatcher","Paint-billed Crake","Painted Bunting","Painted Redstart","Pallas's Bunting","Palm Warbler","Parakeet Auklet","Parasitic Jaeger","Passenger Pigeon","Pechora Pipit","Pectoral Sandpiper","Pelagic Cormorant","Peregrine Falcon","Phainopepla","Philadelphia Vireo","Pied-billed Grebe","Pigeon Guillemot","Pileated Woodpecker","Pin-tailed Snipe","Pine Bunting","Pine Grosbeak","Pine Siskin","Pine Warbler","Pink-footed Goose","Pink-footed Shearwater","Pinyon Jay","Piping Plover","Plain Chachalaca","Plain-capped Starthroat","Plumbeous Vireo","Pomarine Jaeger","Prairie Falcon","Prairie Warbler","Prothonotary Warbler","Purple Finch","Purple Gallinule","Purple Martin","Purple Sandpiper","Pygmy Nuthatch","Pyrrhuloxia","Razorbill","Red Crossbill","Red Knot","Red Phalarope","Red-bellied Woodpecker","Red-billed Pigeon","Red-billed Tropicbird","Red-breasted Flycatcher","Red-breasted Merganser","Red-breasted Nuthatch","Red-breasted Sapsucker","Red-cockaded Woodpecker","Red-crowned Parrot","Red-eyed Vireo","Red-faced Cormorant","Red-faced Warbler","Red-flanked Bluetail","Red-footed Booby","Red-headed Woodpecker","Red-legged Kittiwake","Red-naped Sapsucker","Red-necked Grebe","Red-necked Phalarope","Red-necked Stint","Red-shouldered Hawk","Red-tailed Hawk","Red-tailed Tropicbird","Red-throated Loon","Red-throated Pipit","Red-whiskered Bulbul","Red-winged Blackbird","Reddish Egret","Redhead","Redwing","Reed Bunting","Rhinoceros Auklet","Ring-billed Gull","Ring-necked Duck","Ring-necked Pheasant","Ringed Kingfisher","Roadside Hawk","Rock Dove","Rock Ptarmigan","Rock Sandpiper","Rock Wren","Rose-breasted Grosbeak","Rose-throated Becard","Roseate Spoonbill","Roseate Tern","Ross's Goose","Ross's Gull","Rough-legged Hawk","Royal Tern","Ruby-crowned Kinglet","Ruby-throated Hummingbird","Ruddy Duck","Ruddy Ground-Dove","Ruddy Quail-Dove","Ruddy Turnstone","Ruff","Ruffed Grouse","Rufous Hummingbird","Rufous-backed Robin","Rufous-capped Warbler","Rufous-crowned Sparrow","Rufous-winged Sparrow","Rustic Bunting","Rusty Blackbird","Sabine's Gull","Sage Grouse","Sage Sparrow","Sage Thrasher","Saltmarsh Sharp-tailed Sparrow","Sanderling","Sandhill Crane","Sandwich Tern","Savannah Sparrow","Say's Phoebe","Scaled Quail","Scaly-naped Pigeon","Scarlet Ibis","Scarlet Tanager","Scissor-tailed Flycatcher","Scott's Oriole","Seaside Sparrow","Sedge Wren","Semipalmated Plover","Semipalmated Sandpiper","Sharp-shinned Hawk","Sharp-tailed Grouse","Sharp-tailed Sandpiper","Shiny Cowbird","Short-billed Dowitcher","Short-eared Owl","Short-tailed Albatross","Short-tailed Hawk","Short-tailed Shearwater","Shy Albatross","Siberian Accentor","Siberian Blue Robin","Siberian Flycatcher","Siberian Rubythroat","Sky Lark","Slate-throated Redstart","Slaty-backed Gull","Slender-billed Curlew","Smew","Smith's Longspur","Smooth-billed Ani","Snail Kite","Snow Bunting","Snow Goose","Snowy Egret","Snowy Owl","Snowy Plover","Solitary Sandpiper","Song Sparrow","Sooty Shearwater","Sooty Tern","Sora","South Polar Skua","Southern Martin","Spectacled Eider","Spoonbill Sandpiper","Spot-billed Duck","Spot-breasted Oriole","Spotted Dove","Spotted Owl","Spotted Rail","Spotted Redshank","Spotted Sandpiper","Spotted Towhee","Sprague's Pipit","Spruce Grouse","Stejneger's Petrel","Steller's Eider","Steller's Jay","Steller's Sea-Eagle","Stilt Sandpiper","Stonechat","Streak-backed Oriole","Streaked Shearwater","Strickland's Woodpecker","Stripe-headed Tanager","Sulphur-bellied Flycatcher","Summer Tanager","Surf Scoter","Surfbird","Swainson's Hawk","Swainson's Thrush","Swainson's Warbler","Swallow-tailed Kite","Swamp Sparrow","Tamaulipas Crow","Tawny-shouldered Blackbird","Temminck's Stint","Tennessee Warbler","Terek Sandpiper","Thayer's Gull","Thick-billed Kingbird","Thick-billed Murre","Thick-billed Parrot","Thick-billed Vireo","Three-toed Woodpecker","Townsend's Solitaire","Townsend's Warbler","Tree Pipit","Tree Swallow","Tricolored Blackbird","Tricolored Heron","Tropical Kingbird","Tropical Parula","Trumpeter Swan","Tufted Duck","Tufted Flycatcher","Tufted Puffin","Tufted Titmouse","Tundra Swan","Turkey Vulture","Upland Sandpiper","Varied Bunting","Varied Thrush","Variegated Flycatcher","Vaux's Swift","Veery","Verdin","Vermilion Flycatcher","Vesper Sparrow","Violet-crowned Hummingbird","Violet-green Swallow","Virginia Rail","Virginia's Warbler","Wandering Albatross","Wandering Tattler","Warbling Vireo","Wedge-rumped Storm-Petrel","Wedge-tailed Shearwater","Western Bluebird","Western Grebe","Western Gull","Western Kingbird","Western Meadowlark","Western Reef-Heron","Western Sandpiper","Western Screech-Owl","Western Scrub-Jay","Western Tanager","Western Wood-Pewee","Whimbrel","Whip-poor-will","Whiskered Auklet","Whiskered Screech-Owl","Whiskered Tern","White Ibis","White Wagtail","White-breasted Nuthatch","White-cheeked Pintail","White-chinned Petrel","White-collared Seedeater","White-collared Swift","White-crowned Pigeon","White-crowned Sparrow","White-eared Hummingbird","White-eyed Vireo","White-faced Ibis","White-faced Storm-Petrel","White-headed Woodpecker","White-rumped Sandpiper","White-tailed Eagle","White-tailed Hawk","White-tailed Kite","White-tailed Ptarmigan","White-tailed Tropicbird","White-throated Needletail","White-throated Robin","White-throated Sparrow","White-throated Swift","White-tipped Dove","White-winged Crossbill","White-winged Dove","White-winged Parakeet","White-winged Scoter","White-winged Tern","Whooper Swan","Whooping Crane","Wild Turkey","Willet","Williamson's Sapsucker","Willow Flycatcher","Willow Ptarmigan","Wilson's Phalarope","Wilson's Plover","Wilson's Storm-Petrel","Wilson's Warbler","Winter Wren","Wood Duck","Wood Sandpiper","Wood Stork","Wood Thrush","Wood Warbler","Worm-eating Warbler","Worthen's Sparrow","Wrentit","Xantus's Hummingbird","Xantus's Murrelet","Yellow Bittern","Yellow Grosbeak","Yellow Rail","Yellow Wagtail","Yellow Warbler","Yellow-bellied Flycatcher","Yellow-bellied Sapsucker","Yellow-billed Cuckoo","Yellow-billed Loon","Yellow-billed Magpie","Yellow-breasted Bunting","Yellow-breasted Chat","Yellow-crowned Night-Heron","Yellow-eyed Junco","Yellow-faced Grassquit","Yellow-footed Gull","Yellow-green Vireo","Yellow-headed Blackbird","Yellow-legged Gull","Yellow-nosed Albatross","Yellow-rumped Warbler","Yellow-throated Vireo","Yellow-throated Warbler","Yucatan Vireo","Zenaida Dove","Zone-tailed Hawk"];var t=["Abyssinian","American Bobtail","American Curl","American Shorthair","American Wirehair","Balinese","Bengal","Birman","Bombay","British Shorthair","Burmese","Chartreux","Chausie","Cornish Rex","Devon Rex","Donskoy","Egyptian Mau","Exotic Shorthair","Havana","Highlander","Himalayan","Japanese Bobtail","Korat","Kurilian Bobtail","LaPerm","Maine Coon","Manx","Minskin","Munchkin","Nebelung","Norwegian Forest Cat","Ocicat","Ojos Azules","Oriental","Persian","Peterbald","Pixiebob","Ragdoll","Russian Blue","Savannah","Scottish Fold","Selkirk Rex","Serengeti","Siamese","Siberian","Singapura","Snowshoe","Sokoke","Somali","Sphynx","Thai","Tonkinese","Toyger","Turkish Angora","Turkish Van"];var l=["Amazon River Dolphin","Arnoux's Beaked Whale","Atlantic Humpbacked Dolphin","Atlantic Spotted Dolphin","Atlantic White-Sided Dolphin","Australian Snubfin Dolphin","Australian humpback Dolphin","Blue Whale","Bottlenose Dolphin","Bryde\u2019s whale","Burrunan Dolphin","Chilean Dolphin","Chinese River Dolphin","Chinese White Dolphin","Clymene Dolphin","Commerson\u2019s Dolphin","Costero","Dusky Dolphin","False Killer Whale","Fin Whale","Fraser\u2019s Dolphin","Ganges River Dolphin","Guiana Dolphin","Heaviside\u2019s Dolphin","Hector\u2019s Dolphin","Hourglass Dolphin","Humpback whale","Indo-Pacific Bottlenose Dolphin","Indo-Pacific Hump-backed Dolphin","Irrawaddy Dolphin","Killer Whale (Orca)","La Plata Dolphin","Long-Beaked Common Dolphin","Long-finned Pilot Whale","Longman's Beaked Whale","Melon-headed Whale","Northern Rightwhale Dolphin","Omura\u2019s whale","Pacific White-Sided Dolphin","Pantropical Spotted Dolphin","Peale\u2019s Dolphin","Pygmy Killer Whale","Risso\u2019s Dolphin","Rough-Toothed Dolphin","Sei Whale","Short-Beaked Common Dolphin","Short-finned Pilot Whale","Southern Bottlenose Whale","Southern Rightwhale Dolphin","Sperm Whale","Spinner Dolphin","Striped Dolphin","Tucuxi","White-Beaked Dolphin"];var s=["Aberdeen Angus","Abergele","Abigar","Abondance","Abyssinian Shorthorned Zebu","Aceh","Achham","Adamawa","Adaptaur","Afar","Africangus","Afrikaner","Agerolese","Alambadi","Alatau","Albanian","Albera","Alderney","Alentejana","Aleutian wild cattle","Aliad Dinka","Alistana-Sanabresa","Allmogekor","Alur","American","American Angus","American Beef Friesian","American Brown Swiss","American Milking Devon","American White Park","Amerifax","Amrit Mahal","Amsterdam Island cattle","Anatolian Black","Andalusian Black","Andalusian Blond","Andalusian Grey","Angeln","Angoni","Ankina","Ankole","Ankole-Watusi","Aracena","Arado","Argentine Criollo","Argentine Friesian","Armorican","Arouquesa","Arsi","Asturian Mountain","Asturian Valley","Aubrac","Aulie-Ata","Aure et Saint-Girons","Australian Braford","Australian Brangus","Australian Charbray","Australian Friesian Sahiwal","Australian Lowline","Australian Milking Zebu","Australian Shorthorn","Austrian Simmental","Austrian Yellow","Avile\xF1a-Negra Ib\xE9rica","Av\xE9tonou","Aweil Dinka","Ayrshire","Azaouak","Azebuado","Azerbaijan Zebu","Azores","Bachaur cattle","Baherie cattle","Bakosi cattle","Balancer","Baoule","Bargur cattle","Barros\xE3","Barzona","Bazadaise","Bedit","Beef Freisian","Beefalo","Beefmaker","Beefmaster","Begayt","Belgian Blue","Belgian Red","Belgian Red Pied","Belgian White-and-Red","Belmont Red","Belted Galloway","Bernese","Berrenda cattle","Betizu","Bianca Modenese","Blaarkop","Black Angus","Black Baldy","Black Hereford","Blanca Cacere\xF1a","Blanco Orejinegro BON","Blonde d'Aquitaine","Blue Albion","Blue Grey","Bohuskulla","Bonsmara","Boran","Bo\u0161karin","Braford","Brahman","Brahmousin","Brangus","Braunvieh","Brava","Breed","British Friesian","British White","Brown Carpathian","Brown Caucasian","Brown Swiss","Bue Lingo","Burlina","Bushuyev","Butana cattle","Bu\u0161a cattle","Cachena","Caldelana","Camargue","Campbell Island cattle","Canadian Speckle Park","Canadienne","Canaria","Canchim","Caracu","Carinthian Blondvieh","Carora","Cedit","Charbray","Charolais","Chateaubriand","Chiangus","Chianina","Chillingham cattle","Chinese Black Pied","Cholistani","Coloursided White Back","Commercial","Corriente","Corsican cattle","Coste\xF1o con Cuernos","Crioulo Lageano","C\xE1rdena Andaluza","Dajal","Dangi cattle","Danish Black-Pied","Danish Jersey","Danish Red","Dedit","Deep Red cattle","Deoni","Devon","Dexter cattle","Dhanni","Doayo cattle","Doela","Drakensberger","Droughtmaster","Dulong'","Dutch Belted","Dutch Friesian","Dwarf Lulu","D\xF8lafe","East Anatolian Red","Eastern Finncattle","Eastern Red Polled","Eedit","Enderby Island cattle","English Longhorn","Ennstaler Bergscheck","Estonian Holstein","Estonian Native","Estonian Red cattle","Fedit","Finncattle","Finnish Ayrshire","Finnish Holstein-Friesian","Fj\xE4ll","Fleckvieh","Florida Cracker cattle","Fogera","French Simmental","Fribourgeoise","Friesian Red and White","Fulani Sudanese","F\u0113ng Cattle","Galician Blond","Galloway cattle","Gangatiri","Gaolao","Garvonesa","Gascon cattle","Gedit","Gelbvieh","Georgian Mountain cattle","German Angus","German Black Pied Dairy","German Black Pied cattle","German Red Pied","Gir","Glan cattle","Gloucester","Gobra","Greek Shorthorn","Greek Steppe","Greyman cattle","Gudali","Guernsey cattle","Guzer\xE1","Hallikar4","Hanwoo","Hariana cattle","Hart\xF3n del Valle","Harzer Rotvieh","Hays Converter","Heck cattle","Hedit","Hereford","Herens","Highland cattle","Hinterwald","Holando-Argentino","Holstein Friesian cattle","Horro","Hungarian Grey","Hu\xE1ng Cattle","Hybridmaster","Iberian cattle","Icelandic","Iedit","Illawarra cattle","Improved Red and White","Indo-Brazilian","Irish Moiled","Israeli Holstein","Israeli Red","Istoben cattle","Istrian cattle","Jamaica Black","Jamaica Hope","Jamaica Red","Japanese Brown","Jarmelista","Javari cattle","Jedit","Jersey cattle","Jutland cattle","Kabin Buri cattle","Kalmyk cattle","Kamphaeng Saen cattle","Kangayam","Kankrej","Karan Swiss","Kasaragod Dwarf cattle","Kathiawadi","Kazakh Whiteheaded","Kedit","Kenana cattle","Kenkatha cattle","Kerry cattle","Kherigarh","Khillari cattle","Kholomogory","Korat Wagyu","Kostroma cattle","Krishna Valley cattle","Kurgan cattle","Kuri","La Reina cattle","Lakenvelder cattle","Lampurger","Latvian Blue","Latvian Brown","Latvian Danish Red","Lebedyn","Ledit","Levantina","Limia cattle","Limousin","Limpurger","Lincoln Red","Lineback","Lithuanian Black-and-White","Lithuanian Light Grey","Lithuanian Red","Lithuanian White-Backed","Lohani cattle","Lourdais","Lucerna cattle","Luing","Madagascar Zebu","Madura","Maine-Anjou","Malnad Gidda","Malvi","Mandalong Special","Mantequera Leonesa","Maramure\u015F Brown","Marchigiana","Maremmana","Marinhoa","Maronesa","Masai","Mashona","Medit","Menorquina","Mertolenga","Meuse-Rhine-Issel","Mewati","Milking Shorthorn","Minhota","Mirandesa","Mirkadim","Moc\u0103ni\u0163\u0103","Mollie","Monchina","Mongolian","Montb\xE9liarde","Morucha","Murboden","Murnau-Werdenfels","Murray Grey","Muturu","N'Dama","Nagori","Nedit","Negra Andaluza","Nelore","Nguni","Nimari","Normande","North Bengal Grey","Northern Finncattle","Northern Shorthorn","Norwegian Red","Oedit]","Ongole","Original Simmental","Pajuna","Palmera","Pantaneiro","Parda Alpina","Parthenaise","Pasiega","Pedit","Pembroke","Philippine Native","Pie Rouge des Plaines","Piedmontese cattle","Pineywoods","Pinzgauer","Pirenaica","Podolac","Podolica","Polish Black-and-White","Polish Red","Poll Shorthorn","Polled Hereford","Polled Shorthorn","Ponwar","Preta","Pulikulam","Punganur","Pustertaler Sprinzen","Qedit","Qinchaun","Queensland Miniature Boran","RX3","Ramo Grande","Randall","Raramuri Criollo","Rathi","Raya","Red Angus","Red Brangus","Red Chittagong","Red Fulani","Red Gorbatov","Red Holstein","Red Kandhari","Red Mingrelian","Red Poll","Red Polled \xD8stland","Red Sindhi","Redit","Retinta","Riggit Galloway","Ringam\xE5la","Rohjan","Romagnola","Romanian B\u0103l\u0163ata","Romanian Steppe Gray","Romosinuano","Russian Black Pied","R\xE4tisches Grauvieh","Sahiwal","Salers","Salorn","Sanga","Sanhe","Santa Cruz","Santa Gertrudis","Sayaguesa","Schwyz","Sedit","Selembu","Senepol","Serbian Pied","Serbian Steppe","Sheko","Shetland","Shorthorn","Siboney de Cuba","Simbrah","Simford","Simmental","Siri","South Devon","Spanish Fighting Bull","Speckle Park","Square Meater","Sussex","Swedish Friesian","Swedish Polled","Swedish Red Pied","Swedish Red Polled","Swedish Red-and-White","Tabapu\xE3","Tarentaise","Tasmanian Grey","Tauros","Tedit","Telemark","Texas Longhorn","Texon","Thai Black","Thai Fighting Bull","Thai Friesian","Thai Milking Zebu","Tharparkar","Tswana","Tudanca","Tuli","Tulim","Turkish Grey Steppe","Tux-Zillertal","Tyrol Grey","Uedit","Ukrainian Grey","Umblachery","Valdostana Castana","Valdostana Pezzata Nera","Valdostana Pezzata Rossa","Vaynol","Vechur8","Vedit","Vestland Fjord","Vestland Red Polled","Vianesa","Volinian Beef","Vorderwald","Vosgienne","V\xE4neko","Waguli","Wagyu","Wangus","Wedit","Welsh Black","Western Finncattle","White C\xE1ceres","White Fulani","White Lamphun","White Park","Whitebred Shorthorn","Xedit","Xingjiang Brown","Yakutian","Yanbian","Yanhuang","Yedit","Yurino","Zebu","Zedit","\xC9vol\xE8ne cattle","\u017Bubro\u0144"];var d=["African Slender-snouted Crocodile","Alligator mississippiensis","American Crocodile","Australian Freshwater Crocodile","Black Caiman","Broad-snouted Caiman","Chinese Alligator","Cuban Crocodile","Cuvier\u2019s Dwarf Caiman","Dwarf Crocodile","Gharial","Morelet\u2019s Crocodile","Mugger Crocodile","New Guinea Freshwater Crocodile","Nile Crocodile","Orinoco Crocodile","Philippine Crocodile","Saltwater Crocodile","Schneider\u2019s Smooth-fronted Caiman","Siamese Crocodile","Spectacled Caiman","Tomistoma","West African Crocodile","Yacare Caiman"];var u$1=["Affenpinscher","Afghan Hound","Aidi","Airedale Terrier","Akbash","Akita","Alano Espa\xF1ol","Alapaha Blue Blood Bulldog","Alaskan Husky","Alaskan Klee Kai","Alaskan Malamute","Alopekis","Alpine Dachsbracke","American Bulldog","American Bully","American Cocker Spaniel","American English Coonhound","American Foxhound","American Hairless Terrier","American Pit Bull Terrier","American Staffordshire Terrier","American Water Spaniel","Andalusian Hound","Anglo-Fran\xE7ais de Petite V\xE9nerie","Appenzeller Sennenhund","Ariegeois","Armant","Armenian Gampr dog","Artois Hound","Australian Cattle Dog","Australian Kelpie","Australian Shepherd","Australian Stumpy Tail Cattle Dog","Australian Terrier","Austrian Black and Tan Hound","Austrian Pinscher","Azawakh","Bakharwal dog","Banjara Hound","Barbado da Terceira","Barbet","Basenji","Basque Shepherd Dog","Basset Art\xE9sien Normand","Basset Bleu de Gascogne","Basset Fauve de Bretagne","Basset Hound","Bavarian Mountain Hound","Beagle","Beagle-Harrier","Bearded Collie","Beauceron","Bedlington Terrier","Belgian Shepherd","Bergamasco Shepherd","Berger Picard","Bernese Mountain Dog","Bhotia","Bichon Fris\xE9","Billy","Black Mouth Cur","Black Norwegian Elkhound","Black Russian Terrier","Black and Tan Coonhound","Bloodhound","Blue Lacy","Blue Picardy Spaniel","Bluetick Coonhound","Boerboel","Bohemian Shepherd","Bolognese","Border Collie","Border Terrier","Borzoi","Bosnian Coarse-haired Hound","Boston Terrier","Bouvier des Ardennes","Bouvier des Flandres","Boxer","Boykin Spaniel","Bracco Italiano","Braque Francais","Braque Saint-Germain","Braque d'Auvergne","Braque de l'Ari\xE8ge","Braque du Bourbonnais","Briard","Briquet Griffon Vend\xE9en","Brittany","Broholmer","Bruno Jura Hound","Brussels Griffon","Bucovina Shepherd Dog","Bull Arab","Bull Terrier","Bulldog","Bullmastiff","Bully Kutta","Burgos Pointer","Cairn Terrier","Campeiro Bulldog","Can de Chira","Canaan Dog","Canadian Eskimo Dog","Cane Corso","Cane Paratore","Cane di Oropa","Cantabrian Water Dog","Cardigan Welsh Corgi","Carea Castellano Manchego","Carolina Dog","Carpathian Shepherd Dog","Catahoula Leopard Dog","Catalan Sheepdog","Caucasian Shepherd Dog","Cavalier King Charles Spaniel","Central Asian Shepherd Dog","Cesky Fousek","Cesky Terrier","Chesapeake Bay Retriever","Chien Fran\xE7ais Blanc et Noir","Chien Fran\xE7ais Blanc et Orange","Chien Fran\xE7ais Tricolore","Chihuahua","Chilean Terrier","Chinese Chongqing Dog","Chinese Crested Dog","Chinook","Chippiparai","Chongqing dog","Chortai","Chow Chow","Cimarr\xF3n Uruguayo","Cirneco dell'Etna","Clumber Spaniel","Colombian fino hound","Coton de Tulear","Cretan Hound","Croatian Sheepdog","Curly-Coated Retriever","Cursinu","Czechoslovakian Wolfdog","C\xE3o Fila de S\xE3o Miguel","C\xE3o da Serra de Aires","C\xE3o de Castro Laboreiro","C\xE3o de Gado Transmontano","Dachshund","Dalmatian","Dandie Dinmont Terrier","Danish-Swedish Farmdog","Denmark Feist","Dingo","Doberman Pinscher","Dogo Argentino","Dogo Guatemalteco","Dogo Sardesco","Dogue Brasileiro","Dogue de Bordeaux","Drentse Patrijshond","Drever","Dunker","Dutch Shepherd","Dutch Smoushond","East European Shepherd","East Siberian Laika","English Cocker Spaniel","English Foxhound","English Mastiff","English Setter","English Shepherd","English Springer Spaniel","English Toy Terrier","Entlebucher Mountain Dog","Estonian Hound","Estrela Mountain Dog","Eurasier","Field Spaniel","Fila Brasileiro","Finnish Hound","Finnish Lapphund","Finnish Spitz","Flat-Coated Retriever","French Bulldog","French Spaniel","Galgo Espa\xF1ol","Galician Shepherd Dog","Garafian Shepherd","Gascon Saintongeois","Georgian Shepherd","German Hound","German Longhaired Pointer","German Pinscher","German Roughhaired Pointer","German Shepherd Dog","German Shorthaired Pointer","German Spaniel","German Spitz","German Wirehaired Pointer","Giant Schnauzer","Glen of Imaal Terrier","Golden Retriever","Gordon Setter","Go\u0144czy Polski","Grand Anglo-Fran\xE7ais Blanc et Noir","Grand Anglo-Fran\xE7ais Blanc et Orange","Grand Anglo-Fran\xE7ais Tricolore","Grand Basset Griffon Vend\xE9en","Grand Bleu de Gascogne","Grand Griffon Vend\xE9en","Great Dane","Greater Swiss Mountain Dog","Greek Harehound","Greek Shepherd","Greenland Dog","Greyhound","Griffon Bleu de Gascogne","Griffon Fauve de Bretagne","Griffon Nivernais","Gull Dong","Gull Terrier","Hamiltonst\xF6vare","Hanover Hound","Harrier","Havanese","Hierran Wolfdog","Hokkaido","Hovawart","Huntaway","Hygen Hound","H\xE4llefors Elkhound","Ibizan Hound","Icelandic Sheepdog","Indian Spitz","Indian pariah dog","Irish Red and White Setter","Irish Setter","Irish Terrier","Irish Water Spaniel","Irish Wolfhound","Istrian Coarse-haired Hound","Istrian Shorthaired Hound","Italian Greyhound","Jack Russell Terrier","Jagdterrier","Japanese Chin","Japanese Spitz","Japanese Terrier","Jindo","Jonangi","Kai Ken","Kaikadi","Kangal Shepherd Dog","Kanni","Karakachan dog","Karelian Bear Dog","Kars","Karst Shepherd","Keeshond","Kerry Beagle","Kerry Blue Terrier","King Charles Spaniel","King Shepherd","Kintamani","Kishu","Kokoni","Kombai","Komondor","Kooikerhondje","Koolie","Koyun dog","Kromfohrl\xE4nder","Kuchi","Kuvasz","Labrador Retriever","Lagotto Romagnolo","Lakeland Terrier","Lancashire Heeler","Landseer","Lapponian Herder","Large M\xFCnsterl\xE4nder","Leonberger","Levriero Sardo","Lhasa Apso","Lithuanian Hound","Lupo Italiano","L\xF6wchen","Mackenzie River Husky","Magyar ag\xE1r","Mahratta Greyhound","Maltese","Manchester Terrier","Maremmano-Abruzzese Sheepdog","McNab dog","Miniature American Shepherd","Miniature Bull Terrier","Miniature Fox Terrier","Miniature Pinscher","Miniature Schnauzer","Molossus of Epirus","Montenegrin Mountain Hound","Mountain Cur","Mountain Feist","Mucuchies","Mudhol Hound","Mudi","Neapolitan Mastiff","New Guinea Singing Dog","New Zealand Heading Dog","Newfoundland","Norfolk Terrier","Norrbottenspets","Northern Inuit Dog","Norwegian Buhund","Norwegian Elkhound","Norwegian Lundehund","Norwich Terrier","Nova Scotia Duck Tolling Retriever","Old Croatian Sighthound","Old Danish Pointer","Old English Sheepdog","Old English Terrier","Olde English Bulldogge","Otterhound","Pachon Navarro","Paisley Terrier","Pampas Deerhound","Papillon","Parson Russell Terrier","Pastore della Lessinia e del Lagorai","Patagonian Sheepdog","Patterdale Terrier","Pekingese","Pembroke Welsh Corgi","Perro Majorero","Perro de Pastor Mallorquin","Perro de Presa Canario","Perro de Presa Mallorquin","Peruvian Inca Orchid","Petit Basset Griffon Vend\xE9en","Petit Bleu de Gascogne","Phal\xE8ne","Pharaoh Hound","Phu Quoc Ridgeback","Picardy Spaniel","Plott Hound","Plummer Terrier","Podenco Canario","Podenco Valenciano","Pointer","Poitevin","Polish Greyhound","Polish Hound","Polish Lowland Sheepdog","Polish Tatra Sheepdog","Pomeranian","Pont-Audemer Spaniel","Poodle","Porcelaine","Portuguese Podengo","Portuguese Pointer","Portuguese Water Dog","Posavac Hound","Pra\u017Esk\xFD Krysa\u0159\xEDk","Pshdar Dog","Pudelpointer","Pug","Puli","Pumi","Pungsan Dog","Pyrenean Mastiff","Pyrenean Mountain Dog","Pyrenean Sheepdog","Rafeiro do Alentejo","Rajapalayam","Rampur Greyhound","Rat Terrier","Ratonero Bodeguero Andaluz","Ratonero Mallorquin","Ratonero Murciano de Huerta","Ratonero Valenciano","Redbone Coonhound","Rhodesian Ridgeback","Romanian Mioritic Shepherd Dog","Romanian Raven Shepherd Dog","Rottweiler","Rough Collie","Russian Spaniel","Russian Toy","Russo-European Laika","Saarloos Wolfdog","Sabueso Espa\xF1ol","Saint Bernard","Saint Hubert Jura Hound","Saint-Usuge Spaniel","Saluki","Samoyed","Sapsali","Sarabi dog","Sardinian Shepherd Dog","Schapendoes","Schillerst\xF6vare","Schipperke","Schweizer Laufhund","Schweizerischer Niederlaufhund","Scottish Deerhound","Scottish Terrier","Sealyham Terrier","Segugio Italiano","Segugio Maremmano","Segugio dell'Appennino","Seppala Siberian Sleddog","Serbian Hound","Serbian Tricolour Hound","Serrano Bulldog","Shar Pei","Shetland Sheepdog","Shiba Inu","Shih Tzu","Shikoku","Shiloh Shepherd","Siberian Husky","Silken Windhound","Silky Terrier","Sinhala Hound","Skye Terrier","Sloughi","Slovakian Wirehaired Pointer","Slovensk\xFD Cuvac","Slovensk\xFD Kopov","Smalandst\xF6vare","Small Greek domestic dog","Small M\xFCnsterl\xE4nder","Smooth Collie","Smooth Fox Terrier","Soft-Coated Wheaten Terrier","South Russian Ovcharka","Spanish Mastiff","Spanish Water Dog","Spinone Italiano","Sporting Lucas Terrier","Stabyhoun","Staffordshire Bull Terrier","Standard Schnauzer","Stephens Stock","Styrian Coarse-haired Hound","Sussex Spaniel","Swedish Elkhound","Swedish Lapphund","Swedish Vallhund","Swedish White Elkhound","Taigan","Taiwan Dog","Tamaskan Dog","Teddy Roosevelt Terrier","Telomian","Tenterfield Terrier","Terrier Brasileiro","Thai Bangkaew Dog","Thai Ridgeback","Tibetan Mastiff","Tibetan Spaniel","Tibetan Terrier","Tornjak","Tosa","Toy Fox Terrier","Toy Manchester Terrier","Transylvanian Hound","Treeing Cur","Treeing Feist","Treeing Tennessee Brindle","Treeing Walker Coonhound","Trigg Hound","Tyrolean Hound","Vikhan","Villano de Las Encartaciones","Villanuco de Las Encartaciones","Vizsla","Volpino Italiano","Weimaraner","Welsh Sheepdog","Welsh Springer Spaniel","Welsh Terrier","West Highland White Terrier","West Siberian Laika","Westphalian Dachsbracke","Wetterhoun","Whippet","White Shepherd","White Swiss Shepherd Dog","Wire Fox Terrier","Wirehaired Pointing Griffon","Wirehaired Vizsla","Xiasi Dog","Xoloitzcuintli","Yakutian Laika","Yorkshire Terrier","\u0160arplaninac"];var c=["Alaska pollock","Albacore","Amur catfish","Araucanian herring","Argentine hake","Asari","Asian swamp eel","Atlantic cod","Atlantic herring","Atlantic horse mackerel","Atlantic mackerel","Atlantic menhaden","Atlantic salmon","Bigeye scad","Bigeye tuna","Bighead carp","Black carp","Blood cockle","Blue swimming crab","Blue whiting","Bombay-duck","Bonga shad","California pilchard","Cape horse mackerel","Capelin","Catla","Channel catfish","Chilean jack mackerel","Chinese perch","Chinese softshell turtle","Chub mackerel","Chum salmon","Common carp","Crucian carp","Daggertooth pike conger","European anchovy","European pilchard","European sprat","Filipino Venus","Gazami crab","Goldstripe sardinella","Grass carp","Gulf menhaden","Haddock","Hilsa shad","Indian mackerel","Indian oil sardine","Iridescent shark","Japanese anchovy","Japanese cockle","Japanese common catfish","Japanese flying squid","Japanese jack mackerel","Japanese littleneck","Japanese pilchard","Jumbo flying squid","Kawakawa","Korean bullhead","Largehead hairtail","Longtail tuna","Madeiran sardinella","Mandarin fish","Milkfish","Mrigal carp","Narrow-barred Spanish mackerel","Nile perch","Nile tilapia","North Pacific hake","Northern snakehead","Pacific anchoveta","Pacific cod","Pacific herring","Pacific sand lance","Pacific sandlance","Pacific saury","Pacific thread herring","Peruvian anchoveta","Pink salmon","Pollock","Pond loach","Rainbow trout","Rohu","Round sardinella","Short mackerel","Silver carp","Silver cyprinid","Skipjack tuna","Southern African anchovy","Southern rough shrimp","Whiteleg shrimp","Wuchang bream","Yellow croaker","Yellowfin tuna","Yellowhead catfish","Yellowstripe scad"];var m=["Abaco Barb","Abtenauer","Abyssinian","Aegidienberger","Akhal-Teke","Albanian Horse","Altai Horse","Alt\xE8r Real","American Albino","American Cream Draft","American Indian Horse","American Paint Horse","American Quarter Horse","American Saddlebred","American Warmblood","Andalusian Horse","Andravida Horse","Anglo-Arabian","Anglo-Arabo-Sardo","Anglo-Kabarda","Appaloosa","AraAppaloosa","Arabian Horse","Ardennes Horse","Arenberg-Nordkirchen","Argentine Criollo","Asian wild Horse","Assateague Horse","Asturc\xF3n","Augeron","Australian Brumby","Australian Draught Horse","Australian Stock Horse","Austrian Warmblood","Auvergne Horse","Auxois","Azerbaijan Horse","Azteca Horse","Baise Horse","Bale","Balearic Horse","Balikun Horse","Baluchi Horse","Banker Horse","Barb Horse","Bardigiano","Bashkir Curly","Basque Mountain Horse","Bavarian Warmblood","Belgian Half-blood","Belgian Horse","Belgian Warmblood ","Bhutia Horse","Black Forest Horse","Blazer Horse","Boerperd","Borana","Boulonnais Horse","Brabant","Brandenburger","Brazilian Sport Horse","Breton Horse","Brumby","Budyonny Horse","Burguete Horse","Burmese Horse","Byelorussian Harness Horse","Calabrese Horse","Camargue Horse","Camarillo White Horse","Campeiro","Campolina","Canadian Horse","Canadian Pacer","Carolina Marsh Tacky","Carthusian Horse","Caspian Horse","Castilian Horse","Castillonnais","Catria Horse","Cavallo Romano della Maremma Laziale","Cerbat Mustang","Chickasaw Horse","Chilean Corralero","Choctaw Horse","Cleveland Bay","Clydesdale Horse","Cob","Coldblood Trotter","Colonial Spanish Horse","Colorado Ranger","Comtois Horse","Corsican Horse","Costa Rican Saddle Horse","Cretan Horse","Criollo Horse","Croatian Coldblood","Cuban Criollo","Cumberland Island Horse","Curly Horse","Czech Warmblood","Daliboz","Danish Warmblood","Danube Delta Horse","Dole Gudbrandsdal","Don","Dongola Horse","Draft Trotter","Dutch Harness Horse","Dutch Heavy Draft","Dutch Warmblood","Dzungarian Horse","East Bulgarian","East Friesian Horse","Estonian Draft","Estonian Horse","Falabella","Faroese","Finnhorse","Fjord Horse","Fleuve","Florida Cracker Horse","Foutank\xE9","Frederiksborg Horse","Freiberger","French Trotter","Friesian Cross","Friesian Horse","Friesian Sporthorse","Furioso-North Star","Galice\xF1o","Galician Pony","Gelderland Horse","Georgian Grande Horse","German Warmblood","Giara Horse","Gidran","Groningen Horse","Gypsy Horse","Hackney Horse","Haflinger","Hanoverian Horse","Heck Horse","Heihe Horse","Henson Horse","Hequ Horse","Hirzai","Hispano-Bret\xF3n","Holsteiner Horse","Horro","Hungarian Warmblood","Icelandic Horse","Iomud","Irish Draught","Irish Sport Horse sometimes called Irish Hunter","Italian Heavy Draft","Italian Trotter","Jaca Navarra","Jeju Horse","Jutland Horse","Kabarda Horse","Kafa","Kaimanawa Horses","Kalmyk Horse","Karabair","Karabakh Horse","Karachai Horse","Karossier","Kathiawari","Kazakh Horse","Kentucky Mountain Saddle Horse","Kiger Mustang","Kinsky Horse","Kisber Felver","Kiso Horse","Kladruber","Knabstrupper","Konik","Kundudo","Kustanair","Kyrgyz Horse","Latvian Horse","Lipizzan","Lithuanian Heavy Draught","Lokai","Losino Horse","Lusitano","Lyngshest","M'Bayar","M'Par","Mallorqu\xEDn","Malopolski","Mangalarga","Mangalarga Marchador","Maremmano","Marisme\xF1o Horse","Marsh Tacky","Marwari Horse","Mecklenburger","Menorqu\xEDn","Messara Horse","Metis Trotter","Mez\u0151hegyesi Sport Horse","Me\u0111imurje Horse","Miniature Horse","Misaki Horse","Missouri Fox Trotter","Monchina","Mongolian Horse","Mongolian Wild Horse","Monterufolino","Morab","Morgan Horse","Mountain Pleasure Horse","Moyle Horse","Murakoz Horse","Murgese","Mustang Horse","M\xE9rens Horse","Namib Desert Horse","Nangchen Horse","National Show Horse","Nez Perce Horse","Nivernais Horse","Nokota Horse","Noma","Nonius Horse","Nooitgedachter","Nordlandshest","Noriker Horse","Norman Cob","North American Single-Footer Horse","North Swedish Horse","Norwegian Coldblood Trotter","Norwegian Fjord","Novokirghiz","Oberlander Horse","Ogaden","Oldenburg Horse","Orlov trotter","Ostfriesen","Paint","Pampa Horse","Paso Fino","Pentro Horse","Percheron","Persano Horse","Peruvian Paso","Pintabian","Pleven Horse","Poitevin Horse","Posavac Horse","Pottok","Pryor Mountain Mustang","Przewalski's Horse","Pura Raza Espa\xF1ola","Purosangue Orientale","Qatgani","Quarab","Quarter Horse","Racking Horse","Retuerta Horse","Rhenish German Coldblood","Rhinelander Horse","Riwoche Horse","Rocky Mountain Horse","Romanian Sporthorse","Rottaler","Russian Don","Russian Heavy Draft","Russian Trotter","Saddlebred","Salerno Horse","Samolaco Horse","San Fratello Horse","Sarcidano Horse","Sardinian Anglo-Arab","Schleswig Coldblood","Schwarzw\xE4lder Kaltblut","Selale","Sella Italiano","Selle Fran\xE7ais","Shagya Arabian","Shan Horse","Shire Horse","Siciliano Indigeno","Silesian Horse","Sokolsky Horse","Sorraia","South German Coldblood","Soviet Heavy Draft","Spanish Anglo-Arab","Spanish Barb","Spanish Jennet Horse","Spanish Mustang","Spanish Tarpan","Spanish-Norman Horse","Spiti Horse","Spotted Saddle Horse","Standardbred Horse","Suffolk Punch","Swedish Ardennes","Swedish Warmblood","Swedish coldblood trotter","Swiss Warmblood","Taish\u016B Horse","Takhi","Tawleed","Tchernomor","Tennessee Walking Horse","Tersk Horse","Thoroughbred","Tiger Horse","Tinker Horse","Tolfetano","Tori Horse","Trait Du Nord","Trakehner","Tsushima","Tuigpaard","Ukrainian Riding Horse","Unmol Horse","Uzunyayla","Ventasso Horse","Virginia Highlander","Vlaamperd","Vladimir Heavy Draft","Vyatka","Waler","Waler Horse","Walkaloosa","Warlander","Warmblood","Welsh Cob","Westphalian Horse","Wielkopolski","W\xFCrttemberger","Xilingol Horse","Yakutian Horse","Yili Horse","Yonaguni Horse","Zaniskari","Zhemaichu","Zweibr\xFCcker","\u017Demaitukas"];var h=["Acacia-ants","Acorn-plum gall","Aerial yellowjacket","Africanized honey bee","Allegheny mound ant","Almond stone wasp","Ant","Arboreal ant","Argentine ant","Asian paper wasp","Baldfaced hornet","Bee","Bigheaded ant","Black and yellow mud dauber","Black carpenter ant","Black imported fire ant","Blue horntail woodwasp","Blue orchard bee","Braconid wasp","Bumble bee","Carpenter ant","Carpenter wasp","Chalcid wasp","Cicada killer","Citrus blackfly parasitoid","Common paper wasp","Crazy ant","Cuckoo wasp","Cynipid gall wasp","Eastern Carpenter bee","Eastern yellowjacket","Elm sawfly","Encyrtid wasp","Erythrina gall wasp","Eulophid wasp","European hornet","European imported fire ant","False honey ant","Fire ant","Forest bachac","Forest yellowjacket","German yellowjacket","Ghost ant","Giant ichneumon wasp","Giant resin bee","Giant wood wasp","Golden northern bumble bee","Golden paper wasp","Gouty oak gall","Grass Carrying Wasp","Great black wasp","Great golden digger wasp","Hackberry nipple gall parasitoid","Honey bee","Horned oak gall","Horse guard wasp","Hunting wasp","Ichneumonid wasp","Keyhole wasp","Knopper gall","Large garden bumble bee","Large oak-apple gall","Leafcutting bee","Little fire ant","Little yellow ant","Long-horned bees","Long-legged ant","Macao paper wasp","Mallow bee","Marble gall","Mossyrose gall wasp","Mud-daubers","Multiflora rose seed chalcid","Oak apple gall wasp","Oak rough bulletgall wasp","Oak saucer gall","Oak shoot sawfly","Odorous house ant","Orange-tailed bumble bee","Orangetailed potter wasp","Oriental chestnut gall wasp","Paper wasp","Pavement ant","Pigeon tremex","Pip gall wasp","Prairie yellowjacket","Pteromalid wasp","Pyramid ant","Raspberry Horntail","Red ant","Red carpenter ant","Red harvester ant","Red imported fire ant","Red wasp","Red wood ant","Red-tailed wasp","Reddish carpenter ant","Rough harvester ant","Sawfly parasitic wasp","Scale parasitoid","Silky ant","Sirex woodwasp","Siricid woodwasp","Smaller yellow ant","Southeastern blueberry bee","Southern fire ant","Southern yellowjacket","Sphecid wasp","Stony gall","Sweat bee","Texas leafcutting ant","Tiphiid wasp","Torymid wasp","Tramp ant","Valentine ant","Velvet ant","Vespid wasp","Weevil parasitoid","Western harvester ant","Western paper wasp","Western thatching ant","Western yellowjacket","White-horned horntail","Willow shoot sawfly","Woodwasp","Wool sower gall maker","Yellow Crazy Ant","Yellow and black potter wasp","Yellow-horned horntail"];var y=["Asiatic Lion","Barbary Lion","Cape lion","Masai Lion","Northeast Congo Lion","Transvaal lion","West African Lion"];var p$1=["Ace","Archie","Bailey","Bandit","Bella","Bentley","Bruno","Buddy","Charlie","Coco","Cookie","Cooper","Daisy","Dixie","Finn","Ginger","Gracie","Gus","Hank","Jack","Jax","Joey","Kobe","Leo","Lola","Louie","Lucy","Maggie","Max","Mia","Milo","Molly","Murphey","Nala","Nova","Ollie","Oreo","Rosie","Scout","Stella","Teddy","Tuffy"];var g=["American","American Chinchilla","American Fuzzy Lop","American Sable","Argente Brun","Belgian Hare","Beveren","Blanc de Hotot","Britannia Petite","Californian","Champagne D\u2019Argent","Checkered Giant","Cinnamon","Cr\xE8me D\u2019Argent","Dutch","Dwarf Hotot","English Angora","English Lop","English Spot","Flemish Giant","Florida White","French Angora","French Lop","Giant Angora","Giant Chinchilla","Harlequin","Havana","Himalayan","Holland Lop","Jersey Wooly","Lilac","Lionhead","Mini Lop","Mini Rex","Mini Satin","Netherland Dwarf","New Zealand","Palomino","Polish","Rex","Rhinelander","Satin","Satin Angora","Silver","Silver Fox","Silver Marten","Standard Chinchilla","Tan","Thrianta"];var b=["Abrocoma","Abrocoma schistacea","Aconaemys","Aconaemys porteri","African brush-tailed porcupine","Andean mountain cavy","Argentine tuco-tuco","Ashy chinchilla rat","Asiatic brush-tailed porcupine","Atherurus","Azara's agouti","Azara's tuco-tuco","Bahia porcupine","Bathyergus","Bathyergus janetta","Bathyergus suillus","Bennett's chinchilla rat","Bicolored-spined porcupine","Black agouti","Black dwarf porcupine","Black-rumped agouti","Black-tailed hairy dwarf porcupine","Bolivian chinchilla rat","Bolivian tuco-tuco","Bonetto's tuco-tuco","Brandt's yellow-toothed cavy","Brazilian guinea pig","Brazilian porcupine","Brazilian tuco-tuco","Bridge's degu","Brown hairy dwarf porcupine","Budin's chinchilla rat, A. budini","Cape porcupine","Catamarca tuco-tuco","Cavia","Central American agouti","Chacoan tuco-tuco","Chilean rock rat","Chinchilla","Coendou","Coiban agouti","Colburn's tuco-tuco","Collared tuco-tuco","Common degu","Common yellow-toothed cavy","Conover's tuco-tuco","Coruro","Crested agouti","Crested porcupine","Cryptomys","Cryptomys bocagei","Cryptomys damarensis","Cryptomys foxi","Cryptomys hottentotus","Cryptomys mechowi","Cryptomys ochraceocinereus","Cryptomys zechi","Ctenomys","Cuniculus","Cuscomys","Cuscomys ashanika","Dactylomys","Dactylomys boliviensis","Dactylomys dactylinus","Dactylomys peruanus","Dasyprocta","Domestic guinea pig","Emily's tuco-tuco","Erethizon","Famatina chinchilla rat","Frosted hairy dwarf porcupine","Fukomys","Fukomys amatus","Fukomys anselli","Fukomys bocagei","Fukomys damarensis","Fukomys darlingi","Fukomys foxi","Fukomys ilariae","Fukomys kafuensis","Fukomys mechowii","Fukomys micklemi","Fukomys occlusus","Fukomys ochraceocinereus","Fukomys whytei","Fukomys zechi","Furtive tuco-tuco","Galea","Georychus","Georychus capensis","Golden viscacha-rat","Goya tuco-tuco","Greater guinea pig","Green acouchi","Haig's tuco-tuco","Heliophobius","Heliophobius argenteocinereus","Heterocephalus","Heterocephalus glaber","Highland tuco-tuco","Hystrix","Indian porcupine","Isla Mocha degu","Kalinowski agouti","Kannabateomys","Kannabateomys amblyonyx","Lagidium","Lagostomus","Lewis' tuco-tuco","Long-tailed chinchilla","Long-tailed porcupine","Los Chalchaleros' viscacha-rat","Lowland paca","Magellanic tuco-tuco","Malayan porcupine","Maule tuco-tuco","Mendoza tuco-tuco","Mexican agouti","Mexican hairy dwarf porcupine","Microcavia","Montane guinea pig","Moon-toothed degu","Mottled tuco-tuco","Mountain degu","Mountain paca","Mountain viscacha-rat","Myoprocta","Natterer's tuco-tuco","North American porcupine","Northern viscacha","Octodon","Octodontomys","Octomys","Olallamys","Olallamys albicauda","Olallamys edax","Orinoco agouti","Paraguaian hairy dwarf porcupine","Pearson's tuco-tuco","Peruvian tuco-tuco","Philippine porcupine","Pipanacoctomys","Plains viscacha","Plains viscacha-rat","Porteous' tuco-tuco","Punta de Vacas chinchilla rat","Red acouchi","Red-rumped agouti","Reddish tuco-tuco","Rio Negro tuco-tuco","Robust tuco-tuco","Roosmalen's dwarf porcupine","Rothschild's porcupine","Ruatan Island agouti","Sage's rock rat","Salinoctomys","Salta tuco-tuco","San Luis tuco-tuco","Santa Catarina's guinea pig","Shiny guinea pig","Shipton's mountain cavy","Short-tailed chinchilla","Silky tuco-tuco","Social tuco-tuco","Southern mountain cavy","Southern tuco-tuco","Southern viscacha","Spalacopus","Spix's yellow-toothed cavy","Steinbach's tuco-tuco","Streaked dwarf porcupine","Strong tuco-tuco","Stump-tailed porcupine","Sumatran porcupine","Sunda porcupine","Talas tuco-tuco","Tawny tuco-tuco","Thick-spined porcupine","Tiny tuco-tuco","Trichys","Tucuman tuco-tuco","Tympanoctomys","Uspallata chinchilla rat","White-toothed tuco-tuco","Wolffsohn's viscacha"];var S$1=["Abaco Island boa","Aesculapian snake","African beaked snake","African puff adder","African rock python","African twig snake","African wolf snake","Amazon tree boa","Amazonian palm viper","American Vine Snake","American copperhead","Amethystine python","Anaconda","Andaman cat snake","Andaman cobra","Angolan python","Annulated sea snake","Arabian cobra","Arafura file snake","Arizona black rattlesnake","Arizona coral snake","Aruba rattlesnake","Asian Vine Snake, Whip Snake","Asian cobra","Asian keelback","Asian pipe snake","Asp","Asp viper","Assam keelback","Australian copperhead","Australian scrub python","Baird's rat snake","Baja California lyresnake","Ball Python","Ball python","Bamboo pitviper","Bamboo viper","Banded Flying Snake","Banded cat-eyed snake","Banded krait","Banded pitviper","Banded water cobra","Barbour's pit viper","Barred wolf snake","Beaked sea snake","Beauty rat snake","Beddome's cat snake","Beddome's coral snake","Bimini racer","Bird snake","Bismarck ringed python","Black headed python","Black krait","Black mamba","Black rat snake","Black snake","Black tree cobra","Black-banded trinket snake","Black-headed snake","Black-necked cobra","Black-necked spitting cobra","Black-speckled palm-pitviper","Black-striped keelback","Black-tailed horned pit viper","Blanding's tree snake","Blind snake","Blonde hognose snake","Blood python","Blue krait","Blunt-headed tree snake","Bluntnose viper","Boa","Boa constrictor","Bocourt's water snake","Boelen python","Boiga","Bolivian anaconda","Boomslang","Bornean pitviper","Borneo short-tailed python","Brahminy blind snake","Brazilian coral snake","Brazilian mud Viper","Brazilian smooth snake","Bredl's python","Brongersma's pitviper","Brown snake","Brown spotted pitviper[4]","Brown tree snake","Brown water python","Brown white-lipped python","Buff striped keelback","Bull snake","Burmese keelback","Burmese krait","Burmese python","Burrowing cobra","Burrowing viper","Bush viper","Bushmaster","Buttermilk racer","Calabar python","California kingsnake","Canebrake","Cantil","Cantor's pitviper","Cape cobra","Cape coral snake","Cape gopher snake","Carpet viper","Cascabel","Caspian cobra","Cat snake","Cat-eyed night snake","Cat-eyed snake","Central American lyre snake","Central ranges taipan","Centralian carpet python","Ceylon krait","Chappell Island tiger snake","Checkered garter snake","Checkered keelback","Chicken snake","Chihuahuan ridge-nosed rattlesnake","Children's python","Chinese tree viper","Coachwhip snake","Coastal carpet python","Coastal taipan","Cobra","Collett's snake","Colorado desert sidewinder","Common adder","Common cobra","Common garter snake","Common ground snake","Common keelback","Common lancehead","Common tiger snake","Common worm snake","Congo snake","Congo water cobra","Copperhead","Coral snake","Corn snake","Coronado Island rattlesnake","Cottonmouth","Crossed viper","Crowned snake","Cuban boa","Cuban wood snake","Cyclades blunt-nosed viper","Dauan Island water python","De Schauensee's anaconda","Death Adder","Desert death adder","Desert kingsnake","Desert woma python","Diamond python","Dog-toothed cat snake","Down's tiger snake","Dubois's sea snake","Dumeril's boa","Durango rock rattlesnake","Dusky pigmy rattlesnake","Dusty hognose snake","Dwarf beaked snake","Dwarf boa","Dwarf pipe snake","Dwarf sand adder","Eastern brown snake","Eastern coral snake","Eastern diamondback rattlesnake","Eastern green mamba","Eastern hognose snake","Eastern lyre snake","Eastern mud snake","Eastern racer","Eastern tiger snake","Eastern water cobra","Eastern yellowbelly sad racer","Egg-eater","Egyptian asp","Egyptian cobra","Elegant pitviper","Emerald tree boa","Equatorial spitting cobra","European asp","European smooth snake","Eyelash palm-pitviper","Eyelash pit viper","Eyelash viper","False cobra","False horned viper","False water cobra","Fan-Si-Pan horned pitviper","Fea's viper","Fer-de-lance","Fierce snake","Fifty pacer","Fishing snake","Flat-nosed pitviper","Flinders python","Flying snake","Forest cobra","Forest flame snake","Forsten's cat snake","Fox snake, three species of Pantherophis","Gaboon viper","Garter snake","Giant Malagasy hognose snake","Godman's pit viper","Gold tree cobra","Gold-ringed cat snake","Golden tree snake","Grand Canyon rattlesnake","Grass snake","Gray cat snake","Great Basin rattlesnake","Great Lakes bush viper","Great Plains rat snake","Green anaconda","Green cat-eyed snake","Green mamba","Green palm viper","Green rat snake","Green snake","Green tree pit viper","Green tree python","Grey Lora","Grey-banded kingsnake","Ground snake","Guatemalan palm viper","Guatemalan tree viper","Habu","Habu pit viper","Hagen's pitviper","Hairy bush viper","Halmahera python","Hardwicke's sea snake","Harlequin coral snake","High Woods coral snake","Hill keelback","Himalayan keelback","Hogg Island boa","Hognose snake","Hognosed viper","Honduran palm viper","Hook Nosed Sea Snake","Hopi rattlesnake","Horned adder","Horned desert viper","Horned viper","Horseshoe pitviper","Hundred pacer","Hutton's tree viper","Ikaheka snake","Indian cobra","Indian flying snake","Indian krait","Indian python","Indian tree viper","Indigo snake","Indochinese spitting cobra","Indonesian water python","Inland carpet python","Inland taipan","Jamaican Tree Snake","Jamaican boa","Jan's hognose snake","Japanese forest rat snake","Japanese rat snake","Japanese striped snake","Javan spitting cobra","Jerdon's pitviper","Jumping viper","Jungle carpet python","Kanburian pit viper","Kaulback's lance-headed pitviper","Kayaudi dwarf reticulated python","Kaznakov's viper","Keelback","Kham Plateau pitviper","Khasi Hills keelback","King Island tiger snake","King brown","King cobra","King rat snake","King snake","Krait","Krefft's tiger snake","Lance-headed rattlesnake","Lancehead","Large shield snake","Large-eyed pitviper","Large-scaled tree viper","Leaf viper","Leaf-nosed viper","Lesser black krait","Levant viper","Long-nosed adder","Long-nosed tree snake","Long-nosed viper","Long-nosed whip snake","Long-tailed rattlesnake","Longnosed worm snake","Lora","Lyre snake","Machete savane","Macklot's python","Madagascar ground boa","Madagascar tree boa","Malabar rock pitviper","Malayan krait","Malayan long-glanded coral snake","Malayan pit viper","Malcolm's tree viper","Mamba","Mamushi","Manchurian Black Water Snake","Mandalay cobra","Mandarin rat snake","Mangrove pit viper","Mangrove snake","Mangshan pitviper","Many-banded krait","Many-banded tree snake","Many-horned adder","Many-spotted cat snake","Massasauga rattlesnake","McMahon's viper","Mexican black kingsnake","Mexican green rattlesnake","Mexican hognose snake","Mexican palm-pitviper","Mexican parrot snake","Mexican racer","Mexican vine snake","Mexican west coast rattlesnake","Midget faded rattlesnake","Milk snake","Moccasin snake","Modest keelback","Mojave desert sidewinder","Mojave rattlesnake","Mole viper","Mollucan python","Moluccan flying snake","Montpellier snake","Motuo bamboo pitviper","Mountain adder","Mozambique spitting cobra","Mud adder","Mud snake","Mussurana","Namaqua dwarf adder","Namib dwarf sand adder","Narrowhead Garter Snake","New Guinea carpet python","Nichell snake","Nicobar Island keelback","Nicobar bamboo pitviper","Night snake","Nightingale adder","Nilgiri keelback","Nitsche's bush viper","Nitsche's tree viper","North Philippine cobra","North eastern king snake","Northeastern hill krait","Northern black-tailed rattlesnake","Northern tree snake","Northern water snake","Northern white-lipped python","Northwestern carpet python","Nose-horned viper","Nubian spitting cobra","Oaxacan small-headed rattlesnake","Oenpelli python","Olive python","Olive sea snake","Orange-collared keelback","Ornate flying snake","Palestine viper","Pallas' viper","Palm viper","Papuan python","Paradise flying snake","Parrot snake","Patchnose snake","Paupan taipan","Pelagic sea snake","Peninsula tiger snake","Peringuey's adder","Perrotet's shieldtail snake","Persian rat snake","Philippine cobra","Philippine pitviper","Pine snake","Pipe snake","Pit viper","Pointed-scaled pit viper[5]","Pope's tree viper","Portuguese viper","Prairie kingsnake","Puerto Rican boa","Puff adder","Pygmy python","Python","Queen snake","Racer","Raddysnake","Rainbow boa","Rat snake","Rattler","Rattlesnake","Red blood python","Red diamond rattlesnake","Red spitting cobra","Red-backed rat snake","Red-bellied black snake","Red-headed krait","Red-necked keelback","Red-tailed bamboo pitviper","Red-tailed boa","Red-tailed pipe snake","Reticulated python","Rhinoceros viper","Rhombic night adder","Ribbon snake","Rinkhals","Rinkhals cobra","River jack","Rosy boa","Rough green snake","Rough-scaled bush viper","Rough-scaled python","Rough-scaled tree viper","Royal python","Rubber boa","Rufous beaked snake","Rungwe tree viper","San Francisco garter snake","Sand adder","Sand boa","Savu python","Saw-scaled viper","Scarlet kingsnake","Schlegel's viper","Schultze's pitviper","Sea snake","Sedge viper","Selayer reticulated python","Sharp-nosed viper","Shield-nosed cobra","Shield-tailed snake","Siamese palm viper","Side-striped palm-pitviper","Sidewinder","Sikkim keelback","Sinai desert cobra","Sind krait","Small-eyed snake","Smooth green snake","Smooth snake","Snorkel viper","Snouted cobra","Sonoran sidewinder","South American hognose snake","South eastern corn snake","Southern Indonesian spitting cobra","Southern Pacific rattlesnake","Southern Philippine cobra","Southern black racer","Southern white-lipped python","Southwestern black spitting cobra","Southwestern blackhead snake","Southwestern carpet python","Southwestern speckled rattlesnake","Speckle-bellied keelback","Speckled kingsnake","Spectacled cobra","Spiny bush viper","Spitting cobra","Spotted python","Sri Lankan pit viper","Stejneger's bamboo pitviper","Stiletto snake","Stimson's python","Stoke's sea snake","Storm water cobra","Striped snake","Sumatran short-tailed python","Sumatran tree viper","Sunbeam snake","Taipan","Taiwan cobra","Tan racer","Tancitaran dusky rattlesnake","Tanimbar python","Tasmanian tiger snake","Tawny cat snake","Temple pit viper","Temple viper","Tentacled snake","Texas Coral Snake","Texas blind snake","Texas garter snake","Texas lyre snake","Texas night snake","Thai cobra","Three-lined ground snake","Tibetan bamboo pitviper","Tic polonga","Tiger pit viper","Tiger rattlesnake","Tiger snake","Tigre snake","Timber rattlesnake","Timor python","Titanboa","Tree boa","Tree snake","Tree viper","Trinket snake","Tropical rattlesnake","Twig snake","Twin Headed King Snake","Twin-Barred tree snake","Twin-spotted rat snake","Twin-spotted rattlesnake","Undulated pit viper","Uracoan rattlesnake","Ursini's viper","Urutu","Vine snake","Viper","Viper Adder","Vipera ammodytes","Wagler's pit viper","Wart snake","Water adder","Water moccasin","Water snake","West Indian racer","Western blind snake","Western carpet python","Western coral snake","Western diamondback rattlesnake","Western green mamba","Western ground snake","Western hog-nosed viper","Western mud snake","Western tiger snake","Western woma python","Wetar Island python","Whip snake","White-lipped keelback","White-lipped python","White-lipped tree viper","Wirot's pit viper","Wolf snake","Woma python","Worm snake","Wutu","Wynaad keelback","Yarara","Yellow anaconda","Yellow-banded sea snake","Yellow-bellied sea snake","Yellow-lined palm viper","Yellow-lipped sea snake","Yellow-striped rat snake","Yunnan keelback","Zebra snake","Zebra spitting cobra"];var k=["bat","bear","bee","bird","butterfly","cat","cow","crocodile","deer","dog","dolphin","eagle","elephant","fish","flamingo","fox","frog","gecko","giraffe","gorilla","hamster","hippopotamus","horse","kangaroo","koala","lion","monkey","ostrich","panda","parrot","peacock","penguin","polar bear","rabbit","rhinoceros","sea lion","shark","snake","squirrel","tiger","turtle","whale","wolf","zebra"];var Ua={bear:n,bird:i,cat:t,cetacean:l,cow:s,crocodilia:d,dog:u$1,fish:c,horse:m,insect:h,lion:y,pet_name:p$1,rabbit:g,rodent:b,snake:S$1,type:k},C$1=Ua;var f$1=["{{person.name}}","{{company.name}}"];var v$1=["Redhold","Treeflex","Trippledex","Kanlam","Bigtax","Daltfresh","Toughjoyfax","Mat Lam Tam","Otcom","Tres-Zap","Y-Solowarm","Tresom","Voltsillam","Biodex","Greenlam","Viva","Matsoft","Temp","Zoolab","Subin","Rank","Job","Stringtough","Tin","It","Home Ing","Zamit","Sonsing","Konklab","Alpha","Latlux","Voyatouch","Alphazap","Holdlamis","Zaam-Dox","Sub-Ex","Quo Lux","Bamity","Ventosanzap","Lotstring","Hatity","Tempsoft","Overhold","Fixflex","Konklux","Zontrax","Tampflex","Span","Namfix","Transcof","Stim","Fix San","Sonair","Stronghold","Fintone","Y-find","Opela","Lotlux","Ronstring","Zathin","Duobam","Keylex"];var A=["0.#.#","0.##","#.##","#.#","#.#.#"];var Za={author:f$1,name:v$1,version:A},B$1=Za;var T=["A.A. Milne","Agatha Christie","Alan Moore and Dave Gibbons","Albert Camus","Aldous Huxley","Alexander Pope","Alexandre Dumas","Alice Walker","Andrew Lang","Anne Frank","Anthony Burgess","Anthony Trollope","Antoine de Saint-Exup\xE9ry","Anton Chekhov","Anton Pavlovich Chekhov","Arthur Conan Doyle","Arthur Schopenhauer","Aylmer Maude","Ayn Rand","Beatrix Potter","Benjamin Disraeli","Benjamin Jowett","Bernard Shaw","Bertrand Russell","Bhagavanlal Indrajit","Boris Pasternak","Bram Stoker","Brian Evenson","C.E. Brock","C.S. Lewis","Carson McCallers","Charles Dickens","Charles E. Derbyshire","Charlotte Bront\xEB","Charlotte Perkins Gilman","Chinua Achebe","Clifford R. Adams","Constance Garnett","Cormac McCarthy","D.H. Lawrence","Dan Brown","Daniel Defoe","Dante Alighieri","Dashiell Hammett","David Widger","David Wyllie","Dean Koontz","Don DeLillo","E.M. Forster","Edgar Allan Poe","Edgar Rice Burroughs","Elizabeth Cleghorn Gaskell","Elizabeth Von Arnim","Emily Bront\xEB","Erich Remarque","Ernest Hemingway","Evelyn Waugh","F. Scott Fitzgerald","Ford Madox Ford","Frances Hodgson Burnett","Frank Herbert","Frank T. Merrill","Franz Kafka","Friedrich Wilhelm Nietzsche","Fyodor Dostoyevsky","G.K. Chesterton","Gabriel Garcia Marquez","Geoffrey Chaucer","George Eliot","George Grossmith","George Orwell","George R. R. Martin","George Saunders","Grady Ward","Graham Greene","Gustave Dor\xE9","Gustave Flaubert","Guy de Maupassant","G\xFCnter Grass","H.G. Wells","H.P. Lovecraft","Harper Lee","Harriet Beecher Stowe","Haruki Murakami","Henrik Ibsen","Henry David Thoreau","Henry Fielding","Henry James","Henry Miller","Henry Morley","Herman Melville","Hermann Broch","Homer","Honor\xE9 de Balzac","Ian McEwan","Isabel Florence Hapgood","Italo Calvino","J.D. Salinger","J.K. Rowling","J.M. Barrie","J.R.R. Tolkien","Jack Kerouac","Jack London","Jacob Grimm","Jacqueline Crooks","James Baldwin","James Dickey","James Ellroy","James Joyce","James Patterson","Jane Austen","Johann Wolfgang von Goethe","John Bunyan","John Camden Hotten","John Dos Passos","John Green","John Grisham","John Kennedy Toole","John Milton","John Ormsby","John Steinbeck","John Updike","Jonathan Franzen","Jonathan Swift","Joseph Conrad","Joseph Heller","Jos\xE9 Rizal","Judy Blume","Jules Verne","Junot Diaz","Karl Marx","Kazuo Ishiguro","Ken Follett","Ken Kesey","Kenneth Grahame","Khaled Hosseini","Kingsley Amis","Kurt Vonnegut","L. Frank Baum","L.M. Montgomery","Laurence Sterne","Leo Tolstoy","Lewis Carroll","Louisa May Alcott","Louise Maude","Malcolm Lowry","Marcel Proust","Margaret Atwood","Margaret Mitchell","Marilynne Robinson","Mark Twain","Martin Amis","Mary Shelley","Michael Chabon","Miguel de Cervantes","Mikhail Bulgakov","Muriel Spark","Nancy Mitford","Nathanael West","Nathaniel Hawthorne","Neil Gaiman","Niccolo Machiavelli","Norman Mailer","Oscar Levy","Oscar Wilde","P.G. Wodehouse","Paulo Coelho","Peter Carey","Philip Pullman","Philip Roth","Plato","R.L. Stine","Rachel Kushner","Ralph Ellison","Ray Bradbury","Raymond Chandler","Richard Wagner","Richard Wright","Richard Yates","Roald Dahl","Robert Graves","Robert Louis Stevenson","Robert Penn Warren","Rudyard Kipling","Salman Rushdie","Samuel Beckett","Samuel Butler","Samuel Richardson","Saul Bellow","Shivaram Parashuram Bhide","Sir Arthur Conan Doyle","Sir Richard Francis Burton","Stendhal","Stephen Hawking","Stephen King","Sun Tzu","Suzanne Collins","T. Smollett","T.S. Eliot","Theodore Alois Buckley","Theodore Dreiser","Thomas Hardy","Thomas Love Peacock","Thomas Mann","Toni Morrison","Truman Capote","V.S. Naipaul","Vance Packard","Vatsyayana","Victor Hugo","Virgil","Virginia Woolf","Vladimir Nabokov","Voltaire","W.G. Sebald","W.K. Marriott","Walker Percy","Walt Whitman","Walter Scott","Wilhelm Grimm","Wilkie Collins","William Faulkner","William Gibson","William Golding","William Makepeace Thackeray","William Shakespeare","Zadie Smith"];var M=["Audiobook","Ebook","Hardcover","Paperback"];var w$1=["Adventure","Biography","Business","Children's Literature","Classic","Comedy","Comic","Detective","Drama","Fantasy","Graphic Novel","Historical Fiction","Horror","Memoir","Mystery","Mythology","Philosophy","Poetry","Psychology","Religion","Romance","Science Fiction","Thriller","Western","Young Adult"];var L$1=["Academic Press","Ace Books","Addison-Wesley","Adis International","Airiti Press","Allen Ltd","Andrews McMeel Publishing","Anova Books","Anvil Press Poetry","Applewood Books","Apress","Athabasca University Press","Atheneum Books","Atheneum Publishers","Atlantic Books","Atlas Press","BBC Books","Ballantine Books","Banner of Truth Trust","Bantam Books","Bantam Spectra","Barrie & Jenkins","Basic Books","Belknap Press","Bella Books","Bellevue Literary Press","Berg Publishers","Berkley Books","Bison Books","Black Dog Publishing","Black Library","Black Sparrow Books","Blackie and Son Limited","Blackstaff Press","Blackwell Publishing","Bloodaxe Books","Bloomsbury Publishing Plc","Blue Ribbon Books","Book League of America","Book Works","Booktrope","Borgo Press","Bowes & Bowes","Boydell & Brewer","Breslov Research Institute","Brill","Brimstone Press","Broadview Press","Burns & Oates","Butterworth-Heinemann","Caister Academic Press","Cambridge University Press","Candlewick Press","Canongate Books","Carcanet Press","Carlton Books","Carlton Publishing Group","Carnegie Mellon University Press","Casemate Publishers","Cengage Learning","Central European University Press","Chambers Harrap","Charles Scribner's Sons","Chatto and Windus","Chick Publications","Chronicle Books","Churchill Livingstone","Cisco Press","City Lights Publishers","Cloverdale Corporation","D. Appleton & Company","D. Reidel","DAW Books","Da Capo Press","Daedalus Publishing","Dalkey Archive Press","Darakwon Press","David & Charles","Dedalus Books","Del Rey Books","E. P. Dutton","ECW Press","Earthscan","Edupedia Publications","Eel Pie Publishing","Eerdmans Publishing","Ellora's Cave","Elsevier","Emerald Group Publishing","Etruscan Press","FabJob","Faber and Faber","Fairview Press","Farrar, Straus & Giroux","Fearless Books","Felony & Mayhem Press","Firebrand Books","Flame Tree Publishing","Focal Press","G-Unit Books","G. P. Putnam's Sons","Gaspereau Press","Gay Men's Press","Gefen Publishing House","George H. Doran Company","George Newnes","George Routledge & Sons","Godwit Press","Golden Cockerel Press","HMSO","Hachette Book Group USA","Hackett Publishing Company","Hamish Hamilton","Happy House","Harcourt Assessment","Harcourt Trade Publishers","Harlequin Enterprises Ltd","Harper & Brothers","Harper & Row","HarperCollins","HarperPrism","HarperTrophy","Harry N. Abrams, Inc.","Harvard University Press","Harvest House","Harvill Press at Random House","Hawthorne Books","Hay House","Haynes Manuals","Heyday Books","Hodder & Stoughton","Hodder Headline","Hogarth Press","Holland Park Press","Holt McDougal","Horizon Scientific Press","Ian Allan Publishing","Ignatius Press","Imperial War Museum","Indiana University Press","J. M. Dent","Jaico Publishing House","Jarrolds Publishing","John Blake Publishing","Karadi Tales","Kensington Books","Kessinger Publishing","Kodansha","Kogan Page","Koren Publishers Jerusalem","Ladybird Books","Leaf Books","Leafwood Publishers","Left Book Club","Legend Books","Lethe Press","Libertas Academica","Liberty Fund","Library of America","Lion Hudson","Macmillan Publishers","Mainstream Publishing","Manchester University Press","Mandrake Press","Mandrake of Oxford","Manning Publications","Manor House Publishing","Mapin Publishing","Marion Boyars Publishers","Mark Batty Publisher","Marshall Cavendish","Marshall Pickering","Martinus Nijhoff Publishers","Mascot Books","Matthias Media","McClelland and Stewart","McFarland & Company","McGraw Hill Financial","McGraw-Hill Education","Medknow Publications","Naiad Press","Nauka","NavPress","New Directions Publishing","New English Library","New Holland Publishers","New Village Press","Newnes","No Starch Press","Nonesuch Press","O'Reilly Media","Oberon Books","Open Court Publishing Company","Open University Press","Orchard Books","Orion Books","Packt Publishing","Palgrave Macmillan","Pan Books","Pantheon Books at Random House","Papadakis Publisher","Parachute Publishing","Parragon","Pathfinder Press","Paulist Press","Pavilion Books","Peace Hill Press","Pecan Grove Press","Pen and Sword Books","Penguin Books","Random House","Reed Elsevier","Reed Publishing","SAGE Publications","Salt Publishing","Sams Publishing","Schocken Books","Scholastic Press","Seagull Books","Secker & Warburg","Shambhala Publications","Shire Books","Shoemaker & Hoard Publishers","Shuter & Shooter Publishers","Sidgwick & Jackson","Signet Books","Simon & Schuster","St. Martin's Press","T & T Clark","Tachyon Publications","Tammi","Target Books","Tarpaulin Sky Press","Tartarus Press","Tate Publishing & Enterprises","Taunton Press","Taylor & Francis","Ten Speed Press","UCL Press","Unfinished Monument Press","United States Government Publishing Office","University of Akron Press","University of Alaska Press","University of California Press","University of Chicago Press","University of Michigan Press","University of Minnesota Press","University of Nebraska Press","Velazquez Press","Verso Books","Victor Gollancz Ltd","Viking Press","Vintage Books","Vintage Books at Random House","Virago Press","Virgin Publishing","Voyager Books","Zed Books","Ziff Davis Media","Zondervan"];var D$1=["A Song of Ice and Fire","Anna Karenina","Colonel Race","Discworld","Dune","Harry Potter","Hercule Poirot","His Dark Materials","Jane Austen Murder Mysteries","Little Women","Outlander","Percy Jackson","Sherlock Holmes","The Arc of a Scythe","The Bartimaeus Trilogy","The Border Trilogy","The Chronicles of Narnia","The Dark Tower","The Dresden Files","The Eighth Life","The Foundation Series","The Hitchhiker's Guide to the Galaxy","The Hunger Games","The Infinity Cycle","The Inheritance Cycle","The Lord of the Rings","The Maze Runner","The Prison Healer","The Red Rising Saga","The Southern Reach","The Wheel of Time","Thursday Next Series","Twilight","War and Peace"];var R$1=["1984","20,000 Leagues Under the Sea","A Bend in the River","A Brief History of Time","A Clockwork Orange","A Confederacy of Dunces","A Doll's House","A Handful of Dust","A Modest Proposal","A Passage to India","A Portrait of the Artist as a Young Man","A Room with a View","A Study in Scarlet","A Tale of Two Cities","A Wrinkle in Time","Absalom, Absalom!","Adventures of Huckleberry Finn","Alice's Adventures in Wonderland","All Quiet on the Western Front","All the King's Men","American Pastoral","An American Tragedy","And Then There Were None","Animal Farm","Anna Karenina","Anne of Green Gables","Are You There God? It's Me, Margaret","As I Lay Dying","Atlas Shrugged","Atonement","Austerlitz","Beloved","Beyond Good and Evil","Bible","Bleak House","Blood Meridian","Brave New World","Brideshead Revisited","Candide","Carmilla","Catch-22","Charlie and the Chocolate Factory","Charlotte's Web","Clarissa","Cranford","Crime and Punishment","Dao De Jing: A Minimalist Translation","David Copperfield","Deliverance","Don Quixote","Dora","Dr. Zhivago","Dracula","Dubliners","Dune","East of Eden","Emma","Fahrenheit 451","Faust","For Whom the Bell Tolls","Frankenstein","Freakonomics","Go Tell It on the Mountain","Gone with the Wind","Great Expectations","Grimms' Fairy Tales","Gulliver's Travels","Hamlet","Harry Potter and the Sorcerer's Stone","Heart of Darkness","Herzog","His Dark Materials","Hitting the line","Housekeeping","I, Claudius","If on a Winter's Night a Traveler","In Cold Blood","In Search of Lost Time","Invisible Man","It","Jane Eyre","Josefine Mutzenbacher","Jude the Obscure","L.A. Confidential","Leaves of Grass","Les Miserables","Life of Pi","Little Women","Lolita","Long Walk to Freedom","Lord Jim","Lord of the Flies","Lucky Jim","Madame Bovary","Malone Dies","Meditations","Men Without Women","Metamorphosis","Middlemarch","Midnight's Children","Moby Dick","Money","Mrs. Dalloway","My Bondage and My Freedom","My Life","Native Son","Neuromancer","Never Let Me Go","Nightmare Abbey","Nineteen Eighty Four","Nostromo","Notes from the Underground ","Of Mice and Men","Oliver Twist","On the Duty of Civil Disobedience","On the Road","One Flew Over the Cuckoo's Nest","One Hundred Years of Solitude","One Thousand and One Nights","Oscar and Lucinda","Pale Fire","Paradise Lost","Peter Pan","Portnoy's Complaint","Pride and Prejudice","Rabbit, Run","Republic","Revolutionary Road","Robinson Crusoe","Romeo and Juliet","Ruth Fielding in Alaska","Scoop","Second Treatise of Government","Slaughterhouse Five","Stories of Anton Chekhov","Sybil","Tess of the d'Urbervilles","The Adventures of Augie March","The Adventures of Huckleberry Finn","The Adventures of Sherlock Holmes","The Adventures of Tom Sawyer","The Aeneid","The Alchemist","The Ambassadors","The Art of War","The Big Sleep","The Black Sheep","The Blue Castle","The Brief Wondrous Life of Oscar Wao","The Brothers Karamazov","The Call of the Wild","The Canterbury Tales","The Catcher in the Rye","The Color Purple","The Complete Works of Edgar Allen Poe","The Corrections","The Count of Monte Cristo","The Day of the Locust","The Diary of a Nobody","The Diary of a Young Girl","The Divine Comedy","The Enchanted April","The Fountainhead","The Golden Bowl","The Golden Notebook","The Good Soldier","The Grapes of Wrath","The Great Gatsby","The Handmaid's Tale","The Heart is a Lonely Hunter","The Heart of the Matter","The Hobbit","The Hound of the Baskervilles","The Idiot","The Iliad","The King in Yellow","The Kite Runner","The Lion, the Witch, and the Wardrobe","The Little Prince","The Lord of the Rings","The Magic Mountain","The Maltese Falcon","The Master and Margarita","The Moviegoer","The Naked and the Dead","The Odyssey","The Old Man and the Sea","The Pickwick Papers","The Picture of Dorian Gray","The Pilgrim's Progress","The Pillars of the Earth","The Plague","The Portrait of a Lady","The Prime of Miss Jean Brodie","The Prince","The Problems of Philosophy","The Prophet","The Pursuit of Love","The Rainbow","The Red and the Black","The Remains of the Day","The Republic","The Scarlet Letter","The Sleepwalkers","The Sound and the Fury","The Stand","The Strange Case of Dr. Jekyll and Mr. Hyde","The Stranger","The Sun Also Rises","The Thirty-Nine Steps","The Three Musketeers","The Time Machine","The Tin Drum","The Trial","The War of the Worlds","The Waste Land","The Way We Live Now","The Wind in the Willows","The Woman in White","The Wonderful Wizard of Oz","The Works of Edgar Allan Poe","The Yellow Wallpaper","Things Fall Apart","Tinker, Tailor, Soldier, Spy","To Kill a Mockingbird","To the Lighthouse","Tom Jones","Treasure Island","Tristram Shandy","Tropic of Cancer","U.S.A. Trilogy","Ulysses","Uncle Tom's Cabin","Under the Volcano","Underworld","Vanity Fair","Walden","War and Peace","Watchmen","Winnie-the-Pooh","Wuthering Heights"];var _a={author:T,format:M,genre:w$1,publisher:L$1,series:D$1,title:R$1},P$1=_a;var H$1=["###-###-####","(###) ###-####","1-###-###-####","###.###.####"];var Qa={formats:H$1},W$1=Qa;var G$1=["azure","black","blue","cyan","fuchsia","gold","green","grey","indigo","ivory","lavender","lime","magenta","maroon","mint green","olive","orange","orchid","pink","plum","purple","red","salmon","silver","sky blue","tan","teal","turquoise","violet","white","yellow"];var Xa={human:G$1},F$1=Xa;var E$1=["Automotive","Baby","Beauty","Books","Clothing","Computers","Electronics","Games","Garden","Grocery","Health","Home","Industrial","Jewelry","Kids","Movies","Music","Outdoors","Shoes","Sports","Tools","Toys"];var N$1=["Discover the {{animal.type}}-like agility of our {{commerce.product}}, perfect for {{word.adjective}} users","Discover the {{word.adjective}} new {{commerce.product}} with an exciting mix of {{commerce.productMaterial}} ingredients","Ergonomic {{commerce.product}} made with {{commerce.productMaterial}} for all-day {{word.adjective}} support","Experience the {{color.human}} brilliance of our {{commerce.product}}, perfect for {{word.adjective}} environments","Featuring {{science.chemical_element.name}}-enhanced technology, our {{commerce.product}} offers unparalleled {{word.adjective}} performance","Innovative {{commerce.product}} featuring {{word.adjective}} technology and {{commerce.productMaterial}} construction","Introducing the {{location.country}}-inspired {{commerce.product}}, blending {{word.adjective}} style with local craftsmanship","New {{color.human}} {{commerce.product}} with ergonomic design for {{word.adjective}} comfort",'New {{commerce.product}} model with {{number.int({"min": 1, "max": 100})}} GB RAM, {{number.int({"min": 1, "max": 1000})}} GB storage, and {{word.adjective}} features',"Our {{animal.type}}-friendly {{commerce.product}} ensures {{word.adjective}} comfort for your pets","Our {{food.adjective}}-inspired {{commerce.product}} brings a taste of luxury to your {{word.adjective}} lifestyle","Professional-grade {{commerce.product}} perfect for {{word.adjective}} training and recreational use","Savor the {{food.adjective}} essence in our {{commerce.product}}, designed for {{word.adjective}} culinary adventures","Stylish {{commerce.product}} designed to make you stand out with {{word.adjective}} looks","The sleek and {{word.adjective}} {{commerce.product}} comes with {{color.human}} LED lighting for smart functionality","The {{color.human}} {{commerce.product}} combines {{location.country}} aesthetics with {{science.chemical_element.name}}-based durability","The {{company.catchPhrase}} {{commerce.product}} offers reliable performance and {{word.adjective}} design","The {{person.firstName}} {{commerce.product}} is the latest in a series of {{word.adjective}} products from {{company.name}}","{{commerce.productAdjective}} {{commerce.product}} designed with {{commerce.productMaterial}} for {{word.adjective}} performance","{{company.name}}'s most advanced {{commerce.product}} technology increases {{word.adjective}} capabilities"];var J$1={adjective:["Awesome","Bespoke","Electronic","Elegant","Ergonomic","Fantastic","Generic","Gorgeous","Handcrafted","Handmade","Incredible","Intelligent","Licensed","Luxurious","Modern","Oriental","Practical","Recycled","Refined","Rustic","Sleek","Small","Tasty","Unbranded"],material:["Bronze","Concrete","Cotton","Fresh","Frozen","Granite","Metal","Plastic","Rubber","Soft","Steel","Wooden"],product:["Bacon","Ball","Bike","Car","Chair","Cheese","Chicken","Chips","Computer","Fish","Gloves","Hat","Keyboard","Mouse","Pants","Pizza","Salad","Sausages","Shirt","Shoes","Soap","Table","Towels","Tuna"]};var $a={department:E$1,product_description:N$1,product_name:J$1},I$1=$a;var K$1=["AI-driven","Adaptive","Advanced","Automated","Balanced","Business-focused","Centralized","Compatible","Configurable","Cross-platform","Customer-focused","Customizable","Decentralized","Devolved","Digitized","Distributed","Diverse","Enhanced","Ergonomic","Exclusive","Expanded","Extended","Face to face","Focused","Front-line","Fully-configurable","Fundamental","Future-proofed","Grass-roots","Horizontal","Immersive","Implemented","Innovative","Integrated","Intuitive","Managed","Monitored","Multi-tiered","Networked","Open-architected","Open-source","Operative","Optimized","Optional","Organic","Organized","Persevering","Persistent","Phased","Polarised","Proactive","Profit-focused","Profound","Programmable","Progressive","Public-key","Quality-focused","Reactive","Realigned","Reduced","Reverse-engineered","Robust","Seamless","Secured","Self-enabling","Sharable","Smart","Stand-alone","Streamlined","Sustainable","Synchronised","Team-oriented","Total","Triple-buffered","Universal","Upgradable","User-centric","User-friendly","Versatile","Virtual","Visionary"];var O$1=["24/7","AI-driven","B2B","B2C","back-end","best-of-breed","bleeding-edge","collaborative","compelling","cross-media","cross-platform","customized","cutting-edge","decentralized","distributed","dynamic","efficient","end-to-end","enterprise","extensible","frictionless","front-end","generative","global","granular","holistic","immersive","impactful","innovative","integrated","interactive","intuitive","killer","leading-edge","magnetic","mission-critical","next-generation","one-to-one","open-source","out-of-the-box","plug-and-play","proactive","quantum","real-time","revolutionary","rich","robust","scalable","seamless","smart","sticky","strategic","sustainable","synergistic","transparent","turn-key","ubiquitous","user-centric","value-added","vertical","viral","virtual","visionary","world-class"];var x$1=["AI","ROI","applications","architectures","blockchains","channels","communities","content","convergence","deliverables","e-commerce","experiences","functionalities","infrastructures","initiatives","interfaces","large language models","lifetime value","markets","methodologies","metrics","mindshare","models","networks","niches","paradigms","partnerships","platforms","relationships","schemas","smart contracts","solutions","supply-chains","synergies","systems","technologies","users","web services"];var z$1=["aggregate","architect","benchmark","brand","collaborate","cultivate","deliver","deploy","disintermediate","drive","embrace","empower","enable","engage","engineer","enhance","evolve","expedite","exploit","extend","facilitate","gamify","generate","grow","harness","implement","incentivize","incubate","innovate","integrate","iterate","leverage","maximize","mesh","monetize","optimize","orchestrate","productize","redefine","reinvent","repurpose","revolutionize","scale","seize","simplify","strategize","streamline","syndicate","synthesize","target","transform","transition","unleash","utilize","visualize","whiteboard"];var V$1=["24 hour","24/7","AI-powered","actuating","analyzing","asymmetric","asynchronous","attitude-oriented","bifurcated","bottom-line","clear-thinking","client-driven","client-server","cloud-native","coherent","cohesive","composite","content-based","context-sensitive","contextually-based","data-driven","dedicated","demand-driven","directional","discrete","disintermediate","dynamic","eco-centric","empowering","encompassing","executive","explicit","exuding","fault-tolerant","fresh-thinking","full-range","global","heuristic","high-level","holistic","homogeneous","human-resource","hybrid","immersive","impactful","incremental","intangible","interactive","intermediate","leading edge","local","logistical","maximized","methodical","mission-critical","mobile","modular","motivating","national","needs-based","neutral","next generation","optimal","optimizing","radical","real-time","reciprocal","regional","resilient","responsive","scalable","secondary","stable","static","sustainable","system-worthy","systematic","systemic","tangible","tertiary","transitional","uniform","user-facing","value-added","well-modulated","zero administration","zero defect","zero tolerance","zero trust"];var Y$1=["Group","Inc","LLC","and Sons"];var j$1=["{{person.last_name.generic}} - {{person.last_name.generic}}","{{person.last_name.generic}} {{company.legal_entity_type}}","{{person.last_name.generic}}, {{person.last_name.generic}} and {{person.last_name.generic}}"];var q$1=["ability","access","adapter","algorithm","alliance","analyzer","application","approach","architecture","archive","array","artificial intelligence","attitude","benchmark","budgetary management","capability","capacity","challenge","circuit","collaboration","complexity","concept","conglomeration","contingency","core","customer loyalty","data-warehouse","database","definition","emulation","encoding","encryption","firmware","flexibility","focus group","forecast","frame","framework","function","functionalities","generative AI","hardware","help-desk","hierarchy","hub","implementation","infrastructure","initiative","installation","instruction set","interface","internet solution","intranet","knowledge base","knowledge user","leverage","local area network","matrices","matrix","methodology","microservice","middleware","migration","model","moderator","monitoring","moratorium","neural-net","open architecture","orchestration","paradigm","parallelism","policy","portal","pricing structure","process improvement","product","productivity","project","projection","protocol","service-desk","software","solution","standardization","strategy","structure","success","support","synergy","system engine","task-force","throughput","time-frame","toolset","utilisation","website","workforce"];var eo={adjective:K$1,buzz_adjective:O$1,buzz_noun:x$1,buzz_verb:z$1,descriptor:V$1,legal_entity_type:Y$1,name_pattern:j$1,noun:q$1},U$1=eo;var Z$1=["avatar","category","comment","createdAt","email","group","id","name","password","phone","status","title","token","updatedAt"];var ao={column:Z$1},_$1=ao;var Q$1={wide:["April","August","December","February","January","July","June","March","May","November","October","September"],abbr:["Apr","Aug","Dec","Feb","Jan","Jul","Jun","Mar","May","Nov","Oct","Sep"]};var X$1={wide:["Friday","Monday","Saturday","Sunday","Thursday","Tuesday","Wednesday"],abbr:["Fri","Mon","Sat","Sun","Thu","Tue","Wed"]};var oo={month:Q$1,weekday:X$1},$=oo;var ee$1=["Auto Loan","Checking","Credit Card","Home Loan","Investment","Money Market","Personal Loan","Savings"];var ae$1=["34##-######-####L","37##-######-####L"];var oe$1=["30[0-5]#-######-###L","36##-######-###L","54##-####-####-###L"];var re$1=["6011-####-####-###L","6011-62##-####-####-###L","64[4-9]#-####-####-###L","64[4-9]#-62##-####-####-###L","65##-####-####-###L","65##-62##-####-####-###L"];var ne$1=["3528-####-####-###L","3529-####-####-###L","35[3-8]#-####-####-###L"];var ie$1=["2[221-720]-####-####-###L","5[1-5]##-####-####-###L"];var te$1=["4###########L","4###-####-####-###L"];var ro={american_express:ae$1,diners_club:oe$1,discover:re$1,jcb:ne$1,mastercard:ie$1,visa:te$1},le$1=ro;var se$1=[{name:"UAE Dirham",code:"AED",symbol:""},{name:"Afghani",code:"AFN",symbol:"\u060B"},{name:"Lek",code:"ALL",symbol:"Lek"},{name:"Armenian Dram",code:"AMD",symbol:""},{name:"Netherlands Antillian Guilder",code:"ANG",symbol:"\u0192"},{name:"Kwanza",code:"AOA",symbol:""},{name:"Argentine Peso",code:"ARS",symbol:"$"},{name:"Australian Dollar",code:"AUD",symbol:"$"},{name:"Aruban Guilder",code:"AWG",symbol:"\u0192"},{name:"Azerbaijanian Manat",code:"AZN",symbol:"\u043C\u0430\u043D"},{name:"Convertible Marks",code:"BAM",symbol:"KM"},{name:"Barbados Dollar",code:"BBD",symbol:"$"},{name:"Taka",code:"BDT",symbol:""},{name:"Bulgarian Lev",code:"BGN",symbol:"\u043B\u0432"},{name:"Bahraini Dinar",code:"BHD",symbol:""},{name:"Burundi Franc",code:"BIF",symbol:""},{name:"Bermudian Dollar (customarily known as Bermuda Dollar)",code:"BMD",symbol:"$"},{name:"Brunei Dollar",code:"BND",symbol:"$"},{name:"Boliviano boliviano",code:"BOB",symbol:"Bs"},{name:"Brazilian Real",code:"BRL",symbol:"R$"},{name:"Bahamian Dollar",code:"BSD",symbol:"$"},{name:"Pula",code:"BWP",symbol:"P"},{name:"Belarusian Ruble",code:"BYN",symbol:"Rbl"},{name:"Belize Dollar",code:"BZD",symbol:"BZ$"},{name:"Canadian Dollar",code:"CAD",symbol:"$"},{name:"Congolese Franc",code:"CDF",symbol:""},{name:"Swiss Franc",code:"CHF",symbol:"CHF"},{name:"Chilean Peso",code:"CLP",symbol:"$"},{name:"Yuan Renminbi",code:"CNY",symbol:"\xA5"},{name:"Colombian Peso",code:"COP",symbol:"$"},{name:"Costa Rican Colon",code:"CRC",symbol:"\u20A1"},{name:"Cuban Peso",code:"CUP",symbol:"\u20B1"},{name:"Cape Verde Escudo",code:"CVE",symbol:""},{name:"Czech Koruna",code:"CZK",symbol:"K\u010D"},{name:"Djibouti Franc",code:"DJF",symbol:""},{name:"Danish Krone",code:"DKK",symbol:"kr"},{name:"Dominican Peso",code:"DOP",symbol:"RD$"},{name:"Algerian Dinar",code:"DZD",symbol:""},{name:"Egyptian Pound",code:"EGP",symbol:"\xA3"},{name:"Nakfa",code:"ERN",symbol:""},{name:"Ethiopian Birr",code:"ETB",symbol:""},{name:"Euro",code:"EUR",symbol:"\u20AC"},{name:"Fiji Dollar",code:"FJD",symbol:"$"},{name:"Falkland Islands Pound",code:"FKP",symbol:"\xA3"},{name:"Pound Sterling",code:"GBP",symbol:"\xA3"},{name:"Lari",code:"GEL",symbol:""},{name:"Cedi",code:"GHS",symbol:""},{name:"Gibraltar Pound",code:"GIP",symbol:"\xA3"},{name:"Dalasi",code:"GMD",symbol:""},{name:"Guinea Franc",code:"GNF",symbol:""},{name:"Quetzal",code:"GTQ",symbol:"Q"},{name:"Guyana Dollar",code:"GYD",symbol:"$"},{name:"Hong Kong Dollar",code:"HKD",symbol:"$"},{name:"Lempira",code:"HNL",symbol:"L"},{name:"Gourde",code:"HTG",symbol:""},{name:"Forint",code:"HUF",symbol:"Ft"},{name:"Rupiah",code:"IDR",symbol:"Rp"},{name:"New Israeli Sheqel",code:"ILS",symbol:"\u20AA"},{name:"Bhutanese Ngultrum",code:"BTN",symbol:"Nu"},{name:"Indian Rupee",code:"INR",symbol:"\u20B9"},{name:"Iraqi Dinar",code:"IQD",symbol:""},{name:"Iranian Rial",code:"IRR",symbol:"\uFDFC"},{name:"Iceland Krona",code:"ISK",symbol:"kr"},{name:"Jamaican Dollar",code:"JMD",symbol:"J$"},{name:"Jordanian Dinar",code:"JOD",symbol:""},{name:"Yen",code:"JPY",symbol:"\xA5"},{name:"Kenyan Shilling",code:"KES",symbol:""},{name:"Som",code:"KGS",symbol:"\u043B\u0432"},{name:"Riel",code:"KHR",symbol:"\u17DB"},{name:"Comoro Franc",code:"KMF",symbol:""},{name:"North Korean Won",code:"KPW",symbol:"\u20A9"},{name:"Won",code:"KRW",symbol:"\u20A9"},{name:"Kuwaiti Dinar",code:"KWD",symbol:""},{name:"Cayman Islands Dollar",code:"KYD",symbol:"$"},{name:"Tenge",code:"KZT",symbol:"\u043B\u0432"},{name:"Kip",code:"LAK",symbol:"\u20AD"},{name:"Lebanese Pound",code:"LBP",symbol:"\xA3"},{name:"Sri Lanka Rupee",code:"LKR",symbol:"\u20A8"},{name:"Liberian Dollar",code:"LRD",symbol:"$"},{name:"Libyan Dinar",code:"LYD",symbol:""},{name:"Moroccan Dirham",code:"MAD",symbol:""},{name:"Moldovan Leu",code:"MDL",symbol:""},{name:"Malagasy Ariary",code:"MGA",symbol:""},{name:"Denar",code:"MKD",symbol:"\u0434\u0435\u043D"},{name:"Kyat",code:"MMK",symbol:""},{name:"Tugrik",code:"MNT",symbol:"\u20AE"},{name:"Pataca",code:"MOP",symbol:""},{name:"Ouguiya",code:"MRU",symbol:""},{name:"Mauritius Rupee",code:"MUR",symbol:"\u20A8"},{name:"Rufiyaa",code:"MVR",symbol:""},{name:"Kwacha",code:"MWK",symbol:""},{name:"Mexican Peso",code:"MXN",symbol:"$"},{name:"Malaysian Ringgit",code:"MYR",symbol:"RM"},{name:"Metical",code:"MZN",symbol:"MT"},{name:"Naira",code:"NGN",symbol:"\u20A6"},{name:"Cordoba Oro",code:"NIO",symbol:"C$"},{name:"Norwegian Krone",code:"NOK",symbol:"kr"},{name:"Nepalese Rupee",code:"NPR",symbol:"\u20A8"},{name:"New Zealand Dollar",code:"NZD",symbol:"$"},{name:"Rial Omani",code:"OMR",symbol:"\uFDFC"},{name:"Balboa",code:"PAB",symbol:"B/."},{name:"Nuevo Sol",code:"PEN",symbol:"S/."},{name:"Kina",code:"PGK",symbol:""},{name:"Philippine Peso",code:"PHP",symbol:"Php"},{name:"Pakistan Rupee",code:"PKR",symbol:"\u20A8"},{name:"Zloty",code:"PLN",symbol:"z\u0142"},{name:"Guarani",code:"PYG",symbol:"Gs"},{name:"Qatari Rial",code:"QAR",symbol:"\uFDFC"},{name:"New Leu",code:"RON",symbol:"lei"},{name:"Serbian Dinar",code:"RSD",symbol:"\u0414\u0438\u043D."},{name:"Russian Ruble",code:"RUB",symbol:"\u0440\u0443\u0431"},{name:"Rwanda Franc",code:"RWF",symbol:""},{name:"Saudi Riyal",code:"SAR",symbol:"\uFDFC"},{name:"Solomon Islands Dollar",code:"SBD",symbol:"$"},{name:"Seychelles Rupee",code:"SCR",symbol:"\u20A8"},{name:"Sudanese Pound",code:"SDG",symbol:""},{name:"Swedish Krona",code:"SEK",symbol:"kr"},{name:"Singapore Dollar",code:"SGD",symbol:"$"},{name:"Saint Helena Pound",code:"SHP",symbol:"\xA3"},{name:"Leone",code:"SLE",symbol:""},{name:"Somali Shilling",code:"SOS",symbol:"S"},{name:"Surinam Dollar",code:"SRD",symbol:"$"},{name:"South Sudanese pound",code:"SSP",symbol:""},{name:"Dobra",code:"STN",symbol:"Db"},{name:"Syrian Pound",code:"SYP",symbol:"\xA3"},{name:"Lilangeni",code:"SZL",symbol:""},{name:"Baht",code:"THB",symbol:"\u0E3F"},{name:"Somoni",code:"TJS",symbol:""},{name:"Manat",code:"TMT",symbol:""},{name:"Tunisian Dinar",code:"TND",symbol:""},{name:"Pa'anga",code:"TOP",symbol:""},{name:"Turkish Lira",code:"TRY",symbol:"\u20BA"},{name:"Trinidad and Tobago Dollar",code:"TTD",symbol:"TT$"},{name:"New Taiwan Dollar",code:"TWD",symbol:"NT$"},{name:"Tanzanian Shilling",code:"TZS",symbol:""},{name:"Hryvnia",code:"UAH",symbol:"\u20B4"},{name:"Uganda Shilling",code:"UGX",symbol:""},{name:"US Dollar",code:"USD",symbol:"$"},{name:"Peso Uruguayo",code:"UYU",symbol:"$U"},{name:"Uzbekistan Sum",code:"UZS",symbol:"\u043B\u0432"},{name:"Venezuelan bol\xEDvar",code:"VES",symbol:"Bs"},{name:"Dong",code:"VND",symbol:"\u20AB"},{name:"Vatu",code:"VUV",symbol:""},{name:"Tala",code:"WST",symbol:""},{name:"CFA Franc BEAC",code:"XAF",symbol:""},{name:"East Caribbean Dollar",code:"XCD",symbol:"$"},{name:"CFA Franc BCEAO",code:"XOF",symbol:""},{name:"CFP Franc",code:"XPF",symbol:""},{name:"Yemeni Rial",code:"YER",symbol:"\uFDFC"},{name:"Rand",code:"ZAR",symbol:"R"},{name:"Lesotho Loti",code:"LSL",symbol:""},{name:"Namibia Dollar",code:"NAD",symbol:"N$"},{name:"Zambian Kwacha",code:"ZMW",symbol:"K"},{name:"Zimbabwe Dollar",code:"ZWL",symbol:""}];var de$1=["deposit","invoice","payment","withdrawal"];var no={account_type:ee$1,credit_card:le$1,currency:se$1,transaction_type:de$1},ue$1=no;var ce$1=["bitter","creamy","crispy","crunchy","delicious","fluffy","fresh","golden","juicy","moist","rich","salty","savory","smoky","sour","spicy","sweet","tangy","tender","zesty"];var me$1=["A classic pie filled with delicious {{food.meat}} and {{food.adjective}} {{food.ingredient}}, baked in a {{food.adjective}} pastry crust and topped with a golden-brown lattice.","A delightful tart combining {{food.adjective}} {{food.vegetable}} and sweet {{food.fruit}}, set in a buttery pastry shell and finished with a hint of {{food.spice}}.","A heartwarming {{food.ethnic_category}} soup, featuring fresh {{food.ingredient}} and an aromatic blend of traditional spices.","A robust {{food.adjective}} stew featuring {{food.ethnic_category}} flavors, loaded with {{food.adjective}} meat, {{food.adjective}} vegetables, and a {{food.adjective}}, {{food.adjective}} broth.","A simple {{food.fruit}} pie. No fancy stuff. Just pie.","A slow-roasted {{animal.bird}} with a {{food.adjective}}, {{food.adjective}} exterior. Stuffed with {{food.fruit}} and covered in {{food.fruit}} sauce. Sides with {{food.vegetable}} puree and wild {{food.vegetable}}.","A special {{color.human}} {{food.ingredient}} from {{location.country}}. To support the strong flavor it is sided with a tablespoon of {{food.spice}}.","A succulent {{food.meat}} steak, encased in a {{food.adjective}} {{food.spice}} crust, served with a side of {{food.spice}} mashed {{food.vegetable}}.","An exquisite {{food.meat}} roast, infused with the essence of {{food.fruit}}, slow-roasted to bring out its natural flavors and served with a side of creamy {{food.vegetable}}","Baked {{food.ingredient}}-stuffed {{food.meat}}, seasoned with {{food.spice}} and {{food.adjective}} herbs, accompanied by roasted {{food.vegetable}} medley.","Crispy fried {{food.meat}} bites, seasoned with {{food.spice}} and served with a tangy {{food.fruit}} dipping sauce.","Fresh mixed greens tossed with {{food.spice}}-rubbed {{food.meat}}, {{food.vegetable}}, and a light dressing.","Fresh {{food.ingredient}} with a pinch of {{food.spice}}, topped by a caramelized {{food.fruit}} with whipped cream","Grilled {{food.meat}} kebabs, marinated in {{food.ethnic_category}} spices and served with a fresh {{food.vegetable}} and {{food.fruit}} salad.","Hearty {{food.ingredient}} and {{food.meat}} stew, slow-cooked with {{food.spice}} and {{food.vegetable}} for a comforting, flavorful meal.","Juicy {{food.meat}}, grilled to your liking and drizzled with a bold {{food.spice}} sauce, served alongside roasted {{food.vegetable}}.","Our {{food.adjective}} {{food.meat}}, slow-cooked to perfection, accompanied by steamed {{food.vegetable}} and a rich, savory gravy.","Tender {{food.meat}} skewers, glazed with a sweet and tangy {{food.fruit}} sauce, served over a bed of fragrant jasmine rice.","Tenderly braised {{food.meat}} in a rich {{food.spice}} and {{food.vegetable}} sauce, served with a side of creamy {{food.vegetable}}.","Three {{food.ingredient}} with {{food.vegetable}}, {{food.vegetable}}, {{food.vegetable}}, {{food.vegetable}} and {{food.ingredient}}. With a side of baked {{food.fruit}}, and your choice of {{food.ingredient}} or {{food.ingredient}}.",'{{number.int({"min":1, "max":99})}}-day aged {{food.meat}} steak, with choice of {{number.int({"min":2, "max":4})}} sides.'];var he$1=["California maki","Peking duck","Philadelphia maki","arepas","barbecue ribs","bruschette with tomato","bunny chow","caesar salad","caprese salad","cauliflower penne","cheeseburger","chicken fajitas","chicken milanese","chicken parm","chicken wings","chilli con carne","ebiten maki","fettuccine alfredo","fish and chips","french fries with sausages","french toast","hummus","katsu curry","kebab","lasagne","linguine with clams","massaman curry","meatballs with sauce","mushroom risotto","pappardelle alla bolognese","pasta and beans","pasta carbonara","pasta with tomato and basil","pho","pierogi","pizza","poke","pork belly buns","pork sausage roll","poutine","ricotta stuffed ravioli","risotto with seafood","salmon nigiri","scotch eggs","seafood paella","som tam","souvlaki","stinky tofu","sushi","tacos","teriyaki chicken donburi","tiramis\xF9","tuna sashimi","vegetable soup"];var ye$1=["{{food.adjective}} {{food.ethnic_category}} stew","{{food.adjective}} {{food.meat}} with {{food.vegetable}}","{{food.ethnic_category}} {{food.ingredient}} soup","{{food.fruit}} and {{food.fruit}} tart","{{food.fruit}} pie","{{food.fruit}}-glazed {{food.meat}} skewers","{{food.fruit}}-infused {{food.meat}} roast","{{food.ingredient}} and {{food.meat}} pie","{{food.ingredient}}-infused {{food.meat}}","{{food.meat}} steak","{{food.meat}} with {{food.fruit}} sauce","{{food.spice}}-crusted {{food.meat}}","{{food.spice}}-rubbed {{food.meat}} salad","{{food.vegetable}} salad","{{person.first_name.generic}}'s special {{food.ingredient}}"];var pe$1=["Ainu","Albanian","American","Andhra","Anglo-Indian","Arab","Argentine","Armenian","Assyrian","Awadhi","Azerbaijani","Balochi","Bangladeshi","Bashkir","Belarusian","Bengali","Berber","Brazilian","British","Buddhist","Bulgarian","Cajun","Cantonese","Caribbean","Chechen","Chinese","Chinese Islamic","Circassian","Crimean Tatar","Cypriot","Czech","Danish","Egyptian","English","Eritrean","Estonian","Ethiopian","Filipino","French","Georgian","German","Goan","Goan Catholic","Greek","Gujarati","Hyderabad","Indian","Indian Chinese","Indian Singaporean","Indonesian","Inuit","Irish","Italian","Italian-American","Jamaican","Japanese","Jewish - Israeli","Karnataka","Kazakh","Keralite","Korean","Kurdish","Laotian","Latvian","Lebanese","Lithuanian","Louisiana Creole","Maharashtrian","Malay","Malaysian Chinese","Malaysian Indian","Mangalorean","Mediterranean","Mennonite","Mexican","Mordovian","Mughal","Native American","Nepalese","New Mexican","Odia","Pakistani","Parsi","Pashtun","Pennsylvania Dutch","Peranakan","Persian","Peruvian","Polish","Portuguese","Punjabi","Qu\xE9b\xE9cois","Rajasthani","Romani","Romanian","Russian","Sami","Serbian","Sindhi","Slovak","Slovenian","Somali","South Indian","Soviet","Spanish","Sri Lankan","Taiwanese","Tamil","Tatar","Texan","Thai","Turkish","Udupi","Ukrainian","Vietnamese","Yamal","Zambian","Zanzibari"];var ge$1=["apple","apricot","aubergine","avocado","banana","berry","blackberry","blood orange","blueberry","bush tomato","butternut pumpkin","cantaloupe","cavalo","cherry","corella pear","cranberry","cumquat","currant","custard apple","custard apples daikon","date","dragonfruit","dried apricot","elderberry","feijoa","fig","fingerlime","goji berry","grape","grapefruit","guava","honeydew melon","incaberry","jarrahdale pumpkin","juniper berry","kiwi fruit","kiwiberry","lemon","lime","longan","loquat","lychee","mandarin","mango","mangosteen","melon","mulberry","nashi pear","nectarine","olive","orange","papaw","papaya","passionfruit","peach","pear","pineapple","plum","pomegranate","prune","rockmelon","snowpea","sprout","starfruit","strawberry","sultana","tangelo","tomato","watermelon"];var be$1=["achacha","adzuki beans","agar","agave syrup","ajowan seed","albacore tuna","alfalfa","allspice","almond oil","almonds","amaranth","amchur","anchovies","aniseed","annatto seed","apple cider vinegar","apple juice","apple juice concentrate","apples","apricots","arborio rice","arrowroot","artichoke","arugula","asafoetida","asian greens","asian noodles","asparagus","aubergine","avocado","avocado oil","avocado spread","bacon","baking powder","baking soda","balsamic vinegar","bamboo shoots","banana","barberry","barley","barramundi","basil basmati rice","bay leaves","bean shoots","bean sprouts","beans","beef","beef stock","beetroot","berries","besan","black eyed beans","blackberries","blood oranges","blue cheese","blue eye trevalla","blue swimmer crab","blueberries","bocconcini","bok choy","bonito flakes","bonza","borlotti beans","bran","brazil nut","bread","brie","broccoli","broccolini","brown flour","brown mushrooms","brown rice","brown rice vinegar","brussels sprouts","buckwheat","buckwheat flour","buckwheat noodles","bulghur","bush tomato","butter","butter beans","buttermilk","butternut lettuce","butternut pumpkin","cabbage","cacao","cake","calamari","camellia tea oil","camembert","camomile","candle nut","cannellini beans","canola oil","cantaloupe","capers","capsicum","caraway seed","cardamom","carob carrot","carrot","cashews","cassia bark","cauliflower","cavalo","cayenne","celery","celery seed","cheddar","cherries","chestnut","chia seeds","chicken","chicken stock","chickory","chickpea","chilli pepper","chinese cabbage","chinese five spice","chives","choy sum","cinnamon","clams","cloves","cocoa powder","coconut","coconut oil","coconut water","coffee","common cultivated mushrooms","corella pear","coriander leaves","coriander seed","corn oil","corn syrup","corn tortilla","cornichons","cornmeal","cos lettuce","cottage cheese","cous cous","crabs","cranberry","cream","cream cheese","cucumber","cumin","cumquat","currants","curry leaves","curry powder","custard apples","dandelion","dark chocolate","dashi","dates","dill","dragonfruit","dried apricots","dried chinese broccoli","duck","edam","edamame","eggplant","eggs","elderberry","endive","english spinach","enoki mushrooms","extra virgin olive oil","farmed prawns","feijoa","fennel","fennel seeds","fenugreek","feta","figs","file powder","fingerlime","fish sauce","fish stock","flat mushrooms","flathead","flaxseed","flaxseed oil","flounder","flour","freekeh","french eschallots","fresh chillies","fromage blanc","fruit","galangal","garam masala","garlic","goat cheese","goat milk","goji berry","grape seed oil","grapefruit","grapes","green beans","green pepper","green tea","green tea noodles","greenwheat freekeh","gruyere","guava","gula melaka","haloumi","ham","haricot beans","harissa","hazelnut","hijiki","hiramasa kingfish","hokkien noodles","honey","honeydew melon","horseradish","hot smoked salmon","hummus","iceberg lettuce","incaberries","jarrahdale pumpkin","jasmine rice","jelly","jerusalem artichoke","jewfish","jicama","juniper berries","kale","kangaroo","kecap manis","kenchur","kidney beans","kidneys","kiwi berries","kiwi fruit","kohlrabi","kokam","kombu","koshihikari rice","kudzu","kumera","lamb","lavender flowers","leeks","lemon","lemongrass","lentils","lettuce","licorice","lime leaves","limes","liver","lobster","longan","loquats","lotus root","lychees","macadamia nut","macadamia oil","mace","mackerel","mahi mahi","mahlab","malt vinegar","mandarins","mango","mangosteens","maple syrup","margarine","marigold","marjoram","mastic","melon","milk","milk chocolate","mint","miso","molasses","monkfish","morwong","mountain bread","mozzarella","muesli","mulberries","mullet","mung beans","mussels","mustard","mustard seed","nashi pear","nasturtium","nectarines","nori","nutmeg","nutritional yeast","nuts","oat flour","oatmeal","oats","octopus","okra","olive oil","olives","omega spread","onion","oranges","oregano","oyster mushrooms","oyster sauce","oysters","pandanus leaves","papaw","papaya","paprik","parmesan cheese","parrotfish","parsley","parsnip","passionfruit","pasta","peaches","peanuts","pear","pear juice","pears","peas","pecan nut","pecorino","pepitas","peppercorns","peppermint","peppers","persimmon","pine nut","pineapple","pinto beans","pistachio nut","plums","polenta","pomegranate","poppy seed","porcini mushrooms","pork","potato flour","potatoes","provolone","prunes","pumpkin","pumpkin seed","purple carrot","purple rice","quark","quince","quinoa","radicchio","radish","raisin","raspberry","red cabbage","red lentils","red pepper","red wine","red wine vinegar","redfish","rhubarb","rice flour","rice noodles","rice paper","rice syrup","ricemilk","ricotta","rockmelon","rose water","rosemary","rye","rye bread","safflower oil","saffron","sage","sake","salmon","sardines","sausages","scallops","sea salt","semolina","sesame oil","sesame seeds","shark","shiitake mushrooms","silverbeet","slivered almonds","smoked trout","snapper","snowpea sprouts","snowpeas","soba","sour dough bread","soy","soy beans","soy flour","soy milk","soy sauce","soymilk","spearmint","spelt","spelt bread","spinach","spring onions","sprouts","squash","squid","star anise","star fruit","starfruit","stevia","strawberries","sugar","sultanas","sun-dried tomatoes","sunflower oil","sunflower seeds","sweet chilli sauce","sweet potato","swiss chard","swordfish","szechuan pepperberry","tabasco","tahini","taleggio cheese","tamari","tamarillo","tangelo","tapioca","tapioca flour","tarragon","tea","tea oil","tempeh","thyme","tinned","tofu","tom yum","tomatoes","trout","tuna","turkey","turmeric","turnips","unbleached flour","vanilla beans","vegetable oil","vegetable spaghetti","vegetable stock","vermicelli noodles","vinegar","wakame","walnut","warehou","wasabi","water","watercress","watermelon","wattleseed","wheat","wheatgrass juice","white bread","white flour","white rice","white wine","white wine vinegar","whiting wild rice","wholegrain bread","wholemeal","wholewheat flour","william pear","yeast","yellow papaw","yellowtail kingfish","yoghurt","yogurt","zucchini"];var Se$1=["beef","chicken","crocodile","duck","emu","goose","kangaroo","lamb","ostrich","pigeon","pork","quail","rabbit","salmon","turkey","venison"];var ke$1=["achiote seed","ajwain seed","ajwan seed","allspice","amchoor","anise","anise star","aniseed","annatto seed","arrowroot","asafoetida","baharat","balti masala","balti stir fry mix","basil","bay leaves","bbq","caraway seed","cardamom","cassia","cayenne pepper","celery","chamomile","chervil","chilli","chilli pepper","chillies","china star","chives","cinnamon","cloves","colombo","coriander","cumin","curly leaf parsley","curry","dhansak","dill","fennel seed","fenugreek","fines herbes","five spice","french lavender","galangal","garam masala","garlic","german chamomile","ginger","green cardamom","herbes de provence","jalfrezi","jerk","kaffir leaves","korma","lavender","lemon grass","lemon pepper","lime leaves","liquorice root","mace","mango","marjoram","methi","mint","mustard","nutmeg","onion seed","orange zest","oregano","paprika","parsley","pepper","peppercorns","pimento","piri piri","poppy seed","pot marjoram","poudre de colombo","ras-el-hanout","rice paper","rogan josh","rose baie","rosemary","saffron","sage","sesame seed","spearmint","sumac","sweet basil","sweet laurel","tagine","tandoori masala","tarragon","thyme","tikka masala","turmeric","vanilla","zahtar"];var Ce$1=["artichoke","arugula","asian greens","asparagus","bean shoots","bean sprouts","beans","beetroot","bok choy","broccoli","broccolini","brussels sprouts","butternut lettuce","cabbage","capers","carob carrot","carrot","cauliflower","celery","chilli pepper","chinese cabbage","chives","cornichons","cos lettuce","cucumber","dried chinese broccoli","eggplant","endive","english spinach","french eschallots","fresh chillies","garlic","green beans","green pepper","hijiki","iceberg lettuce","jerusalem artichoke","jicama","kale","kohlrabi","leeks","lettuce","okra","onion","parsnip","peas","peppers","potatoes","pumpkin","purple carrot","radicchio","radish","raspberry","red cabbage","red pepper","rhubarb","snowpea sprouts","spinach","squash","sun dried tomatoes","sweet potato","swiss chard","turnips","zucchini"];var io={adjective:ce$1,description_pattern:me$1,dish:he$1,dish_pattern:ye$1,ethnic_category:pe$1,fruit:ge$1,ingredient:be$1,meat:Se$1,spice:ke$1,vegetable:Ce$1},fe$1=io;var ve$1=["1080p","auxiliary","back-end","bluetooth","cross-platform","digital","haptic","mobile","multi-byte","neural","online","open-source","optical","primary","redundant","solid state","virtual","wireless"];var Ae$1=["backing up","bypassing","calculating","compressing","connecting","copying","generating","hacking","indexing","navigating","overriding","parsing","programming","quantifying","synthesizing","transmitting"];var Be$1=["alarm","application","array","bandwidth","bus","capacitor","card","circuit","driver","feed","firewall","hard drive","interface","matrix","microchip","monitor","panel","pixel","port","program","protocol","sensor","system","transmitter"];var Te$1=["I'll {{verb}} the {{adjective}} {{abbreviation}} {{noun}}, that should {{noun}} the {{abbreviation}} {{noun}}!","If we {{verb}} the {{noun}}, we can get to the {{abbreviation}} {{noun}} through the {{adjective}} {{abbreviation}} {{noun}}!","The {{abbreviation}} {{noun}} is down, {{verb}} the {{adjective}} {{noun}} so we can {{verb}} the {{abbreviation}} {{noun}}!","Try to {{verb}} the {{abbreviation}} {{noun}}, maybe it will {{verb}} the {{adjective}} {{noun}}!","Use the {{adjective}} {{abbreviation}} {{noun}}, then you can {{verb}} the {{adjective}} {{noun}}!","We need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!","You can't {{verb}} the {{noun}} without {{ingverb}} the {{adjective}} {{abbreviation}} {{noun}}!","{{ingverb}} the {{noun}} won't do anything, we need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!"];var Me$1=["back up","bypass","calculate","compress","connect","copy","generate","hack","index","input","navigate","override","parse","program","quantify","reboot","synthesize","transmit"];var to={adjective:ve$1,ingverb:Ae$1,noun:Be$1,phrase:Te$1,verb:Me$1},we$1=to;var Le$1=["com","biz","info","name","net","org"];var De$1=["example.org","example.com","example.net"];var Re$1=["gmail.com","yahoo.com","hotmail.com"];var lo={domain_suffix:Le$1,example_email:De$1,free_email:Re$1},Pe$1=lo;var He$1=["#####","####","###"];var We$1=["Abilene","Akron","Alafaya","Alameda","Albany","Albuquerque","Alexandria","Alhambra","Aliso Viejo","Allen","Allentown","Aloha","Alpharetta","Altadena","Altamonte Springs","Altoona","Amarillo","Ames","Anaheim","Anchorage","Anderson","Ankeny","Ann Arbor","Annandale","Antelope","Antioch","Apex","Apopka","Apple Valley","Appleton","Arcadia","Arden-Arcade","Arecibo","Arlington","Arlington Heights","Arvada","Ashburn","Asheville","Aspen Hill","Atascocita","Athens-Clarke County","Atlanta","Attleboro","Auburn","Augusta-Richmond County","Aurora","Austin","Avondale","Azusa","Bakersfield","Baldwin Park","Baltimore","Barnstable Town","Bartlett","Baton Rouge","Battle Creek","Bayamon","Bayonne","Baytown","Beaumont","Beavercreek","Beaverton","Bedford","Bel Air South","Bell Gardens","Belleville","Bellevue","Bellflower","Bellingham","Bend","Bentonville","Berkeley","Berwyn","Bethesda","Bethlehem","Billings","Biloxi","Binghamton","Birmingham","Bismarck","Blacksburg","Blaine","Bloomington","Blue Springs","Boca Raton","Boise City","Bolingbrook","Bonita Springs","Bossier City","Boston","Bothell","Boulder","Bountiful","Bowie","Bowling Green","Boynton Beach","Bozeman","Bradenton","Brandon","Brentwood","Bridgeport","Bristol","Brockton","Broken Arrow","Brookhaven","Brookline","Brooklyn Park","Broomfield","Brownsville","Bryan","Buckeye","Buena Park","Buffalo","Buffalo Grove","Burbank","Burien","Burke","Burleson","Burlington","Burnsville","Caguas","Caldwell","Camarillo","Cambridge","Camden","Canton","Cape Coral","Carlsbad","Carmel","Carmichael","Carolina","Carrollton","Carson","Carson City","Cary","Casa Grande","Casas Adobes","Casper","Castle Rock","Castro Valley","Catalina Foothills","Cathedral City","Catonsville","Cedar Hill","Cedar Park","Cedar Rapids","Centennial","Centreville","Ceres","Cerritos","Champaign","Chandler","Chapel Hill","Charleston","Charlotte","Charlottesville","Chattanooga","Cheektowaga","Chesapeake","Chesterfield","Cheyenne","Chicago","Chico","Chicopee","Chino","Chino Hills","Chula Vista","Cicero","Cincinnati","Citrus Heights","Clarksville","Clearwater","Cleveland","Cleveland Heights","Clifton","Clovis","Coachella","Coconut Creek","Coeur d'Alene","College Station","Collierville","Colorado Springs","Colton","Columbia","Columbus","Commerce City","Compton","Concord","Conroe","Conway","Coon Rapids","Coral Gables","Coral Springs","Corona","Corpus Christi","Corvallis","Costa Mesa","Council Bluffs","Country Club","Covina","Cranston","Cupertino","Cutler Bay","Cuyahoga Falls","Cypress","Dale City","Dallas","Daly City","Danbury","Danville","Davenport","Davie","Davis","Dayton","Daytona Beach","DeKalb","DeSoto","Dearborn","Dearborn Heights","Decatur","Deerfield Beach","Delano","Delray Beach","Deltona","Denton","Denver","Des Moines","Des Plaines","Detroit","Diamond Bar","Doral","Dothan","Downers Grove","Downey","Draper","Dublin","Dubuque","Duluth","Dundalk","Dunwoody","Durham","Eagan","East Hartford","East Honolulu","East Lansing","East Los Angeles","East Orange","East Providence","Eastvale","Eau Claire","Eden Prairie","Edina","Edinburg","Edmond","El Cajon","El Centro","El Dorado Hills","El Monte","El Paso","Elgin","Elizabeth","Elk Grove","Elkhart","Ellicott City","Elmhurst","Elyria","Encinitas","Enid","Enterprise","Erie","Escondido","Euclid","Eugene","Euless","Evanston","Evansville","Everett","Fairfield","Fall River","Fargo","Farmington","Farmington Hills","Fayetteville","Federal Way","Findlay","Fishers","Flagstaff","Flint","Florence-Graham","Florin","Florissant","Flower Mound","Folsom","Fond du Lac","Fontana","Fort Collins","Fort Lauderdale","Fort Myers","Fort Pierce","Fort Smith","Fort Wayne","Fort Worth","Fountain Valley","Fountainebleau","Framingham","Franklin","Frederick","Freeport","Fremont","Fresno","Frisco","Fullerton","Gainesville","Gaithersburg","Galveston","Garden Grove","Gardena","Garland","Gary","Gastonia","Georgetown","Germantown","Gilbert","Gilroy","Glen Burnie","Glendale","Glendora","Glenview","Goodyear","Grand Forks","Grand Island","Grand Junction","Grand Prairie","Grand Rapids","Grapevine","Great Falls","Greeley","Green Bay","Greensboro","Greenville","Greenwood","Gresham","Guaynabo","Gulfport","Hacienda Heights","Hackensack","Haltom City","Hamilton","Hammond","Hampton","Hanford","Harlingen","Harrisburg","Harrisonburg","Hartford","Hattiesburg","Haverhill","Hawthorne","Hayward","Hemet","Hempstead","Henderson","Hendersonville","Hesperia","Hialeah","Hicksville","High Point","Highland","Highlands Ranch","Hillsboro","Hilo","Hoboken","Hoffman Estates","Hollywood","Homestead","Honolulu","Hoover","Houston","Huntersville","Huntington","Huntington Beach","Huntington Park","Huntsville","Hutchinson","Idaho Falls","Independence","Indianapolis","Indio","Inglewood","Iowa City","Irondequoit","Irvine","Irving","Jackson","Jacksonville","Janesville","Jefferson City","Jeffersonville","Jersey City","Johns Creek","Johnson City","Joliet","Jonesboro","Joplin","Jupiter","Jurupa Valley","Kalamazoo","Kannapolis","Kansas City","Kearny","Keller","Kendale Lakes","Kendall","Kenner","Kennewick","Kenosha","Kent","Kentwood","Kettering","Killeen","Kingsport","Kirkland","Kissimmee","Knoxville","Kokomo","La Crosse","La Habra","La Mesa","La Mirada","Lacey","Lafayette","Laguna Niguel","Lake Charles","Lake Elsinore","Lake Forest","Lake Havasu City","Lake Ridge","Lakeland","Lakeville","Lakewood","Lancaster","Lansing","Laredo","Largo","Las Cruces","Las Vegas","Lauderhill","Lawrence","Lawton","Layton","League City","Lee's Summit","Leesburg","Lehi","Lehigh Acres","Lenexa","Levittown","Lewisville","Lexington-Fayette","Lincoln","Linden","Little Rock","Littleton","Livermore","Livonia","Lodi","Logan","Lombard","Lompoc","Long Beach","Longmont","Longview","Lorain","Los Angeles","Louisville/Jefferson County","Loveland","Lowell","Lubbock","Lynchburg","Lynn","Lynwood","Macon-Bibb County","Madera","Madison","Malden","Manchester","Manhattan","Mansfield","Manteca","Maple Grove","Margate","Maricopa","Marietta","Marysville","Mayaguez","McAllen","McKinney","McLean","Medford","Melbourne","Memphis","Menifee","Mentor","Merced","Meriden","Meridian","Mesa","Mesquite","Metairie","Methuen Town","Miami","Miami Beach","Miami Gardens","Middletown","Midland","Midwest City","Milford","Millcreek","Milpitas","Milwaukee","Minneapolis","Minnetonka","Minot","Miramar","Mishawaka","Mission","Mission Viejo","Missoula","Missouri City","Mobile","Modesto","Moline","Monroe","Montebello","Monterey Park","Montgomery","Moore","Moreno Valley","Morgan Hill","Mount Pleasant","Mount Prospect","Mount Vernon","Mountain View","Muncie","Murfreesboro","Murray","Murrieta","Nampa","Napa","Naperville","Nashua","Nashville-Davidson","National City","New Bedford","New Braunfels","New Britain","New Brunswick","New Haven","New Orleans","New Rochelle","New York","Newark","Newport Beach","Newport News","Newton","Niagara Falls","Noblesville","Norfolk","Normal","Norman","North Bethesda","North Charleston","North Highlands","North Las Vegas","North Lauderdale","North Little Rock","North Miami","North Miami Beach","North Port","North Richland Hills","Norwalk","Novato","Novi","O'Fallon","Oak Lawn","Oak Park","Oakland","Oakland Park","Ocala","Oceanside","Odessa","Ogden","Oklahoma City","Olathe","Olympia","Omaha","Ontario","Orange","Orem","Orland Park","Orlando","Oro Valley","Oshkosh","Overland Park","Owensboro","Oxnard","Palatine","Palm Bay","Palm Beach Gardens","Palm Coast","Palm Desert","Palm Harbor","Palm Springs","Palmdale","Palo Alto","Paradise","Paramount","Parker","Parma","Pasadena","Pasco","Passaic","Paterson","Pawtucket","Peabody","Pearl City","Pearland","Pembroke Pines","Pensacola","Peoria","Perris","Perth Amboy","Petaluma","Pflugerville","Pharr","Philadelphia","Phoenix","Pico Rivera","Pine Bluff","Pine Hills","Pinellas Park","Pittsburg","Pittsburgh","Pittsfield","Placentia","Plainfield","Plano","Plantation","Pleasanton","Plymouth","Pocatello","Poinciana","Pomona","Pompano Beach","Ponce","Pontiac","Port Arthur","Port Charlotte","Port Orange","Port St. Lucie","Portage","Porterville","Portland","Portsmouth","Potomac","Poway","Providence","Provo","Pueblo","Quincy","Racine","Raleigh","Rancho Cordova","Rancho Cucamonga","Rancho Palos Verdes","Rancho Santa Margarita","Rapid City","Reading","Redding","Redlands","Redmond","Redondo Beach","Redwood City","Reno","Renton","Reston","Revere","Rialto","Richardson","Richland","Richmond","Rio Rancho","Riverside","Riverton","Riverview","Roanoke","Rochester","Rochester Hills","Rock Hill","Rockford","Rocklin","Rockville","Rockwall","Rocky Mount","Rogers","Rohnert Park","Rosemead","Roseville","Roswell","Round Rock","Rowland Heights","Rowlett","Royal Oak","Sacramento","Saginaw","Salem","Salina","Salinas","Salt Lake City","Sammamish","San Angelo","San Antonio","San Bernardino","San Bruno","San Buenaventura (Ventura)","San Clemente","San Diego","San Francisco","San Jacinto","San Jose","San Juan","San Leandro","San Luis Obispo","San Marcos","San Mateo","San Rafael","San Ramon","San Tan Valley","Sandy","Sandy Springs","Sanford","Santa Ana","Santa Barbara","Santa Clara","Santa Clarita","Santa Cruz","Santa Fe","Santa Maria","Santa Monica","Santa Rosa","Santee","Sarasota","Savannah","Sayreville","Schaumburg","Schenectady","Scottsdale","Scranton","Seattle","Severn","Shawnee","Sheboygan","Shoreline","Shreveport","Sierra Vista","Silver Spring","Simi Valley","Sioux City","Sioux Falls","Skokie","Smyrna","Somerville","South Bend","South Gate","South Hill","South Jordan","South San Francisco","South Valley","South Whittier","Southaven","Southfield","Sparks","Spokane","Spokane Valley","Spring","Spring Hill","Spring Valley","Springdale","Springfield","St. Charles","St. Clair Shores","St. Cloud","St. George","St. Joseph","St. Louis","St. Louis Park","St. Paul","St. Peters","St. Petersburg","Stamford","State College","Sterling Heights","Stillwater","Stockton","Stratford","Strongsville","Suffolk","Sugar Land","Summerville","Sunnyvale","Sunrise","Sunrise Manor","Surprise","Syracuse","Tacoma","Tallahassee","Tamarac","Tamiami","Tampa","Taunton","Taylor","Taylorsville","Temecula","Tempe","Temple","Terre Haute","Texas City","The Hammocks","The Villages","The Woodlands","Thornton","Thousand Oaks","Tigard","Tinley Park","Titusville","Toledo","Toms River","Tonawanda","Topeka","Torrance","Town 'n' Country","Towson","Tracy","Trenton","Troy","Trujillo Alto","Tuckahoe","Tucson","Tulare","Tulsa","Turlock","Tuscaloosa","Tustin","Twin Falls","Tyler","Union City","University","Upland","Urbana","Urbandale","Utica","Vacaville","Valdosta","Vallejo","Vancouver","Victoria","Victorville","Vineland","Virginia Beach","Visalia","Vista","Waco","Waipahu","Waldorf","Walnut Creek","Waltham","Warner Robins","Warren","Warwick","Washington","Waterbury","Waterloo","Watsonville","Waukegan","Waukesha","Wauwatosa","Wellington","Wesley Chapel","West Allis","West Babylon","West Covina","West Des Moines","West Hartford","West Haven","West Jordan","West Lafayette","West New York","West Palm Beach","West Sacramento","West Seneca","West Valley City","Westfield","Westland","Westminster","Weston","Weymouth Town","Wheaton","White Plains","Whittier","Wichita","Wichita Falls","Wilmington","Wilson","Winston-Salem","Woodbury","Woodland","Worcester","Wylie","Wyoming","Yakima","Yonkers","Yorba Linda","York","Youngstown","Yuba City","Yucaipa","Yuma"];var Ge$1=["{{location.city_prefix}} {{person.first_name.generic}}{{location.city_suffix}}","{{location.city_prefix}} {{person.first_name.generic}}","{{person.first_name.generic}}{{location.city_suffix}}","{{person.last_name.generic}}{{location.city_suffix}}","{{location.city_name}}"];var Fe$1=["North","East","West","South","New","Lake","Port","Fort"];var Ee$1=["town","ton","land","ville","berg","burgh","boro","borough","bury","view","port","mouth","stad","stead","furt","chester","cester","fort","field","haven","side","shire","worth"];var Ne$1=["Africa","Antarctica","Asia","Australia","Europe","North America","South America"];var Je$1=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (Chagos Archipelago)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Curacao","Cyprus","Czechia","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Faroe Islands","Falkland Islands (Malvinas)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Democratic People's Republic of Korea","Republic of Korea","Kuwait","Kyrgyz Republic","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Macedonia","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard & Jan Mayen Islands","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];var Ie$1=["Adams County","Calhoun County","Carroll County","Clark County","Clay County","Crawford County","Douglas County","Fayette County","Franklin County","Grant County","Greene County","Hamilton County","Hancock County","Henry County","Jackson County","Jefferson County","Johnson County","Lake County","Lawrence County","Lee County","Lincoln County","Logan County","Madison County","Marion County","Marshall County","Monroe County","Montgomery County","Morgan County","Perry County","Pike County","Polk County","Scott County","Union County","Warren County","Washington County","Wayne County","Avon","Bedfordshire","Berkshire","Borders","Buckinghamshire","Cambridgeshire","Central","Cheshire","Cleveland","Clwyd","Cornwall","County Antrim","County Armagh","County Down","County Fermanagh","County Londonderry","County Tyrone","Cumbria","Derbyshire","Devon","Dorset","Dumfries and Galloway","Durham","Dyfed","East Sussex","Essex","Fife","Gloucestershire","Grampian","Greater Manchester","Gwent","Gwynedd County","Hampshire","Herefordshire","Hertfordshire","Highlands and Islands","Humberside","Isle of Wight","Kent","Lancashire","Leicestershire","Lincolnshire","Lothian","Merseyside","Mid Glamorgan","Norfolk","North Yorkshire","Northamptonshire","Northumberland","Nottinghamshire","Oxfordshire","Powys","Rutland","Shropshire","Somerset","South Glamorgan","South Yorkshire","Staffordshire","Strathclyde","Suffolk","Surrey","Tayside","Tyne and Wear","Warwickshire","West Glamorgan","West Midlands","West Sussex","West Yorkshire","Wiltshire","Worcestershire"];var Ke$1={cardinal:["North","East","South","West"],cardinal_abbr:["N","E","S","W"],ordinal:["Northeast","Northwest","Southeast","Southwest"],ordinal_abbr:["NE","NW","SE","SW"]};var Oe$1=["#####","#####-####"];var xe=["Apt. ###","Suite ###"];var ze$1=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];var Ve$1=["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];var Ye$1={normal:"{{location.buildingNumber}} {{location.street}}",full:"{{location.buildingNumber}} {{location.street}} {{location.secondaryAddress}}"};var je$1=["10th Street","11th Street","12th Street","13th Street","14th Street","15th Street","16th Street","1st Avenue","1st Street","2nd Avenue","2nd Street","3rd Avenue","3rd Street","4th Avenue","4th Street","5th Avenue","5th Street","6th Avenue","6th Street","7th Avenue","7th Street","8th Avenue","8th Street","9th Street","A Street","Abbey Road","Adams Avenue","Adams Street","Airport Road","Albany Road","Albert Road","Albion Street","Alexandra Road","Alfred Street","Alma Street","Ash Close","Ash Grove","Ash Road","Ash Street","Aspen Close","Atlantic Avenue","Avenue Road","Back Lane","Baker Street","Balmoral Road","Barn Close","Barton Road","Bath Road","Bath Street","Bay Street","Beach Road","Bedford Road","Beech Close","Beech Drive","Beech Grove","Beech Road","Beechwood Avenue","Bell Lane","Belmont Road","Birch Avenue","Birch Close","Birch Grove","Birch Road","Blind Lane","Bluebell Close","Boundary Road","Bramble Close","Bramley Close","Bridge Road","Bridge Street","Broad Lane","Broad Street","Broadway","Broadway Avenue","Broadway Street","Brook Lane","Brook Road","Brook Street","Brookside","Buckingham Road","Cambridge Street","Canal Street","Castle Close","Castle Lane","Castle Road","Castle Street","Cavendish Road","Cedar Avenue","Cedar Close","Cedar Grove","Cedar Road","Cedar Street","Cemetery Road","Center Avenue","Center Road","Center Street","Central Avenue","Central Street","Chapel Close","Chapel Hill","Chapel Road","Chapel Street","Charles Street","Cherry Close","Cherry Street","Cherry Tree Close","Chester Road","Chestnut Close","Chestnut Drive","Chestnut Grove","Chestnut Street","Church Avenue","Church Close","Church Hill","Church Lane","Church Path","Church Road","Church Street","Church View","Church Walk","Claremont Road","Clarence Road","Clarence Street","Clarendon Road","Clark Street","Clay Lane","Cleveland Street","Cliff Road","Clifton Road","Clinton Street","College Avenue","College Street","Columbia Avenue","Commerce Street","Commercial Road","Commercial Street","Common Lane","Coronation Avenue","Coronation Road","County Line Road","County Road","Court Street","Cow Lane","Crescent Road","Cromwell Road","Cross Lane","Cross Street","Crown Street","Cumberland Street","Dale Street","Dark Lane","Davis Street","Depot Street","Derby Road","Derwent Close","Devonshire Road","Division Street","Douglas Road","Duke Street","E 10th Street","E 11th Street","E 12th Street","E 14th Street","E 1st Street","E 2nd Street","E 3rd Street","E 4th Avenue","E 4th Street","E 5th Street","E 6th Avenue","E 6th Street","E 7th Street","E 8th Street","E 9th Street","E Bridge Street","E Broad Street","E Broadway","E Broadway Street","E Cedar Street","E Center Street","E Central Avenue","E Church Street","E Elm Street","E Franklin Street","E Front Street","E Grand Avenue","E High Street","E Jackson Street","E Jefferson Street","E Main","E Main Street","E Maple Street","E Market Street","E North Street","E Oak Street","E Park Avenue","E Pine Street","E River Road","E South Street","E State Street","E Union Street","E Walnut Street","E Washington Avenue","E Washington Street","E Water Street","East Avenue","East Road","East Street","Edward Street","Elm Close","Elm Grove","Elm Road","Elm Street","Euclid Avenue","Fairfield Road","Farm Close","Ferry Road","Field Close","Field Lane","First Avenue","First Street","Fore Street","Forest Avenue","Forest Road","Fourth Avenue","Franklin Avenue","Franklin Road","Franklin Street","Front Street","Frontage Road","Garden Close","Garden Street","George Street","Gladstone Road","Glebe Close","Gloucester Road","Gordon Road","Gordon Street","Grand Avenue","Grange Avenue","Grange Close","Grange Road","Grant Street","Green Close","Green Lane","Green Street","Greenville Road","Greenway","Greenwood Road","Grove Lane","Grove Road","Grove Street","Hall Lane","Hall Street","Harrison Avenue","Harrison Street","Hawthorn Avenue","Hawthorn Close","Hazel Close","Hazel Grove","Heath Road","Heather Close","Henry Street","Heron Close","Hickory Street","High Road","High Street","Highfield Avenue","Highfield Close","Highfield Road","Highland Avenue","Hill Road","Hill Street","Hillside","Hillside Avenue","Hillside Close","Hillside Road","Holly Close","Honeysuckle Close","Howard Road","Howard Street","Jackson Avenue","Jackson Street","James Street","Jefferson Avenue","Jefferson Street","Johnson Street","Jubilee Close","Juniper Close","Kent Road","Kestrel Close","King Street","King's Road","Kingfisher Close","Kings Highway","Kingsway","Laburnum Grove","Lafayette Street","Lake Avenue","Lake Drive","Lake Road","Lake Street","Lancaster Road","Lansdowne Road","Larch Close","Laurel Close","Lawrence Street","Lee Street","Liberty Street","Lime Grove","Lincoln Avenue","Lincoln Highway","Lincoln Road","Lincoln Street","Locust Street","Lodge Close","Lodge Lane","London Road","Long Lane","Low Road","Madison Avenue","Madison Street","Main","Main Avenue","Main Road","Main Street","Main Street E","Main Street N","Main Street S","Main Street W","Manchester Road","Manor Close","Manor Drive","Manor Gardens","Manor Road","Manor Way","Maple Avenue","Maple Close","Maple Drive","Maple Road","Maple Street","Market Place","Market Square","Market Street","Marlborough Road","Marsh Lane","Martin Luther King Boulevard","Martin Luther King Drive","Martin Luther King Jr Boulevard","Mary Street","Mayfield Road","Meadow Close","Meadow Drive","Meadow Lane","Meadow View","Meadow Way","Memorial Drive","Middle Street","Mill Close","Mill Lane","Mill Road","Mill Street","Milton Road","Milton Street","Monroe Street","Moor Lane","Moss Lane","Mount Pleasant","Mount Street","Mulberry Street","N 1st Street","N 2nd Street","N 3rd Street","N 4th Street","N 5th Street","N 6th Street","N 7th Street","N 8th Street","N 9th Street","N Bridge Street","N Broad Street","N Broadway","N Broadway Street","N Cedar Street","N Center Street","N Central Avenue","N Chestnut Street","N Church Street","N College Street","N Court Street","N Division Street","N East Street","N Elm Street","N Franklin Street","N Front Street","N Harrison Street","N High Street","N Jackson Street","N Jefferson Street","N Lincoln Street","N Locust Street","N Main","N Main Avenue","N Main Street","N Maple Street","N Market Street","N Monroe Street","N Oak Street","N Park Street","N Pearl Street","N Pine Street","N Poplar Street","N Railroad Street","N State Street","N Union Street","N Walnut Street","N Washington Avenue","N Washington Street","N Water Street","Nelson Road","Nelson Street","New Lane","New Road","New Street","Newton Road","Nightingale Close","Norfolk Road","North Avenue","North Lane","North Road","North Street","Northfield Road","Oak Avenue","Oak Drive","Oak Lane","Oak Road","Oak Street","Oakfield Road","Oaklands","Old Lane","Old Military Road","Old Road","Old State Road","Orchard Drive","Orchard Lane","Orchard Road","Orchard Street","Oxford Road","Oxford Street","Park Avenue","Park Crescent","Park Drive","Park Lane","Park Place","Park Road","Park Street","Park View","Parkside","Pearl Street","Pennsylvania Avenue","Pine Close","Pine Grove","Pine Street","Pinfold Lane","Pleasant Street","Poplar Avenue","Poplar Close","Poplar Road","Poplar Street","Post Road","Pound Lane","Princes Street","Princess Street","Priory Close","Priory Road","Prospect Avenue","Prospect Place","Prospect Road","Prospect Street","Quarry Lane","Quarry Road","Queen's Road","Railroad Avenue","Railroad Street","Railway Street","Rectory Close","Rectory Lane","Richmond Close","Richmond Road","Ridge Road","River Road","River Street","Riverside","Riverside Avenue","Riverside Drive","Roman Road","Roman Way","Rowan Close","Russell Street","S 10th Street","S 14th Street","S 1st Avenue","S 1st Street","S 2nd Street","S 3rd Street","S 4th Street","S 5th Street","S 6th Street","S 7th Street","S 8th Street","S 9th Street","S Bridge Street","S Broad Street","S Broadway","S Broadway Street","S Center Street","S Central Avenue","S Chestnut Street","S Church Street","S College Street","S Division Street","S East Street","S Elm Street","S Franklin Street","S Front Street","S Grand Avenue","S High Street","S Jackson Street","S Jefferson Street","S Lincoln Street","S Main","S Main Avenue","S Main Street","S Maple Street","S Market Street","S Mill Street","S Monroe Street","S Oak Street","S Park Street","S Pine Street","S Railroad Street","S State Street","S Union Street","S Walnut Street","S Washington Avenue","S Washington Street","S Water Street","S West Street","Salisbury Road","Sandringham Road","Sandy Lane","School Close","School Lane","School Road","School Street","Second Avenue","Silver Street","Skyline Drive","Smith Street","Somerset Road","South Avenue","South Drive","South Road","South Street","South View","Spring Gardens","Spring Street","Springfield Close","Springfield Road","Spruce Street","St Andrew's Road","St Andrews Close","St George's Road","St John's Road","St Mary's Close","St Mary's Road","Stanley Road","Stanley Street","State Avenue","State Line Road","State Road","State Street","Station Road","Station Street","Stoney Lane","Sycamore Avenue","Sycamore Close","Sycamore Drive","Sycamore Street","Talbot Road","Tennyson Road","The Avenue","The Beeches","The Causeway","The Chase","The Coppice","The Copse","The Crescent","The Croft","The Dell","The Drive","The Fairway","The Glebe","The Grange","The Green","The Grove","The Hawthorns","The Lane","The Laurels","The Limes","The Maltings","The Meadows","The Mews","The Mount","The Oaks","The Orchard","The Oval","The Paddock","The Paddocks","The Poplars","The Ridgeway","The Ridings","The Rise","The Sidings","The Spinney","The Square","The Willows","The Woodlands","Third Avenue","Third Street","Tower Road","Trinity Road","Tudor Close","Union Avenue","Union Street","University Avenue","University Drive","Valley Road","Veterans Memorial Drive","Veterans Memorial Highway","Vicarage Close","Vicarage Lane","Vicarage Road","Victoria Place","Victoria Road","Victoria Street","Vine Street","W 10th Street","W 11th Street","W 12th Street","W 14th Street","W 1st Street","W 2nd Street","W 3rd Street","W 4th Avenue","W 4th Street","W 5th Street","W 6th Avenue","W 6th Street","W 7th Street","W 8th Street","W 9th Street","W Bridge Street","W Broad Street","W Broadway","W Broadway Avenue","W Broadway Street","W Center Street","W Central Avenue","W Chestnut Street","W Church Street","W Division Street","W Elm Street","W Franklin Street","W Front Street","W Grand Avenue","W High Street","W Jackson Street","W Jefferson Street","W Lake Street","W Main","W Main Street","W Maple Street","W Market Street","W Monroe Street","W North Street","W Oak Street","W Park Street","W Pine Street","W River Road","W South Street","W State Street","W Union Street","W Walnut Street","W Washington Avenue","W Washington Street","Walnut Close","Walnut Street","Warren Close","Warren Road","Washington Avenue","Washington Boulevard","Washington Road","Washington Street","Water Lane","Water Street","Waterloo Road","Waterside","Watery Lane","Waverley Road","Well Lane","Wellington Road","Wellington Street","West Avenue","West End","West Lane","West Road","West Street","West View","Western Avenue","Western Road","Westfield Road","Westgate","William Street","Willow Close","Willow Drive","Willow Grove","Willow Road","Willow Street","Windermere Road","Windmill Close","Windmill Lane","Windsor Avenue","Windsor Close","Windsor Drive","Wood Lane","Wood Street","Woodland Close","Woodland Road","Woodlands","Woodlands Avenue","Woodlands Close","Woodlands Road","Woodside","Woodside Road","Wren Close","Yew Tree Close","York Road","York Street"];var qe$1=["{{person.first_name.generic}} {{location.street_suffix}}","{{person.last_name.generic}} {{location.street_suffix}}","{{location.street_name}}"];var Ue$1=["Alley","Avenue","Branch","Bridge","Brook","Brooks","Burg","Burgs","Bypass","Camp","Canyon","Cape","Causeway","Center","Centers","Circle","Circles","Cliff","Cliffs","Club","Common","Corner","Corners","Course","Court","Courts","Cove","Coves","Creek","Crescent","Crest","Crossing","Crossroad","Curve","Dale","Dam","Divide","Drive","Drives","Estate","Estates","Expressway","Extension","Extensions","Fall","Falls","Ferry","Field","Fields","Flat","Flats","Ford","Fords","Forest","Forge","Forges","Fork","Forks","Fort","Freeway","Garden","Gardens","Gateway","Glen","Glens","Green","Greens","Grove","Groves","Harbor","Harbors","Haven","Heights","Highway","Hill","Hills","Hollow","Inlet","Island","Islands","Isle","Junction","Junctions","Key","Keys","Knoll","Knolls","Lake","Lakes","Land","Landing","Lane","Light","Lights","Loaf","Lock","Locks","Lodge","Loop","Mall","Manor","Manors","Meadow","Meadows","Mews","Mill","Mills","Mission","Motorway","Mount","Mountain","Mountains","Neck","Orchard","Oval","Overpass","Park","Parks","Parkway","Parkways","Pass","Passage","Path","Pike","Pine","Pines","Place","Plain","Plains","Plaza","Point","Points","Port","Ports","Prairie","Radial","Ramp","Ranch","Rapid","Rapids","Rest","Ridge","Ridges","River","Road","Roads","Route","Row","Rue","Run","Shoal","Shoals","Shore","Shores","Skyway","Spring","Springs","Spur","Spurs","Square","Squares","Station","Stravenue","Stream","Street","Streets","Summit","Terrace","Throughway","Trace","Track","Trafficway","Trail","Tunnel","Turnpike","Underpass","Union","Unions","Valley","Valleys","Via","Viaduct","View","Views","Village","Villages","Ville","Vista","Walk","Walks","Wall","Way","Ways","Well","Wells"];var so={building_number:He$1,city_name:We$1,city_pattern:Ge$1,city_prefix:Fe$1,city_suffix:Ee$1,continent:Ne$1,country:Je$1,county:Ie$1,direction:Ke$1,postcode:Oe$1,secondary_address:xe,state:ze$1,state_abbr:Ve$1,street_address:Ye$1,street_name:je$1,street_pattern:qe$1,street_suffix:Ue$1},Ze$1=so;var _e$1=["a","ab","abbas","abduco","abeo","abscido","absconditus","absens","absorbeo","absque","abstergo","absum","abundans","abutor","accedo","accendo","acceptus","accommodo","accusamus","accusantium","accusator","acer","acerbitas","acervus","acidus","acies","acquiro","acsi","ad","adamo","adaugeo","addo","adduco","ademptio","adeo","adeptio","adfectus","adfero","adficio","adflicto","adhaero","adhuc","adicio","adimpleo","adinventitias","adipisci","adipiscor","adiuvo","administratio","admiratio","admitto","admoneo","admoveo","adnuo","adopto","adsidue","adstringo","adsuesco","adsum","adulatio","adulescens","aduro","advenio","adversus","advoco","aedificium","aeger","aegre","aegrotatio","aegrus","aeneus","aequitas","aequus","aer","aestas","aestivus","aestus","aetas","aeternus","ager","aggero","aggredior","agnitio","agnosco","ago","ait","aiunt","alias","alienus","alii","alioqui","aliqua","aliquam","aliquid","alius","allatus","alo","alter","altus","alveus","amaritudo","ambitus","ambulo","amet","amicitia","amiculum","amissio","amita","amitto","amo","amor","amoveo","amplexus","amplitudo","amplus","ancilla","angelus","angulus","angustus","animadverto","animi","animus","annus","anser","ante","antea","antepono","antiquus","aperiam","aperio","aperte","apostolus","apparatus","appello","appono","appositus","approbo","apto","aptus","apud","aqua","ara","aranea","arbitro","arbor","arbustum","arca","arceo","arcesso","architecto","arcus","argentum","argumentum","arguo","arma","armarium","aro","ars","articulus","artificiose","arto","arx","ascisco","ascit","asper","asperiores","aspernatur","aspicio","asporto","assentator","assumenda","astrum","at","atavus","ater","atque","atqui","atrocitas","atrox","attero","attollo","attonbitus","auctor","auctus","audacia","audax","audentia","audeo","audio","auditor","aufero","aureus","aurum","aut","autem","autus","auxilium","avaritia","avarus","aveho","averto","baiulus","balbus","barba","bardus","basium","beatae","beatus","bellicus","bellum","bene","beneficium","benevolentia","benigne","bestia","bibo","bis","blandior","blanditiis","bonus","bos","brevis","cado","caecus","caelestis","caelum","calamitas","calcar","calco","calculus","callide","campana","candidus","canis","canonicus","canto","capillus","capio","capitulus","capto","caput","carbo","carcer","careo","caries","cariosus","caritas","carmen","carpo","carus","casso","caste","casus","catena","caterva","cattus","cauda","causa","caute","caveo","cavus","cedo","celebrer","celer","celo","cena","cenaculum","ceno","censura","centum","cerno","cernuus","certe","certus","cervus","cetera","charisma","chirographum","cibo","cibus","cicuta","cilicium","cimentarius","ciminatio","cinis","circumvenio","cito","civis","civitas","clam","clamo","claro","clarus","claudeo","claustrum","clementia","clibanus","coadunatio","coaegresco","coepi","coerceo","cogito","cognatus","cognomen","cogo","cohaero","cohibeo","cohors","colligo","collum","colo","color","coma","combibo","comburo","comedo","comes","cometes","comis","comitatus","commemoro","comminor","commodi","commodo","communis","comparo","compello","complectus","compono","comprehendo","comptus","conatus","concedo","concido","conculco","condico","conduco","confero","confido","conforto","confugo","congregatio","conicio","coniecto","conitor","coniuratio","conor","conqueror","conscendo","consectetur","consequatur","consequuntur","conservo","considero","conspergo","constans","consuasor","contabesco","contego","contigo","contra","conturbo","conventus","convoco","copia","copiose","cornu","corona","corporis","corpus","correptius","corrigo","corroboro","corrumpo","corrupti","coruscus","cotidie","crapula","cras","crastinus","creator","creber","crebro","credo","creo","creptio","crepusculum","cresco","creta","cribro","crinis","cruciamentum","crudelis","cruentus","crur","crustulum","crux","cubicularis","cubitum","cubo","cui","cuius","culpa","culpo","cultellus","cultura","cum","cumque","cunabula","cunae","cunctatio","cupiditas","cupiditate","cupio","cuppedia","cupressus","cur","cura","curatio","curia","curiositas","curis","curo","curriculum","currus","cursim","curso","cursus","curto","curtus","curvo","custodia","damnatio","damno","dapifer","debeo","debilito","debitis","decens","decerno","decet","decimus","decipio","decor","decretum","decumbo","dedecor","dedico","deduco","defaeco","defendo","defero","defessus","defetiscor","deficio","defleo","defluo","defungo","degenero","degero","degusto","deinde","delectatio","delectus","delego","deleniti","deleo","delibero","delicate","delinquo","deludo","demens","demergo","demitto","demo","demonstro","demoror","demulceo","demum","denego","denique","dens","denuncio","denuo","deorsum","depereo","depono","depopulo","deporto","depraedor","deprecator","deprimo","depromo","depulso","deputo","derelinquo","derideo","deripio","deserunt","desidero","desino","desipio","desolo","desparatus","despecto","dicta","dignissimos","distinctio","dolor","dolore","dolorem","doloremque","dolores","doloribus","dolorum","ducimus","ea","eaque","earum","eius","eligendi","enim","eos","error","esse","est","et","eum","eveniet","ex","excepturi","exercitationem","expedita","explicabo","facere","facilis","fuga","fugiat","fugit","harum","hic","id","illo","illum","impedit","in","incidunt","infit","inflammatio","inventore","ipsa","ipsam","ipsum","iste","itaque","iure","iusto","labore","laboriosam","laborum","laudantium","libero","magnam","magni","maiores","maxime","minima","minus","modi","molestiae","molestias","mollitia","nam","natus","necessitatibus","nemo","neque","nesciunt","nihil","nisi","nobis","non","nostrum","nulla","numquam","occaecati","ocer","odio","odit","officia","officiis","omnis","optio","paens","pariatur","patior","patria","patrocinor","patruus","pauci","paulatim","pauper","pax","peccatus","pecco","pecto","pectus","pecus","peior","pel","perferendis","perspiciatis","placeat","porro","possimus","praesentium","provident","quae","quaerat","quam","quas","quasi","qui","quia","quibusdam","quidem","quis","quisquam","quo","quod","quos","ratione","recusandae","reiciendis","rem","repellat","repellendus","reprehenderit","repudiandae","rerum","saepe","sapiente","sed","sequi","similique","sint","sit","socius","sodalitas","sol","soleo","solio","solitudo","solium","sollers","sollicito","solum","solus","soluta","solutio","solvo","somniculosus","somnus","sonitus","sono","sophismata","sopor","sordeo","sortitus","spargo","speciosus","spectaculum","speculum","sperno","spero","spes","spiculum","spiritus","spoliatio","sponte","stabilis","statim","statua","stella","stillicidium","stipes","stips","sto","strenuus","strues","studio","stultus","suadeo","suasoria","sub","subito","subiungo","sublime","subnecto","subseco","substantia","subvenio","succedo","succurro","sufficio","suffoco","suffragium","suggero","sui","sulum","sum","summa","summisse","summopere","sumo","sumptus","sunt","supellex","super","suppellex","supplanto","suppono","supra","surculus","surgo","sursum","suscipio","suscipit","suspendo","sustineo","suus","synagoga","tabella","tabernus","tabesco","tabgo","tabula","taceo","tactus","taedium","talio","talis","talus","tam","tamdiu","tamen","tametsi","tamisium","tamquam","tandem","tantillus","tantum","tardus","tego","temeritas","temperantia","templum","tempora","tempore","temporibus","temptatio","tempus","tenax","tendo","teneo","tener","tenetur","tenuis","tenus","tepesco","tepidus","ter","terebro","teres","terga","tergeo","tergiversatio","tergo","tergum","termes","terminatio","tero","terra","terreo","territo","terror","tersus","tertius","testimonium","texo","textilis","textor","textus","thalassinus","theatrum","theca","thema","theologus","thermae","thesaurus","thesis","thorax","thymbra","thymum","tibi","timidus","timor","titulus","tolero","tollo","tondeo","tonsor","torqueo","torrens","tot","totam","totidem","toties","totus","tracto","trado","traho","trans","tredecim","tremo","trepide","tres","tribuo","tricesimus","triduana","tripudio","tristis","triumphus","trucido","truculenter","tubineus","tui","tum","tumultus","tunc","turba","turbo","turpis","tutamen","tutis","tyrannus","uberrime","ubi","ulciscor","ullam","ullus","ulterius","ultio","ultra","umbra","umerus","umquam","una","unde","undique","universe","unus","urbanus","urbs","uredo","usitas","usque","ustilo","ustulo","usus","ut","uter","uterque","utilis","utique","utor","utpote","utrimque","utroque","utrum","uxor","vaco","vacuus","vado","vae","valde","valens","valeo","valetudo","validus","vallum","vapulus","varietas","varius","vehemens","vel","velit","velociter","velum","velut","venia","veniam","venio","ventito","ventosus","ventus","venustas","ver","verbera","verbum","vere","verecundia","vereor","vergo","veritas","veritatis","vero","versus","verto","verumtamen","verus","vesco","vesica","vesper","vespillo","vester","vestigium","vestrum","vetus","via","vicinus","vicissitudo","victoria","victus","videlicet","video","viduo","vigilo","vigor","vilicus","vilis","vilitas","villa","vinco","vinculum","vindico","vinitor","vinum","vir","virga","virgo","viridis","viriliter","virtus","vis","viscus","vita","vitae","vitiosus","vitium","vito","vivo","vix","vobis","vociferor","voco","volaticus","volo","volubilis","voluntarius","volup","voluptas","voluptate","voluptatem","voluptates","voluptatibus","voluptatum","volutabrum","volva","vomer","vomica","vomito","vorago","vorax","voro","vos","votum","voveo","vox","vulariter","vulgaris","vulgivagus","vulgo","vulgus","vulnero","vulnus","vulpes","vulticulus","xiphias"];var uo={word:_e$1},Qe$1=uo;var co={title:"English",code:"en",language:"en",endonym:"English",dir:"ltr",script:"Latn"},Xe$1=co;var $e$1=['"Awaken, My Love!"',"(What's The Story) Morning Glory?","- Tragedy +","13 Reasons Why (Season 3)","21st Century Breakdown","30 De Febrero","432 Hz Deep Healing","5-Star","528 Hz Meditation Music","54+1","8 Mile","808s & Heartbreak","9 To 5 And Odd Jobs","A Beautiful Lie","A Day At The Races","A Day Without Rain","A Fever You Can't Sweat Out","A Gangsta's Pain","A Gift & A Curse","A Hard Day's Night","A Head Full Of Dreams","A Kind Of Magic","A Million Ways To Murder","A Moment Apart","A Song For Every Moon","A Thousand Suns","A Winter Romance","ABBA","AI YoungBoy","AJ Tracey","Act One","After Hours","Agent Provocateur","All About You","All I Know So Far: Setlist","All Or Nothing","All Out","All Over The Place","All Stand Together","All The Lost Souls","All The Things I Never Said","All Things Must Pass","Alleen","Alright, Still","Alta Suciedad","America","American Heartbreak","American Teen","And Justice For None","Animal Songs","Another Friday Night","Anything Goes","Ao Vivo Em S\xE3o Paulo","Ao Vivo No Ibirapuera","Apricot Princess","Aqui E Agora (Ao Vivo)","Arcane League Of Legends","Ardipithecus","Aretha Now","Around The Fur","Arrival","Artist 2.0","As She Pleases","Ascend","Ashlyn","Astro Lounge","At Night, Alone.","At. Long. Last. ASAP","Atlas","Audioslave","Aura","Austin","Awake","Away From The Sun","Ayayay!","Baby On Baby","Back For Everything","Back From The Edge","Back In Black","Back To Black","Back To The Game","Bad","Bah\xEDa Ducati","Baila","Barbie The Album","Battleground","Bayou Country","Bcos U Will Never B Free","Be","Be Here Now","Beautiful Mind","Beautiful Thugger Girls","Beautiful Trauma","Beauty And The Beast","Beggars Banquet","Being Funny In A Foreign Language","Berlin Lebt","Berry Is On Top","Best White Noise For Baby Sleep - Loopable With No Fade","Big Baby DRAM","Bigger, Better, Faster, More!","Billy Talent II","Black Star Elephant","Blackout","Blank Face LP","Bleach","Blizzard Of Ozz","Blonde","Blood Sugar Sex Magik","Bloom","Blowin' Your Mind!","Blu Celeste","Blue","Blue Banisters","Blue Hawaii","Blue Neighbourhood","Bluebird Days","Bobby Tarantino","Bobby Tarantino II","Bon Iver","Born Pink","Born To Run","Brand New Eyes","Break The Cycle","Breakfast In America","Breakthrough","Brett Young","Bridge Over Troubled Water","Bright: The Album","Brol","Buds","Buena Vista Social Club","Built On Glass","Bury Me At Makeout Creek","Busyhead","By The Way","CB6","CNCO","California Sunrise","Californication","Call Me Irresponsible","Calm","Camino Palmero","Camp","Caracal","Carbon Fiber Hits","Carnival","Carry On","Cartel De Santa","Certified Lover Boy","Chaaama","Chama Meu Nome","Chapter 1: Snake Oil","Chapter 2: Swamp Savant","Chapter One","Charlie's Angels","Cherry Bomb","Chief","Chocolate Factory","Chosen","Chris Brown","Christina Aguilera","Chromatica","Church","City Of Evil","Clandestino","Clouds","Coco","Collision Course","Colour Vision","Combat Rock","Come Around Sundown","Come Away With Me","Come Home The Kids Miss You","Come What(ever) May","Commando","Common Sense","Communion","Conditions","Confident","Confrontation","Control The Streets, Volume 2","Corinne Bailey Rae","Costello Music","Cottonwood","Covers, Vol. 2","Cozy Tapes Vol. 2: Too Cozy","Crash Talk","Crazy Love","Crazysexycool","Crowded House","Cruisin' With Junior H","Culture","Current Mood","DS2","Dale","Danger Days: The True Lives Of The Fabulous Killjoys","Dangerous Woman","Dangerous: The Double Album","Dark Horse","Day69","Daydream","De Fiesta","De Viaje","DeAnn","Death Race For Love","Delirium","Delta","Demidevil","Depression Cherry","Descendants","Desgenerados Mixtape","Destin","Destiny Fulfilled","Desvelado","Detroit 2","Dex Meets Dexter","Dharma","Die A Legend","Different World","Dig Your Roots","Digital Druglord","Dirt","Disclaimer I / II","Discovery","Disraeli Gears","Disumano","Dizzy Up The Girl","Don't Play That Song","Donda","Donde Quiero Estar","Doo-Wops & Hooligans","Down The Way","Dr. Feelgood","Dream Your Life Away","Dreaming Out Loud","Drip Harder","Drive","Drones","Dropped Outta College","Drowning","Dua Warna Cinta","Dulce Beat","Dusty In Memphis","Dutty Rock","Dying To Live","ENR","East Atlanta Love Letter","Editorial","Edna","El Abayarde","El Amor En Los Tiempos Del Perreo","El Camino","El Comienzo","El Dorado","El Karma","El Mal Querer","El Malo","El Trabajo Es La Suerte","El Viaje De Copperpot","Electric Ladyland","Emotion","En Tus Planes","Endless Summer Vacation","Enter The Wu-Tang (36 Chambers)","Equals (=)","Estrella","Euphoria","Europop","Evermore","Every Kingdom","Everyday Life","Evolve","Expectations","Face Yourself","Facelift","Fallin'","Fancy You","Fantas\xEDa","Favourite Worst Nightmare","Fear Of The Dark","Fearless","Feel Something","Feels Like Home","Femme Fatale","Ferxxocalipsis","Fifty Shades Darker","Fifty Shades Freed","Fifty Shades Of Grey","Final (Vol.1)","Finding Beauty In Negative Spaces","Fine Line","First Impressions Of Earth","First Steps","Five Seconds Flat","Folklore","For Emma, Forever Ago","Forajido EP 1","Forever","Forever Young","Formula Of Love: O+T=<3","Free 6lack","Freudian","Frozen II","Full Moon Fever","Funhouse","Funk Wav Bounces Vol.1","Future History","FutureSex/LoveSounds","Fuzzybrain","Gallery","Gangsta's Paradise","Gemini","Gemini Rights","Generationwhy","Get A Grip","Get Up","Gettin' Old","Girl","Gladiator","Glisten","Globalization","Gloria","Glory Days","God's Project","Gold Skies","Golden","Good Evening","Good Thing","Goodbye Yellow Brick Road","Gossip Columns","Got Your Six","Graceland","Graduation","Grand Champ","Grandson, Vol. 1","Green River","Guerra","Ha*Ash Primera Fila - Hecho Realidad","Haiz","Hamilton","Happy Endings","Harry Styles","Hasta La Ra\xEDz","Hatful Of Hollow","Head In The Clouds","Heard It In A Past Life","Heart Shaped World","Heartbeat City","Heartbreak On A Full Moon / Cuffing Season - 12 Days Of Christmas","Heaven Or Hell","Heaven knows","Hellbilly Deluxe","Hellboy","Help!","Her Loss","Here Comes The Cowboy","Hey World","High School Musical","High Tide In The Snake's Nest","Historias De Un Capricornio","Hndrxx","Hombres G (Devu\xE9lveme A Mi Chica)","Homerun","Homework","Hot Fuss","Hot Pink","Hot Sauce / Hello Future","Hot Space","Hotel Diablo","Houses Of The Holy","How Big, How Blue, How Beautiful","How I'm Feeling","How To Be Human","How To Save A Life","How To: Friend, Love, Freefall","Hozier","Human","Huncho Jack, Jack Huncho","Hunter Hayes","Hysteria","I Am...Sasha Fierce","I Can't Handle Change","I Met You When I Was 18. (The Playlist)","I Never Liked You","I Never Loved A Man The Way I Love You","I See You","I Think You Think Too Much Of Me","I Used To Know Her","I Used To Think I Could Fly","I'm Comin' Over","Ich & Keine Maske","If You Can Believe Your Eyes & Ears","Il Ballo Della Vita","Ill Communication","Imagination & The Misfit Kid","Imagine","Immortalized","In A Perfect World...","In Colour","In My Own Words","In Rainbows","In Return","In The Lonely Hour","Infest","Innuendo","Inter Shibuya - La Mafia","Interstellar","Is This It","It Was Written","It's Not Me, It's You","It's Only Me","Ivory","JackBoys","Jamie","Jazz","Jibrail & Iblis","Jordi","Jordin Sparks","Jose","Just As I Am","Just Cause Y'all Waited 2","Just Like You","Justified","K-12 / After School","K.I.D.S.","K.O.","K.O.B. Live","KG0516","KOD","Kane Brown","Kid A","Kid Krow","Kids See Ghosts","Kids in Love","Kinks (You Really Got Me)","Know-It-All","Konvicted","Kring","LANY","LM5","La Criatura","La Flaca","La Melodia De La Calle","La Revolucion","Lady Lady","Lady Wood","Langit Mong Bughaw","Las Que No Iban A Salir","Last Day Of Summer","Last Year Was Complicated","Layers","Layover","Lazarus","Led Zeppelin","Left Of The Middle","Leftoverture","Legends Never Die","Let's Skip To The Wedding","Let's Talk About Love","Licensed To Ill","Life In Cartoon Motion","Life Thru A Lens","Lifelines","Like..?","Lil Big Pac","Lil Boat","Lil Boat 2","Lil Boat 3.5","Lil Kiwi","Lil Pump","Limon Y Sal","Listen Without Prejudice","Little Voice","Live On Red Barn Radio I & II","Lo Que And\xE1bamos Buscando","Lofi Fruits Music 2021","London Calling","Los Campeones Del Pueblo","Los Extraterrestres","Los Favoritos 2","Lost","Lost In Love","Loud","Love Sick","Love Story","Love Stuff","Love Yourself: Tear","Lover","Luca Brasi 2: Gangsta Grillz","Lust For Life","Luv Is Rage","M!ssundaztood","Ma Fleur","Made In Lagos","Mafia Bidness","Magazines Or Novels","Mainstream Sellout","Majestic","Make It Big","Make Yourself","Making Mirrors","Mamma Mia! Here We Go Again","Man Of The Woods","Manic","Me And My Gang","Meduza","Meet The Orphans","Meet The Woo","Melim","Mellon Collie And The Infinite Sadness","Melly vs. Melvin","Memories...Do Not Open","Menagerie","Midnights","Minecraft - Volume Alpha","Minutes To Midnight","Mix Pa Llorar En Tu Cuarto","Modo Avi\xF3n","Monkey Business","Mono.","Montana","Montevallo","Moosetape","Morning View","Motivan2","Moving Pictures","Mr. Davis","Mr. Misunderstood","Mulan","Mura Masa","Music From The Edge Of Heaven","Music Of The Sun","My House","My Kinda Party","My Krazy Life","My Liver Will Handle What My Heart Can't","My Moment","My Own Lane","My Turn","My Worlds","Na Praia (Ao Vivo)","Nakamura","Nation Of Two","Navegando","Need You Now","Neon Future III","Neotheater","Never Trust A Happy Song","New English","News Of The World","Nicole","Night & Day","Nimmerland","Nimrod","Nine Track Mind","No Angel","No Me Pidas Perd\xF3n","No More Drama","No Protection","No Strings Attached","No Time To Die","Nobody Is Listening","Non Stop Erotic Cabaret","Non-Fiction","Northsbest","Nostalgia","Nostalgia, Ultra","Notes On A Conditional Form","Now Or Never","O Embaixador (Ao Vivo)","O My Heart","OK Computer","Ocean","Ocean Avenue","Ocean Eyes","Odisea","Oh My My","Oh, What A Life","On The 6","One In A Million","One More Light","One Of These Nights","Open Up And Say...Ahh!","Ordinary Man","Origins","Out Of The Blue","Over It","OzuTochi","PTSD","Pa Las Baby's Y Belikeada","Pa Que Hablen","Pa' Luego Es Tarde","Pa' Otro La 'O","Pablo Honey","Pain Is Love","Pain Is Temporary","Painting Pictures","Palmen Aus Plastik 2","Para Mi Ex","Para Siempre","Partners In Crime","Pawn Shop","Pegasus / Neon Shark VS Pegasus","Pet Sounds","Piece By Piece","Pier Pressure","Pineapple Sunrise","Piseiro 2020 Ao Vivo","Planet Pit","Plans","Play Deep","Playa Saturno","Por Primera Vez","Por Vida","Positions","Post Human: Survival Horror","Poster Girl","Prazer, Eu Sou Ferrugem (Ao Vivo)","Pretty Girls Like Trap Music","Pretty. Odd.","Prince Royce","Prisma","Prometo","Providence","Puberty 2","Punisher","Purgatory","Purple Rain","Que Bendici\xF3n","Queen Of The Clouds","Quiero Volver","R&G (Rhythm & Gangsta): The Masterpiece","Raise!","Ransom 2","Rapunzel","Rare","Re Mida","Ready To Die","Realer","Rebelde","Reclassified","Recovery","Recuerden Mi Estilo","Reggatta De Blanc","Regulate\u2026 G Funk Era","Reik","Reise, Reise","Relapse","Relaxing Piano Lullabies And Natural Sleep Aid For Baby Sleep Music","Religiously. The Album.","Replay","Results May Vary","Revenge","Revolve","Revolver","Ricky Martin","Rien 100 Rien","Ripcord","Rise And Fall, Rage And Grace","Rise Of An Empire","Robin Hood: Prince Of Thieves","Rock N Roll Jesus","Romance","Romances","Ronan","Royal Blood","Rumours","Sad Boyz 4 Life II","San Lucas","Santana World","Saturation III","Sauce Boyz","Savage Mode","Saxobeats","Scarlet","Schwarzes Herz","Seal The Deal & Let's Boogie","Section.80","Segundo Romance","Sehnsucht","Shake The Snow Globe","Shang-Chi And The Legend Of The Ten Rings: The Album","Sheer Heart Attack","Shiesty Season","Shock Value","Shoot For The Stars, Aim For The Moon","Signed Sealed And Delivered","Signos","Silent Alarm","Simplemente Gracias","Sin Bandera","Sing Me A Lullaby, My Sweet Temptation","Sinner","Sirio","Sit Still, Look Pretty","Skin","Slowhand","Smash","Smithereens","Snow Cougar","Social Cues","Some Girls","Song Hits From Holiday Inn","Songs For Dads","Songs For The Deaf","Songs For You, Truths For Me","Songs In The Key Of Life","Souled Out","Sounds Of Silence","Soy Como Quiero Ser","Speak Now","Speak Your Mind","Speakerboxxx/The Love Below","Spider-Man: Into The Spider-Verse","Split Decision","Square Up","SremmLife","Starboy","Stay +","Stay Dangerous","Staying At Tamara's","Steppenwolf","Stick Season","Still Bill","Straight Outta Compton","Strange Trails","Stronger","Suavemente","Sublime","Suck It and See","Sucker","Sue\xF1os","Sugar","Summer Forever","Summer,","Sunset Season","Sunshine On Leith","Surfer Rosa","Sweet Talker","SweetSexySavage","System Of A Down","TA13OO","Talk That Talk","Talking Heads: 77","Tangled Up","Tango In The Night","Taxi Driver","Taylor Swift","Tell Me It's Real","Ten","Ten Summoner's Tales","Terra Sem Cep (Ao Vivo)","Terral","Testing","Tha Carter III","Thank Me Later","That's Christmas To Me","The Academy","The Adventures Of Bobby Ray","The Album","The Andy Williams Christmas Album","The Aviary","The Balcony","The Battle Of Los Angeles","The Beatles (White Album)","The Beginning","The Better Life","The Big Day","The Book","The Breakfast Club","The Cars","The Colour And The Shape","The Death Of Peace Of Mind","The Diary Of Alicia Keys","The Documentary","The Emancipation Of Mimi","The Eminem Show","The End Of Everything","The Final Countdown","The Forever Story","The Foundation","The Goat","The Golden Child","The Good Parts","The Greatest Showman: Reimagined","The Green Trip","The Hardest Love","The Head And The Heart","The Human Condition","The Infamous","The Lady Killer","The Last Don II","The Lion King","The Lockdown Sessions","The London Sessions","The Lord Of The Rings: The Fellowship Of The Ring","The Lost Boy","The Magic Of Christmas / The Christmas Song","The Marshall Mathers LP","The Martin Garrix Collection","The Melodic Blue","The Mockingbird & The Crow","The Pains Of Growing","The Papercut Chronicles","The Perfect Luv Tape","The Pinkprint","The Predator","The Queen Is Dead","The ReVe Festival: Finale","The Rise And Fall Of Ziggy Stardust And The Spiders From Mars","The Rising Tied","The River","The Stone Roses","The Story Of Us","The Stranger","The Sufferer & The Witness","The Sun's Tirade","The Temptations Sing Smokey","The Time Of Our Lives","The Way It Is","The Wonderful World Of Sam Cooke","The Writing's On The Wall","The Young And The Hopeless","Therapy","Therapy Session","There Is More (Live)","There Is Nothing Left To Lose","These Things Happen","Third Eye Blind","This Is Me...Then","This Unruly Mess I've Made","Threat to Survival","Thrill Of The Chase","Time","Timelezz","To Let A Good Thing Die","To Pimp A Butterfly","Toast To Our Differences","Todos Os Cantos, Vol. 1 (Ao Vivo)","Too Hard","Torches X","Total Xanarchy","Toto IV","Toulouse Street","Tourist History","Toxicity","Tragic Kingdom","Tranquility Base Hotel & Casino","Traumazine","Traveler","Tres Hombres","Trip At Knight","Tron: Legacy","True Blue","True Colors","Trustfall","Tu Veneno Mortal","Tudo Em Paz","Ubuntu","Ugly Is Beautiful","Ultra 2021","Una Mattina","Unbroken","Uncovered","Under Pressure","Unsponsored Content","Unstoppable","Unwritten","Urban Flora","Urban Hymns","Use Your Illusion I","Veneer","Versions Of Me","Vibes","Vice Versa","Vices & Virtues","Victory","Vida","Viejo Marihuano","Visual\xEDzate","Walk Away","Walk Me Home...","Watch The Throne","Wave","We Broke The Rules","We Love You Tecca","We Love You Tecca 2","Weezer (Green Album)","Welcome To The Madhouse","Westlife","What A Time To Be Alive","What Do You Think About The Car?","What Is Love?","What Makes You Country","What Separates Me From You","What You See Is What You Get / What You See Ain't Always What You Get","When It's Dark Out","When We All Fall Asleep, Where Do We Go?","Where The Light Is","While The World Was Burning","White Pony","Whitney","Who Really Cares","Who You Are","Who's Next","Wide Open","Wilder Mind","Wildfire","Willy And The Poor Boys","Wings / You Never Walk Alone","Wish","Wish You Were Here","Without Warning","Wonder","X&Y","XOXO","Y Que Quede Claro","YBN: The Mixtape","Yo Creo","You Will Regret","Youngblood","Younger Now","Youth"];var ea=["$NOT","$uicideboy$","(G)I-DLE","*NSYNC","2 Chainz","21 Savage","6LACK","? & The Mysterians","A Boogie Wit da Hoodie","A Taste of Honey","A Tribe Called Quest","A-Ha","ABBA","AC/DC","AJ Tracey","ATEEZ","Ace of Base","Adele","Ado","Aerosmith","Agust D","Aitana","Al Dexter & his Troopers","Al Green","Al Jolson","Al Martino","Alan Jackson","Alannah Myles","Alec Benjamin","Alejandro Sanz","Alesso","Alfredo Olivas","Ali Gatie","Alice In Chains","Alina Baraz","All Time Low","All-4-One","All-American Rejects","Alok","America","American Quartet","Amii Stewart","Amitabh Bhattacharya","Ana Castela","Anderson .Paak","Andy Grammer","Angus & Julia Stone","Anirudh Ravichander","Anita Ward","Anitta","Anton Karas","Anuel AA","Arcade Fire","Archie Bell & The Drells","Archies","Aretha Franklin","Arizona Zervas","Armin van Buuren","Arthur Conley","Artie Shaw","Asake","Asees Kaur","Association","Atif Aslam","Audioslave","Aventura","Avril Lavigne","Aya Nakamura","B J Thomas","B.o.B","BLACKPINK","BONES","BROCKHAMPTON","BTS","Baby Keem","Bachman-Turner Overdrive","Backstreet Boys","Bad Bunny","Badshah","Bailey Zimmerman","Banda El Recodo","Barbra Streisand","Barry White","Bazzi","Bebe Rexha","Becky G","Becky Hill","Bee Gees","Ben Bernie","Ben Howard","Ben Selvin","Berlin","Bessie Smith","Bethel Music","Bette Midler","Beyonce","Bibi Blocksberg","Bibi und Tina","BigXthaPlug","Bill Doggett","Bill Haley & his Comets","Bill Withers","Billy Davis Jr","Billy Joel","Billy Paul","Billy Preston","Billy Swan","Birdy","Bizarrap","Blake Shelton","Blur","Bob Marley & The Wailers","Bob Seger","Bobby Darin","Bobby Lewis","Bobby McFerrin","Bobby Vinton","Boney M.","Bonez MC","Bonnie Tyler","Booba","Boston","BoyWithUke","Boyce Avenue","Bradley Cooper","Bread","Brent Faiyaz","Brett Young","Bring Me The Horizon","Britney Spears","Brooks & Dunn","Bruce Channel","Bruno & Marrone","Bryan Adams","Bryce Vine","Buddy Holly","Burna Boy","C. Tangana","CKay","CRO","Camilo","Capital Bra","Captain & Tennille","Cardi B","Carin Leon","Carlos Vives","Carly Simon","Carpenters","Cavetown","Celine Dion","Central Cee","Chaka Khan","Champs","Charlie Rich","Chayanne","Cheat Codes","Cher","Chic","Chicago","Chris Brown","Chris Isaak","Chris Young","Christina Aguilera","Christina Perri","Christopher Cross","Chuck Berry","Ciara","Cigarettes After Sex","Cliff Edwards (Ukelele Ike)","Cody Johnson","Colbie Caillat","Colby O'Donis","Cole Swindell","Coleman Hawkins","Contours","Coolio","Count Basie","Cris Mj","Culture Club","Cyndi Lauper","D-Block Europe","DAY6","DJ Khaled","DJ Luian","DJ Nelson","DMX","DNCE","DaVido","Dadju","Daft Punk","Dan + Shay","Daniel Powter","Danny Ocean","Darius Rucker","Dave","David Bowie","David Guetta","Daya","Dean Martin","Deee-Lite","Deep Purple","Deftones","Demi Lovato","Dennis Lloyd","Denzel Curry","Dermot Kennedy","Desiigner","Devo","Dewa 19","Dexys Midnight Runners","Diddy","Dido","Die drei !!!","Diego & Victor Hugo","Diljit Dosanjh","Dimitri Vegas & Like Mike","Dinah Shore","Dionne Warwick","Dire Straits","Disclosure","Dixie Cups","Doja Cat","Dolly Parton","Don Diablo","Don Henley","Don McLean","Don Omar","Donna Summer","Donovan","Dr. Dre","Drake","Dreamville","Dua Lipa","EMF","ENHYPEN","Earth, Wind & Fire","Ed Sheeran","Eddie Cantor","Eddie Cochran","Eddy Howard","Edgar Winter Group","Edwin Hawkins Singers","Edwin Starr","El Alfa","Eladio Carrion","Electric Light Orchestra","Elevation Worship","Ella Henderson","Ellie Goulding","Elton John","Elvis Presley","Empire of the Sun","En Vogue","Enrique Iglesias","Eslabon Armado","Ethel Waters","Etta James","Evanescence","Exile","Extreme","Faith Hill","Fall Out Boy","Fanny Brice","Farruko","Fats Domino","Fats Waller","Feid","Felix Jaehn","Fergie","Fetty Wap","Fiersa Besari","Fifth Harmony","Fine Young Cannibals","Five Finger Death Punch","Fleetwood Mac","Flo-Rida","Florence + The Machine","Flume","Foo Fighters","Foreigner","Foster The People","Four Aces","Frank Ocean","Frank Sinatra","Frankie Avalon","Frankie Valli","Fred Astaire","Freda Payne","Freddie Dredd","Freddy Fender","French Montana","Fuerza Regida","Fujii Kaze","Future","G-Eazy","Garfunkel and Oates","Gary Lewis & The Playboys","Gary Numan","Gene Autry","Gene Chandler","Gene Vincent","George Michael","George Strait","Gera MX","Ghost","Ghostemane","Gigi D'Agostino","Gladys Knight & The Pips","Glass Animals","Glee Cast","Gloria Gaynor","Godsmack","Gorillaz","Gotye","Grand Funk Railroad","Green Day","Grouplove","Grupo Firme","Grupo Marca Registrada","Gryffin","Gucci Mane","Guess Who","Gunna","Gusttavo Lima","Guy Mitchell","Gwen Stefani","Gzuz","H.E.R.","HARDY","Hailee Steinfeld","Halsey","Hans Zimmer","Harris Jayaraj","Harry Chapin","Harry James","Harry Nilsson","Harry Styles","Hayley Williams","Herb Alpert","Herman's Hermits","Hillsong UNITED","Hillsong Worship","Hollywood Undead","Honey Cone","Hoobastank","Hues Corporation","I Prevail","ITZY","IVE","Ice Cube","Ice Spice","Iggy Azalea","Imagine Dragons","Incubus","Internet Money","Isaac Hayes","J Geils Band","J. Cole","JAY-Z","JJ Lin","JP Saxe","JVKE","Jack Harlow","Jack Johnson","Jackie Wilson","Jacquees","James Arthur","James Brown","James TW","James Taylor","Jamie Foxx","Janet Jackson","Janis Joplin","Jason Aldean","Jason Mraz","Jay Chou","Jay Sean","Jay Wheeler","Jaymes Young","Jean Knight","Jeezy","Jennifer Lopez","Jennifer Warnes","Jeremih","Jeremy Zucker","Jerry Lee Lewis","Jerry Murad's Harmonicats","Jess Glynne","Jessie J","Jewel","Jimi Hendrix","Jimin","Jimmie Rodgers","Jimmy Dean","Jo Stafford","Joan Jett & The Blackhearts","Joao Gilberto","Joel Corry","John Fred & The Playboy Band","John Legend","John Mayer","John Williams","Johnnie Ray","Johnnie Taylor","Johnny Cash","Johnny Horton","Johnny Mathis","Johnny Mercer","Johnny Nash","Joji","Jon Bellion","Jonas Blue","Jonas Brothers","Joni James","Jorja Smith","Juan Gabriel","Juan Luis Guerra 4.40","Juanes","Juice Newton","Julia Michaels","Justin Bieber","Justin Quiles","KALEO","KAROL G","KAYTRANADA","KK","KSI","KYLE","Kacey Musgraves","Kane Brown","Kanye West","Karan Aujla","Kate Smith","Katy Perry","Kay Kyser","Ke$ha","Kehlani","Kelly Clarkson","Kenny Chesney","Kenny Loggins","Kenny Rogers","Kenshi Yonezu","Kenya Grace","Kevin Gates","Key Glock","Khalid","Kim Carnes","Kim Petras","Kimbra","Kina","King Gnu","Kings of Leon","Kingsmen","Kitty Kallen","Kodak Black","Kodaline","Kollegah","Kool & The Gang","Kungs","Kygo","Kylie Minogue","LE SSERAFIM","LISA","LMFAO","LUDMILLA","La Adictiva Banda San Jos\xE9 de Mesillas","La Oreja de Van Gogh","Labrinth","Lady Antebellum","Lady GaGa","Lainey Wilson","Lana Del Rey","Latto","Lauryn Hill","Lauv","League of Legends","Lee Brice","Leon Bridges","Leona Lewis","Lesley Gore","Leslie Odom Jr.","Liam Payne","Lifehouse","Lil Baby","Lil Dicky","Lil Durk","Lil Mosey","Lil Nas X","Lil Pump","Lil Skies","Lil Tjay","Lil Uzi Vert","Lil Yachty","Lil' Kim","Lil' Wayne","Lin-Manuel Miranda","Linkin Park","Lionel Richie","Lipps Inc","Lisa Loeb","Little Peggy March","Little Richard","Lofi Fruits Music","Lord Huron","Los Del Rio","Los Dos Carnales","Los Lobos","Los Temerarios","Los Tigres Del Norte","Los Tucanes De Tijuana","Lou Reed","Loud Luxury","Louis Jordan","Louis Tomlinson","Love Unlimited","Lovin' Spoonful","Luan Santana","Luciano","Luis Miguel","Luis R Conriquez","Lulu","Lunay","Lupe Fiasco","M","MAX","MC Hammer","MC Ryan SP","MKTO","Mabel","Machine Gun Kelly","Madison Beer","Madonna","Mahalini","Major Lazer","Mambo Kingz","Maneskin","Marco Antonio Sol\xEDs","Margaret Whiting","Maria Becerra","Mario","Mario Lanza","Mark Ronson","Maroon 5","Marshmello","Martin Garrix","Mary Ford","Mary J Blige","Mary J. Blige","Mary Wells","Matoma","Mau y Ricky","Meek Mill","Megadeth","Melanie","Melanie Martinez","Melendi","Men At Work","Metro Boomin","Michael Bubl\xE9","Michael Jackson","Michael McDonald","Michael Sembello","Miguel","Mike Posner","Miley Cyrus","Milky Chance","Minnie Riperton","Miracle Tones","Miranda Lambert","Mohit Chauhan","Mon Laferte","Moneybagg Yo","Monsta X","Mora","Morad","Morat","Mother Mother","Motley Crue","Ms. Lauryn Hill","Mumford & Sons","Muse","Mya","Myke Towers","NCT 127","NCT DREAM","NEFFEX","Nadin Amizah","Nancy Sinatra","Nat King Cole","Nate Smith","Natti Natasha","Nayer","Neil Diamond","Neil Sedaka","Nekfeu","Nelly","New Vaudeville Band","Next","Nickelback","Nicki Minaj","Nicki Nicole","Nicky Jam","Nina Simone","Ninho","Nipsey Hussle","Nirvana","Niska","No Doubt","Norah Jones","Normani","OMI","ONE OK ROCK","Oasis","Official HIGE DANdism","Offset","Old Dominion","Oliver Heldens","Olivia Rodrigo","Omah Lay","One Direction","Otis Redding","OutKast","Owl City","P Diddy","P!nk","PLK","PNL","Pamungkas","Passenger","Pat Boone","Patsy Cline","Patti LaBelle","Patti Page","Paul & Paula","Paul Revere & the Raiders","Paul Robeson","Paul Russell","Paul Whiteman","Paula Abdul","Peaches & Herb","Pearl Jam","Pee Wee Hunt","Pee Wee King","Pentatonix","Percy Faith","Percy Sledge","Peso Pluma","Peter Cetera","Peter Gabriel","Peter, Paul & Mary","Pharrell Williams","Pierce The Veil","Pineapple StormTv","Pink Floyd","Pink Sweat$","Piso 21","Pitbull","Plan B","Player","Polo G","Pop Smoke","Portugal. The Man","Pouya","Prince","Prince Royce","Pusha T","Quality Control","Queen","Quinn XCII","R. Kelly","RAF Camora","RAYE","REM","REO Speedwagon","Radiohead","Rag'n'Bone Man","Rage Against The Machine","Rahat Fateh Ali Khan","Rainbow Kitten Surprise","Rammstein","Rauw Alejandro","Ray Charles","Ray Parker Jr","Ray Stevens","Red Foley","Red Hot Chili Peppers","Red Velvet","Regard","Regina Belle","Reik","Rels B","Rema","Ricardo Arjona","Rich The Kid","Rick Astley","Rick Dees & his Cast of Idiots","Rick Ross","Rick Springfield","Ricky Martin","Ricky Nelson","Rihanna","Rita Ora","Ritchie Valens","Rizky Febian","Rob Thomas","Roberta Flack","Robin Schulz","Robin Thicke","Rod Stewart","Rod Wave","Roddy Ricch","Roger Miller","Romeo Santos","Rosemary Clooney","Roxette","Roy Acuff","Roy Orbison","Rudimental","Ruel","Ruth B.","Ryan Lewis","SCH","SEVENTEEN","SWV","Sabaton","Sabrina Carpenter","Sachet Tandon","Sachin-Jigar","Sade","Sam Cooke","Sam Feldt","Sam Hunt","Sam Smith","Sam The Sham & The Pharaohs","Sammy Davis Jr","Sammy Kaye","Santana","Sasha Alex Sloan","Savage Garden","Saweetie","Scorpions","Sean Kingston","Sean Paul","Sebastian Yatra","Sech","Seeb","Sezen Aksu","Sfera Ebbasta","Shaggy","Shania Twain","Shawn Mendes","Sheena Easton","Shinedown","Shubh","Sia","Sid Sriram","Sidhu Moose Wala","Silk","Silver Convention","Simon & Garfunkel","Sinead O'Connor","Sir Mix-a-Lot","Sister Sledge","Ski Mask The Slump God","Skillet","Skrillex","Sleeping At Last","Smokey Robinson","Snoop Dogg","Snow Patrol","Soda Stereo","Sonu Nigam","Sophie Ellis-Bextor","Spencer Davis Group","Spice Girls","Stan Getz","Starland Vocal Band","Stephen Sanchez","Steve Aoki","Steve Lacy","Steve Winwood","Stevie B","Sting","Stormzy","Strawberry Alarm Clock","Stray Kids","Stromae","Sublime","Sum 41","Summer Walker","Supertramp","Survivor","Swedish House Mafia","System Of A Down","T-Pain","T.I.","TAEYEON","TKKG","TLC","TOMORROW X TOGETHER","TOTO","TWICE","Tag Team","Tainy","Tammi Terrell","Tanishk Bagchi","Tate McRae","Taylor Swift","Tears For Fears","Tems","Tennessee Ernie Ford","Terence Trent D'Arby","Teresa Brewer","Terry Jacks","The Ames Brothers","The Animals","The B52s","The Bangles","The Beatles","The Black Eyed Peas","The Black Keys","The Box Tops","The Chainsmokers","The Chiffons","The Chordettes","The Clash","The Coasters","The Commodores","The Cowsills","The Cranberries","The Crew-Cuts","The Cure","The Detroit Spinners","The Diamonds","The Doobie Brothers","The Doors","The Drifters","The Emotions","The Eurythmics","The Fireballs","The Flamingos","The Foundations","The Four Seasons","The Fray","The Game","The Go Gos","The Goo Goo Dolls","The Head And The Heart","The Hollies","The Ink Spots","The Isley Brothers","The Jackson 5","The Kid LAROI","The Killers","The Kingston Trio","The Kooks","The Lemon Pipers","The Living Tombstone","The Lumineers","The Mamas & The Papas","The Marvelettes","The McCoys","The Mills Brothers","The Miracles","The Monkees","The Moody Blues","The National","The Neighbourhood","The Notorious B.I.G.","The O'Jays","The Offspring","The Osmonds","The Partridge Family","The Penguins","The Pet Shop Boys","The Platters","The Righteous Brothers","The Rolling Stones","The Ronettes","The Score","The Script","The Seekers","The Shangri-Las","The Smashing Pumpkins","The Staple Singers","The Strokes","The Supremes","The Temptations","The Turtles","The Vamps","The Verve","The Village People","The Weavers","The White Stripes","The Young Rascals","The Zombies","Thelma Houston","Thomas Rhett","Three Days Grace","Three Dog Night","Three Man Down","Timbaland","Timmy Trumpet","Toby Keith","Tom Jones","Tom Petty and the Heartbreakers","Tommy Dorsey","Tommy Edwards","Tommy James & the Shondells","Tone Loc","Toni Braxton","Topic","Tory Lanez","Tove Lo","Trevor Daniel","Trey Songz","Trippie Redd","Trueno","Tulsi Kumar","Tulus","Twenty One Pilots","Two Feet","Ty Dolla $ign","Tyga","Tyler Hubbard","U2","UB40","UZI","Ufo361","Upchurch","V","Vampire Weekend","Van McCoy","Van Morrison","Vance Joy","Vanessa Carlton","Vanessa Williams","Vera Lynn","Vernon Dalhart","Vicente Fernandez","Vishal-Shekhar","Volbeat","WILLOW","Wale","Wallows","Weezer","Wham!","Whitney Houston","Why Don't We","Wilbert Harrison","Wilson Phillips","Wiz Khalifa","Woody Guthrie","Wyclef Jean","XXXTENTACION","Xavi","YG","YNW Melly","YOASOBI","Yandel","Years & Years","Yeat","Yo Gotti","Young Dolph","Young Miko","Young Thug","YoungBoy Never Broke Again","Yung Gravy","Yuuri","Yuvan Shankar Raja","ZAYN","ZZ Top","Zac Brown Band","Zach Bryan","Zara Larsson","aespa","benny blanco","blink-182","d4vd","deadmau5","girl in red","gnash","iann dior","will.i.am"];var aa=["Acid House","Acid Jazz","Acid Rock","Acoustic","Acoustic Blues","Afro-Pop","Afrobeat","Alt-Rock","Alternative","Ambient","American Trad Rock","Americana","Anime","Arena Rock","Art-Rock","Avant-Garde","Avant-Punk","Baladas y Boleros","Barbershop","Baroque","Bebop","Big Band","Black Metal","Blue Note","Bluegrass","Blues","Boogaloo","Bop","Bossa Nova","Bounce","Brazilian Funk","Breakbeat","Britpop","CCM","Cajun","Cantopop","Celtic","Celtic Folk","Chamber Music","Chant","Chanukah","Chicago Blues","Chicago House","Chicano","Children\u2019s Music","Chill","Choral","Christian","Christmas","Classical","Club","College Rock","Conjunto","Cool Jazz","Country","Crunk","Dance","Dancehall","Death Metal","Deep House","Delta Blues","Detroit Techno","Dirty South","Disco","Disney","Dixieland","Doo-wop","Downtempo","Dream Pop","Drill","Drinking Songs","Drone","Drum'n'bass","Dub","Dubstep","EDM","Early Music","East Coast Rap","Easter","Easy Listening","Eclectic","Electric Blues","Electro","Electronic","Electronica","Emo","Enka","Environmental","Ethio-jazz","Experimental","Experimental Rock","Flamenco","Folk","Folk-Rock","Forro","French Pop","Funk","Fusion","Gangsta Rap","Garage","German Folk","German Pop","Glam Rock","Gospel","Goth","Grime","Grindcore","Groove","Grunge","Hair Metal","Halloween","Happy","Hard Bop","Hard Dance","Hard Rock","Hardcore","Hardcore Punk","Hardcore Rap","Hardstyle","Healing","Heavy Metal","High Classical","Hip Hop","Holiday","Honky Tonk","House","IDM","Impressionist","Indie","Industrial","Instrumental","J-Dance","J-Idol","J-Pop","J-Punk","J-Rock","J-Ska","J-Synth","Jackin House","Jam Bands","Japanese Pop","Jazz","Jungle","K-Pop","Karaoke","Kayokyoku","Kids","Kitsch","Klezmer","Krautrock","Latin","Latin Jazz","Latin Rap","Local","Lounge","Lullabies","MPB","Mainstream Jazz","Malay","Mandopop","March","Mariachi","Mawwal","Medieval","Meditation","Metal","Metalcore","Minimal Techno","Minimalism","Modern","Motown","Mugham","Musicals","Musique Concr\xE8te","Nature","Neo-Soul","Nerdcore","New Acoustic","New Age","New Mex","New Wave","No Wave","Noise","Nordic","Novelty","OPM","Oi!","Old School Rap","Opera","Orchestral","Original Score","Outlaw Country","Pagode","Party","Piano","Polka","Pop","Pop Film","Pop Latino","Post Dubstep","Power Pop","Praise & Worship","Progressive House","Progressive Rock","Proto-punk","Psych Rock","Psychedelic","Punk","Punk Rock","Qawwali","Quiet Storm","R&B","Ragtime","Rainy Day","Rap","Reggae","Reggaeton","Regional Mexicano","Relaxation","Renaissance","Retro","Rock","Rockabilly","Rocksteady","Romance","Romantic","Roots Reggae","Roots Rock","SKA","Sad","Salsa","Samba","Second Line","Sertanejo","Shaabi","Shoegaze","Sleep","Smooth Jazz","Soft Rock","Soul","Soundtrack","Southern Gospel","Southern Rock","Space Rock","Stage And Screen","Steampunk","Summer","Surf","Swamp Pop","Swing","Synth Pop","Tango","Techno","Teen Pop","Tejano","Tex-Mex","Thanksgiving","Traditional","Trance","Trip Hop","Tropical","Underground Rap","Urban","Urban Cowboy","West Coast Rap","Western Swing","World","Worldbeat","Zydeco"];var oa=["(Everything I Do) I Do it For You","(Ghost) Riders in the Sky","(I Can't Get No) Satisfaction","(I've Got a Gal In) Kalamazoo","(I've Had) the Time of My Life","(It's No) Sin","(Just Like) Starting Over","(Let Me Be Your) Teddy Bear","(Put Another Nickel In) Music! Music! Music!","(Sexual) Healing","(Sittin' On) the Dock of the Bay","(They Long to Be) Close to You","(You Keep Me) Hangin' On","(You're My) Soul & Inspiration","(Your Love Keeps Lifting Me) Higher & Higher","12th Street Rag","1999","19th Nervous Breakdown","50 Ways to Leave Your Lover","9 to 5","96 Tears","A Boy Named Sue","A Hard Day's Night","A String of Pearls","A Thousand Miles","A Tree in the Meadow","A Whiter Shade of Pale","A Whole New World (Aladdin's Theme)","A Woman in Love","A-Tisket A-Tasket","ABC","Abracadabra","Ac-cent-tchu-ate the Positive","Addicted to Love","After You've Gone","Afternoon Delight","Again","Against All Odds (Take a Look At Me Now)","Ain't Misbehavin'","Ain't No Mountain High Enough","Ain't No Sunshine","Ain't That a Shame","Airplanes","All Along the Watchtower","All I Have to Do is Dream","All I Wanna Do","All My Lovin' (You're Never Gonna Get It)","All Night Long (All Night)","All Out of Love","All Shook Up","All You Need is Love","Alone","Alone Again (Naturally)","Always On My Mind","American Pie","American Woman","Angie","Another Brick in the Wall (part 2)","Another Day in Paradise","Another Night","Another One Bites the Dust","Apologize","April Showers","Aquarius/Let The Sunshine In","Are You Lonesome Tonight?","Arthur's Theme (Best That You Can Do)","As Time Goes By","At Last","At the Hop","Auf Wiederseh'n Sweetheart","Baby Baby","Baby Come Back","Baby Got Back","Baby Love","Baby One More Time","Bad","Bad Day","Bad Girls","Bad Moon Rising","Bad Romance","Baker Street","Ball of Confusion (That's What the World is Today)","Ballad of the Green Berets","Ballerina","Band On the Run","Band of Gold","Battle of New Orleans","Be Bop a Lula","Be My Baby","Be My Love","Beat It","Beautiful Day","Beauty & the Beast","Because I Love You (The Postman Song)","Because You Loved Me","Because of You","Before The Next Teardrop Falls","Begin the Beguine","Behind Closed Doors","Being With You","Believe","Ben","Bennie & the Jets","Besame Mucho","Best of My Love","Bette Davis Eyes","Big Bad John","Big Girls Don't Cry","Billie Jean","Bitter Sweet Symphony","Black Or White","Black Velvet","Blaze of Glory","Bleeding Love","Blue Suede Shoes","Blue Tango","Blueberry Hill","Blurred Lines","Body & Soul","Bohemian Rhapsody","Boogie Oogie Oogie","Boogie Woogie Bugle Boy","Boom Boom Pow","Born in the USA","Born to Be Wild","Born to Run","Boulevard of Broken Dreams","Brand New Key","Brandy (You're A Fine Girl)","Breaking Up is Hard to Do","Breathe","Bridge Over Troubled Water","Brother","Brother Louie","Brown Eyed Girl","Brown Sugar","Build Me Up Buttercup","Burn","Buttons & Bows","Bye","Bye Bye","Bye Bye Love","Caldonia Boogie (What Makes Your Big Head So Hard)","California Dreamin'","California Girls","Call Me","Call Me Maybe","Can You Feel the Love Tonight","Can't Buy Me Love","Can't Get Enough of Your Love","Can't Help Falling in Love","Candle in the Wind '97","Candy Man","Car Wash","Careless Whisper","Cars","Cat's in the Cradle","Cathy's Clown","Celebration","Centerfold","Chain of Fools","Chances Are","Change the World","Chapel of Love","Chattanooga Choo Choo","Chattanoogie Shoe-Shine Boy","Check On It","Cheek to Cheek","Cherish","Cherry Pink & Apple Blossom White","Cold","Colors of the Wind","Come On Eileen","Come On-a My House","Come Together","Coming Up","Cracklin' Rosie","Crazy","Crazy For You","Crazy Little Thing Called Love","Crazy in Love","Creep","Crimson & Clover","Crocodile Rock","Cry","Cry Like a Baby","Crying","Da Doo Ron Ron (When He Walked Me Home)","Dance to the Music","Dancing Queen","Dancing in the Dark","Dancing in the Street","Dardanella","Daydream Believer","December 1963 (Oh What a Night)","Delicado","Dilemma","Disco Duck","Disco Lady","Disturbia","Dizzy","Do That to Me One More Time","Do Wah Diddy Diddy","Do Ya Think I'm Sexy?","Do You Love Me?","Don't Be Cruel","Don't Fence Me In","Don't Go Breaking My Heart","Don't Leave Me This Way","Don't Let the Stars Get in Your Eyes","Don't Let the Sun Go Down On Me","Don't Speak","Don't Stop 'Til You Get Enough","Don't Worry Be Happy","Don't You (Forget About Me)","Don't You Want Me","Doo Wop (That Thing)","Down","Down Hearted Blues","Down Under","Downtown","Dreamlover","Dreams","Drop it Like It's Hot","Drops of Jupiter (Tell Me)","Duke of Earl","E.T.","Earth Angel","Ebony & Ivory","Eight Days a Week","Empire State Of Mind","End of the Road","Endless Love","Escape (The Pina Colada Song)","Eve of Destruction","Every Breath You Take","Every Little Thing She Does is Magic","Everybody Loves Somebody","Everybody Wants to Rule the World","Everyday People","Eye of the Tiger","Faith","Fallin'","Fame","Family Affair","Fantasy","Fast Car","Feel Good Inc","Feel Like Making Love","Fire & Rain","Firework","Flashdance. What a Feeling","Fly Robin Fly","Foolish Games","Footloose","For What It's Worth (Stop","Fortunate Son","Frankenstein","Freak Me","Freebird","Frenesi","Funkytown","Gangsta's Paradise","Georgia On My Mind","Georgy Girl","Get Back","Get Down Tonight","Get Off of My Cloud","Ghostbusters","Gimme Some Lovin'","Girls Just Wanna Have Fun","Give Me Everything","Gives You Hell","Glamorous","Glory of Love","Go Your Own Way","God Bless America","God Bless the Child","Gold Digger","Gonna Make You Sweat (Everybody Dance Now)","Good Lovin'","Good Times","Good Vibrations","Goodbye Yellow Brick Road","Goodnight","Got to Give it Up","Grease","Great Balls of Fire","Greatest Love of All","Green Onions","Green River","Green Tambourine","Grenade","Groove is in the Heart","Groovin'","Gypsies","Hair","Hang On Sloopy","Hanging by a Moment","Hanky Panky","Happy Days Are Here Again","Happy Together","Harbour Lights","Hard to Say I'm Sorry","Harper Valley PTA","Have You Ever Really Loved a Woman?","He'll Have to Go","He's So Fine","He's a Rebel","Heart of Glass","Heart of Gold","Heartbreak Hotel","Hello","Hello Dolly","Help Me","Help!","Here Without You","Here in My Heart","Hero","Hey Baby","Hey Jude","Hey Paula","Hey There","Hey There Delilah","Hey Ya!","Higher Love","Hips don't lie","Hit the Road","Hold On","Hollaback Girl","Honey","Honky Tonk","Honky Tonk Woman","Horse With No Name","Hot Child In The City","Hot Stuff","Hotel California","Hound Dog","House of the Rising Sun","How Deep is Your Love?","How Do I Live?","How Do You Mend a Broken Heart","How High the Moon","How Much is That Doggy in the Window?","How Will I Know","How You Remind Me","How to Save a Life","Hungry Heart","Hurt So Good","I Believe I Can Fly","I Can Dream","I Can Help","I Can See Clearly Now","I Can't Get Next to You","I Can't Get Started","I Can't Go For That (No Can Do)","I Can't Help Myself (Sugar Pie","I Can't Stop Loving You","I Don't Want to Miss a Thing","I Fall to Pieces","I Feel Fine","I Feel For You","I Feel Love","I Get Around","I Got You (I Feel Good)","I Got You Babe","I Gotta Feeling","I Heard it Through the Grapevine","I Honestly Love You","I Just Called to Say I Love You","I Just Wanna Be Your Everything","I Kissed A Girl","I Love Rock 'n' Roll","I Need You Now","I Only Have Eyes For You","I Shot the Sheriff","I Still Haven't Found What I'm Looking For","I Swear","I Think I Love You","I Walk the Line","I Wanna Dance With Somebody (Who Loves Me)","I Wanna Love You","I Want You Back","I Want to Hold Your Hand","I Want to Know What Love Is","I Went to Your Wedding","I Will Always Love You","I Will Follow Him","I Will Survive","I Write the Songs","I'll Be Missing You","I'll Be There","I'll Make Love to You","I'll Never Smile Again","I'll Take You There","I'll Walk Alone","I'll be seeing you","I'm Looking Over a Four Leaf Clover","I'm So Lonesome I Could Cry","I'm Sorry","I'm Walking Behind You","I'm Your Boogie Man","I'm Yours","I'm a Believer","I've Heard That Song Before","If (They Made Me a King)","If I Didn't Care","If You Don't Know Me By Now","If You Leave Me Now","Imagine","In Da Club","In the End","In the Ghetto","In the Mood","In the Summertime","In the Year 2525 (Exordium & Terminus)","Incense & Peppermints","Indian Reservation (The Lament Of The Cherokee Reservation Indian)","Instant Karma","Iris","Ironic","Irreplaceable","It Had to Be You","It's All in the Game","It's My Party","It's Now Or Never","It's Still Rock 'n' Roll to Me","It's Too Late","Jack & Diane","Jailhouse Rock","Jessie's Girl","Jive Talkin'","Johnny B Goode","Joy to the World","Judy in Disguise (With Glasses)","Jump","Jumpin' Jack Flash","Just Dance","Just My Imagination (Running Away With Me)","Just the Way You Are","Kansas City","Karma Chameleon","Keep On Loving You","Killing Me Softly With His Song","King of the Road","Kiss","Kiss & Say Goodbye","Kiss From a Rose","Kiss Me","Kiss On My List","Kiss You All Over","Knock On Wood","Knock Three Times","Kokomo","Kryptonite","Kung Fu Fighting","La Bamba","Lady","Lady Marmalade (Voulez-Vous Coucher Aver Moi Ce Soir?)","Last Train to Clarksville","Layla","Le Freak","Leader of the Pack","Lean On Me","Leaving","Let Me Call You Sweetheart","Let Me Love You","Let it Be","Let it Snow! Let it Snow! Let it Snow!","Let's Dance","Let's Get it On","Let's Groove","Let's Hear it For the Boy","Let's Stay Together","Light My Fire","Lights","Like a Prayer","Like a Rolling Stone","Like a Virgin","Little Darlin'","Little Things Mean a Lot","Live & Let Die","Livin' La Vida Loca","Livin' On a Prayer","Living For the City","Locked Out Of Heaven","Lola","Lonely Boy","Long Cool Woman in a Black Dress","Long Tall Sally","Look Away","Lookin' Out My Back Door","Lose Yourself","Losing My Religion","Louie Louie","Love Child","Love Hangover","Love In This Club","Love Is Blue (L'Amour Est Bleu)","Love Letters in the Sand","Love Me Do","Love Me Tender","Love Shack","Love Theme From 'A Star is Born' (Evergreen)","Love Train","Love Will Keep Us Together","Love is a Many Splendoured Thing","Love to Love You Baby","Love's Theme","Loving You","Low","Macarena","Mack the Knife","Maggie May","Magic","Magic Carpet Ride","Make Love to Me","Make it With You","Makin' Whoopee","Mama Told Me Not to Come","Man in the Mirror","Manana (Is Soon Enough For Me)","Maneater","Maniac","Maybellene","Me & Bobby McGee","Me & Mrs Jones","Memories Are Made of This","Mercy Mercy Me (The Ecology)","Mickey","Midnight Train to Georgia","Minnie the Moocher","Miss You","Miss You Much","Mister Sandman","Mmmbop","Mona Lisa","Monday Monday","Money For Nothing","Mony Mony","Mood Indigo","Moonlight Cocktail","Moonlight Serenade","More Than Words","More Than a Feeling","Morning Train (Nine to Five)","Mr Big Stuff","Mr Brightside","Mr Tambourine Man","Mrs Brown You've Got a Lovely Daughter","Mrs Robinson","Mule Train","Music","My Blue Heaven","My Boyfriend's Back","My Eyes Adored You","My Girl","My Guy","My Heart Will Go On","My Life","My Love","My Man","My Prayer","My Sharona","My Sweet Lord","Na Na Hey Hey (Kiss Him Goodbye)","Nature Boy","Near You","Need You Now","Need You Tonight","Never Gonna Give You Up","Night & Day","Night Fever","Nights in White Satin","No One","No Scrubs","Nobody Does it Better","Nothin' on You","Nothing Compares 2 U","Nothing's Gonna Stop Us Now","Ode To Billie Joe","Oh","Oh Happy Day","Oh My Papa (O Mein Papa)","Ol' Man River","Ole Buttermilk Sky","On Bended Knee","On My Own","On the Atchison","One","One Bad Apple","One More Try","One O'Clock Jump","One Sweet Day","One of These Nights","One of Us","Only The Lonely (Know The Way I Feel)","Only You (And You Alone)","Open Arms","Over There","Over the Rainbow","Paint it Black","Papa Don't Preach","Papa Was a Rolling Stone","Papa's Got a Brand New Bag","Paper Doll","Paper Planes","Paperback Writer","Party Rock Anthem","Peg o' My Heart","Peggy Sue","Pennies From Heaven","Penny Lane","People","People Got to Be Free","Personality","Philadelphia Freedom","Physical","Piano Man","Pick Up the Pieces","Pistol Packin' Mama","Play That Funky Music","Please Mr Postman","Poker Face","Pon De Replay","Pony Time","Pop Muzik","Prisoner of Love","Private Eyes","Promiscuous","Proud Mary","Purple Haze","Purple Rain","Puttin' on the Ritz","Que sera sera (Whatever will be will be)","Queen of Hearts","Rag Doll","Rag Mop","Rags to Riches","Raindrops Keep Falling On My Head","Rapture","Ray of Light","Reach Out (I'll Be There)","Red Red Wine","Rehab","Respect","Return to Sender","Reunited","Revolution","Rhapsody in Blue","Rhinestone Cowboy","Rich Girl","Riders On the Storm","Right Back Where We Started From","Ring My Bell","Ring of Fire","Rock Around the Clock","Rock With You","Rock Your Baby","Rock the Boat","Rock the Casbah","Roll Over Beethoven","Roll With It","Rolling In The Deep","Rosanna","Roses Are Red","Royals","Ruby Tuesday","Rudolph","Rum & Coca-Cola","Runaround Sue","Runaway","Running Scared","Rush Rush","Sailing","Save the Best For Last","Save the Last Dance For Me","Say It Right","Say My Name","Say Say Say","Say You","School's Out","Seasons in the Sun","Secret Love","Sentimental Journey","Sexyback","Sh-Boom (Life Could Be a Dream)","Shadow Dancing","Shake Down","Shake You Down","She Drives Me Crazy","She Loves You","She's a Lady","Shining Star","Shop Around","Shout","Silly Love Songs","Since U Been Gone","Sing","Singing The Blues","Single Ladies (Put A Ring On It)","Sir Duke","Sixteen Tons","Sledgehammer","Sleep Walk","Sleepy Lagoon","Slow Poke","Smells Like Teen Spirit","Smoke Gets in Your Eyes","Smoke On the Water","Smoke! Smoke! Smoke! (That Cigarette)","Smooth","So Much in Love","Soldier Boy","Some Enchanted Evening","Some of These Days","Somebody That I Used to Know","Somebody to Love","Someday","Somethin' Stupid","Something","Soul Man","Spanish Harlem","Spill the Wine","Spinning Wheel","Spirit in the Sky","St George & the Dragonette","St Louis Blues","Stagger Lee","Stairway to Heaven","Stand By Me","Stardust","Stars & Stripes Forever","Stay (I Missed You)","Stayin' Alive","Stop! in the Name of Love","Stormy Weather (Keeps Rainin' All the Time)","Straight Up","Strange Fruit","Stranger On the Shore","Strangers in the Night","Strawberry Fields Forever","Streets of Philadelphia","Stronger","Stuck On You","Sugar Shack","Sugar Sugar","Summer in the City","Summertime Blues","Sunday","Sunshine Superman","Sunshine of Your Love","Superstar","Superstition","Surfin' USA","Suspicious Minds","Swanee","Sweet Caroline (Good Times Never Seemed So Good)","Sweet Child O' Mine","Sweet Dreams (Are Made of This)","Sweet Georgia Brown","Sweet Home Alabama","Sweet Soul Music","Swinging On a Star","T For Texas (Blue Yodel No 1)","TSOP (The Sound of Philadelphia)","Take Me Home","Take My Breath Away","Take On Me","Take The 'A' Train","Take a Bow","Tammy","Tangerine","Tears in Heaven","Tears of a Clown","Temperature","Tennessee Waltz","Tequila","Tha Crossroads","Thank You (Falettinme be Mice Elf Again)","That Lucky Old Sun (Just Rolls Around Heaven All Day)","That Old Black Magic","That'll Be the Day","That's Amore","That's What Friends Are For","That's the Way (I Like It)","That's the Way Love Goes","The Boy is Mine","The Boys of Summer","The Christmas Song (Chestnuts Roasting On An Open Fire)","The End of the World","The First Time Ever I Saw Your Face","The Girl From Ipanema","The Glow-Worm","The Great Pretender","The Gypsy","The Hustle","The Joker","The Last Dance","The Letter","The Loco-Motion","The Long & Winding Road","The Love You Save","The Morning After","The Power of Love","The Prisoner's Song","The Reason","The Rose","The Sign","The Song From Moulin Rouge (Where Is Your Heart)","The Sounds of Silence","The Streak","The Sweet Escape","The Thing","The Tide is High","The Tracks of My Tears","The Twist","The Wanderer","The Way We Were","The Way You Look Tonight","The Way You Move","Theme From 'A Summer Place'","Theme From 'Greatest American Hero' (Believe It Or Not)","Theme From 'Shaft'","There goes my baby","These Boots Are Made For Walking","Third Man Theme","This Diamond Ring","This Guy's in Love With You","This Land is Your Land","This Love","This Ole House","This Used to Be My Playground","Three Coins in the Fountain","Three Times a Lady","Thrift Shop","Thriller","Ticket to Ride","Tie a Yellow Ribbon 'round the Old Oak Tree","Tiger Rag","Tighten Up","Tik-Toc","Till I Waltz Again With You","Till The End of Time","Time After Time","Time of the Season","To Sir","Tom Dooley","Tonight's the Night (Gonna Be Alright)","Too Close","Too Young","Tossing & Turning","Total Eclipse of the Heart","Touch Me","Toxic","Travellin' Band","Travellin' Man","Truly Madly Deeply","Turn! Turn! Turn! (To Everything There is a Season)","Tutti Frutti","Twist & Shout","Two Hearts","U Can't Touch This","U Got it Bad","Umbrella","Un-Break My Heart","Unbelievable","Unchained Melody","Uncle Albert (Admiral Halsey)","Under the Boardwalk","Under the Bridge","Unforgettable","Up Around the Bend","Up Up & Away","Up Where We Belong","Upside Down","Use Somebody","Vaya Con Dios (may God Be With You)","Venus","Vision of Love","Viva La Vida","Vogue","Volare","Wabash Cannonball","Waiting For a Girl Like You","Wake Me Up Before You Go Go","Wake Up Little Susie","Walk Don't Run","Walk Like a Man","Walk Like an Egyptian","Walk On By","Walk On the Wild Side","Walk This Way","Wannabe","Want Ads","Wanted","War","Waterfalls","Wayward Wind","We Are Family","We Are Young","We Are the Champions","We Are the World","We Belong Together","We Built This City","We Can Work it Out","We Didn't Start the Fire","We Found Love","We Got The Beat","We Will Rock You","We've Only Just Begun","Weak","Wedding Bell Blues","West End Blues","West End Girls","What Goes Around Comes Around","What a Fool Believes","What'd I Say","What's Going On?","What's Love Got to Do With It?","Whatcha Say","Wheel of Fortune","When Doves Cry","When You Wish Upon a Star","When a Man Loves a Woman","Where Did Our Love Go","Where is the Love?","Whip It","Whispering","White Christmas","White Rabbit","Whole Lotta Love","Whole Lotta Shakin' Goin' On","Whoomp! (There it Is)","Why Do Fools Fall in Love?","Why Don't You Believe Me?","Wichita Lineman","Wicked Game","Wild Thing","Wild Wild West","Will It Go Round In Circles","Will You Love Me Tomorrow","Winchester Cathedral","Wind Beneath My Wings","Wipe Out","Wishing Well","With Or Without You","Without Me","Without You","Woman","Won't Get Fooled Again","Wooly Bully","Working My Way Back to You","YMCA","Yakety Yak","Yeah!","Yellow Rose of Texas","Yesterday","You Ain't Seen Nothin' Yet","You Always Hurt the One You Love","You Are the Sunshine of My Life","You Belong With Me","You Belong to Me","You Can't Hurry Love","You Don't Bring Me Flowers","You Don't Have to Be a Star (To Be in My Show)","You Light Up My Life","You Make Me Feel Brand New","You Make Me Feel Like Dancing","You Really Got Me","You Send Me","You Sexy Thing","You Were Meant for Me","You make Me Wanna","You'll Never Know","You're Beautiful","You're So Vain","You're Still the One","You're the One That I Want","You've Got a Friend","You've Lost That Lovin' Feelin'","Your Cheatin' Heart","Your Song"];var mo={album:$e$1,artist:ea,genre:aa,song_name:oa},ra=mo;var na=["activist","artist","author","blogger","business owner","coach","creator","designer","developer","dreamer","educator","engineer","entrepreneur","environmentalist","film lover","filmmaker","foodie","founder","friend","gamer","geek","grad","inventor","leader","model","musician","nerd","parent","patriot","person","philosopher","photographer","public speaker","scientist","singer","streamer","student","teacher","traveler","veteran","writer"];var ia=["{{person.bio_part}}","{{person.bio_part}}, {{person.bio_part}}","{{person.bio_part}}, {{person.bio_part}}, {{person.bio_part}}","{{person.bio_part}}, {{person.bio_part}}, {{person.bio_part}} {{internet.emoji}}","{{word.noun}} {{person.bio_supporter}}","{{word.noun}} {{person.bio_supporter}}  {{internet.emoji}}","{{word.noun}} {{person.bio_supporter}}, {{person.bio_part}}","{{word.noun}} {{person.bio_supporter}}, {{person.bio_part}} {{internet.emoji}}"];var ta=["advocate","devotee","enthusiast","fan","junkie","lover","supporter"];var la={generic:["Aaliyah","Aaron","Abagail","Abbey","Abbie","Abbigail","Abby","Abdiel","Abdul","Abdullah","Abe","Abel","Abelardo","Abigail","Abigale","Abigayle","Abner","Abraham","Ada","Adah","Adalberto","Adaline","Adam","Adan","Addie","Addison","Adela","Adelbert","Adele","Adelia","Adeline","Adell","Adella","Adelle","Aditya","Adolf","Adolfo","Adolph","Adolphus","Adonis","Adrain","Adrian","Adriana","Adrianna","Adriel","Adrien","Adrienne","Afton","Aglae","Agnes","Agustin","Agustina","Ahmad","Ahmed","Aida","Aidan","Aiden","Aileen","Aimee","Aisha","Aiyana","Akeem","Al","Alaina","Alan","Alana","Alanis","Alanna","Alayna","Alba","Albert","Alberta","Albertha","Alberto","Albin","Albina","Alda","Alden","Alec","Aleen","Alejandra","Alejandrin","Alek","Alena","Alene","Alessandra","Alessandro","Alessia","Aletha","Alex","Alexa","Alexander","Alexandra","Alexandre","Alexandrea","Alexandria","Alexandrine","Alexandro","Alexane","Alexanne","Alexie","Alexis","Alexys","Alexzander","Alf","Alfonso","Alfonzo","Alford","Alfred","Alfreda","Alfredo","Ali","Alia","Alice","Alicia","Alisa","Alisha","Alison","Alivia","Aliya","Aliyah","Aliza","Alize","Allan","Allen","Allene","Allie","Allison","Ally","Alphonso","Alta","Althea","Alva","Alvah","Alvena","Alvera","Alverta","Alvina","Alvis","Alyce","Alycia","Alysa","Alysha","Alyson","Alysson","Amalia","Amanda","Amani","Amara","Amari","Amaya","Amber","Ambrose","Amelia","Amelie","Amely","America","Americo","Amie","Amina","Amir","Amira","Amiya","Amos","Amparo","Amy","Amya","Ana","Anabel","Anabelle","Anahi","Anais","Anastacio","Anastasia","Anderson","Andre","Andreane","Andreanne","Andres","Andrew","Andy","Angel","Angela","Angelica","Angelina","Angeline","Angelita","Angelo","Angie","Angus","Anibal","Anika","Anissa","Anita","Aniya","Aniyah","Anjali","Anna","Annabel","Annabell","Annabelle","Annalise","Annamae","Annamarie","Anne","Annetta","Annette","Annie","Ansel","Ansley","Anthony","Antoinette","Antone","Antonetta","Antonette","Antonia","Antonietta","Antonina","Antonio","Antwan","Antwon","Anya","April","Ara","Araceli","Aracely","Arch","Archibald","Ardella","Arden","Ardith","Arely","Ari","Ariane","Arianna","Aric","Ariel","Arielle","Arjun","Arlene","Arlie","Arlo","Armand","Armando","Armani","Arnaldo","Arne","Arno","Arnold","Arnoldo","Arnulfo","Aron","Art","Arthur","Arturo","Arvel","Arvid","Arvilla","Aryanna","Asa","Asha","Ashlee","Ashleigh","Ashley","Ashly","Ashlynn","Ashton","Ashtyn","Asia","Assunta","Astrid","Athena","Aubree","Aubrey","Audie","Audra","Audreanne","Audrey","August","Augusta","Augustine","Augustus","Aurelia","Aurelie","Aurelio","Aurore","Austen","Austin","Austyn","Autumn","Ava","Avery","Avis","Axel","Ayana","Ayden","Ayla","Aylin","Baby","Bailee","Bailey","Barbara","Barney","Baron","Barrett","Barry","Bart","Bartholome","Barton","Baylee","Beatrice","Beau","Beaulah","Bell","Bella","Belle","Ben","Benedict","Benjamin","Bennett","Bennie","Benny","Benton","Berenice","Bernadette","Bernadine","Bernard","Bernardo","Berneice","Bernhard","Bernice","Bernie","Berniece","Bernita","Berry","Bert","Berta","Bertha","Bertram","Bertrand","Beryl","Bessie","Beth","Bethany","Bethel","Betsy","Bette","Bettie","Betty","Bettye","Beulah","Beverly","Bianka","Bill","Billie","Billy","Birdie","Blair","Blaise","Blake","Blanca","Blanche","Blaze","Bo","Bobbie","Bobby","Bonita","Bonnie","Boris","Boyd","Brad","Braden","Bradford","Bradley","Bradly","Brady","Braeden","Brain","Brandi","Brando","Brandon","Brandt","Brandy","Brandyn","Brannon","Branson","Brant","Braulio","Braxton","Brayan","Breana","Breanna","Breanne","Brenda","Brendan","Brenden","Brendon","Brenna","Brennan","Brennon","Brent","Bret","Brett","Bria","Brian","Briana","Brianne","Brice","Bridget","Bridgette","Bridie","Brielle","Brigitte","Brionna","Brisa","Britney","Brittany","Brock","Broderick","Brody","Brook","Brooke","Brooklyn","Brooks","Brown","Bruce","Bryana","Bryce","Brycen","Bryon","Buck","Bud","Buddy","Buford","Bulah","Burdette","Burley","Burnice","Buster","Cade","Caden","Caesar","Caitlyn","Cale","Caleb","Caleigh","Cali","Calista","Callie","Camden","Cameron","Camila","Camilla","Camille","Camren","Camron","Camryn","Camylle","Candace","Candelario","Candice","Candida","Candido","Cara","Carey","Carissa","Carlee","Carleton","Carley","Carli","Carlie","Carlo","Carlos","Carlotta","Carmel","Carmela","Carmella","Carmelo","Carmen","Carmine","Carol","Carolanne","Carole","Carolina","Caroline","Carolyn","Carolyne","Carrie","Carroll","Carson","Carter","Cary","Casandra","Casey","Casimer","Casimir","Casper","Cassandra","Cassandre","Cassidy","Cassie","Catalina","Caterina","Catharine","Catherine","Cathrine","Cathryn","Cathy","Cayla","Ceasar","Cecelia","Cecil","Cecile","Cecilia","Cedrick","Celestine","Celestino","Celia","Celine","Cesar","Chad","Chadd","Chadrick","Chaim","Chance","Chandler","Chanel","Chanelle","Charity","Charlene","Charles","Charley","Charlie","Charlotte","Chase","Chasity","Chauncey","Chaya","Chaz","Chelsea","Chelsey","Chelsie","Chesley","Chester","Chet","Cheyanne","Cheyenne","Chloe","Chris","Christ","Christa","Christelle","Christian","Christiana","Christina","Christine","Christop","Christophe","Christopher","Christy","Chyna","Ciara","Cicero","Cielo","Cierra","Cindy","Citlalli","Clair","Claire","Clara","Clarabelle","Clare","Clarissa","Clark","Claud","Claude","Claudia","Claudie","Claudine","Clay","Clemens","Clement","Clementina","Clementine","Clemmie","Cleo","Cleora","Cleta","Cletus","Cleve","Cleveland","Clifford","Clifton","Clint","Clinton","Clotilde","Clovis","Cloyd","Clyde","Coby","Cody","Colby","Cole","Coleman","Colin","Colleen","Collin","Colt","Colten","Colton","Columbus","Concepcion","Conner","Connie","Connor","Conor","Conrad","Constance","Constantin","Consuelo","Cooper","Cora","Coralie","Corbin","Cordelia","Cordell","Cordia","Cordie","Corene","Corine","Cornelius","Cornell","Corrine","Cortez","Cortney","Cory","Coty","Courtney","Coy","Craig","Crawford","Creola","Cristal","Cristian","Cristina","Cristobal","Cristopher","Cruz","Crystal","Crystel","Cullen","Curt","Curtis","Cydney","Cynthia","Cyril","Cyrus","Dagmar","Dahlia","Daija","Daisha","Daisy","Dakota","Dale","Dallas","Dallin","Dalton","Damaris","Dameon","Damian","Damien","Damion","Damon","Dan","Dana","Dandre","Dane","D'angelo","Dangelo","Danial","Daniela","Daniella","Danielle","Danika","Dannie","Danny","Dante","Danyka","Daphne","Daphnee","Daphney","Darby","Daren","Darian","Dariana","Darien","Dario","Darion","Darius","Darlene","Daron","Darrel","Darrell","Darren","Darrick","Darrin","Darrion","Darron","Darryl","Darwin","Daryl","Dashawn","Dasia","Dave","David","Davin","Davion","Davon","Davonte","Dawn","Dawson","Dax","Dayana","Dayna","Dayne","Dayton","Dean","Deangelo","Deanna","Deborah","Declan","Dedric","Dedrick","Dee","Deion","Deja","Dejah","Dejon","Dejuan","Delaney","Delbert","Delfina","Delia","Delilah","Dell","Della","Delmer","Delores","Delpha","Delphia","Delphine","Delta","Demarco","Demarcus","Demario","Demetris","Demetrius","Demond","Dena","Denis","Dennis","Deon","Deondre","Deontae","Deonte","Dereck","Derek","Derick","Deron","Derrick","Deshaun","Deshawn","Desiree","Desmond","Dessie","Destany","Destin","Destinee","Destiney","Destini","Destiny","Devan","Devante","Deven","Devin","Devon","Devonte","Devyn","Dewayne","Dewitt","Dexter","Diamond","Diana","Dianna","Diego","Dillan","Dillon","Dimitri","Dina","Dino","Dion","Dixie","Dock","Dolly","Dolores","Domenic","Domenica","Domenick","Domenico","Domingo","Dominic","Dominique","Don","Donald","Donato","Donavon","Donna","Donnell","Donnie","Donny","Dora","Dorcas","Dorian","Doris","Dorothea","Dorothy","Dorris","Dortha","Dorthy","Doug","Douglas","Dovie","Doyle","Drake","Drew","Duane","Dudley","Dulce","Duncan","Durward","Dustin","Dusty","Dwight","Dylan","Earl","Earlene","Earline","Earnest","Earnestine","Easter","Easton","Ebba","Ebony","Ed","Eda","Edd","Eddie","Eden","Edgar","Edgardo","Edison","Edmond","Edmund","Edna","Eduardo","Edward","Edwardo","Edwin","Edwina","Edyth","Edythe","Effie","Efrain","Efren","Eileen","Einar","Eino","Eladio","Elaina","Elbert","Elda","Eldon","Eldora","Eldred","Eldridge","Eleanora","Eleanore","Eleazar","Electa","Elena","Elenor","Elenora","Eleonore","Elfrieda","Eli","Elian","Eliane","Elias","Eliezer","Elijah","Elinor","Elinore","Elisa","Elisabeth","Elise","Eliseo","Elisha","Elissa","Eliza","Elizabeth","Ella","Ellen","Ellie","Elliot","Elliott","Ellis","Ellsworth","Elmer","Elmira","Elmo","Elmore","Elna","Elnora","Elody","Eloisa","Eloise","Elouise","Eloy","Elroy","Elsa","Else","Elsie","Elta","Elton","Elva","Elvera","Elvie","Elvis","Elwin","Elwyn","Elyse","Elyssa","Elza","Emanuel","Emelia","Emelie","Emely","Emerald","Emerson","Emery","Emie","Emil","Emile","Emilia","Emiliano","Emilie","Emilio","Emily","Emma","Emmalee","Emmanuel","Emmanuelle","Emmet","Emmett","Emmie","Emmitt","Emmy","Emory","Ena","Enid","Enoch","Enola","Enos","Enrico","Enrique","Ephraim","Era","Eriberto","Eric","Erica","Erich","Erick","Ericka","Erik","Erika","Erin","Erling","Erna","Ernest","Ernestina","Ernestine","Ernesto","Ernie","Ervin","Erwin","Eryn","Esmeralda","Esperanza","Esta","Esteban","Estefania","Estel","Estell","Estella","Estelle","Estevan","Esther","Estrella","Etha","Ethan","Ethel","Ethelyn","Ethyl","Ettie","Eudora","Eugene","Eugenia","Eula","Eulah","Eulalia","Euna","Eunice","Eusebio","Eva","Evalyn","Evan","Evangeline","Evans","Eve","Eveline","Evelyn","Everardo","Everett","Everette","Evert","Evie","Ewald","Ewell","Ezekiel","Ezequiel","Ezra","Fabian","Fabiola","Fae","Fannie","Fanny","Fatima","Faustino","Fausto","Favian","Fay","Faye","Federico","Felicia","Felicita","Felicity","Felipa","Felipe","Felix","Felton","Fermin","Fern","Fernando","Ferne","Fidel","Filiberto","Filomena","Finn","Fiona","Flavie","Flavio","Fleta","Fletcher","Flo","Florence","Florencio","Florian","Florida","Florine","Flossie","Floy","Floyd","Ford","Forest","Forrest","Foster","Frances","Francesca","Francesco","Francis","Francisca","Francisco","Franco","Frank","Frankie","Franz","Fred","Freda","Freddie","Freddy","Frederic","Frederick","Frederik","Frederique","Fredrick","Fredy","Freeda","Freeman","Freida","Frida","Frieda","Friedrich","Fritz","Furman","Gabe","Gabriel","Gabriella","Gabrielle","Gaetano","Gage","Gail","Gardner","Garett","Garfield","Garland","Garnet","Garnett","Garret","Garrett","Garrick","Garrison","Garry","Garth","Gaston","Gavin","Gayle","Gene","General","Genesis","Genevieve","Gennaro","Genoveva","Geo","Geoffrey","George","Georgette","Georgiana","Georgianna","Geovanni","Geovanny","Geovany","Gerald","Geraldine","Gerard","Gerardo","Gerda","Gerhard","Germaine","German","Gerry","Gerson","Gertrude","Gia","Gianni","Gideon","Gilbert","Gilberto","Gilda","Giles","Gillian","Gina","Gino","Giovani","Giovanna","Giovanni","Giovanny","Gisselle","Giuseppe","Gladyce","Gladys","Glen","Glenda","Glenna","Glennie","Gloria","Godfrey","Golda","Golden","Gonzalo","Gordon","Grace","Gracie","Graciela","Grady","Graham","Grant","Granville","Grayce","Grayson","Green","Greg","Gregg","Gregoria","Gregorio","Gregory","Greta","Gretchen","Greyson","Griffin","Grover","Guadalupe","Gudrun","Guido","Guillermo","Guiseppe","Gunnar","Gunner","Gus","Gussie","Gust","Gustave","Guy","Gwen","Gwendolyn","Hadley","Hailee","Hailey","Hailie","Hal","Haleigh","Haley","Halie","Halle","Hallie","Hank","Hanna","Hannah","Hans","Hardy","Harley","Harmon","Harmony","Harold","Harrison","Harry","Harvey","Haskell","Hassan","Hassie","Hattie","Haven","Hayden","Haylee","Hayley","Haylie","Hazel","Hazle","Heath","Heather","Heaven","Heber","Hector","Heidi","Helen","Helena","Helene","Helga","Hellen","Helmer","Heloise","Henderson","Henri","Henriette","Henry","Herbert","Herman","Hermann","Hermina","Herminia","Herminio","Hershel","Herta","Hertha","Hester","Hettie","Hilario","Hilbert","Hilda","Hildegard","Hillard","Hillary","Hilma","Hilton","Hipolito","Hiram","Hobart","Holden","Hollie","Hollis","Holly","Hope","Horace","Horacio","Hortense","Hosea","Houston","Howard","Howell","Hoyt","Hubert","Hudson","Hugh","Hulda","Humberto","Hunter","Hyman","Ian","Ibrahim","Icie","Ida","Idell","Idella","Ignacio","Ignatius","Ike","Ila","Ilene","Iliana","Ima","Imani","Imelda","Immanuel","Imogene","Ines","Irma","Irving","Irwin","Isaac","Isabel","Isabell","Isabella","Isabelle","Isac","Isadore","Isai","Isaiah","Isaias","Isidro","Ismael","Isobel","Isom","Israel","Issac","Itzel","Iva","Ivah","Ivory","Ivy","Izabella","Izaiah","Jabari","Jace","Jacey","Jacinthe","Jacinto","Jack","Jackeline","Jackie","Jacklyn","Jackson","Jacky","Jaclyn","Jacquelyn","Jacques","Jacynthe","Jada","Jade","Jaden","Jadon","Jadyn","Jaeden","Jaida","Jaiden","Jailyn","Jaime","Jairo","Jakayla","Jake","Jakob","Jaleel","Jalen","Jalon","Jalyn","Jamaal","Jamal","Jamar","Jamarcus","Jamel","Jameson","Jamey","Jamie","Jamil","Jamir","Jamison","Jammie","Jan","Jana","Janae","Jane","Janelle","Janessa","Janet","Janice","Janick","Janie","Janis","Janiya","Jannie","Jany","Jaquan","Jaquelin","Jaqueline","Jared","Jaren","Jarod","Jaron","Jarred","Jarrell","Jarret","Jarrett","Jarrod","Jarvis","Jasen","Jasmin","Jason","Jasper","Jaunita","Javier","Javon","Javonte","Jay","Jayce","Jaycee","Jayda","Jayde","Jayden","Jaydon","Jaylan","Jaylen","Jaylin","Jaylon","Jayme","Jayne","Jayson","Jazlyn","Jazmin","Jazmyn","Jazmyne","Jean","Jeanette","Jeanie","Jeanne","Jed","Jedediah","Jedidiah","Jeff","Jefferey","Jeffery","Jeffrey","Jeffry","Jena","Jenifer","Jennie","Jennifer","Jennings","Jennyfer","Jensen","Jerad","Jerald","Jeramie","Jeramy","Jerel","Jeremie","Jeremy","Jermain","Jermaine","Jermey","Jerod","Jerome","Jeromy","Jerrell","Jerrod","Jerrold","Jerry","Jess","Jesse","Jessica","Jessie","Jessika","Jessy","Jessyca","Jesus","Jett","Jettie","Jevon","Jewel","Jewell","Jillian","Jimmie","Jimmy","Jo","Joan","Joana","Joanie","Joanne","Joannie","Joanny","Joany","Joaquin","Jocelyn","Jodie","Jody","Joe","Joel","Joelle","Joesph","Joey","Johan","Johann","Johanna","Johathan","John","Johnathan","Johnathon","Johnnie","Johnny","Johnpaul","Johnson","Jolie","Jon","Jonas","Jonatan","Jonathan","Jonathon","Jordan","Jordane","Jordi","Jordon","Jordy","Jordyn","Jorge","Jose","Josefa","Josefina","Joseph","Josephine","Josh","Joshua","Joshuah","Josiah","Josiane","Josianne","Josie","Josue","Jovan","Jovani","Jovanny","Jovany","Joy","Joyce","Juana","Juanita","Judah","Judd","Jude","Judge","Judson","Judy","Jules","Julia","Julian","Juliana","Julianne","Julie","Julien","Juliet","Julio","Julius","June","Junior","Junius","Justen","Justice","Justina","Justine","Juston","Justus","Justyn","Juvenal","Juwan","Kacey","Kaci","Kacie","Kade","Kaden","Kadin","Kaela","Kaelyn","Kaia","Kailee","Kailey","Kailyn","Kaitlin","Kaitlyn","Kale","Kaleb","Kaleigh","Kaley","Kali","Kallie","Kameron","Kamille","Kamren","Kamron","Kamryn","Kane","Kara","Kareem","Karelle","Karen","Kari","Kariane","Karianne","Karina","Karine","Karl","Karlee","Karley","Karli","Karlie","Karolann","Karson","Kasandra","Kasey","Kassandra","Katarina","Katelin","Katelyn","Katelynn","Katharina","Katherine","Katheryn","Kathleen","Kathlyn","Kathryn","Kathryne","Katlyn","Katlynn","Katrina","Katrine","Kattie","Kavon","Kay","Kaya","Kaycee","Kayden","Kayla","Kaylah","Kaylee","Kayleigh","Kayley","Kayli","Kaylie","Kaylin","Keagan","Keanu","Keara","Keaton","Keegan","Keeley","Keely","Keenan","Keira","Keith","Kellen","Kelley","Kelli","Kellie","Kelly","Kelsi","Kelsie","Kelton","Kelvin","Ken","Kendall","Kendra","Kendrick","Kenna","Kennedi","Kennedy","Kenneth","Kennith","Kenny","Kenton","Kenya","Kenyatta","Kenyon","Keon","Keshaun","Keshawn","Keven","Kevin","Kevon","Keyon","Keyshawn","Khalid","Khalil","Kian","Kiana","Kianna","Kiara","Kiarra","Kiel","Kiera","Kieran","Kiley","Kim","Kimberly","King","Kip","Kira","Kirk","Kirsten","Kirstin","Kitty","Kobe","Koby","Kody","Kolby","Kole","Korbin","Korey","Kory","Kraig","Kris","Krista","Kristian","Kristin","Kristina","Kristofer","Kristoffer","Kristopher","Kristy","Krystal","Krystel","Krystina","Kurt","Kurtis","Kyla","Kyle","Kylee","Kyleigh","Kyler","Kylie","Kyra","Lacey","Lacy","Ladarius","Lafayette","Laila","Laisha","Lamar","Lambert","Lamont","Lance","Landen","Lane","Laney","Larissa","Laron","Larry","Larue","Laura","Laurel","Lauren","Laurence","Lauretta","Lauriane","Laurianne","Laurie","Laurine","Laury","Lauryn","Lavada","Lavern","Laverna","Laverne","Lavina","Lavinia","Lavon","Lavonne","Lawrence","Lawson","Layla","Layne","Lazaro","Lea","Leann","Leanna","Leanne","Leatha","Leda","Lee","Leif","Leila","Leilani","Lela","Lelah","Leland","Lelia","Lempi","Lemuel","Lenna","Lennie","Lenny","Lenora","Lenore","Leo","Leola","Leon","Leonard","Leonardo","Leone","Leonel","Leonie","Leonor","Leonora","Leopold","Leopoldo","Leora","Lera","Lesley","Leslie","Lesly","Lessie","Lester","Leta","Letha","Letitia","Levi","Lew","Lewis","Lexi","Lexie","Lexus","Lia","Liam","Liana","Libbie","Libby","Lila","Lilian","Liliana","Liliane","Lilla","Lillian","Lilliana","Lillie","Lilly","Lily","Lilyan","Lina","Lincoln","Linda","Lindsay","Lindsey","Linnea","Linnie","Linwood","Lionel","Lisa","Lisandro","Lisette","Litzy","Liza","Lizeth","Lizzie","Llewellyn","Lloyd","Logan","Lois","Lola","Lolita","Loma","Lon","London","Lonie","Lonnie","Lonny","Lonzo","Lora","Loraine","Loren","Lorena","Lorenz","Lorenza","Lorenzo","Lori","Lorine","Lorna","Lottie","Lou","Louie","Louisa","Lourdes","Louvenia","Lowell","Loy","Loyal","Loyce","Lucas","Luciano","Lucie","Lucienne","Lucile","Lucinda","Lucio","Lucious","Lucius","Lucy","Ludie","Ludwig","Lue","Luella","Luigi","Luis","Luisa","Lukas","Lula","Lulu","Luna","Lupe","Lura","Lurline","Luther","Luz","Lyda","Lydia","Lyla","Lynn","Lyric","Lysanne","Mabel","Mabelle","Mable","Mac","Macey","Maci","Macie","Mack","Mackenzie","Macy","Madaline","Madalyn","Maddison","Madeline","Madelyn","Madelynn","Madge","Madie","Madilyn","Madisen","Madison","Madisyn","Madonna","Madyson","Mae","Maegan","Maeve","Mafalda","Magali","Magdalen","Magdalena","Maggie","Magnolia","Magnus","Maia","Maida","Maiya","Major","Makayla","Makenna","Makenzie","Malachi","Malcolm","Malika","Malinda","Mallie","Mallory","Malvina","Mandy","Manley","Manuel","Manuela","Mara","Marc","Marcel","Marcelina","Marcelino","Marcella","Marcelle","Marcellus","Marcelo","Marcia","Marco","Marcos","Marcus","Margaret","Margarete","Margarett","Margaretta","Margarette","Margarita","Marge","Margie","Margot","Margret","Marguerite","Maria","Mariah","Mariam","Marian","Mariana","Mariane","Marianna","Marianne","Mariano","Maribel","Marie","Mariela","Marielle","Marietta","Marilie","Marilou","Marilyne","Marina","Mario","Marion","Marisa","Marisol","Maritza","Marjolaine","Marjorie","Marjory","Mark","Markus","Marlee","Marlen","Marlene","Marley","Marlin","Marlon","Marques","Marquis","Marquise","Marshall","Marta","Martin","Martina","Martine","Marty","Marvin","Mary","Maryam","Maryjane","Maryse","Mason","Mateo","Mathew","Mathias","Mathilde","Matilda","Matilde","Matt","Matteo","Mattie","Maud","Maude","Maudie","Maureen","Maurice","Mauricio","Maurine","Maverick","Mavis","Max","Maxie","Maxime","Maximilian","Maximillia","Maximillian","Maximo","Maximus","Maxine","Maxwell","May","Maya","Maybell","Maybelle","Maye","Maymie","Maynard","Mayra","Mazie","Mckayla","Mckenna","Mckenzie","Meagan","Meaghan","Meda","Megane","Meggie","Meghan","Mekhi","Melany","Melba","Melisa","Melissa","Mellie","Melody","Melvin","Melvina","Melyna","Melyssa","Mercedes","Meredith","Merl","Merle","Merlin","Merritt","Mertie","Mervin","Meta","Mia","Micaela","Micah","Michael","Michaela","Michale","Micheal","Michel","Michele","Michelle","Miguel","Mikayla","Mike","Mikel","Milan","Miles","Milford","Miller","Millie","Milo","Milton","Mina","Minerva","Minnie","Miracle","Mireille","Mireya","Misael","Missouri","Misty","Mitchel","Mitchell","Mittie","Modesta","Modesto","Mohamed","Mohammad","Mohammed","Moises","Mollie","Molly","Mona","Monica","Monique","Monroe","Monserrat","Monserrate","Montana","Monte","Monty","Morgan","Moriah","Morris","Mortimer","Morton","Mose","Moses","Moshe","Mossie","Mozell","Mozelle","Muhammad","Muriel","Murl","Murphy","Murray","Mustafa","Mya","Myah","Mylene","Myles","Myra","Myriam","Myrl","Myrna","Myron","Myrtice","Myrtie","Myrtis","Myrtle","Nadia","Nakia","Name","Nannie","Naomi","Naomie","Napoleon","Narciso","Nash","Nasir","Nat","Natalia","Natalie","Natasha","Nathan","Nathanael","Nathanial","Nathaniel","Nathen","Nayeli","Neal","Ned","Nedra","Neha","Neil","Nelda","Nella","Nelle","Nellie","Nels","Nelson","Neoma","Nestor","Nettie","Neva","Newell","Newton","Nia","Nicholas","Nicholaus","Nichole","Nick","Nicklaus","Nickolas","Nico","Nicola","Nicolas","Nicole","Nicolette","Nigel","Nikita","Nikki","Nikko","Niko","Nikolas","Nils","Nina","Noah","Noble","Noe","Noel","Noelia","Noemi","Noemie","Noemy","Nola","Nolan","Nona","Nora","Norbert","Norberto","Norene","Norma","Norris","Norval","Norwood","Nova","Novella","Nya","Nyah","Nyasia","Obie","Oceane","Ocie","Octavia","Oda","Odell","Odessa","Odie","Ofelia","Okey","Ola","Olaf","Ole","Olen","Oleta","Olga","Olin","Oliver","Ollie","Oma","Omari","Omer","Ona","Onie","Opal","Ophelia","Ora","Oral","Oran","Oren","Orie","Orin","Orion","Orland","Orlando","Orlo","Orpha","Orrin","Orval","Orville","Osbaldo","Osborne","Oscar","Osvaldo","Oswald","Oswaldo","Otha","Otho","Otilia","Otis","Ottilie","Ottis","Otto","Ova","Owen","Ozella","Pablo","Paige","Palma","Pamela","Pansy","Paolo","Paris","Parker","Pascale","Pasquale","Pat","Patience","Patricia","Patrick","Patsy","Pattie","Paul","Paula","Pauline","Paxton","Payton","Pearl","Pearlie","Pearline","Pedro","Peggie","Penelope","Percival","Percy","Perry","Pete","Peter","Petra","Peyton","Philip","Phoebe","Phyllis","Pierce","Pierre","Pietro","Pink","Pinkie","Piper","Polly","Porter","Precious","Presley","Preston","Price","Prince","Princess","Priscilla","Providenci","Prudence","Queen","Queenie","Quentin","Quincy","Quinn","Quinten","Quinton","Rachael","Rachel","Rachelle","Rae","Raegan","Rafael","Rafaela","Raheem","Rahsaan","Rahul","Raina","Raleigh","Ralph","Ramiro","Ramon","Ramona","Randal","Randall","Randi","Randy","Ransom","Raoul","Raphael","Raphaelle","Raquel","Rashad","Rashawn","Rasheed","Raul","Raven","Ray","Raymond","Raymundo","Reagan","Reanna","Reba","Rebeca","Rebecca","Rebeka","Rebekah","Reece","Reed","Reese","Regan","Reggie","Reginald","Reid","Reilly","Reina","Reinhold","Remington","Rene","Renee","Ressie","Reta","Retha","Retta","Reuben","Reva","Rex","Rey","Reyes","Reymundo","Reyna","Reynold","Rhea","Rhett","Rhianna","Rhiannon","Rhoda","Ricardo","Richard","Richie","Richmond","Rick","Rickey","Rickie","Ricky","Rico","Rigoberto","Riley","Rita","River","Robb","Robbie","Robert","Roberta","Roberto","Robin","Robyn","Rocio","Rocky","Rod","Roderick","Rodger","Rodolfo","Rodrick","Rodrigo","Roel","Rogelio","Roger","Rogers","Rolando","Rollin","Roma","Romaine","Roman","Ron","Ronaldo","Ronny","Roosevelt","Rory","Rosa","Rosalee","Rosalia","Rosalind","Rosalinda","Rosalyn","Rosamond","Rosanna","Rosario","Roscoe","Rose","Rosella","Roselyn","Rosemarie","Rosemary","Rosendo","Rosetta","Rosie","Rosina","Roslyn","Ross","Rossie","Rowan","Rowena","Rowland","Roxane","Roxanne","Roy","Royal","Royce","Rozella","Ruben","Rubie","Ruby","Rubye","Rudolph","Rudy","Rupert","Russ","Russel","Russell","Rusty","Ruth","Ruthe","Ruthie","Ryan","Ryann","Ryder","Rylan","Rylee","Ryleigh","Ryley","Sabina","Sabrina","Sabryna","Sadie","Sadye","Sage","Saige","Sallie","Sally","Salma","Salvador","Salvatore","Sam","Samanta","Samantha","Samara","Samir","Sammie","Sammy","Samson","Sandra","Sandrine","Sandy","Sanford","Santa","Santiago","Santina","Santino","Santos","Sarah","Sarai","Sarina","Sasha","Saul","Savanah","Savanna","Savannah","Savion","Scarlett","Schuyler","Scot","Scottie","Scotty","Seamus","Sean","Sebastian","Sedrick","Selena","Selina","Selmer","Serena","Serenity","Seth","Shad","Shaina","Shakira","Shana","Shane","Shanel","Shanelle","Shania","Shanie","Shaniya","Shanna","Shannon","Shanny","Shanon","Shany","Sharon","Shaun","Shawn","Shawna","Shaylee","Shayna","Shayne","Shea","Sheila","Sheldon","Shemar","Sheridan","Sherman","Sherwood","Shirley","Shyann","Shyanne","Sibyl","Sid","Sidney","Sienna","Sierra","Sigmund","Sigrid","Sigurd","Silas","Sim","Simeon","Simone","Sincere","Sister","Skye","Skyla","Skylar","Sofia","Soledad","Solon","Sonia","Sonny","Sonya","Sophia","Sophie","Spencer","Stacey","Stacy","Stan","Stanford","Stanley","Stanton","Stefan","Stefanie","Stella","Stephan","Stephania","Stephanie","Stephany","Stephen","Stephon","Sterling","Steve","Stevie","Stewart","Stone","Stuart","Summer","Sunny","Susan","Susana","Susanna","Susie","Suzanne","Sven","Syble","Sydnee","Sydney","Sydni","Sydnie","Sylvan","Sylvester","Sylvia","Tabitha","Tad","Talia","Talon","Tamara","Tamia","Tania","Tanner","Tanya","Tara","Taryn","Tate","Tatum","Tatyana","Taurean","Tavares","Taya","Taylor","Teagan","Ted","Telly","Terence","Teresa","Terrance","Terrell","Terrence","Terrill","Terry","Tess","Tessie","Tevin","Thad","Thaddeus","Thalia","Thea","Thelma","Theo","Theodora","Theodore","Theresa","Therese","Theresia","Theron","Thomas","Thora","Thurman","Tia","Tiana","Tianna","Tiara","Tierra","Tiffany","Tillman","Timmothy","Timmy","Timothy","Tina","Tito","Titus","Tobin","Toby","Tod","Tom","Tomas","Tomasa","Tommie","Toney","Toni","Tony","Torey","Torrance","Torrey","Toy","Trace","Tracey","Tracy","Travis","Travon","Tre","Tremaine","Tremayne","Trent","Trenton","Tressa","Tressie","Treva","Trever","Trevion","Trevor","Trey","Trinity","Trisha","Tristian","Tristin","Triston","Troy","Trudie","Trycia","Trystan","Turner","Twila","Tyler","Tyra","Tyree","Tyreek","Tyrel","Tyrell","Tyrese","Tyrique","Tyshawn","Tyson","Ubaldo","Ulices","Ulises","Una","Unique","Urban","Uriah","Uriel","Ursula","Vada","Valentin","Valentina","Valentine","Valerie","Vallie","Van","Vance","Vanessa","Vaughn","Veda","Velda","Vella","Velma","Velva","Vena","Verda","Verdie","Vergie","Verla","Verlie","Vern","Verna","Verner","Vernice","Vernie","Vernon","Verona","Veronica","Vesta","Vicenta","Vicente","Vickie","Vicky","Victor","Victoria","Vida","Vidal","Vilma","Vince","Vincent","Vincenza","Vincenzo","Vinnie","Viola","Violet","Violette","Virgie","Virgil","Virginia","Virginie","Vita","Vito","Viva","Vivian","Viviane","Vivianne","Vivien","Vivienne","Vladimir","Wade","Waino","Waldo","Walker","Wallace","Walter","Walton","Wanda","Ward","Warren","Watson","Wava","Waylon","Wayne","Webster","Weldon","Wellington","Wendell","Wendy","Werner","Westley","Weston","Whitney","Wilber","Wilbert","Wilburn","Wiley","Wilford","Wilfred","Wilfredo","Wilfrid","Wilhelm","Wilhelmine","Will","Willa","Willard","William","Willie","Willis","Willow","Willy","Wilma","Wilmer","Wilson","Wilton","Winfield","Winifred","Winnifred","Winona","Winston","Woodrow","Wyatt","Wyman","Xander","Xavier","Xzavier","Yadira","Yasmeen","Yasmin","Yasmine","Yazmin","Yesenia","Yessenia","Yolanda","Yoshiko","Yvette","Yvonne","Zachariah","Zachary","Zachery","Zack","Zackary","Zackery","Zakary","Zander","Zane","Zaria","Zechariah","Zelda","Zella","Zelma","Zena","Zetta","Zion","Zita","Zoe","Zoey","Zoie","Zoila","Zola","Zora","Zula"],female:["Mary","Patricia","Linda","Barbara","Elizabeth","Jennifer","Maria","Susan","Margaret","Dorothy","Lisa","Nancy","Karen","Betty","Helen","Sandra","Donna","Carol","Ruth","Sharon","Michelle","Laura","Sarah","Kimberly","Deborah","Jessica","Shirley","Cynthia","Angela","Melissa","Brenda","Amy","Anna","Rebecca","Virginia","Kathleen","Pamela","Martha","Debra","Amanda","Stephanie","Carolyn","Christine","Marie","Janet","Catherine","Frances","Ann","Joyce","Diane","Alice","Julie","Heather","Teresa","Doris","Gloria","Evelyn","Jean","Cheryl","Mildred","Katherine","Joan","Ashley","Judith","Rose","Janice","Kelly","Nicole","Judy","Christina","Kathy","Theresa","Beverly","Denise","Tammy","Irene","Jane","Lori","Rachel","Marilyn","Andrea","Kathryn","Louise","Sara","Anne","Jacqueline","Wanda","Bonnie","Julia","Ruby","Lois","Tina","Phyllis","Norma","Paula","Diana","Annie","Lillian","Emily","Robin","Peggy","Crystal","Gladys","Rita","Dawn","Connie","Florence","Tracy","Edna","Tiffany","Carmen","Rosa","Cindy","Grace","Wendy","Victoria","Edith","Kim","Sherry","Sylvia","Josephine","Thelma","Shannon","Sheila","Ethel","Ellen","Elaine","Marjorie","Carrie","Charlotte","Monica","Esther","Pauline","Emma","Juanita","Anita","Rhonda","Hazel","Amber","Eva","Debbie","April","Leslie","Clara","Lucille","Jamie","Joanne","Eleanor","Valerie","Danielle","Megan","Alicia","Suzanne","Michele","Gail","Bertha","Darlene","Veronica","Jill","Erin","Geraldine","Lauren","Cathy","Joann","Lorraine","Lynn","Sally","Regina","Erica","Beatrice","Dolores","Bernice","Audrey","Yvonne","Annette","June","Samantha","Marion","Dana","Stacy","Ana","Renee","Ida","Vivian","Roberta","Holly","Brittany","Melanie","Loretta","Yolanda","Jeanette","Laurie","Katie","Kristen","Vanessa","Alma","Sue","Elsie","Beth","Jeanne","Vicki","Carla","Tara","Rosemary","Eileen","Terri","Gertrude","Lucy","Tonya","Ella","Stacey","Wilma","Gina","Kristin","Jessie","Natalie","Agnes","Vera","Willie","Charlene","Bessie","Delores","Melinda","Pearl","Arlene","Maureen","Colleen","Allison","Tamara","Joy","Georgia","Constance","Lillie","Claudia","Jackie","Marcia","Tanya","Nellie","Minnie","Marlene","Heidi","Glenda","Lydia","Viola","Courtney","Marian","Stella","Caroline","Dora","Jo","Vickie","Mattie","Terry","Maxine","Irma","Mabel","Marsha","Myrtle","Lena","Christy","Deanna","Patsy","Hilda","Gwendolyn","Jennie","Nora","Margie","Nina","Cassandra","Leah","Penny","Kay","Priscilla","Naomi","Carole","Brandy","Olga","Billie","Dianne","Tracey","Leona","Jenny","Felicia","Sonia","Miriam","Velma","Becky","Bobbie","Violet","Kristina","Toni","Misty","Mae","Shelly","Daisy","Ramona","Sherri","Erika","Katrina","Claire","Lindsey","Lindsay","Geneva","Guadalupe","Belinda","Margarita","Sheryl","Cora","Faye","Ada","Natasha","Sabrina","Isabel","Marguerite","Hattie","Harriet","Molly","Cecilia","Kristi","Brandi","Blanche","Sandy","Rosie","Joanna","Iris","Eunice","Angie","Inez","Lynda","Madeline","Amelia","Alberta","Genevieve","Monique","Jodi","Janie","Maggie","Kayla","Sonya","Jan","Lee","Kristine","Candace","Fannie","Maryann","Opal","Alison","Yvette","Melody","Luz","Susie","Olivia","Flora","Shelley","Kristy","Mamie","Lula","Lola","Verna","Beulah","Antoinette","Candice","Juana","Jeannette","Pam","Kelli","Hannah","Whitney","Bridget","Karla","Celia","Latoya","Patty","Shelia","Gayle","Della","Vicky","Lynne","Sheri","Marianne","Kara","Jacquelyn","Erma","Blanca","Myra","Leticia","Pat","Krista","Roxanne","Angelica","Johnnie","Robyn","Francis","Adrienne","Rosalie","Alexandra","Brooke","Bethany","Sadie","Bernadette","Traci","Jody","Kendra","Jasmine","Nichole","Rachael","Chelsea","Mable","Ernestine","Muriel","Marcella","Elena","Krystal","Angelina","Nadine","Kari","Estelle","Dianna","Paulette","Lora","Mona","Doreen","Rosemarie","Angel","Desiree","Antonia","Hope","Ginger","Janis","Betsy","Christie","Freda","Mercedes","Meredith","Lynette","Teri","Cristina","Eula","Leigh","Meghan","Sophia","Eloise","Rochelle","Gretchen","Cecelia","Raquel","Henrietta","Alyssa","Jana","Kelley","Gwen","Kerry","Jenna","Tricia","Laverne","Olive","Alexis","Tasha","Silvia","Elvira","Casey","Delia","Sophie","Kate","Patti","Lorena","Kellie","Sonja","Lila","Lana","Darla","May","Mindy","Essie","Mandy","Lorene","Elsa","Josefina","Jeannie","Miranda","Dixie","Lucia","Marta","Faith","Lela","Johanna","Shari","Camille","Tami","Shawna","Elisa","Ebony","Melba","Ora","Nettie","Tabitha","Ollie","Jaime","Winifred","Kristie"],male:["James","John","Robert","Michael","William","David","Richard","Charles","Joseph","Thomas","Christopher","Daniel","Paul","Mark","Donald","George","Kenneth","Steven","Edward","Brian","Ronald","Anthony","Kevin","Jason","Matthew","Gary","Timothy","Jose","Larry","Jeffrey","Frank","Scott","Eric","Stephen","Andrew","Raymond","Gregory","Joshua","Jerry","Dennis","Walter","Patrick","Peter","Harold","Douglas","Henry","Carl","Arthur","Ryan","Roger","Joe","Juan","Jack","Albert","Jonathan","Justin","Terry","Gerald","Keith","Samuel","Willie","Ralph","Lawrence","Nicholas","Roy","Benjamin","Bruce","Brandon","Adam","Harry","Fred","Wayne","Billy","Steve","Louis","Jeremy","Aaron","Randy","Howard","Eugene","Carlos","Russell","Bobby","Victor","Martin","Ernest","Phillip","Todd","Jesse","Craig","Alan","Shawn","Clarence","Sean","Philip","Chris","Johnny","Earl","Jimmy","Antonio","Danny","Bryan","Tony","Luis","Mike","Stanley","Leonard","Nathan","Dale","Manuel","Rodney","Curtis","Norman","Allen","Marvin","Vincent","Glenn","Jeffery","Travis","Jeff","Chad","Jacob","Lee","Melvin","Alfred","Kyle","Francis","Bradley","Jesus","Herbert","Frederick","Ray","Joel","Edwin","Don","Eddie","Ricky","Troy","Randall","Barry","Alexander","Bernard","Mario","Leroy","Francisco","Marcus","Micheal","Theodore","Clifford","Miguel","Oscar","Jay","Jim","Tom","Calvin","Alex","Jon","Ronnie","Bill","Lloyd","Tommy","Leon","Derek","Warren","Darrell","Jerome","Floyd","Leo","Alvin","Tim","Wesley","Gordon","Dean","Greg","Jorge","Dustin","Pedro","Derrick","Dan","Lewis","Zachary","Corey","Herman","Maurice","Vernon","Roberto","Clyde","Glen","Hector","Shane","Ricardo","Sam","Rick","Lester","Brent","Ramon","Charlie","Tyler","Gilbert","Gene","Marc","Reginald","Ruben","Brett","Angel","Nathaniel","Rafael","Leslie","Edgar","Milton","Raul","Ben","Chester","Cecil","Duane","Franklin","Andre","Elmer","Brad","Gabriel","Ron","Mitchell","Roland","Arnold","Harvey","Jared","Adrian","Karl","Cory","Claude","Erik","Darryl","Jamie","Neil","Jessie","Christian","Javier","Fernando","Clinton","Ted","Mathew","Tyrone","Darren","Lonnie","Lance","Cody","Julio","Kelly","Kurt","Allan","Nelson","Guy","Clayton","Hugh","Max","Dwayne","Dwight","Armando","Felix","Jimmie","Everett","Jordan","Ian","Wallace","Ken","Bob","Jaime","Casey","Alfredo","Alberto","Dave","Ivan","Johnnie","Sidney","Byron","Julian","Isaac","Morris","Clifton","Willard","Daryl","Ross","Virgil","Andy","Marshall","Salvador","Perry","Kirk","Sergio","Marion","Tracy","Seth","Kent","Terrance","Rene","Eduardo","Terrence","Enrique","Freddie","Wade","Austin","Stuart","Fredrick","Arturo","Alejandro","Jackie","Joey","Nick","Luther","Wendell","Jeremiah","Evan","Julius","Dana","Donnie","Otis","Shannon","Trevor","Oliver","Luke","Homer","Gerard","Doug","Kenny","Hubert","Angelo","Shaun","Lyle","Matt","Lynn","Alfonso","Orlando","Rex","Carlton","Ernesto","Cameron","Neal","Pablo","Lorenzo","Omar","Wilbur","Blake","Grant","Horace","Roderick","Kerry","Abraham","Willis","Rickey","Jean","Ira","Andres","Cesar","Johnathan","Malcolm","Rudolph","Damon","Kelvin","Rudy","Preston","Alton","Archie","Marco","Wm","Pete","Randolph","Garry","Geoffrey","Jonathon","Felipe","Bennie","Gerardo","Ed","Dominic","Robin","Loren","Delbert","Colin","Guillermo","Earnest","Lucas","Benny","Noel","Spencer","Rodolfo","Myron","Edmund","Garrett","Salvatore","Cedric","Lowell","Gregg","Sherman","Wilson","Devin","Sylvester","Kim","Roosevelt","Israel","Jermaine","Forrest","Wilbert","Leland","Simon","Guadalupe","Clark","Irving","Carroll","Bryant","Owen","Rufus","Woodrow","Sammy","Kristopher","Mack","Levi","Marcos","Gustavo","Jake","Lionel","Marty","Taylor","Ellis","Dallas","Gilberto","Clint","Nicolas","Laurence","Ismael","Orville","Drew","Jody","Ervin","Dewey","Al","Wilfred","Josh","Hugo","Ignacio","Caleb","Tomas","Sheldon","Erick","Frankie","Stewart","Doyle","Darrel","Rogelio","Terence","Santiago","Alonzo","Elias","Bert","Elbert","Ramiro","Conrad","Pat","Noah","Grady","Phil","Cornelius","Lamar","Rolando","Clay","Percy","Dexter","Bradford","Merle","Darin","Amos","Terrell","Moses","Irvin","Saul","Roman","Darnell","Randal","Tommie","Timmy","Darrin","Winston","Brendan","Toby","Van","Abel","Dominick","Boyd","Courtney","Jan","Emilio","Elijah","Cary","Domingo","Santos","Aubrey","Emmett","Marlon","Emanuel","Jerald","Edmond"]};var sa=["Agender","Androgyne","Androgynous","Bigender","Cis female","Cis male","Cis man","Cis woman","Cis","Cisgender female","Cisgender male","Cisgender man","Cisgender woman","Cisgender","Demi-boy","Demi-girl","Demi-man","Demi-woman","Demiflux","Demigender","F2M","FTM","Female to male trans man","Female to male transgender man","Female to male transsexual man","Female to male","Gender fluid","Gender neutral","Gender nonconforming","Gender questioning","Gender variant","Genderflux","Genderqueer","Hermaphrodite","Intersex man","Intersex person","Intersex woman","Intersex","M2F","MTF","Male to female trans woman","Male to female transgender woman","Male to female transsexual woman","Male to female","Man","Multigender","Neither","Neutrois","Non-binary","Omnigender","Other","Pangender","Polygender","T* man","T* woman","Trans female","Trans male","Trans man","Trans person","Trans woman","Trans","Transsexual female","Transsexual male","Transsexual man","Transsexual person","Transsexual woman","Transsexual","Transgender female","Transgender person","Transmasculine","Trigender","Two* person","Two-spirit person","Two-spirit","Woman","Xenogender"];var da=["Solutions","Program","Brand","Security","Research","Marketing","Directives","Implementation","Integration","Functionality","Response","Paradigm","Tactics","Identity","Markets","Group","Division","Applications","Optimization","Operations","Infrastructure","Intranet","Communications","Web","Branding","Quality","Assurance","Mobility","Accounts","Data","Creative","Configuration","Accountability","Interactions","Factors","Usability","Metrics"];var ua=["Lead","Senior","Direct","Corporate","Dynamic","Future","Product","National","Regional","District","Central","Global","Customer","Investor","International","Legacy","Forward","Internal","Human","Chief","Principal"];var ca=["{{person.jobDescriptor}} {{person.jobArea}} {{person.jobType}}"];var ma=["Supervisor","Associate","Executive","Liaison","Officer","Manager","Engineer","Specialist","Director","Coordinator","Administrator","Architect","Analyst","Designer","Planner","Orchestrator","Technician","Developer","Producer","Consultant","Assistant","Facilitator","Agent","Representative","Strategist"];var ha={generic:["Abbott","Abernathy","Abshire","Adams","Altenwerth","Anderson","Ankunding","Armstrong","Auer","Aufderhar","Bahringer","Bailey","Balistreri","Barrows","Bartell","Bartoletti","Barton","Bashirian","Batz","Bauch","Baumbach","Bayer","Beahan","Beatty","Bechtelar","Becker","Bednar","Beer","Beier","Berge","Bergnaum","Bergstrom","Bernhard","Bernier","Bins","Blanda","Blick","Block","Bode","Boehm","Bogan","Bogisich","Borer","Bosco","Botsford","Boyer","Boyle","Bradtke","Brakus","Braun","Breitenberg","Brekke","Brown","Bruen","Buckridge","Carroll","Carter","Cartwright","Casper","Cassin","Champlin","Christiansen","Cole","Collier","Collins","Conn","Connelly","Conroy","Considine","Corkery","Cormier","Corwin","Cremin","Crist","Crona","Cronin","Crooks","Cruickshank","Cummerata","Cummings","Dach","D'Amore","Daniel","Dare","Daugherty","Davis","Deckow","Denesik","Dibbert","Dickens","Dicki","Dickinson","Dietrich","Donnelly","Dooley","Douglas","Doyle","DuBuque","Durgan","Ebert","Effertz","Emard","Emmerich","Erdman","Ernser","Fadel","Fahey","Farrell","Fay","Feeney","Feest","Feil","Ferry","Fisher","Flatley","Frami","Franecki","Franey","Friesen","Fritsch","Funk","Gerhold","Gerlach","Gibson","Gislason","Gleason","Gleichner","Glover","Goldner","Goodwin","Gorczany","Gottlieb","Goyette","Grady","Graham","Grant","Green","Greenfelder","Greenholt","Grimes","Gulgowski","Gusikowski","Gutkowski","Gutmann","Haag","Hackett","Hagenes","Hahn","Haley","Halvorson","Hamill","Hammes","Hand","Hane","Hansen","Harber","Harris","Hartmann","Harvey","Hauck","Hayes","Heaney","Heathcote","Hegmann","Heidenreich","Heller","Herman","Hermann","Hermiston","Herzog","Hessel","Hettinger","Hickle","Hilll","Hills","Hilpert","Hintz","Hirthe","Hodkiewicz","Hoeger","Homenick","Hoppe","Howe","Howell","Hudson","Huel","Huels","Hyatt","Jacobi","Jacobs","Jacobson","Jakubowski","Jaskolski","Jast","Jenkins","Jerde","Johns","Johnson","Johnston","Jones","Kassulke","Kautzer","Keebler","Keeling","Kemmer","Kerluke","Kertzmann","Kessler","Kiehn","Kihn","Kilback","King","Kirlin","Klein","Kling","Klocko","Koch","Koelpin","Koepp","Kohler","Konopelski","Koss","Kovacek","Kozey","Krajcik","Kreiger","Kris","Kshlerin","Kub","Kuhic","Kuhlman","Kuhn","Kulas","Kunde","Kunze","Kuphal","Kutch","Kuvalis","Labadie","Lakin","Lang","Langosh","Langworth","Larkin","Larson","Leannon","Lebsack","Ledner","Leffler","Legros","Lehner","Lemke","Lesch","Leuschke","Lind","Lindgren","Littel","Little","Lockman","Lowe","Lubowitz","Lueilwitz","Luettgen","Lynch","Macejkovic","MacGyver","Maggio","Mann","Mante","Marks","Marquardt","Marvin","Mayer","Mayert","McClure","McCullough","McDermott","McGlynn","McKenzie","McLaughlin","Medhurst","Mertz","Metz","Miller","Mills","Mitchell","Moen","Mohr","Monahan","Moore","Morar","Morissette","Mosciski","Mraz","Mueller","Muller","Murazik","Murphy","Murray","Nader","Nicolas","Nienow","Nikolaus","Nitzsche","Nolan","Oberbrunner","O'Connell","O'Conner","O'Hara","O'Keefe","O'Kon","Okuneva","Olson","Ondricka","O'Reilly","Orn","Ortiz","Osinski","Pacocha","Padberg","Pagac","Parisian","Parker","Paucek","Pfannerstill","Pfeffer","Pollich","Pouros","Powlowski","Predovic","Price","Prohaska","Prosacco","Purdy","Quigley","Quitzon","Rath","Ratke","Rau","Raynor","Reichel","Reichert","Reilly","Reinger","Rempel","Renner","Reynolds","Rice","Rippin","Ritchie","Robel","Roberts","Rodriguez","Rogahn","Rohan","Rolfson","Romaguera","Roob","Rosenbaum","Rowe","Ruecker","Runolfsdottir","Runolfsson","Runte","Russel","Rutherford","Ryan","Sanford","Satterfield","Sauer","Sawayn","Schaden","Schaefer","Schamberger","Schiller","Schimmel","Schinner","Schmeler","Schmidt","Schmitt","Schneider","Schoen","Schowalter","Schroeder","Schulist","Schultz","Schumm","Schuppe","Schuster","Senger","Shanahan","Shields","Simonis","Sipes","Skiles","Smith","Smitham","Spencer","Spinka","Sporer","Stamm","Stanton","Stark","Stehr","Steuber","Stiedemann","Stokes","Stoltenberg","Stracke","Streich","Stroman","Strosin","Swaniawski","Swift","Terry","Thiel","Thompson","Tillman","Torp","Torphy","Towne","Toy","Trantow","Tremblay","Treutel","Tromp","Turcotte","Turner","Ullrich","Upton","Vandervort","Veum","Volkman","Von","VonRueden","Waelchi","Walker","Walsh","Walter","Ward","Waters","Watsica","Weber","Wehner","Weimann","Weissnat","Welch","West","White","Wiegand","Wilderman","Wilkinson","Will","Williamson","Willms","Windler","Wintheiser","Wisoky","Wisozk","Witting","Wiza","Wolf","Wolff","Wuckert","Wunsch","Wyman","Yost","Yundt","Zboncak","Zemlak","Ziemann","Zieme","Zulauf"]};var ya={generic:[{value:"{{person.last_name.generic}}",weight:95},{value:"{{person.last_name.generic}}-{{person.last_name.generic}}",weight:5}]};var pa={generic:["Addison","Alex","Anderson","Angel","Arden","August","Austin","Avery","Bailey","Billie","Blake","Bowie","Brooklyn","Cameron","Charlie","Corey","Dakota","Drew","Elliott","Ellis","Emerson","Finley","Gray","Greer","Harper","Hayden","Jaden","James","Jamie","Jordan","Jules","Kai","Kendall","Kennedy","Kyle","Leslie","Logan","London","Marlowe","Micah","Nico","Noah","North","Parker","Phoenix","Quinn","Reagan","Reese","Reign","Riley","River","Robin","Rory","Rowan","Ryan","Sage","Sasha","Sawyer","Shawn","Shiloh","Skyler","Taylor"],female:["Abigail","Adele","Alex","Alice","Alisha","Amber","Amelia","Amora","Ana\xEFs","Angelou","Anika","Anise","Annabel","Anne","Aphrodite","Aretha","Arya","Ashton","Aster","Audrey","Avery","Bailee","Bay","Belle","Beth","Billie","Blair","Blaise","Blake","Blanche","Blue","Bree","Brielle","Brienne","Brooke","Caleen","Candice","Caprice","Carelyn","Caylen","Celine","Cerise","Cia","Claire","Claudia","Clementine","Coral","Coraline","Dahlia","Dakota","Dawn","Della","Demi","Denise","Denver","Devine","Devon","Diana","Dylan","Ebony","Eden","Eleanor","Elein","Elizabeth","Ellen","Elodie","Eloise","Ember","Emma","Erin","Eyre","Faith","Farrah","Fawn","Fayre","Fern","France","Francis","Frida","Genisis","Georgia","Grace","Gwen","Harley","Harper","Hazel","Helen","Hippolyta","Holly","Hope","Imani","Iowa","Ireland","Irene","Iris","Isa","Isla","Ivy","Jade","Jane","Jazz","Jean","Jess","Jett","Jo","Joan","Jolie","Jordan","Josie","Journey","Joy","Jules","Julien","Juliet","Juniper","Justice","Kali","Karma","Kat","Kate","Kennedy","Keva","Kylie","Lake","Lane","Lark","Layla","Lee","Leigh","Leona","Lexi","London","Lou","Louise","Love","Luna","Lux","Lynn","Lyric","Maddie","Mae","Marie","Matilda","Maude","Maybel","Meadow","Medusa","Mercy","Michelle","Mirabel","Monroe","Morgan","Nalia","Naomi","Nova","Olive","Paige","Parker","Pax","Pearl","Penelope","Phoenix","Quinn","Rae","Rain","Raven","Ray","Raye","Rebel","Reese","Reeve","Regan","Riley","River","Robin","Rory","Rose","Royal","Ruth","Rylie","Sage","Sam","Saturn","Scout","Serena","Sky","Skylar","Sofia","Sophia","Storm","Sue","Suzanne","Sydney","Taylen","Taylor","Teagan","Tempest","Tenley","Thea","Trinity","Valerie","Venus","Vera","Violet","Willow","Winter","Xena","Zaylee","Zion","Zoe"],male:["Ace","Aiden","Alexander","Ander","Anthony","Asher","August","Aziel","Bear","Beckham","Benjamin","Buddy","Calvin","Carter","Charles","Christopher","Clyde","Cooper","Daniel","David","Dior","Dylan","Elijah","Ellis","Emerson","Ethan","Ezra","Fletcher","Flynn","Gabriel","Grayson","Gus","Hank","Harrison","Hendrix","Henry","Houston","Hudson","Hugh","Isaac","Jack","Jackson","Jacob","Jakobe","James","Jaxon","Jaxtyn","Jayden","John","Joseph","Josiah","Jude","Julian","Karsyn","Kenji","Kobe","Kylo","Lennon","Leo","Levi","Liam","Lincoln","Logan","Louis","Lucas","Lucky","Luke","Mason","Mateo","Matthew","Maverick","Michael","Monroe","Nixon","Ocean","Oliver","Otis","Otto","Owen","Ozzy","Parker","Rocky","Samuel","Sebastian","Sonny","Teddy","Theo","Theodore","Thomas","Truett","Walter","Warren","Watson","William","Wison","Wyatt","Ziggy","Zyair"]};var ga=[{value:"{{person.firstName}} {{person.lastName}}",weight:49},{value:"{{person.prefix}} {{person.firstName}} {{person.lastName}}",weight:7},{value:"{{person.firstName}} {{person.lastName}} {{person.suffix}}",weight:7},{value:"{{person.prefix}} {{person.firstName}} {{person.lastName}} {{person.suffix}}",weight:1}];var ba={generic:["Dr.","Miss","Mr.","Mrs.","Ms."],female:["Mrs.","Ms.","Miss","Dr."],male:["Mr.","Dr."]};var Sa=["female","male"];var ka=["Jr.","Sr.","I","II","III","IV","V","MD","DDS","PhD","DVM"];var Ca=["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];var ho={bio_part:na,bio_pattern:ia,bio_supporter:ta,first_name:la,gender:sa,job_area:da,job_descriptor:ua,job_title_pattern:ca,job_type:ma,last_name:ha,last_name_pattern:ya,middle_name:pa,name:ga,prefix:ba,sex:Sa,suffix:ka,western_zodiac_sign:Ca},fa=ho;var va=["!##-!##-####","(!##) !##-####","1-!##-!##-####","!##.!##.####","!##-!##-#### x###","(!##) !##-#### x###","1-!##-!##-#### x###","!##.!##.#### x###","!##-!##-#### x####","(!##) !##-#### x####","1-!##-!##-#### x####","!##.!##.#### x####","!##-!##-#### x#####","(!##) !##-#### x#####","1-!##-!##-#### x#####","!##.!##.#### x#####"];var Aa=["+1!##!######"];var Ba=["(!##) !##-####"];var yo={human:va,international:Aa,national:Ba},Ta=yo;var po={format:Ta},Ma=po;var wa=[{symbol:"H",name:"Hydrogen",atomicNumber:1},{symbol:"He",name:"Helium",atomicNumber:2},{symbol:"Li",name:"Lithium",atomicNumber:3},{symbol:"Be",name:"Beryllium",atomicNumber:4},{symbol:"B",name:"Boron",atomicNumber:5},{symbol:"C",name:"Carbon",atomicNumber:6},{symbol:"N",name:"Nitrogen",atomicNumber:7},{symbol:"O",name:"Oxygen",atomicNumber:8},{symbol:"F",name:"Fluorine",atomicNumber:9},{symbol:"Ne",name:"Neon",atomicNumber:10},{symbol:"Na",name:"Sodium",atomicNumber:11},{symbol:"Mg",name:"Magnesium",atomicNumber:12},{symbol:"Al",name:"Aluminium",atomicNumber:13},{symbol:"Si",name:"Silicon",atomicNumber:14},{symbol:"P",name:"Phosphorus",atomicNumber:15},{symbol:"S",name:"Sulfur",atomicNumber:16},{symbol:"Cl",name:"Chlorine",atomicNumber:17},{symbol:"Ar",name:"Argon",atomicNumber:18},{symbol:"K",name:"Potassium",atomicNumber:19},{symbol:"Ca",name:"Calcium",atomicNumber:20},{symbol:"Sc",name:"Scandium",atomicNumber:21},{symbol:"Ti",name:"Titanium",atomicNumber:22},{symbol:"V",name:"Vanadium",atomicNumber:23},{symbol:"Cr",name:"Chromium",atomicNumber:24},{symbol:"Mn",name:"Manganese",atomicNumber:25},{symbol:"Fe",name:"Iron",atomicNumber:26},{symbol:"Co",name:"Cobalt",atomicNumber:27},{symbol:"Ni",name:"Nickel",atomicNumber:28},{symbol:"Cu",name:"Copper",atomicNumber:29},{symbol:"Zn",name:"Zinc",atomicNumber:30},{symbol:"Ga",name:"Gallium",atomicNumber:31},{symbol:"Ge",name:"Germanium",atomicNumber:32},{symbol:"As",name:"Arsenic",atomicNumber:33},{symbol:"Se",name:"Selenium",atomicNumber:34},{symbol:"Br",name:"Bromine",atomicNumber:35},{symbol:"Kr",name:"Krypton",atomicNumber:36},{symbol:"Rb",name:"Rubidium",atomicNumber:37},{symbol:"Sr",name:"Strontium",atomicNumber:38},{symbol:"Y",name:"Yttrium",atomicNumber:39},{symbol:"Zr",name:"Zirconium",atomicNumber:40},{symbol:"Nb",name:"Niobium",atomicNumber:41},{symbol:"Mo",name:"Molybdenum",atomicNumber:42},{symbol:"Tc",name:"Technetium",atomicNumber:43},{symbol:"Ru",name:"Ruthenium",atomicNumber:44},{symbol:"Rh",name:"Rhodium",atomicNumber:45},{symbol:"Pd",name:"Palladium",atomicNumber:46},{symbol:"Ag",name:"Silver",atomicNumber:47},{symbol:"Cd",name:"Cadmium",atomicNumber:48},{symbol:"In",name:"Indium",atomicNumber:49},{symbol:"Sn",name:"Tin",atomicNumber:50},{symbol:"Sb",name:"Antimony",atomicNumber:51},{symbol:"Te",name:"Tellurium",atomicNumber:52},{symbol:"I",name:"Iodine",atomicNumber:53},{symbol:"Xe",name:"Xenon",atomicNumber:54},{symbol:"Cs",name:"Caesium",atomicNumber:55},{symbol:"Ba",name:"Barium",atomicNumber:56},{symbol:"La",name:"Lanthanum",atomicNumber:57},{symbol:"Ce",name:"Cerium",atomicNumber:58},{symbol:"Pr",name:"Praseodymium",atomicNumber:59},{symbol:"Nd",name:"Neodymium",atomicNumber:60},{symbol:"Pm",name:"Promethium",atomicNumber:61},{symbol:"Sm",name:"Samarium",atomicNumber:62},{symbol:"Eu",name:"Europium",atomicNumber:63},{symbol:"Gd",name:"Gadolinium",atomicNumber:64},{symbol:"Tb",name:"Terbium",atomicNumber:65},{symbol:"Dy",name:"Dysprosium",atomicNumber:66},{symbol:"Ho",name:"Holmium",atomicNumber:67},{symbol:"Er",name:"Erbium",atomicNumber:68},{symbol:"Tm",name:"Thulium",atomicNumber:69},{symbol:"Yb",name:"Ytterbium",atomicNumber:70},{symbol:"Lu",name:"Lutetium",atomicNumber:71},{symbol:"Hf",name:"Hafnium",atomicNumber:72},{symbol:"Ta",name:"Tantalum",atomicNumber:73},{symbol:"W",name:"Tungsten",atomicNumber:74},{symbol:"Re",name:"Rhenium",atomicNumber:75},{symbol:"Os",name:"Osmium",atomicNumber:76},{symbol:"Ir",name:"Iridium",atomicNumber:77},{symbol:"Pt",name:"Platinum",atomicNumber:78},{symbol:"Au",name:"Gold",atomicNumber:79},{symbol:"Hg",name:"Mercury",atomicNumber:80},{symbol:"Tl",name:"Thallium",atomicNumber:81},{symbol:"Pb",name:"Lead",atomicNumber:82},{symbol:"Bi",name:"Bismuth",atomicNumber:83},{symbol:"Po",name:"Polonium",atomicNumber:84},{symbol:"At",name:"Astatine",atomicNumber:85},{symbol:"Rn",name:"Radon",atomicNumber:86},{symbol:"Fr",name:"Francium",atomicNumber:87},{symbol:"Ra",name:"Radium",atomicNumber:88},{symbol:"Ac",name:"Actinium",atomicNumber:89},{symbol:"Th",name:"Thorium",atomicNumber:90},{symbol:"Pa",name:"Protactinium",atomicNumber:91},{symbol:"U",name:"Uranium",atomicNumber:92},{symbol:"Np",name:"Neptunium",atomicNumber:93},{symbol:"Pu",name:"Plutonium",atomicNumber:94},{symbol:"Am",name:"Americium",atomicNumber:95},{symbol:"Cm",name:"Curium",atomicNumber:96},{symbol:"Bk",name:"Berkelium",atomicNumber:97},{symbol:"Cf",name:"Californium",atomicNumber:98},{symbol:"Es",name:"Einsteinium",atomicNumber:99},{symbol:"Fm",name:"Fermium",atomicNumber:100},{symbol:"Md",name:"Mendelevium",atomicNumber:101},{symbol:"No",name:"Nobelium",atomicNumber:102},{symbol:"Lr",name:"Lawrencium",atomicNumber:103},{symbol:"Rf",name:"Rutherfordium",atomicNumber:104},{symbol:"Db",name:"Dubnium",atomicNumber:105},{symbol:"Sg",name:"Seaborgium",atomicNumber:106},{symbol:"Bh",name:"Bohrium",atomicNumber:107},{symbol:"Hs",name:"Hassium",atomicNumber:108},{symbol:"Mt",name:"Meitnerium",atomicNumber:109},{symbol:"Ds",name:"Darmstadtium",atomicNumber:110},{symbol:"Rg",name:"Roentgenium",atomicNumber:111},{symbol:"Cn",name:"Copernicium",atomicNumber:112},{symbol:"Nh",name:"Nihonium",atomicNumber:113},{symbol:"Fl",name:"Flerovium",atomicNumber:114},{symbol:"Mc",name:"Moscovium",atomicNumber:115},{symbol:"Lv",name:"Livermorium",atomicNumber:116},{symbol:"Ts",name:"Tennessine",atomicNumber:117},{symbol:"Og",name:"Oganesson",atomicNumber:118}];var La=[{name:"meter",symbol:"m"},{name:"second",symbol:"s"},{name:"mole",symbol:"mol"},{name:"ampere",symbol:"A"},{name:"kelvin",symbol:"K"},{name:"candela",symbol:"cd"},{name:"kilogram",symbol:"kg"},{name:"radian",symbol:"rad"},{name:"hertz",symbol:"Hz"},{name:"newton",symbol:"N"},{name:"pascal",symbol:"Pa"},{name:"joule",symbol:"J"},{name:"watt",symbol:"W"},{name:"coulomb",symbol:"C"},{name:"volt",symbol:"V"},{name:"ohm",symbol:"\u03A9"},{name:"tesla",symbol:"T"},{name:"degree Celsius",symbol:"\xB0C"},{name:"lumen",symbol:"lm"},{name:"becquerel",symbol:"Bq"},{name:"gray",symbol:"Gy"},{name:"sievert",symbol:"Sv"},{name:"steradian",symbol:"sr"},{name:"farad",symbol:"F"},{name:"siemens",symbol:"S"},{name:"weber",symbol:"Wb"},{name:"henry",symbol:"H"},{name:"lux",symbol:"lx"},{name:"katal",symbol:"kat"}];var go={chemical_element:wa,unit:La},Da=go;var Ra=["ants","bats","bears","bees","birds","buffalo","cats","chickens","cattle","dogs","dolphins","ducks","elephants","fishes","foxes","frogs","geese","goats","horses","kangaroos","lions","monkeys","owls","oxen","penguins","people","pigs","rabbits","sheep","tigers","whales","wolves","zebras","banshees","crows","black cats","chimeras","ghosts","conspirators","dragons","dwarves","elves","enchanters","exorcists","sons","foes","giants","gnomes","goblins","gooses","griffins","lycanthropes","nemesis","ogres","oracles","prophets","sorcerors","spiders","spirits","vampires","warlocks","vixens","werewolves","witches","worshipers","zombies","druids"];var Pa=["{{location.state}} {{team.creature}}"];var bo={creature:Ra,name:Pa},Ha=bo;var Wa=["Adventure Road Bicycle","BMX Bicycle","City Bicycle","Cruiser Bicycle","Cyclocross Bicycle","Dual-Sport Bicycle","Fitness Bicycle","Flat-Foot Comfort Bicycle","Folding Bicycle","Hybrid Bicycle","Mountain Bicycle","Recumbent Bicycle","Road Bicycle","Tandem Bicycle","Touring Bicycle","Track/Fixed-Gear Bicycle","Triathlon/Time Trial Bicycle","Tricycle"];var Ga=["Diesel","Electric","Gasoline","Hybrid"];var Fa=["Aston Martin","Audi","BMW","BYD","Bentley","Bugatti","Cadillac","Chevrolet","Chrysler","Citro\xEBn","Dodge","Ferrari","Fiat","Ford","Honda","Hyundai","Jaguar","Jeep","Kia","Lamborghini","Land Rover","MG","Mahindra & Mahindra","Maruti","Maserati","Mazda","Mercedes Benz","Mini","Mitsubishi","NIO","Nissan","Peugeot","Polestar","Porsche","Renault","Rivian","Rolls Royce","Skoda","Smart","Subaru","Suzuki","Tata","Tesla","Toyota","Vauxhall","Volkswagen","Volvo"];var Ea=["1","2","911","A4","A8","ATS","Accord","Alpine","Altima","Aventador","Beetle","CTS","CX-9","Camaro","Camry","Challenger","Charger","Civic","Colorado","Corvette","Countach","Cruze","Durango","El Camino","Element","Escalade","Expedition","Explorer","F-150","Fiesta","Focus","Fortwo","Golf","Grand Caravan","Grand Cherokee","Impala","Jetta","Land Cruiser","LeBaron","Malibu","Mercielago","Model 3","Model S","Model T","Model X","Model Y","Mustang","PT Cruiser","Prius","Ranchero","Roadster","Sentra","Silverado","Spyder","Taurus","V90","Volt","Wrangler","XC90","XTS"];var Na=["Cargo Van","Convertible","Coupe","Crew Cab Pickup","Extended Cab Pickup","Hatchback","Minivan","Passenger Van","SUV","Sedan","Wagon"];var So={bicycle_type:Wa,fuel:Ga,manufacturer:Fa,model:Ea,type:Na},Ja=So;var Ia=["abandoned","able","acceptable","acclaimed","accomplished","accurate","aching","acidic","actual","admired","adolescent","advanced","affectionate","afraid","aged","aggravating","aggressive","agile","agitated","agreeable","ajar","alarmed","alert","alienated","alive","all","altruistic","amazing","ambitious","ample","amused","angelic","anguished","animated","annual","another","antique","any","apprehensive","appropriate","apt","arid","artistic","ashamed","assured","astonishing","athletic","austere","authentic","authorized","avaricious","average","aware","awesome","awful","babyish","back","bad","baggy","bare","basic","beloved","beneficial","best","better","big","biodegradable","bitter","black","black-and-white","blank","blaring","bleak","blind","blond","blue","blushing","bogus","boiling","bony","boring","bossy","both","bouncy","bowed","brave","breakable","bright","brilliant","brisk","broken","brown","bruised","bulky","burdensome","burly","bustling","busy","buttery","buzzing","calculating","candid","carefree","careless","caring","cautious","cavernous","celebrated","charming","cheap","cheerful","chilly","chubby","circular","classic","clean","clear","clear-cut","close","closed","cloudy","clueless","clumsy","cluttered","coarse","colorful","colorless","colossal","comfortable","common","compassionate","competent","complete","complicated","concerned","concrete","confused","considerate","content","cool","cooperative","coordinated","corny","corrupt","courageous","courteous","crafty","crazy","creamy","creative","criminal","critical","crooked","crowded","cruel","crushing","cuddly","cultivated","cumbersome","curly","cute","damaged","damp","dapper","dark","darling","dazzling","dead","deadly","deafening","dearest","decent","decisive","deep","defenseless","defensive","deficient","definite","definitive","delectable","delicious","delirious","dense","dental","dependable","dependent","descriptive","deserted","determined","devoted","different","difficult","digital","diligent","dim","direct","dirty","discrete","disloyal","dismal","distant","distinct","distorted","doting","downright","drab","dramatic","dreary","dual","dull","dutiful","each","early","earnest","easy","ecstatic","edible","educated","elastic","elderly","electric","elegant","elementary","elliptical","eminent","emotional","empty","enchanted","enchanting","energetic","enlightened","enraged","entire","equatorial","essential","esteemed","ethical","everlasting","every","evil","exalted","excellent","excitable","excited","exhausted","exotic","expensive","experienced","expert","extra-large","extroverted","failing","faint","fair","fake","familiar","fantastic","far","far-flung","far-off","faraway","fat","fatal","fatherly","favorable","favorite","fearless","feline","filthy","fine","finished","firm","first","firsthand","fixed","flashy","flawed","flawless","flickering","flimsy","flowery","fluffy","flustered","focused","fond","foolhardy","foolish","forceful","formal","forsaken","fortunate","fragrant","frail","frank","free","french","frequent","friendly","frightened","frilly","frivolous","frizzy","front","frozen","frugal","fruitful","functional","funny","fussy","fuzzy","gaseous","general","gentle","genuine","gifted","gigantic","giving","glaring","glass","gleaming","glittering","gloomy","glorious","glossy","glum","golden","good","good-natured","gorgeous","graceful","gracious","grandiose","granular","grave","gray","great","greedy","grim","grimy","gripping","grizzled","grouchy","grounded","growing","grown","grubby","gruesome","grumpy","guilty","gullible","gummy","hairy","handsome","handy","happy","happy-go-lucky","hard-to-find","harmful","hasty","hateful","haunting","heartfelt","heavenly","heavy","hefty","helpful","helpless","hidden","hoarse","hollow","homely","honorable","honored","hopeful","hospitable","hot","huge","humble","humiliating","hungry","hurtful","husky","icy","ideal","idealistic","idolized","ignorant","ill","ill-fated","illiterate","illustrious","imaginary","imaginative","immaculate","immediate","immense","impartial","impassioned","impeccable","impish","impolite","important","impossible","impractical","impressionable","impressive","improbable","impure","inborn","incomparable","incomplete","inconsequential","indelible","indolent","inexperienced","infamous","infatuated","inferior","infinite","informal","innocent","insecure","insidious","insignificant","insistent","instructive","intelligent","intent","interesting","internal","international","intrepid","ironclad","irresponsible","jagged","jam-packed","jaunty","jealous","jittery","joyful","joyous","jubilant","judicious","juicy","jumbo","junior","juvenile","kaleidoscopic","key","knotty","knowledgeable","known","kooky","kosher","lanky","last","lasting","late","lavish","lawful","lazy","leading","lean","left","legal","light","lighthearted","likable","likely","limited","limp","limping","linear","lined","liquid","little","live","lively","livid","lone","lonely","long","long-term","lost","lovable","lovely","low","lucky","lumbering","lumpy","lustrous","mad","made-up","magnificent","majestic","major","male","mammoth","married","marvelous","massive","mature","meager","mealy","mean","measly","meaty","mediocre","medium","memorable","menacing","merry","messy","metallic","mild","milky","mindless","minor","minty","miserable","miserly","misguided","mixed","moist","monstrous","monthly","monumental","moral","motionless","muddy","muffled","multicolored","mundane","murky","mushy","musty","muted","mysterious","narrow","natural","naughty","nautical","near","neat","necessary","needy","negative","neglected","negligible","neighboring","nervous","new","next","nice","nifty","nimble","nippy","nocturnal","normal","noted","noteworthy","noxious","numb","nutritious","obedient","oblong","obvious","odd","oddball","official","oily","old","old-fashioned","only","optimal","optimistic","orange","orderly","ordinary","ornate","ornery","other","our","outgoing","outlandish","outlying","outrageous","outstanding","oval","overcooked","overdue","palatable","pale","paltry","parallel","parched","partial","passionate","pastel","peaceful","peppery","perfumed","perky","personal","pertinent","pessimistic","petty","phony","physical","pink","pitiful","plain","pleasant","pleased","pleasing","plump","pointed","pointless","polished","polite","political","poor","portly","posh","possible","potable","powerful","powerless","practical","precious","present","prestigious","pretty","pricey","prickly","primary","prime","private","probable","productive","profitable","profuse","proper","proud","prudent","punctual","puny","pure","purple","pushy","putrid","puzzled","qualified","quarrelsome","quarterly","queasy","querulous","questionable","quick","quick-witted","quiet","quintessential","quixotic","radiant","ragged","rapid","rare","raw","realistic","reasonable","recent","reckless","rectangular","red","reflecting","regal","regular","remarkable","remorseful","repentant","respectful","responsible","rewarding","rich","right","rigid","ripe","roasted","robust","rosy","rotating","rotten","rough","round","rowdy","royal","rubbery","ruddy","rundown","runny","rural","rusty","sad","salty","same","sandy","sarcastic","sardonic","scaly","scared","scary","scented","scientific","scornful","scratchy","second","second-hand","secondary","secret","self-assured","self-reliant","selfish","sentimental","separate","serene","serpentine","severe","shabby","shadowy","shady","shallow","shameful","shameless","shimmering","shiny","shocked","shoddy","short","short-term","showy","shrill","shy","sick","silent","silky","silver","similar","simple","simplistic","sinful","sizzling","skeletal","sleepy","slight","slimy","slow","slushy","small","smart","smoggy","smooth","smug","snappy","snarling","sneaky","sniveling","snoopy","sociable","soft","soggy","somber","some","sophisticated","sore","sorrowful","soulful","soupy","sour","spanish","sparkling","sparse","specific","speedy","spherical","spiffy","spirited","spiteful","splendid","spotless","square","squeaky","squiggly","stable","staid","stained","stale","standard","stark","steel","steep","sticky","stiff","stingy","stormy","straight","strange","strict","strident","striking","strong","stunning","stupendous","sturdy","stylish","subdued","submissive","substantial","subtle","suburban","sudden","sugary","sunny","super","superb","superficial","superior","supportive","sure-footed","surprised","svelte","sweet","swift","talkative","tall","tame","tangible","tasty","tattered","taut","tedious","teeming","tempting","tender","tense","tepid","terrible","that","these","thick","thin","thorny","thorough","those","thrifty","tidy","tight","timely","tinted","tiny","tired","torn","total","tough","tragic","trained","triangular","tricky","trim","trivial","troubled","true","trusting","trustworthy","trusty","turbulent","twin","ugly","ultimate","unaware","uncomfortable","uncommon","unconscious","understated","uneven","unfinished","unfit","unfortunate","unhappy","unhealthy","uniform","unimportant","unique","unkempt","unknown","unlawful","unlined","unlucky","unpleasant","unrealistic","unripe","unruly","unselfish","unsightly","unsteady","unsung","untidy","untimely","untried","untrue","unused","unusual","unwelcome","unwieldy","unwilling","unwritten","upbeat","upright","upset","urban","usable","useless","utilized","utter","vague","vain","valuable","variable","vast","velvety","vengeful","vibrant","victorious","violent","vivacious","vivid","voluminous","warlike","warm","warmhearted","warped","wasteful","waterlogged","watery","wavy","wealthy","weary","webbed","wee","weekly","weighty","weird","well-documented","well-groomed","well-lit","well-made","well-off","well-to-do","well-worn","which","whimsical","whirlwind","whispered","white","whole","whopping","wicked","wide","wide-eyed","wiggly","willing","wilted","winding","windy","winged","wise","witty","wobbly","woeful","wonderful","wordy","worldly","worse","worst","worthless","worthwhile","worthy","wrathful","wretched","writhing","wrong","wry","yearly","yellow","yellowish","young","youthful","yummy","zany","zealous","zesty"];var Ka=["abnormally","absentmindedly","accidentally","acidly","actually","adventurously","afterwards","almost","always","angrily","annually","anxiously","arrogantly","awkwardly","badly","bashfully","beautifully","bitterly","bleakly","blindly","blissfully","boastfully","boldly","bravely","briefly","brightly","briskly","broadly","busily","calmly","carefully","carelessly","cautiously","certainly","cheerfully","clearly","cleverly","closely","coaxingly","colorfully","commonly","continually","coolly","correctly","courageously","crossly","cruelly","curiously","daily","daintily","dearly","deceivingly","deeply","defiantly","deliberately","delightfully","diligently","dimly","doubtfully","dreamily","easily","elegantly","energetically","enormously","enthusiastically","equally","especially","even","evenly","eventually","exactly","excitedly","extremely","fairly","faithfully","famously","far","fast","fatally","ferociously","fervently","fiercely","fondly","foolishly","fortunately","frankly","frantically","freely","frenetically","frightfully","fully","furiously","generally","generously","gently","gladly","gleefully","gracefully","gratefully","greatly","greedily","happily","hastily","healthily","heavily","helpfully","helplessly","highly","honestly","hopelessly","hourly","hungrily","immediately","innocently","inquisitively","instantly","intensely","intently","interestingly","inwardly","irritably","jaggedly","jealously","joshingly","jovially","joyfully","joyously","jubilantly","judgementally","justly","keenly","kiddingly","kindheartedly","kindly","kissingly","knavishly","knottily","knowingly","knowledgeably","kookily","lazily","less","lightly","likely","limply","lively","loftily","longingly","loosely","loudly","lovingly","loyally","madly","majestically","meaningfully","mechanically","merrily","miserably","mockingly","monthly","more","mortally","mostly","mysteriously","naturally","nearly","neatly","needily","nervously","never","nicely","noisily","not","obediently","obnoxiously","oddly","offensively","officially","often","only","openly","optimistically","overconfidently","owlishly","painfully","partially","patiently","perfectly","physically","playfully","politely","poorly","positively","potentially","powerfully","promptly","properly","punctually","quaintly","quarrelsomely","queasily","questionably","questioningly","quicker","quickly","quietly","quirkily","quizzically","rapidly","rarely","readily","really","reassuringly","recklessly","regularly","reluctantly","repeatedly","reproachfully","restfully","righteously","rightfully","rigidly","roughly","rudely","sadly","safely","scarcely","scarily","searchingly","sedately","seemingly","seldom","selfishly","separately","seriously","shakily","sharply","sheepishly","shrilly","shyly","silently","sleepily","slowly","smoothly","softly","solemnly","solidly","sometimes","soon","speedily","stealthily","sternly","strictly","successfully","suddenly","surprisingly","suspiciously","sweetly","swiftly","sympathetically","tenderly","tensely","terribly","thankfully","thoroughly","thoughtfully","tightly","tomorrow","too","tremendously","triumphantly","truly","truthfully","ultimately","unabashedly","unaccountably","unbearably","unethically","unexpectedly","unfortunately","unimpressively","unnaturally","unnecessarily","upbeat","upliftingly","upright","upside-down","upward","upwardly","urgently","usefully","uselessly","usually","utterly","vacantly","vaguely","vainly","valiantly","vastly","verbally","very","viciously","victoriously","violently","vivaciously","voluntarily","warmly","weakly","wearily","well","wetly","wholly","wildly","willfully","wisely","woefully","wonderfully","worriedly","wrongly","yawningly","yearly","yearningly","yesterday","yieldingly","youthfully"];var Oa=["after","although","and","as","because","before","but","consequently","even","finally","for","furthermore","hence","how","however","if","inasmuch","incidentally","indeed","instead","lest","likewise","meanwhile","nor","now","once","or","provided","since","so","supposing","than","that","though","till","unless","until","what","when","whenever","where","whereas","wherever","whether","which","while","who","whoever","whose","why","yet"];var xa=["yuck","oh","phooey","blah","boo","whoa","yowza","huzzah","boohoo","fooey","geez","pfft","ew","ah","yum","brr","hm","yahoo","aha","woot","drat","gah","meh","psst","aw","ugh","yippee","eek","gee","bah","gadzooks","duh","ha","mmm","ouch","phew","ack","uh-huh","gosh","hmph","pish","zowie","er","ick","oof","um"];var za=["CD","SUV","abacus","academics","accelerator","accompanist","account","accountability","acquaintance","ad","adaptation","address","adrenalin","adult","advancement","advertisement","adviser","affect","affiliate","aftermath","agreement","airbus","aircraft","airline","airmail","airman","airport","alb","alert","allegation","alliance","alligator","allocation","almighty","amendment","amnesty","analogy","angle","annual","antelope","anticodon","apparatus","appliance","approach","apricot","arcade","archaeology","armchair","armoire","asset","assist","atrium","attraction","availability","avalanche","awareness","babushka","backbone","backburn","bakeware","bandwidth","bar","barge","baritone","barracks","baseboard","basket","bathhouse","bathrobe","battle","begonia","behest","bell","bench","bend","beret","best-seller","bid","bidet","bin","birdbath","birdcage","birth","blight","blossom","blowgun","bob","bog","bonfire","bonnet","bookcase","bookend","boulevard","bourgeoisie","bowler","bowling","boyfriend","brace","bracelet","bran","breastplate","brief","brochure","brook","brush","bug","bump","bungalow","cafe","cake","calculus","cannon","cantaloupe","cap","cappelletti","captain","caption","carboxyl","cardboard","carnival","case","casement","cash","casket","cassava","castanet","catalyst","cauliflower","cellar","celsius","cemetery","ceramic","ceramics","certification","chainstay","chairperson","challenge","championship","chap","chapel","character","characterization","charlatan","charm","chasuble","cheese","cheetah","chiffonier","chops","chow","cinder","cinema","circumference","citizen","clamp","clavicle","cleaner","climb","co-producer","coal","coast","cod","coil","coin","coliseum","collaboration","collectivization","colon","colonialism","comestible","commercial","commodity","community","comparison","completion","complication","compromise","concentration","configuration","confusion","conservation","conservative","consistency","contractor","contrail","convection","conversation","cook","coordination","cop-out","cope","cork","cornet","corporation","corral","cosset","costume","couch","council","councilman","countess","courtroom","cow","creator","creature","crest","cricket","crocodile","cross-contamination","cruelty","cuckoo","curl","custody","custom","cutlet","cutover","cycle","daddy","dandelion","dash","daughter","dead","decision","deck","declaration","decongestant","decryption","deduction","deed","deer","defendant","density","department","dependency","deployment","depot","derby","descendant","descent","design","designation","desk","detective","devastation","developing","developmental","devil","diagram","digestive","digit","dime","director","disadvantage","disappointment","disclosure","disconnection","discourse","dish","disk","disposer","distinction","diver","diversity","dividend","divine","doing","doorpost","doubter","draft","draw","dream","dredger","dress","drive","drug","duffel","dulcimer","dusk","duster","dwell","e-mail","earth","ecliptic","ectoderm","edge","editor","effector","eggplant","electronics","elevation","elevator","elver","embarrassment","embossing","emergent","encouragement","entry","epic","equal","essence","eternity","ethyl","euphonium","event","exasperation","excess","executor","exhaust","expansion","expense","experience","exploration","extension","extent","exterior","eyebrow","eyeliner","farm","farmer","fat","fax","feather","fedora","fellow","fen","fencing","ferret","festival","fibre","filter","final","finding","finer","finger","fireplace","fisherman","fishery","fit","flame","flat","fledgling","flight","flint","flood","flu","fog","fold","folklore","follower","following","foodstuffs","footrest","forage","forager","forgery","fork","formamide","formation","formula","fort","fowl","fraudster","freckle","freezing","freight","fuel","fun","fund","fundraising","futon","gallery","galoshes","gastropod","gazebo","gerbil","ghost","giant","gift","giggle","glider","gloom","goat","godfather","godparent","going","goodwill","governance","government","gown","gradient","graffiti","grandpa","grandson","granny","grass","gray","gripper","grouper","guacamole","guard","guidance","guide","gym","gymnast","habit","haircut","halt","hamburger","hammock","handful","handle","handover","harp","haversack","hawk","heartache","heartbeat","heating","hello","help","hepatitis","heroine","hexagon","hierarchy","hippodrome","honesty","hoof","hope","horde","hornet","horst","hose","hospitalization","hovel","hovercraft","hubris","humidity","humor","hundred","hunger","hunt","husband","hutch","hydrant","hydrocarbon","hydrolyse","hydrolyze","hyena","hygienic","hyphenation","ice-cream","icebreaker","igloo","ignorance","illusion","impact","import","importance","impostor","in-joke","incandescence","independence","individual","information","injunction","innovation","insolence","inspection","instance","institute","instruction","instructor","integer","intellect","intent","interchange","interior","intervention","interviewer","invite","iridescence","issue","jacket","jazz","jellyfish","jet","jogging","joy","juggernaut","jump","jungle","junior","jury","kettledrum","kick","kielbasa","kinase","king","kiss","kit","knickers","knight","knitting","knuckle","label","labourer","lace","lady","lamp","language","larva","lashes","laughter","lava","lawmaker","lay","leading","league","legend","legging","legislature","lender","license","lid","lieu","lifestyle","lift","linseed","litter","loaf","lobster","longboat","lotion","lounge","louse","lox","loyalty","luck","lyre","maestro","mainstream","maintainer","majority","makeover","making","mallard","management","manner","mantua","marathon","march","marimba","marketplace","marksman","markup","marten","massage","masterpiece","mathematics","meadow","meal","meander","meatloaf","mechanic","median","membership","mentor","merit","metabolite","metal","middle","midwife","milestone","millet","minion","minister","minor","minority","mixture","mobility","molasses","mom","moment","monasticism","monocle","monster","morbidity","morning","mortise","mountain","mouser","mousse","mozzarella","muscat","mythology","napkin","necklace","nectarine","negotiation","nephew","nerve","netsuke","newsletter","newsprint","newsstand","nightlife","noon","nougat","nucleotidase","nudge","numeracy","numeric","nun","obedience","obesity","object","obligation","ocelot","octave","offset","oil","omelet","onset","opera","operating","optimal","orchid","order","ostrich","other","outlaw","outrun","outset","overcoat","overheard","overload","ownership","pacemaker","packaging","paintwork","palate","pants","pantyhose","papa","parade","parsnip","partridge","passport","pasta","patroller","pear","pearl","pecan","pendant","peninsula","pension","peony","pepper","perfection","permafrost","perp","petal","petticoat","pharmacopoeia","phrase","pick","piglet","pigpen","pigsty","pile","pillbox","pillow","pilot","pine","pinstripe","place","plain","planula","plastic","platter","platypus","pleasure","pliers","plugin","plumber","pneumonia","pocket-watch","poetry","polarisation","polyester","pomelo","pop","poppy","popularity","populist","porter","possession","postbox","precedent","premeditation","premier","premise","premium","pressure","presume","priesthood","printer","privilege","procurement","produce","programme","prohibition","promise","pronoun","providence","provider","provision","publication","publicity","pulse","punctuation","pupil","puppet","puritan","quart","quinoa","quit","railway","range","rationale","ravioli","rawhide","reach","reasoning","reboot","receptor","recommendation","reconsideration","recovery","redesign","relative","release","remark","reorganisation","repeat","replacement","reporter","representation","republican","request","requirement","reservation","resolve","resource","responsibility","restaurant","retention","retrospectivity","reward","ribbon","rim","riser","roadway","role","rosemary","roundabout","rubric","ruin","rule","runway","rust","safe","sailor","saloon","sand","sandbar","sanity","sarong","sauerkraut","saw","scaffold","scale","scarification","scenario","schedule","schnitzel","scholarship","scorn","scorpion","scout","scrap","scratch","seafood","seagull","seal","season","secrecy","secret","section","sediment","self-confidence","sermon","sesame","settler","shadowbox","shark","shipper","shore","shoulder","sideboard","siege","sightseeing","signature","silk","simple","singing","skean","skeleton","skyline","skyscraper","slide","slime","slipper","smog","smoke","sock","soliloquy","solution","solvency","someplace","sonar","sonata","sonnet","soup","soybean","space","spear","spirit","spork","sport","spring","sprinkles","squid","stall","starboard","statue","status","stay","steak","steeple","step","step-mother","sticker","stir-fry","stitcher","stock","stool","story","strait","stranger","strategy","straw","stump","subexpression","submitter","subsidy","substitution","suitcase","summary","summer","sunbeam","sundae","supplier","surface","sushi","suspension","sustenance","swanling","swath","sweatshop","swim","swine","swing","switch","switchboard","swordfish","synergy","t-shirt","tabletop","tackle","tail","tapioca","taro","tarragon","taxicab","teammate","technician","technologist","tectonics","tenant","tenement","tennis","tentacle","teriyaki","term","testimonial","testing","thigh","thongs","thorn","thread","thunderbolt","thyme","tinderbox","toaster","tomatillo","tomb","tomography","tool","tooth","toothbrush","toothpick","topsail","traditionalism","traffic","translation","transom","transparency","trash","travel","tray","trench","tribe","tributary","trick","trolley","tuba","tuber","tune-up","turret","tusk","tuxedo","typeface","typewriter","unblinking","underneath","underpants","understanding","unibody","unique","unit","utilization","valentine","validity","valley","valuable","vanadyl","vein","velocity","venom","version","verve","vestment","veto","viability","vibraphone","vibration","vicinity","video","violin","vision","vista","vol","volleyball","wafer","waist","wallaby","warming","wasabi","waterspout","wear","wedding","whack","whale","wheel","widow","wilderness","willow","window","wombat","word","worth","wriggler","yak","yarmulke","yeast","yin","yogurt","zebra","zen"];var Va=["a","abaft","aboard","about","above","absent","across","afore","after","against","along","alongside","amid","amidst","among","amongst","an","anenst","anti","apropos","apud","around","as","aside","astride","at","athwart","atop","barring","before","behind","below","beneath","beside","besides","between","beyond","but","by","circa","concerning","considering","despite","down","during","except","excepting","excluding","failing","following","for","forenenst","from","given","in","including","inside","into","lest","like","mid","midst","minus","modulo","near","next","notwithstanding","of","off","on","onto","opposite","out","outside","over","pace","past","per","plus","pro","qua","regarding","round","sans","save","since","than","the","through","throughout","till","times","to","toward","towards","under","underneath","unlike","until","unto","up","upon","versus","via","vice","with","within","without","worth"];var Ya=["abnegate","abscond","abseil","absolve","accentuate","accept","access","accessorise","accompany","account","accredit","achieve","acknowledge","acquire","adjourn","adjudge","admonish","adumbrate","advocate","afford","airbrush","ameliorate","amend","amount","anaesthetise","analyse","anesthetize","anneal","annex","antagonize","ape","apologise","apostrophize","appertain","appreciate","appropriate","approximate","arbitrate","archive","arraign","arrange","ascertain","ascribe","assail","atomize","attend","attest","attribute","augment","avow","axe","baa","banish","bank","baptise","battle","beard","beep","behold","belabor","bemuse","besmirch","bestride","better","bewail","bicycle","bide","bind","biodegrade","blacken","blaspheme","bleach","blend","blink","bliss","bloom","bludgeon","bobble","boggle","bolster","book","boom","bootleg","border","bore","boss","braid","brand","brandish","break","breed","broadcast","broadside","brood","browse","buck","burgeon","bus","butter","buzzing","camouflage","cannibalise","canter","cap","capitalise","capitalize","capsize","card","carouse","carp","carpool","catalog","catalyze","catch","categorise","cease","celebrate","censor","certify","char","charter","chase","chatter","chime","chip","christen","chromakey","chunder","chunter","cinch","circle","circulate","circumnavigate","clamor","clamour","claw","cleave","clinch","clinking","clone","clonk","coagulate","coexist","coincide","collaborate","colligate","colorize","colour","comb","come","commandeer","commemorate","communicate","compete","conceal","conceptualize","conclude","concrete","condense","cone","confide","confirm","confiscate","confound","confute","congregate","conjecture","connect","consign","construe","contradict","contrast","contravene","controvert","convalesce","converse","convince","convoke","coop","cop","corner","covenant","cow","crackle","cram","crank","creak","creaking","cripple","croon","cross","crumble","crystallize","culminate","culture","curry","curse","customise","cycle","dally","dampen","darn","debit","debut","decide","decode","decouple","decriminalize","deduce","deduct","deflate","deflect","deform","defrag","degenerate","degrease","delete","delight","deliquesce","demob","demobilise","democratize","demonstrate","denitrify","deny","depart","depend","deplore","deploy","deprave","depute","dereference","describe","desecrate","deselect","destock","detain","develop","devise","dial","dicker","digitize","dilate","disapprove","disarm","disbar","discontinue","disgorge","dishearten","dishonor","disinherit","dislocate","dispense","display","dispose","disrespect","dissemble","ditch","divert","dock","doodle","downchange","downshift","dowse","draft","drag","drain","dramatize","drowse","drum","dwell","economise","edge","efface","egg","eke","electrify","embalm","embed","embody","emboss","emerge","emphasise","emphasize","emulsify","encode","endow","enfold","engage","engender","enhance","enlist","enrage","enrich","enroll","entice","entomb","entrench","entwine","equate","essay","etch","eulogise","even","evince","exacerbate","exaggerate","exalt","exempt","exonerate","expatiate","explode","expostulate","extract","extricate","eyeglasses","fabricate","facilitate","factorise","factorize","fail","fall","familiarize","fashion","father","fathom","fax","federate","feminize","fence","fess","fictionalize","fiddle","fidget","fill","flash","fleck","flight","floodlight","floss","fluctuate","fluff","fly","focalise","foot","forearm","forecast","foretell","forgather","forgo","fork","form","forswear","founder","fraternise","fray","frizz","fumigate","function","furlough","fuss","gad","gallivant","galvanize","gape","garage","garrote","gasp","gestate","give","glimmer","glisten","gloat","gloss","glow","gnash","gnaw","goose","govern","grade","graduate","graft","grok","guest","guilt","gulp","gum","gurn","gust","gut","guzzle","ham","harangue","harvest","hassle","haul","haze","headline","hearten","heighten","highlight","hoick","hold","hole","hollow","holster","home","homeschool","hoot","horn","horse","hotfoot","house","hover","howl","huddle","huff","hunger","hunt","husk","hype","hypothesise","hypothesize","idle","ignite","imagineer","impact","impanel","implode","incinerate","incline","inculcate","industrialize","ingratiate","inhibit","inject","innovate","inscribe","insert","insist","inspect","institute","institutionalize","intend","intermarry","intermesh","intermix","internalise","internalize","internationalize","intrigue","inure","inveigle","inventory","investigate","irk","iterate","jaywalk","jell","jeopardise","jiggle","jive","joint","jot","jut","keel","knife","knit","know","kowtow","lack","lampoon","large","leap","lecture","legitimize","lend","libel","liberalize","license","ligate","list","lobotomise","lock","log","loose","low","lowball","machine","magnetize","major","make","malfunction","manage","manipulate","maroon","masculinize","mash","mask","masquerade","massage","masticate","materialise","matter","maul","memorise","merge","mesh","metabolise","microblog","microchip","micromanage","militate","mill","minister","minor","misappropriate","miscalculate","misfire","misjudge","miskey","mismatch","mispronounce","misread","misreport","misspend","mob","mobilise","mobilize","moisten","mooch","moor","moralise","mortar","mosh","mothball","motivate","motor","mould","mount","muddy","mummify","mutate","mystify","nab","narrate","narrowcast","nasalise","nauseate","navigate","neaten","neck","neglect","norm","notarize","object","obscure","observe","obsess","obstruct","obtrude","offend","offset","option","orchestrate","orient","orientate","outbid","outdo","outfit","outflank","outfox","outnumber","outrank","outrun","outsource","overburden","overcharge","overcook","overdub","overfeed","overload","overplay","overproduce","overreact","override","overspend","overstay","overtrain","overvalue","overwork","own","oxidise","oxidize","oxygenate","pace","pack","pale","pant","paralyse","parody","part","pause","pave","penalise","persecute","personalise","perspire","pertain","peter","pike","pillory","pinion","pip","pity","pivot","pixellate","plagiarise","plait","plan","please","pluck","ponder","popularize","portray","prance","preclude","preheat","prejudge","preregister","presell","preside","pretend","print","prioritize","probate","probe","proceed","procrastinate","profane","progress","proliferate","proofread","propound","proselytise","provision","pry","publicize","puff","pull","pulp","pulverize","purse","put","putrefy","quadruple","quaff","quantify","quarrel","quash","quaver","question","quiet","quintuple","quip","quit","rag","rally","ramp","randomize","rationalise","rationalize","ravage","ravel","react","readies","readjust","readmit","ready","reapply","rear","reassemble","rebel","reboot","reborn","rebound","rebuff","rebuild","rebuke","recede","reckon","reclassify","recompense","reconstitute","record","recount","redact","redevelop","redound","redraw","redress","reel","refer","reference","refine","reflate","refute","regulate","reiterate","rejigger","rejoin","rekindle","relaunch","relieve","remand","remark","reopen","reorient","replicate","repossess","represent","reprimand","reproach","reprove","repurpose","requite","reschedule","resort","respray","restructure","retool","retract","revere","revitalise","revoke","reword","rewrite","ride","ridge","rim","ring","rise","rival","roger","rosin","rot","rout","row","rue","rule","safeguard","sashay","sate","satirise","satirize","satisfy","saturate","savour","scale","scamper","scar","scare","scarper","scent","schematise","scheme","schlep","scoff","scoop","scope","scotch","scowl","scrabble","scram","scramble","scrape","screw","scruple","scrutinise","scuffle","scuttle","search","secularize","see","segregate","sell","sense","sensitize","sequester","serenade","serialize","serve","service","settle","sew","shaft","sham","shampoo","shanghai","shear","sheathe","shell","shinny","shirk","shoot","shoulder","shout","shovel","showboat","shred","shrill","shudder","shush","sidetrack","sign","silt","sin","singe","sit","sizzle","skateboard","ski","slake","slap","slather","sleet","slink","slip","slope","slump","smarten","smuggle","snack","sneak","sniff","snoop","snow","snowplow","snuggle","soap","solace","solder","solicit","source","spark","spattering","spectacles","spectate","spellcheck","spew","spice","spirit","splash","splay","split","splosh","splurge","spook","square","squirm","stabilise","stable","stack","stage","stake","starch","state","statement","stiffen","stigmatize","sting","stint","stoop","store","storyboard","stratify","structure","stuff","stunt","substantiate","subtract","suckle","suffice","suffocate","summarise","sun","sunbathe","sunder","sup","surge","surprise","swat","swathe","sway","swear","swelter","swerve","swill","swing","symbolise","synthesise","syringe","table","tabulate","tag","tame","tank","tankful","tarry","task","taxicab","team","telescope","tenant","terraform","terrorise","testify","think","throbbing","thump","tighten","toady","toe","tough","tousle","traduce","train","transcend","transplant","trash","treasure","treble","trek","trial","tromp","trouser","trust","tune","tut","twine","twist","typify","unbalance","uncork","uncover","underachieve","undergo","underplay","unearth","unfreeze","unfurl","unlearn","unscramble","unzip","uproot","upsell","usher","vacation","vamoose","vanish","vary","veg","venture","verify","vet","veto","volunteer","vulgarise","waft","wallop","waltz","warp","wash","waver","weary","weatherize","wedge","weep","weight","welcome","westernise","westernize","while","whine","whisper","whistle","whitewash","whup","wilt","wing","wire","wisecrack","wolf","wound","wring","writ","yak","yawn","yearn","yuppify"];var ko={adjective:Ia,adverb:Ka,conjunction:Oa,interjection:xa,noun:za,preposition:Va,verb:Ya},ja=ko;var Co={airline:r,animal:C$1,app:B$1,book:P$1,cell_phone:W$1,color:F$1,commerce:I$1,company:U$1,database:_$1,date:$,finance:ue$1,food:fe$1,hacker:we$1,internet:Pe$1,location:Ze$1,lorem:Qe$1,metadata:Xe$1,music:ra,person:fa,phone_number:Ma,science:Da,team:Ha,vehicle:Ja,word:ja},ss=Co;

var u=class extends Error{};function Ae(i){let e=Object.getPrototypeOf(i);do{for(let t of Object.getOwnPropertyNames(e))typeof i[t]=="function"&&t!=="constructor"&&(i[t]=i[t].bind(i));e=Object.getPrototypeOf(e);}while(e!==Object.prototype)}var x=class{constructor(e){this.faker=e;Ae(this);}},p=class extends x{constructor(t){super(t);this.faker=t;}};var Ee=(r=>(r.Narrowbody="narrowbody",r.Regional="regional",r.Widebody="widebody",r))(Ee||{}),ct=["0","1","2","3","4","5","6","7","8","9"],lt=["0","O","1","I","L"],mt={regional:20,narrowbody:35,widebody:60},ut={regional:["A","B","C","D"],narrowbody:["A","B","C","D","E","F"],widebody:["A","B","C","D","E","F","G","H","J","K"]},P=class extends p{airport(){return this.faker.helpers.arrayElement(this.faker.definitions.airline.airport)}airline(){return this.faker.helpers.arrayElement(this.faker.definitions.airline.airline)}airplane(){return this.faker.helpers.arrayElement(this.faker.definitions.airline.airplane)}recordLocator(e={}){let{allowNumerics:t=!1,allowVisuallySimilarCharacters:r=!1}=e,n=[];return t||n.push(...ct),r||n.push(...lt),this.faker.string.alphanumeric({length:6,casing:"upper",exclude:n})}seat(e={}){let{aircraftType:t="narrowbody"}=e,r=mt[t],n=ut[t],a=this.faker.number.int({min:1,max:r}),o=this.faker.helpers.arrayElement(n);return `${a}${o}`}aircraftType(){return this.faker.helpers.enumValue(Ee)}flightNumber(e={}){let{length:t={min:1,max:4},addLeadingZeros:r=!1}=e,n=this.faker.string.numeric({length:t,allowLeadingZeros:!1});return r?n.padStart(4,"0"):n}};var we=(a=>(a.SRGB="sRGB",a.DisplayP3="display-p3",a.REC2020="rec2020",a.A98RGB="a98-rgb",a.ProphotoRGB="prophoto-rgb",a))(we||{}),Se=(c=>(c.RGB="rgb",c.RGBA="rgba",c.HSL="hsl",c.HSLA="hsla",c.HWB="hwb",c.CMYK="cmyk",c.LAB="lab",c.LCH="lch",c.COLOR="color",c))(Se||{});function ht(i,e){let{prefix:t,casing:r}=e;switch(r){case"upper":{i=i.toUpperCase();break}case"lower":{i=i.toLowerCase();break}}return t&&(i=t+i),i}function Te(i){return i.map(t=>{if(t%1!==0){let n=new ArrayBuffer(4);new DataView(n).setFloat32(0,t);let a=new Uint8Array(n);return Te([...a]).replaceAll(" ","")}return (t>>>0).toString(2).padStart(8,"0")}).join(" ")}function pt(i,e="rgb",t="sRGB"){let r=n=>Math.round(n*100);switch(e){case"rgba":return `rgba(${i[0]}, ${i[1]}, ${i[2]}, ${i[3]})`;case"color":return `color(${t} ${i[0]} ${i[1]} ${i[2]})`;case"cmyk":return `cmyk(${r(i[0])}%, ${r(i[1])}%, ${r(i[2])}%, ${r(i[3])}%)`;case"hsl":return `hsl(${i[0]}deg ${r(i[1])}% ${r(i[2])}%)`;case"hsla":return `hsl(${i[0]}deg ${r(i[1])}% ${r(i[2])}% / ${r(i[3])})`;case"hwb":return `hwb(${i[0]} ${r(i[1])}% ${r(i[2])}%)`;case"lab":return `lab(${r(i[0])}% ${i[1]} ${i[2]})`;case"lch":return `lch(${r(i[0])}% ${i[1]} ${i[2]})`;case"rgb":return `rgb(${i[0]}, ${i[1]}, ${i[2]})`}}function C(i,e,t="rgb",r="sRGB"){switch(e){case"css":return pt(i,t,r);case"binary":return Te(i);case"decimal":return i}}var I=class extends p{human(){return this.faker.helpers.arrayElement(this.faker.definitions.color.human)}space(){return this.faker.helpers.arrayElement(this.faker.definitions.color.space)}cssSupportedFunction(){return this.faker.helpers.enumValue(Se)}cssSupportedSpace(){return this.faker.helpers.enumValue(we)}rgb(e={}){let{format:t="hex",includeAlpha:r=!1,prefix:n="#",casing:a="lower"}=e,o,s="rgb";return t==="hex"?(o=this.faker.string.hexadecimal({length:r?8:6,prefix:""}),o=ht(o,{prefix:n,casing:a}),o):(o=Array.from({length:3},()=>this.faker.number.int(255)),r&&(o.push(this.faker.number.float({multipleOf:.01})),s="rgba"),C(o,t,s))}cmyk(e={}){let{format:t="decimal"}=e,r=Array.from({length:4},()=>this.faker.number.float({multipleOf:.01}));return C(r,t,"cmyk")}hsl(e={}){let{format:t="decimal",includeAlpha:r=!1}=e,n=[this.faker.number.int(360)];for(let a=0;a<(e?.includeAlpha?3:2);a++)n.push(this.faker.number.float({multipleOf:.01}));return C(n,t,r?"hsla":"hsl")}hwb(e={}){let{format:t="decimal"}=e,r=[this.faker.number.int(360)];for(let n=0;n<2;n++)r.push(this.faker.number.float({multipleOf:.01}));return C(r,t,"hwb")}lab(e={}){let{format:t="decimal"}=e,r=[this.faker.number.float({multipleOf:1e-6})];for(let n=0;n<2;n++)r.push(this.faker.number.float({min:-100,max:100,multipleOf:1e-4}));return C(r,t,"lab")}lch(e={}){let{format:t="decimal"}=e,r=[this.faker.number.float({multipleOf:1e-6})];for(let n=0;n<2;n++)r.push(this.faker.number.float({max:230,multipleOf:.1}));return C(r,t,"lch")}colorByCSSColorSpace(e={}){let{format:t="decimal",space:r="sRGB"}=e,n=Array.from({length:3},()=>this.faker.number.float({multipleOf:1e-4}));return C(n,t,"color",r)}};var pe=(n=>(n.Legacy="legacy",n.Segwit="segwit",n.Bech32="bech32",n.Taproot="taproot",n))(pe||{}),Me=(t=>(t.Mainnet="mainnet",t.Testnet="testnet",t))(Me||{}),Ce={legacy:{prefix:{mainnet:"1",testnet:"m"},length:{min:26,max:34},casing:"mixed",exclude:"0OIl"},segwit:{prefix:{mainnet:"3",testnet:"2"},length:{min:26,max:34},casing:"mixed",exclude:"0OIl"},bech32:{prefix:{mainnet:"bc1",testnet:"tb1"},length:{min:42,max:42},casing:"lower",exclude:"1bBiIoO"},taproot:{prefix:{mainnet:"bc1p",testnet:"tb1p"},length:{min:62,max:62},casing:"lower",exclude:"1bBiIoO"}};var fe=typeof Buffer>"u"?i=>{let e=new TextEncoder().encode(i),t=Array.from(e,r=>String.fromCodePoint(r)).join("");return btoa(t)}:i=>Buffer.from(i).toString("base64"),be=typeof Buffer>"u"?i=>fe(i).replaceAll("+","-").replaceAll("/","_").replaceAll(/=+$/g,""):i=>Buffer.from(i).toString("base64url");function N(i){let e=`[@faker-js/faker]: ${i.deprecated} is deprecated`;i.since&&(e+=` since v${i.since}`),i.until&&(e+=` and will be removed in v${i.until}`),i.proposed&&(e+=`. Please use ${i.proposed} instead`),console.warn(`${e}.`);}var ft=Object.fromEntries([["\u0410","A"],["\u0430","a"],["\u0411","B"],["\u0431","b"],["\u0412","V"],["\u0432","v"],["\u0413","G"],["\u0433","g"],["\u0414","D"],["\u0434","d"],["\u044A\u0435","ye"],["\u042A\u0435","Ye"],["\u044A\u0415","yE"],["\u042A\u0415","YE"],["\u0415","E"],["\u0435","e"],["\u0401","Yo"],["\u0451","yo"],["\u0416","Zh"],["\u0436","zh"],["\u0417","Z"],["\u0437","z"],["\u0418","I"],["\u0438","i"],["\u044B\u0439","iy"],["\u042B\u0439","Iy"],["\u042B\u0419","IY"],["\u044B\u0419","iY"],["\u0419","Y"],["\u0439","y"],["\u041A","K"],["\u043A","k"],["\u041B","L"],["\u043B","l"],["\u041C","M"],["\u043C","m"],["\u041D","N"],["\u043D","n"],["\u041E","O"],["\u043E","o"],["\u041F","P"],["\u043F","p"],["\u0420","R"],["\u0440","r"],["\u0421","S"],["\u0441","s"],["\u0422","T"],["\u0442","t"],["\u0423","U"],["\u0443","u"],["\u0424","F"],["\u0444","f"],["\u0425","Kh"],["\u0445","kh"],["\u0426","Ts"],["\u0446","ts"],["\u0427","Ch"],["\u0447","ch"],["\u0428","Sh"],["\u0448","sh"],["\u0429","Sch"],["\u0449","sch"],["\u042A",""],["\u044A",""],["\u042B","Y"],["\u044B","y"],["\u042C",""],["\u044C",""],["\u042D","E"],["\u044D","e"],["\u042E","Yu"],["\u044E","yu"],["\u042F","Ya"],["\u044F","ya"]]),bt=Object.fromEntries([["\u03B1","a"],["\u03B2","v"],["\u03B3","g"],["\u03B4","d"],["\u03B5","e"],["\u03B6","z"],["\u03B7","i"],["\u03B8","th"],["\u03B9","i"],["\u03BA","k"],["\u03BB","l"],["\u03BC","m"],["\u03BD","n"],["\u03BE","ks"],["\u03BF","o"],["\u03C0","p"],["\u03C1","r"],["\u03C3","s"],["\u03C4","t"],["\u03C5","y"],["\u03C6","f"],["\u03C7","x"],["\u03C8","ps"],["\u03C9","o"],["\u03AC","a"],["\u03AD","e"],["\u03AF","i"],["\u03CC","o"],["\u03CD","y"],["\u03AE","i"],["\u03CE","o"],["\u03C2","s"],["\u03CA","i"],["\u03B0","y"],["\u03CB","y"],["\u0390","i"],["\u0391","A"],["\u0392","B"],["\u0393","G"],["\u0394","D"],["\u0395","E"],["\u0396","Z"],["\u0397","I"],["\u0398","TH"],["\u0399","I"],["\u039A","K"],["\u039B","L"],["\u039C","M"],["\u039D","N"],["\u039E","KS"],["\u039F","O"],["\u03A0","P"],["\u03A1","R"],["\u03A3","S"],["\u03A4","T"],["\u03A5","Y"],["\u03A6","F"],["\u03A7","X"],["\u03A8","PS"],["\u03A9","O"],["\u0386","A"],["\u0388","E"],["\u038A","I"],["\u038C","O"],["\u038E","Y"],["\u0389","I"],["\u038F","O"],["\u03AA","I"],["\u03AB","Y"]]),dt=Object.fromEntries([["\u0621","e"],["\u0622","a"],["\u0623","a"],["\u0624","w"],["\u0625","i"],["\u0626","y"],["\u0627","a"],["\u0628","b"],["\u0629","t"],["\u062A","t"],["\u062B","th"],["\u062C","j"],["\u062D","h"],["\u062E","kh"],["\u062F","d"],["\u0630","dh"],["\u0631","r"],["\u0632","z"],["\u0633","s"],["\u0634","sh"],["\u0635","s"],["\u0636","d"],["\u0637","t"],["\u0638","z"],["\u0639","e"],["\u063A","gh"],["\u0640","_"],["\u0641","f"],["\u0642","q"],["\u0643","k"],["\u0644","l"],["\u0645","m"],["\u0646","n"],["\u0647","h"],["\u0648","w"],["\u0649","a"],["\u064A","y"],["\u064E\u200E","a"],["\u064F","u"],["\u0650\u200E","i"]]),gt=Object.fromEntries([["\u0561","a"],["\u0531","A"],["\u0562","b"],["\u0532","B"],["\u0563","g"],["\u0533","G"],["\u0564","d"],["\u0534","D"],["\u0565","ye"],["\u0535","Ye"],["\u0566","z"],["\u0536","Z"],["\u0567","e"],["\u0537","E"],["\u0568","y"],["\u0538","Y"],["\u0569","t"],["\u0539","T"],["\u056A","zh"],["\u053A","Zh"],["\u056B","i"],["\u053B","I"],["\u056C","l"],["\u053C","L"],["\u056D","kh"],["\u053D","Kh"],["\u056E","ts"],["\u053E","Ts"],["\u056F","k"],["\u053F","K"],["\u0570","h"],["\u0540","H"],["\u0571","dz"],["\u0541","Dz"],["\u0572","gh"],["\u0542","Gh"],["\u0573","tch"],["\u0543","Tch"],["\u0574","m"],["\u0544","M"],["\u0575","y"],["\u0545","Y"],["\u0576","n"],["\u0546","N"],["\u0577","sh"],["\u0547","Sh"],["\u0578","vo"],["\u0548","Vo"],["\u0579","ch"],["\u0549","Ch"],["\u057A","p"],["\u054A","P"],["\u057B","j"],["\u054B","J"],["\u057C","r"],["\u054C","R"],["\u057D","s"],["\u054D","S"],["\u057E","v"],["\u054E","V"],["\u057F","t"],["\u054F","T"],["\u0580","r"],["\u0550","R"],["\u0581","c"],["\u0551","C"],["\u0578\u0582","u"],["\u0548\u0552","U"],["\u0548\u0582","U"],["\u0583","p"],["\u0553","P"],["\u0584","q"],["\u0554","Q"],["\u0585","o"],["\u0555","O"],["\u0586","f"],["\u0556","F"],["\u0587","yev"]]),yt=Object.fromEntries([["\u0686","ch"],["\u06A9","k"],["\u06AF","g"],["\u067E","p"],["\u0698","zh"],["\u06CC","y"]]),kt=Object.fromEntries([["\u05D0","a"],["\u05D1","b"],["\u05D2","g"],["\u05D3","d"],["\u05D4","h"],["\u05D5","v"],["\u05D6","z"],["\u05D7","ch"],["\u05D8","t"],["\u05D9","y"],["\u05DB","k"],["\u05DA","kh"],["\u05DC","l"],["\u05DD","m"],["\u05DE","m"],["\u05DF","n"],["\u05E0","n"],["\u05E1","s"],["\u05E2","a"],["\u05E4","f"],["\u05E3","ph"],["\u05E6","ts"],["\u05E5","ts"],["\u05E7","k"],["\u05E8","r"],["\u05E9","sh"],["\u05EA","t"],["\u05D5","v"]]),de={...ft,...bt,...dt,...yt,...gt,...kt};function Ne(i){let e=()=>i.helpers.arrayElement(["AB","AF","AN","AR","AS","AZ","BE","BG","BN","BO","BR","BS","CA","CE","CO","CS","CU","CY","DA","DE","EL","EN","EO","ES","ET","EU","FA","FI","FJ","FO","FR","FY","GA","GD","GL","GV","HE","HI","HR","HT","HU","HY","ID","IS","IT","JA","JV","KA","KG","KO","KU","KW","KY","LA","LB","LI","LN","LT","LV","MG","MK","MN","MO","MS","MT","MY","NB","NE","NL","NN","NO","OC","PL","PT","RM","RO","RU","SC","SE","SK","SL","SO","SQ","SR","SV","SW","TK","TR","TY","UK","UR","UZ","VI","VO","YI","ZH"]),t=()=>{let c={chrome:["win","mac","lin"],firefox:["win","mac","lin"],opera:["win","mac","lin"],safari:["win","mac"],iexplorer:["win"]},l=i.helpers.objectKey(c),h=i.helpers.arrayElement(c[l]);return [l,h]},r=c=>i.helpers.arrayElement({lin:["i686","x86_64"],mac:["Intel","PPC","U; Intel","U; PPC"],win:["","WOW64","Win64; x64"]}[c]),n=c=>{let l="";for(let h=0;h<c;h++)l+=`.${i.string.numeric({allowLeadingZeros:!0})}`;return l},a={net(){return [i.number.int({min:1,max:4}),i.number.int(9),i.number.int({min:1e4,max:99999}),i.number.int(9)].join(".")},nt(){return [i.number.int({min:5,max:6}),i.number.int(3)].join(".")},ie(){return i.number.int({min:7,max:11})},trident(){return [i.number.int({min:3,max:7}),i.number.int(1)].join(".")},osx(c){return [10,i.number.int({min:5,max:10}),i.number.int(9)].join(c||".")},chrome(){return [i.number.int({min:13,max:39}),0,i.number.int({min:800,max:899}),0].join(".")},presto(){return `2.9.${i.number.int({min:160,max:190})}`},presto2(){return `${i.number.int({min:10,max:12})}.00`},safari(){return [i.number.int({min:531,max:538}),i.number.int(2),i.number.int(2)].join(".")}},o={firefox(c){let l=`${i.number.int({min:5,max:15})}${n(2)}`,h=`Gecko/20100101 Firefox/${l}`,f=r(c);return `Mozilla/5.0 ${c==="win"?`(Windows NT ${a.nt()}${f?`; ${f}`:""}`:c==="mac"?`(Macintosh; ${f} Mac OS X ${a.osx()}`:`(X11; Linux ${f}`}; rv:${l.slice(0,-2)}) ${h}`},iexplorer(){let c=a.ie();return c>=11?`Mozilla/5.0 (Windows NT 6.${i.number.int({min:1,max:3})}; Trident/7.0; ${i.datatype.boolean()?"Touch; ":""}rv:11.0) like Gecko`:`Mozilla/5.0 (compatible; MSIE ${c}.0; Windows NT ${a.nt()}; Trident/${a.trident()}${i.datatype.boolean()?`; .NET CLR ${a.net()}`:""})`},opera(c){let l=` Presto/${a.presto()} Version/${a.presto2()})`,h=c==="win"?`(Windows NT ${a.nt()}; U; ${e()}${l}`:c==="lin"?`(X11; Linux ${r(c)}; U; ${e()}${l}`:`(Macintosh; Intel Mac OS X ${a.osx()} U; ${e()} Presto/${a.presto()} Version/${a.presto2()})`;return `Opera/${i.number.int({min:9,max:14})}.${i.number.int(99)} ${h}`},safari(c){let l=a.safari(),h=`${i.number.int({min:4,max:7})}.${i.number.int(1)}.${i.number.int(10)}`;return `Mozilla/5.0 ${c==="mac"?`(Macintosh; ${r("mac")} Mac OS X ${a.osx("_")} rv:${i.number.int({min:2,max:6})}.0; ${e()}) `:`(Windows; U; Windows NT ${a.nt()})`}AppleWebKit/${l} (KHTML, like Gecko) Version/${h} Safari/${l}`},chrome(c){let l=a.safari();return `Mozilla/5.0 ${c==="mac"?`(Macintosh; ${r("mac")} Mac OS X ${a.osx("_")}) `:c==="win"?`(Windows; U; Windows NT ${a.nt()})`:`(X11; Linux ${r(c)}`} AppleWebKit/${l} (KHTML, like Gecko) Chrome/${a.chrome()} Safari/${l}`}},[s,m]=t();return o[s](m)}var At=(l=>(l.Any="any",l.Loopback="loopback",l.PrivateA="private-a",l.PrivateB="private-b",l.PrivateC="private-c",l.TestNet1="test-net-1",l.TestNet2="test-net-2",l.TestNet3="test-net-3",l.LinkLocal="link-local",l.Multicast="multicast",l))(At||{}),Et={any:"0.0.0.0/0",loopback:"127.0.0.0/8","private-a":"10.0.0.0/8","private-b":"172.16.0.0/12","private-c":"192.168.0.0/16","test-net-1":"192.0.2.0/24","test-net-2":"198.51.100.0/24","test-net-3":"203.0.113.0/24","link-local":"169.254.0.0/16",multicast:"224.0.0.0/4"},_=class extends p{email(e={}){let{firstName:t,lastName:r,provider:n=this.faker.helpers.arrayElement(this.faker.definitions.internet.free_email),allowSpecialCharacters:a=!1}=e,o=this.username({firstName:t,lastName:r});if(o=o.replaceAll(/[^A-Za-z0-9._+-]+/g,""),o=o.substring(0,50),a){let s=[..."._-"],m=[...".!#$%&'*+-/=?^_`{|}~"];o=o.replace(this.faker.helpers.arrayElement(s),this.faker.helpers.arrayElement(m));}return o=o.replaceAll(/\.{2,}/g,"."),o=o.replace(/^\./,""),o=o.replace(/\.$/,""),`${o}@${n}`}exampleEmail(e={}){let{firstName:t,lastName:r,allowSpecialCharacters:n=!1}=e,a=this.faker.helpers.arrayElement(this.faker.definitions.internet.example_email);return this.email({firstName:t,lastName:r,provider:a,allowSpecialCharacters:n})}userName(e={}){return N({deprecated:"faker.internet.userName()",proposed:"faker.internet.username()",since:"9.1.0",until:"10.0.0"}),this.username(e)}username(e={}){let{firstName:t=this.faker.person.firstName(),lastName:r=this.faker.person.lastName(),lastName:n}=e,a=this.faker.helpers.arrayElement([".","_"]),o=this.faker.number.int(99),s=[()=>`${t}${a}${r}${o}`,()=>`${t}${a}${r}`];n||s.push(()=>`${t}${o}`);let m=this.faker.helpers.arrayElement(s)();return m=m.normalize("NFKD").replaceAll(/[\u0300-\u036F]/g,""),m=[...m].map(c=>{if(de[c])return de[c];let l=c.codePointAt(0)??Number.NaN;return l<128?c:l.toString(36)}).join(""),m=m.toString().replaceAll("'",""),m=m.replaceAll(" ",""),m}displayName(e={}){let{firstName:t=this.faker.person.firstName(),lastName:r=this.faker.person.lastName()}=e,n=this.faker.helpers.arrayElement([".","_"]),a=this.faker.number.int(99),o=[()=>`${t}${a}`,()=>`${t}${n}${r}`,()=>`${t}${n}${r}${a}`],s=this.faker.helpers.arrayElement(o)();return s=s.toString().replaceAll("'",""),s=s.replaceAll(" ",""),s}protocol(){let e=["http","https"];return this.faker.helpers.arrayElement(e)}httpMethod(){let e=["GET","POST","PUT","DELETE","PATCH"];return this.faker.helpers.arrayElement(e)}httpStatusCode(e={}){let{types:t=Object.keys(this.faker.definitions.internet.http_status_code)}=e,r=this.faker.helpers.arrayElement(t);return this.faker.helpers.arrayElement(this.faker.definitions.internet.http_status_code[r])}url(e={}){let{appendSlash:t=this.faker.datatype.boolean(),protocol:r="https"}=e;return `${r}://${this.domainName()}${t?"/":""}`}domainName(){return `${this.domainWord()}.${this.domainSuffix()}`}domainSuffix(){return this.faker.helpers.arrayElement(this.faker.definitions.internet.domain_suffix)}domainWord(){return this.faker.helpers.slugify(`${this.faker.word.adjective()}-${this.faker.word.noun()}`).toLowerCase()}ip(){return this.faker.datatype.boolean()?this.ipv4():this.ipv6()}ipv4(e={}){let{network:t="any",cidrBlock:r=Et[t]}=e;if(!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2}$/.test(r))throw new u(`Invalid CIDR block provided: ${r}. Must be in the format x.x.x.x/y.`);let[n,a]=r.split("/"),o=4294967295>>>Number.parseInt(a),[s,m,c,l]=n.split(".").map(Number),f=(s<<24|m<<16|c<<8|l)&~o,d=this.faker.number.int(o),b=f|d;return [b>>>24&255,b>>>16&255,b>>>8&255,b&255].join(".")}ipv6(){return Array.from({length:8},()=>this.faker.string.hexadecimal({length:4,casing:"lower",prefix:""})).join(":")}port(){return this.faker.number.int(65535)}userAgent(){return Ne(this.faker)}color(e={}){let{redBase:t=0,greenBase:r=0,blueBase:n=0}=e,a=c=>Math.floor((this.faker.number.int(256)+c)/2).toString(16).padStart(2,"0"),o=a(t),s=a(r),m=a(n);return `#${o}${s}${m}`}mac(e={}){typeof e=="string"&&(e={separator:e});let{separator:t=":"}=e,r,n="";for([":","-",""].includes(t)||(t=":"),r=0;r<12;r++)n+=this.faker.number.hex(15),r%2===1&&r!==11&&(n+=t);return n}password(e={}){let t=/[aeiouAEIOU]$/,r=/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/,n=(c,l,h,f)=>{if(f.length>=c)return f;l&&(h=r.test(f)?t:r);let d=this.faker.number.int(94)+33,b=String.fromCodePoint(d);return l&&(b=b.toLowerCase()),h.test(b)?n(c,l,h,f+b):n(c,l,h,f)},{length:a=15,memorable:o=!1,pattern:s=/\w/,prefix:m=""}=e;return n(a,o,s,m)}emoji(e={}){let{types:t=Object.keys(this.faker.definitions.internet.emoji)}=e,r=this.faker.helpers.arrayElement(t);return this.faker.helpers.arrayElement(this.faker.definitions.internet.emoji[r])}jwtAlgorithm(){return this.faker.helpers.arrayElement(this.faker.definitions.internet.jwt_algorithm)}jwt(e={}){let{refDate:t=this.faker.defaultRefDate()}=e,r=this.faker.date.recent({refDate:t}),{header:n={alg:this.jwtAlgorithm(),typ:"JWT"},payload:a={iat:Math.round(r.valueOf()/1e3),exp:Math.round(this.faker.date.soon({refDate:r}).valueOf()/1e3),nbf:Math.round(this.faker.date.anytime({refDate:t}).valueOf()/1e3),iss:this.faker.company.name(),sub:this.faker.string.uuid(),aud:this.faker.string.uuid(),jti:this.faker.string.uuid()}}=e,o=be(JSON.stringify(n)),s=be(JSON.stringify(a)),m=this.faker.string.alphanumeric(64);return `${o}.${s}.${m}`}};var De=(t=>(t.Female="female",t.Male="male",t))(De||{});function D(i,e,t){let{generic:r,female:n,male:a}=t;switch(e){case"female":return n??r;case"male":return a??r;default:return r??i.helpers.arrayElement([n,a])??[]}}var F=class extends p{firstName(e){return this.faker.helpers.arrayElement(D(this.faker,e,this.faker.definitions.person.first_name))}lastName(e){if(this.faker.rawDefinitions.person?.last_name_pattern!=null){let t=this.faker.helpers.weightedArrayElement(D(this.faker,e,this.faker.rawDefinitions.person.last_name_pattern));return this.faker.helpers.fake(t)}return this.faker.helpers.arrayElement(D(this.faker,e,this.faker.definitions.person.last_name))}middleName(e){return this.faker.helpers.arrayElement(D(this.faker,e,this.faker.definitions.person.middle_name))}fullName(e={}){let{sex:t=this.faker.helpers.arrayElement(["female","male"]),firstName:r=this.firstName(t),lastName:n=this.lastName(t)}=e,a=this.faker.helpers.weightedArrayElement(this.faker.definitions.person.name);return this.faker.helpers.mustache(a,{"person.prefix":()=>this.prefix(t),"person.firstName":()=>r,"person.middleName":()=>this.middleName(t),"person.lastName":()=>n,"person.suffix":()=>this.suffix()})}gender(){return this.faker.helpers.arrayElement(this.faker.definitions.person.gender)}sex(){return this.faker.helpers.arrayElement(this.faker.definitions.person.sex)}sexType(){return this.faker.helpers.enumValue(De)}bio(){let{bio_pattern:e}=this.faker.definitions.person;return this.faker.helpers.fake(e)}prefix(e){return this.faker.helpers.arrayElement(D(this.faker,e,this.faker.definitions.person.prefix))}suffix(){return this.faker.helpers.arrayElement(this.faker.definitions.person.suffix)}jobTitle(){return this.faker.helpers.fake(this.faker.definitions.person.job_title_pattern)}jobDescriptor(){return this.faker.helpers.arrayElement(this.faker.definitions.person.job_descriptor)}jobArea(){return this.faker.helpers.arrayElement(this.faker.definitions.person.job_area)}jobType(){return this.faker.helpers.arrayElement(this.faker.definitions.person.job_type)}zodiacSign(){return this.faker.helpers.arrayElement(this.faker.definitions.person.western_zodiac_sign)}};var R=class{N=624;M=397;MATRIX_A=2567483615;UPPER_MASK=2147483648;LOWER_MASK=2147483647;mt=Array.from({length:this.N});mti=this.N+1;unsigned32(e){return e<0?(e^this.UPPER_MASK)+this.UPPER_MASK:e}subtraction32(e,t){return e<t?this.unsigned32(4294967296-(t-e)&4294967295):e-t}addition32(e,t){return this.unsigned32(e+t&4294967295)}multiplication32(e,t){let r=0;for(let n=0;n<32;++n)e>>>n&1&&(r=this.addition32(r,this.unsigned32(t<<n)));return r}initGenrand(e){for(this.mt[0]=this.unsigned32(e&4294967295),this.mti=1;this.mti<this.N;this.mti++)this.mt[this.mti]=this.addition32(this.multiplication32(1812433253,this.unsigned32(this.mt[this.mti-1]^this.mt[this.mti-1]>>>30)),this.mti),this.mt[this.mti]=this.unsigned32(this.mt[this.mti]&4294967295);}initByArray(e,t){this.initGenrand(19650218);let r=1,n=0,a=Math.max(this.N,t);for(;a;a--)this.mt[r]=this.addition32(this.addition32(this.unsigned32(this.mt[r]^this.multiplication32(this.unsigned32(this.mt[r-1]^this.mt[r-1]>>>30),1664525)),e[n]),n),this.mt[r]=this.unsigned32(this.mt[r]&4294967295),r++,n++,r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1),n>=t&&(n=0);for(a=this.N-1;a;a--)this.mt[r]=this.subtraction32(this.unsigned32(this.mt[r]^this.multiplication32(this.unsigned32(this.mt[r-1]^this.mt[r-1]>>>30),1566083941)),r),this.mt[r]=this.unsigned32(this.mt[r]&4294967295),r++,r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1);this.mt[0]=2147483648;}mag01=[0,this.MATRIX_A];genrandInt32(){let e;if(this.mti>=this.N){let t;for(this.mti===this.N+1&&this.initGenrand(5489),t=0;t<this.N-this.M;t++)e=this.unsigned32(this.mt[t]&this.UPPER_MASK|this.mt[t+1]&this.LOWER_MASK),this.mt[t]=this.unsigned32(this.mt[t+this.M]^e>>>1^this.mag01[e&1]);for(;t<this.N-1;t++)e=this.unsigned32(this.mt[t]&this.UPPER_MASK|this.mt[t+1]&this.LOWER_MASK),this.mt[t]=this.unsigned32(this.mt[t+(this.M-this.N)]^e>>>1^this.mag01[e&1]);e=this.unsigned32(this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK),this.mt[this.N-1]=this.unsigned32(this.mt[this.M-1]^e>>>1^this.mag01[e&1]),this.mti=0;}return e=this.mt[this.mti++],e=this.unsigned32(e^e>>>11),e=this.unsigned32(e^e<<7&2636928640),e=this.unsigned32(e^e<<15&4022730752),e=this.unsigned32(e^e>>>18),e}genrandInt31(){return this.genrandInt32()>>>1}genrandReal1(){return this.genrandInt32()*(1/4294967295)}genrandReal2(){return this.genrandInt32()*(1/4294967296)}genrandReal3(){return (this.genrandInt32()+.5)*(1/4294967296)}genrandRes53(){let e=this.genrandInt32()>>>5,t=this.genrandInt32()>>>6;return (e*67108864+t)*(1/9007199254740992)}};function Re(){let i=new R;return i.initGenrand(Math.ceil(Math.random()*Number.MAX_SAFE_INTEGER)),{next(){return i.genrandRes53()},seed(e){typeof e=="number"?i.initGenrand(e):Array.isArray(e)&&i.initByArray(e,e.length);}}}var G=class extends x{boolean(e={}){typeof e=="number"&&(e={probability:e});let{probability:t=.5}=e;return t<=0?!1:t>=1?!0:this.faker.number.float()<t}};function E(i,e="refDate"){let t=new Date(i);if(Number.isNaN(t.valueOf()))throw new u(`Invalid ${e} date: ${i.toString()}`);return t}var O=()=>{throw new u("You cannot edit the locale data on the faker instance")};function Le(i){let e={};return new Proxy(i,{has(){return !0},get(t,r){return typeof r=="symbol"||r==="nodeType"?t[r]:r in e?e[r]:e[r]=wt(r,t[r])},set:O,deleteProperty:O})}function U(i,...e){if(i===null)throw new u(`The locale data for '${e.join(".")}' aren't applicable to this locale.
  If you think this is a bug, please report it at: https://github.com/faker-js/faker`);if(i===void 0)throw new u(`The locale data for '${e.join(".")}' are missing in this locale.
  Please contribute the missing data to the project or use a locale/Faker instance that has these data.
  For more information see https://fakerjs.dev/guide/localization.html`)}function wt(i,e={}){return new Proxy(e,{has(t,r){return t[r]!=null},get(t,r){let n=t[r];return typeof r=="symbol"||r==="nodeType"||U(n,i,r.toString()),n},set:O,deleteProperty:O})}var L=class extends x{anytime(e={}){let{refDate:t=this.faker.defaultRefDate()}=e,r=E(t).getTime();return this.between({from:r-1e3*60*60*24*365,to:r+1e3*60*60*24*365})}past(e={}){let{years:t=1,refDate:r=this.faker.defaultRefDate()}=e;if(t<=0)throw new u("Years must be greater than 0.");let n=E(r).getTime();return this.between({from:n-t*365*24*3600*1e3,to:n-1e3})}future(e={}){let{years:t=1,refDate:r=this.faker.defaultRefDate()}=e;if(t<=0)throw new u("Years must be greater than 0.");let n=E(r).getTime();return this.between({from:n+1e3,to:n+t*365*24*3600*1e3})}between(e){if(e==null||e.from==null||e.to==null)throw new u("Must pass an options object with `from` and `to` values.");let{from:t,to:r}=e,n=E(t,"from").getTime(),a=E(r,"to").getTime();if(n>a)throw new u("`from` date must be before `to` date.");return new Date(this.faker.number.int({min:n,max:a}))}betweens(e){if(e==null||e.from==null||e.to==null)throw new u("Must pass an options object with `from` and `to` values.");let{from:t,to:r,count:n=3}=e;return this.faker.helpers.multiple(()=>this.between({from:t,to:r}),{count:n}).sort((a,o)=>a.getTime()-o.getTime())}recent(e={}){let{days:t=1,refDate:r=this.faker.defaultRefDate()}=e;if(t<=0)throw new u("Days must be greater than 0.");let n=E(r).getTime();return this.between({from:n-t*24*3600*1e3,to:n-1e3})}soon(e={}){let{days:t=1,refDate:r=this.faker.defaultRefDate()}=e;if(t<=0)throw new u("Days must be greater than 0.");let n=E(r).getTime();return this.between({from:n+1e3,to:n+t*24*3600*1e3})}birthdate(e={}){let{mode:t="age",min:r=18,max:n=80,refDate:a=this.faker.defaultRefDate(),mode:o,min:s,max:m}=e;if([s,m,o].filter(f=>f!=null).length%3!==0)throw new u("The 'min', 'max', and 'mode' options must be set together.");let l=E(a),h=l.getUTCFullYear();switch(t){case"age":{let d=new Date(l).setUTCFullYear(h-n-1)+864e5,b=new Date(l).setUTCFullYear(h-r);if(d>b)throw new u(`Max age ${n} should be greater than or equal to min age ${r}.`);return this.between({from:d,to:b})}case"year":{let f=new Date(Date.UTC(0,0,2)).setUTCFullYear(r),d=new Date(Date.UTC(0,11,30)).setUTCFullYear(n);if(f>d)throw new u(`Max year ${n} should be greater than or equal to min year ${r}.`);return this.between({from:f,to:d})}}}},K=class extends L{constructor(t){super(t);this.faker=t;}month(t={}){let{abbreviated:r=!1,context:n=!1}=t,a=this.faker.definitions.date.month,o;r?o=n&&a.abbr_context!=null?"abbr_context":"abbr":o=n&&a.wide_context!=null?"wide_context":"wide";let s=a[o];return U(s,"date.month",o),this.faker.helpers.arrayElement(s)}weekday(t={}){let{abbreviated:r=!1,context:n=!1}=t,a=this.faker.definitions.date.weekday,o;r?o=n&&a.abbr_context!=null?"abbr_context":"abbr":o=n&&a.wide_context!=null?"wide_context":"wide";let s=a[o];return U(s,"date.weekday",o),this.faker.helpers.arrayElement(s)}timeZone(){return this.faker.helpers.arrayElement(this.faker.definitions.date.time_zone)}};var St=/\.|\(/;function ve(i,e,t=[e,e.rawDefinitions]){if(i.length===0)throw new u("Eval expression cannot be empty.");if(t.length===0)throw new u("Eval entrypoints cannot be empty.");let r=t,n=i;do{let o;n.startsWith("(")?[o,r]=Tt(n,r,i):[o,r]=Ct(n,r),n=n.substring(o),r=r.filter(s=>s!=null).map(s=>Array.isArray(s)?e.helpers.arrayElement(s):s);}while(n.length>0&&r.length>0);if(r.length===0)throw new u(`Cannot resolve expression '${i}'`);let a=r[0];return typeof a=="function"?a():a}function Tt(i,e,t){let[r,n]=Mt(i),a=i[r+1];switch(a){case".":case"(":case void 0:break;default:throw new u(`Expected dot ('.'), open parenthesis ('('), or nothing after function call but got '${a}'`)}return [r+(a==="."?2:1),e.map(o=>typeof o=="function"?o(...n):(console.warn(`[@faker-js/faker]: Invoking expressions which are not functions is deprecated since v9.0 and will be removed in v10.0.
Please remove the parentheses or replace the expression with an actual function.
${t}
${" ".repeat(t.length-i.length)}^`),o))]}function Mt(i){let e=i.indexOf(")",1);if(e===-1)throw new u(`Missing closing parenthesis in '${i}'`);for(;e!==-1;){let r=i.substring(1,e);try{return [e,JSON.parse(`[${r}]`)]}catch{if(!r.includes("'")&&!r.includes('"'))try{return [e,JSON.parse(`["${r}"]`)]}catch{}}e=i.indexOf(")",e+1);}e=i.lastIndexOf(")");let t=i.substring(1,e);return [e,[t]]}function Ct(i,e){let t=St.exec(i),r=(t?.[0]??"")===".",n=t?.index??i.length,a=i.substring(0,n);if(a.length===0)throw new u(`Expression parts cannot be empty in '${i}'`);let o=i[n+1];if(r&&(o==null||o==="."||o==="("))throw new u(`Found dot without property name in '${i}'`);return [n+(r?1:0),e.map(s=>Nt(s,a))]}function Nt(i,e){switch(typeof i){case"function":{try{i=i();}catch{return}return i?.[e]}case"object":return i?.[e];default:return}}function Be(i){let e=Dt(i.replace(/L?$/,"0"));return e===0?0:10-e}function Dt(i){i=i.replaceAll(/[\s-]/g,"");let e=0,t=!1;for(let r=i.length-1;r>=0;r--){let n=Number.parseInt(i[r]);t&&(n*=2,n>9&&(n=n%10+1)),e+=n,t=!t;}return e%10}function $e(i,e,t,r){let n=1;if(e)switch(e){case"?":{n=i.datatype.boolean()?0:1;break}case"*":{let a=1;for(;i.datatype.boolean();)a*=2;n=i.number.int({min:0,max:a});break}case"+":{let a=1;for(;i.datatype.boolean();)a*=2;n=i.number.int({min:1,max:a});break}default:throw new u("Unknown quantifier symbol provided.")}else t!=null&&r!=null?n=i.number.int({min:Number.parseInt(t),max:Number.parseInt(r)}):t!=null&&r==null&&(n=Number.parseInt(t));return n}function Rt(i,e=""){let t=/(.)\{(\d+),(\d+)\}/,r=/(.)\{(\d+)\}/,n=/\[(\d+)-(\d+)\]/,a,o,s,m,c=t.exec(e);for(;c!=null;)a=Number.parseInt(c[2]),o=Number.parseInt(c[3]),a>o&&(s=o,o=a,a=s),m=i.number.int({min:a,max:o}),e=e.slice(0,c.index)+c[1].repeat(m)+e.slice(c.index+c[0].length),c=t.exec(e);for(c=r.exec(e);c!=null;)m=Number.parseInt(c[2]),e=e.slice(0,c.index)+c[1].repeat(m)+e.slice(c.index+c[0].length),c=r.exec(e);for(c=n.exec(e);c!=null;)a=Number.parseInt(c[1]),o=Number.parseInt(c[2]),a>o&&(s=o,o=a,a=s),e=e.slice(0,c.index)+i.number.int({min:a,max:o}).toString()+e.slice(c.index+c[0].length),c=n.exec(e);return e}function ge(i,e="",t="#"){let r="";for(let n=0;n<e.length;n++)e.charAt(n)===t?r+=i.number.int(9):e.charAt(n)==="!"?r+=i.number.int({min:2,max:9}):r+=e.charAt(n);return r}var v=class extends x{slugify(e=""){return e.normalize("NFKD").replaceAll(/[\u0300-\u036F]/g,"").replaceAll(" ","-").replaceAll(/[^\w.-]+/g,"")}replaceSymbols(e=""){let t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],r="";for(let n=0;n<e.length;n++)e.charAt(n)==="#"?r+=this.faker.number.int(9):e.charAt(n)==="?"?r+=this.arrayElement(t):e.charAt(n)==="*"?r+=this.faker.datatype.boolean()?this.arrayElement(t):this.faker.number.int(9):r+=e.charAt(n);return r}replaceCreditCardSymbols(e="6453-####-####-####-###L",t="#"){e=Rt(this.faker,e),e=ge(this.faker,e,t);let r=Be(e);return e.replace("L",String(r))}fromRegExp(e){let t=!1;e instanceof RegExp&&(t=e.flags.includes("i"),e=e.toString(),e=/\/(.+?)\//.exec(e)?.[1]??"");let r,n,a,o=/([.A-Za-z0-9])(?:\{(\d+)(?:,(\d+)|)\}|(\?|\*|\+))(?![^[]*]|[^{]*})/,s=o.exec(e);for(;s!=null;){let f=s[2],d=s[3],b=s[4];a=$e(this.faker,b,f,d),e=e.slice(0,s.index)+s[1].repeat(a)+e.slice(s.index+s[0].length),s=o.exec(e);}let m=/(\d-\d|\w-\w|\d|\w|[-!@#$&()`.+,/"])/,c=/\[(\^|)(-|)(.+?)\](?:\{(\d+)(?:,(\d+)|)\}|(\?|\*|\+)|)/;for(s=c.exec(e);s!=null;){let f=s[1]==="^",d=s[2]==="-",b=s[4],k=s[5],M=s[6],y=[],$=s[3],T=m.exec($);for(d&&y.push(45);T!=null;){if(T[0].includes("-")){let A=T[0].split("-").map(g=>g.codePointAt(0)??Number.NaN);if(r=A[0],n=A[1],r>n)throw new u("Character range provided is out of order.");for(let g=r;g<=n;g++)if(t&&Number.isNaN(Number(String.fromCodePoint(g)))){let xe=String.fromCodePoint(g);y.push(xe.toUpperCase().codePointAt(0)??Number.NaN,xe.toLowerCase().codePointAt(0)??Number.NaN);}else y.push(g);}else t&&Number.isNaN(Number(T[0]))?y.push(T[0].toUpperCase().codePointAt(0)??Number.NaN,T[0].toLowerCase().codePointAt(0)??Number.NaN):y.push(T[0].codePointAt(0)??Number.NaN);$=$.substring(T[0].length),T=m.exec($);}if(a=$e(this.faker,M,b,k),f){let A=-1;for(let g=48;g<=57;g++){if(A=y.indexOf(g),A>-1){y.splice(A,1);continue}y.push(g);}for(let g=65;g<=90;g++){if(A=y.indexOf(g),A>-1){y.splice(A,1);continue}y.push(g);}for(let g=97;g<=122;g++){if(A=y.indexOf(g),A>-1){y.splice(A,1);continue}y.push(g);}}let st=this.multiple(()=>String.fromCodePoint(this.arrayElement(y)),{count:a}).join("");e=e.slice(0,s.index)+st+e.slice(s.index+s[0].length),s=c.exec(e);}let l=/(.)\{(\d+),(\d+)\}/;for(s=l.exec(e);s!=null;){if(r=Number.parseInt(s[2]),n=Number.parseInt(s[3]),r>n)throw new u("Numbers out of order in {} quantifier.");a=this.faker.number.int({min:r,max:n}),e=e.slice(0,s.index)+s[1].repeat(a)+e.slice(s.index+s[0].length),s=l.exec(e);}let h=/(.)\{(\d+)\}/;for(s=h.exec(e);s!=null;)a=Number.parseInt(s[2]),e=e.slice(0,s.index)+s[1].repeat(a)+e.slice(s.index+s[0].length),s=h.exec(e);return e}shuffle(e,t={}){let{inplace:r=!1}=t;r||(e=[...e]);for(let n=e.length-1;n>0;--n){let a=this.faker.number.int(n);[e[n],e[a]]=[e[a],e[n]];}return e}uniqueArray(e,t){if(Array.isArray(e)){let a=[...new Set(e)];return this.shuffle(a).splice(0,t)}let r=new Set;try{if(typeof e=="function"){let n=1e3*t,a=0;for(;r.size<t&&a<n;)r.add(e()),a++;}}catch{}return [...r]}mustache(e,t){if(e==null)return "";for(let r in t){let n=new RegExp(`{{${r}}}`,"g"),a=t[r];typeof a=="string"&&(a=a.replaceAll("$","$$$$")),e=e.replace(n,a);}return e}maybe(e,t={}){if(this.faker.datatype.boolean(t))return e()}objectKey(e){let t=Object.keys(e);return this.arrayElement(t)}objectValue(e){let t=this.faker.helpers.objectKey(e);return e[t]}objectEntry(e){let t=this.faker.helpers.objectKey(e);return [t,e[t]]}arrayElement(e){if(e.length===0)throw new u("Cannot get value from empty dataset.");let t=e.length>1?this.faker.number.int({max:e.length-1}):0;return e[t]}weightedArrayElement(e){if(e.length===0)throw new u("weightedArrayElement expects an array with at least one element");if(!e.every(a=>a.weight>0))throw new u("weightedArrayElement expects an array of { weight, value } objects where weight is a positive number");let t=e.reduce((a,{weight:o})=>a+o,0),r=this.faker.number.float({min:0,max:t}),n=0;for(let{weight:a,value:o}of e)if(n+=a,r<n)return o;return e.at(-1).value}arrayElements(e,t){if(e.length===0)return [];let r=this.rangeToNumber(t??{min:1,max:e.length});if(r>=e.length)return this.shuffle(e);if(r<=0)return [];let n=[...e],a=e.length,o=a-r,s,m;for(;a-- >o;)m=this.faker.number.int(a),s=n[m],n[m]=n[a],n[a]=s;return n.slice(o)}enumValue(e){let t=Object.keys(e).filter(n=>Number.isNaN(Number(n))),r=this.arrayElement(t);return e[r]}rangeToNumber(e){return typeof e=="number"?e:this.faker.number.int(e)}multiple(e,t={}){let r=this.rangeToNumber(t.count??3);return r<=0?[]:Array.from({length:r},e)}},j=class extends v{constructor(t){super(t);this.faker=t;}fake(t){t=typeof t=="string"?t:this.arrayElement(t);let r=t.search(/{{[a-z]/),n=t.indexOf("}}",r);if(r===-1||n===-1)return t;let o=t.substring(r+2,n+2).replace("}}","").replace("{{",""),s=ve(o,this.faker),m=String(s),c=t.substring(0,r)+m+t.substring(n+2);return this.fake(c)}};var H=class extends x{int(e={}){typeof e=="number"&&(e={max:e});let{min:t=0,max:r=Number.MAX_SAFE_INTEGER,multipleOf:n=1}=e;if(!Number.isInteger(n))throw new u("multipleOf should be an integer.");if(n<=0)throw new u("multipleOf should be greater than 0.");let a=Math.ceil(t/n),o=Math.floor(r/n);if(a===o)return a*n;if(o<a)throw r>=t?new u(`No suitable integer value between ${t} and ${r} found.`):new u(`Max ${r} should be greater than min ${t}.`);let m=this.faker._randomizer.next(),c=o-a+1;return Math.floor(m*c+a)*n}float(e={}){typeof e=="number"&&(e={max:e});let{min:t=0,max:r=1,fractionDigits:n,multipleOf:a,multipleOf:o=n==null?void 0:10**-n}=e;if(r===t)return t;if(r<t)throw new u(`Max ${r} should be greater than min ${t}.`);if(n!=null){if(a!=null)throw new u("multipleOf and fractionDigits cannot be set at the same time.");if(!Number.isInteger(n))throw new u("fractionDigits should be an integer.");if(n<0)throw new u("fractionDigits should be greater than or equal to 0.")}if(o!=null){if(o<=0)throw new u("multipleOf should be greater than 0.");let c=Math.log10(o),l=o<1&&Number.isInteger(c)?10**-c:1/o;return this.int({min:t*l,max:r*l})/l}return this.faker._randomizer.next()*(r-t)+t}binary(e={}){typeof e=="number"&&(e={max:e});let{min:t=0,max:r=1}=e;return this.int({max:r,min:t}).toString(2)}octal(e={}){typeof e=="number"&&(e={max:e});let{min:t=0,max:r=7}=e;return this.int({max:r,min:t}).toString(8)}hex(e={}){typeof e=="number"&&(e={max:e});let{min:t=0,max:r=15}=e;return this.int({max:r,min:t}).toString(16)}bigInt(e={}){(typeof e=="bigint"||typeof e=="number"||typeof e=="string"||typeof e=="boolean")&&(e={max:e});let t=BigInt(e.min??0),r=BigInt(e.max??t+BigInt(999999999999999));if(r===t)return t;if(r<t)throw new u(`Max ${r} should be larger then min ${t}.`);let n=r-t,a=BigInt(this.faker.string.numeric({length:n.toString(10).length,allowLeadingZeros:!0}))%(n+BigInt(1));return t+a}romanNumeral(e={}){typeof e=="number"&&(e={max:e});let{min:n=1,max:a=3999}=e;if(n<1)throw new u(`Min value ${n} should be 1 or greater.`);if(a>3999)throw new u(`Max value ${a} should be 3999 or less.`);let o=this.int({min:n,max:a}),s=[["M",1e3],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]],m="";for(let[c,l]of s)m+=c.repeat(Math.floor(o/l)),o%=l;return m}};var ye="0123456789ABCDEFGHJKMNPQRSTVWXYZ";function Pe(i){let e=i.valueOf(),t="";for(let r=10;r>0;r--){let n=e%32;t=ye[n]+t,e=(e-n)/32;}return t}var V=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],z=[..."abcdefghijklmnopqrstuvwxyz"],Ie=[..."0123456789"],Y=class extends x{fromCharacters(e,t=1){if(t=this.faker.helpers.rangeToNumber(t),t<=0)return "";if(typeof e=="string"&&(e=[...e]),e.length===0)throw new u("Unable to generate string: No characters to select from.");return this.faker.helpers.multiple(()=>this.faker.helpers.arrayElement(e),{count:t}).join("")}alpha(e={}){typeof e=="number"&&(e={length:e});let t=this.faker.helpers.rangeToNumber(e.length??1);if(t<=0)return "";let{casing:r="mixed"}=e,{exclude:n=[]}=e;typeof n=="string"&&(n=[...n]);let a;switch(r){case"upper":{a=[...V];break}case"lower":{a=[...z];break}case"mixed":{a=[...z,...V];break}}return a=a.filter(o=>!n.includes(o)),this.fromCharacters(a,t)}alphanumeric(e={}){typeof e=="number"&&(e={length:e});let t=this.faker.helpers.rangeToNumber(e.length??1);if(t<=0)return "";let{casing:r="mixed"}=e,{exclude:n=[]}=e;typeof n=="string"&&(n=[...n]);let a=[...Ie];switch(r){case"upper":{a.push(...V);break}case"lower":{a.push(...z);break}case"mixed":{a.push(...z,...V);break}}return a=a.filter(o=>!n.includes(o)),this.fromCharacters(a,t)}binary(e={}){let{prefix:t="0b"}=e,r=t;return r+=this.fromCharacters(["0","1"],e.length??1),r}octal(e={}){let{prefix:t="0o"}=e,r=t;return r+=this.fromCharacters(["0","1","2","3","4","5","6","7"],e.length??1),r}hexadecimal(e={}){let{casing:t="mixed",prefix:r="0x"}=e,n=this.faker.helpers.rangeToNumber(e.length??1);if(n<=0)return r;let a=this.fromCharacters(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","A","B","C","D","E","F"],n);return t==="upper"?a=a.toUpperCase():t==="lower"&&(a=a.toLowerCase()),`${r}${a}`}numeric(e={}){typeof e=="number"&&(e={length:e});let t=this.faker.helpers.rangeToNumber(e.length??1);if(t<=0)return "";let{allowLeadingZeros:r=!0}=e,{exclude:n=[]}=e;typeof n=="string"&&(n=[...n]);let a=Ie.filter(s=>!n.includes(s));if(a.length===0||a.length===1&&!r&&a[0]==="0")throw new u("Unable to generate numeric string, because all possible digits are excluded.");let o="";return !r&&!n.includes("0")&&(o+=this.faker.helpers.arrayElement(a.filter(s=>s!=="0"))),o+=this.fromCharacters(a,t-o.length),o}sample(e=10){e=this.faker.helpers.rangeToNumber(e);let t={min:33,max:125},r="";for(;r.length<e;)r+=String.fromCodePoint(this.faker.number.int(t));return r}uuid(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replaceAll("x",()=>this.faker.number.hex({min:0,max:15})).replaceAll("y",()=>this.faker.number.hex({min:8,max:11}))}ulid(e={}){let{refDate:t=this.faker.defaultRefDate()}=e,r=E(t);return Pe(r)+this.fromCharacters(ye,16)}nanoid(e=21){if(e=this.faker.helpers.rangeToNumber(e),e<=0)return "";let t=[{value:()=>this.alphanumeric(1),weight:62},{value:()=>this.faker.helpers.arrayElement(["_","-"]),weight:2}],r="";for(;r.length<e;){let n=this.faker.helpers.weightedArrayElement(t);r+=n();}return r}symbol(e=1){return this.fromCharacters(["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"],e)}};var B=class{_defaultRefDate=()=>new Date;get defaultRefDate(){return this._defaultRefDate}setDefaultRefDate(e=()=>new Date){typeof e=="function"?this._defaultRefDate=e:this._defaultRefDate=()=>new Date(e);}_randomizer;datatype=new G(this);date=new L(this);helpers=new v(this);number=new H(this);string=new Y(this);constructor(e={}){let{randomizer:t=Re()}=e;this._randomizer=t;}seed(e=Math.ceil(Math.random()*Number.MAX_SAFE_INTEGER)){return this._randomizer.seed(e),e}};new B;function _e(i){let e={};for(let t of i)for(let r in t){let n=t[r];e[r]===void 0?e[r]={...n}:e[r]={...n,...e[r]};}return e}var W=class extends p{dog(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.dog)}cat(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.cat)}snake(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.snake)}bear(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.bear)}lion(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.lion)}cetacean(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.cetacean)}horse(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.horse)}bird(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.bird)}cow(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.cow)}fish(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.fish)}crocodilia(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.crocodilia)}insect(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.insect)}rabbit(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.rabbit)}rodent(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.rodent)}type(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.type)}petName(){return this.faker.helpers.arrayElement(this.faker.definitions.animal.pet_name)}};var Z=class extends p{author(){return this.faker.helpers.arrayElement(this.faker.definitions.book.author)}format(){return this.faker.helpers.arrayElement(this.faker.definitions.book.format)}genre(){return this.faker.helpers.arrayElement(this.faker.definitions.book.genre)}publisher(){return this.faker.helpers.arrayElement(this.faker.definitions.book.publisher)}series(){return this.faker.helpers.arrayElement(this.faker.definitions.book.series)}title(){return this.faker.helpers.arrayElement(this.faker.definitions.book.title)}};var Lt={0:[[1999999,2],[2279999,3],[2289999,4],[3689999,3],[3699999,4],[6389999,3],[6397999,4],[6399999,7],[6449999,3],[6459999,7],[6479999,3],[6489999,7],[6549999,3],[6559999,4],[6999999,3],[8499999,4],[8999999,5],[9499999,6],[9999999,7]],1:[[99999,3],[299999,2],[349999,3],[399999,4],[499999,3],[699999,2],[999999,4],[3979999,3],[5499999,4],[6499999,5],[6799999,4],[6859999,5],[7139999,4],[7169999,3],[7319999,4],[7399999,7],[7749999,5],[7753999,7],[7763999,5],[7764999,7],[7769999,5],[7782999,7],[7899999,5],[7999999,4],[8004999,5],[8049999,5],[8379999,5],[8384999,7],[8671999,5],[8675999,4],[8697999,5],[9159999,6],[9165059,7],[9168699,6],[9169079,7],[9195999,6],[9196549,7],[9729999,6],[9877999,4],[9911499,6],[9911999,7],[9989899,6],[9999999,7]]},J=class extends p{department(){return this.faker.helpers.arrayElement(this.faker.definitions.commerce.department)}productName(){return `${this.productAdjective()} ${this.productMaterial()} ${this.product()}`}price(e={}){let{dec:t=2,max:r=1e3,min:n=1,symbol:a=""}=e;if(n<0||r<0)return `${a}0`;if(n===r)return `${a}${n.toFixed(t)}`;let o=this.faker.number.float({min:n,max:r,fractionDigits:t});if(t===0)return `${a}${o.toFixed(t)}`;let s=o*10**t%10,m=this.faker.helpers.weightedArrayElement([{weight:5,value:9},{weight:3,value:5},{weight:1,value:0},{weight:1,value:this.faker.number.int({min:0,max:9})}]),c=(1/10)**t,l=s*c,h=m*c,f=o-l+h;return n<=f&&f<=r?`${a}${f.toFixed(t)}`:`${a}${o.toFixed(t)}`}productAdjective(){return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.adjective)}productMaterial(){return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.material)}product(){return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.product)}productDescription(){return this.faker.helpers.fake(this.faker.definitions.commerce.product_description)}isbn(e={}){typeof e=="number"&&(e={variant:e});let{variant:t=13,separator:r="-"}=e,n="978",[a,o]=this.faker.helpers.objectEntry(Lt),s=this.faker.string.numeric(8),m=Number.parseInt(s.slice(0,-1)),c=o.find(([k])=>m<=k)?.[1];if(!c)throw new u(`Unable to find a registrant length for the group ${a}`);let l=s.slice(0,c),h=s.slice(c),f=[n,a,l,h];t===10&&f.shift();let d=f.join(""),b=0;for(let k=0;k<t-1;k++){let M=t===10?k+1:k%2?3:1;b+=M*Number.parseInt(d[k]);}return b=t===10?b%11:(10-b%10)%10,f.push(b===10?"X":b.toString()),f.join(r)}};var X=class extends p{name(){return this.faker.helpers.fake(this.faker.definitions.company.name_pattern)}catchPhrase(){return [this.catchPhraseAdjective(),this.catchPhraseDescriptor(),this.catchPhraseNoun()].join(" ")}buzzPhrase(){return [this.buzzVerb(),this.buzzAdjective(),this.buzzNoun()].join(" ")}catchPhraseAdjective(){return this.faker.helpers.arrayElement(this.faker.definitions.company.adjective)}catchPhraseDescriptor(){return this.faker.helpers.arrayElement(this.faker.definitions.company.descriptor)}catchPhraseNoun(){return this.faker.helpers.arrayElement(this.faker.definitions.company.noun)}buzzAdjective(){return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_adjective)}buzzVerb(){return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_verb)}buzzNoun(){return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_noun)}};var Q=class extends p{column(){return this.faker.helpers.arrayElement(this.faker.definitions.database.column)}type(){return this.faker.helpers.arrayElement(this.faker.definitions.database.type)}collation(){return this.faker.helpers.arrayElement(this.faker.definitions.database.collation)}engine(){return this.faker.helpers.arrayElement(this.faker.definitions.database.engine)}mongodbObjectId(){return this.faker.string.hexadecimal({length:24,casing:"lower",prefix:""})}};var vt={alpha:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],formats:[{country:"AL",total:28,bban:[{type:"n",count:8},{type:"c",count:16}],format:"ALkk bbbs sssx cccc cccc cccc cccc"},{country:"AD",total:24,bban:[{type:"n",count:8},{type:"c",count:12}],format:"ADkk bbbb ssss cccc cccc cccc"},{country:"AT",total:20,bban:[{type:"n",count:5},{type:"n",count:11}],format:"ATkk bbbb bccc cccc cccc"},{country:"AZ",total:28,bban:[{type:"a",count:4},{type:"n",count:20}],format:"AZkk bbbb cccc cccc cccc cccc cccc"},{country:"BH",total:22,bban:[{type:"a",count:4},{type:"c",count:14}],format:"BHkk bbbb cccc cccc cccc cc"},{country:"BE",total:16,bban:[{type:"n",count:3},{type:"n",count:9}],format:"BEkk bbbc cccc ccxx"},{country:"BA",total:20,bban:[{type:"n",count:6},{type:"n",count:10}],format:"BAkk bbbs sscc cccc ccxx"},{country:"BR",total:29,bban:[{type:"n",count:13},{type:"n",count:10},{type:"a",count:1},{type:"c",count:1}],format:"BRkk bbbb bbbb ssss sccc cccc ccct n"},{country:"BG",total:22,bban:[{type:"a",count:4},{type:"n",count:6},{type:"c",count:8}],format:"BGkk bbbb ssss ddcc cccc cc"},{country:"CR",total:22,bban:[{type:"n",count:1},{type:"n",count:3},{type:"n",count:14}],format:"CRkk xbbb cccc cccc cccc cc"},{country:"HR",total:21,bban:[{type:"n",count:7},{type:"n",count:10}],format:"HRkk bbbb bbbc cccc cccc c"},{country:"CY",total:28,bban:[{type:"n",count:8},{type:"c",count:16}],format:"CYkk bbbs ssss cccc cccc cccc cccc"},{country:"CZ",total:24,bban:[{type:"n",count:10},{type:"n",count:10}],format:"CZkk bbbb ssss sscc cccc cccc"},{country:"DK",total:18,bban:[{type:"n",count:4},{type:"n",count:10}],format:"DKkk bbbb cccc cccc cc"},{country:"DO",total:28,bban:[{type:"a",count:4},{type:"n",count:20}],format:"DOkk bbbb cccc cccc cccc cccc cccc"},{country:"TL",total:23,bban:[{type:"n",count:3},{type:"n",count:16}],format:"TLkk bbbc cccc cccc cccc cxx"},{country:"EE",total:20,bban:[{type:"n",count:4},{type:"n",count:12}],format:"EEkk bbss cccc cccc cccx"},{country:"FO",total:18,bban:[{type:"n",count:4},{type:"n",count:10}],format:"FOkk bbbb cccc cccc cx"},{country:"FI",total:18,bban:[{type:"n",count:6},{type:"n",count:8}],format:"FIkk bbbb bbcc cccc cx"},{country:"FR",total:27,bban:[{type:"n",count:10},{type:"c",count:11},{type:"n",count:2}],format:"FRkk bbbb bggg ggcc cccc cccc cxx"},{country:"GE",total:22,bban:[{type:"a",count:2},{type:"n",count:16}],format:"GEkk bbcc cccc cccc cccc cc"},{country:"DE",total:22,bban:[{type:"n",count:8},{type:"n",count:10}],format:"DEkk bbbb bbbb cccc cccc cc"},{country:"GI",total:23,bban:[{type:"a",count:4},{type:"c",count:15}],format:"GIkk bbbb cccc cccc cccc ccc"},{country:"GR",total:27,bban:[{type:"n",count:7},{type:"c",count:16}],format:"GRkk bbbs sssc cccc cccc cccc ccc"},{country:"GL",total:18,bban:[{type:"n",count:4},{type:"n",count:10}],format:"GLkk bbbb cccc cccc cc"},{country:"GT",total:28,bban:[{type:"c",count:4},{type:"c",count:4},{type:"c",count:16}],format:"GTkk bbbb mmtt cccc cccc cccc cccc"},{country:"HU",total:28,bban:[{type:"n",count:8},{type:"n",count:16}],format:"HUkk bbbs sssk cccc cccc cccc cccx"},{country:"IS",total:26,bban:[{type:"n",count:6},{type:"n",count:16}],format:"ISkk bbbb sscc cccc iiii iiii ii"},{country:"IE",total:22,bban:[{type:"c",count:4},{type:"n",count:6},{type:"n",count:8}],format:"IEkk aaaa bbbb bbcc cccc cc"},{country:"IL",total:23,bban:[{type:"n",count:6},{type:"n",count:13}],format:"ILkk bbbn nncc cccc cccc ccc"},{country:"IT",total:27,bban:[{type:"a",count:1},{type:"n",count:10},{type:"c",count:12}],format:"ITkk xaaa aabb bbbc cccc cccc ccc"},{country:"JO",total:30,bban:[{type:"a",count:4},{type:"n",count:4},{type:"n",count:18}],format:"JOkk bbbb nnnn cccc cccc cccc cccc cc"},{country:"KZ",total:20,bban:[{type:"n",count:3},{type:"c",count:13}],format:"KZkk bbbc cccc cccc cccc"},{country:"XK",total:20,bban:[{type:"n",count:4},{type:"n",count:12}],format:"XKkk bbbb cccc cccc cccc"},{country:"KW",total:30,bban:[{type:"a",count:4},{type:"c",count:22}],format:"KWkk bbbb cccc cccc cccc cccc cccc cc"},{country:"LV",total:21,bban:[{type:"a",count:4},{type:"c",count:13}],format:"LVkk bbbb cccc cccc cccc c"},{country:"LB",total:28,bban:[{type:"n",count:4},{type:"c",count:20}],format:"LBkk bbbb cccc cccc cccc cccc cccc"},{country:"LI",total:21,bban:[{type:"n",count:5},{type:"c",count:12}],format:"LIkk bbbb bccc cccc cccc c"},{country:"LT",total:20,bban:[{type:"n",count:5},{type:"n",count:11}],format:"LTkk bbbb bccc cccc cccc"},{country:"LU",total:20,bban:[{type:"n",count:3},{type:"c",count:13}],format:"LUkk bbbc cccc cccc cccc"},{country:"MK",total:19,bban:[{type:"n",count:3},{type:"c",count:10},{type:"n",count:2}],format:"MKkk bbbc cccc cccc cxx"},{country:"MT",total:31,bban:[{type:"a",count:4},{type:"n",count:5},{type:"c",count:18}],format:"MTkk bbbb ssss sccc cccc cccc cccc ccc"},{country:"MR",total:27,bban:[{type:"n",count:10},{type:"n",count:13}],format:"MRkk bbbb bsss sscc cccc cccc cxx"},{country:"MU",total:30,bban:[{type:"a",count:4},{type:"n",count:4},{type:"n",count:15},{type:"a",count:3}],format:"MUkk bbbb bbss cccc cccc cccc 000d dd"},{country:"MC",total:27,bban:[{type:"n",count:10},{type:"c",count:11},{type:"n",count:2}],format:"MCkk bbbb bsss sscc cccc cccc cxx"},{country:"MD",total:24,bban:[{type:"c",count:2},{type:"c",count:18}],format:"MDkk bbcc cccc cccc cccc cccc"},{country:"ME",total:22,bban:[{type:"n",count:3},{type:"n",count:15}],format:"MEkk bbbc cccc cccc cccc xx"},{country:"NL",total:18,bban:[{type:"a",count:4},{type:"n",count:10}],format:"NLkk bbbb cccc cccc cc"},{country:"NO",total:15,bban:[{type:"n",count:4},{type:"n",count:7}],format:"NOkk bbbb cccc ccx"},{country:"PK",total:24,bban:[{type:"a",count:4},{type:"n",count:16}],format:"PKkk bbbb cccc cccc cccc cccc"},{country:"PS",total:29,bban:[{type:"c",count:4},{type:"n",count:9},{type:"n",count:12}],format:"PSkk bbbb xxxx xxxx xccc cccc cccc c"},{country:"PL",total:28,bban:[{type:"n",count:8},{type:"n",count:16}],format:"PLkk bbbs sssx cccc cccc cccc cccc"},{country:"PT",total:25,bban:[{type:"n",count:8},{type:"n",count:13}],format:"PTkk bbbb ssss cccc cccc cccx x"},{country:"QA",total:29,bban:[{type:"a",count:4},{type:"c",count:21}],format:"QAkk bbbb cccc cccc cccc cccc cccc c"},{country:"RO",total:24,bban:[{type:"a",count:4},{type:"c",count:16}],format:"ROkk bbbb cccc cccc cccc cccc"},{country:"SM",total:27,bban:[{type:"a",count:1},{type:"n",count:10},{type:"c",count:12}],format:"SMkk xaaa aabb bbbc cccc cccc ccc"},{country:"SA",total:24,bban:[{type:"n",count:2},{type:"c",count:18}],format:"SAkk bbcc cccc cccc cccc cccc"},{country:"RS",total:22,bban:[{type:"n",count:3},{type:"n",count:15}],format:"RSkk bbbc cccc cccc cccc xx"},{country:"SK",total:24,bban:[{type:"n",count:10},{type:"n",count:10}],format:"SKkk bbbb ssss sscc cccc cccc"},{country:"SI",total:19,bban:[{type:"n",count:5},{type:"n",count:10}],format:"SIkk bbss sccc cccc cxx"},{country:"ES",total:24,bban:[{type:"n",count:10},{type:"n",count:10}],format:"ESkk bbbb gggg xxcc cccc cccc"},{country:"SE",total:24,bban:[{type:"n",count:3},{type:"n",count:17}],format:"SEkk bbbc cccc cccc cccc cccc"},{country:"CH",total:21,bban:[{type:"n",count:5},{type:"c",count:12}],format:"CHkk bbbb bccc cccc cccc c"},{country:"TN",total:24,bban:[{type:"n",count:5},{type:"n",count:15}],format:"TNkk bbss sccc cccc cccc cccc"},{country:"TR",total:26,bban:[{type:"n",count:5},{type:"n",count:1},{type:"n",count:16}],format:"TRkk bbbb bxcc cccc cccc cccc cc"},{country:"AE",total:23,bban:[{type:"n",count:3},{type:"n",count:16}],format:"AEkk bbbc cccc cccc cccc ccc"},{country:"GB",total:22,bban:[{type:"a",count:4},{type:"n",count:6},{type:"n",count:8}],format:"GBkk bbbb ssss sscc cccc cc"},{country:"VG",total:24,bban:[{type:"a",count:4},{type:"n",count:16}],format:"VGkk bbbb cccc cccc cccc cccc"}],iso3166:["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW"],mod97:i=>{let e=0;for(let t of i)e=(e*10+ +t)%97;return e},pattern10:["01","02","03","04","05","06","07","08","09"],pattern100:["001","002","003","004","005","006","007","008","009"],toDigitString:i=>i.replaceAll(/[A-Z]/gi,e=>String((e.toUpperCase().codePointAt(0)??Number.NaN)-55))},w=vt;function Bt(i){let e="";for(let t=0;t<i.length;t+=4)e+=`${i.substring(t,t+4)} `;return e.trimEnd()}var q=class extends p{accountNumber(e={}){typeof e=="number"&&(e={length:e});let{length:t=8}=e;return this.faker.string.numeric({length:t,allowLeadingZeros:!0})}accountName(){return [this.faker.helpers.arrayElement(this.faker.definitions.finance.account_type),"Account"].join(" ")}routingNumber(){let e=this.faker.string.numeric({length:8,allowLeadingZeros:!0}),t=0;for(let r=0;r<e.length;r+=3)t+=Number(e[r])*3,t+=Number(e[r+1])*7,t+=Number(e[r+2])||0;return `${e}${Math.ceil(t/10)*10-t}`}maskedNumber(e={}){typeof e=="number"&&(e={length:e});let{ellipsis:t=!0,length:r=4,parens:n=!0}=e,a=this.faker.string.numeric({length:r});return t&&(a=`...${a}`),n&&(a=`(${a})`),a}amount(e={}){let{autoFormat:t=!1,dec:r=2,max:n=1e3,min:a=0,symbol:o=""}=e,s=this.faker.number.float({max:n,min:a,fractionDigits:r}),m=t?s.toLocaleString(void 0,{minimumFractionDigits:r}):s.toFixed(r);return o+m}transactionType(){return this.faker.helpers.arrayElement(this.faker.definitions.finance.transaction_type)}currency(){return this.faker.helpers.arrayElement(this.faker.definitions.finance.currency)}currencyCode(){return this.currency().code}currencyName(){return this.currency().name}currencySymbol(){let e;do e=this.currency().symbol;while(e.length===0);return e}bitcoinAddress(e={}){let{type:t=this.faker.helpers.enumValue(pe),network:r="mainnet"}=e,n=Ce[t],a=n.prefix[r],o=this.faker.number.int(n.length),s=this.faker.string.alphanumeric({length:o-a.length,casing:n.casing,exclude:n.exclude});return a+s}litecoinAddress(){let e=this.faker.number.int({min:26,max:33});return this.faker.string.fromCharacters("LM3")+this.faker.string.fromCharacters("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",e-1)}creditCardNumber(e={}){typeof e=="string"&&(e={issuer:e});let{issuer:t=""}=e,r,n=this.faker.definitions.finance.credit_card,a=t.toLowerCase();if(a in n)r=this.faker.helpers.arrayElement(n[a]);else if(t.includes("#"))r=t;else {let o=this.faker.helpers.objectValue(n);r=this.faker.helpers.arrayElement(o);}return r=r.replaceAll("/",""),this.faker.helpers.replaceCreditCardSymbols(r)}creditCardCVV(){return this.faker.string.numeric({length:3,allowLeadingZeros:!0})}creditCardIssuer(){return this.faker.helpers.objectKey(this.faker.definitions.finance.credit_card)}pin(e={}){typeof e=="number"&&(e={length:e});let{length:t=4}=e;if(t<1)throw new u("minimum length is 1");return this.faker.string.numeric({length:t,allowLeadingZeros:!0})}ethereumAddress(){return this.faker.string.hexadecimal({length:40,casing:"lower"})}iban(e={}){let{countryCode:t,formatted:r=!1}=e,n=t?w.formats.find(c=>c.country===t):this.faker.helpers.arrayElement(w.formats);if(!n)throw new u(`Country code ${t} not supported.`);let a="",o=0;for(let c of n.bban){let l=c.count;for(o+=c.count;l>0;)c.type==="a"?a+=this.faker.helpers.arrayElement(w.alpha):c.type==="c"?this.faker.datatype.boolean(.8)?a+=this.faker.number.int(9):a+=this.faker.helpers.arrayElement(w.alpha):l>=3&&this.faker.datatype.boolean(.3)?this.faker.datatype.boolean()?(a+=this.faker.helpers.arrayElement(w.pattern100),l-=2):(a+=this.faker.helpers.arrayElement(w.pattern10),l--):a+=this.faker.number.int(9),l--;a=a.substring(0,o);}let s=98-w.mod97(w.toDigitString(`${a}${n.country}00`));s<10&&(s=`0${s}`);let m=`${n.country}${s}${a}`;return r?Bt(m):m}bic(e={}){let{includeBranchCode:t=this.faker.datatype.boolean()}=e,r=this.faker.string.alpha({length:4,casing:"upper"}),n=this.faker.helpers.arrayElement(w.iso3166),a=this.faker.string.alphanumeric({length:2,casing:"upper"}),o=t?this.faker.datatype.boolean()?this.faker.string.alphanumeric({length:3,casing:"upper"}):"XXX":"";return `${r}${n}${a}${o}`}transactionDescription(){let e=this.amount(),t=this.faker.company.name(),r=this.transactionType(),n=this.accountNumber(),a=this.maskedNumber(),o=this.currencyCode();return `${r} transaction at ${t} using card ending with ***${a} for ${o} ${e} in account ***${n}`}};var ee=class extends p{adjective(){return this.faker.helpers.arrayElement(this.faker.definitions.food.adjective)}description(){return this.faker.helpers.fake(this.faker.definitions.food.description_pattern)}dish(){let e=t=>t.split(" ").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" ");return this.faker.datatype.boolean()?e(this.faker.helpers.fake(this.faker.definitions.food.dish_pattern)):e(this.faker.helpers.arrayElement(this.faker.definitions.food.dish))}ethnicCategory(){return this.faker.helpers.arrayElement(this.faker.definitions.food.ethnic_category)}fruit(){return this.faker.helpers.arrayElement(this.faker.definitions.food.fruit)}ingredient(){return this.faker.helpers.arrayElement(this.faker.definitions.food.ingredient)}meat(){return this.faker.helpers.arrayElement(this.faker.definitions.food.meat)}spice(){return this.faker.helpers.arrayElement(this.faker.definitions.food.spice)}vegetable(){return this.faker.helpers.arrayElement(this.faker.definitions.food.vegetable)}};var $t="\xA0",te=class extends p{branch(){let e=this.faker.hacker.noun().replace(" ","-"),t=this.faker.hacker.verb().replace(" ","-");return `${e}-${t}`}commitEntry(e={}){let{merge:t=this.faker.datatype.boolean({probability:.2}),eol:r="CRLF",refDate:n}=e,a=[`commit ${this.faker.git.commitSha()}`];t&&a.push(`Merge: ${this.commitSha({length:7})} ${this.commitSha({length:7})}`);let o=this.faker.person.firstName(),s=this.faker.person.lastName(),m=this.faker.person.fullName({firstName:o,lastName:s}),c=this.faker.internet.username({firstName:o,lastName:s}),l=this.faker.helpers.arrayElement([m,c]),h=this.faker.internet.email({firstName:o,lastName:s});l=l.replaceAll(/^[.,:;"\\']|[<>\n]|[.,:;"\\']$/g,""),a.push(`Author: ${l} <${h}>`,`Date: ${this.commitDate({refDate:n})}`,"",`${$t.repeat(4)}${this.commitMessage()}`,"");let f=r==="CRLF"?`\r
`:`
`;return a.join(f)}commitMessage(){return `${this.faker.hacker.verb()} ${this.faker.hacker.adjective()} ${this.faker.hacker.noun()}`}commitDate(e={}){let{refDate:t=this.faker.defaultRefDate()}=e,r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=this.faker.date.recent({days:1,refDate:t}),o=r[a.getUTCDay()],s=n[a.getUTCMonth()],m=a.getUTCDate(),c=a.getUTCHours().toString().padStart(2,"0"),l=a.getUTCMinutes().toString().padStart(2,"0"),h=a.getUTCSeconds().toString().padStart(2,"0"),f=a.getUTCFullYear(),d=this.faker.number.int({min:-11,max:12}),b=Math.abs(d).toString().padStart(2,"0"),k="00",M=d>=0?"+":"-";return `${o} ${s} ${m} ${c}:${l}:${h} ${f} ${M}${b}${k}`}commitSha(e={}){let{length:t=40}=e;return this.faker.string.hexadecimal({length:t,casing:"lower",prefix:""})}};var re=class extends p{abbreviation(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.abbreviation)}adjective(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.adjective)}noun(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.noun)}verb(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.verb)}ingverb(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.ingverb)}phrase(){let e={abbreviation:this.abbreviation,adjective:this.adjective,ingverb:this.ingverb,noun:this.noun,verb:this.verb},t=this.faker.helpers.arrayElement(this.faker.definitions.hacker.phrase);return this.faker.helpers.mustache(t,e)}};var ne=class extends p{avatar(){return this.avatarGitHub()}avatarGitHub(){return `https://avatars.githubusercontent.com/u/${this.faker.number.int(1e8)}`}avatarLegacy(){return N({deprecated:"faker.image.avatarLegacy()",proposed:"faker.image.avatar()",since:"9.0.2",until:"10.0.0"}),`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${this.faker.number.int(1249)}.jpg`}url(e={}){let{width:t=this.faker.number.int({min:1,max:3999}),height:r=this.faker.number.int({min:1,max:3999})}=e;return this.faker.helpers.arrayElement([this.urlLoremFlickr,({width:a,height:o})=>this.urlPicsumPhotos({width:a,height:o,grayscale:!1,blur:0})])({width:t,height:r})}urlLoremFlickr(e={}){let{width:t=this.faker.number.int({min:1,max:3999}),height:r=this.faker.number.int({min:1,max:3999}),category:n}=e;return `https://loremflickr.com/${t}/${r}${n==null?"":`/${n}`}?lock=${this.faker.number.int()}`}urlPicsumPhotos(e={}){let{width:t=this.faker.number.int({min:1,max:3999}),height:r=this.faker.number.int({min:1,max:3999}),grayscale:n=this.faker.datatype.boolean(),blur:a=this.faker.number.int({max:10})}=e,o=`https://picsum.photos/seed/${this.faker.string.alphanumeric({length:{min:5,max:10}})}/${t}/${r}`,s=typeof a=="number"&&a>=1&&a<=10;return (n||s)&&(o+="?",n&&(o+="grayscale"),n&&s&&(o+="&"),s&&(o+=`blur=${a}`)),o}urlPlaceholder(e={}){let{width:t=this.faker.number.int({min:1,max:3999}),height:r=this.faker.number.int({min:1,max:3999}),backgroundColor:n=this.faker.color.rgb({format:"hex",prefix:""}),textColor:a=this.faker.color.rgb({format:"hex",prefix:""}),format:o=this.faker.helpers.arrayElement(["gif","jpeg","jpg","png","webp"]),text:s=this.faker.lorem.words()}=e,m="https://via.placeholder.com";return m+=`/${t}`,m+=`x${r}`,m+=`/${n}`,m+=`/${a}`,m+=`.${o}`,m+=`?text=${encodeURIComponent(s)}`,m}dataUri(e={}){let{width:t=this.faker.number.int({min:1,max:3999}),height:r=this.faker.number.int({min:1,max:3999}),color:n=this.faker.color.rgb(),type:a=this.faker.helpers.arrayElements(["svg-uri","svg-base64"])}=e,o=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="${t}" height="${r}"><rect width="100%" height="100%" fill="${n}"/><text x="${t/2}" y="${r/2}" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">${t}x${r}</text></svg>`;return a==="svg-uri"?`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(o)}`:`data:image/svg+xml;base64,${fe(o)}`}};var ae=class extends p{zipCode(e={}){typeof e=="string"&&(e={format:e});let{state:t}=e;if(t!=null){let n=this.faker.definitions.location.postcode_by_state[t];if(n==null)throw new u(`No zip code definition found for state "${t}"`);return this.faker.helpers.fake(n)}let{format:r=this.faker.definitions.location.postcode}=e;return typeof r=="string"&&(r=[r]),r=this.faker.helpers.arrayElement(r),this.faker.helpers.replaceSymbols(r)}city(){return this.faker.helpers.fake(this.faker.definitions.location.city_pattern)}buildingNumber(){return this.faker.helpers.arrayElement(this.faker.definitions.location.building_number).replaceAll(/#+/g,e=>this.faker.string.numeric({length:e.length,allowLeadingZeros:!1}))}street(){return this.faker.helpers.fake(this.faker.definitions.location.street_pattern)}streetAddress(e={}){typeof e=="boolean"&&(e={useFullAddress:e});let{useFullAddress:t}=e,n=this.faker.definitions.location.street_address[t?"full":"normal"];return this.faker.helpers.fake(n)}secondaryAddress(){return this.faker.helpers.fake(this.faker.definitions.location.secondary_address).replaceAll(/#+/g,e=>this.faker.string.numeric({length:e.length,allowLeadingZeros:!1}))}county(){return this.faker.helpers.arrayElement(this.faker.definitions.location.county)}country(){return this.faker.helpers.arrayElement(this.faker.definitions.location.country)}continent(){return this.faker.helpers.arrayElement(this.faker.definitions.location.continent)}countryCode(e={}){typeof e=="string"&&(e={variant:e});let{variant:t="alpha-2"}=e,r=(()=>{switch(t){case"numeric":return "numeric";case"alpha-3":return "alpha3";case"alpha-2":return "alpha2"}})();return this.faker.helpers.arrayElement(this.faker.definitions.location.country_code)[r]}state(e={}){let{abbreviated:t=!1}=e,r=t?this.faker.definitions.location.state_abbr:this.faker.definitions.location.state;return this.faker.helpers.arrayElement(r)}latitude(e={}){let{max:t=90,min:r=-90,precision:n=4}=e;return this.faker.number.float({min:r,max:t,fractionDigits:n})}longitude(e={}){let{max:t=180,min:r=-180,precision:n=4}=e;return this.faker.number.float({max:t,min:r,fractionDigits:n})}direction(e={}){let{abbreviated:t=!1}=e;return t?this.faker.helpers.arrayElement([...this.faker.definitions.location.direction.cardinal_abbr,...this.faker.definitions.location.direction.ordinal_abbr]):this.faker.helpers.arrayElement([...this.faker.definitions.location.direction.cardinal,...this.faker.definitions.location.direction.ordinal])}cardinalDirection(e={}){let{abbreviated:t=!1}=e;return t?this.faker.helpers.arrayElement(this.faker.definitions.location.direction.cardinal_abbr):this.faker.helpers.arrayElement(this.faker.definitions.location.direction.cardinal)}ordinalDirection(e={}){let{abbreviated:t=!1}=e;return t?this.faker.helpers.arrayElement(this.faker.definitions.location.direction.ordinal_abbr):this.faker.helpers.arrayElement(this.faker.definitions.location.direction.ordinal)}nearbyGPSCoordinate(e={}){let{origin:t,radius:r=10,isMetric:n=!1}=e;if(t==null)return [this.latitude(),this.longitude()];let a=this.faker.number.float({max:2*Math.PI,fractionDigits:5}),o=n?r:r*1.60934,m=this.faker.number.float({max:o,fractionDigits:3})*.995,c=4e4/360,l=m/c,h=[t[0]+Math.sin(a)*l,t[1]+Math.cos(a)*l];return h[0]=h[0]%180,(h[0]<-90||h[0]>90)&&(h[0]=Math.sign(h[0])*180-h[0],h[1]+=180),h[1]=(h[1]%360+540)%360-180,[h[0],h[1]]}timeZone(){return this.faker.helpers.arrayElement(this.faker.definitions.location.time_zone)}};function Fe(i,e,t=r=>r){let r={};for(let n of i){let a=e(n);r[a]===void 0&&(r[a]=[]),r[a].push(t(n));}return r}var ke={fail:()=>{throw new u("No words found that match the given length.")},closest:(i,e)=>{let t=Fe(i,s=>s.length),r=Object.keys(t).map(Number),n=Math.min(...r),a=Math.max(...r),o=Math.min(e.min-n,a-e.max);return i.filter(s=>s.length===e.min-o||s.length===e.max+o)},shortest:i=>{let e=Math.min(...i.map(t=>t.length));return i.filter(t=>t.length===e)},longest:i=>{let e=Math.max(...i.map(t=>t.length));return i.filter(t=>t.length===e)},"any-length":i=>[...i]};function S(i){let{wordList:e,length:t,strategy:r="any-length"}=i;if(t){let n=typeof t=="number"?o=>o.length===t:o=>o.length>=t.min&&o.length<=t.max,a=e.filter(n);return a.length>0?a:typeof t=="number"?ke[r](e,{min:t,max:t}):ke[r](e,t)}else if(r==="shortest"||r==="longest")return ke[r](e);return [...e]}var ie=class extends p{word(e={}){let t=typeof e=="number"?{length:e}:e;return this.faker.helpers.arrayElement(S({...t,wordList:this.faker.definitions.lorem.word}))}words(e=3){return this.faker.helpers.multiple(()=>this.word(),{count:e}).join(" ")}sentence(e={min:3,max:10}){let t=this.words(e);return `${t.charAt(0).toUpperCase()+t.substring(1)}.`}slug(e=3){let t=this.words(e);return this.faker.helpers.slugify(t)}sentences(e={min:2,max:6},t=" "){return this.faker.helpers.multiple(()=>this.sentence(),{count:e}).join(t)}paragraph(e=3){return this.sentences(e)}paragraphs(e=3,t=`
`){return this.faker.helpers.multiple(()=>this.paragraph(),{count:e}).join(t)}text(){let e=["sentence","sentences","paragraph","paragraphs","lines"],t=this.faker.helpers.arrayElement(e);return this[t]()}lines(e={min:1,max:5}){return this.sentences(e,`
`)}};var oe=class extends p{album(){return this.faker.helpers.arrayElement(this.faker.definitions.music.album)}artist(){return this.faker.helpers.arrayElement(this.faker.definitions.music.artist)}genre(){return this.faker.helpers.arrayElement(this.faker.definitions.music.genre)}songName(){return this.faker.helpers.arrayElement(this.faker.definitions.music.song_name)}};var se=class extends p{number(e={}){let{style:t="human"}=e,n=this.faker.definitions.phone_number.format[t];if(!n)throw new Error(`No definitions for ${t} in this locale`);let a=this.faker.helpers.arrayElement(n);return ge(this.faker,a)}imei(){return this.faker.helpers.replaceCreditCardSymbols("##-######-######-L","#")}};var ce=class extends p{chemicalElement(){return this.faker.helpers.arrayElement(this.faker.definitions.science.chemical_element)}unit(){return this.faker.helpers.arrayElement(this.faker.definitions.science.unit)}};var Pt=["video","audio","image","text","application"],It=["application/pdf","audio/mpeg","audio/wav","image/png","image/jpeg","image/gif","video/mp4","video/mpeg","text/html"],_t=["en","wl","ww"],Ge={index:"o",slot:"s",mac:"x",pci:"p"},Ft=["SUN","MON","TUE","WED","THU","FRI","SAT"],le=class extends p{fileName(e={}){let{extensionCount:t=1}=e,r=this.faker.word.words().toLowerCase().replaceAll(/\W/g,"_"),n=this.faker.helpers.multiple(()=>this.fileExt(),{count:t}).join(".");return n.length===0?r:`${r}.${n}`}commonFileName(e){return `${this.fileName({extensionCount:0})}.${e||this.commonFileExt()}`}mimeType(){let e=Object.keys(this.faker.definitions.system.mime_type);return this.faker.helpers.arrayElement(e)}commonFileType(){return this.faker.helpers.arrayElement(Pt)}commonFileExt(){return this.fileExt(this.faker.helpers.arrayElement(It))}fileType(){let e=this.faker.definitions.system.mime_type,t=new Set(Object.keys(e).map(r=>r.split("/")[0]));return this.faker.helpers.arrayElement([...t])}fileExt(e){let t=this.faker.definitions.system.mime_type;if(typeof e=="string")return this.faker.helpers.arrayElement(t[e].extensions);let r=new Set(Object.values(t).flatMap(({extensions:n})=>n));return this.faker.helpers.arrayElement([...r])}directoryPath(){let e=this.faker.definitions.system.directory_path;return this.faker.helpers.arrayElement(e)}filePath(){return `${this.directoryPath()}/${this.fileName()}`}semver(){return [this.faker.number.int(9),this.faker.number.int(9),this.faker.number.int(9)].join(".")}networkInterface(e={}){let{interfaceType:t=this.faker.helpers.arrayElement(_t),interfaceSchema:r=this.faker.helpers.objectKey(Ge)}=e,n,a="",o=()=>this.faker.string.numeric({allowLeadingZeros:!0});switch(r){case"index":{n=o();break}case"slot":{n=`${o()}${this.faker.helpers.maybe(()=>`f${o()}`)??""}${this.faker.helpers.maybe(()=>`d${o()}`)??""}`;break}case"mac":{n=this.faker.internet.mac("");break}case"pci":{a=this.faker.helpers.maybe(()=>`P${o()}`)??"",n=`${o()}s${o()}${this.faker.helpers.maybe(()=>`f${o()}`)??""}${this.faker.helpers.maybe(()=>`d${o()}`)??""}`;break}}return `${a}${t}${Ge[r]}${n}`}cron(e={}){let{includeYear:t=!1,includeNonStandard:r=!1}=e,n=[this.faker.number.int(59),"*"],a=[this.faker.number.int(23),"*"],o=[this.faker.number.int({min:1,max:31}),"*","?"],s=[this.faker.number.int({min:1,max:12}),"*"],m=[this.faker.number.int(6),this.faker.helpers.arrayElement(Ft),"*","?"],c=[this.faker.number.int({min:1970,max:2099}),"*"],l=this.faker.helpers.arrayElement(n),h=this.faker.helpers.arrayElement(a),f=this.faker.helpers.arrayElement(o),d=this.faker.helpers.arrayElement(s),b=this.faker.helpers.arrayElement(m),k=this.faker.helpers.arrayElement(c),M=`${l} ${h} ${f} ${d} ${b}`;t&&(M+=` ${k}`);let y=["@annually","@daily","@hourly","@monthly","@reboot","@weekly","@yearly"];return !r||this.faker.datatype.boolean()?M:this.faker.helpers.arrayElement(y)}};var me=class extends p{vehicle(){return `${this.manufacturer()} ${this.model()}`}manufacturer(){return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.manufacturer)}model(){return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.model)}type(){return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.type)}fuel(){return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.fuel)}vin(){let e=["o","i","q","O","I","Q"];return `${this.faker.string.alphanumeric({length:10,casing:"upper",exclude:e})}${this.faker.string.alpha({length:1,casing:"upper",exclude:e})}${this.faker.string.alphanumeric({length:1,casing:"upper",exclude:e})}${this.faker.string.numeric({length:5,allowLeadingZeros:!0})}`}color(){return this.faker.color.human()}vrm(){return `${this.faker.string.alpha({length:2,casing:"upper"})}${this.faker.string.numeric({length:2,allowLeadingZeros:!0})}${this.faker.string.alpha({length:3,casing:"upper"})}`}bicycle(){return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.bicycle_type)}};var ue=class extends p{adjective(e={}){let t=typeof e=="number"?{length:e}:e;return this.faker.helpers.arrayElement(S({...t,wordList:this.faker.definitions.word.adjective}))}adverb(e={}){let t=typeof e=="number"?{length:e}:e;return this.faker.helpers.arrayElement(S({...t,wordList:this.faker.definitions.word.adverb}))}conjunction(e={}){let t=typeof e=="number"?{length:e}:e;return this.faker.helpers.arrayElement(S({...t,wordList:this.faker.definitions.word.conjunction}))}interjection(e={}){let t=typeof e=="number"?{length:e}:e;return this.faker.helpers.arrayElement(S({...t,wordList:this.faker.definitions.word.interjection}))}noun(e={}){let t=typeof e=="number"?{length:e}:e;return this.faker.helpers.arrayElement(S({...t,wordList:this.faker.definitions.word.noun}))}preposition(e={}){let t=typeof e=="number"?{length:e}:e;return this.faker.helpers.arrayElement(S({...t,wordList:this.faker.definitions.word.preposition}))}verb(e={}){let t=typeof e=="number"?{length:e}:e;return this.faker.helpers.arrayElement(S({...t,wordList:this.faker.definitions.word.verb}))}sample(e={}){let t=this.faker.helpers.shuffle([this.adjective,this.adverb,this.conjunction,this.interjection,this.noun,this.preposition,this.verb]);for(let r of t)try{return r(e)}catch{continue}throw new u("No matching word data available for the current locale")}words(e={}){typeof e=="number"&&(e={count:e});let{count:t={min:1,max:3}}=e;return this.faker.helpers.multiple(()=>this.sample(),{count:t}).join(" ")}};var Oe=class extends B{rawDefinitions;definitions;airline=new P(this);animal=new W(this);book=new Z(this);color=new I(this);commerce=new J(this);company=new X(this);database=new Q(this);date=new K(this);finance=new q(this);food=new ee(this);git=new te(this);hacker=new re(this);helpers=new j(this);image=new ne(this);internet=new _(this);location=new ae(this);lorem=new ie(this);music=new oe(this);person=new F(this);phone=new se(this);science=new ce(this);system=new le(this);vehicle=new me(this);word=new ue(this);get address(){return N({deprecated:"faker.address",proposed:"faker.location",since:"8.0",until:"10.0"}),this.location}get name(){return N({deprecated:"faker.name",proposed:"faker.person",since:"8.0",until:"10.0"}),this.person}constructor(e){super({randomizer:e.randomizer});let{locale:t}=e;if(Array.isArray(t)){if(t.length===0)throw new u("The locale option must contain at least one locale definition.");t=_e(t);}this.rawDefinitions=t,this.definitions=Le(this.rawDefinitions);}getMetadata(){return this.rawDefinitions.metadata??{}}};var Ue=["Academy Color Encoding System (ACES)","Adobe RGB","Adobe Wide Gamut RGB","British Standard Colour (BS)","CIE 1931 XYZ","CIELAB","CIELUV","CIEUVW","CMY","CMYK","DCI-P3","Display-P3","Federal Standard 595C","HKS","HSL","HSLA","HSLuv","HSV","HWB","LCh","LMS","Munsell Color System","Natural Color System (NSC)","Pantone Matching System (PMS)","ProPhoto RGB Color Space","RAL","RG","RGBA","RGK","Rec. 2020","Rec. 2100","Rec. 601","Rec. 709","Uniform Color Spaces (UCSs)","YDbDr","YIQ","YPbPr","sRGB","sYCC","scRGB","xvYCC"];var Gt={space:Ue},Ke=Gt;var je=["ascii_bin","ascii_general_ci","cp1250_bin","cp1250_general_ci","utf8_bin","utf8_general_ci","utf8_unicode_ci"];var He=["ARCHIVE","BLACKHOLE","CSV","InnoDB","MEMORY","MyISAM"];var Ve=["bigint","binary","bit","blob","boolean","date","datetime","decimal","double","enum","float","geometry","int","mediumint","point","real","serial","set","smallint","text","time","timestamp","tinyint","varchar"];var Ot={collation:je,engine:He,type:Ve},ze=Ot;var he=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Ciudad_Juarez","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montserrat","America/Nassau","America/New_York","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zurich","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis"];var Ut={time_zone:he},Ye=Ut;var We=["ADP","AGP","AI","API","ASCII","CLI","COM","CSS","DNS","DRAM","EXE","FTP","GB","HDD","HEX","HTTP","IB","IP","JBOD","JSON","OCR","PCI","PNG","RAM","RSS","SAS","SCSI","SDD","SMS","SMTP","SQL","SSD","SSL","TCP","THX","TLS","UDP","USB","UTF8","VGA","XML","XSS"];var Kt={abbreviation:We},Ze=Kt;var Je={smiley:["\u{1F600}","\u{1F603}","\u{1F604}","\u{1F601}","\u{1F606}","\u{1F605}","\u{1F923}","\u{1F602}","\u{1F642}","\u{1F643}","\u{1F609}","\u{1F60A}","\u{1F607}","\u{1F970}","\u{1F60D}","\u{1F929}","\u{1F618}","\u{1F617}","\u263A\uFE0F","\u{1F61A}","\u{1F619}","\u{1F972}","\u{1F60B}","\u{1F61B}","\u{1F61C}","\u{1F92A}","\u{1F61D}","\u{1F911}","\u{1F917}","\u{1F92D}","\u{1F92B}","\u{1F914}","\u{1F910}","\u{1F928}","\u{1F610}","\u{1F611}","\u{1F636}","\u{1F636}\u200D\u{1F32B}\uFE0F","\u{1F60F}","\u{1F612}","\u{1F644}","\u{1F62C}","\u{1F62E}\u200D\u{1F4A8}","\u{1F925}","\u{1F60C}","\u{1F614}","\u{1F62A}","\u{1F924}","\u{1F634}","\u{1F637}","\u{1F912}","\u{1F915}","\u{1F922}","\u{1F92E}","\u{1F927}","\u{1F975}","\u{1F976}","\u{1F974}","\u{1F635}","\u{1F635}\u200D\u{1F4AB}","\u{1F92F}","\u{1F920}","\u{1F973}","\u{1F978}","\u{1F60E}","\u{1F913}","\u{1F9D0}","\u{1F615}","\u{1F61F}","\u{1F641}","\u2639\uFE0F","\u{1F62E}","\u{1F62F}","\u{1F632}","\u{1F633}","\u{1F97A}","\u{1F626}","\u{1F627}","\u{1F628}","\u{1F630}","\u{1F625}","\u{1F622}","\u{1F62D}","\u{1F631}","\u{1F616}","\u{1F623}","\u{1F61E}","\u{1F613}","\u{1F629}","\u{1F62B}","\u{1F971}","\u{1F624}","\u{1F621}","\u{1F620}","\u{1F92C}","\u{1F608}","\u{1F47F}","\u{1F480}","\u2620\uFE0F","\u{1F4A9}","\u{1F921}","\u{1F479}","\u{1F47A}","\u{1F47B}","\u{1F47D}","\u{1F47E}","\u{1F916}","\u{1F63A}","\u{1F638}","\u{1F639}","\u{1F63B}","\u{1F63C}","\u{1F63D}","\u{1F640}","\u{1F63F}","\u{1F63E}","\u{1F648}","\u{1F649}","\u{1F64A}","\u{1F48B}","\u{1F48C}","\u{1F498}","\u{1F49D}","\u{1F496}","\u{1F497}","\u{1F493}","\u{1F49E}","\u{1F495}","\u{1F49F}","\u2763\uFE0F","\u{1F494}","\u2764\uFE0F\u200D\u{1F525}","\u2764\uFE0F\u200D\u{1FA79}","\u2764\uFE0F","\u{1F9E1}","\u{1F49B}","\u{1F49A}","\u{1F499}","\u{1F49C}","\u{1F90E}","\u{1F5A4}","\u{1F90D}","\u{1F4AF}","\u{1F4A2}","\u{1F4A5}","\u{1F4AB}","\u{1F4A6}","\u{1F4A8}","\u{1F573}\uFE0F","\u{1F4A3}","\u{1F4AC}","\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F","\u{1F5E8}\uFE0F","\u{1F5EF}\uFE0F","\u{1F4AD}","\u{1F4A4}"],body:["\u{1F44B}","\u{1F44B}\u{1F3FB}","\u{1F44B}\u{1F3FC}","\u{1F44B}\u{1F3FD}","\u{1F44B}\u{1F3FE}","\u{1F44B}\u{1F3FF}","\u{1F91A}","\u{1F91A}\u{1F3FB}","\u{1F91A}\u{1F3FC}","\u{1F91A}\u{1F3FD}","\u{1F91A}\u{1F3FE}","\u{1F91A}\u{1F3FF}","\u{1F590}\uFE0F","\u{1F590}\u{1F3FB}","\u{1F590}\u{1F3FC}","\u{1F590}\u{1F3FD}","\u{1F590}\u{1F3FE}","\u{1F590}\u{1F3FF}","\u270B","\u270B\u{1F3FB}","\u270B\u{1F3FC}","\u270B\u{1F3FD}","\u270B\u{1F3FE}","\u270B\u{1F3FF}","\u{1F596}","\u{1F596}\u{1F3FB}","\u{1F596}\u{1F3FC}","\u{1F596}\u{1F3FD}","\u{1F596}\u{1F3FE}","\u{1F596}\u{1F3FF}","\u{1F44C}","\u{1F44C}\u{1F3FB}","\u{1F44C}\u{1F3FC}","\u{1F44C}\u{1F3FD}","\u{1F44C}\u{1F3FE}","\u{1F44C}\u{1F3FF}","\u{1F90C}","\u{1F90C}\u{1F3FB}","\u{1F90C}\u{1F3FC}","\u{1F90C}\u{1F3FD}","\u{1F90C}\u{1F3FE}","\u{1F90C}\u{1F3FF}","\u{1F90F}","\u{1F90F}\u{1F3FB}","\u{1F90F}\u{1F3FC}","\u{1F90F}\u{1F3FD}","\u{1F90F}\u{1F3FE}","\u{1F90F}\u{1F3FF}","\u270C\uFE0F","\u270C\u{1F3FB}","\u270C\u{1F3FC}","\u270C\u{1F3FD}","\u270C\u{1F3FE}","\u270C\u{1F3FF}","\u{1F91E}","\u{1F91E}\u{1F3FB}","\u{1F91E}\u{1F3FC}","\u{1F91E}\u{1F3FD}","\u{1F91E}\u{1F3FE}","\u{1F91E}\u{1F3FF}","\u{1F91F}","\u{1F91F}\u{1F3FB}","\u{1F91F}\u{1F3FC}","\u{1F91F}\u{1F3FD}","\u{1F91F}\u{1F3FE}","\u{1F91F}\u{1F3FF}","\u{1F918}","\u{1F918}\u{1F3FB}","\u{1F918}\u{1F3FC}","\u{1F918}\u{1F3FD}","\u{1F918}\u{1F3FE}","\u{1F918}\u{1F3FF}","\u{1F919}","\u{1F919}\u{1F3FB}","\u{1F919}\u{1F3FC}","\u{1F919}\u{1F3FD}","\u{1F919}\u{1F3FE}","\u{1F919}\u{1F3FF}","\u{1F448}","\u{1F448}\u{1F3FB}","\u{1F448}\u{1F3FC}","\u{1F448}\u{1F3FD}","\u{1F448}\u{1F3FE}","\u{1F448}\u{1F3FF}","\u{1F449}","\u{1F449}\u{1F3FB}","\u{1F449}\u{1F3FC}","\u{1F449}\u{1F3FD}","\u{1F449}\u{1F3FE}","\u{1F449}\u{1F3FF}","\u{1F446}","\u{1F446}\u{1F3FB}","\u{1F446}\u{1F3FC}","\u{1F446}\u{1F3FD}","\u{1F446}\u{1F3FE}","\u{1F446}\u{1F3FF}","\u{1F595}","\u{1F595}\u{1F3FB}","\u{1F595}\u{1F3FC}","\u{1F595}\u{1F3FD}","\u{1F595}\u{1F3FE}","\u{1F595}\u{1F3FF}","\u{1F447}","\u{1F447}\u{1F3FB}","\u{1F447}\u{1F3FC}","\u{1F447}\u{1F3FD}","\u{1F447}\u{1F3FE}","\u{1F447}\u{1F3FF}","\u261D\uFE0F","\u261D\u{1F3FB}","\u261D\u{1F3FC}","\u261D\u{1F3FD}","\u261D\u{1F3FE}","\u261D\u{1F3FF}","\u{1F44D}","\u{1F44D}\u{1F3FB}","\u{1F44D}\u{1F3FC}","\u{1F44D}\u{1F3FD}","\u{1F44D}\u{1F3FE}","\u{1F44D}\u{1F3FF}","\u{1F44E}","\u{1F44E}\u{1F3FB}","\u{1F44E}\u{1F3FC}","\u{1F44E}\u{1F3FD}","\u{1F44E}\u{1F3FE}","\u{1F44E}\u{1F3FF}","\u270A","\u270A\u{1F3FB}","\u270A\u{1F3FC}","\u270A\u{1F3FD}","\u270A\u{1F3FE}","\u270A\u{1F3FF}","\u{1F44A}","\u{1F44A}\u{1F3FB}","\u{1F44A}\u{1F3FC}","\u{1F44A}\u{1F3FD}","\u{1F44A}\u{1F3FE}","\u{1F44A}\u{1F3FF}","\u{1F91B}","\u{1F91B}\u{1F3FB}","\u{1F91B}\u{1F3FC}","\u{1F91B}\u{1F3FD}","\u{1F91B}\u{1F3FE}","\u{1F91B}\u{1F3FF}","\u{1F91C}","\u{1F91C}\u{1F3FB}","\u{1F91C}\u{1F3FC}","\u{1F91C}\u{1F3FD}","\u{1F91C}\u{1F3FE}","\u{1F91C}\u{1F3FF}","\u{1F44F}","\u{1F44F}\u{1F3FB}","\u{1F44F}\u{1F3FC}","\u{1F44F}\u{1F3FD}","\u{1F44F}\u{1F3FE}","\u{1F44F}\u{1F3FF}","\u{1F64C}","\u{1F64C}\u{1F3FB}","\u{1F64C}\u{1F3FC}","\u{1F64C}\u{1F3FD}","\u{1F64C}\u{1F3FE}","\u{1F64C}\u{1F3FF}","\u{1F450}","\u{1F450}\u{1F3FB}","\u{1F450}\u{1F3FC}","\u{1F450}\u{1F3FD}","\u{1F450}\u{1F3FE}","\u{1F450}\u{1F3FF}","\u{1F932}","\u{1F932}\u{1F3FB}","\u{1F932}\u{1F3FC}","\u{1F932}\u{1F3FD}","\u{1F932}\u{1F3FE}","\u{1F932}\u{1F3FF}","\u{1F91D}","\u{1F64F}","\u{1F64F}\u{1F3FB}","\u{1F64F}\u{1F3FC}","\u{1F64F}\u{1F3FD}","\u{1F64F}\u{1F3FE}","\u{1F64F}\u{1F3FF}","\u270D\uFE0F","\u270D\u{1F3FB}","\u270D\u{1F3FC}","\u270D\u{1F3FD}","\u270D\u{1F3FE}","\u270D\u{1F3FF}","\u{1F485}","\u{1F485}\u{1F3FB}","\u{1F485}\u{1F3FC}","\u{1F485}\u{1F3FD}","\u{1F485}\u{1F3FE}","\u{1F485}\u{1F3FF}","\u{1F933}","\u{1F933}\u{1F3FB}","\u{1F933}\u{1F3FC}","\u{1F933}\u{1F3FD}","\u{1F933}\u{1F3FE}","\u{1F933}\u{1F3FF}","\u{1F4AA}","\u{1F4AA}\u{1F3FB}","\u{1F4AA}\u{1F3FC}","\u{1F4AA}\u{1F3FD}","\u{1F4AA}\u{1F3FE}","\u{1F4AA}\u{1F3FF}","\u{1F9BE}","\u{1F9BF}","\u{1F9B5}","\u{1F9B5}\u{1F3FB}","\u{1F9B5}\u{1F3FC}","\u{1F9B5}\u{1F3FD}","\u{1F9B5}\u{1F3FE}","\u{1F9B5}\u{1F3FF}","\u{1F9B6}","\u{1F9B6}\u{1F3FB}","\u{1F9B6}\u{1F3FC}","\u{1F9B6}\u{1F3FD}","\u{1F9B6}\u{1F3FE}","\u{1F9B6}\u{1F3FF}","\u{1F442}","\u{1F442}\u{1F3FB}","\u{1F442}\u{1F3FC}","\u{1F442}\u{1F3FD}","\u{1F442}\u{1F3FE}","\u{1F442}\u{1F3FF}","\u{1F9BB}","\u{1F9BB}\u{1F3FB}","\u{1F9BB}\u{1F3FC}","\u{1F9BB}\u{1F3FD}","\u{1F9BB}\u{1F3FE}","\u{1F9BB}\u{1F3FF}","\u{1F443}","\u{1F443}\u{1F3FB}","\u{1F443}\u{1F3FC}","\u{1F443}\u{1F3FD}","\u{1F443}\u{1F3FE}","\u{1F443}\u{1F3FF}","\u{1F9E0}","\u{1FAC0}","\u{1FAC1}","\u{1F9B7}","\u{1F9B4}","\u{1F440}","\u{1F441}\uFE0F","\u{1F445}","\u{1F444}"],person:["\u{1F476}","\u{1F476}\u{1F3FB}","\u{1F476}\u{1F3FC}","\u{1F476}\u{1F3FD}","\u{1F476}\u{1F3FE}","\u{1F476}\u{1F3FF}","\u{1F9D2}","\u{1F9D2}\u{1F3FB}","\u{1F9D2}\u{1F3FC}","\u{1F9D2}\u{1F3FD}","\u{1F9D2}\u{1F3FE}","\u{1F9D2}\u{1F3FF}","\u{1F466}","\u{1F466}\u{1F3FB}","\u{1F466}\u{1F3FC}","\u{1F466}\u{1F3FD}","\u{1F466}\u{1F3FE}","\u{1F466}\u{1F3FF}","\u{1F467}","\u{1F467}\u{1F3FB}","\u{1F467}\u{1F3FC}","\u{1F467}\u{1F3FD}","\u{1F467}\u{1F3FE}","\u{1F467}\u{1F3FF}","\u{1F9D1}","\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FF}","\u{1F471}","\u{1F471}\u{1F3FB}","\u{1F471}\u{1F3FC}","\u{1F471}\u{1F3FD}","\u{1F471}\u{1F3FE}","\u{1F471}\u{1F3FF}","\u{1F468}","\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FF}","\u{1F9D4}","\u{1F9D4}\u{1F3FB}","\u{1F9D4}\u{1F3FC}","\u{1F9D4}\u{1F3FD}","\u{1F9D4}\u{1F3FE}","\u{1F9D4}\u{1F3FF}","\u{1F9D4}\u200D\u2642\uFE0F","\u{1F9D4}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9D4}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9D4}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9D4}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9D4}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9D4}\u200D\u2640\uFE0F","\u{1F9D4}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9D4}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9D4}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9D4}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9D4}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F468}\u200D\u{1F9B0}","\u{1F468}\u{1F3FB}\u200D\u{1F9B0}","\u{1F468}\u{1F3FC}\u200D\u{1F9B0}","\u{1F468}\u{1F3FD}\u200D\u{1F9B0}","\u{1F468}\u{1F3FE}\u200D\u{1F9B0}","\u{1F468}\u{1F3FF}\u200D\u{1F9B0}","\u{1F468}\u200D\u{1F9B1}","\u{1F468}\u{1F3FB}\u200D\u{1F9B1}","\u{1F468}\u{1F3FC}\u200D\u{1F9B1}","\u{1F468}\u{1F3FD}\u200D\u{1F9B1}","\u{1F468}\u{1F3FE}\u200D\u{1F9B1}","\u{1F468}\u{1F3FF}\u200D\u{1F9B1}","\u{1F468}\u200D\u{1F9B3}","\u{1F468}\u{1F3FB}\u200D\u{1F9B3}","\u{1F468}\u{1F3FC}\u200D\u{1F9B3}","\u{1F468}\u{1F3FD}\u200D\u{1F9B3}","\u{1F468}\u{1F3FE}\u200D\u{1F9B3}","\u{1F468}\u{1F3FF}\u200D\u{1F9B3}","\u{1F468}\u200D\u{1F9B2}","\u{1F468}\u{1F3FB}\u200D\u{1F9B2}","\u{1F468}\u{1F3FC}\u200D\u{1F9B2}","\u{1F468}\u{1F3FD}\u200D\u{1F9B2}","\u{1F468}\u{1F3FE}\u200D\u{1F9B2}","\u{1F468}\u{1F3FF}\u200D\u{1F9B2}","\u{1F469}","\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FF}","\u{1F469}\u200D\u{1F9B0}","\u{1F469}\u{1F3FB}\u200D\u{1F9B0}","\u{1F469}\u{1F3FC}\u200D\u{1F9B0}","\u{1F469}\u{1F3FD}\u200D\u{1F9B0}","\u{1F469}\u{1F3FE}\u200D\u{1F9B0}","\u{1F469}\u{1F3FF}\u200D\u{1F9B0}","\u{1F9D1}\u200D\u{1F9B0}","\u{1F9D1}\u{1F3FB}\u200D\u{1F9B0}","\u{1F9D1}\u{1F3FC}\u200D\u{1F9B0}","\u{1F9D1}\u{1F3FD}\u200D\u{1F9B0}","\u{1F9D1}\u{1F3FE}\u200D\u{1F9B0}","\u{1F9D1}\u{1F3FF}\u200D\u{1F9B0}","\u{1F469}\u200D\u{1F9B1}","\u{1F469}\u{1F3FB}\u200D\u{1F9B1}","\u{1F469}\u{1F3FC}\u200D\u{1F9B1}","\u{1F469}\u{1F3FD}\u200D\u{1F9B1}","\u{1F469}\u{1F3FE}\u200D\u{1F9B1}","\u{1F469}\u{1F3FF}\u200D\u{1F9B1}","\u{1F9D1}\u200D\u{1F9B1}","\u{1F9D1}\u{1F3FB}\u200D\u{1F9B1}","\u{1F9D1}\u{1F3FC}\u200D\u{1F9B1}","\u{1F9D1}\u{1F3FD}\u200D\u{1F9B1}","\u{1F9D1}\u{1F3FE}\u200D\u{1F9B1}","\u{1F9D1}\u{1F3FF}\u200D\u{1F9B1}","\u{1F469}\u200D\u{1F9B3}","\u{1F469}\u{1F3FB}\u200D\u{1F9B3}","\u{1F469}\u{1F3FC}\u200D\u{1F9B3}","\u{1F469}\u{1F3FD}\u200D\u{1F9B3}","\u{1F469}\u{1F3FE}\u200D\u{1F9B3}","\u{1F469}\u{1F3FF}\u200D\u{1F9B3}","\u{1F9D1}\u200D\u{1F9B3}","\u{1F9D1}\u{1F3FB}\u200D\u{1F9B3}","\u{1F9D1}\u{1F3FC}\u200D\u{1F9B3}","\u{1F9D1}\u{1F3FD}\u200D\u{1F9B3}","\u{1F9D1}\u{1F3FE}\u200D\u{1F9B3}","\u{1F9D1}\u{1F3FF}\u200D\u{1F9B3}","\u{1F469}\u200D\u{1F9B2}","\u{1F469}\u{1F3FB}\u200D\u{1F9B2}","\u{1F469}\u{1F3FC}\u200D\u{1F9B2}","\u{1F469}\u{1F3FD}\u200D\u{1F9B2}","\u{1F469}\u{1F3FE}\u200D\u{1F9B2}","\u{1F469}\u{1F3FF}\u200D\u{1F9B2}","\u{1F9D1}\u200D\u{1F9B2}","\u{1F9D1}\u{1F3FB}\u200D\u{1F9B2}","\u{1F9D1}\u{1F3FC}\u200D\u{1F9B2}","\u{1F9D1}\u{1F3FD}\u200D\u{1F9B2}","\u{1F9D1}\u{1F3FE}\u200D\u{1F9B2}","\u{1F9D1}\u{1F3FF}\u200D\u{1F9B2}","\u{1F471}\u200D\u2640\uFE0F","\u{1F471}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F471}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F471}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F471}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F471}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F471}\u200D\u2642\uFE0F","\u{1F471}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F471}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F471}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F471}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F471}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9D3}","\u{1F9D3}\u{1F3FB}","\u{1F9D3}\u{1F3FC}","\u{1F9D3}\u{1F3FD}","\u{1F9D3}\u{1F3FE}","\u{1F9D3}\u{1F3FF}","\u{1F474}","\u{1F474}\u{1F3FB}","\u{1F474}\u{1F3FC}","\u{1F474}\u{1F3FD}","\u{1F474}\u{1F3FE}","\u{1F474}\u{1F3FF}","\u{1F475}","\u{1F475}\u{1F3FB}","\u{1F475}\u{1F3FC}","\u{1F475}\u{1F3FD}","\u{1F475}\u{1F3FE}","\u{1F475}\u{1F3FF}","\u{1F64D}","\u{1F64D}\u{1F3FB}","\u{1F64D}\u{1F3FC}","\u{1F64D}\u{1F3FD}","\u{1F64D}\u{1F3FE}","\u{1F64D}\u{1F3FF}","\u{1F64D}\u200D\u2642\uFE0F","\u{1F64D}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F64D}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F64D}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F64D}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F64D}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F64D}\u200D\u2640\uFE0F","\u{1F64D}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F64D}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F64D}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F64D}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F64D}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F64E}","\u{1F64E}\u{1F3FB}","\u{1F64E}\u{1F3FC}","\u{1F64E}\u{1F3FD}","\u{1F64E}\u{1F3FE}","\u{1F64E}\u{1F3FF}","\u{1F64E}\u200D\u2642\uFE0F","\u{1F64E}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F64E}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F64E}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F64E}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F64E}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F64E}\u200D\u2640\uFE0F","\u{1F64E}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F64E}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F64E}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F64E}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F64E}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F645}","\u{1F645}\u{1F3FB}","\u{1F645}\u{1F3FC}","\u{1F645}\u{1F3FD}","\u{1F645}\u{1F3FE}","\u{1F645}\u{1F3FF}","\u{1F645}\u200D\u2642\uFE0F","\u{1F645}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F645}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F645}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F645}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F645}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F645}\u200D\u2640\uFE0F","\u{1F645}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F645}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F645}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F645}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F645}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F646}","\u{1F646}\u{1F3FB}","\u{1F646}\u{1F3FC}","\u{1F646}\u{1F3FD}","\u{1F646}\u{1F3FE}","\u{1F646}\u{1F3FF}","\u{1F646}\u200D\u2642\uFE0F","\u{1F646}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F646}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F646}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F646}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F646}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F646}\u200D\u2640\uFE0F","\u{1F646}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F646}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F646}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F646}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F646}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F481}","\u{1F481}\u{1F3FB}","\u{1F481}\u{1F3FC}","\u{1F481}\u{1F3FD}","\u{1F481}\u{1F3FE}","\u{1F481}\u{1F3FF}","\u{1F481}\u200D\u2642\uFE0F","\u{1F481}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F481}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F481}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F481}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F481}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F481}\u200D\u2640\uFE0F","\u{1F481}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F481}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F481}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F481}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F64B}","\u{1F64B}\u{1F3FB}","\u{1F64B}\u{1F3FC}","\u{1F64B}\u{1F3FD}","\u{1F64B}\u{1F3FE}","\u{1F64B}\u{1F3FF}","\u{1F64B}\u200D\u2642\uFE0F","\u{1F64B}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F64B}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F64B}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F64B}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F64B}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F64B}\u200D\u2640\uFE0F","\u{1F64B}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F64B}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F64B}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F64B}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F64B}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9CF}","\u{1F9CF}\u{1F3FB}","\u{1F9CF}\u{1F3FC}","\u{1F9CF}\u{1F3FD}","\u{1F9CF}\u{1F3FE}","\u{1F9CF}\u{1F3FF}","\u{1F9CF}\u200D\u2642\uFE0F","\u{1F9CF}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9CF}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9CF}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9CF}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9CF}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9CF}\u200D\u2640\uFE0F","\u{1F9CF}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9CF}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9CF}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9CF}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9CF}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F647}","\u{1F647}\u{1F3FB}","\u{1F647}\u{1F3FC}","\u{1F647}\u{1F3FD}","\u{1F647}\u{1F3FE}","\u{1F647}\u{1F3FF}","\u{1F647}\u200D\u2642\uFE0F","\u{1F647}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F647}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F647}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F647}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F647}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F647}\u200D\u2640\uFE0F","\u{1F647}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F647}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F647}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F647}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F647}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F926}","\u{1F926}\u{1F3FB}","\u{1F926}\u{1F3FC}","\u{1F926}\u{1F3FD}","\u{1F926}\u{1F3FE}","\u{1F926}\u{1F3FF}","\u{1F926}\u200D\u2642\uFE0F","\u{1F926}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F926}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F926}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F926}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F926}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F926}\u200D\u2640\uFE0F","\u{1F926}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F926}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F926}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F926}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F926}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F937}","\u{1F937}\u{1F3FB}","\u{1F937}\u{1F3FC}","\u{1F937}\u{1F3FD}","\u{1F937}\u{1F3FE}","\u{1F937}\u{1F3FF}","\u{1F937}\u200D\u2642\uFE0F","\u{1F937}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F937}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F937}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F937}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F937}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F937}\u200D\u2640\uFE0F","\u{1F937}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F937}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F937}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F937}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F937}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9D1}\u200D\u2695\uFE0F","\u{1F9D1}\u{1F3FB}\u200D\u2695\uFE0F","\u{1F9D1}\u{1F3FC}\u200D\u2695\uFE0F","\u{1F9D1}\u{1F3FD}\u200D\u2695\uFE0F","\u{1F9D1}\u{1F3FE}\u200D\u2695\uFE0F","\u{1F9D1}\u{1F3FF}\u200D\u2695\uFE0F","\u{1F468}\u200D\u2695\uFE0F","\u{1F468}\u{1F3FB}\u200D\u2695\uFE0F","\u{1F468}\u{1F3FC}\u200D\u2695\uFE0F","\u{1F468}\u{1F3FD}\u200D\u2695\uFE0F","\u{1F468}\u{1F3FE}\u200D\u2695\uFE0F","\u{1F468}\u{1F3FF}\u200D\u2695\uFE0F","\u{1F469}\u200D\u2695\uFE0F","\u{1F469}\u{1F3FB}\u200D\u2695\uFE0F","\u{1F469}\u{1F3FC}\u200D\u2695\uFE0F","\u{1F469}\u{1F3FD}\u200D\u2695\uFE0F","\u{1F469}\u{1F3FE}\u200D\u2695\uFE0F","\u{1F469}\u{1F3FF}\u200D\u2695\uFE0F","\u{1F9D1}\u200D\u{1F393}","\u{1F9D1}\u{1F3FB}\u200D\u{1F393}","\u{1F9D1}\u{1F3FC}\u200D\u{1F393}","\u{1F9D1}\u{1F3FD}\u200D\u{1F393}","\u{1F9D1}\u{1F3FE}\u200D\u{1F393}","\u{1F9D1}\u{1F3FF}\u200D\u{1F393}","\u{1F468}\u200D\u{1F393}","\u{1F468}\u{1F3FB}\u200D\u{1F393}","\u{1F468}\u{1F3FC}\u200D\u{1F393}","\u{1F468}\u{1F3FD}\u200D\u{1F393}","\u{1F468}\u{1F3FE}\u200D\u{1F393}","\u{1F468}\u{1F3FF}\u200D\u{1F393}","\u{1F469}\u200D\u{1F393}","\u{1F469}\u{1F3FB}\u200D\u{1F393}","\u{1F469}\u{1F3FC}\u200D\u{1F393}","\u{1F469}\u{1F3FD}\u200D\u{1F393}","\u{1F469}\u{1F3FE}\u200D\u{1F393}","\u{1F469}\u{1F3FF}\u200D\u{1F393}","\u{1F9D1}\u200D\u{1F3EB}","\u{1F9D1}\u{1F3FB}\u200D\u{1F3EB}","\u{1F9D1}\u{1F3FC}\u200D\u{1F3EB}","\u{1F9D1}\u{1F3FD}\u200D\u{1F3EB}","\u{1F9D1}\u{1F3FE}\u200D\u{1F3EB}","\u{1F9D1}\u{1F3FF}\u200D\u{1F3EB}","\u{1F468}\u200D\u{1F3EB}","\u{1F468}\u{1F3FB}\u200D\u{1F3EB}","\u{1F468}\u{1F3FC}\u200D\u{1F3EB}","\u{1F468}\u{1F3FD}\u200D\u{1F3EB}","\u{1F468}\u{1F3FE}\u200D\u{1F3EB}","\u{1F468}\u{1F3FF}\u200D\u{1F3EB}","\u{1F469}\u200D\u{1F3EB}","\u{1F469}\u{1F3FB}\u200D\u{1F3EB}","\u{1F469}\u{1F3FC}\u200D\u{1F3EB}","\u{1F469}\u{1F3FD}\u200D\u{1F3EB}","\u{1F469}\u{1F3FE}\u200D\u{1F3EB}","\u{1F469}\u{1F3FF}\u200D\u{1F3EB}","\u{1F9D1}\u200D\u2696\uFE0F","\u{1F9D1}\u{1F3FB}\u200D\u2696\uFE0F","\u{1F9D1}\u{1F3FC}\u200D\u2696\uFE0F","\u{1F9D1}\u{1F3FD}\u200D\u2696\uFE0F","\u{1F9D1}\u{1F3FE}\u200D\u2696\uFE0F","\u{1F9D1}\u{1F3FF}\u200D\u2696\uFE0F","\u{1F468}\u200D\u2696\uFE0F","\u{1F468}\u{1F3FB}\u200D\u2696\uFE0F","\u{1F468}\u{1F3FC}\u200D\u2696\uFE0F","\u{1F468}\u{1F3FD}\u200D\u2696\uFE0F","\u{1F468}\u{1F3FE}\u200D\u2696\uFE0F","\u{1F468}\u{1F3FF}\u200D\u2696\uFE0F","\u{1F469}\u200D\u2696\uFE0F","\u{1F469}\u{1F3FB}\u200D\u2696\uFE0F","\u{1F469}\u{1F3FC}\u200D\u2696\uFE0F","\u{1F469}\u{1F3FD}\u200D\u2696\uFE0F","\u{1F469}\u{1F3FE}\u200D\u2696\uFE0F","\u{1F469}\u{1F3FF}\u200D\u2696\uFE0F","\u{1F9D1}\u200D\u{1F33E}","\u{1F9D1}\u{1F3FB}\u200D\u{1F33E}","\u{1F9D1}\u{1F3FC}\u200D\u{1F33E}","\u{1F9D1}\u{1F3FD}\u200D\u{1F33E}","\u{1F9D1}\u{1F3FE}\u200D\u{1F33E}","\u{1F9D1}\u{1F3FF}\u200D\u{1F33E}","\u{1F468}\u200D\u{1F33E}","\u{1F468}\u{1F3FB}\u200D\u{1F33E}","\u{1F468}\u{1F3FC}\u200D\u{1F33E}","\u{1F468}\u{1F3FD}\u200D\u{1F33E}","\u{1F468}\u{1F3FE}\u200D\u{1F33E}","\u{1F468}\u{1F3FF}\u200D\u{1F33E}","\u{1F469}\u200D\u{1F33E}","\u{1F469}\u{1F3FB}\u200D\u{1F33E}","\u{1F469}\u{1F3FC}\u200D\u{1F33E}","\u{1F469}\u{1F3FD}\u200D\u{1F33E}","\u{1F469}\u{1F3FE}\u200D\u{1F33E}","\u{1F469}\u{1F3FF}\u200D\u{1F33E}","\u{1F9D1}\u200D\u{1F373}","\u{1F9D1}\u{1F3FB}\u200D\u{1F373}","\u{1F9D1}\u{1F3FC}\u200D\u{1F373}","\u{1F9D1}\u{1F3FD}\u200D\u{1F373}","\u{1F9D1}\u{1F3FE}\u200D\u{1F373}","\u{1F9D1}\u{1F3FF}\u200D\u{1F373}","\u{1F468}\u200D\u{1F373}","\u{1F468}\u{1F3FB}\u200D\u{1F373}","\u{1F468}\u{1F3FC}\u200D\u{1F373}","\u{1F468}\u{1F3FD}\u200D\u{1F373}","\u{1F468}\u{1F3FE}\u200D\u{1F373}","\u{1F468}\u{1F3FF}\u200D\u{1F373}","\u{1F469}\u200D\u{1F373}","\u{1F469}\u{1F3FB}\u200D\u{1F373}","\u{1F469}\u{1F3FC}\u200D\u{1F373}","\u{1F469}\u{1F3FD}\u200D\u{1F373}","\u{1F469}\u{1F3FE}\u200D\u{1F373}","\u{1F469}\u{1F3FF}\u200D\u{1F373}","\u{1F9D1}\u200D\u{1F527}","\u{1F9D1}\u{1F3FB}\u200D\u{1F527}","\u{1F9D1}\u{1F3FC}\u200D\u{1F527}","\u{1F9D1}\u{1F3FD}\u200D\u{1F527}","\u{1F9D1}\u{1F3FE}\u200D\u{1F527}","\u{1F9D1}\u{1F3FF}\u200D\u{1F527}","\u{1F468}\u200D\u{1F527}","\u{1F468}\u{1F3FB}\u200D\u{1F527}","\u{1F468}\u{1F3FC}\u200D\u{1F527}","\u{1F468}\u{1F3FD}\u200D\u{1F527}","\u{1F468}\u{1F3FE}\u200D\u{1F527}","\u{1F468}\u{1F3FF}\u200D\u{1F527}","\u{1F469}\u200D\u{1F527}","\u{1F469}\u{1F3FB}\u200D\u{1F527}","\u{1F469}\u{1F3FC}\u200D\u{1F527}","\u{1F469}\u{1F3FD}\u200D\u{1F527}","\u{1F469}\u{1F3FE}\u200D\u{1F527}","\u{1F469}\u{1F3FF}\u200D\u{1F527}","\u{1F9D1}\u200D\u{1F3ED}","\u{1F9D1}\u{1F3FB}\u200D\u{1F3ED}","\u{1F9D1}\u{1F3FC}\u200D\u{1F3ED}","\u{1F9D1}\u{1F3FD}\u200D\u{1F3ED}","\u{1F9D1}\u{1F3FE}\u200D\u{1F3ED}","\u{1F9D1}\u{1F3FF}\u200D\u{1F3ED}","\u{1F468}\u200D\u{1F3ED}","\u{1F468}\u{1F3FB}\u200D\u{1F3ED}","\u{1F468}\u{1F3FC}\u200D\u{1F3ED}","\u{1F468}\u{1F3FD}\u200D\u{1F3ED}","\u{1F468}\u{1F3FE}\u200D\u{1F3ED}","\u{1F468}\u{1F3FF}\u200D\u{1F3ED}","\u{1F469}\u200D\u{1F3ED}","\u{1F469}\u{1F3FB}\u200D\u{1F3ED}","\u{1F469}\u{1F3FC}\u200D\u{1F3ED}","\u{1F469}\u{1F3FD}\u200D\u{1F3ED}","\u{1F469}\u{1F3FE}\u200D\u{1F3ED}","\u{1F469}\u{1F3FF}\u200D\u{1F3ED}","\u{1F9D1}\u200D\u{1F4BC}","\u{1F9D1}\u{1F3FB}\u200D\u{1F4BC}","\u{1F9D1}\u{1F3FC}\u200D\u{1F4BC}","\u{1F9D1}\u{1F3FD}\u200D\u{1F4BC}","\u{1F9D1}\u{1F3FE}\u200D\u{1F4BC}","\u{1F9D1}\u{1F3FF}\u200D\u{1F4BC}","\u{1F468}\u200D\u{1F4BC}","\u{1F468}\u{1F3FB}\u200D\u{1F4BC}","\u{1F468}\u{1F3FC}\u200D\u{1F4BC}","\u{1F468}\u{1F3FD}\u200D\u{1F4BC}","\u{1F468}\u{1F3FE}\u200D\u{1F4BC}","\u{1F468}\u{1F3FF}\u200D\u{1F4BC}","\u{1F469}\u200D\u{1F4BC}","\u{1F469}\u{1F3FB}\u200D\u{1F4BC}","\u{1F469}\u{1F3FC}\u200D\u{1F4BC}","\u{1F469}\u{1F3FD}\u200D\u{1F4BC}","\u{1F469}\u{1F3FE}\u200D\u{1F4BC}","\u{1F469}\u{1F3FF}\u200D\u{1F4BC}","\u{1F9D1}\u200D\u{1F52C}","\u{1F9D1}\u{1F3FB}\u200D\u{1F52C}","\u{1F9D1}\u{1F3FC}\u200D\u{1F52C}","\u{1F9D1}\u{1F3FD}\u200D\u{1F52C}","\u{1F9D1}\u{1F3FE}\u200D\u{1F52C}","\u{1F9D1}\u{1F3FF}\u200D\u{1F52C}","\u{1F468}\u200D\u{1F52C}","\u{1F468}\u{1F3FB}\u200D\u{1F52C}","\u{1F468}\u{1F3FC}\u200D\u{1F52C}","\u{1F468}\u{1F3FD}\u200D\u{1F52C}","\u{1F468}\u{1F3FE}\u200D\u{1F52C}","\u{1F468}\u{1F3FF}\u200D\u{1F52C}","\u{1F469}\u200D\u{1F52C}","\u{1F469}\u{1F3FB}\u200D\u{1F52C}","\u{1F469}\u{1F3FC}\u200D\u{1F52C}","\u{1F469}\u{1F3FD}\u200D\u{1F52C}","\u{1F469}\u{1F3FE}\u200D\u{1F52C}","\u{1F469}\u{1F3FF}\u200D\u{1F52C}","\u{1F9D1}\u200D\u{1F4BB}","\u{1F9D1}\u{1F3FB}\u200D\u{1F4BB}","\u{1F9D1}\u{1F3FC}\u200D\u{1F4BB}","\u{1F9D1}\u{1F3FD}\u200D\u{1F4BB}","\u{1F9D1}\u{1F3FE}\u200D\u{1F4BB}","\u{1F9D1}\u{1F3FF}\u200D\u{1F4BB}","\u{1F468}\u200D\u{1F4BB}","\u{1F468}\u{1F3FB}\u200D\u{1F4BB}","\u{1F468}\u{1F3FC}\u200D\u{1F4BB}","\u{1F468}\u{1F3FD}\u200D\u{1F4BB}","\u{1F468}\u{1F3FE}\u200D\u{1F4BB}","\u{1F468}\u{1F3FF}\u200D\u{1F4BB}","\u{1F469}\u200D\u{1F4BB}","\u{1F469}\u{1F3FB}\u200D\u{1F4BB}","\u{1F469}\u{1F3FC}\u200D\u{1F4BB}","\u{1F469}\u{1F3FD}\u200D\u{1F4BB}","\u{1F469}\u{1F3FE}\u200D\u{1F4BB}","\u{1F469}\u{1F3FF}\u200D\u{1F4BB}","\u{1F9D1}\u200D\u{1F3A4}","\u{1F9D1}\u{1F3FB}\u200D\u{1F3A4}","\u{1F9D1}\u{1F3FC}\u200D\u{1F3A4}","\u{1F9D1}\u{1F3FD}\u200D\u{1F3A4}","\u{1F9D1}\u{1F3FE}\u200D\u{1F3A4}","\u{1F9D1}\u{1F3FF}\u200D\u{1F3A4}","\u{1F468}\u200D\u{1F3A4}","\u{1F468}\u{1F3FB}\u200D\u{1F3A4}","\u{1F468}\u{1F3FC}\u200D\u{1F3A4}","\u{1F468}\u{1F3FD}\u200D\u{1F3A4}","\u{1F468}\u{1F3FE}\u200D\u{1F3A4}","\u{1F468}\u{1F3FF}\u200D\u{1F3A4}","\u{1F469}\u200D\u{1F3A4}","\u{1F469}\u{1F3FB}\u200D\u{1F3A4}","\u{1F469}\u{1F3FC}\u200D\u{1F3A4}","\u{1F469}\u{1F3FD}\u200D\u{1F3A4}","\u{1F469}\u{1F3FE}\u200D\u{1F3A4}","\u{1F469}\u{1F3FF}\u200D\u{1F3A4}","\u{1F9D1}\u200D\u{1F3A8}","\u{1F9D1}\u{1F3FB}\u200D\u{1F3A8}","\u{1F9D1}\u{1F3FC}\u200D\u{1F3A8}","\u{1F9D1}\u{1F3FD}\u200D\u{1F3A8}","\u{1F9D1}\u{1F3FE}\u200D\u{1F3A8}","\u{1F9D1}\u{1F3FF}\u200D\u{1F3A8}","\u{1F468}\u200D\u{1F3A8}","\u{1F468}\u{1F3FB}\u200D\u{1F3A8}","\u{1F468}\u{1F3FC}\u200D\u{1F3A8}","\u{1F468}\u{1F3FD}\u200D\u{1F3A8}","\u{1F468}\u{1F3FE}\u200D\u{1F3A8}","\u{1F468}\u{1F3FF}\u200D\u{1F3A8}","\u{1F469}\u200D\u{1F3A8}","\u{1F469}\u{1F3FB}\u200D\u{1F3A8}","\u{1F469}\u{1F3FC}\u200D\u{1F3A8}","\u{1F469}\u{1F3FD}\u200D\u{1F3A8}","\u{1F469}\u{1F3FE}\u200D\u{1F3A8}","\u{1F469}\u{1F3FF}\u200D\u{1F3A8}","\u{1F9D1}\u200D\u2708\uFE0F","\u{1F9D1}\u{1F3FB}\u200D\u2708\uFE0F","\u{1F9D1}\u{1F3FC}\u200D\u2708\uFE0F","\u{1F9D1}\u{1F3FD}\u200D\u2708\uFE0F","\u{1F9D1}\u{1F3FE}\u200D\u2708\uFE0F","\u{1F9D1}\u{1F3FF}\u200D\u2708\uFE0F","\u{1F468}\u200D\u2708\uFE0F","\u{1F468}\u{1F3FB}\u200D\u2708\uFE0F","\u{1F468}\u{1F3FC}\u200D\u2708\uFE0F","\u{1F468}\u{1F3FD}\u200D\u2708\uFE0F","\u{1F468}\u{1F3FE}\u200D\u2708\uFE0F","\u{1F468}\u{1F3FF}\u200D\u2708\uFE0F","\u{1F469}\u200D\u2708\uFE0F","\u{1F469}\u{1F3FB}\u200D\u2708\uFE0F","\u{1F469}\u{1F3FC}\u200D\u2708\uFE0F","\u{1F469}\u{1F3FD}\u200D\u2708\uFE0F","\u{1F469}\u{1F3FE}\u200D\u2708\uFE0F","\u{1F469}\u{1F3FF}\u200D\u2708\uFE0F","\u{1F9D1}\u200D\u{1F680}","\u{1F9D1}\u{1F3FB}\u200D\u{1F680}","\u{1F9D1}\u{1F3FC}\u200D\u{1F680}","\u{1F9D1}\u{1F3FD}\u200D\u{1F680}","\u{1F9D1}\u{1F3FE}\u200D\u{1F680}","\u{1F9D1}\u{1F3FF}\u200D\u{1F680}","\u{1F468}\u200D\u{1F680}","\u{1F468}\u{1F3FB}\u200D\u{1F680}","\u{1F468}\u{1F3FC}\u200D\u{1F680}","\u{1F468}\u{1F3FD}\u200D\u{1F680}","\u{1F468}\u{1F3FE}\u200D\u{1F680}","\u{1F468}\u{1F3FF}\u200D\u{1F680}","\u{1F469}\u200D\u{1F680}","\u{1F469}\u{1F3FB}\u200D\u{1F680}","\u{1F469}\u{1F3FC}\u200D\u{1F680}","\u{1F469}\u{1F3FD}\u200D\u{1F680}","\u{1F469}\u{1F3FE}\u200D\u{1F680}","\u{1F469}\u{1F3FF}\u200D\u{1F680}","\u{1F9D1}\u200D\u{1F692}","\u{1F9D1}\u{1F3FB}\u200D\u{1F692}","\u{1F9D1}\u{1F3FC}\u200D\u{1F692}","\u{1F9D1}\u{1F3FD}\u200D\u{1F692}","\u{1F9D1}\u{1F3FE}\u200D\u{1F692}","\u{1F9D1}\u{1F3FF}\u200D\u{1F692}","\u{1F468}\u200D\u{1F692}","\u{1F468}\u{1F3FB}\u200D\u{1F692}","\u{1F468}\u{1F3FC}\u200D\u{1F692}","\u{1F468}\u{1F3FD}\u200D\u{1F692}","\u{1F468}\u{1F3FE}\u200D\u{1F692}","\u{1F468}\u{1F3FF}\u200D\u{1F692}","\u{1F469}\u200D\u{1F692}","\u{1F469}\u{1F3FB}\u200D\u{1F692}","\u{1F469}\u{1F3FC}\u200D\u{1F692}","\u{1F469}\u{1F3FD}\u200D\u{1F692}","\u{1F469}\u{1F3FE}\u200D\u{1F692}","\u{1F469}\u{1F3FF}\u200D\u{1F692}","\u{1F46E}","\u{1F46E}\u{1F3FB}","\u{1F46E}\u{1F3FC}","\u{1F46E}\u{1F3FD}","\u{1F46E}\u{1F3FE}","\u{1F46E}\u{1F3FF}","\u{1F46E}\u200D\u2642\uFE0F","\u{1F46E}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F46E}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F46E}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F46E}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F46E}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F46E}\u200D\u2640\uFE0F","\u{1F46E}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F46E}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F46E}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F46E}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F46E}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F575}\uFE0F","\u{1F575}\u{1F3FB}","\u{1F575}\u{1F3FC}","\u{1F575}\u{1F3FD}","\u{1F575}\u{1F3FE}","\u{1F575}\u{1F3FF}","\u{1F575}\uFE0F\u200D\u2642\uFE0F","\u{1F575}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F575}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F575}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F575}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F575}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F575}\uFE0F\u200D\u2640\uFE0F","\u{1F575}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F575}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F575}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F575}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F575}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F482}","\u{1F482}\u{1F3FB}","\u{1F482}\u{1F3FC}","\u{1F482}\u{1F3FD}","\u{1F482}\u{1F3FE}","\u{1F482}\u{1F3FF}","\u{1F482}\u200D\u2642\uFE0F","\u{1F482}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F482}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F482}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F482}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F482}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F482}\u200D\u2640\uFE0F","\u{1F482}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F482}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F482}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F482}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F482}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F977}","\u{1F977}\u{1F3FB}","\u{1F977}\u{1F3FC}","\u{1F977}\u{1F3FD}","\u{1F977}\u{1F3FE}","\u{1F977}\u{1F3FF}","\u{1F477}","\u{1F477}\u{1F3FB}","\u{1F477}\u{1F3FC}","\u{1F477}\u{1F3FD}","\u{1F477}\u{1F3FE}","\u{1F477}\u{1F3FF}","\u{1F477}\u200D\u2642\uFE0F","\u{1F477}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F477}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F477}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F477}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F477}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F477}\u200D\u2640\uFE0F","\u{1F477}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F477}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F477}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F477}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F477}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F934}","\u{1F934}\u{1F3FB}","\u{1F934}\u{1F3FC}","\u{1F934}\u{1F3FD}","\u{1F934}\u{1F3FE}","\u{1F934}\u{1F3FF}","\u{1F478}","\u{1F478}\u{1F3FB}","\u{1F478}\u{1F3FC}","\u{1F478}\u{1F3FD}","\u{1F478}\u{1F3FE}","\u{1F478}\u{1F3FF}","\u{1F473}","\u{1F473}\u{1F3FB}","\u{1F473}\u{1F3FC}","\u{1F473}\u{1F3FD}","\u{1F473}\u{1F3FE}","\u{1F473}\u{1F3FF}","\u{1F473}\u200D\u2642\uFE0F","\u{1F473}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F473}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F473}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F473}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F473}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F473}\u200D\u2640\uFE0F","\u{1F473}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F473}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F473}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F473}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F473}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F472}","\u{1F472}\u{1F3FB}","\u{1F472}\u{1F3FC}","\u{1F472}\u{1F3FD}","\u{1F472}\u{1F3FE}","\u{1F472}\u{1F3FF}","\u{1F9D5}","\u{1F9D5}\u{1F3FB}","\u{1F9D5}\u{1F3FC}","\u{1F9D5}\u{1F3FD}","\u{1F9D5}\u{1F3FE}","\u{1F9D5}\u{1F3FF}","\u{1F935}","\u{1F935}\u{1F3FB}","\u{1F935}\u{1F3FC}","\u{1F935}\u{1F3FD}","\u{1F935}\u{1F3FE}","\u{1F935}\u{1F3FF}","\u{1F935}\u200D\u2642\uFE0F","\u{1F935}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F935}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F935}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F935}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F935}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F935}\u200D\u2640\uFE0F","\u{1F935}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F935}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F935}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F935}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F935}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F470}","\u{1F470}\u{1F3FB}","\u{1F470}\u{1F3FC}","\u{1F470}\u{1F3FD}","\u{1F470}\u{1F3FE}","\u{1F470}\u{1F3FF}","\u{1F470}\u200D\u2642\uFE0F","\u{1F470}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F470}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F470}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F470}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F470}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F470}\u200D\u2640\uFE0F","\u{1F470}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F470}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F470}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F470}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F470}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F930}","\u{1F930}\u{1F3FB}","\u{1F930}\u{1F3FC}","\u{1F930}\u{1F3FD}","\u{1F930}\u{1F3FE}","\u{1F930}\u{1F3FF}","\u{1F931}","\u{1F931}\u{1F3FB}","\u{1F931}\u{1F3FC}","\u{1F931}\u{1F3FD}","\u{1F931}\u{1F3FE}","\u{1F931}\u{1F3FF}","\u{1F469}\u200D\u{1F37C}","\u{1F469}\u{1F3FB}\u200D\u{1F37C}","\u{1F469}\u{1F3FC}\u200D\u{1F37C}","\u{1F469}\u{1F3FD}\u200D\u{1F37C}","\u{1F469}\u{1F3FE}\u200D\u{1F37C}","\u{1F469}\u{1F3FF}\u200D\u{1F37C}","\u{1F468}\u200D\u{1F37C}","\u{1F468}\u{1F3FB}\u200D\u{1F37C}","\u{1F468}\u{1F3FC}\u200D\u{1F37C}","\u{1F468}\u{1F3FD}\u200D\u{1F37C}","\u{1F468}\u{1F3FE}\u200D\u{1F37C}","\u{1F468}\u{1F3FF}\u200D\u{1F37C}","\u{1F9D1}\u200D\u{1F37C}","\u{1F9D1}\u{1F3FB}\u200D\u{1F37C}","\u{1F9D1}\u{1F3FC}\u200D\u{1F37C}","\u{1F9D1}\u{1F3FD}\u200D\u{1F37C}","\u{1F9D1}\u{1F3FE}\u200D\u{1F37C}","\u{1F9D1}\u{1F3FF}\u200D\u{1F37C}","\u{1F47C}","\u{1F47C}\u{1F3FB}","\u{1F47C}\u{1F3FC}","\u{1F47C}\u{1F3FD}","\u{1F47C}\u{1F3FE}","\u{1F47C}\u{1F3FF}","\u{1F385}","\u{1F385}\u{1F3FB}","\u{1F385}\u{1F3FC}","\u{1F385}\u{1F3FD}","\u{1F385}\u{1F3FE}","\u{1F385}\u{1F3FF}","\u{1F936}","\u{1F936}\u{1F3FB}","\u{1F936}\u{1F3FC}","\u{1F936}\u{1F3FD}","\u{1F936}\u{1F3FE}","\u{1F936}\u{1F3FF}","\u{1F9D1}\u200D\u{1F384}","\u{1F9D1}\u{1F3FB}\u200D\u{1F384}","\u{1F9D1}\u{1F3FC}\u200D\u{1F384}","\u{1F9D1}\u{1F3FD}\u200D\u{1F384}","\u{1F9D1}\u{1F3FE}\u200D\u{1F384}","\u{1F9D1}\u{1F3FF}\u200D\u{1F384}","\u{1F9B8}","\u{1F9B8}\u{1F3FB}","\u{1F9B8}\u{1F3FC}","\u{1F9B8}\u{1F3FD}","\u{1F9B8}\u{1F3FE}","\u{1F9B8}\u{1F3FF}","\u{1F9B8}\u200D\u2642\uFE0F","\u{1F9B8}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9B8}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9B8}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9B8}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9B8}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9B8}\u200D\u2640\uFE0F","\u{1F9B8}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9B8}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9B8}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9B8}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9B8}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9B9}","\u{1F9B9}\u{1F3FB}","\u{1F9B9}\u{1F3FC}","\u{1F9B9}\u{1F3FD}","\u{1F9B9}\u{1F3FE}","\u{1F9B9}\u{1F3FF}","\u{1F9B9}\u200D\u2642\uFE0F","\u{1F9B9}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9B9}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9B9}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9B9}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9B9}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9B9}\u200D\u2640\uFE0F","\u{1F9B9}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9B9}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9B9}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9B9}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9B9}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9D9}","\u{1F9D9}\u{1F3FB}","\u{1F9D9}\u{1F3FC}","\u{1F9D9}\u{1F3FD}","\u{1F9D9}\u{1F3FE}","\u{1F9D9}\u{1F3FF}","\u{1F9D9}\u200D\u2642\uFE0F","\u{1F9D9}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9D9}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9D9}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9D9}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9D9}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9D9}\u200D\u2640\uFE0F","\u{1F9D9}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9D9}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9D9}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9D9}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9D9}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9DA}","\u{1F9DA}\u{1F3FB}","\u{1F9DA}\u{1F3FC}","\u{1F9DA}\u{1F3FD}","\u{1F9DA}\u{1F3FE}","\u{1F9DA}\u{1F3FF}","\u{1F9DA}\u200D\u2642\uFE0F","\u{1F9DA}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9DA}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9DA}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9DA}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9DA}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9DA}\u200D\u2640\uFE0F","\u{1F9DA}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9DA}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9DA}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9DA}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9DA}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9DB}","\u{1F9DB}\u{1F3FB}","\u{1F9DB}\u{1F3FC}","\u{1F9DB}\u{1F3FD}","\u{1F9DB}\u{1F3FE}","\u{1F9DB}\u{1F3FF}","\u{1F9DB}\u200D\u2642\uFE0F","\u{1F9DB}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9DB}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9DB}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9DB}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9DB}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9DB}\u200D\u2640\uFE0F","\u{1F9DB}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9DB}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9DB}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9DB}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9DB}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9DC}","\u{1F9DC}\u{1F3FB}","\u{1F9DC}\u{1F3FC}","\u{1F9DC}\u{1F3FD}","\u{1F9DC}\u{1F3FE}","\u{1F9DC}\u{1F3FF}","\u{1F9DC}\u200D\u2642\uFE0F","\u{1F9DC}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9DC}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9DC}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9DC}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9DC}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9DC}\u200D\u2640\uFE0F","\u{1F9DC}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9DC}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9DC}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9DC}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9DC}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9DD}","\u{1F9DD}\u{1F3FB}","\u{1F9DD}\u{1F3FC}","\u{1F9DD}\u{1F3FD}","\u{1F9DD}\u{1F3FE}","\u{1F9DD}\u{1F3FF}","\u{1F9DD}\u200D\u2642\uFE0F","\u{1F9DD}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9DD}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9DD}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9DD}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9DD}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9DD}\u200D\u2640\uFE0F","\u{1F9DD}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9DD}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9DD}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9DD}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9DD}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9DE}","\u{1F9DE}\u200D\u2642\uFE0F","\u{1F9DE}\u200D\u2640\uFE0F","\u{1F9DF}","\u{1F9DF}\u200D\u2642\uFE0F","\u{1F9DF}\u200D\u2640\uFE0F","\u{1F486}","\u{1F486}\u{1F3FB}","\u{1F486}\u{1F3FC}","\u{1F486}\u{1F3FD}","\u{1F486}\u{1F3FE}","\u{1F486}\u{1F3FF}","\u{1F486}\u200D\u2642\uFE0F","\u{1F486}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F486}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F486}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F486}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F486}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F486}\u200D\u2640\uFE0F","\u{1F486}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F486}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F486}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F486}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F486}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F487}","\u{1F487}\u{1F3FB}","\u{1F487}\u{1F3FC}","\u{1F487}\u{1F3FD}","\u{1F487}\u{1F3FE}","\u{1F487}\u{1F3FF}","\u{1F487}\u200D\u2642\uFE0F","\u{1F487}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F487}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F487}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F487}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F487}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F487}\u200D\u2640\uFE0F","\u{1F487}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F487}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F487}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F487}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F487}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F6B6}","\u{1F6B6}\u{1F3FB}","\u{1F6B6}\u{1F3FC}","\u{1F6B6}\u{1F3FD}","\u{1F6B6}\u{1F3FE}","\u{1F6B6}\u{1F3FF}","\u{1F6B6}\u200D\u2642\uFE0F","\u{1F6B6}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F6B6}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F6B6}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F6B6}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F6B6}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F6B6}\u200D\u2640\uFE0F","\u{1F6B6}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F6B6}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F6B6}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F6B6}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F6B6}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9CD}","\u{1F9CD}\u{1F3FB}","\u{1F9CD}\u{1F3FC}","\u{1F9CD}\u{1F3FD}","\u{1F9CD}\u{1F3FE}","\u{1F9CD}\u{1F3FF}","\u{1F9CD}\u200D\u2642\uFE0F","\u{1F9CD}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9CD}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9CD}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9CD}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9CD}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9CD}\u200D\u2640\uFE0F","\u{1F9CD}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9CD}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9CD}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9CD}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9CD}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9CE}","\u{1F9CE}\u{1F3FB}","\u{1F9CE}\u{1F3FC}","\u{1F9CE}\u{1F3FD}","\u{1F9CE}\u{1F3FE}","\u{1F9CE}\u{1F3FF}","\u{1F9CE}\u200D\u2642\uFE0F","\u{1F9CE}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9CE}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9CE}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9CE}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9CE}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9CE}\u200D\u2640\uFE0F","\u{1F9CE}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9CE}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9CE}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9CE}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9CE}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9D1}\u200D\u{1F9AF}","\u{1F9D1}\u{1F3FB}\u200D\u{1F9AF}","\u{1F9D1}\u{1F3FC}\u200D\u{1F9AF}","\u{1F9D1}\u{1F3FD}\u200D\u{1F9AF}","\u{1F9D1}\u{1F3FE}\u200D\u{1F9AF}","\u{1F9D1}\u{1F3FF}\u200D\u{1F9AF}","\u{1F468}\u200D\u{1F9AF}","\u{1F468}\u{1F3FB}\u200D\u{1F9AF}","\u{1F468}\u{1F3FC}\u200D\u{1F9AF}","\u{1F468}\u{1F3FD}\u200D\u{1F9AF}","\u{1F468}\u{1F3FE}\u200D\u{1F9AF}","\u{1F468}\u{1F3FF}\u200D\u{1F9AF}","\u{1F469}\u200D\u{1F9AF}","\u{1F469}\u{1F3FB}\u200D\u{1F9AF}","\u{1F469}\u{1F3FC}\u200D\u{1F9AF}","\u{1F469}\u{1F3FD}\u200D\u{1F9AF}","\u{1F469}\u{1F3FE}\u200D\u{1F9AF}","\u{1F469}\u{1F3FF}\u200D\u{1F9AF}","\u{1F9D1}\u200D\u{1F9BC}","\u{1F9D1}\u{1F3FB}\u200D\u{1F9BC}","\u{1F9D1}\u{1F3FC}\u200D\u{1F9BC}","\u{1F9D1}\u{1F3FD}\u200D\u{1F9BC}","\u{1F9D1}\u{1F3FE}\u200D\u{1F9BC}","\u{1F9D1}\u{1F3FF}\u200D\u{1F9BC}","\u{1F468}\u200D\u{1F9BC}","\u{1F468}\u{1F3FB}\u200D\u{1F9BC}","\u{1F468}\u{1F3FC}\u200D\u{1F9BC}","\u{1F468}\u{1F3FD}\u200D\u{1F9BC}","\u{1F468}\u{1F3FE}\u200D\u{1F9BC}","\u{1F468}\u{1F3FF}\u200D\u{1F9BC}","\u{1F469}\u200D\u{1F9BC}","\u{1F469}\u{1F3FB}\u200D\u{1F9BC}","\u{1F469}\u{1F3FC}\u200D\u{1F9BC}","\u{1F469}\u{1F3FD}\u200D\u{1F9BC}","\u{1F469}\u{1F3FE}\u200D\u{1F9BC}","\u{1F469}\u{1F3FF}\u200D\u{1F9BC}","\u{1F9D1}\u200D\u{1F9BD}","\u{1F9D1}\u{1F3FB}\u200D\u{1F9BD}","\u{1F9D1}\u{1F3FC}\u200D\u{1F9BD}","\u{1F9D1}\u{1F3FD}\u200D\u{1F9BD}","\u{1F9D1}\u{1F3FE}\u200D\u{1F9BD}","\u{1F9D1}\u{1F3FF}\u200D\u{1F9BD}","\u{1F468}\u200D\u{1F9BD}","\u{1F468}\u{1F3FB}\u200D\u{1F9BD}","\u{1F468}\u{1F3FC}\u200D\u{1F9BD}","\u{1F468}\u{1F3FD}\u200D\u{1F9BD}","\u{1F468}\u{1F3FE}\u200D\u{1F9BD}","\u{1F468}\u{1F3FF}\u200D\u{1F9BD}","\u{1F469}\u200D\u{1F9BD}","\u{1F469}\u{1F3FB}\u200D\u{1F9BD}","\u{1F469}\u{1F3FC}\u200D\u{1F9BD}","\u{1F469}\u{1F3FD}\u200D\u{1F9BD}","\u{1F469}\u{1F3FE}\u200D\u{1F9BD}","\u{1F469}\u{1F3FF}\u200D\u{1F9BD}","\u{1F3C3}","\u{1F3C3}\u{1F3FB}","\u{1F3C3}\u{1F3FC}","\u{1F3C3}\u{1F3FD}","\u{1F3C3}\u{1F3FE}","\u{1F3C3}\u{1F3FF}","\u{1F3C3}\u200D\u2642\uFE0F","\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F3C3}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F3C3}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F3C3}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F3C3}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F3C3}\u200D\u2640\uFE0F","\u{1F3C3}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F3C3}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F3C3}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F3C3}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F3C3}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F483}","\u{1F483}\u{1F3FB}","\u{1F483}\u{1F3FC}","\u{1F483}\u{1F3FD}","\u{1F483}\u{1F3FE}","\u{1F483}\u{1F3FF}","\u{1F57A}","\u{1F57A}\u{1F3FB}","\u{1F57A}\u{1F3FC}","\u{1F57A}\u{1F3FD}","\u{1F57A}\u{1F3FE}","\u{1F57A}\u{1F3FF}","\u{1F574}\uFE0F","\u{1F574}\u{1F3FB}","\u{1F574}\u{1F3FC}","\u{1F574}\u{1F3FD}","\u{1F574}\u{1F3FE}","\u{1F574}\u{1F3FF}","\u{1F46F}","\u{1F46F}\u200D\u2642\uFE0F","\u{1F46F}\u200D\u2640\uFE0F","\u{1F9D6}","\u{1F9D6}\u{1F3FB}","\u{1F9D6}\u{1F3FC}","\u{1F9D6}\u{1F3FD}","\u{1F9D6}\u{1F3FE}","\u{1F9D6}\u{1F3FF}","\u{1F9D6}\u200D\u2642\uFE0F","\u{1F9D6}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9D6}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9D6}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9D6}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9D6}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9D6}\u200D\u2640\uFE0F","\u{1F9D6}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9D6}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9D6}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9D6}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9D6}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9D7}","\u{1F9D7}\u{1F3FB}","\u{1F9D7}\u{1F3FC}","\u{1F9D7}\u{1F3FD}","\u{1F9D7}\u{1F3FE}","\u{1F9D7}\u{1F3FF}","\u{1F9D7}\u200D\u2642\uFE0F","\u{1F9D7}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9D7}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9D7}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9D7}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9D7}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9D7}\u200D\u2640\uFE0F","\u{1F9D7}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9D7}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9D7}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9D7}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9D7}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F93A}","\u{1F3C7}","\u{1F3C7}\u{1F3FB}","\u{1F3C7}\u{1F3FC}","\u{1F3C7}\u{1F3FD}","\u{1F3C7}\u{1F3FE}","\u{1F3C7}\u{1F3FF}","\u26F7\uFE0F","\u{1F3C2}","\u{1F3C2}\u{1F3FB}","\u{1F3C2}\u{1F3FC}","\u{1F3C2}\u{1F3FD}","\u{1F3C2}\u{1F3FE}","\u{1F3C2}\u{1F3FF}","\u{1F3CC}\uFE0F","\u{1F3CC}\u{1F3FB}","\u{1F3CC}\u{1F3FC}","\u{1F3CC}\u{1F3FD}","\u{1F3CC}\u{1F3FE}","\u{1F3CC}\u{1F3FF}","\u{1F3CC}\uFE0F\u200D\u2642\uFE0F","\u{1F3CC}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F3CC}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F3CC}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F3CC}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F3CC}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F3CC}\uFE0F\u200D\u2640\uFE0F","\u{1F3CC}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F3CC}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F3CC}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F3CC}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F3CC}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F3C4}","\u{1F3C4}\u{1F3FB}","\u{1F3C4}\u{1F3FC}","\u{1F3C4}\u{1F3FD}","\u{1F3C4}\u{1F3FE}","\u{1F3C4}\u{1F3FF}","\u{1F3C4}\u200D\u2642\uFE0F","\u{1F3C4}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F3C4}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F3C4}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F3C4}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F3C4}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F3C4}\u200D\u2640\uFE0F","\u{1F3C4}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F3C4}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F3C4}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F3C4}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F3C4}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F6A3}","\u{1F6A3}\u{1F3FB}","\u{1F6A3}\u{1F3FC}","\u{1F6A3}\u{1F3FD}","\u{1F6A3}\u{1F3FE}","\u{1F6A3}\u{1F3FF}","\u{1F6A3}\u200D\u2642\uFE0F","\u{1F6A3}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F6A3}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F6A3}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F6A3}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F6A3}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F6A3}\u200D\u2640\uFE0F","\u{1F6A3}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F6A3}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F6A3}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F6A3}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F6A3}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F3CA}","\u{1F3CA}\u{1F3FB}","\u{1F3CA}\u{1F3FC}","\u{1F3CA}\u{1F3FD}","\u{1F3CA}\u{1F3FE}","\u{1F3CA}\u{1F3FF}","\u{1F3CA}\u200D\u2642\uFE0F","\u{1F3CA}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F3CA}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F3CA}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F3CA}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F3CA}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F3CA}\u200D\u2640\uFE0F","\u{1F3CA}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F3CA}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F3CA}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F3CA}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F3CA}\u{1F3FF}\u200D\u2640\uFE0F","\u26F9\uFE0F","\u26F9\u{1F3FB}","\u26F9\u{1F3FC}","\u26F9\u{1F3FD}","\u26F9\u{1F3FE}","\u26F9\u{1F3FF}","\u26F9\uFE0F\u200D\u2642\uFE0F","\u26F9\u{1F3FB}\u200D\u2642\uFE0F","\u26F9\u{1F3FC}\u200D\u2642\uFE0F","\u26F9\u{1F3FD}\u200D\u2642\uFE0F","\u26F9\u{1F3FE}\u200D\u2642\uFE0F","\u26F9\u{1F3FF}\u200D\u2642\uFE0F","\u26F9\uFE0F\u200D\u2640\uFE0F","\u26F9\u{1F3FB}\u200D\u2640\uFE0F","\u26F9\u{1F3FC}\u200D\u2640\uFE0F","\u26F9\u{1F3FD}\u200D\u2640\uFE0F","\u26F9\u{1F3FE}\u200D\u2640\uFE0F","\u26F9\u{1F3FF}\u200D\u2640\uFE0F","\u{1F3CB}\uFE0F","\u{1F3CB}\u{1F3FB}","\u{1F3CB}\u{1F3FC}","\u{1F3CB}\u{1F3FD}","\u{1F3CB}\u{1F3FE}","\u{1F3CB}\u{1F3FF}","\u{1F3CB}\uFE0F\u200D\u2642\uFE0F","\u{1F3CB}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F3CB}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F3CB}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F3CB}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F3CB}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F3CB}\uFE0F\u200D\u2640\uFE0F","\u{1F3CB}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F3CB}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F3CB}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F3CB}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F3CB}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F6B4}","\u{1F6B4}\u{1F3FB}","\u{1F6B4}\u{1F3FC}","\u{1F6B4}\u{1F3FD}","\u{1F6B4}\u{1F3FE}","\u{1F6B4}\u{1F3FF}","\u{1F6B4}\u200D\u2642\uFE0F","\u{1F6B4}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F6B4}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F6B4}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F6B4}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F6B4}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F6B4}\u200D\u2640\uFE0F","\u{1F6B4}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F6B4}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F6B4}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F6B4}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F6B4}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F6B5}","\u{1F6B5}\u{1F3FB}","\u{1F6B5}\u{1F3FC}","\u{1F6B5}\u{1F3FD}","\u{1F6B5}\u{1F3FE}","\u{1F6B5}\u{1F3FF}","\u{1F6B5}\u200D\u2642\uFE0F","\u{1F6B5}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F6B5}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F6B5}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F6B5}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F6B5}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F6B5}\u200D\u2640\uFE0F","\u{1F6B5}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F6B5}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F6B5}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F6B5}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F6B5}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F938}","\u{1F938}\u{1F3FB}","\u{1F938}\u{1F3FC}","\u{1F938}\u{1F3FD}","\u{1F938}\u{1F3FE}","\u{1F938}\u{1F3FF}","\u{1F938}\u200D\u2642\uFE0F","\u{1F938}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F938}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F938}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F938}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F938}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F938}\u200D\u2640\uFE0F","\u{1F938}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F938}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F938}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F938}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F938}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F93C}","\u{1F93C}\u200D\u2642\uFE0F","\u{1F93C}\u200D\u2640\uFE0F","\u{1F93D}","\u{1F93D}\u{1F3FB}","\u{1F93D}\u{1F3FC}","\u{1F93D}\u{1F3FD}","\u{1F93D}\u{1F3FE}","\u{1F93D}\u{1F3FF}","\u{1F93D}\u200D\u2642\uFE0F","\u{1F93D}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F93D}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F93D}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F93D}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F93D}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F93D}\u200D\u2640\uFE0F","\u{1F93D}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F93D}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F93D}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F93D}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F93D}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F93E}","\u{1F93E}\u{1F3FB}","\u{1F93E}\u{1F3FC}","\u{1F93E}\u{1F3FD}","\u{1F93E}\u{1F3FE}","\u{1F93E}\u{1F3FF}","\u{1F93E}\u200D\u2642\uFE0F","\u{1F93E}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F93E}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F93E}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F93E}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F93E}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F93E}\u200D\u2640\uFE0F","\u{1F93E}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F93E}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F93E}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F93E}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F93E}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F939}","\u{1F939}\u{1F3FB}","\u{1F939}\u{1F3FC}","\u{1F939}\u{1F3FD}","\u{1F939}\u{1F3FE}","\u{1F939}\u{1F3FF}","\u{1F939}\u200D\u2642\uFE0F","\u{1F939}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F939}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F939}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F939}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F939}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F939}\u200D\u2640\uFE0F","\u{1F939}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F939}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F939}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F939}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F939}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F9D8}","\u{1F9D8}\u{1F3FB}","\u{1F9D8}\u{1F3FC}","\u{1F9D8}\u{1F3FD}","\u{1F9D8}\u{1F3FE}","\u{1F9D8}\u{1F3FF}","\u{1F9D8}\u200D\u2642\uFE0F","\u{1F9D8}\u{1F3FB}\u200D\u2642\uFE0F","\u{1F9D8}\u{1F3FC}\u200D\u2642\uFE0F","\u{1F9D8}\u{1F3FD}\u200D\u2642\uFE0F","\u{1F9D8}\u{1F3FE}\u200D\u2642\uFE0F","\u{1F9D8}\u{1F3FF}\u200D\u2642\uFE0F","\u{1F9D8}\u200D\u2640\uFE0F","\u{1F9D8}\u{1F3FB}\u200D\u2640\uFE0F","\u{1F9D8}\u{1F3FC}\u200D\u2640\uFE0F","\u{1F9D8}\u{1F3FD}\u200D\u2640\uFE0F","\u{1F9D8}\u{1F3FE}\u200D\u2640\uFE0F","\u{1F9D8}\u{1F3FF}\u200D\u2640\uFE0F","\u{1F6C0}","\u{1F6C0}\u{1F3FB}","\u{1F6C0}\u{1F3FC}","\u{1F6C0}\u{1F3FD}","\u{1F6C0}\u{1F3FE}","\u{1F6C0}\u{1F3FF}","\u{1F6CC}","\u{1F6CC}\u{1F3FB}","\u{1F6CC}\u{1F3FC}","\u{1F6CC}\u{1F3FD}","\u{1F6CC}\u{1F3FE}","\u{1F6CC}\u{1F3FF}","\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}","\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}","\u{1F46D}","\u{1F46D}\u{1F3FB}","\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}","\u{1F46D}\u{1F3FC}","\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}","\u{1F46D}\u{1F3FD}","\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}","\u{1F46D}\u{1F3FE}","\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}","\u{1F46D}\u{1F3FF}","\u{1F46B}","\u{1F46B}\u{1F3FB}","\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}","\u{1F46B}\u{1F3FC}","\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}","\u{1F46B}\u{1F3FD}","\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}","\u{1F46B}\u{1F3FE}","\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}","\u{1F46B}\u{1F3FF}","\u{1F46C}","\u{1F46C}\u{1F3FB}","\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}","\u{1F46C}\u{1F3FC}","\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}","\u{1F46C}\u{1F3FD}","\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}","\u{1F46C}\u{1F3FE}","\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}","\u{1F46C}\u{1F3FF}","\u{1F48F}","\u{1F48F}\u{1F3FB}","\u{1F48F}\u{1F3FC}","\u{1F48F}\u{1F3FD}","\u{1F48F}\u{1F3FE}","\u{1F48F}\u{1F3FF}","\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}","\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}","\u{1F491}","\u{1F491}\u{1F3FB}","\u{1F491}\u{1F3FC}","\u{1F491}\u{1F3FD}","\u{1F491}\u{1F3FE}","\u{1F491}\u{1F3FF}","\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}","\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}","\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}","\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}","\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}","\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}","\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}","\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}","\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}","\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}","\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}","\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}","\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}","\u{1F46A}","\u{1F468}\u200D\u{1F469}\u200D\u{1F466}","\u{1F468}\u200D\u{1F469}\u200D\u{1F467}","\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}","\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}","\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}","\u{1F468}\u200D\u{1F468}\u200D\u{1F466}","\u{1F468}\u200D\u{1F468}\u200D\u{1F467}","\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}","\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}","\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}","\u{1F469}\u200D\u{1F469}\u200D\u{1F466}","\u{1F469}\u200D\u{1F469}\u200D\u{1F467}","\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}","\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}","\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}","\u{1F468}\u200D\u{1F466}","\u{1F468}\u200D\u{1F466}\u200D\u{1F466}","\u{1F468}\u200D\u{1F467}","\u{1F468}\u200D\u{1F467}\u200D\u{1F466}","\u{1F468}\u200D\u{1F467}\u200D\u{1F467}","\u{1F469}\u200D\u{1F466}","\u{1F469}\u200D\u{1F466}\u200D\u{1F466}","\u{1F469}\u200D\u{1F467}","\u{1F469}\u200D\u{1F467}\u200D\u{1F466}","\u{1F469}\u200D\u{1F467}\u200D\u{1F467}","\u{1F5E3}\uFE0F","\u{1F464}","\u{1F465}","\u{1FAC2}","\u{1F463}"],nature:["\u{1F435}","\u{1F412}","\u{1F98D}","\u{1F9A7}","\u{1F436}","\u{1F415}","\u{1F9AE}","\u{1F415}\u200D\u{1F9BA}","\u{1F429}","\u{1F43A}","\u{1F98A}","\u{1F99D}","\u{1F431}","\u{1F408}","\u{1F408}\u200D\u2B1B","\u{1F981}","\u{1F42F}","\u{1F405}","\u{1F406}","\u{1F434}","\u{1F40E}","\u{1F984}","\u{1F993}","\u{1F98C}","\u{1F9AC}","\u{1F42E}","\u{1F402}","\u{1F403}","\u{1F404}","\u{1F437}","\u{1F416}","\u{1F417}","\u{1F43D}","\u{1F40F}","\u{1F411}","\u{1F410}","\u{1F42A}","\u{1F42B}","\u{1F999}","\u{1F992}","\u{1F418}","\u{1F9A3}","\u{1F98F}","\u{1F99B}","\u{1F42D}","\u{1F401}","\u{1F400}","\u{1F439}","\u{1F430}","\u{1F407}","\u{1F43F}\uFE0F","\u{1F9AB}","\u{1F994}","\u{1F987}","\u{1F43B}","\u{1F43B}\u200D\u2744\uFE0F","\u{1F428}","\u{1F43C}","\u{1F9A5}","\u{1F9A6}","\u{1F9A8}","\u{1F998}","\u{1F9A1}","\u{1F43E}","\u{1F983}","\u{1F414}","\u{1F413}","\u{1F423}","\u{1F424}","\u{1F425}","\u{1F426}","\u{1F427}","\u{1F54A}\uFE0F","\u{1F985}","\u{1F986}","\u{1F9A2}","\u{1F989}","\u{1F9A4}","\u{1FAB6}","\u{1F9A9}","\u{1F99A}","\u{1F99C}","\u{1F438}","\u{1F40A}","\u{1F422}","\u{1F98E}","\u{1F40D}","\u{1F432}","\u{1F409}","\u{1F995}","\u{1F996}","\u{1F433}","\u{1F40B}","\u{1F42C}","\u{1F9AD}","\u{1F41F}","\u{1F420}","\u{1F421}","\u{1F988}","\u{1F419}","\u{1F41A}","\u{1F40C}","\u{1F98B}","\u{1F41B}","\u{1F41C}","\u{1F41D}","\u{1FAB2}","\u{1F41E}","\u{1F997}","\u{1FAB3}","\u{1F577}\uFE0F","\u{1F578}\uFE0F","\u{1F982}","\u{1F99F}","\u{1FAB0}","\u{1FAB1}","\u{1F9A0}","\u{1F490}","\u{1F338}","\u{1F4AE}","\u{1F3F5}\uFE0F","\u{1F339}","\u{1F940}","\u{1F33A}","\u{1F33B}","\u{1F33C}","\u{1F337}","\u{1F331}","\u{1FAB4}","\u{1F332}","\u{1F333}","\u{1F334}","\u{1F335}","\u{1F33E}","\u{1F33F}","\u2618\uFE0F","\u{1F340}","\u{1F341}","\u{1F342}","\u{1F343}"],food:["\u{1F347}","\u{1F348}","\u{1F349}","\u{1F34A}","\u{1F34B}","\u{1F34C}","\u{1F34D}","\u{1F96D}","\u{1F34E}","\u{1F34F}","\u{1F350}","\u{1F351}","\u{1F352}","\u{1F353}","\u{1FAD0}","\u{1F95D}","\u{1F345}","\u{1FAD2}","\u{1F965}","\u{1F951}","\u{1F346}","\u{1F954}","\u{1F955}","\u{1F33D}","\u{1F336}\uFE0F","\u{1FAD1}","\u{1F952}","\u{1F96C}","\u{1F966}","\u{1F9C4}","\u{1F9C5}","\u{1F344}","\u{1F95C}","\u{1F330}","\u{1F35E}","\u{1F950}","\u{1F956}","\u{1FAD3}","\u{1F968}","\u{1F96F}","\u{1F95E}","\u{1F9C7}","\u{1F9C0}","\u{1F356}","\u{1F357}","\u{1F969}","\u{1F953}","\u{1F354}","\u{1F35F}","\u{1F355}","\u{1F32D}","\u{1F96A}","\u{1F32E}","\u{1F32F}","\u{1FAD4}","\u{1F959}","\u{1F9C6}","\u{1F95A}","\u{1F373}","\u{1F958}","\u{1F372}","\u{1FAD5}","\u{1F963}","\u{1F957}","\u{1F37F}","\u{1F9C8}","\u{1F9C2}","\u{1F96B}","\u{1F371}","\u{1F358}","\u{1F359}","\u{1F35A}","\u{1F35B}","\u{1F35C}","\u{1F35D}","\u{1F360}","\u{1F362}","\u{1F363}","\u{1F364}","\u{1F365}","\u{1F96E}","\u{1F361}","\u{1F95F}","\u{1F960}","\u{1F961}","\u{1F980}","\u{1F99E}","\u{1F990}","\u{1F991}","\u{1F9AA}","\u{1F366}","\u{1F367}","\u{1F368}","\u{1F369}","\u{1F36A}","\u{1F382}","\u{1F370}","\u{1F9C1}","\u{1F967}","\u{1F36B}","\u{1F36C}","\u{1F36D}","\u{1F36E}","\u{1F36F}","\u{1F37C}","\u{1F95B}","\u2615","\u{1FAD6}","\u{1F375}","\u{1F376}","\u{1F37E}","\u{1F377}","\u{1F378}","\u{1F379}","\u{1F37A}","\u{1F37B}","\u{1F942}","\u{1F943}","\u{1F964}","\u{1F9CB}","\u{1F9C3}","\u{1F9C9}","\u{1F9CA}","\u{1F962}","\u{1F37D}\uFE0F","\u{1F374}","\u{1F944}","\u{1F52A}","\u{1F3FA}"],travel:["\u{1F30D}","\u{1F30E}","\u{1F30F}","\u{1F310}","\u{1F5FA}\uFE0F","\u{1F5FE}","\u{1F9ED}","\u{1F3D4}\uFE0F","\u26F0\uFE0F","\u{1F30B}","\u{1F5FB}","\u{1F3D5}\uFE0F","\u{1F3D6}\uFE0F","\u{1F3DC}\uFE0F","\u{1F3DD}\uFE0F","\u{1F3DE}\uFE0F","\u{1F3DF}\uFE0F","\u{1F3DB}\uFE0F","\u{1F3D7}\uFE0F","\u{1F9F1}","\u{1FAA8}","\u{1FAB5}","\u{1F6D6}","\u{1F3D8}\uFE0F","\u{1F3DA}\uFE0F","\u{1F3E0}","\u{1F3E1}","\u{1F3E2}","\u{1F3E3}","\u{1F3E4}","\u{1F3E5}","\u{1F3E6}","\u{1F3E8}","\u{1F3E9}","\u{1F3EA}","\u{1F3EB}","\u{1F3EC}","\u{1F3ED}","\u{1F3EF}","\u{1F3F0}","\u{1F492}","\u{1F5FC}","\u{1F5FD}","\u26EA","\u{1F54C}","\u{1F6D5}","\u{1F54D}","\u26E9\uFE0F","\u{1F54B}","\u26F2","\u26FA","\u{1F301}","\u{1F303}","\u{1F3D9}\uFE0F","\u{1F304}","\u{1F305}","\u{1F306}","\u{1F307}","\u{1F309}","\u2668\uFE0F","\u{1F3A0}","\u{1F3A1}","\u{1F3A2}","\u{1F488}","\u{1F3AA}","\u{1F682}","\u{1F683}","\u{1F684}","\u{1F685}","\u{1F686}","\u{1F687}","\u{1F688}","\u{1F689}","\u{1F68A}","\u{1F69D}","\u{1F69E}","\u{1F68B}","\u{1F68C}","\u{1F68D}","\u{1F68E}","\u{1F690}","\u{1F691}","\u{1F692}","\u{1F693}","\u{1F694}","\u{1F695}","\u{1F696}","\u{1F697}","\u{1F698}","\u{1F699}","\u{1F6FB}","\u{1F69A}","\u{1F69B}","\u{1F69C}","\u{1F3CE}\uFE0F","\u{1F3CD}\uFE0F","\u{1F6F5}","\u{1F9BD}","\u{1F9BC}","\u{1F6FA}","\u{1F6B2}","\u{1F6F4}","\u{1F6F9}","\u{1F6FC}","\u{1F68F}","\u{1F6E3}\uFE0F","\u{1F6E4}\uFE0F","\u{1F6E2}\uFE0F","\u26FD","\u{1F6A8}","\u{1F6A5}","\u{1F6A6}","\u{1F6D1}","\u{1F6A7}","\u2693","\u26F5","\u{1F6F6}","\u{1F6A4}","\u{1F6F3}\uFE0F","\u26F4\uFE0F","\u{1F6E5}\uFE0F","\u{1F6A2}","\u2708\uFE0F","\u{1F6E9}\uFE0F","\u{1F6EB}","\u{1F6EC}","\u{1FA82}","\u{1F4BA}","\u{1F681}","\u{1F69F}","\u{1F6A0}","\u{1F6A1}","\u{1F6F0}\uFE0F","\u{1F680}","\u{1F6F8}","\u{1F6CE}\uFE0F","\u{1F9F3}","\u231B","\u23F3","\u231A","\u23F0","\u23F1\uFE0F","\u23F2\uFE0F","\u{1F570}\uFE0F","\u{1F55B}","\u{1F567}","\u{1F550}","\u{1F55C}","\u{1F551}","\u{1F55D}","\u{1F552}","\u{1F55E}","\u{1F553}","\u{1F55F}","\u{1F554}","\u{1F560}","\u{1F555}","\u{1F561}","\u{1F556}","\u{1F562}","\u{1F557}","\u{1F563}","\u{1F558}","\u{1F564}","\u{1F559}","\u{1F565}","\u{1F55A}","\u{1F566}","\u{1F311}","\u{1F312}","\u{1F313}","\u{1F314}","\u{1F315}","\u{1F316}","\u{1F317}","\u{1F318}","\u{1F319}","\u{1F31A}","\u{1F31B}","\u{1F31C}","\u{1F321}\uFE0F","\u2600\uFE0F","\u{1F31D}","\u{1F31E}","\u{1FA90}","\u2B50","\u{1F31F}","\u{1F320}","\u{1F30C}","\u2601\uFE0F","\u26C5","\u26C8\uFE0F","\u{1F324}\uFE0F","\u{1F325}\uFE0F","\u{1F326}\uFE0F","\u{1F327}\uFE0F","\u{1F328}\uFE0F","\u{1F329}\uFE0F","\u{1F32A}\uFE0F","\u{1F32B}\uFE0F","\u{1F32C}\uFE0F","\u{1F300}","\u{1F308}","\u{1F302}","\u2602\uFE0F","\u2614","\u26F1\uFE0F","\u26A1","\u2744\uFE0F","\u2603\uFE0F","\u26C4","\u2604\uFE0F","\u{1F525}","\u{1F4A7}","\u{1F30A}"],activity:["\u{1F383}","\u{1F384}","\u{1F386}","\u{1F387}","\u{1F9E8}","\u2728","\u{1F388}","\u{1F389}","\u{1F38A}","\u{1F38B}","\u{1F38D}","\u{1F38E}","\u{1F38F}","\u{1F390}","\u{1F391}","\u{1F9E7}","\u{1F380}","\u{1F381}","\u{1F397}\uFE0F","\u{1F39F}\uFE0F","\u{1F3AB}","\u{1F396}\uFE0F","\u{1F3C6}","\u{1F3C5}","\u{1F947}","\u{1F948}","\u{1F949}","\u26BD","\u26BE","\u{1F94E}","\u{1F3C0}","\u{1F3D0}","\u{1F3C8}","\u{1F3C9}","\u{1F3BE}","\u{1F94F}","\u{1F3B3}","\u{1F3CF}","\u{1F3D1}","\u{1F3D2}","\u{1F94D}","\u{1F3D3}","\u{1F3F8}","\u{1F94A}","\u{1F94B}","\u{1F945}","\u26F3","\u26F8\uFE0F","\u{1F3A3}","\u{1F93F}","\u{1F3BD}","\u{1F3BF}","\u{1F6F7}","\u{1F94C}","\u{1F3AF}","\u{1FA80}","\u{1FA81}","\u{1F3B1}","\u{1F52E}","\u{1FA84}","\u{1F9FF}","\u{1F3AE}","\u{1F579}\uFE0F","\u{1F3B0}","\u{1F3B2}","\u{1F9E9}","\u{1F9F8}","\u{1FA85}","\u{1FA86}","\u2660\uFE0F","\u2665\uFE0F","\u2666\uFE0F","\u2663\uFE0F","\u265F\uFE0F","\u{1F0CF}","\u{1F004}","\u{1F3B4}","\u{1F3AD}","\u{1F5BC}\uFE0F","\u{1F3A8}","\u{1F9F5}","\u{1FAA1}","\u{1F9F6}","\u{1FAA2}"],object:["\u{1F453}","\u{1F576}\uFE0F","\u{1F97D}","\u{1F97C}","\u{1F9BA}","\u{1F454}","\u{1F455}","\u{1F456}","\u{1F9E3}","\u{1F9E4}","\u{1F9E5}","\u{1F9E6}","\u{1F457}","\u{1F458}","\u{1F97B}","\u{1FA71}","\u{1FA72}","\u{1FA73}","\u{1F459}","\u{1F45A}","\u{1F45B}","\u{1F45C}","\u{1F45D}","\u{1F6CD}\uFE0F","\u{1F392}","\u{1FA74}","\u{1F45E}","\u{1F45F}","\u{1F97E}","\u{1F97F}","\u{1F460}","\u{1F461}","\u{1FA70}","\u{1F462}","\u{1F451}","\u{1F452}","\u{1F3A9}","\u{1F393}","\u{1F9E2}","\u{1FA96}","\u26D1\uFE0F","\u{1F4FF}","\u{1F484}","\u{1F48D}","\u{1F48E}","\u{1F507}","\u{1F508}","\u{1F509}","\u{1F50A}","\u{1F4E2}","\u{1F4E3}","\u{1F4EF}","\u{1F514}","\u{1F515}","\u{1F3BC}","\u{1F3B5}","\u{1F3B6}","\u{1F399}\uFE0F","\u{1F39A}\uFE0F","\u{1F39B}\uFE0F","\u{1F3A4}","\u{1F3A7}","\u{1F4FB}","\u{1F3B7}","\u{1FA97}","\u{1F3B8}","\u{1F3B9}","\u{1F3BA}","\u{1F3BB}","\u{1FA95}","\u{1F941}","\u{1FA98}","\u{1F4F1}","\u{1F4F2}","\u260E\uFE0F","\u{1F4DE}","\u{1F4DF}","\u{1F4E0}","\u{1F50B}","\u{1F50C}","\u{1F4BB}","\u{1F5A5}\uFE0F","\u{1F5A8}\uFE0F","\u2328\uFE0F","\u{1F5B1}\uFE0F","\u{1F5B2}\uFE0F","\u{1F4BD}","\u{1F4BE}","\u{1F4BF}","\u{1F4C0}","\u{1F9EE}","\u{1F3A5}","\u{1F39E}\uFE0F","\u{1F4FD}\uFE0F","\u{1F3AC}","\u{1F4FA}","\u{1F4F7}","\u{1F4F8}","\u{1F4F9}","\u{1F4FC}","\u{1F50D}","\u{1F50E}","\u{1F56F}\uFE0F","\u{1F4A1}","\u{1F526}","\u{1F3EE}","\u{1FA94}","\u{1F4D4}","\u{1F4D5}","\u{1F4D6}","\u{1F4D7}","\u{1F4D8}","\u{1F4D9}","\u{1F4DA}","\u{1F4D3}","\u{1F4D2}","\u{1F4C3}","\u{1F4DC}","\u{1F4C4}","\u{1F4F0}","\u{1F5DE}\uFE0F","\u{1F4D1}","\u{1F516}","\u{1F3F7}\uFE0F","\u{1F4B0}","\u{1FA99}","\u{1F4B4}","\u{1F4B5}","\u{1F4B6}","\u{1F4B7}","\u{1F4B8}","\u{1F4B3}","\u{1F9FE}","\u{1F4B9}","\u2709\uFE0F","\u{1F4E7}","\u{1F4E8}","\u{1F4E9}","\u{1F4E4}","\u{1F4E5}","\u{1F4E6}","\u{1F4EB}","\u{1F4EA}","\u{1F4EC}","\u{1F4ED}","\u{1F4EE}","\u{1F5F3}\uFE0F","\u270F\uFE0F","\u2712\uFE0F","\u{1F58B}\uFE0F","\u{1F58A}\uFE0F","\u{1F58C}\uFE0F","\u{1F58D}\uFE0F","\u{1F4DD}","\u{1F4BC}","\u{1F4C1}","\u{1F4C2}","\u{1F5C2}\uFE0F","\u{1F4C5}","\u{1F4C6}","\u{1F5D2}\uFE0F","\u{1F5D3}\uFE0F","\u{1F4C7}","\u{1F4C8}","\u{1F4C9}","\u{1F4CA}","\u{1F4CB}","\u{1F4CC}","\u{1F4CD}","\u{1F4CE}","\u{1F587}\uFE0F","\u{1F4CF}","\u{1F4D0}","\u2702\uFE0F","\u{1F5C3}\uFE0F","\u{1F5C4}\uFE0F","\u{1F5D1}\uFE0F","\u{1F512}","\u{1F513}","\u{1F50F}","\u{1F510}","\u{1F511}","\u{1F5DD}\uFE0F","\u{1F528}","\u{1FA93}","\u26CF\uFE0F","\u2692\uFE0F","\u{1F6E0}\uFE0F","\u{1F5E1}\uFE0F","\u2694\uFE0F","\u{1F52B}","\u{1FA83}","\u{1F3F9}","\u{1F6E1}\uFE0F","\u{1FA9A}","\u{1F527}","\u{1FA9B}","\u{1F529}","\u2699\uFE0F","\u{1F5DC}\uFE0F","\u2696\uFE0F","\u{1F9AF}","\u{1F517}","\u26D3\uFE0F","\u{1FA9D}","\u{1F9F0}","\u{1F9F2}","\u{1FA9C}","\u2697\uFE0F","\u{1F9EA}","\u{1F9EB}","\u{1F9EC}","\u{1F52C}","\u{1F52D}","\u{1F4E1}","\u{1F489}","\u{1FA78}","\u{1F48A}","\u{1FA79}","\u{1FA7A}","\u{1F6AA}","\u{1F6D7}","\u{1FA9E}","\u{1FA9F}","\u{1F6CF}\uFE0F","\u{1F6CB}\uFE0F","\u{1FA91}","\u{1F6BD}","\u{1FAA0}","\u{1F6BF}","\u{1F6C1}","\u{1FAA4}","\u{1FA92}","\u{1F9F4}","\u{1F9F7}","\u{1F9F9}","\u{1F9FA}","\u{1F9FB}","\u{1FAA3}","\u{1F9FC}","\u{1FAA5}","\u{1F9FD}","\u{1F9EF}","\u{1F6D2}","\u{1F6AC}","\u26B0\uFE0F","\u{1FAA6}","\u26B1\uFE0F","\u{1F5FF}","\u{1FAA7}"],symbol:["\u{1F3E7}","\u{1F6AE}","\u{1F6B0}","\u267F","\u{1F6B9}","\u{1F6BA}","\u{1F6BB}","\u{1F6BC}","\u{1F6BE}","\u{1F6C2}","\u{1F6C3}","\u{1F6C4}","\u{1F6C5}","\u26A0\uFE0F","\u{1F6B8}","\u26D4","\u{1F6AB}","\u{1F6B3}","\u{1F6AD}","\u{1F6AF}","\u{1F6B1}","\u{1F6B7}","\u{1F4F5}","\u{1F51E}","\u2622\uFE0F","\u2623\uFE0F","\u2B06\uFE0F","\u2197\uFE0F","\u27A1\uFE0F","\u2198\uFE0F","\u2B07\uFE0F","\u2199\uFE0F","\u2B05\uFE0F","\u2196\uFE0F","\u2195\uFE0F","\u2194\uFE0F","\u21A9\uFE0F","\u21AA\uFE0F","\u2934\uFE0F","\u2935\uFE0F","\u{1F503}","\u{1F504}","\u{1F519}","\u{1F51A}","\u{1F51B}","\u{1F51C}","\u{1F51D}","\u{1F6D0}","\u269B\uFE0F","\u{1F549}\uFE0F","\u2721\uFE0F","\u2638\uFE0F","\u262F\uFE0F","\u271D\uFE0F","\u2626\uFE0F","\u262A\uFE0F","\u262E\uFE0F","\u{1F54E}","\u{1F52F}","\u2648","\u2649","\u264A","\u264B","\u264C","\u264D","\u264E","\u264F","\u2650","\u2651","\u2652","\u2653","\u26CE","\u{1F500}","\u{1F501}","\u{1F502}","\u25B6\uFE0F","\u23E9","\u23ED\uFE0F","\u23EF\uFE0F","\u25C0\uFE0F","\u23EA","\u23EE\uFE0F","\u{1F53C}","\u23EB","\u{1F53D}","\u23EC","\u23F8\uFE0F","\u23F9\uFE0F","\u23FA\uFE0F","\u23CF\uFE0F","\u{1F3A6}","\u{1F505}","\u{1F506}","\u{1F4F6}","\u{1F4F3}","\u{1F4F4}","\u2640\uFE0F","\u2642\uFE0F","\u26A7\uFE0F","\u2716\uFE0F","\u2795","\u2796","\u2797","\u267E\uFE0F","\u203C\uFE0F","\u2049\uFE0F","\u2753","\u2754","\u2755","\u2757","\u3030\uFE0F","\u{1F4B1}","\u{1F4B2}","\u2695\uFE0F","\u267B\uFE0F","\u269C\uFE0F","\u{1F531}","\u{1F4DB}","\u{1F530}","\u2B55","\u2705","\u2611\uFE0F","\u2714\uFE0F","\u274C","\u274E","\u27B0","\u27BF","\u303D\uFE0F","\u2733\uFE0F","\u2734\uFE0F","\u2747\uFE0F","\xA9\uFE0F","\xAE\uFE0F","\u2122\uFE0F","#\uFE0F\u20E3","*\uFE0F\u20E3","0\uFE0F\u20E3","1\uFE0F\u20E3","2\uFE0F\u20E3","3\uFE0F\u20E3","4\uFE0F\u20E3","5\uFE0F\u20E3","6\uFE0F\u20E3","7\uFE0F\u20E3","8\uFE0F\u20E3","9\uFE0F\u20E3","\u{1F51F}","\u{1F520}","\u{1F521}","\u{1F522}","\u{1F523}","\u{1F524}","\u{1F170}\uFE0F","\u{1F18E}","\u{1F171}\uFE0F","\u{1F191}","\u{1F192}","\u{1F193}","\u2139\uFE0F","\u{1F194}","\u24C2\uFE0F","\u{1F195}","\u{1F196}","\u{1F17E}\uFE0F","\u{1F197}","\u{1F17F}\uFE0F","\u{1F198}","\u{1F199}","\u{1F19A}","\u{1F201}","\u{1F202}\uFE0F","\u{1F237}\uFE0F","\u{1F236}","\u{1F22F}","\u{1F250}","\u{1F239}","\u{1F21A}","\u{1F232}","\u{1F251}","\u{1F238}","\u{1F234}","\u{1F233}","\u3297\uFE0F","\u3299\uFE0F","\u{1F23A}","\u{1F235}","\u{1F534}","\u{1F7E0}","\u{1F7E1}","\u{1F7E2}","\u{1F535}","\u{1F7E3}","\u{1F7E4}","\u26AB","\u26AA","\u{1F7E5}","\u{1F7E7}","\u{1F7E8}","\u{1F7E9}","\u{1F7E6}","\u{1F7EA}","\u{1F7EB}","\u2B1B","\u2B1C","\u25FC\uFE0F","\u25FB\uFE0F","\u25FE","\u25FD","\u25AA\uFE0F","\u25AB\uFE0F","\u{1F536}","\u{1F537}","\u{1F538}","\u{1F539}","\u{1F53A}","\u{1F53B}","\u{1F4A0}","\u{1F518}","\u{1F533}","\u{1F532}"],flag:["\u{1F3C1}","\u{1F6A9}","\u{1F38C}","\u{1F3F4}","\u{1F3F3}\uFE0F","\u{1F3F3}\uFE0F\u200D\u{1F308}","\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F","\u{1F3F4}\u200D\u2620\uFE0F","\u{1F1E6}\u{1F1E8}","\u{1F1E6}\u{1F1E9}","\u{1F1E6}\u{1F1EA}","\u{1F1E6}\u{1F1EB}","\u{1F1E6}\u{1F1EC}","\u{1F1E6}\u{1F1EE}","\u{1F1E6}\u{1F1F1}","\u{1F1E6}\u{1F1F2}","\u{1F1E6}\u{1F1F4}","\u{1F1E6}\u{1F1F6}","\u{1F1E6}\u{1F1F7}","\u{1F1E6}\u{1F1F8}","\u{1F1E6}\u{1F1F9}","\u{1F1E6}\u{1F1FA}","\u{1F1E6}\u{1F1FC}","\u{1F1E6}\u{1F1FD}","\u{1F1E6}\u{1F1FF}","\u{1F1E7}\u{1F1E6}","\u{1F1E7}\u{1F1E7}","\u{1F1E7}\u{1F1E9}","\u{1F1E7}\u{1F1EA}","\u{1F1E7}\u{1F1EB}","\u{1F1E7}\u{1F1EC}","\u{1F1E7}\u{1F1ED}","\u{1F1E7}\u{1F1EE}","\u{1F1E7}\u{1F1EF}","\u{1F1E7}\u{1F1F1}","\u{1F1E7}\u{1F1F2}","\u{1F1E7}\u{1F1F3}","\u{1F1E7}\u{1F1F4}","\u{1F1E7}\u{1F1F6}","\u{1F1E7}\u{1F1F7}","\u{1F1E7}\u{1F1F8}","\u{1F1E7}\u{1F1F9}","\u{1F1E7}\u{1F1FB}","\u{1F1E7}\u{1F1FC}","\u{1F1E7}\u{1F1FE}","\u{1F1E7}\u{1F1FF}","\u{1F1E8}\u{1F1E6}","\u{1F1E8}\u{1F1E8}","\u{1F1E8}\u{1F1E9}","\u{1F1E8}\u{1F1EB}","\u{1F1E8}\u{1F1EC}","\u{1F1E8}\u{1F1ED}","\u{1F1E8}\u{1F1EE}","\u{1F1E8}\u{1F1F0}","\u{1F1E8}\u{1F1F1}","\u{1F1E8}\u{1F1F2}","\u{1F1E8}\u{1F1F3}","\u{1F1E8}\u{1F1F4}","\u{1F1E8}\u{1F1F5}","\u{1F1E8}\u{1F1F7}","\u{1F1E8}\u{1F1FA}","\u{1F1E8}\u{1F1FB}","\u{1F1E8}\u{1F1FC}","\u{1F1E8}\u{1F1FD}","\u{1F1E8}\u{1F1FE}","\u{1F1E8}\u{1F1FF}","\u{1F1E9}\u{1F1EA}","\u{1F1E9}\u{1F1EC}","\u{1F1E9}\u{1F1EF}","\u{1F1E9}\u{1F1F0}","\u{1F1E9}\u{1F1F2}","\u{1F1E9}\u{1F1F4}","\u{1F1E9}\u{1F1FF}","\u{1F1EA}\u{1F1E6}","\u{1F1EA}\u{1F1E8}","\u{1F1EA}\u{1F1EA}","\u{1F1EA}\u{1F1EC}","\u{1F1EA}\u{1F1ED}","\u{1F1EA}\u{1F1F7}","\u{1F1EA}\u{1F1F8}","\u{1F1EA}\u{1F1F9}","\u{1F1EA}\u{1F1FA}","\u{1F1EB}\u{1F1EE}","\u{1F1EB}\u{1F1EF}","\u{1F1EB}\u{1F1F0}","\u{1F1EB}\u{1F1F2}","\u{1F1EB}\u{1F1F4}","\u{1F1EB}\u{1F1F7}","\u{1F1EC}\u{1F1E6}","\u{1F1EC}\u{1F1E7}","\u{1F1EC}\u{1F1E9}","\u{1F1EC}\u{1F1EA}","\u{1F1EC}\u{1F1EB}","\u{1F1EC}\u{1F1EC}","\u{1F1EC}\u{1F1ED}","\u{1F1EC}\u{1F1EE}","\u{1F1EC}\u{1F1F1}","\u{1F1EC}\u{1F1F2}","\u{1F1EC}\u{1F1F3}","\u{1F1EC}\u{1F1F5}","\u{1F1EC}\u{1F1F6}","\u{1F1EC}\u{1F1F7}","\u{1F1EC}\u{1F1F8}","\u{1F1EC}\u{1F1F9}","\u{1F1EC}\u{1F1FA}","\u{1F1EC}\u{1F1FC}","\u{1F1EC}\u{1F1FE}","\u{1F1ED}\u{1F1F0}","\u{1F1ED}\u{1F1F2}","\u{1F1ED}\u{1F1F3}","\u{1F1ED}\u{1F1F7}","\u{1F1ED}\u{1F1F9}","\u{1F1ED}\u{1F1FA}","\u{1F1EE}\u{1F1E8}","\u{1F1EE}\u{1F1E9}","\u{1F1EE}\u{1F1EA}","\u{1F1EE}\u{1F1F1}","\u{1F1EE}\u{1F1F2}","\u{1F1EE}\u{1F1F3}","\u{1F1EE}\u{1F1F4}","\u{1F1EE}\u{1F1F6}","\u{1F1EE}\u{1F1F7}","\u{1F1EE}\u{1F1F8}","\u{1F1EE}\u{1F1F9}","\u{1F1EF}\u{1F1EA}","\u{1F1EF}\u{1F1F2}","\u{1F1EF}\u{1F1F4}","\u{1F1EF}\u{1F1F5}","\u{1F1F0}\u{1F1EA}","\u{1F1F0}\u{1F1EC}","\u{1F1F0}\u{1F1ED}","\u{1F1F0}\u{1F1EE}","\u{1F1F0}\u{1F1F2}","\u{1F1F0}\u{1F1F3}","\u{1F1F0}\u{1F1F5}","\u{1F1F0}\u{1F1F7}","\u{1F1F0}\u{1F1FC}","\u{1F1F0}\u{1F1FE}","\u{1F1F0}\u{1F1FF}","\u{1F1F1}\u{1F1E6}","\u{1F1F1}\u{1F1E7}","\u{1F1F1}\u{1F1E8}","\u{1F1F1}\u{1F1EE}","\u{1F1F1}\u{1F1F0}","\u{1F1F1}\u{1F1F7}","\u{1F1F1}\u{1F1F8}","\u{1F1F1}\u{1F1F9}","\u{1F1F1}\u{1F1FA}","\u{1F1F1}\u{1F1FB}","\u{1F1F1}\u{1F1FE}","\u{1F1F2}\u{1F1E6}","\u{1F1F2}\u{1F1E8}","\u{1F1F2}\u{1F1E9}","\u{1F1F2}\u{1F1EA}","\u{1F1F2}\u{1F1EB}","\u{1F1F2}\u{1F1EC}","\u{1F1F2}\u{1F1ED}","\u{1F1F2}\u{1F1F0}","\u{1F1F2}\u{1F1F1}","\u{1F1F2}\u{1F1F2}","\u{1F1F2}\u{1F1F3}","\u{1F1F2}\u{1F1F4}","\u{1F1F2}\u{1F1F5}","\u{1F1F2}\u{1F1F6}","\u{1F1F2}\u{1F1F7}","\u{1F1F2}\u{1F1F8}","\u{1F1F2}\u{1F1F9}","\u{1F1F2}\u{1F1FA}","\u{1F1F2}\u{1F1FB}","\u{1F1F2}\u{1F1FC}","\u{1F1F2}\u{1F1FD}","\u{1F1F2}\u{1F1FE}","\u{1F1F2}\u{1F1FF}","\u{1F1F3}\u{1F1E6}","\u{1F1F3}\u{1F1E8}","\u{1F1F3}\u{1F1EA}","\u{1F1F3}\u{1F1EB}","\u{1F1F3}\u{1F1EC}","\u{1F1F3}\u{1F1EE}","\u{1F1F3}\u{1F1F1}","\u{1F1F3}\u{1F1F4}","\u{1F1F3}\u{1F1F5}","\u{1F1F3}\u{1F1F7}","\u{1F1F3}\u{1F1FA}","\u{1F1F3}\u{1F1FF}","\u{1F1F4}\u{1F1F2}","\u{1F1F5}\u{1F1E6}","\u{1F1F5}\u{1F1EA}","\u{1F1F5}\u{1F1EB}","\u{1F1F5}\u{1F1EC}","\u{1F1F5}\u{1F1ED}","\u{1F1F5}\u{1F1F0}","\u{1F1F5}\u{1F1F1}","\u{1F1F5}\u{1F1F2}","\u{1F1F5}\u{1F1F3}","\u{1F1F5}\u{1F1F7}","\u{1F1F5}\u{1F1F8}","\u{1F1F5}\u{1F1F9}","\u{1F1F5}\u{1F1FC}","\u{1F1F5}\u{1F1FE}","\u{1F1F6}\u{1F1E6}","\u{1F1F7}\u{1F1EA}","\u{1F1F7}\u{1F1F4}","\u{1F1F7}\u{1F1F8}","\u{1F1F7}\u{1F1FA}","\u{1F1F7}\u{1F1FC}","\u{1F1F8}\u{1F1E6}","\u{1F1F8}\u{1F1E7}","\u{1F1F8}\u{1F1E8}","\u{1F1F8}\u{1F1E9}","\u{1F1F8}\u{1F1EA}","\u{1F1F8}\u{1F1EC}","\u{1F1F8}\u{1F1ED}","\u{1F1F8}\u{1F1EE}","\u{1F1F8}\u{1F1EF}","\u{1F1F8}\u{1F1F0}","\u{1F1F8}\u{1F1F1}","\u{1F1F8}\u{1F1F2}","\u{1F1F8}\u{1F1F3}","\u{1F1F8}\u{1F1F4}","\u{1F1F8}\u{1F1F7}","\u{1F1F8}\u{1F1F8}","\u{1F1F8}\u{1F1F9}","\u{1F1F8}\u{1F1FB}","\u{1F1F8}\u{1F1FD}","\u{1F1F8}\u{1F1FE}","\u{1F1F8}\u{1F1FF}","\u{1F1F9}\u{1F1E6}","\u{1F1F9}\u{1F1E8}","\u{1F1F9}\u{1F1E9}","\u{1F1F9}\u{1F1EB}","\u{1F1F9}\u{1F1EC}","\u{1F1F9}\u{1F1ED}","\u{1F1F9}\u{1F1EF}","\u{1F1F9}\u{1F1F0}","\u{1F1F9}\u{1F1F1}","\u{1F1F9}\u{1F1F2}","\u{1F1F9}\u{1F1F3}","\u{1F1F9}\u{1F1F4}","\u{1F1F9}\u{1F1F7}","\u{1F1F9}\u{1F1F9}","\u{1F1F9}\u{1F1FB}","\u{1F1F9}\u{1F1FC}","\u{1F1F9}\u{1F1FF}","\u{1F1FA}\u{1F1E6}","\u{1F1FA}\u{1F1EC}","\u{1F1FA}\u{1F1F2}","\u{1F1FA}\u{1F1F3}","\u{1F1FA}\u{1F1F8}","\u{1F1FA}\u{1F1FE}","\u{1F1FA}\u{1F1FF}","\u{1F1FB}\u{1F1E6}","\u{1F1FB}\u{1F1E8}","\u{1F1FB}\u{1F1EA}","\u{1F1FB}\u{1F1EC}","\u{1F1FB}\u{1F1EE}","\u{1F1FB}\u{1F1F3}","\u{1F1FB}\u{1F1FA}","\u{1F1FC}\u{1F1EB}","\u{1F1FC}\u{1F1F8}","\u{1F1FD}\u{1F1F0}","\u{1F1FE}\u{1F1EA}","\u{1F1FE}\u{1F1F9}","\u{1F1FF}\u{1F1E6}","\u{1F1FF}\u{1F1F2}","\u{1F1FF}\u{1F1FC}"]};var Xe={informational:[100,101,102,103],success:[200,201,202,203,204,205,206,207,208,226],redirection:[300,301,302,303,304,305,306,307,308],clientError:[400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,421,422,423,424,425,426,428,429,431,451],serverError:[500,501,502,503,504,505,506,507,508,510,511]};var Qe=["HS256","HS384","HS512","RS256","RS384","RS512","ES256","ES384","ES512","PS256","PS384","PS512","none"];var jt={emoji:Je,http_status_code:Xe,jwt_algorithm:Qe},qe=jt;var et=[{alpha2:"AD",alpha3:"AND",numeric:"020"},{alpha2:"AE",alpha3:"ARE",numeric:"784"},{alpha2:"AF",alpha3:"AFG",numeric:"004"},{alpha2:"AG",alpha3:"ATG",numeric:"028"},{alpha2:"AI",alpha3:"AIA",numeric:"660"},{alpha2:"AL",alpha3:"ALB",numeric:"008"},{alpha2:"AM",alpha3:"ARM",numeric:"051"},{alpha2:"AO",alpha3:"AGO",numeric:"024"},{alpha2:"AQ",alpha3:"ATA",numeric:"010"},{alpha2:"AR",alpha3:"ARG",numeric:"032"},{alpha2:"AS",alpha3:"ASM",numeric:"016"},{alpha2:"AT",alpha3:"AUT",numeric:"040"},{alpha2:"AU",alpha3:"AUS",numeric:"036"},{alpha2:"AW",alpha3:"ABW",numeric:"533"},{alpha2:"AX",alpha3:"ALA",numeric:"248"},{alpha2:"AZ",alpha3:"AZE",numeric:"031"},{alpha2:"BA",alpha3:"BIH",numeric:"070"},{alpha2:"BB",alpha3:"BRB",numeric:"052"},{alpha2:"BD",alpha3:"BGD",numeric:"050"},{alpha2:"BE",alpha3:"BEL",numeric:"056"},{alpha2:"BF",alpha3:"BFA",numeric:"854"},{alpha2:"BG",alpha3:"BGR",numeric:"100"},{alpha2:"BH",alpha3:"BHR",numeric:"048"},{alpha2:"BI",alpha3:"BDI",numeric:"108"},{alpha2:"BJ",alpha3:"BEN",numeric:"204"},{alpha2:"BL",alpha3:"BLM",numeric:"652"},{alpha2:"BM",alpha3:"BMU",numeric:"060"},{alpha2:"BN",alpha3:"BRN",numeric:"096"},{alpha2:"BO",alpha3:"BOL",numeric:"068"},{alpha2:"BQ",alpha3:"BES",numeric:"535"},{alpha2:"BR",alpha3:"BRA",numeric:"076"},{alpha2:"BS",alpha3:"BHS",numeric:"044"},{alpha2:"BT",alpha3:"BTN",numeric:"064"},{alpha2:"BV",alpha3:"BVT",numeric:"074"},{alpha2:"BW",alpha3:"BWA",numeric:"072"},{alpha2:"BY",alpha3:"BLR",numeric:"112"},{alpha2:"BZ",alpha3:"BLZ",numeric:"084"},{alpha2:"CA",alpha3:"CAN",numeric:"124"},{alpha2:"CC",alpha3:"CCK",numeric:"166"},{alpha2:"CD",alpha3:"COD",numeric:"180"},{alpha2:"CF",alpha3:"CAF",numeric:"140"},{alpha2:"CG",alpha3:"COG",numeric:"178"},{alpha2:"CH",alpha3:"CHE",numeric:"756"},{alpha2:"CI",alpha3:"CIV",numeric:"384"},{alpha2:"CK",alpha3:"COK",numeric:"184"},{alpha2:"CL",alpha3:"CHL",numeric:"152"},{alpha2:"CM",alpha3:"CMR",numeric:"120"},{alpha2:"CN",alpha3:"CHN",numeric:"156"},{alpha2:"CO",alpha3:"COL",numeric:"170"},{alpha2:"CR",alpha3:"CRI",numeric:"188"},{alpha2:"CU",alpha3:"CUB",numeric:"192"},{alpha2:"CV",alpha3:"CPV",numeric:"132"},{alpha2:"CW",alpha3:"CUW",numeric:"531"},{alpha2:"CX",alpha3:"CXR",numeric:"162"},{alpha2:"CY",alpha3:"CYP",numeric:"196"},{alpha2:"CZ",alpha3:"CZE",numeric:"203"},{alpha2:"DE",alpha3:"DEU",numeric:"276"},{alpha2:"DJ",alpha3:"DJI",numeric:"262"},{alpha2:"DK",alpha3:"DNK",numeric:"208"},{alpha2:"DM",alpha3:"DMA",numeric:"212"},{alpha2:"DO",alpha3:"DOM",numeric:"214"},{alpha2:"DZ",alpha3:"DZA",numeric:"012"},{alpha2:"EC",alpha3:"ECU",numeric:"218"},{alpha2:"EE",alpha3:"EST",numeric:"233"},{alpha2:"EG",alpha3:"EGY",numeric:"818"},{alpha2:"EH",alpha3:"ESH",numeric:"732"},{alpha2:"ER",alpha3:"ERI",numeric:"232"},{alpha2:"ES",alpha3:"ESP",numeric:"724"},{alpha2:"ET",alpha3:"ETH",numeric:"231"},{alpha2:"FI",alpha3:"FIN",numeric:"246"},{alpha2:"FJ",alpha3:"FJI",numeric:"242"},{alpha2:"FK",alpha3:"FLK",numeric:"238"},{alpha2:"FM",alpha3:"FSM",numeric:"583"},{alpha2:"FO",alpha3:"FRO",numeric:"234"},{alpha2:"FR",alpha3:"FRA",numeric:"250"},{alpha2:"GA",alpha3:"GAB",numeric:"266"},{alpha2:"GB",alpha3:"GBR",numeric:"826"},{alpha2:"GD",alpha3:"GRD",numeric:"308"},{alpha2:"GE",alpha3:"GEO",numeric:"268"},{alpha2:"GF",alpha3:"GUF",numeric:"254"},{alpha2:"GG",alpha3:"GGY",numeric:"831"},{alpha2:"GH",alpha3:"GHA",numeric:"288"},{alpha2:"GI",alpha3:"GIB",numeric:"292"},{alpha2:"GL",alpha3:"GRL",numeric:"304"},{alpha2:"GM",alpha3:"GMB",numeric:"270"},{alpha2:"GN",alpha3:"GIN",numeric:"324"},{alpha2:"GP",alpha3:"GLP",numeric:"312"},{alpha2:"GQ",alpha3:"GNQ",numeric:"226"},{alpha2:"GR",alpha3:"GRC",numeric:"300"},{alpha2:"GS",alpha3:"SGS",numeric:"239"},{alpha2:"GT",alpha3:"GTM",numeric:"320"},{alpha2:"GU",alpha3:"GUM",numeric:"316"},{alpha2:"GW",alpha3:"GNB",numeric:"624"},{alpha2:"GY",alpha3:"GUY",numeric:"328"},{alpha2:"HK",alpha3:"HKG",numeric:"344"},{alpha2:"HM",alpha3:"HMD",numeric:"334"},{alpha2:"HN",alpha3:"HND",numeric:"340"},{alpha2:"HR",alpha3:"HRV",numeric:"191"},{alpha2:"HT",alpha3:"HTI",numeric:"332"},{alpha2:"HU",alpha3:"HUN",numeric:"348"},{alpha2:"ID",alpha3:"IDN",numeric:"360"},{alpha2:"IE",alpha3:"IRL",numeric:"372"},{alpha2:"IL",alpha3:"ISR",numeric:"376"},{alpha2:"IM",alpha3:"IMN",numeric:"833"},{alpha2:"IN",alpha3:"IND",numeric:"356"},{alpha2:"IO",alpha3:"IOT",numeric:"086"},{alpha2:"IQ",alpha3:"IRQ",numeric:"368"},{alpha2:"IR",alpha3:"IRN",numeric:"364"},{alpha2:"IS",alpha3:"ISL",numeric:"352"},{alpha2:"IT",alpha3:"ITA",numeric:"380"},{alpha2:"JE",alpha3:"JEY",numeric:"832"},{alpha2:"JM",alpha3:"JAM",numeric:"388"},{alpha2:"JO",alpha3:"JOR",numeric:"400"},{alpha2:"JP",alpha3:"JPN",numeric:"392"},{alpha2:"KE",alpha3:"KEN",numeric:"404"},{alpha2:"KG",alpha3:"KGZ",numeric:"417"},{alpha2:"KH",alpha3:"KHM",numeric:"116"},{alpha2:"KI",alpha3:"KIR",numeric:"296"},{alpha2:"KM",alpha3:"COM",numeric:"174"},{alpha2:"KN",alpha3:"KNA",numeric:"659"},{alpha2:"KP",alpha3:"PRK",numeric:"408"},{alpha2:"KR",alpha3:"KOR",numeric:"410"},{alpha2:"KW",alpha3:"KWT",numeric:"414"},{alpha2:"KY",alpha3:"CYM",numeric:"136"},{alpha2:"KZ",alpha3:"KAZ",numeric:"398"},{alpha2:"LA",alpha3:"LAO",numeric:"418"},{alpha2:"LB",alpha3:"LBN",numeric:"422"},{alpha2:"LC",alpha3:"LCA",numeric:"662"},{alpha2:"LI",alpha3:"LIE",numeric:"438"},{alpha2:"LK",alpha3:"LKA",numeric:"144"},{alpha2:"LR",alpha3:"LBR",numeric:"430"},{alpha2:"LS",alpha3:"LSO",numeric:"426"},{alpha2:"LT",alpha3:"LTU",numeric:"440"},{alpha2:"LU",alpha3:"LUX",numeric:"442"},{alpha2:"LV",alpha3:"LVA",numeric:"428"},{alpha2:"LY",alpha3:"LBY",numeric:"434"},{alpha2:"MA",alpha3:"MAR",numeric:"504"},{alpha2:"MC",alpha3:"MCO",numeric:"492"},{alpha2:"MD",alpha3:"MDA",numeric:"498"},{alpha2:"ME",alpha3:"MNE",numeric:"499"},{alpha2:"MF",alpha3:"MAF",numeric:"663"},{alpha2:"MG",alpha3:"MDG",numeric:"450"},{alpha2:"MH",alpha3:"MHL",numeric:"584"},{alpha2:"MK",alpha3:"MKD",numeric:"807"},{alpha2:"ML",alpha3:"MLI",numeric:"466"},{alpha2:"MM",alpha3:"MMR",numeric:"104"},{alpha2:"MN",alpha3:"MNG",numeric:"496"},{alpha2:"MO",alpha3:"MAC",numeric:"446"},{alpha2:"MP",alpha3:"MNP",numeric:"580"},{alpha2:"MQ",alpha3:"MTQ",numeric:"474"},{alpha2:"MR",alpha3:"MRT",numeric:"478"},{alpha2:"MS",alpha3:"MSR",numeric:"500"},{alpha2:"MT",alpha3:"MLT",numeric:"470"},{alpha2:"MU",alpha3:"MUS",numeric:"480"},{alpha2:"MV",alpha3:"MDV",numeric:"462"},{alpha2:"MW",alpha3:"MWI",numeric:"454"},{alpha2:"MX",alpha3:"MEX",numeric:"484"},{alpha2:"MY",alpha3:"MYS",numeric:"458"},{alpha2:"MZ",alpha3:"MOZ",numeric:"508"},{alpha2:"NA",alpha3:"NAM",numeric:"516"},{alpha2:"NC",alpha3:"NCL",numeric:"540"},{alpha2:"NE",alpha3:"NER",numeric:"562"},{alpha2:"NF",alpha3:"NFK",numeric:"574"},{alpha2:"NG",alpha3:"NGA",numeric:"566"},{alpha2:"NI",alpha3:"NIC",numeric:"558"},{alpha2:"NL",alpha3:"NLD",numeric:"528"},{alpha2:"NO",alpha3:"NOR",numeric:"578"},{alpha2:"NP",alpha3:"NPL",numeric:"524"},{alpha2:"NR",alpha3:"NRU",numeric:"520"},{alpha2:"NU",alpha3:"NIU",numeric:"570"},{alpha2:"NZ",alpha3:"NZL",numeric:"554"},{alpha2:"OM",alpha3:"OMN",numeric:"512"},{alpha2:"PA",alpha3:"PAN",numeric:"591"},{alpha2:"PE",alpha3:"PER",numeric:"604"},{alpha2:"PF",alpha3:"PYF",numeric:"258"},{alpha2:"PG",alpha3:"PNG",numeric:"598"},{alpha2:"PH",alpha3:"PHL",numeric:"608"},{alpha2:"PK",alpha3:"PAK",numeric:"586"},{alpha2:"PL",alpha3:"POL",numeric:"616"},{alpha2:"PM",alpha3:"SPM",numeric:"666"},{alpha2:"PN",alpha3:"PCN",numeric:"612"},{alpha2:"PR",alpha3:"PRI",numeric:"630"},{alpha2:"PS",alpha3:"PSE",numeric:"275"},{alpha2:"PT",alpha3:"PRT",numeric:"620"},{alpha2:"PW",alpha3:"PLW",numeric:"585"},{alpha2:"PY",alpha3:"PRY",numeric:"600"},{alpha2:"QA",alpha3:"QAT",numeric:"634"},{alpha2:"RE",alpha3:"REU",numeric:"638"},{alpha2:"RO",alpha3:"ROU",numeric:"642"},{alpha2:"RS",alpha3:"SRB",numeric:"688"},{alpha2:"RU",alpha3:"RUS",numeric:"643"},{alpha2:"RW",alpha3:"RWA",numeric:"646"},{alpha2:"SA",alpha3:"SAU",numeric:"682"},{alpha2:"SB",alpha3:"SLB",numeric:"090"},{alpha2:"SC",alpha3:"SYC",numeric:"690"},{alpha2:"SD",alpha3:"SDN",numeric:"729"},{alpha2:"SE",alpha3:"SWE",numeric:"752"},{alpha2:"SG",alpha3:"SGP",numeric:"702"},{alpha2:"SH",alpha3:"SHN",numeric:"654"},{alpha2:"SI",alpha3:"SVN",numeric:"705"},{alpha2:"SJ",alpha3:"SJM",numeric:"744"},{alpha2:"SK",alpha3:"SVK",numeric:"703"},{alpha2:"SL",alpha3:"SLE",numeric:"694"},{alpha2:"SM",alpha3:"SMR",numeric:"674"},{alpha2:"SN",alpha3:"SEN",numeric:"686"},{alpha2:"SO",alpha3:"SOM",numeric:"706"},{alpha2:"SR",alpha3:"SUR",numeric:"740"},{alpha2:"SS",alpha3:"SSD",numeric:"728"},{alpha2:"ST",alpha3:"STP",numeric:"678"},{alpha2:"SV",alpha3:"SLV",numeric:"222"},{alpha2:"SX",alpha3:"SXM",numeric:"534"},{alpha2:"SY",alpha3:"SYR",numeric:"760"},{alpha2:"SZ",alpha3:"SWZ",numeric:"748"},{alpha2:"TC",alpha3:"TCA",numeric:"796"},{alpha2:"TD",alpha3:"TCD",numeric:"148"},{alpha2:"TF",alpha3:"ATF",numeric:"260"},{alpha2:"TG",alpha3:"TGO",numeric:"768"},{alpha2:"TH",alpha3:"THA",numeric:"764"},{alpha2:"TJ",alpha3:"TJK",numeric:"762"},{alpha2:"TK",alpha3:"TKL",numeric:"772"},{alpha2:"TL",alpha3:"TLS",numeric:"626"},{alpha2:"TM",alpha3:"TKM",numeric:"795"},{alpha2:"TN",alpha3:"TUN",numeric:"788"},{alpha2:"TO",alpha3:"TON",numeric:"776"},{alpha2:"TR",alpha3:"TUR",numeric:"792"},{alpha2:"TT",alpha3:"TTO",numeric:"780"},{alpha2:"TV",alpha3:"TUV",numeric:"798"},{alpha2:"TW",alpha3:"TWN",numeric:"158"},{alpha2:"TZ",alpha3:"TZA",numeric:"834"},{alpha2:"UA",alpha3:"UKR",numeric:"804"},{alpha2:"UG",alpha3:"UGA",numeric:"800"},{alpha2:"UM",alpha3:"UMI",numeric:"581"},{alpha2:"US",alpha3:"USA",numeric:"840"},{alpha2:"UY",alpha3:"URY",numeric:"858"},{alpha2:"UZ",alpha3:"UZB",numeric:"860"},{alpha2:"VA",alpha3:"VAT",numeric:"336"},{alpha2:"VC",alpha3:"VCT",numeric:"670"},{alpha2:"VE",alpha3:"VEN",numeric:"862"},{alpha2:"VG",alpha3:"VGB",numeric:"092"},{alpha2:"VI",alpha3:"VIR",numeric:"850"},{alpha2:"VN",alpha3:"VNM",numeric:"704"},{alpha2:"VU",alpha3:"VUT",numeric:"548"},{alpha2:"WF",alpha3:"WLF",numeric:"876"},{alpha2:"WS",alpha3:"WSM",numeric:"882"},{alpha2:"YE",alpha3:"YEM",numeric:"887"},{alpha2:"YT",alpha3:"MYT",numeric:"175"},{alpha2:"ZA",alpha3:"ZAF",numeric:"710"},{alpha2:"ZM",alpha3:"ZMB",numeric:"894"},{alpha2:"ZW",alpha3:"ZWE",numeric:"716"}];var tt=he;var Ht={country_code:et,time_zone:tt},rt=Ht;var Vt={title:"Base",code:"base"},nt=Vt;var at=["/Applications","/bin","/boot","/boot/defaults","/dev","/etc","/etc/defaults","/etc/mail","/etc/namedb","/etc/periodic","/etc/ppp","/home","/home/user","/home/user/dir","/lib","/Library","/lost+found","/media","/mnt","/net","/Network","/opt","/opt/bin","/opt/include","/opt/lib","/opt/sbin","/opt/share","/private","/private/tmp","/private/var","/proc","/rescue","/root","/sbin","/selinux","/srv","/sys","/System","/tmp","/Users","/usr","/usr/X11R6","/usr/bin","/usr/include","/usr/lib","/usr/libdata","/usr/libexec","/usr/local/bin","/usr/local/src","/usr/obj","/usr/ports","/usr/sbin","/usr/share","/usr/src","/var","/var/log","/var/mail","/var/spool","/var/tmp","/var/yp"];var it={"application/epub+zip":{extensions:["epub"]},"application/gzip":{extensions:["gz"]},"application/java-archive":{extensions:["jar","war","ear"]},"application/json":{extensions:["json","map"]},"application/ld+json":{extensions:["jsonld"]},"application/msword":{extensions:["doc","dot"]},"application/octet-stream":{extensions:["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/ogg":{extensions:["ogx"]},"application/pdf":{extensions:["pdf"]},"application/rtf":{extensions:["rtf"]},"application/vnd.amazon.ebook":{extensions:["azw"]},"application/vnd.apple.installer+xml":{extensions:["mpkg"]},"application/vnd.mozilla.xul+xml":{extensions:["xul"]},"application/vnd.ms-excel":{extensions:["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-fontobject":{extensions:["eot"]},"application/vnd.ms-powerpoint":{extensions:["ppt","pps","pot"]},"application/vnd.oasis.opendocument.presentation":{extensions:["odp"]},"application/vnd.oasis.opendocument.spreadsheet":{extensions:["ods"]},"application/vnd.oasis.opendocument.text":{extensions:["odt"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{extensions:["pptx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{extensions:["xlsx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{extensions:["docx"]},"application/vnd.rar":{extensions:["rar"]},"application/vnd.visio":{extensions:["vsd","vst","vss","vsw"]},"application/x-7z-compressed":{extensions:["7z"]},"application/x-abiword":{extensions:["abw"]},"application/x-bzip":{extensions:["bz"]},"application/x-bzip2":{extensions:["bz2","boz"]},"application/x-csh":{extensions:["csh"]},"application/x-freearc":{extensions:["arc"]},"application/x-httpd-php":{extensions:["php"]},"application/x-sh":{extensions:["sh"]},"application/x-tar":{extensions:["tar"]},"application/xhtml+xml":{extensions:["xhtml","xht"]},"application/xml":{extensions:["xml","xsl","xsd","rng"]},"application/zip":{extensions:["zip"]},"audio/3gpp":{extensions:["3gpp"]},"audio/3gpp2":{extensions:["3g2"]},"audio/aac":{extensions:["aac"]},"audio/midi":{extensions:["mid","midi","kar","rmi"]},"audio/mpeg":{extensions:["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/ogg":{extensions:["oga","ogg","spx","opus"]},"audio/opus":{extensions:["opus"]},"audio/wav":{extensions:["wav"]},"audio/webm":{extensions:["weba"]},"font/otf":{extensions:["otf"]},"font/ttf":{extensions:["ttf"]},"font/woff":{extensions:["woff"]},"font/woff2":{extensions:["woff2"]},"image/avif":{extensions:["avif"]},"image/bmp":{extensions:["bmp"]},"image/gif":{extensions:["gif"]},"image/jpeg":{extensions:["jpeg","jpg","jpe"]},"image/png":{extensions:["png"]},"image/svg+xml":{extensions:["svg","svgz"]},"image/tiff":{extensions:["tif","tiff"]},"image/vnd.microsoft.icon":{extensions:["ico"]},"image/webp":{extensions:["webp"]},"text/calendar":{extensions:["ics","ifb"]},"text/css":{extensions:["css"]},"text/csv":{extensions:["csv"]},"text/html":{extensions:["html","htm","shtml"]},"text/javascript":{extensions:["js","mjs"]},"text/plain":{extensions:["txt","text","conf","def","list","log","in","ini"]},"video/3gpp":{extensions:["3gp","3gpp"]},"video/3gpp2":{extensions:["3g2"]},"video/mp2t":{extensions:["ts"]},"video/mp4":{extensions:["mp4","mp4v","mpg4"]},"video/mpeg":{extensions:["mpeg","mpg","mpe","m1v","m2v"]},"video/ogg":{extensions:["ogv"]},"video/webm":{extensions:["webm"]},"video/x-msvideo":{extensions:["avi"]}};var zt={directory_path:at,mime_type:it},ot=zt;var Yt={color:Ke,database:ze,date:Ye,hacker:Ze,internet:qe,location:rt,metadata:nt,system:ot},ki=Yt;

var f=new Oe({locale:[ss,ki]});

var lib = {};

var conventions = {};

var hasRequiredConventions;

function requireConventions () {
	if (hasRequiredConventions) return conventions;
	hasRequiredConventions = 1;

	/**
	 * Ponyfill for `Array.prototype.find` which is only available in ES6 runtimes.
	 *
	 * Works with anything that has a `length` property and index access properties,
	 * including NodeList.
	 *
	 * @param {T[] | { length: number; [number]: T }} list
	 * @param {function (item: T, index: number, list:T[]):boolean} predicate
	 * @param {Partial<Pick<ArrayConstructor['prototype'], 'find'>>?} ac
	 * Allows injecting a custom implementation in tests (`Array.prototype` by default).
	 * @returns {T | undefined}
	 * @template {unknown} T
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find
	 */
	function find(list, predicate, ac) {
		if (ac === undefined) {
			ac = Array.prototype;
		}
		if (list && typeof ac.find === 'function') {
			return ac.find.call(list, predicate);
		}
		for (var i = 0; i < list.length; i++) {
			if (hasOwn(list, i)) {
				var item = list[i];
				if (predicate.call(undefined, item, i, list)) {
					return item;
				}
			}
		}
	}

	/**
	 * "Shallow freezes" an object to render it immutable.
	 * Uses `Object.freeze` if available,
	 * otherwise the immutability is only in the type.
	 *
	 * Is used to create "enum like" objects.
	 *
	 * If `Object.getOwnPropertyDescriptors` is available,
	 * a new object with all properties of object but without any prototype is created and returned
	 * after freezing it.
	 *
	 * @param {T} object
	 * The object to freeze.
	 * @param {Pick<ObjectConstructor, 'create' | 'freeze' | 'getOwnPropertyDescriptors'>} [oc=Object]
	 * `Object` by default,
	 * allows to inject custom object constructor for tests.
	 * @returns {Readonly<T>}
	 * @template {Object} T
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
	 * @prettierignore
	 */
	function freeze(object, oc) {
		if (oc === undefined) {
			oc = Object;
		}
		if (oc && typeof oc.getOwnPropertyDescriptors === 'function') {
			object = oc.create(null, oc.getOwnPropertyDescriptors(object));
		}
		return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object;
	}

	/**
	 * Implementation for `Object.hasOwn` but ES5 compatible.
	 *
	 * @param {any} object
	 * @param {string | number} key
	 * @returns {boolean}
	 */
	function hasOwn(object, key) {
		return Object.prototype.hasOwnProperty.call(object, key);
	}

	/**
	 * Since xmldom can not rely on `Object.assign`,
	 * it uses/provides a simplified version that is sufficient for its needs.
	 *
	 * @param {Object} target
	 * @param {Object | null | undefined} source
	 * @returns {Object}
	 * The target with the merged/overridden properties.
	 * @throws {TypeError}
	 * If target is not an object.
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	 * @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
	 */
	function assign(target, source) {
		if (target === null || typeof target !== 'object') {
			throw new TypeError('target is not an object');
		}
		for (var key in source) {
			if (hasOwn(source, key)) {
				target[key] = source[key];
			}
		}
		return target;
	}

	/**
	 * A number of attributes are boolean attributes.
	 * The presence of a boolean attribute on an element represents the `true` value,
	 * and the absence of the attribute represents the `false` value.
	 *
	 * If the attribute is present, its value must either be the empty string, or a value that is
	 * an ASCII case-insensitive match for the attribute's canonical name,
	 * with no leading or trailing whitespace.
	 *
	 * Note: The values `"true"` and `"false"` are not allowed on boolean attributes.
	 * To represent a `false` value, the attribute has to be omitted altogether.
	 *
	 * @see https://html.spec.whatwg.org/#boolean-attributes
	 * @see https://html.spec.whatwg.org/#attributes-3
	 */
	var HTML_BOOLEAN_ATTRIBUTES = freeze({
		allowfullscreen: true,
		async: true,
		autofocus: true,
		autoplay: true,
		checked: true,
		controls: true,
		default: true,
		defer: true,
		disabled: true,
		formnovalidate: true,
		hidden: true,
		ismap: true,
		itemscope: true,
		loop: true,
		multiple: true,
		muted: true,
		nomodule: true,
		novalidate: true,
		open: true,
		playsinline: true,
		readonly: true,
		required: true,
		reversed: true,
		selected: true,
	});

	/**
	 * Check if `name` is matching one of the HTML boolean attribute names.
	 * This method doesn't check if such attributes are allowed in the context of the current
	 * document/parsing.
	 *
	 * @param {string} name
	 * @returns {boolean}
	 * @see {@link HTML_BOOLEAN_ATTRIBUTES}
	 * @see https://html.spec.whatwg.org/#boolean-attributes
	 * @see https://html.spec.whatwg.org/#attributes-3
	 */
	function isHTMLBooleanAttribute(name) {
		return hasOwn(HTML_BOOLEAN_ATTRIBUTES, name.toLowerCase());
	}

	/**
	 * Void elements only have a start tag; end tags must not be specified for void elements.
	 * These elements should be written as self-closing like this: `<area />`.
	 * This should not be confused with optional tags that HTML allows to omit the end tag for
	 * (like `li`, `tr` and others), which can have content after them,
	 * so they can not be written as self-closing.
	 * xmldom does not have any logic for optional end tags cases,
	 * and will report them as a warning.
	 * Content that would go into the unopened element,
	 * will instead be added as a sibling text node.
	 *
	 * @type {Readonly<{
	 * 	area: boolean;
	 * 	col: boolean;
	 * 	img: boolean;
	 * 	wbr: boolean;
	 * 	link: boolean;
	 * 	hr: boolean;
	 * 	source: boolean;
	 * 	br: boolean;
	 * 	input: boolean;
	 * 	param: boolean;
	 * 	meta: boolean;
	 * 	embed: boolean;
	 * 	track: boolean;
	 * 	base: boolean;
	 * }>}
	 * @see https://html.spec.whatwg.org/#void-elements
	 * @see https://html.spec.whatwg.org/#optional-tags
	 */
	var HTML_VOID_ELEMENTS = freeze({
		area: true,
		base: true,
		br: true,
		col: true,
		embed: true,
		hr: true,
		img: true,
		input: true,
		link: true,
		meta: true,
		param: true,
		source: true,
		track: true,
		wbr: true,
	});

	/**
	 * Check if `tagName` is matching one of the HTML void element names.
	 * This method doesn't check if such tags are allowed in the context of the current
	 * document/parsing.
	 *
	 * @param {string} tagName
	 * @returns {boolean}
	 * @see {@link HTML_VOID_ELEMENTS}
	 * @see https://html.spec.whatwg.org/#void-elements
	 */
	function isHTMLVoidElement(tagName) {
		return hasOwn(HTML_VOID_ELEMENTS, tagName.toLowerCase());
	}

	/**
	 * Tag names that are raw text elements according to HTML spec.
	 * The value denotes whether they are escapable or not.
	 *
	 * @see {@link isHTMLEscapableRawTextElement}
	 * @see {@link isHTMLRawTextElement}
	 * @see https://html.spec.whatwg.org/#raw-text-elements
	 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
	 */
	var HTML_RAW_TEXT_ELEMENTS = freeze({
		script: false,
		style: false,
		textarea: true,
		title: true,
	});

	/**
	 * Check if `tagName` is matching one of the HTML raw text element names.
	 * This method doesn't check if such tags are allowed in the context of the current
	 * document/parsing.
	 *
	 * @param {string} tagName
	 * @returns {boolean}
	 * @see {@link isHTMLEscapableRawTextElement}
	 * @see {@link HTML_RAW_TEXT_ELEMENTS}
	 * @see https://html.spec.whatwg.org/#raw-text-elements
	 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
	 */
	function isHTMLRawTextElement(tagName) {
		var key = tagName.toLowerCase();
		return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && !HTML_RAW_TEXT_ELEMENTS[key];
	}
	/**
	 * Check if `tagName` is matching one of the HTML escapable raw text element names.
	 * This method doesn't check if such tags are allowed in the context of the current
	 * document/parsing.
	 *
	 * @param {string} tagName
	 * @returns {boolean}
	 * @see {@link isHTMLRawTextElement}
	 * @see {@link HTML_RAW_TEXT_ELEMENTS}
	 * @see https://html.spec.whatwg.org/#raw-text-elements
	 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
	 */
	function isHTMLEscapableRawTextElement(tagName) {
		var key = tagName.toLowerCase();
		return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && HTML_RAW_TEXT_ELEMENTS[key];
	}
	/**
	 * Only returns true if `value` matches MIME_TYPE.HTML, which indicates an HTML document.
	 *
	 * @param {string} mimeType
	 * @returns {mimeType is 'text/html'}
	 * @see https://www.iana.org/assignments/media-types/text/html
	 * @see https://en.wikipedia.org/wiki/HTML
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
	 */
	function isHTMLMimeType(mimeType) {
		return mimeType === MIME_TYPE.HTML;
	}
	/**
	 * For both the `text/html` and the `application/xhtml+xml` namespace the spec defines that the
	 * HTML namespace is provided as the default.
	 *
	 * @param {string} mimeType
	 * @returns {boolean}
	 * @see https://dom.spec.whatwg.org/#dom-document-createelement
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
	 */
	function hasDefaultHTMLNamespace(mimeType) {
		return isHTMLMimeType(mimeType) || mimeType === MIME_TYPE.XML_XHTML_APPLICATION;
	}

	/**
	 * All mime types that are allowed as input to `DOMParser.parseFromString`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02
	 *      MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype
	 *      WHATWG HTML Spec
	 * @see {@link DOMParser.prototype.parseFromString}
	 */
	var MIME_TYPE = freeze({
		/**
		 * `text/html`, the only mime type that triggers treating an XML document as HTML.
		 *
		 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
		 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
		 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
		 *      WHATWG HTML Spec
		 */
		HTML: 'text/html',

		/**
		 * `application/xml`, the standard mime type for XML documents.
		 *
		 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType
		 *      registration
		 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
		 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
		 */
		XML_APPLICATION: 'application/xml',

		/**
		 * `text/html`, an alias for `application/xml`.
		 *
		 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
		 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
		 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
		 */
		XML_TEXT: 'text/xml',

		/**
		 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
		 * but is parsed as an XML document.
		 *
		 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType
		 *      registration
		 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
		 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
		 */
		XML_XHTML_APPLICATION: 'application/xhtml+xml',

		/**
		 * `image/svg+xml`,
		 *
		 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
		 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
		 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
		 */
		XML_SVG_IMAGE: 'image/svg+xml',
	});
	/**
	 * @typedef {'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' | 'text/html' | 'text/xml'}
	 * MimeType
	 */
	/**
	 * @type {MimeType[]}
	 * @private
	 * Basically `Object.values`, which is not available in ES5.
	 */
	var _MIME_TYPES = Object.keys(MIME_TYPE).map(function (key) {
		return MIME_TYPE[key];
	});

	/**
	 * Only returns true if `mimeType` is one of the allowed values for
	 * `DOMParser.parseFromString`.
	 *
	 * @param {string} mimeType
	 * @returns {mimeType is 'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' |  'text/html' | 'text/xml'}
	 *
	 */
	function isValidMimeType(mimeType) {
		return _MIME_TYPES.indexOf(mimeType) > -1;
	}
	/**
	 * Namespaces that are used in this code base.
	 *
	 * @see http://www.w3.org/TR/REC-xml-names
	 */
	var NAMESPACE = freeze({
		/**
		 * The XHTML namespace.
		 *
		 * @see http://www.w3.org/1999/xhtml
		 */
		HTML: 'http://www.w3.org/1999/xhtml',

		/**
		 * The SVG namespace.
		 *
		 * @see http://www.w3.org/2000/svg
		 */
		SVG: 'http://www.w3.org/2000/svg',

		/**
		 * The `xml:` namespace.
		 *
		 * @see http://www.w3.org/XML/1998/namespace
		 */
		XML: 'http://www.w3.org/XML/1998/namespace',

		/**
		 * The `xmlns:` namespace.
		 *
		 * @see https://www.w3.org/2000/xmlns/
		 */
		XMLNS: 'http://www.w3.org/2000/xmlns/',
	});

	conventions.assign = assign;
	conventions.find = find;
	conventions.freeze = freeze;
	conventions.HTML_BOOLEAN_ATTRIBUTES = HTML_BOOLEAN_ATTRIBUTES;
	conventions.HTML_RAW_TEXT_ELEMENTS = HTML_RAW_TEXT_ELEMENTS;
	conventions.HTML_VOID_ELEMENTS = HTML_VOID_ELEMENTS;
	conventions.hasDefaultHTMLNamespace = hasDefaultHTMLNamespace;
	conventions.hasOwn = hasOwn;
	conventions.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
	conventions.isHTMLRawTextElement = isHTMLRawTextElement;
	conventions.isHTMLEscapableRawTextElement = isHTMLEscapableRawTextElement;
	conventions.isHTMLMimeType = isHTMLMimeType;
	conventions.isHTMLVoidElement = isHTMLVoidElement;
	conventions.isValidMimeType = isValidMimeType;
	conventions.MIME_TYPE = MIME_TYPE;
	conventions.NAMESPACE = NAMESPACE;
	return conventions;
}

var errors = {};

var hasRequiredErrors;

function requireErrors () {
	if (hasRequiredErrors) return errors;
	hasRequiredErrors = 1;

	var conventions = requireConventions();

	function extendError(constructor, writableName) {
		constructor.prototype = Object.create(Error.prototype, {
			constructor: { value: constructor },
			name: { value: constructor.name, enumerable: true, writable: writableName },
		});
	}

	var DOMExceptionName = conventions.freeze({
		/**
		 * the default value as defined by the spec
		 */
		Error: 'Error',
		/**
		 * @deprecated
		 * Use RangeError instead.
		 */
		IndexSizeError: 'IndexSizeError',
		/**
		 * @deprecated
		 * Just to match the related static code, not part of the spec.
		 */
		DomstringSizeError: 'DomstringSizeError',
		HierarchyRequestError: 'HierarchyRequestError',
		WrongDocumentError: 'WrongDocumentError',
		InvalidCharacterError: 'InvalidCharacterError',
		/**
		 * @deprecated
		 * Just to match the related static code, not part of the spec.
		 */
		NoDataAllowedError: 'NoDataAllowedError',
		NoModificationAllowedError: 'NoModificationAllowedError',
		NotFoundError: 'NotFoundError',
		NotSupportedError: 'NotSupportedError',
		InUseAttributeError: 'InUseAttributeError',
		InvalidStateError: 'InvalidStateError',
		SyntaxError: 'SyntaxError',
		InvalidModificationError: 'InvalidModificationError',
		NamespaceError: 'NamespaceError',
		/**
		 * @deprecated
		 * Use TypeError for invalid arguments,
		 * "NotSupportedError" DOMException for unsupported operations,
		 * and "NotAllowedError" DOMException for denied requests instead.
		 */
		InvalidAccessError: 'InvalidAccessError',
		/**
		 * @deprecated
		 * Just to match the related static code, not part of the spec.
		 */
		ValidationError: 'ValidationError',
		/**
		 * @deprecated
		 * Use TypeError instead.
		 */
		TypeMismatchError: 'TypeMismatchError',
		SecurityError: 'SecurityError',
		NetworkError: 'NetworkError',
		AbortError: 'AbortError',
		/**
		 * @deprecated
		 * Just to match the related static code, not part of the spec.
		 */
		URLMismatchError: 'URLMismatchError',
		QuotaExceededError: 'QuotaExceededError',
		TimeoutError: 'TimeoutError',
		InvalidNodeTypeError: 'InvalidNodeTypeError',
		DataCloneError: 'DataCloneError',
		EncodingError: 'EncodingError',
		NotReadableError: 'NotReadableError',
		UnknownError: 'UnknownError',
		ConstraintError: 'ConstraintError',
		DataError: 'DataError',
		TransactionInactiveError: 'TransactionInactiveError',
		ReadOnlyError: 'ReadOnlyError',
		VersionError: 'VersionError',
		OperationError: 'OperationError',
		NotAllowedError: 'NotAllowedError',
		OptOutError: 'OptOutError',
	});
	var DOMExceptionNames = Object.keys(DOMExceptionName);

	function isValidDomExceptionCode(value) {
		return typeof value === 'number' && value >= 1 && value <= 25;
	}
	function endsWithError(value) {
		return typeof value === 'string' && value.substring(value.length - DOMExceptionName.Error.length) === DOMExceptionName.Error;
	}
	/**
	 * DOM operations only raise exceptions in "exceptional" circumstances, i.e., when an operation
	 * is impossible to perform (either for logical reasons, because data is lost, or because the
	 * implementation has become unstable). In general, DOM methods return specific error values in
	 * ordinary processing situations, such as out-of-bound errors when using NodeList.
	 *
	 * Implementations should raise other exceptions under other circumstances. For example,
	 * implementations should raise an implementation-dependent exception if a null argument is
	 * passed when null was not expected.
	 *
	 * This implementation supports the following usages:
	 * 1. according to the living standard (both arguments are optional):
	 * ```
	 * new DOMException("message (can be empty)", DOMExceptionNames.HierarchyRequestError)
	 * ```
	 * 2. according to previous xmldom implementation (only the first argument is required):
	 * ```
	 * new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "optional message")
	 * ```
	 * both result in the proper name being set.
	 *
	 * @class DOMException
	 * @param {number | string} messageOrCode
	 * The reason why an operation is not acceptable.
	 * If it is a number, it is used to determine the `name`, see
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-258A00AF ExceptionCode}
	 * @param {string | keyof typeof DOMExceptionName | Error} [nameOrMessage]
	 * The `name` to use for the error.
	 * If `messageOrCode` is a number, this arguments is used as the `message` instead.
	 * @augments Error
	 * @see https://webidl.spec.whatwg.org/#idl-DOMException
	 * @see https://webidl.spec.whatwg.org/#dfn-error-names-table
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-17189187
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
	 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
	 */
	function DOMException(messageOrCode, nameOrMessage) {
		// support old way of passing arguments: first argument is a valid number
		if (isValidDomExceptionCode(messageOrCode)) {
			this.name = DOMExceptionNames[messageOrCode];
			this.message = nameOrMessage || '';
		} else {
			this.message = messageOrCode;
			this.name = endsWithError(nameOrMessage) ? nameOrMessage : DOMExceptionName.Error;
		}
		if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	extendError(DOMException, true);
	Object.defineProperties(DOMException.prototype, {
		code: {
			enumerable: true,
			get: function () {
				var code = DOMExceptionNames.indexOf(this.name);
				if (isValidDomExceptionCode(code)) return code;
				return 0;
			},
		},
	});

	var ExceptionCode = {
		INDEX_SIZE_ERR: 1,
		DOMSTRING_SIZE_ERR: 2,
		HIERARCHY_REQUEST_ERR: 3,
		WRONG_DOCUMENT_ERR: 4,
		INVALID_CHARACTER_ERR: 5,
		NO_DATA_ALLOWED_ERR: 6,
		NO_MODIFICATION_ALLOWED_ERR: 7,
		NOT_FOUND_ERR: 8,
		NOT_SUPPORTED_ERR: 9,
		INUSE_ATTRIBUTE_ERR: 10,
		INVALID_STATE_ERR: 11,
		SYNTAX_ERR: 12,
		INVALID_MODIFICATION_ERR: 13,
		NAMESPACE_ERR: 14,
		INVALID_ACCESS_ERR: 15,
		VALIDATION_ERR: 16,
		TYPE_MISMATCH_ERR: 17,
		SECURITY_ERR: 18,
		NETWORK_ERR: 19,
		ABORT_ERR: 20,
		URL_MISMATCH_ERR: 21,
		QUOTA_EXCEEDED_ERR: 22,
		TIMEOUT_ERR: 23,
		INVALID_NODE_TYPE_ERR: 24,
		DATA_CLONE_ERR: 25,
	};

	var entries = Object.entries(ExceptionCode);
	for (var i = 0; i < entries.length; i++) {
		var key = entries[i][0];
		DOMException[key] = entries[i][1];
	}

	/**
	 * Creates an error that will not be caught by XMLReader aka the SAX parser.
	 *
	 * @class
	 * @param {string} message
	 * @param {any} [locator]
	 */
	function ParseError(message, locator) {
		this.message = message;
		this.locator = locator;
		if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
	}
	extendError(ParseError);

	errors.DOMException = DOMException;
	errors.DOMExceptionName = DOMExceptionName;
	errors.ExceptionCode = ExceptionCode;
	errors.ParseError = ParseError;
	return errors;
}

var dom = {};

var grammar = {};

var hasRequiredGrammar;

function requireGrammar () {
	if (hasRequiredGrammar) return grammar;
	hasRequiredGrammar = 1;

	/**
	 * Detects relevant unicode support for regular expressions in the runtime.
	 * Should the runtime not accepts the flag `u` or unicode ranges,
	 * character classes without unicode handling will be used.
	 *
	 * @param {typeof RegExp} [RegExpImpl=RegExp]
	 * For testing: the RegExp class.
	 * @returns {boolean}
	 * @see https://node.green/#ES2015-syntax-RegExp--y--and--u--flags
	 */
	function detectUnicodeSupport(RegExpImpl) {
		try {
			if (typeof RegExpImpl !== 'function') {
				RegExpImpl = RegExp;
			}
			// eslint-disable-next-line es5/no-unicode-regex,es5/no-unicode-code-point-escape
			var match = new RegExpImpl('\u{1d306}', 'u').exec('𝌆');
			return !!match && match[0].length === 2;
		} catch (error) {}
		return false;
	}
	var UNICODE_SUPPORT = detectUnicodeSupport();

	/**
	 * Removes `[`, `]` and any trailing quantifiers from the source of a RegExp.
	 *
	 * @param {RegExp} regexp
	 */
	function chars(regexp) {
		if (regexp.source[0] !== '[') {
			throw new Error(regexp + ' can not be used with chars');
		}
		return regexp.source.slice(1, regexp.source.lastIndexOf(']'));
	}

	/**
	 * Creates a new character list regular expression,
	 * by removing `search` from the source of `regexp`.
	 *
	 * @param {RegExp} regexp
	 * @param {string} search
	 * The character(s) to remove.
	 * @returns {RegExp}
	 */
	function chars_without(regexp, search) {
		if (regexp.source[0] !== '[') {
			throw new Error('/' + regexp.source + '/ can not be used with chars_without');
		}
		if (!search || typeof search !== 'string') {
			throw new Error(JSON.stringify(search) + ' is not a valid search');
		}
		if (regexp.source.indexOf(search) === -1) {
			throw new Error('"' + search + '" is not is /' + regexp.source + '/');
		}
		if (search === '-' && regexp.source.indexOf(search) !== 1) {
			throw new Error('"' + search + '" is not at the first postion of /' + regexp.source + '/');
		}
		return new RegExp(regexp.source.replace(search, ''), UNICODE_SUPPORT ? 'u' : '');
	}

	/**
	 * Combines and Regular expressions correctly by using `RegExp.source`.
	 *
	 * @param {...(RegExp | string)[]} args
	 * @returns {RegExp}
	 */
	function reg(args) {
		var self = this;
		return new RegExp(
			Array.prototype.slice
				.call(arguments)
				.map(function (part) {
					var isStr = typeof part === 'string';
					if (isStr && self === undefined && part === '|') {
						throw new Error('use regg instead of reg to wrap expressions with `|`!');
					}
					return isStr ? part : part.source;
				})
				.join(''),
			UNICODE_SUPPORT ? 'mu' : 'm'
		);
	}

	/**
	 * Like `reg` but wraps the expression in `(?:`,`)` to create a non tracking group.
	 *
	 * @param {...(RegExp | string)[]} args
	 * @returns {RegExp}
	 */
	function regg(args) {
		if (arguments.length === 0) {
			throw new Error('no parameters provided');
		}
		return reg.apply(regg, ['(?:'].concat(Array.prototype.slice.call(arguments), [')']));
	}

	// /**
	//  * Append ^ to the beginning of the expression.
	//  * @param {...(RegExp | string)[]} args
	//  * @returns {RegExp}
	//  */
	// function reg_start(args) {
	// 	if (arguments.length === 0) {
	// 		throw new Error('no parameters provided');
	// 	}
	// 	return reg.apply(reg_start, ['^'].concat(Array.prototype.slice.call(arguments)));
	// }

	// https://www.w3.org/TR/xml/#document
	// `[1] document ::= prolog element Misc*`
	// https://www.w3.org/TR/xml11/#NT-document
	// `[1] document ::= ( prolog element Misc* ) - ( Char* RestrictedChar Char* )`

	/**
	 * A character usually appearing in wrongly converted strings.
	 *
	 * @type {string}
	 * @see https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character
	 * @see https://nodejs.dev/en/api/v18/buffer/#buffers-and-character-encodings
	 * @see https://www.unicode.org/faq/utf_bom.html#BOM
	 * @readonly
	 */
	var UNICODE_REPLACEMENT_CHARACTER = '\uFFFD';
	// https://www.w3.org/TR/xml/#NT-Char
	// any Unicode character, excluding the surrogate blocks, FFFE, and FFFF.
	// `[2] Char ::= #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]`
	// https://www.w3.org/TR/xml11/#NT-Char
	// `[2] Char ::= [#x1-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]`
	// https://www.w3.org/TR/xml11/#NT-RestrictedChar
	// `[2a] RestrictedChar ::= [#x1-#x8] | [#xB-#xC] | [#xE-#x1F] | [#x7F-#x84] | [#x86-#x9F]`
	// https://www.w3.org/TR/xml11/#charsets
	var Char = /[-\x09\x0A\x0D\x20-\x2C\x2E-\uD7FF\uE000-\uFFFD]/; // without \u10000-\uEFFFF
	if (UNICODE_SUPPORT) {
		// eslint-disable-next-line es5/no-unicode-code-point-escape
		Char = reg('[', chars(Char), '\\u{10000}-\\u{10FFFF}', ']');
	}

	var _SChar = /[\x20\x09\x0D\x0A]/;
	var SChar_s = chars(_SChar);
	// https://www.w3.org/TR/xml11/#NT-S
	// `[3] S ::= (#x20 | #x9 | #xD | #xA)+`
	var S = reg(_SChar, '+');
	// optional whitespace described as `S?` in the grammar,
	// simplified to 0-n occurrences of the character class
	// instead of 0-1 occurrences of a non-capturing group around S
	var S_OPT = reg(_SChar, '*');

	// https://www.w3.org/TR/xml11/#NT-NameStartChar
	// `[4] NameStartChar ::= ":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]`
	var NameStartChar =
		/[:_a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/; // without \u10000-\uEFFFF
	if (UNICODE_SUPPORT) {
		// eslint-disable-next-line es5/no-unicode-code-point-escape
		NameStartChar = reg('[', chars(NameStartChar), '\\u{10000}-\\u{10FFFF}', ']');
	}
	var NameStartChar_s = chars(NameStartChar);

	// https://www.w3.org/TR/xml11/#NT-NameChar
	// `[4a] NameChar ::= NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]`
	var NameChar = reg('[', NameStartChar_s, chars(/[-.0-9\xB7]/), chars(/[\u0300-\u036F\u203F-\u2040]/), ']');
	// https://www.w3.org/TR/xml11/#NT-Name
	// `[5] Name ::= NameStartChar (NameChar)*`
	var Name = reg(NameStartChar, NameChar, '*');
	/*
	https://www.w3.org/TR/xml11/#NT-Names
	`[6] Names ::= Name (#x20 Name)*`
	*/

	// https://www.w3.org/TR/xml11/#NT-Nmtoken
	// `[7] Nmtoken ::= (NameChar)+`
	var Nmtoken = reg(NameChar, '+');
	/*
	https://www.w3.org/TR/xml11/#NT-Nmtokens
	`[8] Nmtokens ::= Nmtoken (#x20 Nmtoken)*`
	var Nmtokens = reg(Nmtoken, regg(/\x20/, Nmtoken), '*');
	*/

	// https://www.w3.org/TR/xml11/#NT-EntityRef
	// `[68] EntityRef ::= '&' Name ';'` [WFC: Entity Declared] [VC: Entity Declared] [WFC: Parsed Entity] [WFC: No Recursion]
	var EntityRef = reg('&', Name, ';');
	// https://www.w3.org/TR/xml11/#NT-CharRef
	// `[66] CharRef ::= '&#' [0-9]+ ';' | '&#x' [0-9a-fA-F]+ ';'` [WFC: Legal Character]
	var CharRef = regg(/&#[0-9]+;|&#x[0-9a-fA-F]+;/);

	/*
	https://www.w3.org/TR/xml11/#NT-Reference
	- `[67] Reference ::= EntityRef | CharRef`
	- `[66] CharRef ::= '&#' [0-9]+ ';' | '&#x' [0-9a-fA-F]+ ';'` [WFC: Legal Character]
	- `[68] EntityRef ::= '&' Name ';'` [WFC: Entity Declared] [VC: Entity Declared] [WFC: Parsed Entity] [WFC: No Recursion]
	*/
	var Reference = regg(EntityRef, '|', CharRef);

	// https://www.w3.org/TR/xml11/#NT-PEReference
	// `[69] PEReference ::= '%' Name ';'`
	// [VC: Entity Declared] [WFC: No Recursion] [WFC: In DTD]
	var PEReference = reg('%', Name, ';');

	// https://www.w3.org/TR/xml11/#NT-EntityValue
	// `[9] EntityValue ::= '"' ([^%&"] | PEReference | Reference)* '"' | "'" ([^%&'] | PEReference | Reference)* "'"`
	var EntityValue = regg(
		reg('"', regg(/[^%&"]/, '|', PEReference, '|', Reference), '*', '"'),
		'|',
		reg("'", regg(/[^%&']/, '|', PEReference, '|', Reference), '*', "'")
	);

	// https://www.w3.org/TR/xml11/#NT-AttValue
	// `[10] AttValue ::= '"' ([^<&"] | Reference)* '"' | "'" ([^<&'] | Reference)* "'"`
	var AttValue = regg('"', regg(/[^<&"]/, '|', Reference), '*', '"', '|', "'", regg(/[^<&']/, '|', Reference), '*', "'");

	// https://www.w3.org/TR/xml-names/#ns-decl
	// https://www.w3.org/TR/xml-names/#ns-qualnames
	// NameStartChar without ":"
	var NCNameStartChar = chars_without(NameStartChar, ':');
	// https://www.w3.org/TR/xml-names/#orphans
	// `[5] NCNameChar ::= NameChar - ':'`
	// An XML NameChar, minus the ":"
	var NCNameChar = chars_without(NameChar, ':');
	// https://www.w3.org/TR/xml-names/#NT-NCName
	// `[4] NCName ::= Name - (Char* ':' Char*)`
	// An XML Name, minus the ":"
	var NCName = reg(NCNameStartChar, NCNameChar, '*');

	/**
	https://www.w3.org/TR/xml-names/#ns-qualnames

	```
	[7] QName ::= PrefixedName | UnprefixedName
					  === (NCName ':' NCName) | NCName
					  === NCName (':' NCName)?
	[8] PrefixedName ::= Prefix ':' LocalPart
									 === NCName ':' NCName
	[9] UnprefixedName ::= LocalPart
										 === NCName
	[10] Prefix ::= NCName
	[11] LocalPart ::= NCName
	```
	*/
	var QName = reg(NCName, regg(':', NCName), '?');
	var QName_exact = reg('^', QName, '$');
	var QName_group = reg('(', QName, ')');

	// https://www.w3.org/TR/xml11/#NT-SystemLiteral
	// `[11] SystemLiteral ::= ('"' [^"]* '"') | ("'" [^']* "'")`
	var SystemLiteral = regg(/"[^"]*"|'[^']*'/);

	/*
	 https://www.w3.org/TR/xml11/#NT-PI
	 ```
	 [17] PITarget    ::= Name - (('X' | 'x') ('M' | 'm') ('L' | 'l'))
	 [16] PI    ::= '<?' PITarget (S (Char* - (Char* '?>' Char*)))? '?>'
	 ```
	 target /xml/i is not excluded!
	*/
	var PI = reg(/^<\?/, '(', Name, ')', regg(S, '(', Char, '*?)'), '?', /\?>/);

	// https://www.w3.org/TR/xml11/#NT-PubidChar
	// `[13] PubidChar ::= #x20 | #xD | #xA | [a-zA-Z0-9] | [-'()+,./:=?;!*#@$_%]`
	var PubidChar = /[\x20\x0D\x0Aa-zA-Z0-9-'()+,./:=?;!*#@$_%]/;

	// https://www.w3.org/TR/xml11/#NT-PubidLiteral
	// `[12] PubidLiteral ::= '"' PubidChar* '"' | "'" (PubidChar - "'")* "'"`
	var PubidLiteral = regg('"', PubidChar, '*"', '|', "'", chars_without(PubidChar, "'"), "*'");

	// https://www.w3.org/TR/xml11/#NT-CharData
	// `[14] CharData    ::= [^<&]* - ([^<&]* ']]>' [^<&]*)`

	var COMMENT_START = '<!--';
	var COMMENT_END = '-->';
	// https://www.w3.org/TR/xml11/#NT-Comment
	// `[15] Comment ::= '<!--' ((Char - '-') | ('-' (Char - '-')))* '-->'`
	var Comment = reg(COMMENT_START, regg(chars_without(Char, '-'), '|', reg('-', chars_without(Char, '-'))), '*', COMMENT_END);

	var PCDATA = '#PCDATA';
	// https://www.w3.org/TR/xml11/#NT-Mixed
	// `[51] Mixed ::= '(' S? '#PCDATA' (S? '|' S? Name)* S? ')*' | '(' S? '#PCDATA' S? ')'`
	// https://www.w3.org/TR/xml-names/#NT-Mixed
	// `[51] Mixed ::= '(' S? '#PCDATA' (S? '|' S? QName)* S? ')*' | '(' S? '#PCDATA' S? ')'`
	// [VC: Proper Group/PE Nesting] [VC: No Duplicate Types]
	var Mixed = regg(
		reg(/\(/, S_OPT, PCDATA, regg(S_OPT, /\|/, S_OPT, QName), '*', S_OPT, /\)\*/),
		'|',
		reg(/\(/, S_OPT, PCDATA, S_OPT, /\)/)
	);

	var _children_quantity = /[?*+]?/;
	/*
	 `[49] choice ::= '(' S? cp ( S? '|' S? cp )+ S? ')'` [VC: Proper Group/PE Nesting]
	 `[50] seq ::= '(' S? cp ( S? ',' S? cp )* S? ')'` [VC: Proper Group/PE Nesting]
	 simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
	 var _choice_or_seq = reg('[', NameChar_s, SChar_s, chars(_children_quantity), '()|,]*');
	 ```
	 [48] cp ::= (Name | choice | seq) ('?' | '*' | '+')?
	         === (Name | '(' S? cp ( S? '|' S? cp )+ S? ')' | '(' S? cp ( S? ',' S? cp )* S? ')') ('?' | '*' | '+')?
	         !== (Name | [_choice_or_seq]*) ('?' | '*' | '+')?
	 ```
	 simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
	 var cp = reg(regg(Name, '|', _choice_or_seq), _children_quantity);
	*/
	/*
	Inefficient regular expression (High)
	This part of the regular expression may cause exponential backtracking on strings starting with '(|' and containing many repetitions of '|'.
	https://github.com/xmldom/xmldom/security/code-scanning/91
	var choice = regg(/\(/, S_OPT, cp, regg(S_OPT, /\|/, S_OPT, cp), '+', S_OPT, /\)/);
	*/
	/*
	Inefficient regular expression (High)
	This part of the regular expression may cause exponential backtracking on strings starting with '(,' and containing many repetitions of ','.
	https://github.com/xmldom/xmldom/security/code-scanning/92
	var seq = regg(/\(/, S_OPT, cp, regg(S_OPT, /,/, S_OPT, cp), '*', S_OPT, /\)/);
	*/

	// `[47] children ::= (choice | seq) ('?' | '*' | '+')?`
	// simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
	var children = reg(/\([^>]+\)/, _children_quantity /*regg(choice, '|', seq), _children_quantity*/);

	// https://www.w3.org/TR/xml11/#NT-contentspec
	// `[46] contentspec ::= 'EMPTY' | 'ANY' | Mixed | children`
	var contentspec = regg('EMPTY', '|', 'ANY', '|', Mixed, '|', children);

	var ELEMENTDECL_START = '<!ELEMENT';
	// https://www.w3.org/TR/xml11/#NT-elementdecl
	// `[45] elementdecl ::= '<!ELEMENT' S Name S contentspec S? '>'`
	// https://www.w3.org/TR/xml-names/#NT-elementdecl
	// `[17] elementdecl ::= '<!ELEMENT' S QName S contentspec S? '>'`
	// because of https://www.w3.org/TR/xml11/#NT-PEReference
	// since xmldom is not supporting replacements of PEReferences in the DTD
	// this also supports PEReference in the possible places
	var elementdecl = reg(ELEMENTDECL_START, S, regg(QName, '|', PEReference), S, regg(contentspec, '|', PEReference), S_OPT, '>');

	// https://www.w3.org/TR/xml11/#NT-NotationType
	// `[58] NotationType ::= 'NOTATION' S '(' S? Name (S? '|' S? Name)* S? ')'`
	// [VC: Notation Attributes] [VC: One Notation Per Element Type] [VC: No Notation on Empty Element] [VC: No Duplicate Tokens]
	var NotationType = reg('NOTATION', S, /\(/, S_OPT, Name, regg(S_OPT, /\|/, S_OPT, Name), '*', S_OPT, /\)/);
	// https://www.w3.org/TR/xml11/#NT-Enumeration
	// `[59] Enumeration ::= '(' S? Nmtoken (S? '|' S? Nmtoken)* S? ')'`
	// [VC: Enumeration] [VC: No Duplicate Tokens]
	var Enumeration = reg(/\(/, S_OPT, Nmtoken, regg(S_OPT, /\|/, S_OPT, Nmtoken), '*', S_OPT, /\)/);

	// https://www.w3.org/TR/xml11/#NT-EnumeratedType
	// `[57] EnumeratedType ::= NotationType | Enumeration`
	var EnumeratedType = regg(NotationType, '|', Enumeration);

	/*
	```
	[55] StringType ::= 'CDATA'
	[56] TokenizedType ::= 'ID' [VC: ID] [VC: One ID per Element Type] [VC: ID Attribute Default]
	   | 'IDREF' [VC: IDREF]
	   | 'IDREFS' [VC: IDREF]
		 | 'ENTITY' [VC: Entity Name]
		 | 'ENTITIES' [VC: Entity Name]
		 | 'NMTOKEN' [VC: Name Token]
		 | 'NMTOKENS' [VC: Name Token]
	 [54] AttType ::= StringType | TokenizedType | EnumeratedType
	```*/
	var AttType = regg(/CDATA|ID|IDREF|IDREFS|ENTITY|ENTITIES|NMTOKEN|NMTOKENS/, '|', EnumeratedType);

	// `[60] DefaultDecl ::= '#REQUIRED' | '#IMPLIED' | (('#FIXED' S)? AttValue)`
	// [WFC: No < in Attribute Values] [WFC: No External Entity References]
	// [VC: Fixed Attribute Default] [VC: Required Attribute] [VC: Attribute Default Value Syntactically Correct]
	var DefaultDecl = regg(/#REQUIRED|#IMPLIED/, '|', regg(regg('#FIXED', S), '?', AttValue));

	// https://www.w3.org/TR/xml11/#NT-AttDef
	// [53] AttDef ::= S Name S AttType S DefaultDecl
	// https://www.w3.org/TR/xml-names/#NT-AttDef
	// [1] NSAttName ::= PrefixedAttName | DefaultAttName
	// [2] PrefixedAttName ::= 'xmlns:' NCName [NSC: Reserved Prefixes and Namespace Names]
	// [3] DefaultAttName ::= 'xmlns'
	// [21] AttDef ::= S (QName | NSAttName) S AttType S DefaultDecl
	// 						 === S Name S AttType S DefaultDecl
	// xmldom is not distinguishing between QName and NSAttName on this level
	// to support XML without namespaces in DTD we can not restrict it to QName
	var AttDef = regg(S, Name, S, AttType, S, DefaultDecl);

	var ATTLIST_DECL_START = '<!ATTLIST';
	// https://www.w3.org/TR/xml11/#NT-AttlistDecl
	// `[52] AttlistDecl ::= '<!ATTLIST' S Name AttDef* S? '>'`
	// https://www.w3.org/TR/xml-names/#NT-AttlistDecl
	// `[20] AttlistDecl ::= '<!ATTLIST' S QName AttDef* S? '>'`
	// to support XML without namespaces in DTD we can not restrict it to QName
	var AttlistDecl = reg(ATTLIST_DECL_START, S, Name, AttDef, '*', S_OPT, '>');

	var SYSTEM = 'SYSTEM';
	var PUBLIC = 'PUBLIC';
	// https://www.w3.org/TR/xml11/#NT-ExternalID
	// `[75] ExternalID ::= 'SYSTEM' S SystemLiteral | 'PUBLIC' S PubidLiteral S SystemLiteral`
	var ExternalID = regg(regg(SYSTEM, S, SystemLiteral), '|', regg(PUBLIC, S, PubidLiteral, S, SystemLiteral));
	var ExternalID_match = reg(
		'^',
		regg(
			regg(SYSTEM, S, '(?<SystemLiteralOnly>', SystemLiteral, ')'),
			'|',
			regg(PUBLIC, S, '(?<PubidLiteral>', PubidLiteral, ')', S, '(?<SystemLiteral>', SystemLiteral, ')')
		)
	);

	// https://www.w3.org/TR/xml11/#NT-NDataDecl
	// `[76] NDataDecl ::= S 'NDATA' S Name` [VC: Notation Declared]
	var NDataDecl = regg(S, 'NDATA', S, Name);

	// https://www.w3.org/TR/xml11/#NT-EntityDef
	// `[73] EntityDef ::= EntityValue | (ExternalID NDataDecl?)`
	var EntityDef = regg(EntityValue, '|', regg(ExternalID, NDataDecl, '?'));

	var ENTITY_DECL_START = '<!ENTITY';
	// https://www.w3.org/TR/xml11/#NT-GEDecl
	// `[71] GEDecl ::= '<!ENTITY' S Name S EntityDef S? '>'`
	var GEDecl = reg(ENTITY_DECL_START, S, Name, S, EntityDef, S_OPT, '>');
	// https://www.w3.org/TR/xml11/#NT-PEDef
	// `[74] PEDef ::= EntityValue | ExternalID`
	var PEDef = regg(EntityValue, '|', ExternalID);
	// https://www.w3.org/TR/xml11/#NT-PEDecl
	// `[72] PEDecl ::= '<!ENTITY' S '%' S Name S PEDef S? '>'`
	var PEDecl = reg(ENTITY_DECL_START, S, '%', S, Name, S, PEDef, S_OPT, '>');
	// https://www.w3.org/TR/xml11/#NT-EntityDecl
	// `[70] EntityDecl ::= GEDecl | PEDecl`
	var EntityDecl = regg(GEDecl, '|', PEDecl);

	// https://www.w3.org/TR/xml11/#NT-PublicID
	// `[83] PublicID    ::= 'PUBLIC' S PubidLiteral`
	var PublicID = reg(PUBLIC, S, PubidLiteral);
	// https://www.w3.org/TR/xml11/#NT-NotationDecl
	// `[82] NotationDecl    ::= '<!NOTATION' S Name S (ExternalID | PublicID) S? '>'` [VC: Unique Notation Name]
	var NotationDecl = reg('<!NOTATION', S, Name, S, regg(ExternalID, '|', PublicID), S_OPT, '>');

	// https://www.w3.org/TR/xml11/#NT-Eq
	// `[25] Eq ::= S? '=' S?`
	var Eq = reg(S_OPT, '=', S_OPT);
	// https://www.w3.org/TR/xml/#NT-VersionNum
	// `[26] VersionNum ::= '1.' [0-9]+`
	// https://www.w3.org/TR/xml11/#NT-VersionNum
	// `[26] VersionNum ::= '1.1'`
	var VersionNum = /1[.]\d+/;
	// https://www.w3.org/TR/xml11/#NT-VersionInfo
	// `[24] VersionInfo ::= S 'version' Eq ("'" VersionNum "'" | '"' VersionNum '"')`
	var VersionInfo = reg(S, 'version', Eq, regg("'", VersionNum, "'", '|', '"', VersionNum, '"'));
	// https://www.w3.org/TR/xml11/#NT-EncName
	// `[81] EncName ::= [A-Za-z] ([A-Za-z0-9._] | '-')*`
	var EncName = /[A-Za-z][-A-Za-z0-9._]*/;
	// https://www.w3.org/TR/xml11/#NT-EncDecl
	// `[80] EncodingDecl ::= S 'encoding' Eq ('"' EncName '"' | "'" EncName "'" )`
	var EncodingDecl = regg(S, 'encoding', Eq, regg('"', EncName, '"', '|', "'", EncName, "'"));
	// https://www.w3.org/TR/xml11/#NT-SDDecl
	// `[32] SDDecl ::= S 'standalone' Eq (("'" ('yes' | 'no') "'") | ('"' ('yes' | 'no') '"'))`
	var SDDecl = regg(S, 'standalone', Eq, regg("'", regg('yes', '|', 'no'), "'", '|', '"', regg('yes', '|', 'no'), '"'));
	// https://www.w3.org/TR/xml11/#NT-XMLDecl
	// [23] XMLDecl ::= '<?xml' VersionInfo EncodingDecl? SDDecl? S? '?>'
	var XMLDecl = reg(/^<\?xml/, VersionInfo, EncodingDecl, '?', SDDecl, '?', S_OPT, /\?>/);

	/*
	 https://www.w3.org/TR/xml/#NT-markupdecl
	 https://www.w3.org/TR/xml11/#NT-markupdecl
	 `[29] markupdecl ::= elementdecl | AttlistDecl | EntityDecl | NotationDecl | PI | Comment`
	 var markupdecl = regg(elementdecl, '|', AttlistDecl, '|', EntityDecl, '|', NotationDecl, '|', PI_unsafe, '|', Comment);
	*/
	/*
	 https://www.w3.org/TR/xml-names/#NT-doctypedecl
	`[28a] DeclSep   ::= PEReference | S`
	 https://www.w3.org/TR/xml11/#NT-intSubset
	```
	 [28b] intSubset ::= (markupdecl | DeclSep)*
	                 === (markupdecl | PEReference | S)*
	```
	 [WFC: PE Between Declarations]
	 var intSubset = reg(regg(markupdecl, '|', PEReference, '|', S), '*');
	*/
	var DOCTYPE_DECL_START = '<!DOCTYPE';
	/*
	 https://www.w3.org/TR/xml11/#NT-doctypedecl
	 `[28] doctypedecl ::= '<!DOCTYPE' S Name (S ExternalID)? S? ('[' intSubset ']' S?)? '>'`
	 https://www.afterwardsw3.org/TR/xml-names/#NT-doctypedecl
	 `[16] doctypedecl ::= '<!DOCTYPE' S QName (S ExternalID)? S? ('[' (markupdecl | PEReference | S)* ']' S?)? '>'`
	 var doctypedecl = reg('<!DOCTYPE', S, Name, regg(S, ExternalID), '?', S_OPT, regg(/\[/, intSubset, /]/, S_OPT), '?', '>');
	*/

	var CDATA_START = '<![CDATA[';
	var CDATA_END = ']]>';
	var CDStart = /<!\[CDATA\[/;
	var CDEnd = /\]\]>/;
	var CData = reg(Char, '*?', CDEnd);
	/*
	 https://www.w3.org/TR/xml/#dt-cdsection
	 `[18]   	CDSect	   ::=   	CDStart CData CDEnd`
	 `[19]   	CDStart	   ::=   	'<![CDATA['`
	 `[20]   	CData	   ::=   	(Char* - (Char* ']]>' Char*))`
	 `[21]   	CDEnd	   ::=   	']]>'`
	*/
	var CDSect = reg(CDStart, CData);

	// unit tested
	grammar.chars = chars;
	grammar.chars_without = chars_without;
	grammar.detectUnicodeSupport = detectUnicodeSupport;
	grammar.reg = reg;
	grammar.regg = regg;
	grammar.AttlistDecl = AttlistDecl;
	grammar.CDATA_START = CDATA_START;
	grammar.CDATA_END = CDATA_END;
	grammar.CDSect = CDSect;
	grammar.Char = Char;
	grammar.Comment = Comment;
	grammar.COMMENT_START = COMMENT_START;
	grammar.COMMENT_END = COMMENT_END;
	grammar.DOCTYPE_DECL_START = DOCTYPE_DECL_START;
	grammar.elementdecl = elementdecl;
	grammar.EntityDecl = EntityDecl;
	grammar.EntityValue = EntityValue;
	grammar.ExternalID = ExternalID;
	grammar.ExternalID_match = ExternalID_match;
	grammar.Name = Name;
	grammar.NotationDecl = NotationDecl;
	grammar.Reference = Reference;
	grammar.PEReference = PEReference;
	grammar.PI = PI;
	grammar.PUBLIC = PUBLIC;
	grammar.PubidLiteral = PubidLiteral;
	grammar.QName = QName;
	grammar.QName_exact = QName_exact;
	grammar.QName_group = QName_group;
	grammar.S = S;
	grammar.SChar_s = SChar_s;
	grammar.S_OPT = S_OPT;
	grammar.SYSTEM = SYSTEM;
	grammar.SystemLiteral = SystemLiteral;
	grammar.UNICODE_REPLACEMENT_CHARACTER = UNICODE_REPLACEMENT_CHARACTER;
	grammar.UNICODE_SUPPORT = UNICODE_SUPPORT;
	grammar.XMLDecl = XMLDecl;
	return grammar;
}

var hasRequiredDom;

function requireDom () {
	if (hasRequiredDom) return dom;
	hasRequiredDom = 1;

	var conventions = requireConventions();
	var find = conventions.find;
	var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
	var hasOwn = conventions.hasOwn;
	var isHTMLMimeType = conventions.isHTMLMimeType;
	var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
	var isHTMLVoidElement = conventions.isHTMLVoidElement;
	var MIME_TYPE = conventions.MIME_TYPE;
	var NAMESPACE = conventions.NAMESPACE;

	/**
	 * Private DOM Constructor symbol
	 *
	 * Internal symbol used for construction of all classes whose constructors should be private.
	 * Currently used for checks in `Node`, `Document`, `Element`, `Attr`, `CharacterData`, `Text`, `Comment`,
	 * `CDATASection`, `DocumentType`, `Notation`, `Entity`, `EntityReference`, `DocumentFragment`, `ProcessingInstruction`
	 * so the constructor can't be used from outside the module.
	 */
	var PDC = Symbol();

	var errors = requireErrors();
	var DOMException = errors.DOMException;
	var DOMExceptionName = errors.DOMExceptionName;

	var g = requireGrammar();

	/**
	 * Checks if the given symbol equals the Private DOM Constructor symbol (PDC)
	 * and throws an Illegal constructor exception when the symbols don't match.
	 * This ensures that the constructor remains private and can't be used outside this module.
	 */
	function checkSymbol(symbol) {
		if (symbol !== PDC) {
			throw new TypeError('Illegal constructor');
		}
	}

	/**
	 * A prerequisite for `[].filter`, to drop elements that are empty.
	 *
	 * @param {string} input
	 * The string to be checked.
	 * @returns {boolean}
	 * Returns `true` if the input string is not empty, `false` otherwise.
	 */
	function notEmptyString(input) {
		return input !== '';
	}
	/**
	 * Splits a string on ASCII whitespace characters (U+0009 TAB, U+000A LF, U+000C FF, U+000D CR,
	 * U+0020 SPACE).
	 * It follows the definition from the infra specification from WHATWG.
	 *
	 * @param {string} input
	 * The string to be split.
	 * @returns {string[]}
	 * An array of the split strings. The array can be empty if the input string is empty or only
	 * contains whitespace characters.
	 * @see {@link https://infra.spec.whatwg.org/#split-on-ascii-whitespace}
	 * @see {@link https://infra.spec.whatwg.org/#ascii-whitespace}
	 */
	function splitOnASCIIWhitespace(input) {
		// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
		return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
	}

	/**
	 * Adds element as a key to current if it is not already present.
	 *
	 * @param {Record<string, boolean | undefined>} current
	 * The current record object to which the element will be added as a key.
	 * The object's keys are string types and values are either boolean or undefined.
	 * @param {string} element
	 * The string to be added as a key to the current record.
	 * @returns {Record<string, boolean | undefined>}
	 * The updated record object after the addition of the new element.
	 */
	function orderedSetReducer(current, element) {
		if (!hasOwn(current, element)) {
			current[element] = true;
		}
		return current;
	}

	/**
	 * Converts a string into an ordered set by splitting the input on ASCII whitespace and
	 * ensuring uniqueness of elements.
	 * This follows the definition of an ordered set from the infra specification by WHATWG.
	 *
	 * @param {string} input
	 * The input string to be transformed into an ordered set.
	 * @returns {string[]}
	 * An array of unique strings obtained from the input, preserving the original order.
	 * The array can be empty if the input string is empty or only contains whitespace characters.
	 * @see {@link https://infra.spec.whatwg.org/#ordered-set}
	 */
	function toOrderedSet(input) {
		if (!input) return [];
		var list = splitOnASCIIWhitespace(input);
		return Object.keys(list.reduce(orderedSetReducer, {}));
	}

	/**
	 * Uses `list.indexOf` to implement a function that behaves like `Array.prototype.includes`.
	 * This function is used in environments where `Array.prototype.includes` may not be available.
	 *
	 * @param {any[]} list
	 * The array in which to search for the element.
	 * @returns {function(any): boolean}
	 * A function that accepts an element and returns a boolean indicating whether the element is
	 * included in the provided list.
	 */
	function arrayIncludes(list) {
		return function (element) {
			return list && list.indexOf(element) !== -1;
		};
	}

	/**
	 * Validates a qualified name based on the criteria provided in the DOM specification by
	 * WHATWG.
	 *
	 * @param {string} qualifiedName
	 * The qualified name to be validated.
	 * @throws {DOMException}
	 * With code {@link DOMException.INVALID_CHARACTER_ERR} if the qualified name contains an
	 * invalid character.
	 * @see {@link https://dom.spec.whatwg.org/#validate}
	 */
	function validateQualifiedName(qualifiedName) {
		if (!g.QName_exact.test(qualifiedName)) {
			throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in qualified name "' + qualifiedName + '"');
		}
	}

	/**
	 * Validates a qualified name and the namespace associated with it,
	 * based on the criteria provided in the DOM specification by WHATWG.
	 *
	 * @param {string | null} namespace
	 * The namespace to be validated. It can be a string or null.
	 * @param {string} qualifiedName
	 * The qualified name to be validated.
	 * @returns {[namespace: string | null, prefix: string | null, localName: string]}
	 * Returns a tuple with the namespace,
	 * prefix and local name of the qualified name.
	 * @throws {DOMException}
	 * Throws a DOMException if the qualified name or the namespace is not valid.
	 * @see {@link https://dom.spec.whatwg.org/#validate-and-extract}
	 */
	function validateAndExtract(namespace, qualifiedName) {
		validateQualifiedName(qualifiedName);
		namespace = namespace || null;
		/**
		 * @type {string | null}
		 */
		var prefix = null;
		var localName = qualifiedName;
		if (qualifiedName.indexOf(':') >= 0) {
			var splitResult = qualifiedName.split(':');
			prefix = splitResult[0];
			localName = splitResult[1];
		}
		if (prefix !== null && namespace === null) {
			throw new DOMException(DOMException.NAMESPACE_ERR, 'prefix is non-null and namespace is null');
		}
		if (prefix === 'xml' && namespace !== conventions.NAMESPACE.XML) {
			throw new DOMException(DOMException.NAMESPACE_ERR, 'prefix is "xml" and namespace is not the XML namespace');
		}
		if ((prefix === 'xmlns' || qualifiedName === 'xmlns') && namespace !== conventions.NAMESPACE.XMLNS) {
			throw new DOMException(
				DOMException.NAMESPACE_ERR,
				'either qualifiedName or prefix is "xmlns" and namespace is not the XMLNS namespace'
			);
		}
		if (namespace === conventions.NAMESPACE.XMLNS && prefix !== 'xmlns' && qualifiedName !== 'xmlns') {
			throw new DOMException(
				DOMException.NAMESPACE_ERR,
				'namespace is the XMLNS namespace and neither qualifiedName nor prefix is "xmlns"'
			);
		}
		return [namespace, prefix, localName];
	}

	/**
	 * Copies properties from one object to another.
	 * It only copies the object's own (not inherited) properties.
	 *
	 * @param {Object} src
	 * The source object from which properties are copied.
	 * @param {Object} dest
	 * The destination object to which properties are copied.
	 */
	function copy(src, dest) {
		for (var p in src) {
			if (hasOwn(src, p)) {
				dest[p] = src[p];
			}
		}
	}

	/**
	 * Extends a class with the properties and methods of a super class.
	 * It uses a form of prototypal inheritance, and establishes the `constructor` property
	 * correctly(?).
	 *
	 * It is not clear to the current maintainers if this implementation is making sense,
	 * since it creates an intermediate prototype function,
	 * which all properties of `Super` are copied onto using `_copy`.
	 *
	 * @param {Object} Class
	 * The class that is to be extended.
	 * @param {Object} Super
	 * The super class from which properties and methods are inherited.
	 * @private
	 */
	function _extends(Class, Super) {
		var pt = Class.prototype;
		if (!(pt instanceof Super)) {
			function t() {}
			t.prototype = Super.prototype;
			t = new t();
			copy(pt, t);
			Class.prototype = pt = t;
		}
		if (pt.constructor != Class) {
			if (typeof Class != 'function') {
				console.error('unknown Class:' + Class);
			}
			pt.constructor = Class;
		}
	}

	var NodeType = {};
	var ELEMENT_NODE = (NodeType.ELEMENT_NODE = 1);
	var ATTRIBUTE_NODE = (NodeType.ATTRIBUTE_NODE = 2);
	var TEXT_NODE = (NodeType.TEXT_NODE = 3);
	var CDATA_SECTION_NODE = (NodeType.CDATA_SECTION_NODE = 4);
	var ENTITY_REFERENCE_NODE = (NodeType.ENTITY_REFERENCE_NODE = 5);
	var ENTITY_NODE = (NodeType.ENTITY_NODE = 6);
	var PROCESSING_INSTRUCTION_NODE = (NodeType.PROCESSING_INSTRUCTION_NODE = 7);
	var COMMENT_NODE = (NodeType.COMMENT_NODE = 8);
	var DOCUMENT_NODE = (NodeType.DOCUMENT_NODE = 9);
	var DOCUMENT_TYPE_NODE = (NodeType.DOCUMENT_TYPE_NODE = 10);
	var DOCUMENT_FRAGMENT_NODE = (NodeType.DOCUMENT_FRAGMENT_NODE = 11);
	var NOTATION_NODE = (NodeType.NOTATION_NODE = 12);

	var DocumentPosition = conventions.freeze({
		DOCUMENT_POSITION_DISCONNECTED: 1,
		DOCUMENT_POSITION_PRECEDING: 2,
		DOCUMENT_POSITION_FOLLOWING: 4,
		DOCUMENT_POSITION_CONTAINS: 8,
		DOCUMENT_POSITION_CONTAINED_BY: 16,
		DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32,
	});

	//helper functions for compareDocumentPosition
	/**
	 * Constructs a parent chain for a node.
	 *
	 * @param {Node} node
	 * The start node from which the parent chain will be constructed.
	 * @returns {Node[]}
	 * The array of nodes representing the parent chain from the root to the specified node.
	 */
	function parentChain(node) {
		var chain = [];
		while (node.parentNode || node.ownerElement) {
			node = node.parentNode || node.ownerElement;
			chain.unshift(node);
		}
		return chain;
	}

	/**
	 * Finds the common ancestor in two parent chains.
	 *
	 * @param {Node[]} a
	 * The first parent chain.
	 * @param {Node[]} b
	 * The second parent chain.
	 * @returns {Node}
	 * The common ancestor node if it exists. If there is no common ancestor, the function will
	 * return `null`.
	 */
	function commonAncestor(a, b) {
		if (b.length < a.length) return commonAncestor(b, a);
		var c = null;
		for (var n in a) {
			if (a[n] !== b[n]) return c;
			c = a[n];
		}
		return c;
	}

	/**
	 * Assigns a unique identifier to a document to ensure consistency while comparing unrelated
	 * nodes.
	 *
	 * @param {Document} doc
	 * The document to which a unique identifier is to be assigned.
	 * @returns {string}
	 * The unique identifier of the document. If the document already had a unique identifier, the
	 * function will return the existing one.
	 */
	function docGUID(doc) {
		if (!doc.guid) doc.guid = Math.random();
		return doc.guid;
	}
	//-- end of helper functions

	/**
	 * The NodeList interface provides the abstraction of an ordered collection of nodes,
	 * without defining or constraining how this collection is implemented.
	 * NodeList objects in the DOM are live.
	 * The items in the NodeList are accessible via an integral index, starting from 0.
	 * You can also access the items of the NodeList with a `for...of` loop.
	 *
	 * @class NodeList
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
	 * @constructs NodeList
	 */
	function NodeList() {}
	NodeList.prototype = {
		/**
		 * The number of nodes in the list. The range of valid child node indices is 0 to length-1
		 * inclusive.
		 *
		 * @type {number}
		 */
		length: 0,
		/**
		 * Returns the item at `index`. If index is greater than or equal to the number of nodes in
		 * the list, this returns null.
		 *
		 * @param index
		 * Unsigned long Index into the collection.
		 * @returns {Node | null}
		 * The node at position `index` in the NodeList,
		 * or null if that is not a valid index.
		 */
		item: function (index) {
			return index >= 0 && index < this.length ? this[index] : null;
		},
		/**
		 * Returns a string representation of the NodeList.
		 *
		 * @param {unknown} nodeFilter
		 * __A filter function? Not implemented according to the spec?__.
		 * @returns {string}
		 * A string representation of the NodeList.
		 */
		toString: function (nodeFilter) {
			for (var buf = [], i = 0; i < this.length; i++) {
				serializeToString(this[i], buf, nodeFilter);
			}
			return buf.join('');
		},
		/**
		 * Filters the NodeList based on a predicate.
		 *
		 * @param {function(Node): boolean} predicate
		 * - A predicate function to filter the NodeList.
		 * @returns {Node[]}
		 * An array of nodes that satisfy the predicate.
		 * @private
		 */
		filter: function (predicate) {
			return Array.prototype.filter.call(this, predicate);
		},
		/**
		 * Returns the first index at which a given node can be found in the NodeList, or -1 if it is
		 * not present.
		 *
		 * @param {Node} item
		 * - The Node item to locate in the NodeList.
		 * @returns {number}
		 * The first index of the node in the NodeList; -1 if not found.
		 * @private
		 */
		indexOf: function (item) {
			return Array.prototype.indexOf.call(this, item);
		},
	};
	NodeList.prototype[Symbol.iterator] = function () {
		var me = this;
		var index = 0;

		return {
			next: function () {
				if (index < me.length) {
					return {
						value: me[index++],
						done: false,
					};
				} else {
					return {
						done: true,
					};
				}
			},
			return: function () {
				return {
					done: true,
				};
			},
		};
	};

	/**
	 * Represents a live collection of nodes that is automatically updated when its associated
	 * document changes.
	 *
	 * @class LiveNodeList
	 * @param {Node} node
	 * The associated node.
	 * @param {function} refresh
	 * The function to refresh the live node list.
	 * @augments NodeList
	 * @constructs LiveNodeList
	 */
	function LiveNodeList(node, refresh) {
		this._node = node;
		this._refresh = refresh;
		_updateLiveList(this);
	}
	/**
	 * Updates the live node list.
	 *
	 * @param {LiveNodeList} list
	 * The live node list to update.
	 * @private
	 */
	function _updateLiveList(list) {
		var inc = list._node._inc || list._node.ownerDocument._inc;
		if (list._inc !== inc) {
			var ls = list._refresh(list._node);
			__set__(list, 'length', ls.length);
			if (!list.$$length || ls.length < list.$$length) {
				for (var i = ls.length; i in list; i++) {
					if (hasOwn(list, i)) {
						delete list[i];
					}
				}
			}
			copy(ls, list);
			list._inc = inc;
		}
	}
	/**
	 * Returns the node at position `index` in the LiveNodeList, or null if that is not a valid
	 * index.
	 *
	 * @param {number} i
	 * Index into the collection.
	 * @returns {Node | null}
	 * The node at position `index` in the LiveNodeList, or null if that is not a valid index.
	 */
	LiveNodeList.prototype.item = function (i) {
		_updateLiveList(this);
		return this[i] || null;
	};

	_extends(LiveNodeList, NodeList);

	/**
	 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes
	 * that can be accessed by name.
	 * Note that NamedNodeMap does not inherit from NodeList;
	 * NamedNodeMaps are not maintained in any particular order.
	 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal
	 * index,
	 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
	 * and does not imply that the DOM specifies an order to these Nodes.
	 * NamedNodeMap objects in the DOM are live.
	 * used for attributes or DocumentType entities
	 *
	 * This implementation only supports property indices, but does not support named properties,
	 * as specified in the living standard.
	 *
	 * @class NamedNodeMap
	 * @see https://dom.spec.whatwg.org/#interface-namednodemap
	 * @see https://webidl.spec.whatwg.org/#dfn-supported-property-names
	 * @constructs NamedNodeMap
	 */
	function NamedNodeMap() {}
	/**
	 * Returns the index of a node within the list.
	 *
	 * @param {Array} list
	 * The list of nodes.
	 * @param {Node} node
	 * The node to find.
	 * @returns {number}
	 * The index of the node within the list, or -1 if not found.
	 * @private
	 */
	function _findNodeIndex(list, node) {
		var i = 0;
		while (i < list.length) {
			if (list[i] === node) {
				return i;
			}
			i++;
		}
	}
	/**
	 * Adds a new attribute to the list and updates the owner element of the attribute.
	 *
	 * @param {Element} el
	 * The element which will become the owner of the new attribute.
	 * @param {NamedNodeMap} list
	 * The list to which the new attribute will be added.
	 * @param {Attr} newAttr
	 * The new attribute to be added.
	 * @param {Attr} oldAttr
	 * The old attribute to be replaced, or null if no attribute is to be replaced.
	 * @returns {void}
	 * @private
	 */
	function _addNamedNode(el, list, newAttr, oldAttr) {
		if (oldAttr) {
			list[_findNodeIndex(list, oldAttr)] = newAttr;
		} else {
			list[list.length] = newAttr;
			list.length++;
		}
		if (el) {
			newAttr.ownerElement = el;
			var doc = el.ownerDocument;
			if (doc) {
				oldAttr && _onRemoveAttribute(doc, el, oldAttr);
				_onAddAttribute(doc, el, newAttr);
			}
		}
	}
	/**
	 * Removes an attribute from the list and updates the owner element of the attribute.
	 *
	 * @param {Element} el
	 * The element which is the current owner of the attribute.
	 * @param {NamedNodeMap} list
	 * The list from which the attribute will be removed.
	 * @param {Attr} attr
	 * The attribute to be removed.
	 * @returns {void}
	 * @private
	 */
	function _removeNamedNode(el, list, attr) {
		//console.log('remove attr:'+attr)
		var i = _findNodeIndex(list, attr);
		if (i >= 0) {
			var lastIndex = list.length - 1;
			while (i <= lastIndex) {
				list[i] = list[++i];
			}
			list.length = lastIndex;
			if (el) {
				var doc = el.ownerDocument;
				if (doc) {
					_onRemoveAttribute(doc, el, attr);
				}
				attr.ownerElement = null;
			}
		}
	}
	NamedNodeMap.prototype = {
		length: 0,
		item: NodeList.prototype.item,

		/**
		 * Get an attribute by name. Note: Name is in lower case in case of HTML namespace and
		 * document.
		 *
		 * @param {string} localName
		 * The local name of the attribute.
		 * @returns {Attr | null}
		 * The attribute with the given local name, or null if no such attribute exists.
		 * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name
		 */
		getNamedItem: function (localName) {
			if (this._ownerElement && this._ownerElement._isInHTMLDocumentAndNamespace()) {
				localName = localName.toLowerCase();
			}
			var i = 0;
			while (i < this.length) {
				var attr = this[i];
				if (attr.nodeName === localName) {
					return attr;
				}
				i++;
			}
			return null;
		},

		/**
		 * Set an attribute.
		 *
		 * @param {Attr} attr
		 * The attribute to set.
		 * @returns {Attr | null}
		 * The old attribute with the same local name and namespace URI as the new one, or null if no
		 * such attribute exists.
		 * @throws {DOMException}
		 * With code:
		 * - {@link INUSE_ATTRIBUTE_ERR} - If the attribute is already an attribute of another
		 * element.
		 * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
		 */
		setNamedItem: function (attr) {
			var el = attr.ownerElement;
			if (el && el !== this._ownerElement) {
				throw new DOMException(DOMException.INUSE_ATTRIBUTE_ERR);
			}
			var oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
			if (oldAttr === attr) {
				return attr;
			}
			_addNamedNode(this._ownerElement, this, attr, oldAttr);
			return oldAttr;
		},

		/**
		 * Set an attribute, replacing an existing attribute with the same local name and namespace
		 * URI if one exists.
		 *
		 * @param {Attr} attr
		 * The attribute to set.
		 * @returns {Attr | null}
		 * The old attribute with the same local name and namespace URI as the new one, or null if no
		 * such attribute exists.
		 * @throws {DOMException}
		 * Throws a DOMException with the name "InUseAttributeError" if the attribute is already an
		 * attribute of another element.
		 * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
		 */
		setNamedItemNS: function (attr) {
			return this.setNamedItem(attr);
		},

		/**
		 * Removes an attribute specified by the local name.
		 *
		 * @param {string} localName
		 * The local name of the attribute to be removed.
		 * @returns {Attr}
		 * The attribute node that was removed.
		 * @throws {DOMException}
		 * With code:
		 * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given name is found.
		 * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditem
		 * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-name
		 */
		removeNamedItem: function (localName) {
			var attr = this.getNamedItem(localName);
			if (!attr) {
				throw new DOMException(DOMException.NOT_FOUND_ERR, localName);
			}
			_removeNamedNode(this._ownerElement, this, attr);
			return attr;
		},

		/**
		 * Removes an attribute specified by the namespace and local name.
		 *
		 * @param {string | null} namespaceURI
		 * The namespace URI of the attribute to be removed.
		 * @param {string} localName
		 * The local name of the attribute to be removed.
		 * @returns {Attr}
		 * The attribute node that was removed.
		 * @throws {DOMException}
		 * With code:
		 * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given namespace URI and local
		 * name is found.
		 * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditemns
		 * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace
		 */
		removeNamedItemNS: function (namespaceURI, localName) {
			var attr = this.getNamedItemNS(namespaceURI, localName);
			if (!attr) {
				throw new DOMException(DOMException.NOT_FOUND_ERR, namespaceURI ? namespaceURI + ' : ' + localName : localName);
			}
			_removeNamedNode(this._ownerElement, this, attr);
			return attr;
		},

		/**
		 * Get an attribute by namespace and local name.
		 *
		 * @param {string | null} namespaceURI
		 * The namespace URI of the attribute.
		 * @param {string} localName
		 * The local name of the attribute.
		 * @returns {Attr | null}
		 * The attribute with the given namespace URI and local name, or null if no such attribute
		 * exists.
		 * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace
		 */
		getNamedItemNS: function (namespaceURI, localName) {
			if (!namespaceURI) {
				namespaceURI = null;
			}
			var i = 0;
			while (i < this.length) {
				var node = this[i];
				if (node.localName === localName && node.namespaceURI === namespaceURI) {
					return node;
				}
				i++;
			}
			return null;
		},
	};
	NamedNodeMap.prototype[Symbol.iterator] = function () {
		var me = this;
		var index = 0;

		return {
			next: function () {
				if (index < me.length) {
					return {
						value: me[index++],
						done: false,
					};
				} else {
					return {
						done: true,
					};
				}
			},
			return: function () {
				return {
					done: true,
				};
			},
		};
	};

	/**
	 * The DOMImplementation interface provides a number of methods for performing operations that
	 * are independent of any particular instance of the document object model.
	 *
	 * The DOMImplementation interface represents an object providing methods which are not
	 * dependent on any particular document.
	 * Such an object is returned by the `Document.implementation` property.
	 *
	 * **The individual methods describe the differences compared to the specs**.
	 *
	 * @class DOMImplementation
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core
	 *      (Initial)
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
	 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
	 * @constructs DOMImplementation
	 */
	function DOMImplementation() {}

	DOMImplementation.prototype = {
		/**
		 * Test if the DOM implementation implements a specific feature and version, as specified in
		 * {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#DOMFeatures DOM Features}.
		 *
		 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given
		 * feature is supported. The different implementations fairly diverged in what kind of
		 * features were reported. The latest version of the spec settled to force this method to
		 * always return true, where the functionality was accurate and in use.
		 *
		 * @deprecated
		 * It is deprecated and modern browsers return true in all cases.
		 * @function DOMImplementation#hasFeature
		 * @param {string} feature
		 * The name of the feature to test.
		 * @param {string} [version]
		 * This is the version number of the feature to test.
		 * @returns {boolean}
		 * Always returns true.
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
		 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
		 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
		 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-5CED94D7 DOM Level 3 Core
		 */
		hasFeature: function (feature, version) {
			return true;
		},
		/**
		 * Creates a DOM Document object of the specified type with its document element. Note that
		 * based on the {@link DocumentType}
		 * given to create the document, the implementation may instantiate specialized
		 * {@link Document} objects that support additional features than the "Core", such as "HTML"
		 * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML}.
		 * On the other hand, setting the {@link DocumentType} after the document was created makes
		 * this very unlikely to happen. Alternatively, specialized {@link Document} creation methods,
		 * such as createHTMLDocument
		 * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML},
		 * can be used to obtain specific types of {@link Document} objects.
		 *
		 * __It behaves slightly different from the description in the living standard__:
		 * - There is no interface/class `XMLDocument`, it returns a `Document`
		 * instance (with it's `type` set to `'xml'`).
		 * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
		 *
		 * @function DOMImplementation.createDocument
		 * @param {string | null} namespaceURI
		 * The
		 * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-namespaceURI namespace URI}
		 * of the document element to create or null.
		 * @param {string | null} qualifiedName
		 * The
		 * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified name}
		 * of the document element to be created or null.
		 * @param {DocumentType | null} [doctype=null]
		 * The type of document to be created or null. When doctype is not null, its
		 * {@link Node#ownerDocument} attribute is set to the document being created. Default is
		 * `null`
		 * @returns {Document}
		 * A new {@link Document} object with its document element. If the NamespaceURI,
		 * qualifiedName, and doctype are null, the returned {@link Document} is empty with no
		 * document element.
		 * @throws {DOMException}
		 * With code:
		 *
		 * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
		 * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
		 * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed, if the qualifiedName has a
		 * prefix and the namespaceURI is null, or if the qualifiedName is null and the namespaceURI
		 * is different from null, or if the qualifiedName has a prefix that is "xml" and the
		 * namespaceURI is different from "{@link http://www.w3.org/XML/1998/namespace}"
		 * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#Namespaces XML Namespaces},
		 * or if the DOM implementation does not support the "XML" feature but a non-null namespace
		 * URI was provided, since namespaces were defined by XML.
		 * - `WRONG_DOCUMENT_ERR`: Raised if doctype has already been used with a different document
		 * or was created from a different implementation.
		 * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
		 * "XML" and the language exposed through the Document does not support XML Namespaces (such
		 * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
		 * @since DOM Level 2.
		 * @see {@link #createHTMLDocument}
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
		 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument DOM Living Standard
		 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-2-Core-DOM-createDocument DOM
		 *      Level 3 Core
		 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM
		 *      Level 2 Core (initial)
		 */
		createDocument: function (namespaceURI, qualifiedName, doctype) {
			var contentType = MIME_TYPE.XML_APPLICATION;
			if (namespaceURI === NAMESPACE.HTML) {
				contentType = MIME_TYPE.XML_XHTML_APPLICATION;
			} else if (namespaceURI === NAMESPACE.SVG) {
				contentType = MIME_TYPE.XML_SVG_IMAGE;
			}
			var doc = new Document(PDC, { contentType: contentType });
			doc.implementation = this;
			doc.childNodes = new NodeList();
			doc.doctype = doctype || null;
			if (doctype) {
				doc.appendChild(doctype);
			}
			if (qualifiedName) {
				var root = doc.createElementNS(namespaceURI, qualifiedName);
				doc.appendChild(root);
			}
			return doc;
		},
		/**
		 * Creates an empty DocumentType node. Entity declarations and notations are not made
		 * available. Entity reference expansions and default attribute additions do not occur.
		 *
		 * **This behavior is slightly different from the one in the specs**:
		 * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
		 * - `publicId` and `systemId` contain the raw data including any possible quotes,
		 *   so they can always be serialized back to the original value
		 * - `internalSubset` contains the raw string between `[` and `]` if present,
		 *   but is not parsed or validated in any form.
		 *
		 * @function DOMImplementation#createDocumentType
		 * @param {string} qualifiedName
		 * The {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified
		 * name} of the document type to be created.
		 * @param {string} [publicId]
		 * The external subset public identifier.
		 * @param {string} [systemId]
		 * The external subset system identifier.
		 * @param {string} [internalSubset]
		 * the internal subset or an empty string if it is not present
		 * @returns {DocumentType}
		 * A new {@link DocumentType} node with {@link Node#ownerDocument} set to null.
		 * @throws {DOMException}
		 * With code:
		 *
		 * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
		 * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
		 * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed.
		 * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
		 * "XML" and the language exposed through the Document does not support XML Namespaces (such
		 * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
		 * @since DOM Level 2.
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType
		 *      MDN
		 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living
		 *      Standard
		 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-3-Core-DOM-createDocType DOM
		 *      Level 3 Core
		 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM
		 *      Level 2 Core
		 * @see https://github.com/xmldom/xmldom/blob/master/CHANGELOG.md#050
		 * @see https://www.w3.org/TR/DOM-Level-2-Core/#core-ID-Core-DocType-internalSubset
		 * @prettierignore
		 */
		createDocumentType: function (qualifiedName, publicId, systemId, internalSubset) {
			validateQualifiedName(qualifiedName);
			var node = new DocumentType(PDC);
			node.name = qualifiedName;
			node.nodeName = qualifiedName;
			node.publicId = publicId || '';
			node.systemId = systemId || '';
			node.internalSubset = internalSubset || '';
			node.childNodes = new NodeList();

			return node;
		},
		/**
		 * Returns an HTML document, that might already have a basic DOM structure.
		 *
		 * __It behaves slightly different from the description in the living standard__:
		 * - If the first argument is `false` no initial nodes are added (steps 3-7 in the specs are
		 * omitted)
		 * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
		 *
		 * @param {string | false} [title]
		 * A string containing the title to give the new HTML document.
		 * @returns {Document}
		 * The HTML document.
		 * @since WHATWG Living Standard.
		 * @see {@link #createDocument}
		 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
		 * @see https://dom.spec.whatwg.org/#html-document
		 */
		createHTMLDocument: function (title) {
			var doc = new Document(PDC, { contentType: MIME_TYPE.HTML });
			doc.implementation = this;
			doc.childNodes = new NodeList();
			if (title !== false) {
				doc.doctype = this.createDocumentType('html');
				doc.doctype.ownerDocument = doc;
				doc.appendChild(doc.doctype);
				var htmlNode = doc.createElement('html');
				doc.appendChild(htmlNode);
				var headNode = doc.createElement('head');
				htmlNode.appendChild(headNode);
				if (typeof title === 'string') {
					var titleNode = doc.createElement('title');
					titleNode.appendChild(doc.createTextNode(title));
					headNode.appendChild(titleNode);
				}
				htmlNode.appendChild(doc.createElement('body'));
			}
			return doc;
		},
	};

	/**
	 * The DOM Node interface is an abstract base class upon which many other DOM API objects are
	 * based, thus letting those object types to be used similarly and often interchangeably. As an
	 * abstract class, there is no such thing as a plain Node object. All objects that implement
	 * Node functionality are based on one of its subclasses. Most notable are Document, Element,
	 * and DocumentFragment.
	 *
	 * In addition, every kind of DOM node is represented by an interface based on Node. These
	 * include Attr, CharacterData (which Text, Comment, CDATASection and ProcessingInstruction are
	 * all based on), and DocumentType.
	 *
	 * In some cases, a particular feature of the base Node interface may not apply to one of its
	 * child interfaces; in that case, the inheriting node may return null or throw an exception,
	 * depending on circumstances. For example, attempting to add children to a node type that
	 * cannot have children will throw an exception.
	 *
	 * **This behavior is slightly different from the in the specs**:
	 * - unimplemented interfaces: `EventTarget`
	 *
	 * @class
	 * @abstract
	 * @param {Symbol} symbol
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
	 * @see https://dom.spec.whatwg.org/#node
	 * @prettierignore
	 */
	function Node(symbol) {
		checkSymbol(symbol);
	}

	Node.prototype = {
		/**
		 * The first child of this node.
		 *
		 * @type {Node | null}
		 */
		firstChild: null,
		/**
		 * The last child of this node.
		 *
		 * @type {Node | null}
		 */
		lastChild: null,
		/**
		 * The previous sibling of this node.
		 *
		 * @type {Node | null}
		 */
		previousSibling: null,
		/**
		 * The next sibling of this node.
		 *
		 * @type {Node | null}
		 */
		nextSibling: null,
		/**
		 * The parent node of this node.
		 *
		 * @type {Node | null}
		 */
		parentNode: null,
		/**
		 * The parent element of this node.
		 *
		 * @type {Element | null}
		 */
		get parentElement() {
			return this.parentNode && this.parentNode.nodeType === this.ELEMENT_NODE ? this.parentNode : null;
		},
		/**
		 * The child nodes of this node.
		 *
		 * @type {NodeList}
		 */
		childNodes: null,
		/**
		 * The document object associated with this node.
		 *
		 * @type {Document | null}
		 */
		ownerDocument: null,
		/**
		 * The value of this node.
		 *
		 * @type {string | null}
		 */
		nodeValue: null,
		/**
		 * The namespace URI of this node.
		 *
		 * @type {string | null}
		 */
		namespaceURI: null,
		/**
		 * The prefix of the namespace for this node.
		 *
		 * @type {string | null}
		 */
		prefix: null,
		/**
		 * The local part of the qualified name of this node.
		 *
		 * @type {string | null}
		 */
		localName: null,
		/**
		 * The baseURI is currently always `about:blank`,
		 * since that's what happens when you create a document from scratch.
		 *
		 * @type {'about:blank'}
		 */
		baseURI: 'about:blank',
		/**
		 * Is true if this node is part of a document.
		 *
		 * @type {boolean}
		 */
		get isConnected() {
			var rootNode = this.getRootNode();
			return rootNode && rootNode.nodeType === rootNode.DOCUMENT_NODE;
		},
		/**
		 * Checks whether `other` is an inclusive descendant of this node.
		 *
		 * @param {Node | null | undefined} other
		 * The node to check.
		 * @returns {boolean}
		 * True if `other` is an inclusive descendant of this node; false otherwise.
		 * @see https://dom.spec.whatwg.org/#dom-node-contains
		 */
		contains: function (other) {
			if (!other) return false;
			var parent = other;
			do {
				if (this === parent) return true;
				parent = other.parentNode;
			} while (parent);
			return false;
		},
		/**
		 * @typedef GetRootNodeOptions
		 * @property {boolean} [composed=false]
		 */
		/**
		 * Searches for the root node of this node.
		 *
		 * **This behavior is slightly different from the in the specs**:
		 * - ignores `options.composed`, since `ShadowRoot`s are unsupported, always returns root.
		 *
		 * @param {GetRootNodeOptions} [options]
		 * @returns {Node}
		 * Root node.
		 * @see https://dom.spec.whatwg.org/#dom-node-getrootnode
		 * @see https://dom.spec.whatwg.org/#concept-shadow-including-root
		 */
		getRootNode: function (options) {
			var parent = this;
			do {
				if (!parent.parentNode) {
					return parent;
				}
				parent = parent.parentNode;
			} while (parent);
		},
		/**
		 * Checks whether the given node is equal to this node.
		 *
		 * @param {Node} [otherNode]
		 * @see https://dom.spec.whatwg.org/#concept-node-equals
		 */
		isEqualNode: function (otherNode) {
			if (!otherNode) return false;

			if (this.nodeType !== otherNode.nodeType) return false;

			switch (this.nodeType) {
				case this.DOCUMENT_TYPE_NODE:
					if (this.name !== otherNode.name) return false;
					if (this.publicId !== otherNode.publicId) return false;
					if (this.systemId !== otherNode.systemId) return false;
					break;
				case this.ELEMENT_NODE:
					if (this.namespaceURI !== otherNode.namespaceURI) return false;
					if (this.prefix !== otherNode.prefix) return false;
					if (this.localName !== otherNode.localName) return false;
					if (this.attributes.length !== otherNode.attributes.length) return false;
					for (var i = 0; i < this.attributes.length; i++) {
						var attr = this.attributes.item(i);
						if (!attr.isEqualNode(otherNode.getAttributeNodeNS(attr.namespaceURI, attr.localName))) {
							return false;
						}
					}
					break;
				case this.ATTRIBUTE_NODE:
					if (this.namespaceURI !== otherNode.namespaceURI) return false;
					if (this.localName !== otherNode.localName) return false;
					if (this.value !== otherNode.value) return false;

					break;
				case this.PROCESSING_INSTRUCTION_NODE:
					if (this.target !== otherNode.target || this.data !== otherNode.data) {
						return false;
					}
					break;
				case this.TEXT_NODE:
				case this.COMMENT_NODE:
					if (this.data !== otherNode.data) return false;
					break;
			}

			if (this.childNodes.length !== otherNode.childNodes.length) {
				return false;
			}

			for (var i = 0; i < this.childNodes.length; i++) {
				if (!this.childNodes[i].isEqualNode(otherNode.childNodes[i])) {
					return false;
				}
			}

			return true;
		},
		/**
		 * Checks whether or not the given node is this node.
		 *
		 * @param {Node} [otherNode]
		 */
		isSameNode: function (otherNode) {
			return this === otherNode;
		},
		/**
		 * Inserts a node before a reference node as a child of this node.
		 *
		 * @param {Node} newChild
		 * The new child node to be inserted.
		 * @param {Node | null} refChild
		 * The reference node before which newChild will be inserted.
		 * @returns {Node}
		 * The new child node successfully inserted.
		 * @throws {DOMException}
		 * Throws a DOMException if inserting the node would result in a DOM tree that is not
		 * well-formed, or if `child` is provided but is not a child of `parent`.
		 * See {@link _insertBefore} for more details.
		 * @since Modified in DOM L2
		 */
		insertBefore: function (newChild, refChild) {
			return _insertBefore(this, newChild, refChild);
		},
		/**
		 * Replaces an old child node with a new child node within this node.
		 *
		 * @param {Node} newChild
		 * The new node that is to replace the old node.
		 * If it already exists in the DOM, it is removed from its original position.
		 * @param {Node} oldChild
		 * The existing child node to be replaced.
		 * @returns {Node}
		 * Returns the replaced child node.
		 * @throws {DOMException}
		 * Throws a DOMException if replacing the node would result in a DOM tree that is not
		 * well-formed, or if `oldChild` is not a child of `this`.
		 * This can also occur if the pre-replacement validity assertion fails.
		 * See {@link _insertBefore}, {@link Node.removeChild}, and
		 * {@link assertPreReplacementValidityInDocument} for more details.
		 * @see https://dom.spec.whatwg.org/#concept-node-replace
		 */
		replaceChild: function (newChild, oldChild) {
			_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
			if (oldChild) {
				this.removeChild(oldChild);
			}
		},
		/**
		 * Removes an existing child node from this node.
		 *
		 * @param {Node} oldChild
		 * The child node to be removed.
		 * @returns {Node}
		 * Returns the removed child node.
		 * @throws {DOMException}
		 * Throws a DOMException if `oldChild` is not a child of `this`.
		 * See {@link _removeChild} for more details.
		 */
		removeChild: function (oldChild) {
			return _removeChild(this, oldChild);
		},
		/**
		 * Appends a child node to this node.
		 *
		 * @param {Node} newChild
		 * The child node to be appended to this node.
		 * If it already exists in the DOM, it is removed from its original position.
		 * @returns {Node}
		 * Returns the appended child node.
		 * @throws {DOMException}
		 * Throws a DOMException if appending the node would result in a DOM tree that is not
		 * well-formed, or if `newChild` is not a valid Node.
		 * See {@link insertBefore} for more details.
		 */
		appendChild: function (newChild) {
			return this.insertBefore(newChild, null);
		},
		/**
		 * Determines whether this node has any child nodes.
		 *
		 * @returns {boolean}
		 * Returns true if this node has any child nodes, and false otherwise.
		 */
		hasChildNodes: function () {
			return this.firstChild != null;
		},
		/**
		 * Creates a copy of the calling node.
		 *
		 * @param {boolean} deep
		 * If true, the contents of the node are recursively copied.
		 * If false, only the node itself (and its attributes, if it is an element) are copied.
		 * @returns {Node}
		 * Returns the newly created copy of the node.
		 * @throws {DOMException}
		 * May throw a DOMException if operations within {@link Element#setAttributeNode} or
		 * {@link Node#appendChild} (which are potentially invoked in this method) do not meet their
		 * specific constraints.
		 * @see {@link cloneNode}
		 */
		cloneNode: function (deep) {
			return cloneNode(this.ownerDocument || this, this, deep);
		},
		/**
		 * Puts the specified node and all of its subtree into a "normalized" form. In a normalized
		 * subtree, no text nodes in the subtree are empty and there are no adjacent text nodes.
		 *
		 * Specifically, this method merges any adjacent text nodes (i.e., nodes for which `nodeType`
		 * is `TEXT_NODE`) into a single node with the combined data. It also removes any empty text
		 * nodes.
		 *
		 * This method operates recursively, so it also normalizes any and all descendent nodes within
		 * the subtree.
		 *
		 * @throws {DOMException}
		 * May throw a DOMException if operations within removeChild or appendData (which are
		 * potentially invoked in this method) do not meet their specific constraints.
		 * @since Modified in DOM Level 2
		 * @see {@link Node.removeChild}
		 * @see {@link CharacterData.appendData}
		 */
		normalize: function () {
			var child = this.firstChild;
			while (child) {
				var next = child.nextSibling;
				if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
					this.removeChild(next);
					child.appendData(next.data);
				} else {
					child.normalize();
					child = next;
				}
			}
		},
		/**
		 * Checks whether the DOM implementation implements a specific feature and its version.
		 *
		 * @deprecated
		 * Since `DOMImplementation.hasFeature` is deprecated and always returns true.
		 * @param {string} feature
		 * The package name of the feature to test. This is the same name that can be passed to the
		 * method `hasFeature` on `DOMImplementation`.
		 * @param {string} version
		 * This is the version number of the package name to test.
		 * @returns {boolean}
		 * Returns true in all cases in the current implementation.
		 * @since Introduced in DOM Level 2
		 * @see {@link DOMImplementation.hasFeature}
		 */
		isSupported: function (feature, version) {
			return this.ownerDocument.implementation.hasFeature(feature, version);
		},
		/**
		 * Look up the prefix associated to the given namespace URI, starting from this node.
		 * **The default namespace declarations are ignored by this method.**
		 * See Namespace Prefix Lookup for details on the algorithm used by this method.
		 *
		 * **This behavior is different from the in the specs**:
		 * - no node type specific handling
		 * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
		 *
		 * @param {string | null} namespaceURI
		 * The namespace URI for which to find the associated prefix.
		 * @returns {string | null}
		 * The associated prefix, if found; otherwise, null.
		 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
		 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
		 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
		 * @see https://github.com/xmldom/xmldom/issues/322
		 * @prettierignore
		 */
		lookupPrefix: function (namespaceURI) {
			var el = this;
			while (el) {
				var map = el._nsMap;
				//console.dir(map)
				if (map) {
					for (var n in map) {
						if (hasOwn(map, n) && map[n] === namespaceURI) {
							return n;
						}
					}
				}
				el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
			}
			return null;
		},
		/**
		 * This function is used to look up the namespace URI associated with the given prefix,
		 * starting from this node.
		 *
		 * **This behavior is different from the in the specs**:
		 * - no node type specific handling
		 * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
		 *
		 * @param {string | null} prefix
		 * The prefix for which to find the associated namespace URI.
		 * @returns {string | null}
		 * The associated namespace URI, if found; otherwise, null.
		 * @since DOM Level 3
		 * @see https://dom.spec.whatwg.org/#dom-node-lookupnamespaceuri
		 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespaceURI
		 * @prettierignore
		 */
		lookupNamespaceURI: function (prefix) {
			var el = this;
			while (el) {
				var map = el._nsMap;
				//console.dir(map)
				if (map) {
					if (hasOwn(map, prefix)) {
						return map[prefix];
					}
				}
				el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
			}
			return null;
		},
		/**
		 * Determines whether the given namespace URI is the default namespace.
		 *
		 * The function works by looking up the prefix associated with the given namespace URI. If no
		 * prefix is found (i.e., the namespace URI is not registered in the namespace map of this
		 * node or any of its ancestors), it returns `true`, implying the namespace URI is considered
		 * the default.
		 *
		 * **This behavior is different from the in the specs**:
		 * - no node type specific handling
		 * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
		 *
		 * @param {string | null} namespaceURI
		 * The namespace URI to be checked.
		 * @returns {boolean}
		 * Returns true if the given namespace URI is the default namespace, false otherwise.
		 * @since DOM Level 3
		 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isDefaultNamespace
		 * @see https://dom.spec.whatwg.org/#dom-node-isdefaultnamespace
		 * @prettierignore
		 */
		isDefaultNamespace: function (namespaceURI) {
			var prefix = this.lookupPrefix(namespaceURI);
			return prefix == null;
		},
		/**
		 * Compares the reference node with a node with regard to their position in the document and
		 * according to the document order.
		 *
		 * @param {Node} other
		 * The node to compare the reference node to.
		 * @returns {number}
		 * Returns how the node is positioned relatively to the reference node according to the
		 * bitmask. 0 if reference node and given node are the same.
		 * @since DOM Level 3
		 * @see https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-compare
		 * @see https://dom.spec.whatwg.org/#dom-node-comparedocumentposition
		 */
		compareDocumentPosition: function (other) {
			if (this === other) return 0;
			var node1 = other;
			var node2 = this;
			var attr1 = null;
			var attr2 = null;
			if (node1 instanceof Attr) {
				attr1 = node1;
				node1 = attr1.ownerElement;
			}
			if (node2 instanceof Attr) {
				attr2 = node2;
				node2 = attr2.ownerElement;
				if (attr1 && node1 && node2 === node1) {
					for (var i = 0, attr; (attr = node2.attributes[i]); i++) {
						if (attr === attr1)
							return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
						if (attr === attr2)
							return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
					}
				}
			}
			if (!node1 || !node2 || node2.ownerDocument !== node1.ownerDocument) {
				return (
					DocumentPosition.DOCUMENT_POSITION_DISCONNECTED +
					DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC +
					(docGUID(node2.ownerDocument) > docGUID(node1.ownerDocument)
						? DocumentPosition.DOCUMENT_POSITION_FOLLOWING
						: DocumentPosition.DOCUMENT_POSITION_PRECEDING)
				);
			}
			var chain1 = parentChain(node1);
			var chain2 = parentChain(node2);
			if ((!attr1 && chain2.indexOf(node1) >= 0) || (attr2 && node1 === node2)) {
				return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
			}
			if ((!attr2 && chain1.indexOf(node2) >= 0) || (attr1 && node1 === node2)) {
				return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
			}
			var ca = commonAncestor(chain2, chain1);
			for (var n in ca.childNodes) {
				var child = ca.childNodes[n];
				if (child === node2) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
				if (child === node1) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
				if (chain2.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
				if (chain1.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
			}
			return 0;
		},
	};

	/**
	 * Encodes special XML characters to their corresponding entities.
	 *
	 * @param {string} c
	 * The character to be encoded.
	 * @returns {string}
	 * The encoded character.
	 * @private
	 */
	function _xmlEncoder(c) {
		return (
			(c == '<' && '&lt;') || (c == '>' && '&gt;') || (c == '&' && '&amp;') || (c == '"' && '&quot;') || '&#' + c.charCodeAt() + ';'
		);
	}

	copy(NodeType, Node);
	copy(NodeType, Node.prototype);
	copy(DocumentPosition, Node);
	copy(DocumentPosition, Node.prototype);

	/**
	 * @param callback
	 * Return true for continue,false for break.
	 * @returns
	 * boolean true: break visit;
	 */
	function _visitNode(node, callback) {
		if (callback(node)) {
			return true;
		}
		if ((node = node.firstChild)) {
			do {
				if (_visitNode(node, callback)) {
					return true;
				}
			} while ((node = node.nextSibling));
		}
	}

	/**
	 * @typedef DocumentOptions
	 * @property {string} [contentType=MIME_TYPE.XML_APPLICATION]
	 */
	/**
	 * The Document interface describes the common properties and methods for any kind of document.
	 *
	 * It should usually be created using `new DOMImplementation().createDocument(...)`
	 * or `new DOMImplementation().createHTMLDocument(...)`.
	 *
	 * The constructor is considered a private API and offers to initially set the `contentType`
	 * property via it's options parameter.
	 *
	 * @class
	 * @param {Symbol} symbol
	 * @param {DocumentOptions} [options]
	 * @augments Node
	 * @private
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document
	 * @see https://dom.spec.whatwg.org/#interface-document
	 */
	function Document(symbol, options) {
		checkSymbol(symbol);

		var opt = options || {};
		this.ownerDocument = this;
		/**
		 * The mime type of the document is determined at creation time and can not be modified.
		 *
		 * @type {string}
		 * @see https://dom.spec.whatwg.org/#concept-document-content-type
		 * @see {@link DOMImplementation}
		 * @see {@link MIME_TYPE}
		 * @readonly
		 */
		this.contentType = opt.contentType || MIME_TYPE.XML_APPLICATION;
		/**
		 * @type {'html' | 'xml'}
		 * @see https://dom.spec.whatwg.org/#concept-document-type
		 * @see {@link DOMImplementation}
		 * @readonly
		 */
		this.type = isHTMLMimeType(this.contentType) ? 'html' : 'xml';
	}

	/**
	 * Updates the namespace mapping of an element when a new attribute is added.
	 *
	 * @param {Document} doc
	 * The document that the element belongs to.
	 * @param {Element} el
	 * The element to which the attribute is being added.
	 * @param {Attr} newAttr
	 * The new attribute being added.
	 * @private
	 */
	function _onAddAttribute(doc, el, newAttr) {
		doc && doc._inc++;
		var ns = newAttr.namespaceURI;
		if (ns === NAMESPACE.XMLNS) {
			//update namespace
			el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
		}
	}

	/**
	 * Updates the namespace mapping of an element when an attribute is removed.
	 *
	 * @param {Document} doc
	 * The document that the element belongs to.
	 * @param {Element} el
	 * The element from which the attribute is being removed.
	 * @param {Attr} newAttr
	 * The attribute being removed.
	 * @param {boolean} remove
	 * Indicates whether the attribute is to be removed.
	 * @private
	 */
	function _onRemoveAttribute(doc, el, newAttr, remove) {
		doc && doc._inc++;
		var ns = newAttr.namespaceURI;
		if (ns === NAMESPACE.XMLNS) {
			//update namespace
			delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
		}
	}

	/**
	 * Updates `parent.childNodes`, adjusting the indexed items and its `length`.
	 * If `newChild` is provided and has no nextSibling, it will be appended.
	 * Otherwise, it's assumed that an item has been removed or inserted,
	 * and `parent.firstNode` and its `.nextSibling` to re-indexing all child nodes of `parent`.
	 *
	 * @param {Document} doc
	 * The parent document of `el`.
	 * @param {Node} parent
	 * The parent node whose childNodes list needs to be updated.
	 * @param {Node} [newChild]
	 * The new child node to be appended. If not provided, the function assumes a node has been
	 * removed.
	 * @private
	 */
	function _onUpdateChild(doc, parent, newChild) {
		if (doc && doc._inc) {
			doc._inc++;
			var childNodes = parent.childNodes;
			// assumes nextSibling and previousSibling were already configured upfront
			if (newChild && !newChild.nextSibling) {
				// if an item has been appended, we only need to update the last index and the length
				childNodes[childNodes.length++] = newChild;
			} else {
				// otherwise we need to reindex all items,
				// which can take a while when processing nodes with a lot of children
				var child = parent.firstChild;
				var i = 0;
				while (child) {
					childNodes[i++] = child;
					child = child.nextSibling;
				}
				childNodes.length = i;
				delete childNodes[childNodes.length];
			}
		}
	}

	/**
	 * Removes the connections between `parentNode` and `child`
	 * and any existing `child.previousSibling` or `child.nextSibling`.
	 *
	 * @param {Node} parentNode
	 * The parent node from which the child node is to be removed.
	 * @param {Node} child
	 * The child node to be removed from the parentNode.
	 * @returns {Node}
	 * Returns the child node that was removed.
	 * @throws {DOMException}
	 * With code:
	 * - {@link DOMException.NOT_FOUND_ERR} If the parentNode is not the parent of the child node.
	 * @private
	 * @see https://github.com/xmldom/xmldom/issues/135
	 * @see https://github.com/xmldom/xmldom/issues/145
	 */
	function _removeChild(parentNode, child) {
		if (parentNode !== child.parentNode) {
			throw new DOMException(DOMException.NOT_FOUND_ERR, "child's parent is not parent");
		}
		var oldPreviousSibling = child.previousSibling;
		var oldNextSibling = child.nextSibling;
		if (oldPreviousSibling) {
			oldPreviousSibling.nextSibling = oldNextSibling;
		} else {
			parentNode.firstChild = oldNextSibling;
		}
		if (oldNextSibling) {
			oldNextSibling.previousSibling = oldPreviousSibling;
		} else {
			parentNode.lastChild = oldPreviousSibling;
		}
		_onUpdateChild(parentNode.ownerDocument, parentNode);
		child.parentNode = null;
		child.previousSibling = null;
		child.nextSibling = null;
		return child;
	}

	/**
	 * Returns `true` if `node` can be a parent for insertion.
	 *
	 * @param {Node} node
	 * @returns {boolean}
	 */
	function hasValidParentNodeType(node) {
		return (
			node &&
			(node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE)
		);
	}

	/**
	 * Returns `true` if `node` can be inserted according to it's `nodeType`.
	 *
	 * @param {Node} node
	 * @returns {boolean}
	 */
	function hasInsertableNodeType(node) {
		return (
			node &&
			(node.nodeType === Node.CDATA_SECTION_NODE ||
				node.nodeType === Node.COMMENT_NODE ||
				node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
				node.nodeType === Node.DOCUMENT_TYPE_NODE ||
				node.nodeType === Node.ELEMENT_NODE ||
				node.nodeType === Node.PROCESSING_INSTRUCTION_NODE ||
				node.nodeType === Node.TEXT_NODE)
		);
	}

	/**
	 * Returns true if `node` is a DOCTYPE node.
	 *
	 * @param {Node} node
	 * @returns {boolean}
	 */
	function isDocTypeNode(node) {
		return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
	}

	/**
	 * Returns true if the node is an element.
	 *
	 * @param {Node} node
	 * @returns {boolean}
	 */
	function isElementNode(node) {
		return node && node.nodeType === Node.ELEMENT_NODE;
	}
	/**
	 * Returns true if `node` is a text node.
	 *
	 * @param {Node} node
	 * @returns {boolean}
	 */
	function isTextNode(node) {
		return node && node.nodeType === Node.TEXT_NODE;
	}

	/**
	 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
	 * according to the presence and position of a doctype node on the same level.
	 *
	 * @param {Document} doc
	 * The document node.
	 * @param {Node} child
	 * The node that would become the nextSibling if the element would be inserted.
	 * @returns {boolean}
	 * `true` if an element can be inserted before child.
	 * @private
	 */
	function isElementInsertionPossible(doc, child) {
		var parentChildNodes = doc.childNodes || [];
		if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
			return false;
		}
		var docTypeNode = find(parentChildNodes, isDocTypeNode);
		return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
	}

	/**
	 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
	 * according to the presence and position of a doctype node on the same level.
	 *
	 * @param {Node} doc
	 * The document node.
	 * @param {Node} child
	 * The node that would become the nextSibling if the element would be inserted.
	 * @returns {boolean}
	 * `true` if an element can be inserted before child.
	 * @private
	 */
	function isElementReplacementPossible(doc, child) {
		var parentChildNodes = doc.childNodes || [];

		function hasElementChildThatIsNotChild(node) {
			return isElementNode(node) && node !== child;
		}

		if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
			return false;
		}
		var docTypeNode = find(parentChildNodes, isDocTypeNode);
		return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
	}

	/**
	 * Asserts pre-insertion validity of a node into a parent before a child.
	 * Throws errors for invalid node combinations that would result in an ill-formed DOM.
	 *
	 * @param {Node} parent
	 * The parent node to insert `node` into.
	 * @param {Node} node
	 * The node to insert.
	 * @param {Node | null} child
	 * The node that should become the `nextSibling` of `node`. If null, no sibling is considered.
	 * @throws {DOMException}
	 * With code:
	 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `parent` is not a Document,
	 * DocumentFragment, or Element node.
	 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a host-including inclusive
	 * ancestor of `parent`. (Currently not implemented)
	 * - {@link DOMException.NOT_FOUND_ERR} If `child` is non-null and its `parent` is not
	 * `parent`.
	 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is not a DocumentFragment,
	 * DocumentType, Element, or CharacterData node.
	 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If either `node` is a Text node and `parent` is
	 * a document, or if `node` is a doctype and `parent` is not a document.
	 * @private
	 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
	 * @see https://dom.spec.whatwg.org/#concept-node-replace
	 */
	function assertPreInsertionValidity1to5(parent, node, child) {
		// 1. If `parent` is not a Document, DocumentFragment, or Element node, then throw a "HierarchyRequestError" DOMException.
		if (!hasValidParentNodeType(parent)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Unexpected parent node type ' + parent.nodeType);
		}
		// 2. If `node` is a host-including inclusive ancestor of `parent`, then throw a "HierarchyRequestError" DOMException.
		// not implemented!
		// 3. If `child` is non-null and its parent is not `parent`, then throw a "NotFoundError" DOMException.
		if (child && child.parentNode !== parent) {
			throw new DOMException(DOMException.NOT_FOUND_ERR, 'child not in parent');
		}
		if (
			// 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
			!hasInsertableNodeType(node) ||
			// 5. If either `node` is a Text node and `parent` is a document,
			// the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
			// || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
			// or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
			(isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE)
		) {
			throw new DOMException(
				DOMException.HIERARCHY_REQUEST_ERR,
				'Unexpected node type ' + node.nodeType + ' for parent node type ' + parent.nodeType
			);
		}
	}

	/**
	 * Asserts pre-insertion validity of a node into a document before a child.
	 * Throws errors for invalid node combinations that would result in an ill-formed DOM.
	 *
	 * @param {Document} parent
	 * The parent node to insert `node` into.
	 * @param {Node} node
	 * The node to insert.
	 * @param {Node | undefined} child
	 * The node that should become the `nextSibling` of `node`. If undefined, no sibling is
	 * considered.
	 * @returns {Node}
	 * @throws {DOMException}
	 * With code:
	 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentFragment with more than
	 * one element child or has a Text node child.
	 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentFragment with one
	 * element child and either `parent` has an element child, `child` is a doctype, or `child` is
	 * non-null and a doctype is following `child`.
	 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is an Element and `parent` has an
	 * element child, `child` is a doctype, or `child` is non-null and a doctype is following
	 * `child`.
	 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentType and `parent` has a
	 * doctype child, `child` is non-null and an element is preceding `child`, or `child` is null
	 * and `parent` has an element child.
	 * @private
	 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
	 * @see https://dom.spec.whatwg.org/#concept-node-replace
	 */
	function assertPreInsertionValidityInDocument(parent, node, child) {
		var parentChildNodes = parent.childNodes || [];
		var nodeChildNodes = node.childNodes || [];

		// DocumentFragment
		if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			var nodeChildElements = nodeChildNodes.filter(isElementNode);
			// If node has more than one element child or has a Text node child.
			if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
			}
			// Otherwise, if `node` has one element child and either `parent` has an element child,
			// `child` is a doctype, or `child` is non-null and a doctype is following `child`.
			if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
			}
		}
		// Element
		if (isElementNode(node)) {
			// `parent` has an element child, `child` is a doctype,
			// or `child` is non-null and a doctype is following `child`.
			if (!isElementInsertionPossible(parent, child)) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
			}
		}
		// DocumentType
		if (isDocTypeNode(node)) {
			// `parent` has a doctype child,
			if (find(parentChildNodes, isDocTypeNode)) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
			}
			var parentElementChild = find(parentChildNodes, isElementNode);
			// `child` is non-null and an element is preceding `child`,
			if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
			}
			// or `child` is null and `parent` has an element child.
			if (!child && parentElementChild) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can not be appended since element is present');
			}
		}
	}

	/**
	 * @param {Document} parent
	 * The parent node to insert `node` into.
	 * @param {Node} node
	 * The node to insert.
	 * @param {Node | undefined} child
	 * the node that should become the `nextSibling` of `node`
	 * @returns {Node}
	 * @throws {DOMException}
	 * For several node combinations that would create a DOM that is not well-formed.
	 * @throws {DOMException}
	 * If `child` is provided but is not a child of `parent`.
	 * @private
	 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
	 * @see https://dom.spec.whatwg.org/#concept-node-replace
	 */
	function assertPreReplacementValidityInDocument(parent, node, child) {
		var parentChildNodes = parent.childNodes || [];
		var nodeChildNodes = node.childNodes || [];

		// DocumentFragment
		if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			var nodeChildElements = nodeChildNodes.filter(isElementNode);
			// If `node` has more than one element child or has a Text node child.
			if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
			}
			// Otherwise, if `node` has one element child and either `parent` has an element child that is not `child` or a doctype is following `child`.
			if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
			}
		}
		// Element
		if (isElementNode(node)) {
			// `parent` has an element child that is not `child` or a doctype is following `child`.
			if (!isElementReplacementPossible(parent, child)) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
			}
		}
		// DocumentType
		if (isDocTypeNode(node)) {
			function hasDoctypeChildThatIsNotChild(node) {
				return isDocTypeNode(node) && node !== child;
			}

			// `parent` has a doctype child that is not `child`,
			if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
			}
			var parentElementChild = find(parentChildNodes, isElementNode);
			// or an element is preceding `child`.
			if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
				throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
			}
		}
	}

	/**
	 * Inserts a node into a parent node before a child node.
	 *
	 * @param {Node} parent
	 * The parent node to insert the node into.
	 * @param {Node} node
	 * The node to insert into the parent.
	 * @param {Node | null} child
	 * The node that should become the next sibling of the node.
	 * If null, the function inserts the node at the end of the children of the parent node.
	 * @param {Function} [_inDocumentAssertion]
	 * An optional function to check pre-insertion validity if parent is a document node.
	 * Defaults to {@link assertPreInsertionValidityInDocument}
	 * @returns {Node}
	 * Returns the inserted node.
	 * @throws {DOMException}
	 * Throws a DOMException if inserting the node would result in a DOM tree that is not
	 * well-formed. See {@link assertPreInsertionValidity1to5},
	 * {@link assertPreInsertionValidityInDocument}.
	 * @throws {DOMException}
	 * Throws a DOMException if child is provided but is not a child of the parent. See
	 * {@link Node.removeChild}
	 * @private
	 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
	 */
	function _insertBefore(parent, node, child, _inDocumentAssertion) {
		// To ensure pre-insertion validity of a node into a parent before a child, run these steps:
		assertPreInsertionValidity1to5(parent, node, child);

		// If parent is a document, and any of the statements below, switched on the interface node implements,
		// are true, then throw a "HierarchyRequestError" DOMException.
		if (parent.nodeType === Node.DOCUMENT_NODE) {
			(_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
		}

		var cp = node.parentNode;
		if (cp) {
			cp.removeChild(node); //remove and update
		}
		if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
			var newFirst = node.firstChild;
			if (newFirst == null) {
				return node;
			}
			var newLast = node.lastChild;
		} else {
			newFirst = newLast = node;
		}
		var pre = child ? child.previousSibling : parent.lastChild;

		newFirst.previousSibling = pre;
		newLast.nextSibling = child;

		if (pre) {
			pre.nextSibling = newFirst;
		} else {
			parent.firstChild = newFirst;
		}
		if (child == null) {
			parent.lastChild = newLast;
		} else {
			child.previousSibling = newLast;
		}
		do {
			newFirst.parentNode = parent;
		} while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
		_onUpdateChild(parent.ownerDocument || parent, parent, node);
		if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
			node.firstChild = node.lastChild = null;
		}

		return node;
	}

	Document.prototype = {
		/**
		 * The implementation that created this document.
		 *
		 * @type DOMImplementation
		 * @readonly
		 */
		implementation: null,
		nodeName: '#document',
		nodeType: DOCUMENT_NODE,
		/**
		 * The DocumentType node of the document.
		 *
		 * @type DocumentType
		 * @readonly
		 */
		doctype: null,
		documentElement: null,
		_inc: 1,

		insertBefore: function (newChild, refChild) {
			//raises
			if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
				var child = newChild.firstChild;
				while (child) {
					var next = child.nextSibling;
					this.insertBefore(child, refChild);
					child = next;
				}
				return newChild;
			}
			_insertBefore(this, newChild, refChild);
			newChild.ownerDocument = this;
			if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
				this.documentElement = newChild;
			}

			return newChild;
		},
		removeChild: function (oldChild) {
			var removed = _removeChild(this, oldChild);
			if (removed === this.documentElement) {
				this.documentElement = null;
			}
			return removed;
		},
		replaceChild: function (newChild, oldChild) {
			//raises
			_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
			newChild.ownerDocument = this;
			if (oldChild) {
				this.removeChild(oldChild);
			}
			if (isElementNode(newChild)) {
				this.documentElement = newChild;
			}
		},
		// Introduced in DOM Level 2:
		importNode: function (importedNode, deep) {
			return importNode(this, importedNode, deep);
		},
		// Introduced in DOM Level 2:
		getElementById: function (id) {
			var rtv = null;
			_visitNode(this.documentElement, function (node) {
				if (node.nodeType == ELEMENT_NODE) {
					if (node.getAttribute('id') == id) {
						rtv = node;
						return true;
					}
				}
			});
			return rtv;
		},

		/**
		 * Creates a new `Element` that is owned by this `Document`.
		 * In HTML Documents `localName` is the lower cased `tagName`,
		 * otherwise no transformation is being applied.
		 * When `contentType` implies the HTML namespace, it will be set as `namespaceURI`.
		 *
		 * __This implementation differs from the specification:__ - The provided name is not checked
		 * against the `Name` production,
		 * so no related error will be thrown.
		 * - There is no interface `HTMLElement`, it is always an `Element`.
		 * - There is no support for a second argument to indicate using custom elements.
		 *
		 * @param {string} tagName
		 * @returns {Element}
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
		 * @see https://dom.spec.whatwg.org/#dom-document-createelement
		 * @see https://dom.spec.whatwg.org/#concept-create-element
		 */
		createElement: function (tagName) {
			var node = new Element(PDC);
			node.ownerDocument = this;
			if (this.type === 'html') {
				tagName = tagName.toLowerCase();
			}
			if (hasDefaultHTMLNamespace(this.contentType)) {
				node.namespaceURI = NAMESPACE.HTML;
			}
			node.nodeName = tagName;
			node.tagName = tagName;
			node.localName = tagName;
			node.childNodes = new NodeList();
			var attrs = (node.attributes = new NamedNodeMap());
			attrs._ownerElement = node;
			return node;
		},
		/**
		 * @returns {DocumentFragment}
		 */
		createDocumentFragment: function () {
			var node = new DocumentFragment(PDC);
			node.ownerDocument = this;
			node.childNodes = new NodeList();
			return node;
		},
		/**
		 * @param {string} data
		 * @returns {Text}
		 */
		createTextNode: function (data) {
			var node = new Text(PDC);
			node.ownerDocument = this;
			node.childNodes = new NodeList();
			node.appendData(data);
			return node;
		},
		/**
		 * @param {string} data
		 * @returns {Comment}
		 */
		createComment: function (data) {
			var node = new Comment(PDC);
			node.ownerDocument = this;
			node.childNodes = new NodeList();
			node.appendData(data);
			return node;
		},
		/**
		 * @param {string} data
		 * @returns {CDATASection}
		 */
		createCDATASection: function (data) {
			var node = new CDATASection(PDC);
			node.ownerDocument = this;
			node.childNodes = new NodeList();
			node.appendData(data);
			return node;
		},
		/**
		 * @param {string} target
		 * @param {string} data
		 * @returns {ProcessingInstruction}
		 */
		createProcessingInstruction: function (target, data) {
			var node = new ProcessingInstruction(PDC);
			node.ownerDocument = this;
			node.childNodes = new NodeList();
			node.nodeName = node.target = target;
			node.nodeValue = node.data = data;
			return node;
		},
		/**
		 * Creates an `Attr` node that is owned by this document.
		 * In HTML Documents `localName` is the lower cased `name`,
		 * otherwise no transformation is being applied.
		 *
		 * __This implementation differs from the specification:__ - The provided name is not checked
		 * against the `Name` production,
		 * so no related error will be thrown.
		 *
		 * @param {string} name
		 * @returns {Attr}
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute
		 * @see https://dom.spec.whatwg.org/#dom-document-createattribute
		 */
		createAttribute: function (name) {
			if (!g.QName_exact.test(name)) {
				throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in name "' + name + '"');
			}
			if (this.type === 'html') {
				name = name.toLowerCase();
			}
			return this._createAttribute(name);
		},
		_createAttribute: function (name) {
			var node = new Attr(PDC);
			node.ownerDocument = this;
			node.childNodes = new NodeList();
			node.name = name;
			node.nodeName = name;
			node.localName = name;
			node.specified = true;
			return node;
		},
		/**
		 * Creates an EntityReference object.
		 * The current implementation does not fill the `childNodes` with those of the corresponding
		 * `Entity`
		 *
		 * @deprecated
		 * In DOM Level 4.
		 * @param {string} name
		 * The name of the entity to reference. No namespace well-formedness checks are performed.
		 * @returns {EntityReference}
		 * @throws {DOMException}
		 * With code `INVALID_CHARACTER_ERR` when `name` is not valid.
		 * @throws {DOMException}
		 * with code `NOT_SUPPORTED_ERR` when the document is of type `html`
		 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE
		 */
		createEntityReference: function (name) {
			if (!g.Name.test(name)) {
				throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'not a valid xml name "' + name + '"');
			}
			if (this.type === 'html') {
				throw new DOMException('document is an html document', DOMExceptionName.NotSupportedError);
			}

			var node = new EntityReference(PDC);
			node.ownerDocument = this;
			node.childNodes = new NodeList();
			node.nodeName = name;
			return node;
		},
		// Introduced in DOM Level 2:
		/**
		 * @param {string} namespaceURI
		 * @param {string} qualifiedName
		 * @returns {Element}
		 */
		createElementNS: function (namespaceURI, qualifiedName) {
			var validated = validateAndExtract(namespaceURI, qualifiedName);
			var node = new Element(PDC);
			var attrs = (node.attributes = new NamedNodeMap());
			node.childNodes = new NodeList();
			node.ownerDocument = this;
			node.nodeName = qualifiedName;
			node.tagName = qualifiedName;
			node.namespaceURI = validated[0];
			node.prefix = validated[1];
			node.localName = validated[2];
			attrs._ownerElement = node;
			return node;
		},
		// Introduced in DOM Level 2:
		/**
		 * @param {string} namespaceURI
		 * @param {string} qualifiedName
		 * @returns {Attr}
		 */
		createAttributeNS: function (namespaceURI, qualifiedName) {
			var validated = validateAndExtract(namespaceURI, qualifiedName);
			var node = new Attr(PDC);
			node.ownerDocument = this;
			node.childNodes = new NodeList();
			node.nodeName = qualifiedName;
			node.name = qualifiedName;
			node.specified = true;
			node.namespaceURI = validated[0];
			node.prefix = validated[1];
			node.localName = validated[2];
			return node;
		},
	};
	_extends(Document, Node);

	function Element(symbol) {
		checkSymbol(symbol);

		this._nsMap = Object.create(null);
	}
	Element.prototype = {
		nodeType: ELEMENT_NODE,
		/**
		 * The attributes of this element.
		 *
		 * @type {NamedNodeMap | null}
		 */
		attributes: null,
		getQualifiedName: function () {
			return this.prefix ? this.prefix + ':' + this.localName : this.localName;
		},
		_isInHTMLDocumentAndNamespace: function () {
			return this.ownerDocument.type === 'html' && this.namespaceURI === NAMESPACE.HTML;
		},
		hasAttribute: function (name) {
			return !!this.getAttributeNode(name);
		},
		/**
		 * Returns element’s first attribute whose qualified name is `name`, and `null`
		 * if there is no such attribute.
		 *
		 * @param {string} name
		 * @returns {string | null}
		 */
		getAttribute: function (name) {
			var attr = this.getAttributeNode(name);
			return attr ? attr.value : null;
		},
		getAttributeNode: function (name) {
			if (this._isInHTMLDocumentAndNamespace()) {
				name = name.toLowerCase();
			}
			return this.attributes.getNamedItem(name);
		},
		/**
		 * Sets the value of element’s first attribute whose qualified name is qualifiedName to value.
		 *
		 * @param {string} name
		 * @param {string} value
		 */
		setAttribute: function (name, value) {
			if (this._isInHTMLDocumentAndNamespace()) {
				name = name.toLowerCase();
			}
			var attr = this.getAttributeNode(name);
			if (attr) {
				attr.value = attr.nodeValue = '' + value;
			} else {
				attr = this.ownerDocument._createAttribute(name);
				attr.value = attr.nodeValue = '' + value;
				this.setAttributeNode(attr);
			}
		},
		removeAttribute: function (name) {
			var attr = this.getAttributeNode(name);
			attr && this.removeAttributeNode(attr);
		},
		setAttributeNode: function (newAttr) {
			return this.attributes.setNamedItem(newAttr);
		},
		setAttributeNodeNS: function (newAttr) {
			return this.attributes.setNamedItemNS(newAttr);
		},
		removeAttributeNode: function (oldAttr) {
			//console.log(this == oldAttr.ownerElement)
			return this.attributes.removeNamedItem(oldAttr.nodeName);
		},
		//get real attribute name,and remove it by removeAttributeNode
		removeAttributeNS: function (namespaceURI, localName) {
			var old = this.getAttributeNodeNS(namespaceURI, localName);
			old && this.removeAttributeNode(old);
		},

		hasAttributeNS: function (namespaceURI, localName) {
			return this.getAttributeNodeNS(namespaceURI, localName) != null;
		},
		/**
		 * Returns element’s attribute whose namespace is `namespaceURI` and local name is
		 * `localName`,
		 * or `null` if there is no such attribute.
		 *
		 * @param {string} namespaceURI
		 * @param {string} localName
		 * @returns {string | null}
		 */
		getAttributeNS: function (namespaceURI, localName) {
			var attr = this.getAttributeNodeNS(namespaceURI, localName);
			return attr ? attr.value : null;
		},
		/**
		 * Sets the value of element’s attribute whose namespace is `namespaceURI` and local name is
		 * `localName` to value.
		 *
		 * @param {string} namespaceURI
		 * @param {string} qualifiedName
		 * @param {string} value
		 * @see https://dom.spec.whatwg.org/#dom-element-setattributens
		 */
		setAttributeNS: function (namespaceURI, qualifiedName, value) {
			var validated = validateAndExtract(namespaceURI, qualifiedName);
			var localName = validated[2];
			var attr = this.getAttributeNodeNS(namespaceURI, localName);
			if (attr) {
				attr.value = attr.nodeValue = '' + value;
			} else {
				attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
				attr.value = attr.nodeValue = '' + value;
				this.setAttributeNode(attr);
			}
		},
		getAttributeNodeNS: function (namespaceURI, localName) {
			return this.attributes.getNamedItemNS(namespaceURI, localName);
		},

		/**
		 * Returns a LiveNodeList of all child elements which have **all** of the given class name(s).
		 *
		 * Returns an empty list if `classNames` is an empty string or only contains HTML white space
		 * characters.
		 *
		 * Warning: This returns a live LiveNodeList.
		 * Changes in the DOM will reflect in the array as the changes occur.
		 * If an element selected by this array no longer qualifies for the selector,
		 * it will automatically be removed. Be aware of this for iteration purposes.
		 *
		 * @param {string} classNames
		 * Is a string representing the class name(s) to match; multiple class names are separated by
		 * (ASCII-)whitespace.
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
		 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
		 */
		getElementsByClassName: function (classNames) {
			var classNamesSet = toOrderedSet(classNames);
			return new LiveNodeList(this, function (base) {
				var ls = [];
				if (classNamesSet.length > 0) {
					_visitNode(base, function (node) {
						if (node !== base && node.nodeType === ELEMENT_NODE) {
							var nodeClassNames = node.getAttribute('class');
							// can be null if the attribute does not exist
							if (nodeClassNames) {
								// before splitting and iterating just compare them for the most common case
								var matches = classNames === nodeClassNames;
								if (!matches) {
									var nodeClassNamesSet = toOrderedSet(nodeClassNames);
									matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
								}
								if (matches) {
									ls.push(node);
								}
							}
						}
					});
				}
				return ls;
			});
		},

		/**
		 * Returns a LiveNodeList of elements with the given qualifiedName.
		 * Searching for all descendants can be done by passing `*` as `qualifiedName`.
		 *
		 * All descendants of the specified element are searched, but not the element itself.
		 * The returned list is live, which means it updates itself with the DOM tree automatically.
		 * Therefore, there is no need to call `Element.getElementsByTagName()`
		 * with the same element and arguments repeatedly if the DOM changes in between calls.
		 *
		 * When called on an HTML element in an HTML document,
		 * `getElementsByTagName` lower-cases the argument before searching for it.
		 * This is undesirable when trying to match camel-cased SVG elements (such as
		 * `<linearGradient>`) in an HTML document.
		 * Instead, use `Element.getElementsByTagNameNS()`,
		 * which preserves the capitalization of the tag name.
		 *
		 * `Element.getElementsByTagName` is similar to `Document.getElementsByTagName()`,
		 * except that it only searches for elements that are descendants of the specified element.
		 *
		 * @param {string} qualifiedName
		 * @returns {LiveNodeList}
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
		 * @see https://dom.spec.whatwg.org/#concept-getelementsbytagname
		 */
		getElementsByTagName: function (qualifiedName) {
			var isHTMLDocument = (this.nodeType === DOCUMENT_NODE ? this : this.ownerDocument).type === 'html';
			var lowerQualifiedName = qualifiedName.toLowerCase();
			return new LiveNodeList(this, function (base) {
				var ls = [];
				_visitNode(base, function (node) {
					if (node === base || node.nodeType !== ELEMENT_NODE) {
						return;
					}
					if (qualifiedName === '*') {
						ls.push(node);
					} else {
						var nodeQualifiedName = node.getQualifiedName();
						var matchingQName = isHTMLDocument && node.namespaceURI === NAMESPACE.HTML ? lowerQualifiedName : qualifiedName;
						if (nodeQualifiedName === matchingQName) {
							ls.push(node);
						}
					}
				});
				return ls;
			});
		},
		getElementsByTagNameNS: function (namespaceURI, localName) {
			return new LiveNodeList(this, function (base) {
				var ls = [];
				_visitNode(base, function (node) {
					if (
						node !== base &&
						node.nodeType === ELEMENT_NODE &&
						(namespaceURI === '*' || node.namespaceURI === namespaceURI) &&
						(localName === '*' || node.localName == localName)
					) {
						ls.push(node);
					}
				});
				return ls;
			});
		},
	};
	Document.prototype.getElementsByClassName = Element.prototype.getElementsByClassName;
	Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
	Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;

	_extends(Element, Node);
	function Attr(symbol) {
		checkSymbol(symbol);

		this.namespaceURI = null;
		this.prefix = null;
		this.ownerElement = null;
	}
	Attr.prototype.nodeType = ATTRIBUTE_NODE;
	_extends(Attr, Node);

	function CharacterData(symbol) {
		checkSymbol(symbol);
	}
	CharacterData.prototype = {
		data: '',
		substringData: function (offset, count) {
			return this.data.substring(offset, offset + count);
		},
		appendData: function (text) {
			text = this.data + text;
			this.nodeValue = this.data = text;
			this.length = text.length;
		},
		insertData: function (offset, text) {
			this.replaceData(offset, 0, text);
		},
		deleteData: function (offset, count) {
			this.replaceData(offset, count, '');
		},
		replaceData: function (offset, count, text) {
			var start = this.data.substring(0, offset);
			var end = this.data.substring(offset + count);
			text = start + text + end;
			this.nodeValue = this.data = text;
			this.length = text.length;
		},
	};
	_extends(CharacterData, Node);
	function Text(symbol) {
		checkSymbol(symbol);
	}
	Text.prototype = {
		nodeName: '#text',
		nodeType: TEXT_NODE,
		splitText: function (offset) {
			var text = this.data;
			var newText = text.substring(offset);
			text = text.substring(0, offset);
			this.data = this.nodeValue = text;
			this.length = text.length;
			var newNode = this.ownerDocument.createTextNode(newText);
			if (this.parentNode) {
				this.parentNode.insertBefore(newNode, this.nextSibling);
			}
			return newNode;
		},
	};
	_extends(Text, CharacterData);
	function Comment(symbol) {
		checkSymbol(symbol);
	}
	Comment.prototype = {
		nodeName: '#comment',
		nodeType: COMMENT_NODE,
	};
	_extends(Comment, CharacterData);

	function CDATASection(symbol) {
		checkSymbol(symbol);
	}
	CDATASection.prototype = {
		nodeName: '#cdata-section',
		nodeType: CDATA_SECTION_NODE,
	};
	_extends(CDATASection, Text);

	function DocumentType(symbol) {
		checkSymbol(symbol);
	}
	DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
	_extends(DocumentType, Node);

	function Notation(symbol) {
		checkSymbol(symbol);
	}
	Notation.prototype.nodeType = NOTATION_NODE;
	_extends(Notation, Node);

	function Entity(symbol) {
		checkSymbol(symbol);
	}
	Entity.prototype.nodeType = ENTITY_NODE;
	_extends(Entity, Node);

	function EntityReference(symbol) {
		checkSymbol(symbol);
	}
	EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
	_extends(EntityReference, Node);

	function DocumentFragment(symbol) {
		checkSymbol(symbol);
	}
	DocumentFragment.prototype.nodeName = '#document-fragment';
	DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
	_extends(DocumentFragment, Node);

	function ProcessingInstruction(symbol) {
		checkSymbol(symbol);
	}
	ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
	_extends(ProcessingInstruction, CharacterData);
	function XMLSerializer() {}
	XMLSerializer.prototype.serializeToString = function (node, nodeFilter) {
		return nodeSerializeToString.call(node, nodeFilter);
	};
	Node.prototype.toString = nodeSerializeToString;
	function nodeSerializeToString(nodeFilter) {
		var buf = [];
		var refNode = (this.nodeType === DOCUMENT_NODE && this.documentElement) || this;
		var prefix = refNode.prefix;
		var uri = refNode.namespaceURI;

		if (uri && prefix == null) {
			var prefix = refNode.lookupPrefix(uri);
			if (prefix == null) {
				var visibleNamespaces = [
					{ namespace: uri, prefix: null },
					//{namespace:uri,prefix:''}
				];
			}
		}
		serializeToString(this, buf, nodeFilter, visibleNamespaces);
		return buf.join('');
	}

	function needNamespaceDefine(node, isHTML, visibleNamespaces) {
		var prefix = node.prefix || '';
		var uri = node.namespaceURI;
		// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
		// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
		// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
		// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
		// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
		// > [...] Furthermore, the attribute value [...] must not be an empty string.
		// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
		if (!uri) {
			return false;
		}
		if ((prefix === 'xml' && uri === NAMESPACE.XML) || uri === NAMESPACE.XMLNS) {
			return false;
		}

		var i = visibleNamespaces.length;
		while (i--) {
			var ns = visibleNamespaces[i];
			// get namespace prefix
			if (ns.prefix === prefix) {
				return ns.namespace !== uri;
			}
		}
		return true;
	}
	/**
	 * Literal whitespace other than space that appear in attribute values are serialized as
	 * their entity references, so they will be preserved.
	 * (In contrast to whitespace literals in the input which are normalized to spaces).
	 *
	 * Well-formed constraint: No < in Attribute Values:
	 * > The replacement text of any entity referred to directly or indirectly
	 * > in an attribute value must not contain a <.
	 *
	 * @see https://www.w3.org/TR/xml11/#CleanAttrVals
	 * @see https://www.w3.org/TR/xml11/#NT-AttValue
	 * @see https://www.w3.org/TR/xml11/#AVNormalize
	 * @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
	 * @prettierignore
	 */
	function addSerializedAttribute(buf, qualifiedName, value) {
		buf.push(' ', qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
	}

	function serializeToString(node, buf, nodeFilter, visibleNamespaces) {
		if (!visibleNamespaces) {
			visibleNamespaces = [];
		}
		var doc = node.nodeType === DOCUMENT_NODE ? node : node.ownerDocument;
		var isHTML = doc.type === 'html';

		if (nodeFilter) {
			node = nodeFilter(node);
			if (node) {
				if (typeof node == 'string') {
					buf.push(node);
					return;
				}
			} else {
				return;
			}
			//buf.sort.apply(attrs, attributeSorter);
		}

		switch (node.nodeType) {
			case ELEMENT_NODE:
				var attrs = node.attributes;
				var len = attrs.length;
				var child = node.firstChild;
				var nodeName = node.tagName;

				var prefixedNodeName = nodeName;
				if (!isHTML && !node.prefix && node.namespaceURI) {
					var defaultNS;
					// lookup current default ns from `xmlns` attribute
					for (var ai = 0; ai < attrs.length; ai++) {
						if (attrs.item(ai).name === 'xmlns') {
							defaultNS = attrs.item(ai).value;
							break;
						}
					}
					if (!defaultNS) {
						// lookup current default ns in visibleNamespaces
						for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
							var namespace = visibleNamespaces[nsi];
							if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
								defaultNS = namespace.namespace;
								break;
							}
						}
					}
					if (defaultNS !== node.namespaceURI) {
						for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
							var namespace = visibleNamespaces[nsi];
							if (namespace.namespace === node.namespaceURI) {
								if (namespace.prefix) {
									prefixedNodeName = namespace.prefix + ':' + nodeName;
								}
								break;
							}
						}
					}
				}

				buf.push('<', prefixedNodeName);

				for (var i = 0; i < len; i++) {
					// add namespaces for attributes
					var attr = attrs.item(i);
					if (attr.prefix == 'xmlns') {
						visibleNamespaces.push({
							prefix: attr.localName,
							namespace: attr.value,
						});
					} else if (attr.nodeName == 'xmlns') {
						visibleNamespaces.push({ prefix: '', namespace: attr.value });
					}
				}

				for (var i = 0; i < len; i++) {
					var attr = attrs.item(i);
					if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
						var prefix = attr.prefix || '';
						var uri = attr.namespaceURI;
						addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : 'xmlns', uri);
						visibleNamespaces.push({ prefix: prefix, namespace: uri });
					}
					serializeToString(attr, buf, nodeFilter, visibleNamespaces);
				}

				// add namespace for current node
				if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
					var prefix = node.prefix || '';
					var uri = node.namespaceURI;
					addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : 'xmlns', uri);
					visibleNamespaces.push({ prefix: prefix, namespace: uri });
				}
				// in XML elements can be closed when they have no children
				var canCloseTag = !child;
				if (canCloseTag && (isHTML || node.namespaceURI === NAMESPACE.HTML)) {
					// in HTML (doc or ns) only void elements can be closed right away
					canCloseTag = isHTMLVoidElement(nodeName);
				}
				if (canCloseTag) {
					buf.push('/>');
				} else {
					buf.push('>');
					//if is cdata child node
					if (isHTML && isHTMLRawTextElement(nodeName)) {
						while (child) {
							if (child.data) {
								buf.push(child.data);
							} else {
								serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
							}
							child = child.nextSibling;
						}
					} else {
						while (child) {
							serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
							child = child.nextSibling;
						}
					}
					buf.push('</', prefixedNodeName, '>');
				}
				// remove added visible namespaces
				//visibleNamespaces.length = startVisibleNamespaces;
				return;
			case DOCUMENT_NODE:
			case DOCUMENT_FRAGMENT_NODE:
				var child = node.firstChild;
				while (child) {
					serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
					child = child.nextSibling;
				}
				return;
			case ATTRIBUTE_NODE:
				return addSerializedAttribute(buf, node.name, node.value);
			case TEXT_NODE:
				/*
				 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
				 * except when used as markup delimiters, or within a comment, a processing instruction,
				 * or a CDATA section.
				 * If they are needed elsewhere, they must be escaped using either numeric character
				 * references or the strings `&amp;` and `&lt;` respectively.
				 * The right angle bracket (>) may be represented using the string " &gt; ",
				 * and must, for compatibility, be escaped using either `&gt;`,
				 * or a character reference when it appears in the string `]]>` in content,
				 * when that string is not marking the end of a CDATA section.
				 *
				 * In the content of elements, character data is any string of characters which does not
				 * contain the start-delimiter of any markup and does not include the CDATA-section-close
				 * delimiter, `]]>`.
				 *
				 * @see https://www.w3.org/TR/xml/#NT-CharData
				 * @see https://w3c.github.io/DOM-Parsing/#xml-serializing-a-text-node
				 */
				return buf.push(node.data.replace(/[<&>]/g, _xmlEncoder));
			case CDATA_SECTION_NODE:
				return buf.push(g.CDATA_START, node.data, g.CDATA_END);
			case COMMENT_NODE:
				return buf.push(g.COMMENT_START, node.data, g.COMMENT_END);
			case DOCUMENT_TYPE_NODE:
				var pubid = node.publicId;
				var sysid = node.systemId;
				buf.push(g.DOCTYPE_DECL_START, ' ', node.name);
				if (pubid) {
					buf.push(' ', g.PUBLIC, ' ', pubid);
					if (sysid && sysid !== '.') {
						buf.push(' ', sysid);
					}
				} else if (sysid && sysid !== '.') {
					buf.push(' ', g.SYSTEM, ' ', sysid);
				}
				if (node.internalSubset) {
					buf.push(' [', node.internalSubset, ']');
				}
				buf.push('>');
				return;
			case PROCESSING_INSTRUCTION_NODE:
				return buf.push('<?', node.target, ' ', node.data, '?>');
			case ENTITY_REFERENCE_NODE:
				return buf.push('&', node.nodeName, ';');
			//case ENTITY_NODE:
			//case NOTATION_NODE:
			default:
				buf.push('??', node.nodeName);
		}
	}
	function importNode(doc, node, deep) {
		var node2;
		switch (node.nodeType) {
			case ELEMENT_NODE:
				node2 = node.cloneNode(false);
				node2.ownerDocument = doc;
			//var attrs = node2.attributes;
			//var len = attrs.length;
			//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
			//}
			case DOCUMENT_FRAGMENT_NODE:
				break;
			case ATTRIBUTE_NODE:
				deep = true;
				break;
			//case ENTITY_REFERENCE_NODE:
			//case PROCESSING_INSTRUCTION_NODE:
			////case TEXT_NODE:
			//case CDATA_SECTION_NODE:
			//case COMMENT_NODE:
			//	deep = false;
			//	break;
			//case DOCUMENT_NODE:
			//case DOCUMENT_TYPE_NODE:
			//cannot be imported.
			//case ENTITY_NODE:
			//case NOTATION_NODE：
			//can not hit in level3
			//default:throw e;
		}
		if (!node2) {
			node2 = node.cloneNode(false); //false
		}
		node2.ownerDocument = doc;
		node2.parentNode = null;
		if (deep) {
			var child = node.firstChild;
			while (child) {
				node2.appendChild(importNode(doc, child, deep));
				child = child.nextSibling;
			}
		}
		return node2;
	}

	/**
	 * Creates a copy of a node from an existing one.
	 *
	 * @param {Document} doc
	 * The Document object representing the document that the new node will belong to.
	 * @param {Node} node
	 * The node to clone.
	 * @param {boolean} deep
	 * If true, the contents of the node are recursively copied.
	 * If false, only the node itself (and its attributes, if it is an element) are copied.
	 * @returns {Node}
	 * Returns the newly created copy of the node.
	 * @throws {DOMException}
	 * May throw a DOMException if operations within setAttributeNode or appendChild (which are
	 * potentially invoked in this function) do not meet their specific constraints.
	 */
	function cloneNode(doc, node, deep) {
		var node2 = new node.constructor(PDC);
		for (var n in node) {
			if (hasOwn(node, n)) {
				var v = node[n];
				if (typeof v != 'object') {
					if (v != node2[n]) {
						node2[n] = v;
					}
				}
			}
		}
		if (node.childNodes) {
			node2.childNodes = new NodeList();
		}
		node2.ownerDocument = doc;
		switch (node2.nodeType) {
			case ELEMENT_NODE:
				var attrs = node.attributes;
				var attrs2 = (node2.attributes = new NamedNodeMap());
				var len = attrs.length;
				attrs2._ownerElement = node2;
				for (var i = 0; i < len; i++) {
					node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
				}
				break;
			case ATTRIBUTE_NODE:
				deep = true;
		}
		if (deep) {
			var child = node.firstChild;
			while (child) {
				node2.appendChild(cloneNode(doc, child, deep));
				child = child.nextSibling;
			}
		}
		return node2;
	}

	function __set__(object, key, value) {
		object[key] = value;
	}
	//do dynamic
	try {
		if (Object.defineProperty) {
			Object.defineProperty(LiveNodeList.prototype, 'length', {
				get: function () {
					_updateLiveList(this);
					return this.$$length;
				},
			});

			Object.defineProperty(Node.prototype, 'textContent', {
				get: function () {
					return getTextContent(this);
				},

				set: function (data) {
					switch (this.nodeType) {
						case ELEMENT_NODE:
						case DOCUMENT_FRAGMENT_NODE:
							while (this.firstChild) {
								this.removeChild(this.firstChild);
							}
							if (data || String(data)) {
								this.appendChild(this.ownerDocument.createTextNode(data));
							}
							break;

						default:
							this.data = data;
							this.value = data;
							this.nodeValue = data;
					}
				},
			});

			function getTextContent(node) {
				switch (node.nodeType) {
					case ELEMENT_NODE:
					case DOCUMENT_FRAGMENT_NODE:
						var buf = [];
						node = node.firstChild;
						while (node) {
							if (node.nodeType !== 7 && node.nodeType !== 8) {
								buf.push(getTextContent(node));
							}
							node = node.nextSibling;
						}
						return buf.join('');
					default:
						return node.nodeValue;
				}
			}

			__set__ = function (object, key, value) {
				//console.log(value)
				object['$$' + key] = value;
			};
		}
	} catch (e) {
		//ie8
	}

	dom._updateLiveList = _updateLiveList;
	dom.Attr = Attr;
	dom.CDATASection = CDATASection;
	dom.CharacterData = CharacterData;
	dom.Comment = Comment;
	dom.Document = Document;
	dom.DocumentFragment = DocumentFragment;
	dom.DocumentType = DocumentType;
	dom.DOMImplementation = DOMImplementation;
	dom.Element = Element;
	dom.Entity = Entity;
	dom.EntityReference = EntityReference;
	dom.LiveNodeList = LiveNodeList;
	dom.NamedNodeMap = NamedNodeMap;
	dom.Node = Node;
	dom.NodeList = NodeList;
	dom.Notation = Notation;
	dom.Text = Text;
	dom.ProcessingInstruction = ProcessingInstruction;
	dom.XMLSerializer = XMLSerializer;
	return dom;
}

var domParser = {};

var entities = {};

var hasRequiredEntities;

function requireEntities () {
	if (hasRequiredEntities) return entities;
	hasRequiredEntities = 1;
	(function (exports) {

		var freeze = requireConventions().freeze;

		/**
		 * The entities that are predefined in every XML document.
		 *
		 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
		 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
		 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML
		 *      Wikipedia
		 */
		exports.XML_ENTITIES = freeze({
			amp: '&',
			apos: "'",
			gt: '>',
			lt: '<',
			quot: '"',
		});

		/**
		 * A map of all entities that are detected in an HTML document.
		 * They contain all entries from `XML_ENTITIES`.
		 *
		 * @see {@link XML_ENTITIES}
		 * @see {@link DOMParser.parseFromString}
		 * @see {@link DOMImplementation.prototype.createHTMLDocument}
		 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5)
		 *      Spec
		 * @see https://html.spec.whatwg.org/entities.json JSON
		 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
		 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
		 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML
		 *      Wikipedia (HTML)
		 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML
		 *      Wikpedia (XHTML)
		 */
		exports.HTML_ENTITIES = freeze({
			Aacute: '\u00C1',
			aacute: '\u00E1',
			Abreve: '\u0102',
			abreve: '\u0103',
			ac: '\u223E',
			acd: '\u223F',
			acE: '\u223E\u0333',
			Acirc: '\u00C2',
			acirc: '\u00E2',
			acute: '\u00B4',
			Acy: '\u0410',
			acy: '\u0430',
			AElig: '\u00C6',
			aelig: '\u00E6',
			af: '\u2061',
			Afr: '\uD835\uDD04',
			afr: '\uD835\uDD1E',
			Agrave: '\u00C0',
			agrave: '\u00E0',
			alefsym: '\u2135',
			aleph: '\u2135',
			Alpha: '\u0391',
			alpha: '\u03B1',
			Amacr: '\u0100',
			amacr: '\u0101',
			amalg: '\u2A3F',
			AMP: '\u0026',
			amp: '\u0026',
			And: '\u2A53',
			and: '\u2227',
			andand: '\u2A55',
			andd: '\u2A5C',
			andslope: '\u2A58',
			andv: '\u2A5A',
			ang: '\u2220',
			ange: '\u29A4',
			angle: '\u2220',
			angmsd: '\u2221',
			angmsdaa: '\u29A8',
			angmsdab: '\u29A9',
			angmsdac: '\u29AA',
			angmsdad: '\u29AB',
			angmsdae: '\u29AC',
			angmsdaf: '\u29AD',
			angmsdag: '\u29AE',
			angmsdah: '\u29AF',
			angrt: '\u221F',
			angrtvb: '\u22BE',
			angrtvbd: '\u299D',
			angsph: '\u2222',
			angst: '\u00C5',
			angzarr: '\u237C',
			Aogon: '\u0104',
			aogon: '\u0105',
			Aopf: '\uD835\uDD38',
			aopf: '\uD835\uDD52',
			ap: '\u2248',
			apacir: '\u2A6F',
			apE: '\u2A70',
			ape: '\u224A',
			apid: '\u224B',
			apos: '\u0027',
			ApplyFunction: '\u2061',
			approx: '\u2248',
			approxeq: '\u224A',
			Aring: '\u00C5',
			aring: '\u00E5',
			Ascr: '\uD835\uDC9C',
			ascr: '\uD835\uDCB6',
			Assign: '\u2254',
			ast: '\u002A',
			asymp: '\u2248',
			asympeq: '\u224D',
			Atilde: '\u00C3',
			atilde: '\u00E3',
			Auml: '\u00C4',
			auml: '\u00E4',
			awconint: '\u2233',
			awint: '\u2A11',
			backcong: '\u224C',
			backepsilon: '\u03F6',
			backprime: '\u2035',
			backsim: '\u223D',
			backsimeq: '\u22CD',
			Backslash: '\u2216',
			Barv: '\u2AE7',
			barvee: '\u22BD',
			Barwed: '\u2306',
			barwed: '\u2305',
			barwedge: '\u2305',
			bbrk: '\u23B5',
			bbrktbrk: '\u23B6',
			bcong: '\u224C',
			Bcy: '\u0411',
			bcy: '\u0431',
			bdquo: '\u201E',
			becaus: '\u2235',
			Because: '\u2235',
			because: '\u2235',
			bemptyv: '\u29B0',
			bepsi: '\u03F6',
			bernou: '\u212C',
			Bernoullis: '\u212C',
			Beta: '\u0392',
			beta: '\u03B2',
			beth: '\u2136',
			between: '\u226C',
			Bfr: '\uD835\uDD05',
			bfr: '\uD835\uDD1F',
			bigcap: '\u22C2',
			bigcirc: '\u25EF',
			bigcup: '\u22C3',
			bigodot: '\u2A00',
			bigoplus: '\u2A01',
			bigotimes: '\u2A02',
			bigsqcup: '\u2A06',
			bigstar: '\u2605',
			bigtriangledown: '\u25BD',
			bigtriangleup: '\u25B3',
			biguplus: '\u2A04',
			bigvee: '\u22C1',
			bigwedge: '\u22C0',
			bkarow: '\u290D',
			blacklozenge: '\u29EB',
			blacksquare: '\u25AA',
			blacktriangle: '\u25B4',
			blacktriangledown: '\u25BE',
			blacktriangleleft: '\u25C2',
			blacktriangleright: '\u25B8',
			blank: '\u2423',
			blk12: '\u2592',
			blk14: '\u2591',
			blk34: '\u2593',
			block: '\u2588',
			bne: '\u003D\u20E5',
			bnequiv: '\u2261\u20E5',
			bNot: '\u2AED',
			bnot: '\u2310',
			Bopf: '\uD835\uDD39',
			bopf: '\uD835\uDD53',
			bot: '\u22A5',
			bottom: '\u22A5',
			bowtie: '\u22C8',
			boxbox: '\u29C9',
			boxDL: '\u2557',
			boxDl: '\u2556',
			boxdL: '\u2555',
			boxdl: '\u2510',
			boxDR: '\u2554',
			boxDr: '\u2553',
			boxdR: '\u2552',
			boxdr: '\u250C',
			boxH: '\u2550',
			boxh: '\u2500',
			boxHD: '\u2566',
			boxHd: '\u2564',
			boxhD: '\u2565',
			boxhd: '\u252C',
			boxHU: '\u2569',
			boxHu: '\u2567',
			boxhU: '\u2568',
			boxhu: '\u2534',
			boxminus: '\u229F',
			boxplus: '\u229E',
			boxtimes: '\u22A0',
			boxUL: '\u255D',
			boxUl: '\u255C',
			boxuL: '\u255B',
			boxul: '\u2518',
			boxUR: '\u255A',
			boxUr: '\u2559',
			boxuR: '\u2558',
			boxur: '\u2514',
			boxV: '\u2551',
			boxv: '\u2502',
			boxVH: '\u256C',
			boxVh: '\u256B',
			boxvH: '\u256A',
			boxvh: '\u253C',
			boxVL: '\u2563',
			boxVl: '\u2562',
			boxvL: '\u2561',
			boxvl: '\u2524',
			boxVR: '\u2560',
			boxVr: '\u255F',
			boxvR: '\u255E',
			boxvr: '\u251C',
			bprime: '\u2035',
			Breve: '\u02D8',
			breve: '\u02D8',
			brvbar: '\u00A6',
			Bscr: '\u212C',
			bscr: '\uD835\uDCB7',
			bsemi: '\u204F',
			bsim: '\u223D',
			bsime: '\u22CD',
			bsol: '\u005C',
			bsolb: '\u29C5',
			bsolhsub: '\u27C8',
			bull: '\u2022',
			bullet: '\u2022',
			bump: '\u224E',
			bumpE: '\u2AAE',
			bumpe: '\u224F',
			Bumpeq: '\u224E',
			bumpeq: '\u224F',
			Cacute: '\u0106',
			cacute: '\u0107',
			Cap: '\u22D2',
			cap: '\u2229',
			capand: '\u2A44',
			capbrcup: '\u2A49',
			capcap: '\u2A4B',
			capcup: '\u2A47',
			capdot: '\u2A40',
			CapitalDifferentialD: '\u2145',
			caps: '\u2229\uFE00',
			caret: '\u2041',
			caron: '\u02C7',
			Cayleys: '\u212D',
			ccaps: '\u2A4D',
			Ccaron: '\u010C',
			ccaron: '\u010D',
			Ccedil: '\u00C7',
			ccedil: '\u00E7',
			Ccirc: '\u0108',
			ccirc: '\u0109',
			Cconint: '\u2230',
			ccups: '\u2A4C',
			ccupssm: '\u2A50',
			Cdot: '\u010A',
			cdot: '\u010B',
			cedil: '\u00B8',
			Cedilla: '\u00B8',
			cemptyv: '\u29B2',
			cent: '\u00A2',
			CenterDot: '\u00B7',
			centerdot: '\u00B7',
			Cfr: '\u212D',
			cfr: '\uD835\uDD20',
			CHcy: '\u0427',
			chcy: '\u0447',
			check: '\u2713',
			checkmark: '\u2713',
			Chi: '\u03A7',
			chi: '\u03C7',
			cir: '\u25CB',
			circ: '\u02C6',
			circeq: '\u2257',
			circlearrowleft: '\u21BA',
			circlearrowright: '\u21BB',
			circledast: '\u229B',
			circledcirc: '\u229A',
			circleddash: '\u229D',
			CircleDot: '\u2299',
			circledR: '\u00AE',
			circledS: '\u24C8',
			CircleMinus: '\u2296',
			CirclePlus: '\u2295',
			CircleTimes: '\u2297',
			cirE: '\u29C3',
			cire: '\u2257',
			cirfnint: '\u2A10',
			cirmid: '\u2AEF',
			cirscir: '\u29C2',
			ClockwiseContourIntegral: '\u2232',
			CloseCurlyDoubleQuote: '\u201D',
			CloseCurlyQuote: '\u2019',
			clubs: '\u2663',
			clubsuit: '\u2663',
			Colon: '\u2237',
			colon: '\u003A',
			Colone: '\u2A74',
			colone: '\u2254',
			coloneq: '\u2254',
			comma: '\u002C',
			commat: '\u0040',
			comp: '\u2201',
			compfn: '\u2218',
			complement: '\u2201',
			complexes: '\u2102',
			cong: '\u2245',
			congdot: '\u2A6D',
			Congruent: '\u2261',
			Conint: '\u222F',
			conint: '\u222E',
			ContourIntegral: '\u222E',
			Copf: '\u2102',
			copf: '\uD835\uDD54',
			coprod: '\u2210',
			Coproduct: '\u2210',
			COPY: '\u00A9',
			copy: '\u00A9',
			copysr: '\u2117',
			CounterClockwiseContourIntegral: '\u2233',
			crarr: '\u21B5',
			Cross: '\u2A2F',
			cross: '\u2717',
			Cscr: '\uD835\uDC9E',
			cscr: '\uD835\uDCB8',
			csub: '\u2ACF',
			csube: '\u2AD1',
			csup: '\u2AD0',
			csupe: '\u2AD2',
			ctdot: '\u22EF',
			cudarrl: '\u2938',
			cudarrr: '\u2935',
			cuepr: '\u22DE',
			cuesc: '\u22DF',
			cularr: '\u21B6',
			cularrp: '\u293D',
			Cup: '\u22D3',
			cup: '\u222A',
			cupbrcap: '\u2A48',
			CupCap: '\u224D',
			cupcap: '\u2A46',
			cupcup: '\u2A4A',
			cupdot: '\u228D',
			cupor: '\u2A45',
			cups: '\u222A\uFE00',
			curarr: '\u21B7',
			curarrm: '\u293C',
			curlyeqprec: '\u22DE',
			curlyeqsucc: '\u22DF',
			curlyvee: '\u22CE',
			curlywedge: '\u22CF',
			curren: '\u00A4',
			curvearrowleft: '\u21B6',
			curvearrowright: '\u21B7',
			cuvee: '\u22CE',
			cuwed: '\u22CF',
			cwconint: '\u2232',
			cwint: '\u2231',
			cylcty: '\u232D',
			Dagger: '\u2021',
			dagger: '\u2020',
			daleth: '\u2138',
			Darr: '\u21A1',
			dArr: '\u21D3',
			darr: '\u2193',
			dash: '\u2010',
			Dashv: '\u2AE4',
			dashv: '\u22A3',
			dbkarow: '\u290F',
			dblac: '\u02DD',
			Dcaron: '\u010E',
			dcaron: '\u010F',
			Dcy: '\u0414',
			dcy: '\u0434',
			DD: '\u2145',
			dd: '\u2146',
			ddagger: '\u2021',
			ddarr: '\u21CA',
			DDotrahd: '\u2911',
			ddotseq: '\u2A77',
			deg: '\u00B0',
			Del: '\u2207',
			Delta: '\u0394',
			delta: '\u03B4',
			demptyv: '\u29B1',
			dfisht: '\u297F',
			Dfr: '\uD835\uDD07',
			dfr: '\uD835\uDD21',
			dHar: '\u2965',
			dharl: '\u21C3',
			dharr: '\u21C2',
			DiacriticalAcute: '\u00B4',
			DiacriticalDot: '\u02D9',
			DiacriticalDoubleAcute: '\u02DD',
			DiacriticalGrave: '\u0060',
			DiacriticalTilde: '\u02DC',
			diam: '\u22C4',
			Diamond: '\u22C4',
			diamond: '\u22C4',
			diamondsuit: '\u2666',
			diams: '\u2666',
			die: '\u00A8',
			DifferentialD: '\u2146',
			digamma: '\u03DD',
			disin: '\u22F2',
			div: '\u00F7',
			divide: '\u00F7',
			divideontimes: '\u22C7',
			divonx: '\u22C7',
			DJcy: '\u0402',
			djcy: '\u0452',
			dlcorn: '\u231E',
			dlcrop: '\u230D',
			dollar: '\u0024',
			Dopf: '\uD835\uDD3B',
			dopf: '\uD835\uDD55',
			Dot: '\u00A8',
			dot: '\u02D9',
			DotDot: '\u20DC',
			doteq: '\u2250',
			doteqdot: '\u2251',
			DotEqual: '\u2250',
			dotminus: '\u2238',
			dotplus: '\u2214',
			dotsquare: '\u22A1',
			doublebarwedge: '\u2306',
			DoubleContourIntegral: '\u222F',
			DoubleDot: '\u00A8',
			DoubleDownArrow: '\u21D3',
			DoubleLeftArrow: '\u21D0',
			DoubleLeftRightArrow: '\u21D4',
			DoubleLeftTee: '\u2AE4',
			DoubleLongLeftArrow: '\u27F8',
			DoubleLongLeftRightArrow: '\u27FA',
			DoubleLongRightArrow: '\u27F9',
			DoubleRightArrow: '\u21D2',
			DoubleRightTee: '\u22A8',
			DoubleUpArrow: '\u21D1',
			DoubleUpDownArrow: '\u21D5',
			DoubleVerticalBar: '\u2225',
			DownArrow: '\u2193',
			Downarrow: '\u21D3',
			downarrow: '\u2193',
			DownArrowBar: '\u2913',
			DownArrowUpArrow: '\u21F5',
			DownBreve: '\u0311',
			downdownarrows: '\u21CA',
			downharpoonleft: '\u21C3',
			downharpoonright: '\u21C2',
			DownLeftRightVector: '\u2950',
			DownLeftTeeVector: '\u295E',
			DownLeftVector: '\u21BD',
			DownLeftVectorBar: '\u2956',
			DownRightTeeVector: '\u295F',
			DownRightVector: '\u21C1',
			DownRightVectorBar: '\u2957',
			DownTee: '\u22A4',
			DownTeeArrow: '\u21A7',
			drbkarow: '\u2910',
			drcorn: '\u231F',
			drcrop: '\u230C',
			Dscr: '\uD835\uDC9F',
			dscr: '\uD835\uDCB9',
			DScy: '\u0405',
			dscy: '\u0455',
			dsol: '\u29F6',
			Dstrok: '\u0110',
			dstrok: '\u0111',
			dtdot: '\u22F1',
			dtri: '\u25BF',
			dtrif: '\u25BE',
			duarr: '\u21F5',
			duhar: '\u296F',
			dwangle: '\u29A6',
			DZcy: '\u040F',
			dzcy: '\u045F',
			dzigrarr: '\u27FF',
			Eacute: '\u00C9',
			eacute: '\u00E9',
			easter: '\u2A6E',
			Ecaron: '\u011A',
			ecaron: '\u011B',
			ecir: '\u2256',
			Ecirc: '\u00CA',
			ecirc: '\u00EA',
			ecolon: '\u2255',
			Ecy: '\u042D',
			ecy: '\u044D',
			eDDot: '\u2A77',
			Edot: '\u0116',
			eDot: '\u2251',
			edot: '\u0117',
			ee: '\u2147',
			efDot: '\u2252',
			Efr: '\uD835\uDD08',
			efr: '\uD835\uDD22',
			eg: '\u2A9A',
			Egrave: '\u00C8',
			egrave: '\u00E8',
			egs: '\u2A96',
			egsdot: '\u2A98',
			el: '\u2A99',
			Element: '\u2208',
			elinters: '\u23E7',
			ell: '\u2113',
			els: '\u2A95',
			elsdot: '\u2A97',
			Emacr: '\u0112',
			emacr: '\u0113',
			empty: '\u2205',
			emptyset: '\u2205',
			EmptySmallSquare: '\u25FB',
			emptyv: '\u2205',
			EmptyVerySmallSquare: '\u25AB',
			emsp: '\u2003',
			emsp13: '\u2004',
			emsp14: '\u2005',
			ENG: '\u014A',
			eng: '\u014B',
			ensp: '\u2002',
			Eogon: '\u0118',
			eogon: '\u0119',
			Eopf: '\uD835\uDD3C',
			eopf: '\uD835\uDD56',
			epar: '\u22D5',
			eparsl: '\u29E3',
			eplus: '\u2A71',
			epsi: '\u03B5',
			Epsilon: '\u0395',
			epsilon: '\u03B5',
			epsiv: '\u03F5',
			eqcirc: '\u2256',
			eqcolon: '\u2255',
			eqsim: '\u2242',
			eqslantgtr: '\u2A96',
			eqslantless: '\u2A95',
			Equal: '\u2A75',
			equals: '\u003D',
			EqualTilde: '\u2242',
			equest: '\u225F',
			Equilibrium: '\u21CC',
			equiv: '\u2261',
			equivDD: '\u2A78',
			eqvparsl: '\u29E5',
			erarr: '\u2971',
			erDot: '\u2253',
			Escr: '\u2130',
			escr: '\u212F',
			esdot: '\u2250',
			Esim: '\u2A73',
			esim: '\u2242',
			Eta: '\u0397',
			eta: '\u03B7',
			ETH: '\u00D0',
			eth: '\u00F0',
			Euml: '\u00CB',
			euml: '\u00EB',
			euro: '\u20AC',
			excl: '\u0021',
			exist: '\u2203',
			Exists: '\u2203',
			expectation: '\u2130',
			ExponentialE: '\u2147',
			exponentiale: '\u2147',
			fallingdotseq: '\u2252',
			Fcy: '\u0424',
			fcy: '\u0444',
			female: '\u2640',
			ffilig: '\uFB03',
			fflig: '\uFB00',
			ffllig: '\uFB04',
			Ffr: '\uD835\uDD09',
			ffr: '\uD835\uDD23',
			filig: '\uFB01',
			FilledSmallSquare: '\u25FC',
			FilledVerySmallSquare: '\u25AA',
			fjlig: '\u0066\u006A',
			flat: '\u266D',
			fllig: '\uFB02',
			fltns: '\u25B1',
			fnof: '\u0192',
			Fopf: '\uD835\uDD3D',
			fopf: '\uD835\uDD57',
			ForAll: '\u2200',
			forall: '\u2200',
			fork: '\u22D4',
			forkv: '\u2AD9',
			Fouriertrf: '\u2131',
			fpartint: '\u2A0D',
			frac12: '\u00BD',
			frac13: '\u2153',
			frac14: '\u00BC',
			frac15: '\u2155',
			frac16: '\u2159',
			frac18: '\u215B',
			frac23: '\u2154',
			frac25: '\u2156',
			frac34: '\u00BE',
			frac35: '\u2157',
			frac38: '\u215C',
			frac45: '\u2158',
			frac56: '\u215A',
			frac58: '\u215D',
			frac78: '\u215E',
			frasl: '\u2044',
			frown: '\u2322',
			Fscr: '\u2131',
			fscr: '\uD835\uDCBB',
			gacute: '\u01F5',
			Gamma: '\u0393',
			gamma: '\u03B3',
			Gammad: '\u03DC',
			gammad: '\u03DD',
			gap: '\u2A86',
			Gbreve: '\u011E',
			gbreve: '\u011F',
			Gcedil: '\u0122',
			Gcirc: '\u011C',
			gcirc: '\u011D',
			Gcy: '\u0413',
			gcy: '\u0433',
			Gdot: '\u0120',
			gdot: '\u0121',
			gE: '\u2267',
			ge: '\u2265',
			gEl: '\u2A8C',
			gel: '\u22DB',
			geq: '\u2265',
			geqq: '\u2267',
			geqslant: '\u2A7E',
			ges: '\u2A7E',
			gescc: '\u2AA9',
			gesdot: '\u2A80',
			gesdoto: '\u2A82',
			gesdotol: '\u2A84',
			gesl: '\u22DB\uFE00',
			gesles: '\u2A94',
			Gfr: '\uD835\uDD0A',
			gfr: '\uD835\uDD24',
			Gg: '\u22D9',
			gg: '\u226B',
			ggg: '\u22D9',
			gimel: '\u2137',
			GJcy: '\u0403',
			gjcy: '\u0453',
			gl: '\u2277',
			gla: '\u2AA5',
			glE: '\u2A92',
			glj: '\u2AA4',
			gnap: '\u2A8A',
			gnapprox: '\u2A8A',
			gnE: '\u2269',
			gne: '\u2A88',
			gneq: '\u2A88',
			gneqq: '\u2269',
			gnsim: '\u22E7',
			Gopf: '\uD835\uDD3E',
			gopf: '\uD835\uDD58',
			grave: '\u0060',
			GreaterEqual: '\u2265',
			GreaterEqualLess: '\u22DB',
			GreaterFullEqual: '\u2267',
			GreaterGreater: '\u2AA2',
			GreaterLess: '\u2277',
			GreaterSlantEqual: '\u2A7E',
			GreaterTilde: '\u2273',
			Gscr: '\uD835\uDCA2',
			gscr: '\u210A',
			gsim: '\u2273',
			gsime: '\u2A8E',
			gsiml: '\u2A90',
			Gt: '\u226B',
			GT: '\u003E',
			gt: '\u003E',
			gtcc: '\u2AA7',
			gtcir: '\u2A7A',
			gtdot: '\u22D7',
			gtlPar: '\u2995',
			gtquest: '\u2A7C',
			gtrapprox: '\u2A86',
			gtrarr: '\u2978',
			gtrdot: '\u22D7',
			gtreqless: '\u22DB',
			gtreqqless: '\u2A8C',
			gtrless: '\u2277',
			gtrsim: '\u2273',
			gvertneqq: '\u2269\uFE00',
			gvnE: '\u2269\uFE00',
			Hacek: '\u02C7',
			hairsp: '\u200A',
			half: '\u00BD',
			hamilt: '\u210B',
			HARDcy: '\u042A',
			hardcy: '\u044A',
			hArr: '\u21D4',
			harr: '\u2194',
			harrcir: '\u2948',
			harrw: '\u21AD',
			Hat: '\u005E',
			hbar: '\u210F',
			Hcirc: '\u0124',
			hcirc: '\u0125',
			hearts: '\u2665',
			heartsuit: '\u2665',
			hellip: '\u2026',
			hercon: '\u22B9',
			Hfr: '\u210C',
			hfr: '\uD835\uDD25',
			HilbertSpace: '\u210B',
			hksearow: '\u2925',
			hkswarow: '\u2926',
			hoarr: '\u21FF',
			homtht: '\u223B',
			hookleftarrow: '\u21A9',
			hookrightarrow: '\u21AA',
			Hopf: '\u210D',
			hopf: '\uD835\uDD59',
			horbar: '\u2015',
			HorizontalLine: '\u2500',
			Hscr: '\u210B',
			hscr: '\uD835\uDCBD',
			hslash: '\u210F',
			Hstrok: '\u0126',
			hstrok: '\u0127',
			HumpDownHump: '\u224E',
			HumpEqual: '\u224F',
			hybull: '\u2043',
			hyphen: '\u2010',
			Iacute: '\u00CD',
			iacute: '\u00ED',
			ic: '\u2063',
			Icirc: '\u00CE',
			icirc: '\u00EE',
			Icy: '\u0418',
			icy: '\u0438',
			Idot: '\u0130',
			IEcy: '\u0415',
			iecy: '\u0435',
			iexcl: '\u00A1',
			iff: '\u21D4',
			Ifr: '\u2111',
			ifr: '\uD835\uDD26',
			Igrave: '\u00CC',
			igrave: '\u00EC',
			ii: '\u2148',
			iiiint: '\u2A0C',
			iiint: '\u222D',
			iinfin: '\u29DC',
			iiota: '\u2129',
			IJlig: '\u0132',
			ijlig: '\u0133',
			Im: '\u2111',
			Imacr: '\u012A',
			imacr: '\u012B',
			image: '\u2111',
			ImaginaryI: '\u2148',
			imagline: '\u2110',
			imagpart: '\u2111',
			imath: '\u0131',
			imof: '\u22B7',
			imped: '\u01B5',
			Implies: '\u21D2',
			in: '\u2208',
			incare: '\u2105',
			infin: '\u221E',
			infintie: '\u29DD',
			inodot: '\u0131',
			Int: '\u222C',
			int: '\u222B',
			intcal: '\u22BA',
			integers: '\u2124',
			Integral: '\u222B',
			intercal: '\u22BA',
			Intersection: '\u22C2',
			intlarhk: '\u2A17',
			intprod: '\u2A3C',
			InvisibleComma: '\u2063',
			InvisibleTimes: '\u2062',
			IOcy: '\u0401',
			iocy: '\u0451',
			Iogon: '\u012E',
			iogon: '\u012F',
			Iopf: '\uD835\uDD40',
			iopf: '\uD835\uDD5A',
			Iota: '\u0399',
			iota: '\u03B9',
			iprod: '\u2A3C',
			iquest: '\u00BF',
			Iscr: '\u2110',
			iscr: '\uD835\uDCBE',
			isin: '\u2208',
			isindot: '\u22F5',
			isinE: '\u22F9',
			isins: '\u22F4',
			isinsv: '\u22F3',
			isinv: '\u2208',
			it: '\u2062',
			Itilde: '\u0128',
			itilde: '\u0129',
			Iukcy: '\u0406',
			iukcy: '\u0456',
			Iuml: '\u00CF',
			iuml: '\u00EF',
			Jcirc: '\u0134',
			jcirc: '\u0135',
			Jcy: '\u0419',
			jcy: '\u0439',
			Jfr: '\uD835\uDD0D',
			jfr: '\uD835\uDD27',
			jmath: '\u0237',
			Jopf: '\uD835\uDD41',
			jopf: '\uD835\uDD5B',
			Jscr: '\uD835\uDCA5',
			jscr: '\uD835\uDCBF',
			Jsercy: '\u0408',
			jsercy: '\u0458',
			Jukcy: '\u0404',
			jukcy: '\u0454',
			Kappa: '\u039A',
			kappa: '\u03BA',
			kappav: '\u03F0',
			Kcedil: '\u0136',
			kcedil: '\u0137',
			Kcy: '\u041A',
			kcy: '\u043A',
			Kfr: '\uD835\uDD0E',
			kfr: '\uD835\uDD28',
			kgreen: '\u0138',
			KHcy: '\u0425',
			khcy: '\u0445',
			KJcy: '\u040C',
			kjcy: '\u045C',
			Kopf: '\uD835\uDD42',
			kopf: '\uD835\uDD5C',
			Kscr: '\uD835\uDCA6',
			kscr: '\uD835\uDCC0',
			lAarr: '\u21DA',
			Lacute: '\u0139',
			lacute: '\u013A',
			laemptyv: '\u29B4',
			lagran: '\u2112',
			Lambda: '\u039B',
			lambda: '\u03BB',
			Lang: '\u27EA',
			lang: '\u27E8',
			langd: '\u2991',
			langle: '\u27E8',
			lap: '\u2A85',
			Laplacetrf: '\u2112',
			laquo: '\u00AB',
			Larr: '\u219E',
			lArr: '\u21D0',
			larr: '\u2190',
			larrb: '\u21E4',
			larrbfs: '\u291F',
			larrfs: '\u291D',
			larrhk: '\u21A9',
			larrlp: '\u21AB',
			larrpl: '\u2939',
			larrsim: '\u2973',
			larrtl: '\u21A2',
			lat: '\u2AAB',
			lAtail: '\u291B',
			latail: '\u2919',
			late: '\u2AAD',
			lates: '\u2AAD\uFE00',
			lBarr: '\u290E',
			lbarr: '\u290C',
			lbbrk: '\u2772',
			lbrace: '\u007B',
			lbrack: '\u005B',
			lbrke: '\u298B',
			lbrksld: '\u298F',
			lbrkslu: '\u298D',
			Lcaron: '\u013D',
			lcaron: '\u013E',
			Lcedil: '\u013B',
			lcedil: '\u013C',
			lceil: '\u2308',
			lcub: '\u007B',
			Lcy: '\u041B',
			lcy: '\u043B',
			ldca: '\u2936',
			ldquo: '\u201C',
			ldquor: '\u201E',
			ldrdhar: '\u2967',
			ldrushar: '\u294B',
			ldsh: '\u21B2',
			lE: '\u2266',
			le: '\u2264',
			LeftAngleBracket: '\u27E8',
			LeftArrow: '\u2190',
			Leftarrow: '\u21D0',
			leftarrow: '\u2190',
			LeftArrowBar: '\u21E4',
			LeftArrowRightArrow: '\u21C6',
			leftarrowtail: '\u21A2',
			LeftCeiling: '\u2308',
			LeftDoubleBracket: '\u27E6',
			LeftDownTeeVector: '\u2961',
			LeftDownVector: '\u21C3',
			LeftDownVectorBar: '\u2959',
			LeftFloor: '\u230A',
			leftharpoondown: '\u21BD',
			leftharpoonup: '\u21BC',
			leftleftarrows: '\u21C7',
			LeftRightArrow: '\u2194',
			Leftrightarrow: '\u21D4',
			leftrightarrow: '\u2194',
			leftrightarrows: '\u21C6',
			leftrightharpoons: '\u21CB',
			leftrightsquigarrow: '\u21AD',
			LeftRightVector: '\u294E',
			LeftTee: '\u22A3',
			LeftTeeArrow: '\u21A4',
			LeftTeeVector: '\u295A',
			leftthreetimes: '\u22CB',
			LeftTriangle: '\u22B2',
			LeftTriangleBar: '\u29CF',
			LeftTriangleEqual: '\u22B4',
			LeftUpDownVector: '\u2951',
			LeftUpTeeVector: '\u2960',
			LeftUpVector: '\u21BF',
			LeftUpVectorBar: '\u2958',
			LeftVector: '\u21BC',
			LeftVectorBar: '\u2952',
			lEg: '\u2A8B',
			leg: '\u22DA',
			leq: '\u2264',
			leqq: '\u2266',
			leqslant: '\u2A7D',
			les: '\u2A7D',
			lescc: '\u2AA8',
			lesdot: '\u2A7F',
			lesdoto: '\u2A81',
			lesdotor: '\u2A83',
			lesg: '\u22DA\uFE00',
			lesges: '\u2A93',
			lessapprox: '\u2A85',
			lessdot: '\u22D6',
			lesseqgtr: '\u22DA',
			lesseqqgtr: '\u2A8B',
			LessEqualGreater: '\u22DA',
			LessFullEqual: '\u2266',
			LessGreater: '\u2276',
			lessgtr: '\u2276',
			LessLess: '\u2AA1',
			lesssim: '\u2272',
			LessSlantEqual: '\u2A7D',
			LessTilde: '\u2272',
			lfisht: '\u297C',
			lfloor: '\u230A',
			Lfr: '\uD835\uDD0F',
			lfr: '\uD835\uDD29',
			lg: '\u2276',
			lgE: '\u2A91',
			lHar: '\u2962',
			lhard: '\u21BD',
			lharu: '\u21BC',
			lharul: '\u296A',
			lhblk: '\u2584',
			LJcy: '\u0409',
			ljcy: '\u0459',
			Ll: '\u22D8',
			ll: '\u226A',
			llarr: '\u21C7',
			llcorner: '\u231E',
			Lleftarrow: '\u21DA',
			llhard: '\u296B',
			lltri: '\u25FA',
			Lmidot: '\u013F',
			lmidot: '\u0140',
			lmoust: '\u23B0',
			lmoustache: '\u23B0',
			lnap: '\u2A89',
			lnapprox: '\u2A89',
			lnE: '\u2268',
			lne: '\u2A87',
			lneq: '\u2A87',
			lneqq: '\u2268',
			lnsim: '\u22E6',
			loang: '\u27EC',
			loarr: '\u21FD',
			lobrk: '\u27E6',
			LongLeftArrow: '\u27F5',
			Longleftarrow: '\u27F8',
			longleftarrow: '\u27F5',
			LongLeftRightArrow: '\u27F7',
			Longleftrightarrow: '\u27FA',
			longleftrightarrow: '\u27F7',
			longmapsto: '\u27FC',
			LongRightArrow: '\u27F6',
			Longrightarrow: '\u27F9',
			longrightarrow: '\u27F6',
			looparrowleft: '\u21AB',
			looparrowright: '\u21AC',
			lopar: '\u2985',
			Lopf: '\uD835\uDD43',
			lopf: '\uD835\uDD5D',
			loplus: '\u2A2D',
			lotimes: '\u2A34',
			lowast: '\u2217',
			lowbar: '\u005F',
			LowerLeftArrow: '\u2199',
			LowerRightArrow: '\u2198',
			loz: '\u25CA',
			lozenge: '\u25CA',
			lozf: '\u29EB',
			lpar: '\u0028',
			lparlt: '\u2993',
			lrarr: '\u21C6',
			lrcorner: '\u231F',
			lrhar: '\u21CB',
			lrhard: '\u296D',
			lrm: '\u200E',
			lrtri: '\u22BF',
			lsaquo: '\u2039',
			Lscr: '\u2112',
			lscr: '\uD835\uDCC1',
			Lsh: '\u21B0',
			lsh: '\u21B0',
			lsim: '\u2272',
			lsime: '\u2A8D',
			lsimg: '\u2A8F',
			lsqb: '\u005B',
			lsquo: '\u2018',
			lsquor: '\u201A',
			Lstrok: '\u0141',
			lstrok: '\u0142',
			Lt: '\u226A',
			LT: '\u003C',
			lt: '\u003C',
			ltcc: '\u2AA6',
			ltcir: '\u2A79',
			ltdot: '\u22D6',
			lthree: '\u22CB',
			ltimes: '\u22C9',
			ltlarr: '\u2976',
			ltquest: '\u2A7B',
			ltri: '\u25C3',
			ltrie: '\u22B4',
			ltrif: '\u25C2',
			ltrPar: '\u2996',
			lurdshar: '\u294A',
			luruhar: '\u2966',
			lvertneqq: '\u2268\uFE00',
			lvnE: '\u2268\uFE00',
			macr: '\u00AF',
			male: '\u2642',
			malt: '\u2720',
			maltese: '\u2720',
			Map: '\u2905',
			map: '\u21A6',
			mapsto: '\u21A6',
			mapstodown: '\u21A7',
			mapstoleft: '\u21A4',
			mapstoup: '\u21A5',
			marker: '\u25AE',
			mcomma: '\u2A29',
			Mcy: '\u041C',
			mcy: '\u043C',
			mdash: '\u2014',
			mDDot: '\u223A',
			measuredangle: '\u2221',
			MediumSpace: '\u205F',
			Mellintrf: '\u2133',
			Mfr: '\uD835\uDD10',
			mfr: '\uD835\uDD2A',
			mho: '\u2127',
			micro: '\u00B5',
			mid: '\u2223',
			midast: '\u002A',
			midcir: '\u2AF0',
			middot: '\u00B7',
			minus: '\u2212',
			minusb: '\u229F',
			minusd: '\u2238',
			minusdu: '\u2A2A',
			MinusPlus: '\u2213',
			mlcp: '\u2ADB',
			mldr: '\u2026',
			mnplus: '\u2213',
			models: '\u22A7',
			Mopf: '\uD835\uDD44',
			mopf: '\uD835\uDD5E',
			mp: '\u2213',
			Mscr: '\u2133',
			mscr: '\uD835\uDCC2',
			mstpos: '\u223E',
			Mu: '\u039C',
			mu: '\u03BC',
			multimap: '\u22B8',
			mumap: '\u22B8',
			nabla: '\u2207',
			Nacute: '\u0143',
			nacute: '\u0144',
			nang: '\u2220\u20D2',
			nap: '\u2249',
			napE: '\u2A70\u0338',
			napid: '\u224B\u0338',
			napos: '\u0149',
			napprox: '\u2249',
			natur: '\u266E',
			natural: '\u266E',
			naturals: '\u2115',
			nbsp: '\u00A0',
			nbump: '\u224E\u0338',
			nbumpe: '\u224F\u0338',
			ncap: '\u2A43',
			Ncaron: '\u0147',
			ncaron: '\u0148',
			Ncedil: '\u0145',
			ncedil: '\u0146',
			ncong: '\u2247',
			ncongdot: '\u2A6D\u0338',
			ncup: '\u2A42',
			Ncy: '\u041D',
			ncy: '\u043D',
			ndash: '\u2013',
			ne: '\u2260',
			nearhk: '\u2924',
			neArr: '\u21D7',
			nearr: '\u2197',
			nearrow: '\u2197',
			nedot: '\u2250\u0338',
			NegativeMediumSpace: '\u200B',
			NegativeThickSpace: '\u200B',
			NegativeThinSpace: '\u200B',
			NegativeVeryThinSpace: '\u200B',
			nequiv: '\u2262',
			nesear: '\u2928',
			nesim: '\u2242\u0338',
			NestedGreaterGreater: '\u226B',
			NestedLessLess: '\u226A',
			NewLine: '\u000A',
			nexist: '\u2204',
			nexists: '\u2204',
			Nfr: '\uD835\uDD11',
			nfr: '\uD835\uDD2B',
			ngE: '\u2267\u0338',
			nge: '\u2271',
			ngeq: '\u2271',
			ngeqq: '\u2267\u0338',
			ngeqslant: '\u2A7E\u0338',
			nges: '\u2A7E\u0338',
			nGg: '\u22D9\u0338',
			ngsim: '\u2275',
			nGt: '\u226B\u20D2',
			ngt: '\u226F',
			ngtr: '\u226F',
			nGtv: '\u226B\u0338',
			nhArr: '\u21CE',
			nharr: '\u21AE',
			nhpar: '\u2AF2',
			ni: '\u220B',
			nis: '\u22FC',
			nisd: '\u22FA',
			niv: '\u220B',
			NJcy: '\u040A',
			njcy: '\u045A',
			nlArr: '\u21CD',
			nlarr: '\u219A',
			nldr: '\u2025',
			nlE: '\u2266\u0338',
			nle: '\u2270',
			nLeftarrow: '\u21CD',
			nleftarrow: '\u219A',
			nLeftrightarrow: '\u21CE',
			nleftrightarrow: '\u21AE',
			nleq: '\u2270',
			nleqq: '\u2266\u0338',
			nleqslant: '\u2A7D\u0338',
			nles: '\u2A7D\u0338',
			nless: '\u226E',
			nLl: '\u22D8\u0338',
			nlsim: '\u2274',
			nLt: '\u226A\u20D2',
			nlt: '\u226E',
			nltri: '\u22EA',
			nltrie: '\u22EC',
			nLtv: '\u226A\u0338',
			nmid: '\u2224',
			NoBreak: '\u2060',
			NonBreakingSpace: '\u00A0',
			Nopf: '\u2115',
			nopf: '\uD835\uDD5F',
			Not: '\u2AEC',
			not: '\u00AC',
			NotCongruent: '\u2262',
			NotCupCap: '\u226D',
			NotDoubleVerticalBar: '\u2226',
			NotElement: '\u2209',
			NotEqual: '\u2260',
			NotEqualTilde: '\u2242\u0338',
			NotExists: '\u2204',
			NotGreater: '\u226F',
			NotGreaterEqual: '\u2271',
			NotGreaterFullEqual: '\u2267\u0338',
			NotGreaterGreater: '\u226B\u0338',
			NotGreaterLess: '\u2279',
			NotGreaterSlantEqual: '\u2A7E\u0338',
			NotGreaterTilde: '\u2275',
			NotHumpDownHump: '\u224E\u0338',
			NotHumpEqual: '\u224F\u0338',
			notin: '\u2209',
			notindot: '\u22F5\u0338',
			notinE: '\u22F9\u0338',
			notinva: '\u2209',
			notinvb: '\u22F7',
			notinvc: '\u22F6',
			NotLeftTriangle: '\u22EA',
			NotLeftTriangleBar: '\u29CF\u0338',
			NotLeftTriangleEqual: '\u22EC',
			NotLess: '\u226E',
			NotLessEqual: '\u2270',
			NotLessGreater: '\u2278',
			NotLessLess: '\u226A\u0338',
			NotLessSlantEqual: '\u2A7D\u0338',
			NotLessTilde: '\u2274',
			NotNestedGreaterGreater: '\u2AA2\u0338',
			NotNestedLessLess: '\u2AA1\u0338',
			notni: '\u220C',
			notniva: '\u220C',
			notnivb: '\u22FE',
			notnivc: '\u22FD',
			NotPrecedes: '\u2280',
			NotPrecedesEqual: '\u2AAF\u0338',
			NotPrecedesSlantEqual: '\u22E0',
			NotReverseElement: '\u220C',
			NotRightTriangle: '\u22EB',
			NotRightTriangleBar: '\u29D0\u0338',
			NotRightTriangleEqual: '\u22ED',
			NotSquareSubset: '\u228F\u0338',
			NotSquareSubsetEqual: '\u22E2',
			NotSquareSuperset: '\u2290\u0338',
			NotSquareSupersetEqual: '\u22E3',
			NotSubset: '\u2282\u20D2',
			NotSubsetEqual: '\u2288',
			NotSucceeds: '\u2281',
			NotSucceedsEqual: '\u2AB0\u0338',
			NotSucceedsSlantEqual: '\u22E1',
			NotSucceedsTilde: '\u227F\u0338',
			NotSuperset: '\u2283\u20D2',
			NotSupersetEqual: '\u2289',
			NotTilde: '\u2241',
			NotTildeEqual: '\u2244',
			NotTildeFullEqual: '\u2247',
			NotTildeTilde: '\u2249',
			NotVerticalBar: '\u2224',
			npar: '\u2226',
			nparallel: '\u2226',
			nparsl: '\u2AFD\u20E5',
			npart: '\u2202\u0338',
			npolint: '\u2A14',
			npr: '\u2280',
			nprcue: '\u22E0',
			npre: '\u2AAF\u0338',
			nprec: '\u2280',
			npreceq: '\u2AAF\u0338',
			nrArr: '\u21CF',
			nrarr: '\u219B',
			nrarrc: '\u2933\u0338',
			nrarrw: '\u219D\u0338',
			nRightarrow: '\u21CF',
			nrightarrow: '\u219B',
			nrtri: '\u22EB',
			nrtrie: '\u22ED',
			nsc: '\u2281',
			nsccue: '\u22E1',
			nsce: '\u2AB0\u0338',
			Nscr: '\uD835\uDCA9',
			nscr: '\uD835\uDCC3',
			nshortmid: '\u2224',
			nshortparallel: '\u2226',
			nsim: '\u2241',
			nsime: '\u2244',
			nsimeq: '\u2244',
			nsmid: '\u2224',
			nspar: '\u2226',
			nsqsube: '\u22E2',
			nsqsupe: '\u22E3',
			nsub: '\u2284',
			nsubE: '\u2AC5\u0338',
			nsube: '\u2288',
			nsubset: '\u2282\u20D2',
			nsubseteq: '\u2288',
			nsubseteqq: '\u2AC5\u0338',
			nsucc: '\u2281',
			nsucceq: '\u2AB0\u0338',
			nsup: '\u2285',
			nsupE: '\u2AC6\u0338',
			nsupe: '\u2289',
			nsupset: '\u2283\u20D2',
			nsupseteq: '\u2289',
			nsupseteqq: '\u2AC6\u0338',
			ntgl: '\u2279',
			Ntilde: '\u00D1',
			ntilde: '\u00F1',
			ntlg: '\u2278',
			ntriangleleft: '\u22EA',
			ntrianglelefteq: '\u22EC',
			ntriangleright: '\u22EB',
			ntrianglerighteq: '\u22ED',
			Nu: '\u039D',
			nu: '\u03BD',
			num: '\u0023',
			numero: '\u2116',
			numsp: '\u2007',
			nvap: '\u224D\u20D2',
			nVDash: '\u22AF',
			nVdash: '\u22AE',
			nvDash: '\u22AD',
			nvdash: '\u22AC',
			nvge: '\u2265\u20D2',
			nvgt: '\u003E\u20D2',
			nvHarr: '\u2904',
			nvinfin: '\u29DE',
			nvlArr: '\u2902',
			nvle: '\u2264\u20D2',
			nvlt: '\u003C\u20D2',
			nvltrie: '\u22B4\u20D2',
			nvrArr: '\u2903',
			nvrtrie: '\u22B5\u20D2',
			nvsim: '\u223C\u20D2',
			nwarhk: '\u2923',
			nwArr: '\u21D6',
			nwarr: '\u2196',
			nwarrow: '\u2196',
			nwnear: '\u2927',
			Oacute: '\u00D3',
			oacute: '\u00F3',
			oast: '\u229B',
			ocir: '\u229A',
			Ocirc: '\u00D4',
			ocirc: '\u00F4',
			Ocy: '\u041E',
			ocy: '\u043E',
			odash: '\u229D',
			Odblac: '\u0150',
			odblac: '\u0151',
			odiv: '\u2A38',
			odot: '\u2299',
			odsold: '\u29BC',
			OElig: '\u0152',
			oelig: '\u0153',
			ofcir: '\u29BF',
			Ofr: '\uD835\uDD12',
			ofr: '\uD835\uDD2C',
			ogon: '\u02DB',
			Ograve: '\u00D2',
			ograve: '\u00F2',
			ogt: '\u29C1',
			ohbar: '\u29B5',
			ohm: '\u03A9',
			oint: '\u222E',
			olarr: '\u21BA',
			olcir: '\u29BE',
			olcross: '\u29BB',
			oline: '\u203E',
			olt: '\u29C0',
			Omacr: '\u014C',
			omacr: '\u014D',
			Omega: '\u03A9',
			omega: '\u03C9',
			Omicron: '\u039F',
			omicron: '\u03BF',
			omid: '\u29B6',
			ominus: '\u2296',
			Oopf: '\uD835\uDD46',
			oopf: '\uD835\uDD60',
			opar: '\u29B7',
			OpenCurlyDoubleQuote: '\u201C',
			OpenCurlyQuote: '\u2018',
			operp: '\u29B9',
			oplus: '\u2295',
			Or: '\u2A54',
			or: '\u2228',
			orarr: '\u21BB',
			ord: '\u2A5D',
			order: '\u2134',
			orderof: '\u2134',
			ordf: '\u00AA',
			ordm: '\u00BA',
			origof: '\u22B6',
			oror: '\u2A56',
			orslope: '\u2A57',
			orv: '\u2A5B',
			oS: '\u24C8',
			Oscr: '\uD835\uDCAA',
			oscr: '\u2134',
			Oslash: '\u00D8',
			oslash: '\u00F8',
			osol: '\u2298',
			Otilde: '\u00D5',
			otilde: '\u00F5',
			Otimes: '\u2A37',
			otimes: '\u2297',
			otimesas: '\u2A36',
			Ouml: '\u00D6',
			ouml: '\u00F6',
			ovbar: '\u233D',
			OverBar: '\u203E',
			OverBrace: '\u23DE',
			OverBracket: '\u23B4',
			OverParenthesis: '\u23DC',
			par: '\u2225',
			para: '\u00B6',
			parallel: '\u2225',
			parsim: '\u2AF3',
			parsl: '\u2AFD',
			part: '\u2202',
			PartialD: '\u2202',
			Pcy: '\u041F',
			pcy: '\u043F',
			percnt: '\u0025',
			period: '\u002E',
			permil: '\u2030',
			perp: '\u22A5',
			pertenk: '\u2031',
			Pfr: '\uD835\uDD13',
			pfr: '\uD835\uDD2D',
			Phi: '\u03A6',
			phi: '\u03C6',
			phiv: '\u03D5',
			phmmat: '\u2133',
			phone: '\u260E',
			Pi: '\u03A0',
			pi: '\u03C0',
			pitchfork: '\u22D4',
			piv: '\u03D6',
			planck: '\u210F',
			planckh: '\u210E',
			plankv: '\u210F',
			plus: '\u002B',
			plusacir: '\u2A23',
			plusb: '\u229E',
			pluscir: '\u2A22',
			plusdo: '\u2214',
			plusdu: '\u2A25',
			pluse: '\u2A72',
			PlusMinus: '\u00B1',
			plusmn: '\u00B1',
			plussim: '\u2A26',
			plustwo: '\u2A27',
			pm: '\u00B1',
			Poincareplane: '\u210C',
			pointint: '\u2A15',
			Popf: '\u2119',
			popf: '\uD835\uDD61',
			pound: '\u00A3',
			Pr: '\u2ABB',
			pr: '\u227A',
			prap: '\u2AB7',
			prcue: '\u227C',
			prE: '\u2AB3',
			pre: '\u2AAF',
			prec: '\u227A',
			precapprox: '\u2AB7',
			preccurlyeq: '\u227C',
			Precedes: '\u227A',
			PrecedesEqual: '\u2AAF',
			PrecedesSlantEqual: '\u227C',
			PrecedesTilde: '\u227E',
			preceq: '\u2AAF',
			precnapprox: '\u2AB9',
			precneqq: '\u2AB5',
			precnsim: '\u22E8',
			precsim: '\u227E',
			Prime: '\u2033',
			prime: '\u2032',
			primes: '\u2119',
			prnap: '\u2AB9',
			prnE: '\u2AB5',
			prnsim: '\u22E8',
			prod: '\u220F',
			Product: '\u220F',
			profalar: '\u232E',
			profline: '\u2312',
			profsurf: '\u2313',
			prop: '\u221D',
			Proportion: '\u2237',
			Proportional: '\u221D',
			propto: '\u221D',
			prsim: '\u227E',
			prurel: '\u22B0',
			Pscr: '\uD835\uDCAB',
			pscr: '\uD835\uDCC5',
			Psi: '\u03A8',
			psi: '\u03C8',
			puncsp: '\u2008',
			Qfr: '\uD835\uDD14',
			qfr: '\uD835\uDD2E',
			qint: '\u2A0C',
			Qopf: '\u211A',
			qopf: '\uD835\uDD62',
			qprime: '\u2057',
			Qscr: '\uD835\uDCAC',
			qscr: '\uD835\uDCC6',
			quaternions: '\u210D',
			quatint: '\u2A16',
			quest: '\u003F',
			questeq: '\u225F',
			QUOT: '\u0022',
			quot: '\u0022',
			rAarr: '\u21DB',
			race: '\u223D\u0331',
			Racute: '\u0154',
			racute: '\u0155',
			radic: '\u221A',
			raemptyv: '\u29B3',
			Rang: '\u27EB',
			rang: '\u27E9',
			rangd: '\u2992',
			range: '\u29A5',
			rangle: '\u27E9',
			raquo: '\u00BB',
			Rarr: '\u21A0',
			rArr: '\u21D2',
			rarr: '\u2192',
			rarrap: '\u2975',
			rarrb: '\u21E5',
			rarrbfs: '\u2920',
			rarrc: '\u2933',
			rarrfs: '\u291E',
			rarrhk: '\u21AA',
			rarrlp: '\u21AC',
			rarrpl: '\u2945',
			rarrsim: '\u2974',
			Rarrtl: '\u2916',
			rarrtl: '\u21A3',
			rarrw: '\u219D',
			rAtail: '\u291C',
			ratail: '\u291A',
			ratio: '\u2236',
			rationals: '\u211A',
			RBarr: '\u2910',
			rBarr: '\u290F',
			rbarr: '\u290D',
			rbbrk: '\u2773',
			rbrace: '\u007D',
			rbrack: '\u005D',
			rbrke: '\u298C',
			rbrksld: '\u298E',
			rbrkslu: '\u2990',
			Rcaron: '\u0158',
			rcaron: '\u0159',
			Rcedil: '\u0156',
			rcedil: '\u0157',
			rceil: '\u2309',
			rcub: '\u007D',
			Rcy: '\u0420',
			rcy: '\u0440',
			rdca: '\u2937',
			rdldhar: '\u2969',
			rdquo: '\u201D',
			rdquor: '\u201D',
			rdsh: '\u21B3',
			Re: '\u211C',
			real: '\u211C',
			realine: '\u211B',
			realpart: '\u211C',
			reals: '\u211D',
			rect: '\u25AD',
			REG: '\u00AE',
			reg: '\u00AE',
			ReverseElement: '\u220B',
			ReverseEquilibrium: '\u21CB',
			ReverseUpEquilibrium: '\u296F',
			rfisht: '\u297D',
			rfloor: '\u230B',
			Rfr: '\u211C',
			rfr: '\uD835\uDD2F',
			rHar: '\u2964',
			rhard: '\u21C1',
			rharu: '\u21C0',
			rharul: '\u296C',
			Rho: '\u03A1',
			rho: '\u03C1',
			rhov: '\u03F1',
			RightAngleBracket: '\u27E9',
			RightArrow: '\u2192',
			Rightarrow: '\u21D2',
			rightarrow: '\u2192',
			RightArrowBar: '\u21E5',
			RightArrowLeftArrow: '\u21C4',
			rightarrowtail: '\u21A3',
			RightCeiling: '\u2309',
			RightDoubleBracket: '\u27E7',
			RightDownTeeVector: '\u295D',
			RightDownVector: '\u21C2',
			RightDownVectorBar: '\u2955',
			RightFloor: '\u230B',
			rightharpoondown: '\u21C1',
			rightharpoonup: '\u21C0',
			rightleftarrows: '\u21C4',
			rightleftharpoons: '\u21CC',
			rightrightarrows: '\u21C9',
			rightsquigarrow: '\u219D',
			RightTee: '\u22A2',
			RightTeeArrow: '\u21A6',
			RightTeeVector: '\u295B',
			rightthreetimes: '\u22CC',
			RightTriangle: '\u22B3',
			RightTriangleBar: '\u29D0',
			RightTriangleEqual: '\u22B5',
			RightUpDownVector: '\u294F',
			RightUpTeeVector: '\u295C',
			RightUpVector: '\u21BE',
			RightUpVectorBar: '\u2954',
			RightVector: '\u21C0',
			RightVectorBar: '\u2953',
			ring: '\u02DA',
			risingdotseq: '\u2253',
			rlarr: '\u21C4',
			rlhar: '\u21CC',
			rlm: '\u200F',
			rmoust: '\u23B1',
			rmoustache: '\u23B1',
			rnmid: '\u2AEE',
			roang: '\u27ED',
			roarr: '\u21FE',
			robrk: '\u27E7',
			ropar: '\u2986',
			Ropf: '\u211D',
			ropf: '\uD835\uDD63',
			roplus: '\u2A2E',
			rotimes: '\u2A35',
			RoundImplies: '\u2970',
			rpar: '\u0029',
			rpargt: '\u2994',
			rppolint: '\u2A12',
			rrarr: '\u21C9',
			Rrightarrow: '\u21DB',
			rsaquo: '\u203A',
			Rscr: '\u211B',
			rscr: '\uD835\uDCC7',
			Rsh: '\u21B1',
			rsh: '\u21B1',
			rsqb: '\u005D',
			rsquo: '\u2019',
			rsquor: '\u2019',
			rthree: '\u22CC',
			rtimes: '\u22CA',
			rtri: '\u25B9',
			rtrie: '\u22B5',
			rtrif: '\u25B8',
			rtriltri: '\u29CE',
			RuleDelayed: '\u29F4',
			ruluhar: '\u2968',
			rx: '\u211E',
			Sacute: '\u015A',
			sacute: '\u015B',
			sbquo: '\u201A',
			Sc: '\u2ABC',
			sc: '\u227B',
			scap: '\u2AB8',
			Scaron: '\u0160',
			scaron: '\u0161',
			sccue: '\u227D',
			scE: '\u2AB4',
			sce: '\u2AB0',
			Scedil: '\u015E',
			scedil: '\u015F',
			Scirc: '\u015C',
			scirc: '\u015D',
			scnap: '\u2ABA',
			scnE: '\u2AB6',
			scnsim: '\u22E9',
			scpolint: '\u2A13',
			scsim: '\u227F',
			Scy: '\u0421',
			scy: '\u0441',
			sdot: '\u22C5',
			sdotb: '\u22A1',
			sdote: '\u2A66',
			searhk: '\u2925',
			seArr: '\u21D8',
			searr: '\u2198',
			searrow: '\u2198',
			sect: '\u00A7',
			semi: '\u003B',
			seswar: '\u2929',
			setminus: '\u2216',
			setmn: '\u2216',
			sext: '\u2736',
			Sfr: '\uD835\uDD16',
			sfr: '\uD835\uDD30',
			sfrown: '\u2322',
			sharp: '\u266F',
			SHCHcy: '\u0429',
			shchcy: '\u0449',
			SHcy: '\u0428',
			shcy: '\u0448',
			ShortDownArrow: '\u2193',
			ShortLeftArrow: '\u2190',
			shortmid: '\u2223',
			shortparallel: '\u2225',
			ShortRightArrow: '\u2192',
			ShortUpArrow: '\u2191',
			shy: '\u00AD',
			Sigma: '\u03A3',
			sigma: '\u03C3',
			sigmaf: '\u03C2',
			sigmav: '\u03C2',
			sim: '\u223C',
			simdot: '\u2A6A',
			sime: '\u2243',
			simeq: '\u2243',
			simg: '\u2A9E',
			simgE: '\u2AA0',
			siml: '\u2A9D',
			simlE: '\u2A9F',
			simne: '\u2246',
			simplus: '\u2A24',
			simrarr: '\u2972',
			slarr: '\u2190',
			SmallCircle: '\u2218',
			smallsetminus: '\u2216',
			smashp: '\u2A33',
			smeparsl: '\u29E4',
			smid: '\u2223',
			smile: '\u2323',
			smt: '\u2AAA',
			smte: '\u2AAC',
			smtes: '\u2AAC\uFE00',
			SOFTcy: '\u042C',
			softcy: '\u044C',
			sol: '\u002F',
			solb: '\u29C4',
			solbar: '\u233F',
			Sopf: '\uD835\uDD4A',
			sopf: '\uD835\uDD64',
			spades: '\u2660',
			spadesuit: '\u2660',
			spar: '\u2225',
			sqcap: '\u2293',
			sqcaps: '\u2293\uFE00',
			sqcup: '\u2294',
			sqcups: '\u2294\uFE00',
			Sqrt: '\u221A',
			sqsub: '\u228F',
			sqsube: '\u2291',
			sqsubset: '\u228F',
			sqsubseteq: '\u2291',
			sqsup: '\u2290',
			sqsupe: '\u2292',
			sqsupset: '\u2290',
			sqsupseteq: '\u2292',
			squ: '\u25A1',
			Square: '\u25A1',
			square: '\u25A1',
			SquareIntersection: '\u2293',
			SquareSubset: '\u228F',
			SquareSubsetEqual: '\u2291',
			SquareSuperset: '\u2290',
			SquareSupersetEqual: '\u2292',
			SquareUnion: '\u2294',
			squarf: '\u25AA',
			squf: '\u25AA',
			srarr: '\u2192',
			Sscr: '\uD835\uDCAE',
			sscr: '\uD835\uDCC8',
			ssetmn: '\u2216',
			ssmile: '\u2323',
			sstarf: '\u22C6',
			Star: '\u22C6',
			star: '\u2606',
			starf: '\u2605',
			straightepsilon: '\u03F5',
			straightphi: '\u03D5',
			strns: '\u00AF',
			Sub: '\u22D0',
			sub: '\u2282',
			subdot: '\u2ABD',
			subE: '\u2AC5',
			sube: '\u2286',
			subedot: '\u2AC3',
			submult: '\u2AC1',
			subnE: '\u2ACB',
			subne: '\u228A',
			subplus: '\u2ABF',
			subrarr: '\u2979',
			Subset: '\u22D0',
			subset: '\u2282',
			subseteq: '\u2286',
			subseteqq: '\u2AC5',
			SubsetEqual: '\u2286',
			subsetneq: '\u228A',
			subsetneqq: '\u2ACB',
			subsim: '\u2AC7',
			subsub: '\u2AD5',
			subsup: '\u2AD3',
			succ: '\u227B',
			succapprox: '\u2AB8',
			succcurlyeq: '\u227D',
			Succeeds: '\u227B',
			SucceedsEqual: '\u2AB0',
			SucceedsSlantEqual: '\u227D',
			SucceedsTilde: '\u227F',
			succeq: '\u2AB0',
			succnapprox: '\u2ABA',
			succneqq: '\u2AB6',
			succnsim: '\u22E9',
			succsim: '\u227F',
			SuchThat: '\u220B',
			Sum: '\u2211',
			sum: '\u2211',
			sung: '\u266A',
			Sup: '\u22D1',
			sup: '\u2283',
			sup1: '\u00B9',
			sup2: '\u00B2',
			sup3: '\u00B3',
			supdot: '\u2ABE',
			supdsub: '\u2AD8',
			supE: '\u2AC6',
			supe: '\u2287',
			supedot: '\u2AC4',
			Superset: '\u2283',
			SupersetEqual: '\u2287',
			suphsol: '\u27C9',
			suphsub: '\u2AD7',
			suplarr: '\u297B',
			supmult: '\u2AC2',
			supnE: '\u2ACC',
			supne: '\u228B',
			supplus: '\u2AC0',
			Supset: '\u22D1',
			supset: '\u2283',
			supseteq: '\u2287',
			supseteqq: '\u2AC6',
			supsetneq: '\u228B',
			supsetneqq: '\u2ACC',
			supsim: '\u2AC8',
			supsub: '\u2AD4',
			supsup: '\u2AD6',
			swarhk: '\u2926',
			swArr: '\u21D9',
			swarr: '\u2199',
			swarrow: '\u2199',
			swnwar: '\u292A',
			szlig: '\u00DF',
			Tab: '\u0009',
			target: '\u2316',
			Tau: '\u03A4',
			tau: '\u03C4',
			tbrk: '\u23B4',
			Tcaron: '\u0164',
			tcaron: '\u0165',
			Tcedil: '\u0162',
			tcedil: '\u0163',
			Tcy: '\u0422',
			tcy: '\u0442',
			tdot: '\u20DB',
			telrec: '\u2315',
			Tfr: '\uD835\uDD17',
			tfr: '\uD835\uDD31',
			there4: '\u2234',
			Therefore: '\u2234',
			therefore: '\u2234',
			Theta: '\u0398',
			theta: '\u03B8',
			thetasym: '\u03D1',
			thetav: '\u03D1',
			thickapprox: '\u2248',
			thicksim: '\u223C',
			ThickSpace: '\u205F\u200A',
			thinsp: '\u2009',
			ThinSpace: '\u2009',
			thkap: '\u2248',
			thksim: '\u223C',
			THORN: '\u00DE',
			thorn: '\u00FE',
			Tilde: '\u223C',
			tilde: '\u02DC',
			TildeEqual: '\u2243',
			TildeFullEqual: '\u2245',
			TildeTilde: '\u2248',
			times: '\u00D7',
			timesb: '\u22A0',
			timesbar: '\u2A31',
			timesd: '\u2A30',
			tint: '\u222D',
			toea: '\u2928',
			top: '\u22A4',
			topbot: '\u2336',
			topcir: '\u2AF1',
			Topf: '\uD835\uDD4B',
			topf: '\uD835\uDD65',
			topfork: '\u2ADA',
			tosa: '\u2929',
			tprime: '\u2034',
			TRADE: '\u2122',
			trade: '\u2122',
			triangle: '\u25B5',
			triangledown: '\u25BF',
			triangleleft: '\u25C3',
			trianglelefteq: '\u22B4',
			triangleq: '\u225C',
			triangleright: '\u25B9',
			trianglerighteq: '\u22B5',
			tridot: '\u25EC',
			trie: '\u225C',
			triminus: '\u2A3A',
			TripleDot: '\u20DB',
			triplus: '\u2A39',
			trisb: '\u29CD',
			tritime: '\u2A3B',
			trpezium: '\u23E2',
			Tscr: '\uD835\uDCAF',
			tscr: '\uD835\uDCC9',
			TScy: '\u0426',
			tscy: '\u0446',
			TSHcy: '\u040B',
			tshcy: '\u045B',
			Tstrok: '\u0166',
			tstrok: '\u0167',
			twixt: '\u226C',
			twoheadleftarrow: '\u219E',
			twoheadrightarrow: '\u21A0',
			Uacute: '\u00DA',
			uacute: '\u00FA',
			Uarr: '\u219F',
			uArr: '\u21D1',
			uarr: '\u2191',
			Uarrocir: '\u2949',
			Ubrcy: '\u040E',
			ubrcy: '\u045E',
			Ubreve: '\u016C',
			ubreve: '\u016D',
			Ucirc: '\u00DB',
			ucirc: '\u00FB',
			Ucy: '\u0423',
			ucy: '\u0443',
			udarr: '\u21C5',
			Udblac: '\u0170',
			udblac: '\u0171',
			udhar: '\u296E',
			ufisht: '\u297E',
			Ufr: '\uD835\uDD18',
			ufr: '\uD835\uDD32',
			Ugrave: '\u00D9',
			ugrave: '\u00F9',
			uHar: '\u2963',
			uharl: '\u21BF',
			uharr: '\u21BE',
			uhblk: '\u2580',
			ulcorn: '\u231C',
			ulcorner: '\u231C',
			ulcrop: '\u230F',
			ultri: '\u25F8',
			Umacr: '\u016A',
			umacr: '\u016B',
			uml: '\u00A8',
			UnderBar: '\u005F',
			UnderBrace: '\u23DF',
			UnderBracket: '\u23B5',
			UnderParenthesis: '\u23DD',
			Union: '\u22C3',
			UnionPlus: '\u228E',
			Uogon: '\u0172',
			uogon: '\u0173',
			Uopf: '\uD835\uDD4C',
			uopf: '\uD835\uDD66',
			UpArrow: '\u2191',
			Uparrow: '\u21D1',
			uparrow: '\u2191',
			UpArrowBar: '\u2912',
			UpArrowDownArrow: '\u21C5',
			UpDownArrow: '\u2195',
			Updownarrow: '\u21D5',
			updownarrow: '\u2195',
			UpEquilibrium: '\u296E',
			upharpoonleft: '\u21BF',
			upharpoonright: '\u21BE',
			uplus: '\u228E',
			UpperLeftArrow: '\u2196',
			UpperRightArrow: '\u2197',
			Upsi: '\u03D2',
			upsi: '\u03C5',
			upsih: '\u03D2',
			Upsilon: '\u03A5',
			upsilon: '\u03C5',
			UpTee: '\u22A5',
			UpTeeArrow: '\u21A5',
			upuparrows: '\u21C8',
			urcorn: '\u231D',
			urcorner: '\u231D',
			urcrop: '\u230E',
			Uring: '\u016E',
			uring: '\u016F',
			urtri: '\u25F9',
			Uscr: '\uD835\uDCB0',
			uscr: '\uD835\uDCCA',
			utdot: '\u22F0',
			Utilde: '\u0168',
			utilde: '\u0169',
			utri: '\u25B5',
			utrif: '\u25B4',
			uuarr: '\u21C8',
			Uuml: '\u00DC',
			uuml: '\u00FC',
			uwangle: '\u29A7',
			vangrt: '\u299C',
			varepsilon: '\u03F5',
			varkappa: '\u03F0',
			varnothing: '\u2205',
			varphi: '\u03D5',
			varpi: '\u03D6',
			varpropto: '\u221D',
			vArr: '\u21D5',
			varr: '\u2195',
			varrho: '\u03F1',
			varsigma: '\u03C2',
			varsubsetneq: '\u228A\uFE00',
			varsubsetneqq: '\u2ACB\uFE00',
			varsupsetneq: '\u228B\uFE00',
			varsupsetneqq: '\u2ACC\uFE00',
			vartheta: '\u03D1',
			vartriangleleft: '\u22B2',
			vartriangleright: '\u22B3',
			Vbar: '\u2AEB',
			vBar: '\u2AE8',
			vBarv: '\u2AE9',
			Vcy: '\u0412',
			vcy: '\u0432',
			VDash: '\u22AB',
			Vdash: '\u22A9',
			vDash: '\u22A8',
			vdash: '\u22A2',
			Vdashl: '\u2AE6',
			Vee: '\u22C1',
			vee: '\u2228',
			veebar: '\u22BB',
			veeeq: '\u225A',
			vellip: '\u22EE',
			Verbar: '\u2016',
			verbar: '\u007C',
			Vert: '\u2016',
			vert: '\u007C',
			VerticalBar: '\u2223',
			VerticalLine: '\u007C',
			VerticalSeparator: '\u2758',
			VerticalTilde: '\u2240',
			VeryThinSpace: '\u200A',
			Vfr: '\uD835\uDD19',
			vfr: '\uD835\uDD33',
			vltri: '\u22B2',
			vnsub: '\u2282\u20D2',
			vnsup: '\u2283\u20D2',
			Vopf: '\uD835\uDD4D',
			vopf: '\uD835\uDD67',
			vprop: '\u221D',
			vrtri: '\u22B3',
			Vscr: '\uD835\uDCB1',
			vscr: '\uD835\uDCCB',
			vsubnE: '\u2ACB\uFE00',
			vsubne: '\u228A\uFE00',
			vsupnE: '\u2ACC\uFE00',
			vsupne: '\u228B\uFE00',
			Vvdash: '\u22AA',
			vzigzag: '\u299A',
			Wcirc: '\u0174',
			wcirc: '\u0175',
			wedbar: '\u2A5F',
			Wedge: '\u22C0',
			wedge: '\u2227',
			wedgeq: '\u2259',
			weierp: '\u2118',
			Wfr: '\uD835\uDD1A',
			wfr: '\uD835\uDD34',
			Wopf: '\uD835\uDD4E',
			wopf: '\uD835\uDD68',
			wp: '\u2118',
			wr: '\u2240',
			wreath: '\u2240',
			Wscr: '\uD835\uDCB2',
			wscr: '\uD835\uDCCC',
			xcap: '\u22C2',
			xcirc: '\u25EF',
			xcup: '\u22C3',
			xdtri: '\u25BD',
			Xfr: '\uD835\uDD1B',
			xfr: '\uD835\uDD35',
			xhArr: '\u27FA',
			xharr: '\u27F7',
			Xi: '\u039E',
			xi: '\u03BE',
			xlArr: '\u27F8',
			xlarr: '\u27F5',
			xmap: '\u27FC',
			xnis: '\u22FB',
			xodot: '\u2A00',
			Xopf: '\uD835\uDD4F',
			xopf: '\uD835\uDD69',
			xoplus: '\u2A01',
			xotime: '\u2A02',
			xrArr: '\u27F9',
			xrarr: '\u27F6',
			Xscr: '\uD835\uDCB3',
			xscr: '\uD835\uDCCD',
			xsqcup: '\u2A06',
			xuplus: '\u2A04',
			xutri: '\u25B3',
			xvee: '\u22C1',
			xwedge: '\u22C0',
			Yacute: '\u00DD',
			yacute: '\u00FD',
			YAcy: '\u042F',
			yacy: '\u044F',
			Ycirc: '\u0176',
			ycirc: '\u0177',
			Ycy: '\u042B',
			ycy: '\u044B',
			yen: '\u00A5',
			Yfr: '\uD835\uDD1C',
			yfr: '\uD835\uDD36',
			YIcy: '\u0407',
			yicy: '\u0457',
			Yopf: '\uD835\uDD50',
			yopf: '\uD835\uDD6A',
			Yscr: '\uD835\uDCB4',
			yscr: '\uD835\uDCCE',
			YUcy: '\u042E',
			yucy: '\u044E',
			Yuml: '\u0178',
			yuml: '\u00FF',
			Zacute: '\u0179',
			zacute: '\u017A',
			Zcaron: '\u017D',
			zcaron: '\u017E',
			Zcy: '\u0417',
			zcy: '\u0437',
			Zdot: '\u017B',
			zdot: '\u017C',
			zeetrf: '\u2128',
			ZeroWidthSpace: '\u200B',
			Zeta: '\u0396',
			zeta: '\u03B6',
			Zfr: '\u2128',
			zfr: '\uD835\uDD37',
			ZHcy: '\u0416',
			zhcy: '\u0436',
			zigrarr: '\u21DD',
			Zopf: '\u2124',
			zopf: '\uD835\uDD6B',
			Zscr: '\uD835\uDCB5',
			zscr: '\uD835\uDCCF',
			zwj: '\u200D',
			zwnj: '\u200C',
		});

		/**
		 * @deprecated
		 * Use `HTML_ENTITIES` instead.
		 * @see {@link HTML_ENTITIES}
		 */
		exports.entityMap = exports.HTML_ENTITIES; 
	} (entities));
	return entities;
}

var sax = {};

var hasRequiredSax;

function requireSax () {
	if (hasRequiredSax) return sax;
	hasRequiredSax = 1;

	var conventions = requireConventions();
	var g = requireGrammar();
	var errors = requireErrors();

	var isHTMLEscapableRawTextElement = conventions.isHTMLEscapableRawTextElement;
	var isHTMLMimeType = conventions.isHTMLMimeType;
	var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
	var hasOwn = conventions.hasOwn;
	var NAMESPACE = conventions.NAMESPACE;
	var ParseError = errors.ParseError;
	var DOMException = errors.DOMException;

	//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

	//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
	//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
	var S_TAG = 0; //tag name offerring
	var S_ATTR = 1; //attr name offerring
	var S_ATTR_SPACE = 2; //attr name end and space offer
	var S_EQ = 3; //=space?
	var S_ATTR_NOQUOT_VALUE = 4; //attr value(no quot value only)
	var S_ATTR_END = 5; //attr value end and no space(quot end)
	var S_TAG_SPACE = 6; //(attr value end || tag end ) && (space offer)
	var S_TAG_CLOSE = 7; //closed el<el />

	function XMLReader() {}

	XMLReader.prototype = {
		parse: function (source, defaultNSMap, entityMap) {
			var domBuilder = this.domBuilder;
			domBuilder.startDocument();
			_copy(defaultNSMap, (defaultNSMap = Object.create(null)));
			parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
			domBuilder.endDocument();
		},
	};

	/**
	 * Detecting everything that might be a reference,
	 * including those without ending `;`, since those are allowed in HTML.
	 * The entityReplacer takes care of verifying and transforming each occurrence,
	 * and reports to the errorHandler on those that are not OK,
	 * depending on the context.
	 */
	var ENTITY_REG = /&#?\w+;?/g;

	function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
		var isHTML = isHTMLMimeType(domBuilder.mimeType);
		if (source.indexOf(g.UNICODE_REPLACEMENT_CHARACTER) >= 0) {
			return errorHandler.fatalError('Unicode replacement character detected, source encoding issues?');
		}

		function fixedFromCharCode(code) {
			// String.prototype.fromCharCode does not supports
			// > 2 bytes unicode chars directly
			if (code > 0xffff) {
				code -= 0x10000;
				var surrogate1 = 0xd800 + (code >> 10),
					surrogate2 = 0xdc00 + (code & 0x3ff);

				return String.fromCharCode(surrogate1, surrogate2);
			} else {
				return String.fromCharCode(code);
			}
		}

		function entityReplacer(a) {
			var complete = a[a.length - 1] === ';' ? a : a + ';';
			if (!isHTML && complete !== a) {
				errorHandler.error('EntityRef: expecting ;');
				return a;
			}
			var match = g.Reference.exec(complete);
			if (!match || match[0].length !== complete.length) {
				errorHandler.error('entity not matching Reference production: ' + a);
				return a;
			}
			var k = complete.slice(1, -1);
			if (hasOwn(entityMap, k)) {
				return entityMap[k];
			} else if (k.charAt(0) === '#') {
				return fixedFromCharCode(parseInt(k.substr(1).replace('x', '0x')));
			} else {
				errorHandler.error('entity not found:' + a);
				return a;
			}
		}

		function appendText(end) {
			//has some bugs
			if (end > start) {
				var xt = source.substring(start, end).replace(ENTITY_REG, entityReplacer);
				locator && position(start);
				domBuilder.characters(xt, 0, end - start);
				start = end;
			}
		}

		function position(p, m) {
			while (p >= lineEnd && (m = linePattern.exec(source))) {
				lineStart = m.index;
				lineEnd = lineStart + m[0].length;
				locator.lineNumber++;
			}
			locator.columnNumber = p - lineStart + 1;
		}

		var lineStart = 0;
		var lineEnd = 0;
		var linePattern = /.*(?:\r\n?|\n)|.*$/g;
		var locator = domBuilder.locator;

		var parseStack = [{ currentNSMap: defaultNSMapCopy }];
		var unclosedTags = [];
		var start = 0;
		while (true) {
			try {
				var tagStart = source.indexOf('<', start);
				if (tagStart < 0) {
					if (!isHTML && unclosedTags.length > 0) {
						return errorHandler.fatalError('unclosed xml tag(s): ' + unclosedTags.join(', '));
					}
					if (!source.substring(start).match(/^\s*$/)) {
						var doc = domBuilder.doc;
						var text = doc.createTextNode(source.substr(start));
						if (doc.documentElement) {
							return errorHandler.error('Extra content at the end of the document');
						}
						doc.appendChild(text);
						domBuilder.currentElement = text;
					}
					return;
				}
				if (tagStart > start) {
					var fromSource = source.substring(start, tagStart);
					if (!isHTML && unclosedTags.length === 0) {
						fromSource = fromSource.replace(new RegExp(g.S_OPT.source, 'g'), '');
						fromSource && errorHandler.error("Unexpected content outside root element: '" + fromSource + "'");
					}
					appendText(tagStart);
				}
				switch (source.charAt(tagStart + 1)) {
					case '/':
						var end = source.indexOf('>', tagStart + 2);
						var tagNameRaw = source.substring(tagStart + 2, end > 0 ? end : undefined);
						if (!tagNameRaw) {
							return errorHandler.fatalError('end tag name missing');
						}
						var tagNameMatch = end > 0 && g.reg('^', g.QName_group, g.S_OPT, '$').exec(tagNameRaw);
						if (!tagNameMatch) {
							return errorHandler.fatalError('end tag name contains invalid characters: "' + tagNameRaw + '"');
						}
						if (!domBuilder.currentElement && !domBuilder.doc.documentElement) {
							// not enough information to provide a helpful error message,
							// but parsing will throw since there is no root element
							return;
						}
						var currentTagName =
							unclosedTags[unclosedTags.length - 1] ||
							domBuilder.currentElement.tagName ||
							domBuilder.doc.documentElement.tagName ||
							'';
						if (currentTagName !== tagNameMatch[1]) {
							var tagNameLower = tagNameMatch[1].toLowerCase();
							if (!isHTML || currentTagName.toLowerCase() !== tagNameLower) {
								return errorHandler.fatalError('Opening and ending tag mismatch: "' + currentTagName + '" != "' + tagNameRaw + '"');
							}
						}
						var config = parseStack.pop();
						unclosedTags.pop();
						var localNSMap = config.localNSMap;
						domBuilder.endElement(config.uri, config.localName, currentTagName);
						if (localNSMap) {
							for (var prefix in localNSMap) {
								if (hasOwn(localNSMap, prefix)) {
									domBuilder.endPrefixMapping(prefix);
								}
							}
						}

						end++;
						break;
					// end element
					case '?': // <?...?>
						locator && position(tagStart);
						end = parseProcessingInstruction(source, tagStart, domBuilder, errorHandler);
						break;
					case '!': // <!doctype,<![CDATA,<!--
						locator && position(tagStart);
						end = parseDoctypeCommentOrCData(source, tagStart, domBuilder, errorHandler, isHTML);
						break;
					default:
						locator && position(tagStart);
						var el = new ElementAttributes();
						var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
						//elStartEnd
						var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler, isHTML);
						var len = el.length;

						if (!el.closed) {
							if (isHTML && conventions.isHTMLVoidElement(el.tagName)) {
								el.closed = true;
							} else {
								unclosedTags.push(el.tagName);
							}
						}
						if (locator && len) {
							var locator2 = copyLocator(locator, {});
							//try{//attribute position fixed
							for (var i = 0; i < len; i++) {
								var a = el[i];
								position(a.offset);
								a.locator = copyLocator(locator, {});
							}
							domBuilder.locator = locator2;
							if (appendElement(el, domBuilder, currentNSMap)) {
								parseStack.push(el);
							}
							domBuilder.locator = locator;
						} else {
							if (appendElement(el, domBuilder, currentNSMap)) {
								parseStack.push(el);
							}
						}

						if (isHTML && !el.closed) {
							end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
						} else {
							end++;
						}
				}
			} catch (e) {
				if (e instanceof ParseError) {
					throw e;
				} else if (e instanceof DOMException) {
					throw new ParseError(e.name + ': ' + e.message, domBuilder.locator, e);
				}
				errorHandler.error('element parse error: ' + e);
				end = -1;
			}
			if (end > start) {
				start = end;
			} else {
				//Possible sax fallback here, risk of positional error
				appendText(Math.max(tagStart, start) + 1);
			}
		}
	}

	function copyLocator(f, t) {
		t.lineNumber = f.lineNumber;
		t.columnNumber = f.columnNumber;
		return t;
	}

	/**
	 * @returns
	 * end of the elementStartPart(end of elementEndPart for selfClosed el)
	 * @see {@link #appendElement}
	 */
	function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler, isHTML) {
		/**
		 * @param {string} qname
		 * @param {string} value
		 * @param {number} startIndex
		 */
		function addAttribute(qname, value, startIndex) {
			if (hasOwn(el.attributeNames, qname)) {
				return errorHandler.fatalError('Attribute ' + qname + ' redefined');
			}
			if (!isHTML && value.indexOf('<') >= 0) {
				return errorHandler.fatalError("Unescaped '<' not allowed in attributes values");
			}
			el.addValue(
				qname,
				// @see https://www.w3.org/TR/xml/#AVNormalize
				// since the xmldom sax parser does not "interpret" DTD the following is not implemented:
				// - recursive replacement of (DTD) entity references
				// - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
				value.replace(/[\t\n\r]/g, ' ').replace(ENTITY_REG, entityReplacer),
				startIndex
			);
		}

		var attrName;
		var value;
		var p = ++start;
		var s = S_TAG; //status
		while (true) {
			var c = source.charAt(p);
			switch (c) {
				case '=':
					if (s === S_ATTR) {
						//attrName
						attrName = source.slice(start, p);
						s = S_EQ;
					} else if (s === S_ATTR_SPACE) {
						s = S_EQ;
					} else {
						//fatalError: equal must after attrName or space after attrName
						throw new Error('attribute equal must after attrName'); // No known test case
					}
					break;
				case "'":
				case '"':
					if (
						s === S_EQ ||
						s === S_ATTR //|| s == S_ATTR_SPACE
					) {
						//equal
						if (s === S_ATTR) {
							errorHandler.warning('attribute value must after "="');
							attrName = source.slice(start, p);
						}
						start = p + 1;
						p = source.indexOf(c, start);
						if (p > 0) {
							value = source.slice(start, p);
							addAttribute(attrName, value, start - 1);
							s = S_ATTR_END;
						} else {
							//fatalError: no end quot match
							throw new Error("attribute value no end '" + c + "' match");
						}
					} else if (s == S_ATTR_NOQUOT_VALUE) {
						value = source.slice(start, p);
						addAttribute(attrName, value, start);
						errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
						start = p + 1;
						s = S_ATTR_END;
					} else {
						//fatalError: no equal before
						throw new Error('attribute value must after "="'); // No known test case
					}
					break;
				case '/':
					switch (s) {
						case S_TAG:
							el.setTagName(source.slice(start, p));
						case S_ATTR_END:
						case S_TAG_SPACE:
						case S_TAG_CLOSE:
							s = S_TAG_CLOSE;
							el.closed = true;
						case S_ATTR_NOQUOT_VALUE:
						case S_ATTR:
							break;
						case S_ATTR_SPACE:
							el.closed = true;
							break;
						//case S_EQ:
						default:
							throw new Error("attribute invalid close char('/')"); // No known test case
					}
					break;
				case '': //end document
					errorHandler.error('unexpected end of input');
					if (s == S_TAG) {
						el.setTagName(source.slice(start, p));
					}
					return p;
				case '>':
					switch (s) {
						case S_TAG:
							el.setTagName(source.slice(start, p));
						case S_ATTR_END:
						case S_TAG_SPACE:
						case S_TAG_CLOSE:
							break; //normal
						case S_ATTR_NOQUOT_VALUE: //Compatible state
						case S_ATTR:
							value = source.slice(start, p);
							if (value.slice(-1) === '/') {
								el.closed = true;
								value = value.slice(0, -1);
							}
						case S_ATTR_SPACE:
							if (s === S_ATTR_SPACE) {
								value = attrName;
							}
							if (s == S_ATTR_NOQUOT_VALUE) {
								errorHandler.warning('attribute "' + value + '" missed quot(")!');
								addAttribute(attrName, value, start);
							} else {
								if (!isHTML) {
									errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
								}
								addAttribute(value, value, start);
							}
							break;
						case S_EQ:
							if (!isHTML) {
								return errorHandler.fatalError('AttValue: \' or " expected');
							}
					}
					return p;
				/*xml space '\x20' | #x9 | #xD | #xA; */
				case '\u0080':
					c = ' ';
				default:
					if (c <= ' ') {
						//space
						switch (s) {
							case S_TAG:
								el.setTagName(source.slice(start, p)); //tagName
								s = S_TAG_SPACE;
								break;
							case S_ATTR:
								attrName = source.slice(start, p);
								s = S_ATTR_SPACE;
								break;
							case S_ATTR_NOQUOT_VALUE:
								var value = source.slice(start, p);
								errorHandler.warning('attribute "' + value + '" missed quot(")!!');
								addAttribute(attrName, value, start);
							case S_ATTR_END:
								s = S_TAG_SPACE;
								break;
							//case S_TAG_SPACE:
							//case S_EQ:
							//case S_ATTR_SPACE:
							//	void();break;
							//case S_TAG_CLOSE:
							//ignore warning
						}
					} else {
						//not space
						//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
						//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
						switch (s) {
							//case S_TAG:void();break;
							//case S_ATTR:void();break;
							//case S_ATTR_NOQUOT_VALUE:void();break;
							case S_ATTR_SPACE:
								if (!isHTML) {
									errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
								}
								addAttribute(attrName, attrName, start);
								start = p;
								s = S_ATTR;
								break;
							case S_ATTR_END:
								errorHandler.warning('attribute space is required"' + attrName + '"!!');
							case S_TAG_SPACE:
								s = S_ATTR;
								start = p;
								break;
							case S_EQ:
								s = S_ATTR_NOQUOT_VALUE;
								start = p;
								break;
							case S_TAG_CLOSE:
								throw new Error("elements closed character '/' and '>' must be connected to");
						}
					}
			} //end outer switch
			p++;
		}
	}

	/**
	 * @returns
	 * `true` if a new namespace has been defined.
	 */
	function appendElement(el, domBuilder, currentNSMap) {
		var tagName = el.tagName;
		var localNSMap = null;
		var i = el.length;
		while (i--) {
			var a = el[i];
			var qName = a.qName;
			var value = a.value;
			var nsp = qName.indexOf(':');
			if (nsp > 0) {
				var prefix = (a.prefix = qName.slice(0, nsp));
				var localName = qName.slice(nsp + 1);
				var nsPrefix = prefix === 'xmlns' && localName;
			} else {
				localName = qName;
				prefix = null;
				nsPrefix = qName === 'xmlns' && '';
			}
			//can not set prefix,because prefix !== ''
			a.localName = localName;
			//prefix == null for no ns prefix attribute
			if (nsPrefix !== false) {
				//hack!!
				if (localNSMap == null) {
					localNSMap = Object.create(null);
					_copy(currentNSMap, (currentNSMap = Object.create(null)));
				}
				currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
				a.uri = NAMESPACE.XMLNS;
				domBuilder.startPrefixMapping(nsPrefix, value);
			}
		}
		var i = el.length;
		while (i--) {
			a = el[i];
			if (a.prefix) {
				//no prefix attribute has no namespace
				if (a.prefix === 'xml') {
					a.uri = NAMESPACE.XML;
				}
				if (a.prefix !== 'xmlns') {
					a.uri = currentNSMap[a.prefix];
				}
			}
		}
		var nsp = tagName.indexOf(':');
		if (nsp > 0) {
			prefix = el.prefix = tagName.slice(0, nsp);
			localName = el.localName = tagName.slice(nsp + 1);
		} else {
			prefix = null; //important!!
			localName = el.localName = tagName;
		}
		//no prefix element has default namespace
		var ns = (el.uri = currentNSMap[prefix || '']);
		domBuilder.startElement(ns, localName, tagName, el);
		//endPrefixMapping and startPrefixMapping have not any help for dom builder
		//localNSMap = null
		if (el.closed) {
			domBuilder.endElement(ns, localName, tagName);
			if (localNSMap) {
				for (prefix in localNSMap) {
					if (hasOwn(localNSMap, prefix)) {
						domBuilder.endPrefixMapping(prefix);
					}
				}
			}
		} else {
			el.currentNSMap = currentNSMap;
			el.localNSMap = localNSMap;
			//parseStack.push(el);
			return true;
		}
	}

	function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
		// https://html.spec.whatwg.org/#raw-text-elements
		// https://html.spec.whatwg.org/#escapable-raw-text-elements
		// https://html.spec.whatwg.org/#cdata-rcdata-restrictions:raw-text-elements
		// TODO: https://html.spec.whatwg.org/#cdata-rcdata-restrictions
		var isEscapableRaw = isHTMLEscapableRawTextElement(tagName);
		if (isEscapableRaw || isHTMLRawTextElement(tagName)) {
			var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
			var text = source.substring(elStartEnd + 1, elEndStart);

			if (isEscapableRaw) {
				text = text.replace(ENTITY_REG, entityReplacer);
			}
			domBuilder.characters(text, 0, text.length);
			return elEndStart;
		}
		return elStartEnd + 1;
	}

	function _copy(source, target) {
		for (var n in source) {
			if (hasOwn(source, n)) {
				target[n] = source[n];
			}
		}
	}

	/**
	 * @typedef ParseUtils
	 * @property {function(relativeIndex: number?): string | undefined} char
	 * Provides look ahead access to a singe character relative to the current index.
	 * @property {function(): number} getIndex
	 * Provides read-only access to the current index.
	 * @property {function(reg: RegExp): string | null} getMatch
	 * Applies the provided regular expression enforcing that it starts at the current index and
	 * returns the complete matching string,
	 * and moves the current index by the length of the matching string.
	 * @property {function(): string} getSource
	 * Provides read-only access to the complete source.
	 * @property {function(places: number?): void} skip
	 * moves the current index by places (defaults to 1)
	 * @property {function(): number} skipBlanks
	 * Moves the current index by the amount of white space that directly follows the current index
	 * and returns the amount of whitespace chars skipped (0..n),
	 * or -1 if the end of the source was reached.
	 * @property {function(): string} substringFromIndex
	 * creates a substring from the current index to the end of `source`
	 * @property {function(compareWith: string): boolean} substringStartsWith
	 * Checks if source contains `compareWith`,
	 * starting from the current index.
	 * @see {@link parseUtils}
	 */

	/**
	 * A temporary scope for parsing and look ahead operations in `source`,
	 * starting from index `start`.
	 *
	 * Some operations move the current index by a number of positions,
	 * after which `getIndex` returns the new index.
	 *
	 * @param {string} source
	 * @param {number} start
	 * @returns {ParseUtils}
	 */
	function parseUtils(source, start) {
		var index = start;

		function char(n) {
			n = n || 0;
			return source.charAt(index + n);
		}

		function skip(n) {
			n = n || 1;
			index += n;
		}

		function skipBlanks() {
			var blanks = 0;
			while (index < source.length) {
				var c = char();
				if (c !== ' ' && c !== '\n' && c !== '\t' && c !== '\r') {
					return blanks;
				}
				blanks++;
				skip();
			}
			return -1;
		}
		function substringFromIndex() {
			return source.substring(index);
		}
		function substringStartsWith(text) {
			return source.substring(index, index + text.length) === text;
		}

		function getMatch(args) {
			var expr = g.reg('^', args);
			var match = expr.exec(substringFromIndex());
			if (match) {
				skip(match[0].length);
				return match[0];
			}
			return null;
		}
		return {
			char: char,
			getIndex: function () {
				return index;
			},
			getMatch: getMatch,
			getSource: function () {
				return source;
			},
			skip: skip,
			skipBlanks: skipBlanks,
			substringFromIndex: substringFromIndex,
			substringStartsWith: substringStartsWith,
		};
	}

	/**
	 * @param {ParseUtils} p
	 * @param {DOMHandler} errorHandler
	 * @returns {string}
	 */
	function parseDoctypeInternalSubset(p, errorHandler) {
		/**
		 * @param {ParseUtils} p
		 * @param {DOMHandler} errorHandler
		 * @returns {string}
		 */
		function parsePI(p, errorHandler) {
			var match = g.PI.exec(p.substringFromIndex());
			if (!match) {
				return errorHandler.fatalError('processing instruction is not well-formed at position ' + p.getIndex());
			}
			if (match[1].toLowerCase() === 'xml') {
				return errorHandler.fatalError(
					'xml declaration is only allowed at the start of the document, but found at position ' + p.getIndex()
				);
			}
			p.skip(match[0].length);
			return match[0];
		}
		// Parse internal subset
		var source = p.getSource();
		if (p.char() === '[') {
			p.skip(1);
			var intSubsetStart = p.getIndex();
			while (p.getIndex() < source.length) {
				p.skipBlanks();
				if (p.char() === ']') {
					var internalSubset = source.substring(intSubsetStart, p.getIndex());
					p.skip(1);
					return internalSubset;
				}
				var current = null;
				// Only in external subset
				// if (char() === '<' && char(1) === '!' && char(2) === '[') {
				// 	parseConditionalSections(p, errorHandler);
				// } else
				if (p.char() === '<' && p.char(1) === '!') {
					switch (p.char(2)) {
						case 'E': // ELEMENT | ENTITY
							if (p.char(3) === 'L') {
								current = p.getMatch(g.elementdecl);
							} else if (p.char(3) === 'N') {
								current = p.getMatch(g.EntityDecl);
							}
							break;
						case 'A': // ATTRIBUTE
							current = p.getMatch(g.AttlistDecl);
							break;
						case 'N': // NOTATION
							current = p.getMatch(g.NotationDecl);
							break;
						case '-': // COMMENT
							current = p.getMatch(g.Comment);
							break;
					}
				} else if (p.char() === '<' && p.char(1) === '?') {
					current = parsePI(p, errorHandler);
				} else if (p.char() === '%') {
					current = p.getMatch(g.PEReference);
				} else {
					return errorHandler.fatalError('Error detected in Markup declaration');
				}
				if (!current) {
					return errorHandler.fatalError('Error in internal subset at position ' + p.getIndex());
				}
			}
			return errorHandler.fatalError('doctype internal subset is not well-formed, missing ]');
		}
	}

	/**
	 * Called when the parser encounters an element starting with '<!'.
	 *
	 * @param {string} source
	 * The xml.
	 * @param {number} start
	 * the start index of the '<!'
	 * @param {DOMHandler} domBuilder
	 * @param {DOMHandler} errorHandler
	 * @param {boolean} isHTML
	 * @returns {number | never}
	 * The end index of the element.
	 * @throws {ParseError}
	 * In case the element is not well-formed.
	 */
	function parseDoctypeCommentOrCData(source, start, domBuilder, errorHandler, isHTML) {
		var p = parseUtils(source, start);

		switch (p.char(2)) {
			case '-':
				// should be a comment
				var comment = p.getMatch(g.Comment);
				if (comment) {
					domBuilder.comment(comment, g.COMMENT_START.length, comment.length - g.COMMENT_START.length - g.COMMENT_END.length);
					return p.getIndex();
				} else {
					return errorHandler.fatalError('comment is not well-formed at position ' + p.getIndex());
				}
			case '[':
				// should be CDATA
				var cdata = p.getMatch(g.CDSect);
				if (cdata) {
					if (!isHTML && !domBuilder.currentElement) {
						return errorHandler.fatalError('CDATA outside of element');
					}
					domBuilder.startCDATA();
					domBuilder.characters(cdata, g.CDATA_START.length, cdata.length - g.CDATA_START.length - g.CDATA_END.length);
					domBuilder.endCDATA();
					return p.getIndex();
				} else {
					return errorHandler.fatalError('Invalid CDATA starting at position ' + start);
				}
			case 'D': {
				// should be DOCTYPE
				if (domBuilder.doc && domBuilder.doc.documentElement) {
					return errorHandler.fatalError('Doctype not allowed inside or after documentElement at position ' + p.getIndex());
				}
				if (!p.substringStartsWith(g.DOCTYPE_DECL_START)) {
					return errorHandler.fatalError('Expected ' + g.DOCTYPE_DECL_START + ' at position ' + p.getIndex());
				}
				p.skip(g.DOCTYPE_DECL_START.length);
				if (p.skipBlanks() < 1) {
					return errorHandler.fatalError('Expected whitespace after ' + g.DOCTYPE_DECL_START + ' at position ' + p.getIndex());
				}

				var doctype = {
					name: undefined,
					publicId: undefined,
					systemId: undefined,
					internalSubset: undefined,
				};
				// Parse the DOCTYPE name
				doctype.name = p.getMatch(g.Name);
				if (!doctype.name)
					return errorHandler.fatalError('doctype name missing or contains unexpected characters at position ' + p.getIndex());
				p.skipBlanks();

				// Check for ExternalID
				if (p.substringStartsWith(g.PUBLIC) || p.substringStartsWith(g.SYSTEM)) {
					var match = g.ExternalID_match.exec(p.substringFromIndex());
					if (!match) {
						return errorHandler.fatalError('doctype external id is not well-formed at position ' + p.getIndex());
					}
					if (match.groups.SystemLiteralOnly !== undefined) {
						doctype.systemId = match.groups.SystemLiteralOnly;
					} else {
						doctype.systemId = match.groups.SystemLiteral;
						doctype.publicId = match.groups.PubidLiteral;
					}
					p.skip(match[0].length);
				}

				p.skipBlanks();
				doctype.internalSubset = parseDoctypeInternalSubset(p, errorHandler);
				p.skipBlanks();
				if (p.char() !== '>') {
					return errorHandler.fatalError('doctype not terminated with > at position ' + p.getIndex());
				}
				p.skip(1);
				domBuilder.startDTD(doctype.name, doctype.publicId, doctype.systemId, doctype.internalSubset);
				domBuilder.endDTD();
				return p.getIndex();
			}
			default:
				return errorHandler.fatalError('Not well-formed XML starting with "<!" at position ' + start);
		}
	}

	function parseProcessingInstruction(source, start, domBuilder, errorHandler) {
		var match = source.substring(start).match(g.PI);
		if (!match) {
			return errorHandler.fatalError('Invalid processing instruction starting at position ' + start);
		}
		if (match[1].toLowerCase() === 'xml') {
			if (start > 0) {
				return errorHandler.fatalError(
					'processing instruction at position ' + start + ' is an xml declaration which is only at the start of the document'
				);
			}
			if (!g.XMLDecl.test(source.substring(start))) {
				return errorHandler.fatalError('xml declaration is not well-formed');
			}
		}
		domBuilder.processingInstruction(match[1], match[2]);
		return start + match[0].length;
	}

	function ElementAttributes() {
		this.attributeNames = Object.create(null);
	}

	ElementAttributes.prototype = {
		setTagName: function (tagName) {
			if (!g.QName_exact.test(tagName)) {
				throw new Error('invalid tagName:' + tagName);
			}
			this.tagName = tagName;
		},
		addValue: function (qName, value, offset) {
			if (!g.QName_exact.test(qName)) {
				throw new Error('invalid attribute:' + qName);
			}
			this.attributeNames[qName] = this.length;
			this[this.length++] = { qName: qName, value: value, offset: offset };
		},
		length: 0,
		getLocalName: function (i) {
			return this[i].localName;
		},
		getLocator: function (i) {
			return this[i].locator;
		},
		getQName: function (i) {
			return this[i].qName;
		},
		getURI: function (i) {
			return this[i].uri;
		},
		getValue: function (i) {
			return this[i].value;
		},
		//	,getIndex:function(uri, localName)){
		//		if(localName){
		//
		//		}else{
		//			var qName = uri
		//		}
		//	},
		//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
		//	getType:function(uri,localName){}
		//	getType:function(i){},
	};

	sax.XMLReader = XMLReader;
	sax.parseUtils = parseUtils;
	sax.parseDoctypeCommentOrCData = parseDoctypeCommentOrCData;
	return sax;
}

var hasRequiredDomParser;

function requireDomParser () {
	if (hasRequiredDomParser) return domParser;
	hasRequiredDomParser = 1;

	var conventions = requireConventions();
	var dom = requireDom();
	var errors = requireErrors();
	var entities = requireEntities();
	var sax = requireSax();

	var DOMImplementation = dom.DOMImplementation;

	var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
	var isHTMLMimeType = conventions.isHTMLMimeType;
	var isValidMimeType = conventions.isValidMimeType;
	var MIME_TYPE = conventions.MIME_TYPE;
	var NAMESPACE = conventions.NAMESPACE;
	var ParseError = errors.ParseError;

	var XMLReader = sax.XMLReader;

	/**
	 * Normalizes line ending according to <https://www.w3.org/TR/xml11/#sec-line-ends>:
	 *
	 * > XML parsed entities are often stored in computer files which,
	 * > for editing convenience, are organized into lines.
	 * > These lines are typically separated by some combination
	 * > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
	 * >
	 * > To simplify the tasks of applications, the XML processor must behave
	 * > as if it normalized all line breaks in external parsed entities (including the document entity)
	 * > on input, before parsing, by translating all of the following to a single #xA character:
	 * >
	 * > 1. the two-character sequence #xD #xA,
	 * > 2. the two-character sequence #xD #x85,
	 * > 3. the single character #x85,
	 * > 4. the single character #x2028,
	 * > 5. any #xD character that is not immediately followed by #xA or #x85.
	 *
	 * @param {string} input
	 * @returns {string}
	 * @prettierignore
	 */
	function normalizeLineEndings(input) {
		return input.replace(/\r[\n\u0085]/g, '\n').replace(/[\r\u0085\u2028]/g, '\n');
	}

	/**
	 * @typedef Locator
	 * @property {number} [columnNumber]
	 * @property {number} [lineNumber]
	 */

	/**
	 * @typedef DOMParserOptions
	 * @property {typeof assign} [assign]
	 * The method to use instead of `conventions.assign`, which is used to copy values from
	 * `options` before they are used for parsing.
	 * @property {typeof DOMHandler} [domHandler]
	 * For internal testing: The class for creating an instance for handling events from the SAX
	 * parser.
	 * *****Warning: By configuring a faulty implementation, the specified behavior can completely
	 * be broken.*****.
	 * @property {Function} [errorHandler]
	 * DEPRECATED! use `onError` instead.
	 * @property {function(level:ErrorLevel, message:string, context: DOMHandler):void}
	 * [onError]
	 * A function that is invoked for every error that occurs during parsing.
	 *
	 * If it is not provided, all errors are reported to `console.error`
	 * and only `fatalError`s are thrown as a `ParseError`,
	 * which prevents any further processing.
	 * If the provided method throws, a `ParserError` is thrown,
	 * which prevents any further processing.
	 *
	 * Be aware that many `warning`s are considered an error that prevents further processing in
	 * most implementations.
	 * @property {boolean} [locator=true]
	 * Configures if the nodes created during parsing will have a `lineNumber` and a `columnNumber`
	 * attribute describing their location in the XML string.
	 * Default is true.
	 * @property {(string) => string} [normalizeLineEndings]
	 * used to replace line endings before parsing, defaults to `normalizeLineEndings`
	 * @property {Object} [xmlns]
	 * The XML namespaces that should be assumed when parsing.
	 * The default namespace can be provided by the key that is the empty string.
	 * When the `mimeType` for HTML, XHTML or SVG are passed to `parseFromString`,
	 * the default namespace that will be used,
	 * will be overridden according to the specification.
	 * @see {@link normalizeLineEndings}
	 */

	/**
	 * The DOMParser interface provides the ability to parse XML or HTML source code from a string
	 * into a DOM `Document`.
	 *
	 * ***xmldom is different from the spec in that it allows an `options` parameter,
	 * to control the behavior***.
	 *
	 * @class
	 * @param {DOMParserOptions} [options]
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
	 */
	function DOMParser(options) {
		options = options || { locator: true };

		/**
		 * The method to use instead of `conventions.assign`, which is used to copy values from
		 * `options`
		 * before they are used for parsing.
		 *
		 * @type {conventions.assign}
		 * @private
		 * @see {@link conventions.assign}
		 * @readonly
		 */
		this.assign = options.assign || conventions.assign;

		/**
		 * For internal testing: The class for creating an instance for handling events from the SAX
		 * parser.
		 * *****Warning: By configuring a faulty implementation, the specified behavior can completely
		 * be broken*****.
		 *
		 * @type {typeof DOMHandler}
		 * @private
		 * @readonly
		 */
		this.domHandler = options.domHandler || DOMHandler;

		/**
		 * A function that is invoked for every error that occurs during parsing.
		 *
		 * If it is not provided, all errors are reported to `console.error`
		 * and only `fatalError`s are thrown as a `ParseError`,
		 * which prevents any further processing.
		 * If the provided method throws, a `ParserError` is thrown,
		 * which prevents any further processing.
		 *
		 * Be aware that many `warning`s are considered an error that prevents further processing in
		 * most implementations.
		 *
		 * @type {function(level:ErrorLevel, message:string, context: DOMHandler):void}
		 * @see {@link onErrorStopParsing}
		 * @see {@link onWarningStopParsing}
		 */
		this.onError = options.onError || options.errorHandler;
		if (options.errorHandler && typeof options.errorHandler !== 'function') {
			throw new TypeError('errorHandler object is no longer supported, switch to onError!');
		} else if (options.errorHandler) {
			options.errorHandler('warning', 'The `errorHandler` option has been deprecated, use `onError` instead!', this);
		}

		/**
		 * used to replace line endings before parsing, defaults to `normalizeLineEndings`
		 *
		 * @type {(string) => string}
		 * @readonly
		 */
		this.normalizeLineEndings = options.normalizeLineEndings || normalizeLineEndings;

		/**
		 * Configures if the nodes created during parsing will have a `lineNumber` and a
		 * `columnNumber`
		 * attribute describing their location in the XML string.
		 * Default is true.
		 *
		 * @type {boolean}
		 * @readonly
		 */
		this.locator = !!options.locator;

		/**
		 * The default namespace can be provided by the key that is the empty string.
		 * When the `mimeType` for HTML, XHTML or SVG are passed to `parseFromString`,
		 * the default namespace that will be used,
		 * will be overridden according to the specification.
		 *
		 * @type {Readonly<Object>}
		 * @readonly
		 */
		this.xmlns = this.assign(Object.create(null), options.xmlns);
	}

	/**
	 * Parses `source` using the options in the way configured by the `DOMParserOptions` of `this`
	 * `DOMParser`. If `mimeType` is `text/html` an HTML `Document` is created,
	 * otherwise an XML `Document` is created.
	 *
	 * __It behaves different from the description in the living standard__:
	 * - Uses the `options` passed to the `DOMParser` constructor to modify the behavior.
	 * - Any unexpected input is reported to `onError` with either a `warning`,
	 * `error` or `fatalError` level.
	 * - Any `fatalError` throws a `ParseError` which prevents further processing.
	 * - Any error thrown by `onError` is converted to a `ParseError` which prevents further
	 * processing - If no `Document` was created during parsing it is reported as a `fatalError`.
	 * *****Warning: By configuring a faulty DOMHandler implementation,
	 * the specified behavior can completely be broken*****.
	 *
	 * @param {string} source
	 * The XML mime type only allows string input!
	 * @param {string} [mimeType='application/xml']
	 * the mimeType or contentType of the document to be created determines the `type` of document
	 * created (XML or HTML)
	 * @returns {Document}
	 * The `Document` node.
	 * @throws {ParseError}
	 * for any `fatalError` or anything that is thrown by `onError`
	 * @throws {TypeError}
	 * for any invalid `mimeType`
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
	 * @see https://html.spec.whatwg.org/#dom-domparser-parsefromstring-dev
	 */
	DOMParser.prototype.parseFromString = function (source, mimeType) {
		if (!isValidMimeType(mimeType)) {
			throw new TypeError('DOMParser.parseFromString: the provided mimeType "' + mimeType + '" is not valid.');
		}
		var defaultNSMap = this.assign(Object.create(null), this.xmlns);
		var entityMap = entities.XML_ENTITIES;
		var defaultNamespace = defaultNSMap[''] || null;
		if (hasDefaultHTMLNamespace(mimeType)) {
			entityMap = entities.HTML_ENTITIES;
			defaultNamespace = NAMESPACE.HTML;
		} else if (mimeType === MIME_TYPE.XML_SVG_IMAGE) {
			defaultNamespace = NAMESPACE.SVG;
		}
		defaultNSMap[''] = defaultNamespace;
		defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;

		var domBuilder = new this.domHandler({
			mimeType: mimeType,
			defaultNamespace: defaultNamespace,
			onError: this.onError,
		});
		var locator = this.locator ? {} : undefined;
		if (this.locator) {
			domBuilder.setDocumentLocator(locator);
		}

		var sax = new XMLReader();
		sax.errorHandler = domBuilder;
		sax.domBuilder = domBuilder;
		var isXml = !conventions.isHTMLMimeType(mimeType);
		if (isXml && typeof source !== 'string') {
			sax.errorHandler.fatalError('source is not a string');
		}
		sax.parse(this.normalizeLineEndings(String(source)), defaultNSMap, entityMap);
		if (!domBuilder.doc.documentElement) {
			sax.errorHandler.fatalError('missing root element');
		}
		return domBuilder.doc;
	};

	/**
	 * @typedef DOMHandlerOptions
	 * @property {string} [mimeType=MIME_TYPE.XML_APPLICATION]
	 * @property {string | null} [defaultNamespace=null]
	 */
	/**
	 * The class that is used to handle events from the SAX parser to create the related DOM
	 * elements.
	 *
	 * Some methods are only implemented as an empty function,
	 * since they are (at least currently) not relevant for xmldom.
	 *
	 * @class
	 * @param {DOMHandlerOptions} [options]
	 * @see http://www.saxproject.org/apidoc/org/xml/sax/ext/DefaultHandler2.html
	 */
	function DOMHandler(options) {
		var opt = options || {};
		/**
		 * The mime type is used to determine if the DOM handler will create an XML or HTML document.
		 * Only if it is set to `text/html` it will create an HTML document.
		 * It defaults to MIME_TYPE.XML_APPLICATION.
		 *
		 * @type {string}
		 * @see {@link MIME_TYPE}
		 * @readonly
		 */
		this.mimeType = opt.mimeType || MIME_TYPE.XML_APPLICATION;

		/**
		 * The namespace to use to create an XML document.
		 * For the following reasons this is required:
		 * - The SAX API for `startDocument` doesn't offer any way to pass a namespace,
		 * since at that point there is no way for the parser to know what the default namespace from
		 * the document will be.
		 * - When creating using `DOMImplementation.createDocument` it is required to pass a
		 * namespace,
		 * to determine the correct `Document.contentType`, which should match `this.mimeType`.
		 * - When parsing an XML document with the `application/xhtml+xml` mimeType,
		 * the HTML namespace needs to be the default namespace.
		 *
		 * @type {string | null}
		 * @private
		 * @readonly
		 */
		this.defaultNamespace = opt.defaultNamespace || null;

		/**
		 * @type {boolean}
		 * @private
		 */
		this.cdata = false;

		/**
		 * The last `Element` that was created by `startElement`.
		 * `endElement` sets it to the `currentElement.parentNode`.
		 *
		 * Note: The sax parser currently sets it to white space text nodes between tags.
		 *
		 * @type {Element | Node | undefined}
		 * @private
		 */
		this.currentElement = undefined;

		/**
		 * The Document that is created as part of `startDocument`,
		 * and returned by `DOMParser.parseFromString`.
		 *
		 * @type {Document | undefined}
		 * @readonly
		 */
		this.doc = undefined;

		/**
		 * The locator is stored as part of setDocumentLocator.
		 * It is controlled and mutated by the SAX parser to store the current parsing position.
		 * It is used by DOMHandler to set `columnNumber` and `lineNumber`
		 * on the DOM nodes.
		 *
		 * @type {Readonly<Locator> | undefined}
		 * @private
		 * @readonly (the
		 * sax parser currently sometimes set's it)
		 */
		this.locator = undefined;
		/**
		 * @type {function (level:ErrorLevel ,message:string, context:DOMHandler):void}
		 * @readonly
		 */
		this.onError = opt.onError;
	}

	function position(locator, node) {
		node.lineNumber = locator.lineNumber;
		node.columnNumber = locator.columnNumber;
	}

	DOMHandler.prototype = {
		/**
		 * Either creates an XML or an HTML document and stores it under `this.doc`.
		 * If it is an XML document, `this.defaultNamespace` is used to create it,
		 * and it will not contain any `childNodes`.
		 * If it is an HTML document, it will be created without any `childNodes`.
		 *
		 * @see http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
		 */
		startDocument: function () {
			var impl = new DOMImplementation();
			this.doc = isHTMLMimeType(this.mimeType) ? impl.createHTMLDocument(false) : impl.createDocument(this.defaultNamespace, '');
		},
		startElement: function (namespaceURI, localName, qName, attrs) {
			var doc = this.doc;
			var el = doc.createElementNS(namespaceURI, qName || localName);
			var len = attrs.length;
			appendElement(this, el);
			this.currentElement = el;

			this.locator && position(this.locator, el);
			for (var i = 0; i < len; i++) {
				var namespaceURI = attrs.getURI(i);
				var value = attrs.getValue(i);
				var qName = attrs.getQName(i);
				var attr = doc.createAttributeNS(namespaceURI, qName);
				this.locator && position(attrs.getLocator(i), attr);
				attr.value = attr.nodeValue = value;
				el.setAttributeNode(attr);
			}
		},
		endElement: function (namespaceURI, localName, qName) {
			this.currentElement = this.currentElement.parentNode;
		},
		startPrefixMapping: function (prefix, uri) {},
		endPrefixMapping: function (prefix) {},
		processingInstruction: function (target, data) {
			var ins = this.doc.createProcessingInstruction(target, data);
			this.locator && position(this.locator, ins);
			appendElement(this, ins);
		},
		ignorableWhitespace: function (ch, start, length) {},
		characters: function (chars, start, length) {
			chars = _toString.apply(this, arguments);
			//console.log(chars)
			if (chars) {
				if (this.cdata) {
					var charNode = this.doc.createCDATASection(chars);
				} else {
					var charNode = this.doc.createTextNode(chars);
				}
				if (this.currentElement) {
					this.currentElement.appendChild(charNode);
				} else if (/^\s*$/.test(chars)) {
					this.doc.appendChild(charNode);
					//process xml
				}
				this.locator && position(this.locator, charNode);
			}
		},
		skippedEntity: function (name) {},
		endDocument: function () {
			this.doc.normalize();
		},
		/**
		 * Stores the locator to be able to set the `columnNumber` and `lineNumber`
		 * on the created DOM nodes.
		 *
		 * @param {Locator} locator
		 */
		setDocumentLocator: function (locator) {
			if (locator) {
				locator.lineNumber = 0;
			}
			this.locator = locator;
		},
		//LexicalHandler
		comment: function (chars, start, length) {
			chars = _toString.apply(this, arguments);
			var comm = this.doc.createComment(chars);
			this.locator && position(this.locator, comm);
			appendElement(this, comm);
		},

		startCDATA: function () {
			//used in characters() methods
			this.cdata = true;
		},
		endCDATA: function () {
			this.cdata = false;
		},

		startDTD: function (name, publicId, systemId, internalSubset) {
			var impl = this.doc.implementation;
			if (impl && impl.createDocumentType) {
				var dt = impl.createDocumentType(name, publicId, systemId, internalSubset);
				this.locator && position(this.locator, dt);
				appendElement(this, dt);
				this.doc.doctype = dt;
			}
		},
		reportError: function (level, message) {
			if (typeof this.onError === 'function') {
				try {
					this.onError(level, message, this);
				} catch (e) {
					throw new ParseError('Reporting ' + level + ' "' + message + '" caused ' + e, this.locator);
				}
			} else {
				console.error('[xmldom ' + level + ']\t' + message, _locator(this.locator));
			}
		},
		/**
		 * @see http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
		 */
		warning: function (message) {
			this.reportError('warning', message);
		},
		error: function (message) {
			this.reportError('error', message);
		},
		/**
		 * This function reports a fatal error and throws a ParseError.
		 *
		 * @param {string} message
		 * - The message to be used for reporting and throwing the error.
		 * @returns {never}
		 * This function always throws an error and never returns a value.
		 * @throws {ParseError}
		 * Always throws a ParseError with the provided message.
		 */
		fatalError: function (message) {
			this.reportError('fatalError', message);
			throw new ParseError(message, this.locator);
		},
	};

	function _locator(l) {
		if (l) {
			return '\n@#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
		}
	}

	function _toString(chars, start, length) {
		if (typeof chars == 'string') {
			return chars.substr(start, length);
		} else {
			//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
			if (chars.length >= start + length || start) {
				return new java.lang.String(chars, start, length) + '';
			}
			return chars;
		}
	}

	/*
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
	 * used method of org.xml.sax.ext.LexicalHandler:
	 *  #comment(chars, start, length)
	 *  #startCDATA()
	 *  #endCDATA()
	 *  #startDTD(name, publicId, systemId)
	 *
	 *
	 * IGNORED method of org.xml.sax.ext.LexicalHandler:
	 *  #endDTD()
	 *  #startEntity(name)
	 *  #endEntity(name)
	 *
	 *
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
	 * IGNORED method of org.xml.sax.ext.DeclHandler
	 * 	#attributeDecl(eName, aName, type, mode, value)
	 *  #elementDecl(name, model)
	 *  #externalEntityDecl(name, publicId, systemId)
	 *  #internalEntityDecl(name, value)
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
	 * IGNORED method of org.xml.sax.EntityResolver2
	 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
	 *  #resolveEntity(publicId, systemId)
	 *  #getExternalSubset(name, baseURI)
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
	 * IGNORED method of org.xml.sax.DTDHandler
	 *  #notationDecl(name, publicId, systemId) {};
	 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
	 */
	'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'.replace(
		/\w+/g,
		function (key) {
			DOMHandler.prototype[key] = function () {
				return null;
			};
		}
	);

	/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
	function appendElement(handler, node) {
		if (!handler.currentElement) {
			handler.doc.appendChild(node);
		} else {
			handler.currentElement.appendChild(node);
		}
	}

	/**
	 * A method that prevents any further parsing when an `error`
	 * with level `error` is reported during parsing.
	 *
	 * @see {@link DOMParserOptions.onError}
	 * @see {@link onWarningStopParsing}
	 */
	function onErrorStopParsing(level) {
		if (level === 'error') throw 'onErrorStopParsing';
	}

	/**
	 * A method that prevents any further parsing when any `error` is reported during parsing.
	 *
	 * @see {@link DOMParserOptions.onError}
	 * @see {@link onErrorStopParsing}
	 */
	function onWarningStopParsing() {
		throw 'onWarningStopParsing';
	}

	domParser.__DOMHandler = DOMHandler;
	domParser.DOMParser = DOMParser;
	domParser.normalizeLineEndings = normalizeLineEndings;
	domParser.onErrorStopParsing = onErrorStopParsing;
	domParser.onWarningStopParsing = onWarningStopParsing;
	return domParser;
}

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;
	var conventions = requireConventions();
	lib.assign = conventions.assign;
	lib.hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
	lib.isHTMLMimeType = conventions.isHTMLMimeType;
	lib.isValidMimeType = conventions.isValidMimeType;
	lib.MIME_TYPE = conventions.MIME_TYPE;
	lib.NAMESPACE = conventions.NAMESPACE;

	var errors = requireErrors();
	lib.DOMException = errors.DOMException;
	lib.DOMExceptionName = errors.DOMExceptionName;
	lib.ExceptionCode = errors.ExceptionCode;
	lib.ParseError = errors.ParseError;

	var dom = requireDom();
	lib.Attr = dom.Attr;
	lib.CDATASection = dom.CDATASection;
	lib.CharacterData = dom.CharacterData;
	lib.Comment = dom.Comment;
	lib.Document = dom.Document;
	lib.DocumentFragment = dom.DocumentFragment;
	lib.DocumentType = dom.DocumentType;
	lib.DOMImplementation = dom.DOMImplementation;
	lib.Element = dom.Element;
	lib.Entity = dom.Entity;
	lib.EntityReference = dom.EntityReference;
	lib.LiveNodeList = dom.LiveNodeList;
	lib.NamedNodeMap = dom.NamedNodeMap;
	lib.Node = dom.Node;
	lib.NodeList = dom.NodeList;
	lib.Notation = dom.Notation;
	lib.ProcessingInstruction = dom.ProcessingInstruction;
	lib.Text = dom.Text;
	lib.XMLSerializer = dom.XMLSerializer;

	var domParser = requireDomParser();
	lib.DOMParser = domParser.DOMParser;
	lib.onErrorStopParsing = domParser.onErrorStopParsing;
	lib.onWarningStopParsing = domParser.onWarningStopParsing;
	return lib;
}

var libExports = requireLib();

function parseXML(xml) {
  const parsedXML = new libExports.DOMParser().parseFromString(xml, "text/xml");
  return parsedXML;
}

class DataGenerator {
  constructor() {
    this._randomSeed = {};
  }

  getPseudoRandomNumber(type) {
    //eslint-disable-next-line
    if (!this._randomSeed.hasOwnProperty(type)) {
      this._randomSeed[type] = 0;
    }
    this._randomSeed[type] =
      ((this._randomSeed[type] + 11) * 25214903917) % 281474976710655;
    return this._randomSeed[type] / 281474976710655;
  }

  getDateTime(string) {
    if (!string) {
      return;
    }

    return (
      "datetime'" +
      new Date(Number(string.replace("/Date(", "").replace(")/", "")))
        .toJSON()
        .substring(0, 19) +
      "'"
    );
  }

  generateValueForODataProperty(property, iIndex) {
    switch (property.type) {
      case "String": {
        let value = property.name + " " + iIndex;

        if (property.maxLength) {
          value =
            property.name.substring(
              0,
              property.maxLength - iIndex.toString().length - 1
            ) +
            " " +
            iIndex;
        }

        return value;
      }
      case "DateTime": {
        const date = new Date();
        date.setFullYear(
          2000 + Math.floor(this.getPseudoRandomNumber("DateTime") * 20)
        );
        date.setDate(Math.floor(this.getPseudoRandomNumber("DateTime") * 30));
        date.setMonth(Math.floor(this.getPseudoRandomNumber("DateTime") * 12));
        date.setMilliseconds(0);
        return "/Date(" + date.getTime() + ")/";
      }
      case "Int16":
      case "Int32":
      case "Int64":
        return Math.floor(this.getPseudoRandomNumber("Int") * 10000);
      case "Decimal":
        return (
          Math.floor(this.getPseudoRandomNumber("Decimal") * 1000000) / 100
        );
      case "Boolean":
        return this.getPseudoRandomNumber("Boolean") < 0.5;
      case "Byte":
        return Math.floor(this.getPseudoRandomNumber("Byte") * 10);
      case "Double":
        return this.getPseudoRandomNumber("Double") * 10;
      case "Single":
        return this.getPseudoRandomNumber("Single") * 1000000000;
      case "SByte":
        return Math.floor(this.getPseudoRandomNumber("SByte") * 10);
      case "Time":
        // ODataModel expects ISO8601 duration format
        return (
          "PT" +
          Math.floor(this.getPseudoRandomNumber("Time") * 23) +
          "H" +
          Math.floor(this.getPseudoRandomNumber("Time") * 59) +
          "M" +
          Math.floor(this.getPseudoRandomNumber("Time") * 59) +
          "S"
        );
      case "Guid":
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (c) {
            const r = (this.getPseudoRandomNumber("Guid") * 16) | 0,
              v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          }.bind(this)
        );
      case "Binary": {
        const nMask = Math.floor(
          -2147483648 + this.getPseudoRandomNumber("Binary") * 4294967295
        );
        let sMask = "";
        for (
          let nFlag = 0, nShifted = nMask;
          nFlag < 32;
          nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1
        );

        return sMask;
      }
      case "DateTimeOffset": {
        const date = new Date();
        date.setFullYear(
          2000 + Math.floor(this.getPseudoRandomNumber("DateTimeOffset") * 20)
        );
        date.setDate(
          Math.floor(this.getPseudoRandomNumber("DateTimeOffset") * 30)
        );
        date.setMonth(
          Math.floor(this.getPseudoRandomNumber("DateTimeOffset") * 12)
        );
        date.setMilliseconds(0);
        return "/Date(" + date.getTime() + "+0000)/";
      }
      default:
        return null;
    }
  }
}

function findEntityTypes(metdataXMLDocument) {
  const result = {};
  const entityTypes = metdataXMLDocument.getElementsByTagName("EntityType");

  for (let i = 0; i < entityTypes.length; i++) {
    const entityTypeItem = entityTypes.item(i);

    result[entityTypeItem.getAttribute("Name")] = {
      name: entityTypeItem.getAttribute("Name"),
      properties: [],
      keys: [],
    };

    const properties = entityTypeItem.getElementsByTagName("Property");

    for (let i = 0; i < properties.length; i++) {
      const oProperty = properties.item(i);
      const type = oProperty.getAttribute("Type");

      result[entityTypeItem.getAttribute("Name")].properties.push({
        schema: type.substring(0, type.lastIndexOf(".")),
        type: type.substring(type.lastIndexOf(".") + 1),
        name: oProperty.getAttribute("Name"),
        precision: oProperty.getAttribute("Precision"),
        scale: oProperty.getAttribute("Scale"),
        maxLength: oProperty.getAttribute("MaxLength")
          ? Number.parseInt(oProperty.getAttribute("MaxLength"))
          : undefined,
      });
    }

    const propertyRefs = entityTypeItem.getElementsByTagName("PropertyRef");

    for (let i = 0; i < propertyRefs.length; i++) {
      const propertyRefItem = propertyRefs.item(i);
      const propertyName = propertyRefItem.getAttribute("Name");
      result[entityTypeItem.getAttribute("Name")].keys.push(propertyName);
    }
  }

  return result;
}

function findComplexTypes(metdataXMLDocument) {
  const result = {};
  const complexTypes = metdataXMLDocument.getElementsByTagName("ComplexType");

  for (let i = 0; i < complexTypes.length; i++) {
    const complexTypeItem = complexTypes.item(i);
    result[complexTypeItem.getAttribute("Name")] = {
      name: complexTypeItem.getAttribute("Name"),
      properties: [],
    };

    const properties = complexTypeItem.getElementsByTagName("Property");

    for (let i = 0; i < properties.length; i++) {
      const propertyItem = properties.item(i);
      const type = propertyItem.getAttribute("Type");

      result[complexTypeItem.getAttribute("Name")].properties.push({
        schema: type.substring(0, type.lastIndexOf(".")),
        type: type.substring(type.lastIndexOf(".") + 1),
        name: propertyItem.getAttribute("Name"),
        precision: propertyItem.getAttribute("Precision"),
        scale: propertyItem.getAttribute("Scale"),
      });
    }
  }

  return result;
}

function findEntitySets(metdataXMLDocument) {
  const result = {};
  const principals = metdataXMLDocument.getElementsByTagName("Principal");
  const dependents = metdataXMLDocument.getElementsByTagName("Dependent");
  const entitySets = metdataXMLDocument.getElementsByTagName("EntitySet");
  const entityTypes = metdataXMLDocument.getElementsByTagName("EntityType");

  for (let i = 0; i < entitySets.length; i++) {
    const entitySet = entitySets.item(i);
    // split the namespace and the name of the entity type (namespace could have dots inside)
    const entityTypeParts = /((.*)\.)?(.*)/.exec(
      entitySet.getAttribute("EntityType")
    );

    result[entitySet.getAttribute("Name")] = {
      name: entitySet.getAttribute("Name"),
      schema: entityTypeParts[2],
      type: entityTypeParts[3],
      keys: [],
      keysType: {},
      navprops: {},
    };
  }

  // helper function to find the entity set and property reference
  // for the given role name
  const fnResolveNavProp = function (
    sRole,
    aAssociation,
    aAssociationSet,
    bFrom
  ) {
    let entitySet, multiplicity;

    for (let i = 0; i < aAssociationSet.length; i++) {
      const element = aAssociationSet[i];

      for (let j = 0; j < element.childNodes.length; j++) {
        const childElement = element.childNodes[j];

        if (
          childElement.tagName === "End" &&
          childElement.getAttribute("Role") === sRole
        ) {
          entitySet = childElement.getAttribute("EntitySet");
          break;
        }
      }
    }

    for (let i = 0; i < aAssociation.length; i++) {
      const element = aAssociation[i];

      for (let j = 0; j < element.childNodes.length; j++) {
        const childElement = element.childNodes[j];

        if (
          childElement.tagName === "End" &&
          childElement.getAttribute("Role") === sRole
        ) {
          multiplicity = childElement.getAttribute("Multiplicity");
          break;
        }
      }
    }

    const foundPropertyRefs = [];
    const constraints = [];

    for (let i = 0; i < aAssociation.length; i++) {
      const association = aAssociation[i];

      for (let j = 0; j < association.childNodes.length; j++) {
        if (association.childNodes[j].tagName === "ReferentialConstraint") {
          constraints.push(association.childNodes[j]);
        }
      }
    }

    const foundConstraints = [];

    for (let i = 0; i < constraints.length; i++) {
      const oConstraint = constraints[i];
      const children = oConstraint.childNodes;

      for (let j = 0; j < children.length; j++) {
        const child = children[j];

        if (child.getAttribute && child.getAttribute("Role") === sRole) {
          foundConstraints.push(child);
        }
      }
    }

    if (foundConstraints && foundConstraints.length > 0) {
      const propertyRefs = foundConstraints[0].childNodes;

      for (let i = 0; i < propertyRefs.length; i++) {
        const propertyRef = propertyRefs[i];

        if (propertyRef.tagName === "PropertyRef") {
          foundPropertyRefs.push(propertyRef.getAttribute("Name"));
        }
      }
    } else {
      const principalDeps = bFrom ? principals : dependents;

      for (let i = 0; i < principalDeps.length; i++) {
        const oPrinDep = principalDeps.item(i);

        if (sRole === oPrinDep.getAttribute("Role")) {
          const children = oPrinDep.childNodes;

          for (let k = 0; k < children.length; k++) {
            const propertyRef = children[k];

            if (propertyRef.tagName === "PropertyRef") {
              foundPropertyRefs.push(propertyRef.getAttribute("Name"));
              break;
            }
          }
        }
      }
    }

    return {
      role: sRole,
      entitySet: entitySet,
      propRef: foundPropertyRefs,
      multiplicity: multiplicity,
    };
  };

  // find the keys and the navigation properties of the entity types
  for (const entitySetName in result) {
    const entitySet = result[entitySetName];
    // find the keys
    let foundEntityType;

    for (let t = 0; t < entityTypes.length; t++) {
      const entityType = entityTypes.item(t);

      if (entityType.getAttribute("Name") === entitySet.type) {
        foundEntityType = entityType;
        break;
      }
    }

    const keys = foundEntityType.getElementsByTagName("PropertyRef");

    for (let i = 0; i < keys.length; i++) {
      const propertyRefItem = keys.item(i);
      const keyName = propertyRefItem.getAttribute("Name");
      entitySet.keys.push(keyName);
      const properties = foundEntityType.getElementsByTagName("Property");

      for (let m = 0; m < properties.length; m++) {
        const propertyItem = properties.item(m);

        if (propertyItem.getAttribute("Name") === keyName) {
          entitySet.keysType[keyName] = propertyItem.getAttribute("Type");
        }
      }
    }

    // resolve the navigation properties
    let navigationProperties;

    for (let i = 0; i < entityTypes.length; i++) {
      const entityTypeItem = entityTypes.item(i);

      if (entityTypeItem.getAttribute("Name") === entitySet.type) {
        navigationProperties =
          entityTypeItem.getElementsByTagName("NavigationProperty");
      }
    }

    for (let w = 0; w < navigationProperties.length; w++) {
      const navigationProperty = navigationProperties.item(w);
      const relationshipParts = navigationProperty
        .getAttribute("Relationship")
        .split(".");
      const associationsSet =
        metdataXMLDocument.getElementsByTagName("AssociationSet");
      const foundAssociationSet = [];

      for (let f = 0; f < associationsSet.length; f++) {
        const associationSetItem = associationsSet.item(f);

        if (
          associationSetItem.getAttribute("Association") ===
          relationshipParts.join(".")
        ) {
          foundAssociationSet.push(associationSetItem);
        }
      }

      const relationshipName = relationshipParts.pop();
      const foundAssociations = [];
      const associations =
        metdataXMLDocument.getElementsByTagName("Association");

      for (let k = 0; k < associations.length; k++) {
        const associationItem = associations.item(k);

        if (associationItem.getAttribute("Name") === relationshipName) {
          foundAssociations.push(associationItem);
        }
      }

      entitySet.navprops[navigationProperty.getAttribute("Name")] = {
        name: navigationProperty.getAttribute("Name"),
        from: fnResolveNavProp(
          navigationProperty.getAttribute("FromRole"),
          foundAssociations,
          foundAssociationSet,
          true
        ),
        to: fnResolveNavProp(
          navigationProperty.getAttribute("ToRole"),
          foundAssociations,
          foundAssociationSet,
          false
        ),
      };
    }
  }

  return result;
}

//! Copyright (c) 2021 Jacek Woźniczak


/**
 * OData Mock Data Generator
 *
 */
class ODataMockGenerator {
  /**
   * @constructor
   * @param {string} metadata OData metadata XML
   * @param {Object} [options={}] Generation options and rules
   * @param {number} [options.defaultLengthOfEntitySets=30] Number of entities to generate for each entity set
   * @param {string} [options.mockDataRootURI=""] Root URI which prefixes __metadata.uri property in the generated entities
   * @param {Object} [options.rules={}] Additional rules
   * @param {string[]} [options.rules.skipMockGeneration=[]] Do not generate data for the given entity sets
   * @param {string[]} [options.rules.distinctValues=[]] Generate only distinct entries (based on the key properties) for the given entity sets
   * @param {Object} [options.rules.predefined={}] Predefined values for the given entities, see README
   * @param {Object} [options.rules.variables={}] Variables to use in "predefined" rules, see README
   * @param {Object} [options.rules.faker={}] Faker.js methods used to generate data for given properties, see README
   * @param {Object} [options.rules.lengthOf={}] Number of entities to generate for given entity sets, see README
   */
  constructor(metadata, options = {}) {
    if (!metadata) {
      throw new Error("metadata not provided");
    }

    if (!options.rules) {
      options.rules = {};
    }

    this._predefinedValuesConfig = options.rules.predefined || {};
    this._skipMockGeneration = options.rules.skipMockGeneration || [];
    this._distinctValues = options.rules.distinctValues || [];
    this._variables = options.rules.variables || {};
    this._fakerConfig = options.rules.faker || {};
    this._customNumberOfEntities = options.rules.lengthOf || {};
    this._numberOfEntities = options.defaultLengthOfEntitySets || 30;
    this._rootUri = options.mockDataRootURI || "";

    if (this._rootUri.substr(this._rootUri.length - 1) !== "/") {
      this._rootUri = `${this._rootUri}/`;
    }

    this._predefinedChosenValues = {};
    this._dataGenerator = new DataGenerator();

    this._relationships = options.rules.relationships || {};
    this._includeTypeAttribute =
      options.includeTypeAttribute !== undefined
        ? options.includeTypeAttribute
        : true;

    try {
      this._metdataXMLDocument = parseXML(metadata);
    } catch (error) {
      throw new Error(
        "Metadata XML parsing error - is the document correct? --> " + error
      );
    }
  }

  /**
   *
   * Generates relationships between entities mentioned in the configuration
   *
   * @param {Object} oMockData incoming data
   */
  _applyRelationships(oMockData) {
    for (const [entity, relations] of Object.entries(this._relationships)) {
      if (oMockData[entity]) {
        oMockData[entity].forEach((entityData) => {
          for (const [property, relation] of Object.entries(relations)) {
            const relatedData = oMockData[relation.reference];
            if (relatedData) {
              const relatedEntity =
                relatedData[Math.floor(Math.random() * relatedData.length)];
              entityData[property] = relatedEntity[relation.key];
            }
          }
        });
      }
    }
  }

  /**
   * Generates mock data based on the metadata and options passed to the constructor
   *
   * @returns {Object} Generated data in form { EntitySet1: [{ ..properties.. }], EntitySet2: [{ .. properties.. }] }
   */
  createMockData() {
    const entitySets = findEntitySets(this._metdataXMLDocument);
    const entitySetNames = Object.keys(entitySets);

    //exclude adjustments
    this._skipMockGeneration.forEach((element) => {
      if (
        entitySetNames.find((name) => {
          return name === element;
        })
      ) {
        delete entitySets[element];
      }
    });

    this._mEntityTypes = findEntityTypes(
      this._metdataXMLDocument
    );
    this._mComplexTypes = findComplexTypes(
      this._metdataXMLDocument
    );
    this._generateMockdata(entitySets);

    return this._oMockdata;
  }

  _generateMockdata(mEntitySets) {
    const oMockData = {};
    const sRootUri = this._getRootUri();

    for (const sEntitySetName in mEntitySets) {
      const mEntitySet = {};
      const oEntitySet = mEntitySets[sEntitySetName];
      mEntitySet[oEntitySet.name] = oEntitySet;
      oMockData[sEntitySetName] =
        this._generateODataMockdataForEntitySet(mEntitySet)[sEntitySetName];
    }

    this._applyRelationships(oMockData);

    // changing the values if there is a referential constraint
    for (const sEntitySetName in mEntitySets) {
      const oEntitySet = mEntitySets[sEntitySetName];
      for (const navprop in oEntitySet.navprops) {
        const oNavProp = oEntitySet.navprops[navprop];
        let iPropRefLength;
        try {
          iPropRefLength = oNavProp.from.propRef.length;
        } catch (error) {
          console.log(error);
        }
        for (let j = 0; j < iPropRefLength; j++) {
          for (let i = 0; i < oMockData[sEntitySetName].length; i++) {
            // copy the value from the principle to the dependant;
            const oEntity = oMockData[sEntitySetName][i];

            if (
              this._predefinedValuesConfig[oNavProp.name] &&
              this._predefinedValuesConfig[oNavProp.name][
                oNavProp.to.propRef[j]
              ]
            ) {
              const chosenValues =
                this._predefinedChosenValues[oNavProp.name][
                  oNavProp.to.propRef[j]
                ];
              oEntity[oNavProp.from.propRef[j]] =
                chosenValues[Math.floor(Math.random() * chosenValues.length)];
            } else {
              try {
                oMockData[oNavProp.to.entitySet][i][oNavProp.to.propRef[j]] =
                  oEntity[oNavProp.from.propRef[j]];
                // eslint-disable-next-line no-unused-vars
              } catch (error) {
                throw new Error(
                  `Could not find a respective entry in ${oNavProp.to.entitySet} ` +
                    `to update its value from a navigation related property ${oNavProp.from.propRef} ` +
                    `in ${sEntitySetName}. Check it the target entity set generation is not limited or skipped`
                );
              }
            }
          }
        }
      }
    }

    // set URIs
    for (const sEntitySetName in mEntitySets) {
      const oEntitySet = mEntitySets[sEntitySetName];
      oMockData[sEntitySetName].forEach((oEntry) => {
        // add the metadata for the entry
        oEntry.__metadata = {
          uri:
            sRootUri +
            sEntitySetName +
            "(" +
            this._createKeysString(oEntitySet, oEntry) +
            ")",
          type: oEntitySet.schema + "." + oEntitySet.type,
        };
        // add the navigation properties
        if (this._includeTypeAttribute) {
          for (const sKey in oEntitySet.navprops) {
            oEntry[sKey] = {
              __deferred: {
                uri:
                  sRootUri +
                  sEntitySetName +
                  "(" +
                  this._createKeysString(oEntitySet, oEntry) +
                  ")/" +
                  sKey,
              },
            };
          }
        } else {
          // remove the type attribute
          delete oEntry.type;
        }
      });
    }

    this._oMockdata = oMockData;
  }

  _generateODataMockdataForEntitySet(mEntitySets) {
    const oMockData = {};

    for (const sEntitySetName in mEntitySets) {
      const oEntitySet = mEntitySets[sEntitySetName];
      oMockData[sEntitySetName] = this._generateDataFromEntitySet(oEntitySet);
    }

    return oMockData;
  }

  _generateDataFromEntitySet(oEntitySet) {
    const oEntityType = this._mEntityTypes[oEntitySet.type];
    let aMockedEntries = [];

    let numberOfEntities;

    if (this._customNumberOfEntities[oEntitySet.name]) {
      numberOfEntities = this._customNumberOfEntities[oEntitySet.name];
    } else {
      numberOfEntities = this._numberOfEntities;
    }

    for (let i = 0; i < numberOfEntities; i++) {
      aMockedEntries.push(this._generateDataFromEntity(oEntityType, i + 1));
    }

    if (this._distinctValues.includes(oEntitySet.name)) {
      aMockedEntries = this._removeDuplicates(aMockedEntries, oEntityType.keys);
    }

    return aMockedEntries;
  }

  _removeDuplicates(generatedData, keyFields) {
    const unique = [];
    const keys = "x".repeat(keyFields.length);
    let insert = true;

    generatedData.forEach((element) => {
      for (let i = 0; i < unique.length; i++) {
        let keyMatch = "";

        keyFields.forEach((key) => {
          if (unique[i][key] === element[key]) {
            keyMatch += "x";
          }
        });

        if (keyMatch === keys) {
          insert = false;
          break;
        }
      }

      if (insert) {
        unique.push(element);
      }

      insert = true;
    });

    return unique;
  }

  _generateDataFromEntity(oEntityType, iIndex) {
    const oEntity = {};

    if (!oEntityType) {
      return oEntity;
    }

    for (let i = 0; i < oEntityType.properties.length; i++) {
      const oProperty = oEntityType.properties[i];
      oEntity[oProperty.name] = this._generatePropertyValue(
        oProperty,
        iIndex,
        oEntityType,
        oEntity
      );
    }

    return oEntity;
  }

  _generatePropertyValue(property, iIndexParameter, entityType, entity) {
    //already created?
    if (entity[property.name]) {
      return entity[property.name];
    }

    //predefined?
    if (
      this._predefinedValuesConfig[entityType.name] &&
      this._predefinedValuesConfig[entityType.name][property.name]
    ) {
      if (!this._predefinedChosenValues[entityType.name]) {
        this._predefinedChosenValues[entityType.name] = {};
      }

      if (!this._predefinedChosenValues[entityType.name][property.name]) {
        this._predefinedChosenValues[entityType.name][property.name] = [];
      }

      const propertyConfig =
        this._predefinedValuesConfig[entityType.name][property.name];
      let chosenValue;

      if (Array.isArray(propertyConfig)) {
        //array of values
        chosenValue =
          propertyConfig[Math.floor(Math.random() * propertyConfig.length)];
        this._predefinedChosenValues[entityType.name][property.name].push(
          chosenValue
        );
        return chosenValue;
      } else if (
        typeof propertyConfig === "string" &&
        propertyConfig.indexOf("$ref") !== -1
      ) {
        const variableName = propertyConfig.split(":")[1];

        if (this._variables && this._variables[variableName]) {
          const variable = this._variables[variableName];

          if (Array.isArray(variable)) {
            chosenValue = variable[Math.floor(Math.random() * variable.length)];
            this._predefinedChosenValues[entityType.name][property.name].push(
              chosenValue
            );
            return chosenValue;
          } else {
            return variable;
          }
        } else {
          throw new Error(`
                    Variable $ { propertyConfig } not found `);
        }
      } else {
        //dependent?
        if (propertyConfig.reference) {
          if (entity[propertyConfig.reference]) {
            //already created - get its value
            const referencedValue = entity[propertyConfig.reference];
            //get assigned value
            if (propertyConfig.values) {
              for (const el of propertyConfig.values) {
                if (el.key && el.key === referencedValue) {
                  return el.value ? el.value : "missing value";
                }
              }
            }
          } else {
            //not yet
            //get missing property value
            for (const i in entityType.properties) {
              if (entityType.properties[i].name === propertyConfig.reference) {
                const emptyProperty = entityType.properties[i];
                entity[emptyProperty.name] = this._generatePropertyValue(
                  emptyProperty,
                  iIndexParameter,
                  entityType,
                  entity
                );
                //and run again for current
                return this._generatePropertyValue(
                  property,
                  iIndexParameter,
                  entityType,
                  entity
                );
              }
            }
          }
        }
      }
    }

    // faker?
    if (
      this._fakerConfig[entityType.name] &&
      this._fakerConfig[entityType.name][property.name]
    ) {
      const fakerCall = this._fakerConfig[entityType.name][property.name];
      let generatedValue;

      // Mustache template?
      try {
        if (fakerCall.indexOf("{{") !== -1) {
          generatedValue = f.helpers.fake(fakerCall);
        } else {
          const fakerCallParts = fakerCall.split(".");
          generatedValue = f[fakerCallParts[0]][fakerCallParts[1]].call();
        }

        if (property.maxLength) {
          generatedValue = generatedValue.substring(0, property.maxLength);
        }

        return generatedValue;
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        throw new Error(
          `faker.js call error, check the config for ${entityType.name}/${property.name}`
        );
      }
    }

    //standard way - random values
    let index = iIndexParameter;

    if (!index) {
      index =
        Math.floor(
          this._dataGenerator.getPseudoRandomNumber("String") * 10000
        ) + 101;
    }

    let value = this._dataGenerator.generateValueForODataProperty(
      property,
      index
    );

    if (value === null) {
      value = this._generateDataFromEntity(
        this._mComplexTypes[property.type],
        index
      );
    }

    return value;
  }

  _createKeysString(oEntitySet, oEntry) {
    // creates the key string for an entity
    let sKeys = "";
    if (oEntry) {
      oEntitySet.keys.forEach((sKey) => {
        if (sKeys) {
          sKeys += ",";
        }
        let oKeyValue = oEntry[sKey];
        if (oEntitySet.keysType[sKey] === "Edm.String") {
          oKeyValue = encodeURIComponent("'" + oKeyValue + "'");
        } else if (oEntitySet.keysType[sKey] === "Edm.DateTime") {
          oKeyValue = this._dataGenerator.getDateTime(oKeyValue);
          oKeyValue = encodeURIComponent(oKeyValue);
        } else if (oEntitySet.keysType[sKey] === "Edm.Guid") {
          oKeyValue = "guid'" + oKeyValue + "'";
        }
        if (oEntitySet.keys.length === 1) {
          sKeys += oKeyValue;
          return sKeys;
        }
        sKeys += sKey + "=" + oKeyValue;
      });
    }
    return sKeys;
  }

  _getRootUri() {
    let sUri = this._rootUri;
    sUri = sUri && /([^?#]*)([?#].*)?/.exec(sUri)[1]; // remove URL parameters or anchors
    return sUri;
  }
}

exports.ODataMockGenerator = ODataMockGenerator;
//# sourceMappingURL=index.js.map
