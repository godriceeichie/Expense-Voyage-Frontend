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


