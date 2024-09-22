export default function chunkArray<T>(array: T[], size: number): T[][] {
    if (!array.length) {
        return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunkArray(tail, size)];
}



const airportCodes: { [key: string]: string } = {
    ATL: "Hartsfield-Jackson Atlanta International Airport",
    PEK: "Beijing Capital International Airport",
    LAX: "Los Angeles International Airport",
    DXB: "Dubai International Airport",
    HND: "Tokyo Haneda Airport",
    ORD: "O'Hare International Airport",
    LHR: "London Heathrow Airport",
    PVG: "Shanghai Pudong International Airport",
    CDG: "Charles de Gaulle Airport",
    KEF: 'Keflavík International Airport',
    DFW: "Dallas/Fort Worth International Airport",
    CAN: "Guangzhou Baiyun International Airport",
    AMS: "Amsterdam Schiphol Airport",
    FRA: "Frankfurt Airport",
    IST: "Istanbul Airport",
    DEL: "Indira Gandhi International Airport",
    JFK: "John F. Kennedy International Airport",
    SIN: "Singapore Changi Airport",
    ICN: "Incheon International Airport",
    DEN: "Denver International Airport",
    BKK: "Suvarnabhumi Airport",
    SFO: "San Francisco International Airport",
    HKG: "Hong Kong International Airport",
    LAS: "McCarran International Airport",
    SEA: "Seattle-Tacoma International Airport",
    MIA: "Miami International Airport",
    CLT: "Charlotte Douglas International Airport",
    FCO: "Leonardo da Vinci–Fiumicino Airport",
    MUC: "Munich Airport",
    PHX: "Phoenix Sky Harbor International Airport",
    IAH: "George Bush Intercontinental Airport",
    KUL: "Kuala Lumpur International Airport",
    SYD: "Sydney Kingsford Smith Airport",
    EWR: "Newark Liberty International Airport",
    YYZ: "Toronto Pearson International Airport",
    BOS: "Boston Logan International Airport",
    MEL: "Melbourne Airport",
    SLC: "Salt Lake City International Airport",
    MCO: "Orlando International Airport",
    MSP: "Minneapolis-Saint Paul International Airport",
    DTW: "Detroit Metropolitan Airport",
    BNE: "Brisbane Airport",
    YVR: "Vancouver International Airport",
    LGW: "Gatwick Airport",
    HNL: "Daniel K. Inouye International Airport",
    FLL: "Fort Lauderdale-Hollywood International Airport",
    GRU: "São Paulo/Guarulhos International Airport",
    CPH: "Copenhagen Airport",
    TPE: "Taiwan Taoyuan International Airport",
    ZRH: "Zurich Airport",
    LIS: "Lisbon Humberto Delgado Airport",
    MEX: "Mexico City International Airport",
    SVO: "Sheremetyevo International Airport",
    NRT: "Narita International Airport",
    BCN: "Barcelona-El Prat Airport",
    ARN: "Stockholm Arlanda Airport",
    GIG: "Rio de Janeiro-Galeão International Airport",
    LGA: "LaGuardia Airport",
    LYS: "Lyon-Saint Exupéry Airport",
    TXL: "Berlin Tegel Airport",
    VIE: "Vienna International Airport",
    HEL: "Helsinki-Vantaa Airport",
    BRU: "Brussels Airport",
    LED: "Pulkovo Airport",
    MAD: "Adolfo Suárez Madrid-Barajas Airport",
    MAN: "Manchester Airport",
    CAI: "Cairo International Airport",
    BOG: "El Dorado International Airport",
    MNL: "Ninoy Aquino International Airport",
    SCL: "Comodoro Arturo Merino Benítez International Airport",
    JNB: "O. R. Tambo International Airport",
    GVA: "Geneva Airport",
    CGK: "Soekarno-Hatta International Airport",
    BWI: "Baltimore/Washington International Thurgood Marshall Airport",
    DOH: "Hamad International Airport",
    AUH: "Abu Dhabi International Airport",
    KIX: "Kansai International Airport",
    PER: "Perth Airport",
    HOU: "William P. Hobby Airport",
    TPA: "Tampa International Airport",
    RSW: "Southwest Florida International Airport",
    SAN: "San Diego International Airport",
    DUS: "Düsseldorf Airport",
    ORY: "Paris Orly Airport",
    YUL: "Montréal-Pierre Elliott Trudeau International Airport",
    BUD: "Budapest Ferenc Liszt International Airport",
    ATH: "Athens International Airport",
    BLR: "Kempegowda International Airport",
    PRG: "Václav Havel Airport Prague",
    MRS: "Marseille Provence Airport",
    // BNE: "Brisbane Airport",
    WAW: "Warsaw Chopin Airport",
    SZG: "Salzburg Airport",
    NAP: "Naples International Airport",
    DUB: "Dublin Airport",
    OSL: "Oslo Gardermoen Airport",
    MLA: "Malta International Airport",
    PMI: "Palma de Mallorca Airport",
    BIO: "Bilbao Airport",
    VLC: "Valencia Airport",
    LPA: "Gran Canaria Airport",
    TFS: "Tenerife South Airport",
    IBZ: "Ibiza Airport",
    RHO: "Rhodes International Airport",
    HER: "Heraklion International Airport",
    CFU: "Corfu International Airport",
    SKG: "Thessaloniki Airport",
    ZAG: "Zagreb Airport",
    SOF: "Sofia Airport",
    BUH: "Bucharest Henri Coandă International Airport",
    KTW: "Katowice Airport",
    KRK: "John Paul II Kraków-Balice International Airport",
    VNO: "Vilnius Airport",
    RIX: "Riga International Airport",
    TLL: "Tallinn Airport",
    TIA: "Tirana International Airport",
    LJU: "Ljubljana Jože Pučnik Airport",
    LCA: "Larnaca International Airport",
    PFO: "Paphos International Airport",
    BEG: "Belgrade Nikola Tesla Airport",
    PRN: "Pristina International Airport",
    SKP: "Skopje International Airport",
    TGD: "Podgorica Airport"
  };
  
  export const getAirportName =(iataCode: string): string=> {
    const airportName = airportCodes[iataCode.toUpperCase()];
    if (airportName) {
      return airportName;
    } else {
      return iataCode;
    }
  }
  
  // Example usage:
  const iataCode = "LIS";
  const airportName = getAirportName(iataCode);
  console.log(`The airport with IATA code ${iataCode} is ${airportName}.`);
  


  export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
  
    // Extracting parts of the date
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const year = date.getFullYear();
  
    // Convert hours to 12-hour format and determine AM/PM
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
  
    // Month abbreviation
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
  
    return `${formattedHours}:${formattedMinutes}${period}. ${day}, ${month}. ${year}`;
  }

  export const convertToDateTime = (input: string): string => {
    // First, remove the dot after the time
    const cleanedInput = input.replace('.', '');
  
    // Define the format of the input string
    const [timePart, dayPart, monthPart, yearPart] = cleanedInput.split(' ');
  
    // Parse the time part
    const time = timePart.replace(/[APMapm]+/g, '');
    const amPm = timePart.includes('PM') ? 'PM' : 'AM';
    const [hours, minutes] = time.split(':').map(Number);
  
    let hours24 = hours;
    if (amPm === 'PM' && hours !== 12) {
      hours24 += 12;
    } else if (amPm === 'AM' && hours === 12) {
      hours24 = 0;
    }
  
    // Map month names to numbers
    const monthMap: Record<string, string> = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sept: '09', // corrected to "Sept" to match the input format
      Oct: '10',
      Nov: '11',
      Dec: '12'
    };
  
    const month = monthMap[monthPart.replace(',', '')];
  
    // Construct the final datetime string in the desired format
    const date = `${yearPart}-${month}-${dayPart.replace(',', '')}`;
    const time24 = `${hours24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
  
    // Assuming the offset is always +01
    const offset = '+01';
  
    return `${date} ${time24}${offset}`;
  }
  
  // Example usage
  const input = "7:50PM. 24, Sept. 2024";
  const result = convertToDateTime(input);
  console.log(result); // "2024-09-24 19:50:00+01"
  
 
  export const formatDuration = (duration: string): string =>{
    // Regular expression to extract hours and minutes from the duration string
    const regex = /PT(\d+H)?(\d+M)?/;
    const matches = duration.match(regex);
  
    // Extract hours and minutes, or default to 0 if they are not present
    const hours = matches && matches[1] ? parseInt(matches[1].replace('H', ''), 10) : 0;
    const minutes = matches && matches[2] ? parseInt(matches[2].replace('M', ''), 10) : 0;
  
    // Format the result
    const formattedHours = hours > 0 ? `${hours}hr${hours > 1 ? 's' : ''}` : '';
    const formattedMinutes = minutes > 0 ? `${minutes}min${minutes > 1 ? 's' : ''}` : '';
  
    // Combine hours and minutes with a comma if both are present
    return [formattedHours, formattedMinutes].filter(Boolean).join(', ');
  }
  
  // Example usage:
  const duration = "PT7H55M";
  const formattedDuration = formatDuration(duration);
  console.log(formattedDuration);  // Output: "7hrs, 55mins"
  
  const currencySymbols = {
    USD: '$', // US Dollar
    EUR: '€', // Euro
    GBP: '£', // British Pound
    JPY: '¥', // Japanese Yen
    AUD: 'A$', // Australian Dollar
    CAD: 'C$', // Canadian Dollar
    CHF: 'CHF', // Swiss Franc
    CNY: '¥', // Chinese Yuan
    SEK: 'kr', // Swedish Krona
    NZD: 'NZ$', // New Zealand Dollar
    INR: '₹', // Indian Rupee
    RUB: '₽', // Russian Ruble
    ZAR: 'R', // South African Rand
    BRL: 'R$', // Brazilian Real
    NOK: 'kr', // Norwegian Krone
    MXN: '$', // Mexican Peso
    SGD: 'S$', // Singapore Dollar
    HKD: 'HK$', // Hong Kong Dollar
    KRW: '₩', // South Korean Won
    TRY: '₺', // Turkish Lira
    PLN: 'zł', // Polish Zloty
};
  export const getCurrencySymbol =(currencyCode : keyof typeof currencySymbols): string =>{
   

    return currencySymbols[currencyCode] || 'Currency not found';
}


// getting the name of the airline from the code

const airlineCodes = {
  "FI": 'Icelandair',
  "TP": "TAP Air Portugal",
  "AA": "American Airlines",
  "DL": "Delta Air Lines",
  "BA": "British Airways",
  "AF": "Air France",
  "LH": "Lufthansa",
  "EK": "Emirates",
  "QR": "Qatar Airways",
  "SQ": "Singapore Airlines",
  "QF": "Qantas",
  "IB": "Iberia",
  "CX": "Cathay Pacific",
  "JL": "Japan Airlines",
  "AC": "Air Canada",
  "UA": "United Airlines",
  "NH": "All Nippon Airways",
  "AZ": "Alitalia",
  "KL": "KLM Royal Dutch Airlines",
  "VS": "Virgin Atlantic",
  "EY": "Etihad Airways",
  "TK": "Turkish Airlines",
  "KE": "Korean Air",
  "CA": "Air China",
  "MU": "China Eastern Airlines",
  "CZ": "China Southern Airlines",
  "SU": "Aeroflot",
  "LX": "Swiss International Air Lines",
  "OS": "Austrian Airlines",
  "SK": "Scandinavian Airlines",
  "AY": "Finnair",
  "MS": "EgyptAir",
  "ET": "Ethiopian Airlines",
  "AI": "Air India",
  "MH": "Malaysia Airlines",
  "NZ": "Air New Zealand",
  "SA": "South African Airways",
  "VN": "Vietnam Airlines",
  "TG": "Thai Airways",
  "PR": "Philippine Airlines",
  "CI": "China Airlines",
  "BR": "EVA Air",
  "GA": "Garuda Indonesia",
  "RJ": "Royal Jordanian",
  "WY": "Oman Air",
  "UL": "SriLankan Airlines",
  "ME": "Middle East Airlines",
  "LY": "El Al Israel Airlines",
  "KU": "Kuwait Airways",
  "PK": "Pakistan International Airlines",
  "SV": "Saudi Arabian Airlines",
  "SN": "Brussels Airlines",
  "U2": "easyJet",
  "FR": "Ryanair",
  "W6": "Wizz Air",
  "VY": "Vueling Airlines",
  "DY": "Norwegian Air Shuttle",
  "HG": "NIKI",
  "D8": "Norwegian Air International",
  "UX": "Air Europa",
  "LO": "LOT Polish Airlines",
  "OK": "Czech Airlines",
  "RO": "TAROM",
  "JU": "Air Serbia",
  "EW": "Eurowings",
  "4U": "Germanwings",
  "PC": "Pegasus Airlines",
  "A3": "Aegean Airlines",
  "OA": "Olympic Air",
  "EN": "Air Dolomiti",
  "BT": "Air Baltic",
  "JP": "Adria Airways",
  "OU": "Croatia Airlines",
  "YM": "Montenegro Airlines",
  "FB": "Bulgaria Air",
  "DP": "Pobeda",
  "S7": "S7 Airlines",
  "UT": "UTair",
  "FV": "Rossiya Airlines",
  "U6": "Ural Airlines",
  "UN": "Transaero Airlines",
  "3U": "Sichuan Airlines",
  "8L": "Lucky Air",
  "HU": "Hainan Airlines",
  "SC": "Shandong Airlines",
  "ZH": "Shenzhen Airlines",
  "MF": "Xiamen Airlines",
  "FM": "Shanghai Airlines",
  "KN": "China United Airlines",
  "JD": "Beijing Capital Airlines",
  "KY": "Kunming Airlines",
  "8C": "Shanxi Airlines",
  "GS": "Tianjin Airlines",
  "9C": "Spring Airlines",
  "BK": "Okay Airways",
  "PN": "West Air",
  "TV": "Tibet Airlines",
  "G5": "China Express Airlines",
  "QW": "Qingdao Airlines",
  "Y8": "Suparna Airlines",
  "8Y": "China Postal Airlines",
  "8P": "Pacific Coastal Airlines",
  "4N": "Air North",
  "3J": "Jubba Airways",
  "5J": "Cebu Pacific Air",
  "DG": "Cebgo",
  "3K": "Jetstar Asia",
  "TR": "Scoot",
  "SL": "Thai Lion Air",
  "FD": "Thai AirAsia",
  "VZ": "Thai VietJet Air",
  "QZ": "Indonesia AirAsia",
  "XT": "Indonesia AirAsia X",
  "ID": "Batik Air",
  "JT": "Lion Air",
  "QG": "Citilink",
  "GF": "Gulf Air",
  "XY": "flynas",
  "FZ": "Flydubai",
  "J9": "Jazeera Airways",
  "G9": "Air Arabia",
  "IV": "Wind Jet",
  "B2": "Belavia",
  "PS": "Ukraine International Airlines",
  "OV": "Estonian Air",
  "EI": "Aer Lingus",
  "BE": "Flybe",
  "BM": "bmi Regional",
  "AK": "AirAsia",
  "OD": "Malindo Air",
  "BL": "Bamboo Airways",
  "VJ": "VietJet Air",
  "QH": "K5 Aviation",
  "WN": "Southwest Airlines",
  "B6": "JetBlue Airways",
  "AS": "Alaska Airlines",
  "NK": "Spirit Airlines",
  "F9": "Frontier Airlines",
  "G4": "Allegiant Air",
  "HA": "Hawaiian Airlines",
  "VX": "Virgin America",
  "SY": "Sun Country Airlines",
  "WS": "WestJet",
  "TS": "Air Transat",
  "PD": "Porter Airlines",
  "WO": "Swoop",
  "F8": "Flair Airlines",
  "3O": "Air Arabia Maroc",
  "AT": "Royal Air Maroc",
  "AH": "Air Algérie",
  "TU": "Tunisair",
  "KQ": "Kenya Airways",
  "HM": "Air Seychelles",
  "MK": "Air Mauritius",
};


export const getAirlineName =(code: keyof typeof airlineCodes) =>{
  return airlineCodes[code] || "Unknown Airline";
}



 type StorageValue = string | number | boolean;

export function saveToLocalStorage(key: string, value: StorageValue): void;
export function saveToLocalStorage(data: Record<string, StorageValue>): void;
export function saveToLocalStorage(arg1: string | Record<string, StorageValue>, arg2?: StorageValue): void {
  if (typeof arg1 === 'string' && arg2 !== undefined) {
    // Save single key-value pair
    localStorage.setItem(arg1, JSON.stringify(arg2));
  } else if (typeof arg1 === 'object' && arg2 === undefined) {
    // Save multiple key-value pairs
    Object.keys(arg1).forEach((key) => {
      localStorage.setItem(key, JSON.stringify(arg1[key]));
      console.log(key + ' : ' + arg1)
    });
  } else {
    throw new Error('Invalid arguments');
  }
}


export function retrieveFromLocalStorage(key: string): StorageValue | null;
export function retrieveFromLocalStorage(keys: string[]): Record<string, StorageValue | null>;
export function retrieveFromLocalStorage(arg: string | string[]): StorageValue | null | Record<string, StorageValue | null> {
  if (typeof arg === 'string') {
    // Retrieve single key
    const value = localStorage.getItem(arg);
    return value ? JSON.parse(value) : null;
  } else if (Array.isArray(arg)) {
    // Retrieve multiple keys
    const result: Record<string, StorageValue | null> = {};
    arg.forEach((key) => {
      const value = localStorage.getItem(key);
      result[key] = value ? JSON.parse(value) : null;
    });
    console.log(result)
    return result;
  } else {
    throw new Error('Invalid arguments');
  }
}
