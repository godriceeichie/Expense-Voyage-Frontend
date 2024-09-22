import { Box, Button,  Loader, NumberInput, Select, Text } from "@mantine/core"
import { FlightServices } from "../services"
import { DateInput } from "@mantine/dates"
import '../styles/addTrip.css'
import { useState } from "react"
import { SubmitHandler } from "react-hook-form";
import { BookFlightType, CreateItineraryItemType } from "../types"
import { useForm } from '@mantine/form';
import { LuPlaneLanding, LuPlaneTakeoff } from "react-icons/lu";
import { MdConnectingAirports } from "react-icons/md";
import { formatDate, formatDuration, getAirlineName, getAirportName, getCurrencySymbol, retrieveFromLocalStorage, saveToLocalStorage } from "../scripts/chunckArray"
import usePrivateApi from "../hooks/usePrivateApi"



interface flightData{
    location: string
    destination: string
    time: Date | null

    onFlightSelect: (data: {
        nextStep: number
       }) => void;
}

const SearchFlightForm = ( {data }: {data: flightData}) => {
    const flightServices = new FlightServices()
    const privateApi = usePrivateApi()
    const [loading, setLoading] = useState(false);

    const [seenFlights, setSeenFlights] = useState<[]>([])

      const BookFlight: SubmitHandler<BookFlightType> = async (data, e) => {
        e?.preventDefault();
        setLoading(true);
        try{
            const date = new Date(data.date)
            const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            const response = await flightServices.searchFlight({location: data.location, destination:data.destination, date: formattedDate, max: data.max})
            
            console.log(response.data)
            setSeenFlights(response?.data)
            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
      }
      const flightForm = useForm({
        mode: 'uncontrolled',
        initialValues: { location: data.location, destination: data.destination, date: `${data.time?.getFullYear()}-${String(data.time!.getMonth() + 1).padStart(2, '0')}-${String(data.time!.getDate()).padStart(2, '0')}`, max: 1 },
        validate: {
          location: (value) => (value.length < 2 ? 'Location must have at least 2 letters' : null),
          destination: (value) => (value.length < 2 ? 'Destination must have at least 2 letters' : null),
          max: (value) => (value > 7 ? 'cannot be more than 7' : null),
          date: (value) => (value ? null: 'end date cannot be empty'),
        },
      });
console.log(flightForm.values.date)
const [flightloading, setFlightLoading] = useState(false)

const addItineraryItem = async(data: CreateItineraryItemType)=>{
  setFlightLoading(true)
  console.log('add itinerary function...')
  const itineraryID = retrieveFromLocalStorage('itinerary_ID')
  try{
    const response = await privateApi.post(`/trip/${itineraryID}/itinerary-items/`,
       data
    )
    console.log(response.data)
    setFlightLoading(false)
  }catch(error){
    console.log(error)
    setFlightLoading(true)
  }
}
  return (
    <>
      <Box>
        <form action="" onSubmit={flightForm.onSubmit(BookFlight)} className="flex flex-col gap-5 pt-6">
            <Box className="flex justify-center">
                <Text className="text-2xl font-semibold text-center">Search for your flight now</Text>
            </Box>
            <Box className="flex gap-4 items-start justify-center">
               <Box className="flex flex-col justify-end">
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
        type="text" placeholder="BOS" 
      checkIconPosition="right"
       color="black"  label='Location'
       key={flightForm.key('location')}
       {...flightForm.getInputProps('location')}
        />
        
               </Box>

               <Box className="flex flex-col justify-end">
               <Select 
               defaultValue={data.destination}
               value={data.destination}
               data={[
        { value: 'LON', label: 'London' },
        { value: 'CHI', label: 'China' },
        { value: 'NGN', label: 'Nigeria' },
        { value: 'FRN', label: 'France' },
        ]}
        readOnly
         type="text" placeholder="BOS" 
      checkIconPosition="right"
       color="black"  label='Destination'
       key={flightForm.key('destination')}
       {...flightForm.getInputProps('destination')}
        />
       
               </Box>

                
                <DateInput 
                valueFormat="YYYY-MM-DD" 
                minDate={new Date()}
                defaultValue={data.time}
                value={data.time}
                readOnly
                key={flightForm.key('date')}
                {...flightForm.getInputProps('date')}
                label="Pick date" placeholder="2024-12-21"/>
                <NumberInput  label="Number of people"
      placeholder="2" max={7} min={1}
      key={flightForm.key('max')}
      {...flightForm.getInputProps('max')}  
    />
      <Box className="h-20 flex justify-center items-center ">
      <Button type="submit" className="bg-primary-color hover:bg-green-900" disabled={loading}>{loading? 'Searching...': 'Search Flight'}</Button>
      </Box>
            </Box>
        </form>
      </Box>

      {
        loading && loading ? <Box className="w-full flex items-center justify-center h-70 ">
                <Loader size={40} />
        </Box> : null
      }

      {
        seenFlights && (
            <Box className="flex flex-col gap-5">
                {/* <Text>List of Flights from {flightForm.values.location} To {flightForm.values.destination} </Text> */}
                {
                    seenFlights.map((flight:any)=>{
                        return (
                            <Box key={flight.id} className="flex flex-col gap-5 justify-between shadow-xl p-6 w-full bg-white rounded-xl">
                                <Box>
                                  <Text className="text-xl font-semibold">{getAirlineName(flight.validatingAirlineCodes[0])}</Text>
                                </Box>
                                <Box className="flex w-full justify-between gap-5">
                                <Box className="flex flex-col gap-3">
                                   <Text className="flex gap-1">
                                    <Box className="w-7 h-7 rounded-sm bg-red-200 text-red-700 flex items-center justify-center">
                                    <LuPlaneTakeoff />
                                    </Box>
                                    
                                    <span className="font-bold "> Daparture:</span>
                                        {
                                            formatDate(
                                                flight.itineraries[0].segments[0].departure.at
                                            )
                                        }
                                    </Text>
                                    <Text className="flex gap-1 font-medium">
                                    <Box className="w-7 h-7 rounded-sm bg-blue-200 text-blue-700 flex items-center justify-center">
                                    <MdConnectingAirports fontSize={'20px'} />
                                    </Box>

                                    {
                                        getAirportName(flight.itineraries[0].segments[0].departure.iataCode)
                                }
                                    </Text>
                                   </Box>
                               <Box className="flex flex-col gap-3">
                               <Text className="flex gap-1">
                               <Box className="w-7 h-7 rounded-sm bg-green-100 text-green-700 flex items-center justify-center">
                               <LuPlaneLanding />
                               </Box>
                                       
                                      
                                      <span className="font-bold ">
                                       Arrival:</span>  {
                                        formatDate(
                                            flight.itineraries[0].segments[0].arrival.at
                                        )
                                       }
                                   </Text>
                                   <Text className="flex gap-1 font-medium">
                                   <Box className="w-7 h-7 rounded-sm bg-blue-200 text-blue-700 flex items-center justify-center">
                                   <MdConnectingAirports fontSize={'20px'}  />
                                   </Box>

                                   {
                                       getAirportName(flight.itineraries[0].segments[0].arrival.iataCode)
                               }
                                   </Text>
                               </Box>
                                  
                                <Box className="flex flex-col ">
                                   <Box>
                                   <Text className="text-lg font-semibold">
                                    {
                                    formatDuration(
                                        flight.itineraries[0].segments[0].duration
                                    )
                                    }</Text>
                                    <Text className="font-medium text-xs text-gray-400">Duration</Text>
                                   </Box>
                                   <Box>
                                    <Text className="text-gray-500 font-semibold">
                                        {
                                            flight.itineraries[0].segments[0].numberOfStops
                                        } Stops
                                    </Text>
                                   </Box>
                                   </Box>
                                  <Box className="h-full flex justify-between flex-col items-end">
                                    <Text className="font-bold text-xl">
                                        {
                                            getCurrencySymbol(flight.price.currency)
                                        }
                                    {
                                            flight.price.total
                                        }
                                    </Text>
                                  <Button disabled={flightloading} className="bg-primary-color hover:bg-green-700  transition"
                                  onClick={()=>{
                                    saveToLocalStorage({
                                      'departure_time':  formatDate(
                                      flight.itineraries[0].segments[0].departure.at),
                                      'departure_airport': getAirportName(flight.itineraries[0].segments[0].departure.iataCode),
                                      'arrival_time':
                                        flight.itineraries[0].segments[0].arrival.at
                                    ,
                                    'arrival_airport': getAirportName(flight.itineraries[0].segments[0].arrival.iataCode),
                                    'air_line': getAirlineName(flight.validatingAirlineCodes[0]),
                                    'ticket_price': flight.price.total
                                })
                                addItineraryItem({
                                  arrival_location: getAirportName(flight.itineraries[0].segments[0].arrival.iataCode),
                                  arrival_time: flight.itineraries[0].segments[0].arrival.at,
                                  departure_location: getAirportName(flight.itineraries[0].segments[0].departure.iataCode),
                                  departure_time: flight.itineraries[0].segments[0].departure.at,
                                  item_type: 'transport',
                                  transport_type: 'flight'
                                })
                                    data.onFlightSelect({nextStep: 2})
                                  }}
                                  >
                                    {
                                      flightloading ? <Loader color="green" size={30}/> : 'Book Flight'
                                    }</Button>
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

export default SearchFlightForm
