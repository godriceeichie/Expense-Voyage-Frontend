import { Box, Button, NumberInput, Select, Text } from "@mantine/core"
import { FlightServices } from "../services"
import { DateInput } from "@mantine/dates"
import '../styles/addTrip.css'
import { flightSchema } from "../schema/tripSchema"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form";
import { BookFlightType } from "../types"
import { useForm } from '@mantine/form';

const SearchFlightForm = () => {
    const flightServices = new FlightServices()
    const [loading, setLoading] = useState(false);

    

      const BookFlight: SubmitHandler<BookFlightType> = async (data, e) => {
        e?.preventDefault();
        setLoading(true);
        try{
            const date = new Date(data.date)
            const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            const response = await flightServices.searchFlight({location: data.location, destination:data.destination, date: formattedDate, max: data.max})
            
            console.log(response)

            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
      }
      const flightForm = useForm({
        mode: 'uncontrolled',
        initialValues: { location: '', destination: '', date: '', max: 1 },
        validate: {
          location: (value) => (value.length < 2 ? 'Location must have at least 2 letters' : null),
          destination: (value) => (value.length < 2 ? 'Destination must have at least 2 letters' : null),
          max: (value) => (value > 7 ? 'cannot be more than 7' : null),
        },
      });

  return (
    <>
      <Box>
        <form action="" onSubmit={flightForm.onSubmit(BookFlight)} className="flex flex-col gap-5 pt-6">
            <Box className="flex justify-center">
                <Text className="text-3xl font-bold text-center">Book your flight now</Text>
            </Box>
            <Box className="flex gap-4 items-start justify-center">
               <Box className="flex flex-col justify-end">
               <Select data={[
        { value: 'LON', label: 'London' },
        { value: 'CHI', label: 'China' },
        { value: 'NGN', label: 'Nigeria' },
        { value: 'FRN', label: 'France' },

      ]} type="text" placeholder="BOS" 
      checkIconPosition="right"
       color="black"  label='Location'
       key={flightForm.key('location')}
       {...flightForm.getInputProps('location')}
        />
        
               </Box>

               <Box className="flex flex-col justify-end">
               <Select data={[
        { value: 'LON', label: 'London' },
        { value: 'CHI', label: 'China' },
        { value: 'NGN', label: 'Nigeria' },
        { value: 'FRN', label: 'France' },

      ]} type="text" placeholder="BOS" 
      checkIconPosition="right"
       color="black"  label='Destination'
       key={flightForm.key('destination')}
       {...flightForm.getInputProps('destination')}
        />
       
               </Box>

                
                <DateInput valueFormat="YYYY-MM-DD" 
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
    </>
  )
}

export default SearchFlightForm
