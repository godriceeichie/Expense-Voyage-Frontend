import { Box,  Group, Stepper,  Tabs,  Text,  rem } from "@mantine/core"
import { useState } from "react";
import { FaRegCalendarAlt, FaRegCalendarCheck  } from "react-icons/fa";
import { SearchFlightForm } from "../../components";
import { CreateTrip, SearchHotel } from "./components";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaPlane } from "react-icons/fa";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { LuShip } from "react-icons/lu";

const AddTrip = () => {
    const [active, setActive] = useState(0);
    // const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const [location, setLocation] = useState('')
    const [Destination, setDestination] = useState('')
    const [depatureDate, setDate] = useState<Date | null>(new Date())
    

    const handleTripData = (data: {
        tripName: string;
        location: string;
        destination: string;
        start_date: Date | null;
        end_date: Date | null;
        budget: number;
        nextStep: number
      }) => {
        console.log("Received trip data:", data);
        // const date = data.start_date
        setLocation(data.location)
        setDestination(data.destination)
        setActive(data.nextStep)
        setDate(data.start_date)
      };

      const handleFlightDate = (data: {
        nextStep: number
      }) =>{
        setActive(data.nextStep)
      }
      const [hotelID, setHotelID] = useState('')
   const handleFindHotel = (data: {
    nextStep: number
    hotelId: string
   })=> {
    setActive(data.nextStep)
    setHotelID(data.hotelId)
   }
      
  return (
    <>
        <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step icon={<FaRegCalendarAlt />} completedIcon={<FaRegCalendarCheck className="text-white" width={rem(18)} height={rem(18)} />} label="Create a Trip" description="Pick a Date">
        <CreateTrip onSubmitTripData={handleTripData}/>
        </Stepper.Step>
        <Stepper.Step icon={<FaPlane height={rem(18)} width={rem(18)}/>} completedIcon={<FaPlaneCircleCheck  />} label="Transportation" description="Pick a means of Transport">
          {/* <PickLocationPage/> */}
            <Text className="text-center font-bold text-3xl my-5">Choose a Means of Transportation</Text>
          <Tabs color="green"   defaultValue={'Flight'}>
        <Tabs.List>
            <Tabs.Tab value="Flight" leftSection={<GiCommercialAirplane />}>
            Flight
            </Tabs.Tab>
            <Tabs.Tab value="Ship" leftSection={<LuShip />}>
            Ship
            </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Flight" >
        <Box className="">
        <SearchFlightForm  data={{destination: Destination, location: location, time: depatureDate, onFlightSelect: handleFlightDate}} />
        </Box>
        
        </Tabs.Panel>
      </Tabs>
        </Stepper.Step>
        <Stepper.Step label="Flight" description="Book a Flight">
          {hotelID}
            <SearchHotel  data={{location: Destination, onHotelSelect: handleFindHotel}}/>
            

        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
        {/* <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button> */}
      </Group>
    </>
  )
}

export default AddTrip
