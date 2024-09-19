import { Box, Button, Flex, Group, Stepper, Text, rem } from "@mantine/core"
import { useState } from "react";
import { FaRegCalendarAlt, FaRegCalendarCheck, FaLocationArrow  } from "react-icons/fa";
import { DatePicker } from '@mantine/dates';
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { FlightServices } from "../../services";
import { SearchFlightForm } from "../../components";
import { PickLocationPage } from "./components";


const AddTrip = () => {
    const flightServices = new FlightServices()
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    // Picked Date value
    const [StartDate, setStartDate] = useState<Date | null>(null);
    const [EndDate, setEndDate] = useState<Date | null>(null);
  return (
    <>
        <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step icon={<FaRegCalendarAlt />} completedIcon={<FaRegCalendarCheck className="text-white" width={rem(18)} height={rem(18)} />} label="First step" description="Pick a Date">
        <Box className="flex flex-col w-full items-center gap-9 p-7">
            <Text className="text-2xl font-semibold">Pick a date for your Trip</Text>
        <Flex className="justify-between px-8 w-full">
        <Box className="flex flex-col gap-3 items-center">
            <Text>Start Date</Text>
        <DatePicker value={StartDate} size="md" onChange={setStartDate} />
        </Box>
        <Box className="flex flex-col gap-3 items-center">
            <Text>End Date</Text>
        <DatePicker value={EndDate} size="md" onChange={setEndDate} />
        </Box>
        </Flex>
        </Box>
        </Stepper.Step>
        <Stepper.Step icon={<MdOutlineEditLocationAlt height={rem(18)} width={rem(18)}/>} completedIcon={<FaLocationArrow />} label="Destination" description="Pick a Place">
          <PickLocationPage/>
        </Stepper.Step>
        <Stepper.Step label="Flight" description="Book a Flight">
            <SearchFlightForm/>
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  )
}

export default AddTrip
