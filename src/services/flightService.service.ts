import axios from 'axios'
import { BookFlightType, FindHotelType } from '../types';

class FlightServices{
    constructor() {
        this.getAccessToken = this.getAccessToken.bind(this);
        this.searchFlight = this.searchFlight.bind(this);
      }

    async getAccessToken(){
        try {
            const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', {
              grant_type: 'client_credentials',
              client_id: 'SkrqwUFNDGpAM5oiAoCqvCHp4aKMjhmM',
              client_secret: 't9HwhRkr23d7UMcS',
            }, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            });
            console.log(response.data)
            return response.data.access_token;
          } catch (error) {
            console.error('Error obtaining access token:', error);
          }
    }
    async searchFlight(data: BookFlightType){
        const token = await this.getAccessToken()
        try{
            const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers',
                {
                    params: {
                      originLocationCode: data.location,
                      destinationLocationCode: data.destination,
                      departureDate: data.date,
                      adults: data.max,
                      max: 35,
                    },
                    headers: {
                      'Authorization': `Bearer ${token}`,
                    },
                  }
            )

            console.log(response.data)
            return response.data
        }catch(error : any){
            console.log(error)
            if (error.response) {
                console.error('Error response:', error.response.data);
              } else {
                console.error('Error:', error.message);
              }
        }
    }

    async findHotel(data: FindHotelType){
      const token = await this.getAccessToken()
      try{
        const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city',
          {
            params: {
              cityCode: data.location,
              ratings: Number(data.hotel_rating),
              amenities: data.amenitites,
          },
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          }
        )

        console.log(response.data)
        return response.data
      }catch(error){
        console.log(error)
      }
    }

    // Booking a hotel
    async BookHotel(){
      const token = await this.getAccessToken()
      try{
        const response = await axios.get('https://test.api.amadeus.com/v3/shopping/hotel-offers', {
            params: {
              hotelIds: 'CXCHI782',
              roomQuantity: 1,
              adults: 1,
              checkInDate: '2024-09-22'
            },
            headers: {
              'Authorization': `Bearer ${token}`,
            },
        })
        console.log(response.data)
        return response.data;
      }catch(error){
        console.log(error)
      }
    }
}

export default FlightServices



// 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BOS&destinationLocationCode=CHI&departureDate=2022-07-26&adults=1&max=1'

// 'https://test.api.amadeus.com/v2/shopping/flight-offers'