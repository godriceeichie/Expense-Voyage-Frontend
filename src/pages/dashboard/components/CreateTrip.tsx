import { Box, Button, Flex, NumberInput, Select, Text, TextInput } from "@mantine/core"
import { DateTimePicker } from "@mantine/dates"
import { MdCardTravel } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";
import { TbMapSearch } from "react-icons/tb";
import { useForm } from '@mantine/form';
import { useState } from "react";


interface CreateTripProps {
    onSubmitTripData: (data: {
      tripName: string;
      location: string;
      destination: string;
      start_date: Date | null;
      end_date: Date | null;
      budget: number;
      nextStep: number
    }) => void;
  }


const CreateTrip = ({onSubmitTripData }:CreateTripProps) => {

    const tripForm = useForm({
        mode: 'uncontrolled',
        initialValues: { tripName: '',location: '', destination: '', start_date: null as Date | null, end_date: null as Date | null, budget: 0 },
        validate: {
            tripName: (value)=> (value.length < 5? 'trip name cannot be less than 5 characters': null)
            ,
          location: (value) => (value.length < 2 ? 'Location must have at least 2 letters' : null),
          destination: (value) => (value.length < 2 ? 'Destination must have at least 2 letters' : null),
          budget: (value) => (value < 200 ? 'budget cannot be less than $200' : null),
          start_date: (value) => (value ? null: 'start date cannot be empty'),
          end_date: (value) => (value ? null: 'end date cannot be empty'),
        },
      });
      const today = new Date()
      const end_startDate = new Date(today)
      end_startDate.setDate(today.getDate() + 1)

      const [startDate, setStartDate] = useState<Date | null>();

  return (
    <>
      <form action="" onSubmit={tripForm.onSubmit((values)=>{
        onSubmitTripData({tripName:values.tripName, location: values.location, destination: values.destination, start_date: values.start_date, end_date: values.end_date, budget: values.budget, nextStep: 1})
        console.log(values)
      })} className="flex flex-col gap-5 mt-6">
        <Text className="text-center text-3xl font-bold">Trip Information</Text>
        <Box className="flex gap-5 justify-center items-center w-full">
            <TextInput label={'Trip name'} placeholder="Christmas Vacation" 
            leftSection={<MdCardTravel />}
            className="w-1/3 text-xl"
            key={tripForm.key('tripName')}
            {...tripForm.getInputProps('tripName')}
            />
            <Select 
            data={[
                { value: 'LON', label: 'London' },
                { value: 'CHI', label: 'China' },
                { value: 'NGN', label: 'Nigeria' },
                { value: 'FRN', label: 'France' },
              ]}
              searchable
              nothingFoundMessage="No Country found..."
              maxDropdownHeight={200}
              comboboxProps={{ shadow: 'md' }}
              className="w-1/3 text-xl"
              placeholder="London"
              label='Pick Location'
              rightSection={<PiMapPinAreaBold />}
              key={tripForm.key('location')}
              {...tripForm.getInputProps('location')}
            />

<Select 
            data={[
                { value: 'LON', label: 'London' },
                { value: 'CHI', label: 'China' },
                { value: 'NGN', label: 'Nigeria' },
                { value: 'FRN', label: 'France' },
              ]}
              searchable
               nothingFoundMessage="No Country found..."
               maxDropdownHeight={200}
               comboboxProps={{ shadow: 'md' }}
              className="w-1/3 text-xl"
              placeholder="Paris"
              label='Pick Destination'
              rightSection={<TbMapSearch />}
              key={tripForm.key('destination')}
              {...tripForm.getInputProps('destination')}
            />
        </Box>
      <Box className="flex flex-col w-full items-center gap-9 p-7">
            <Text className="text-2xl font-semibold">Pick a date for your Trip</Text>
        <Flex className="justify-center gap-5 w-full">
        <Box className="flex w-2/5 flex-col gap-3 items-center">
            {/* <Text>Start Date</Text> */}
        <DateTimePicker 
        className="w-full"
         valueFormat="DD MMM YYYY hh:mm A" placeholder="Pick a date and time" label='Start Date'  size="md" 
         defaultValue={startDate}
          minDate={new Date()}
          onChange={(date) => {
            setStartDate(date); 
            tripForm.setFieldValue('start_date', date); 
          }}
         key={tripForm.key('start_date')}
        //  {...tripForm.getInputProps('start_date')}
          />
        </Box>
        <Box className="flex  w-2/5 flex-col gap-3 items-center">
            {/* <Text>End Date</Text> */}
        <DateTimePicker
        className="w-full"
          valueFormat="DD MMM YYYY hh:mm A" 
          defaultValue={new Date()}
        //   minDate={new Date()}
        minDate={startDate ? new Date(startDate.getTime() + 24 * 60 * 60 * 1000) : new Date()} 
          placeholder="Pick a date and time" label='End Date'  size="md"
          key={tripForm.key('end_date')}
          {...tripForm.getInputProps('end_date')}

            />
        </Box>
        </Flex>
        </Box>
        <Box className="flex flex-col gap-5 justify-center items-center w-full">
            <Text className="text-2xl font-semibold text-center">What is your Budget?</Text>

           <NumberInput
                label="Enter Budget"
                prefix="$"
                placeholder="$500"
                allowNegative={false}
                allowDecimal={false}
                min={200}
                thousandSeparator=','
                defaultValue={40_000}
                className="w-1/3"
                key={tripForm.key('budget')}
                {...tripForm.getInputProps('budget')}
           />
        </Box>
        <Box className="w-full mt-5 flex justify-center items-center">
        <Button type="submit" className="w-2/5 bg-primary-color hover:bg-green-800">Add Trip</Button>
        </Box>
      </form>

      {/* <SearchHotel/> */}
    </>
  )
}

export default CreateTrip
