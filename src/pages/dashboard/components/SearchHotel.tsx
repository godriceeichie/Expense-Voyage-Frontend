import { Box, Button, Flex, Select, Text } from "@mantine/core"
import { FlightServices } from "../../../services"
import { HotelAmenitiesList } from "../data/createTripDatas"
import { useForm } from '@mantine/form';
import { CreateItineraryItemType, FindHotelType } from "../../../types";
import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { FcRating } from "react-icons/fc";
import { LuHotel,  } from "react-icons/lu";
import { retrieveFromLocalStorage, saveToLocalStorage } from "../../../scripts/chunckArray";
import usePrivateApi from "../../../hooks/usePrivateApi";

interface hotelInterface {
    location: string

    onHotelSelect: (data: {
        nextStep: number
        hotelId: string

    }) => void;
}

const SearchHotel = ({ data }: { data: hotelInterface }) => {
    const flightServices = new FlightServices()
    const privateApi = usePrivateApi()
    const hotelForm = useForm({
        mode: 'uncontrolled',
        initialValues: { location: data.location, hotel_rating: '', amenitites: '', },
        validate: {
            location: (value) => (value.length < 2 ? 'Location must have at least 2 letters' : null),
            hotel_rating: (value) => (value.length < 1 ? 'hotel_rating must have at least 2 letters' : null),
            amenitites: (value) => (value ? null : 'amenitites cannot be empty'),
        },
    });
    const [loading, setLoading] = useState(false);

    const [seenHotels, setSeenHotels] = useState<[]>([])

    const findHotel: SubmitHandler<FindHotelType> = async (formData, e) => {
        e?.preventDefault();
        setLoading(true);
        try {
            const response = await flightServices.findHotel({ location: formData.location, hotel_rating: formData.hotel_rating, amenitites: formData.amenitites })
            console.log(response)
            setSeenHotels(response.data)
            // data.onHotelSelect({nextStep: 3, hotelId: '3003'})
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    const saveHotel = async (hotelID: string, hotel_name: string)=>{
        const data = await flightServices.findHotelByID(hotelID)
        if(data){
            saveToLocalStorage({
                'hotel_name': hotel_name,
            })
        }
        
    }
    const [loadingHotel, setLoadingHotel] = useState(false)

    const localData = retrieveFromLocalStorage(['arrival_time', 'arrival_airport'])
        // localData
        // console.log(localData)
    const addItineraryItem = async(hotelName: string)=>{
        setLoadingHotel(true)
        console.log('add itinerary function...')
        const itineraryID = retrieveFromLocalStorage('itinerary_ID')
       
        try{
          const response = await privateApi.post(`/trip/${itineraryID}/itinerary-items/`,
             {
                item_type: 'lodge',
                transport_type: 'bus',
                departure_location: localData.arrival_airport,
                arrival_location: hotelName, 
                arrival_time: localData.arrival_time,
                departure_time: ''
             }
          )
          console.log(response.data)
          
          setLoadingHotel(false)
        }catch(error){
          console.log(error)
          setLoadingHotel(true)
        }
      }
    return (
        <>
            <Box>
                <Text className="text-2xl font-bold text-center">Find a Hotel</Text>
                <form action="" onSubmit={hotelForm.onSubmit(findHotel)} className="w-full flex item-center justify-center">
                    <Flex className="gap-7 items-center">
                        <Flex className="gap-7 items-end">
                            <Select
                                defaultValue={data.location}
                                value={data.location}
                                data={[
                                    { value: 'LON', label: 'London' },
                                    { value: 'CHI', label: 'China' },
                                    { value: 'NGN', label: 'Nigeria' },
                                    { value: 'FRN', label: 'France' },
                                ]}
                                readOnly
                                type="text" placeholder="PAR"
                                checkIconPosition="right"
                                color="black" label='Location'
                                key={hotelForm.key('location')}
                                {...hotelForm.getInputProps('location')}
                            />
                            <Select
                                data={[
                                    { value: '1', label: '*' },
                                    { value: '2', label: '**' },
                                    { value: '3', label: '***' },
                                    { value: '4', label: '****' },
                                    { value: '5', label: '*****' },
                                ]}
                                type="text" placeholder="Rating"
                                checkIconPosition="right"
                                color="black" label='Hotel Rating'
                                key={hotelForm.key('hotel_rating')}
                                {...hotelForm.getInputProps('hotel_rating')}
                            />
                            <Select
                                //    defaultValue={data.hotel_rating}
                                //    value={data.hotel_rating}
                                data={HotelAmenitiesList}
                                type="text" placeholder="Swimming pool"
                                checkIconPosition="right"
                                color="black" label='Hotel Amenities'
                                key={hotelForm.key('amenitites')}
                                {...hotelForm.getInputProps('amenitites')}
                            />
                        </Flex>
                        <Box className="h-10 flex items-end justify-center ">
                            <Button className="bg-primary-color" disabled={loading} type="submit">find Hotel</Button>
                        </Box>

                    </Flex>
                </form>

            </Box>


            {
                seenHotels && (
                    <Box className="grid grid-cols-2 mt-10 gap-5">
                        {/* <Text>List of Flights from {flightForm.values.location} To {flightForm.values.destination} </Text> */}
                        {
                            seenHotels.map((hotel: any) => {
                                return (
                                    <Box key={hotel.id} className="flex flex-col gap-5 justify-between shadow-xl p-6 w-full bg-white rounded-xl">
                                        <Box>
                                            <Text className="text-xl font-semibold">{ }</Text>
                                        </Box>
                                        <Box className="flex w-full flex-col justify-between items-start gap-5">
                                            <Box className="flex flex-col gap-3">
                                                <Text className="flex gap-1">
                                                    <Box className="w-7 h-7 rounded-sm bg-green-200 text-green-700 flex items-center justify-center">
                                                        <LuHotel />
                                                    </Box>
                                                    <span className="font-bold "> Name:</span>
                                                    {hotel.name}
                                                </Text>
                                                <Text className="flex gap-1 font-medium">
                                                    <Box className="w-7 h-7 rounded-sm bg-blue-200 text-blue-700 flex items-center justify-center">
                                                        <FcRating fontSize={'20px'} />
                                                    </Box>
                                                    <span className="font-bold ">
                                                        Rating:</span>
                                                    {hotel.rating}
                                                </Text>
                                            </Box>
                                            <Box className=" flex justify-end w-full items-end">
                                                <Button className="bg-primary-color hover:bg-green-700 transition"
                                                onClick={()=>{
                                                    saveHotel(hotel.hotelId, hotel.name)
                                                   
                                                    retrieveFromLocalStorage(['arrival_time', 'arrival_airport'])
                                                    addItineraryItem(hotel.name)
                                                }}
                                                >
                                                    Check Availability</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                )
            }

        </>
    )
}

export default SearchHotel
