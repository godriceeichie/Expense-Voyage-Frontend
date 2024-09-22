import maldive from '../assets/maldives.webp'


 const PopularTripList = [

    {
        placeImg:maldive,
        city: 'Maldives ',
        serialNo: '#FXZ-2345',
        price: '$249.99'
    },
    {
        placeImg:maldive,
        city: 'Maldives',
        serialNo: '#FXZ-4567',
        price: '$999.29'
    },
    {
        placeImg:maldive,
        city: 'Maldives',
        serialNo: '#FXZ-9485',
        price: '$99.56'
    },
    {
        placeImg:maldive,
        city: 'Maldives',
        serialNo: '#FXZ-3456',
        price: '$72.40'
    },
    {
        placeImg:maldive,
        city: 'Maldives',
        serialNo: '#FXZ-7892',
        price: '$129.48'
    },
    {
        placeImg:maldive,
        city: 'Maldives',
        serialNo: '#FXZ-8959',
        price: '$79.40'
    },
]


export class PopularProductType {
    placeImg?: string
    city?: string
    serialNo?: string
    price?: string

    constructor(image: string, name: string, serialno: string, price: string){
        this.placeImg = image,
        this.city = name,
        this.serialNo = serialno,
        this.price = price
    }
}

export default PopularTripList