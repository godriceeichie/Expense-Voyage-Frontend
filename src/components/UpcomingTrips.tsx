import { Carousel } from '@mantine/carousel';
import classes from '../styles/Demo.module.css';
import { Box, Button, Flex, Text, Tooltip } from '@mantine/core';
import { BsCalendarDate } from "react-icons/bs";
import Autoplay from 'embla-carousel-autoplay';
import '../styles/dashHome2.css';
import { FaLocationArrow } from "react-icons/fa";
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const UpcomingTrips = () => {
    const autoplay = useRef(Autoplay({ delay: 10000 }));
  return (
    <>

       <Box className={classes.carouselContainer && 'flex flex-col gap-3'}  h={'100%'}>
        <Box>
            <Text className='text-xl font-semibold' color='#5b5865'>Upcoming Trips</Text>
        </Box>
       <Carousel slideSize="100%" plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}  w={'100%'} align="start" bg={'crimson'} height={440}  controlSize={24} loop dragFree withIndicators >
      <Carousel.Slide bg={'green'} w={'100%'}>
        <Box className='sliderCon w-full flex items-center justify-center h-full'>
            <Link to={'/auth'} className='w-3/4 h-3/5'>
            <Box className=' tripInfoBox flex items-center justify-center flex-col gap-3 ' w={'100%'} h={'100%'}>
                <Text className='text-center text-3xl font-semibold'>The Maldives!</Text>
                <Text>A Vacation for the Holidays</Text>
                <Flex className='tripInfoFlex flex-col  gap-3'>
                    <Flex className='gap-3'>
                    <Tooltip withArrow arrowSize={5} label='24-09-2024' className='cursor-pointer'>
                        <Box className='tripInfoIcon cursor-pointer flex items-center justify-center rounded-full border-solid border-2 border-black'>
                        <BsCalendarDate fontSize={'24px'} />
                        </Box>
                    </Tooltip>
                    <Tooltip withArrow arrowSize={5} className='cursor-pointer' label='The Maldives'>
                        <Box className='tripInfoIcon cursor-pointer flex items-center justify-center rounded-full border-solid border-2 border-black'>
                        <FaLocationArrow fontSize={'17px'} />
                        </Box>
                    </Tooltip>
                    </Flex>
                    <Button component='a' href='/auth/login' color='black' className='bg-primary-color' >View Trip</Button>
                </Flex>
            </Box>
            </Link>
        </Box>
      </Carousel.Slide>
      <Carousel.Slide bg={'#004010'}>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
       </Box>
    </>
  )
}

export default UpcomingTrips
