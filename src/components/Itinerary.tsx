import { useState } from 'react';
import { Table, Checkbox, Avatar, Flex, Tooltip, Button, UnstyledButton, Box, Text, Select, Input, Pagination } from '@mantine/core';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import {ItineraryData} from '../data/index'
import {ChunckArray} from '../scripts/index'


const Itinerary = () => {
    const [activeItems, setItems] = useState(6)
    const [activePage, setPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');

    const filteredData = ItineraryData.filter((element) => {
        // Filter by search term
        const matchesSearch = element.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              element.serialNo.toString().includes(searchTerm)
                              || element.status.toLowerCase().includes(searchTerm.toLowerCase())
                            ||element.price.includes(searchTerm)
        // Filter by selected status
        const matchesStatus = selectedStatus ? element.status === selectedStatus : true;
    
        return matchesSearch && matchesStatus;
      });

      const data = ChunckArray(

        filteredData.map((_, index) => ({ id: index, name: _.name, image: _.image, serialNo: _.serialNo, price: _.price , status: _.status, date: _.date})),
        activeItems 
    );
   
   
    
    const rows = data[activePage -1]?.length ? data[activePage -1].map((element) => (
        <Table.Tr
            key={element.name}
            bg={selectedRows.includes(element.serialNo) ? 'var(--mantine-color-blue-light)' : undefined}
            className='allConTitle' fz={'16px'} fw={400}
        >
            <Table.Td>
                <Checkbox
                    aria-label="Select row"
                    checked={selectedRows.includes(element.serialNo)}
                    onChange={(event) =>
                        setSelectedRows(
                            event.currentTarget.checked
                                ? [...selectedRows, element.serialNo]
                                : selectedRows.filter((serialNo) => serialNo !== element.serialNo)
                        )
                    }
                />
            </Table.Td>
            <Table.Td className='bluetext'>#{element.serialNo}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>
                <Avatar src={element.image} />
            </Table.Td>
            <Table.Td>{element.status}</Table.Td>
            <Table.Td>{element.price}</Table.Td>
            <Table.Td>{element.date}</Table.Td>
            <Table.Td>
                <Flex className='items-center gap-2'>
                    <Tooltip label='Delete' withArrow arrowSize={8} bg={'crimson'}>
                        <UnstyledButton className="actionBtn">
                            <RiDeleteBin6Line />
                        </UnstyledButton>
                    </Tooltip>
                    <Tooltip label='Edit' withArrow arrowSize={8} bg={'blue'}>
                        <UnstyledButton className="actionBtn">
                            <TbEdit />
                        </UnstyledButton>
                    </Tooltip>
                    {/* <Tooltip label='Delete' withArrow arrowSize={8} bg={'crimson'}>
                <UnstyledButton className="actionBtn">
                <RiDeleteBin6Line />
                </UnstyledButton>
            </Tooltip> */}
                </Flex>
            </Table.Td>
        </Table.Tr>
    )) :  <Table.Tr>
    <Table.Td colSpan={8} style={{ textAlign: 'center' }}>
      <Text fz={'17px'} fw={600} color='#C2C0D7'>No order found</Text>
    </Table.Td>
  </Table.Tr>
  return (
    <>
        <Box className='w-full flex flex-col gap-5'>
            <Box className='w-full'>
                <Flex className='justify-between orderHead'>
                <Box className='flex items-center  gap-4' >
                <Text color='#C2C0D7'>Show</Text>
                <Box w={'80px'}>
                <Select data={['6', '10', '15', '25']} defaultValue={'6'} className='' bg={'transparent'} onChange={(e)=> setItems(Number(e))} />
                </Box>
                <Button bg={'#004010'}>
                    + Add Trip
                </Button>
                </Box>
                <Box className='flex items-center gap-4'>
                    <form action="">
                        <Input type='search' placeholder='Search Trip' leftSection={<FaSearch />}
                         value={searchTerm} 
                         onChange={(e) => setSearchTerm(e.currentTarget.value)}
                         />
                    </form>
                    <Box w={'170px'}>
                    <Select data={['Pending', 'Delivered', 'Cancelled']} placeholder='Select status' className='selectSize' clearable
                     value={selectedStatus}
                     onChange={(e) => setSelectedStatus(e || '')}
                      />
                    </Box>
                </Box>
                </Flex>
            </Box>
               <Box className='tableordering'>
               <Table className='w-full'  verticalSpacing={'xs'} horizontalSpacing={'xs'}>
                    <Table.Thead>
                        <Table.Tr className='allConTitle' fz={'17px'}>
                            <Table.Th />
                            <Table.Th>SerialNo</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Image</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Price</Table.Th>
                            <Table.Th>Date</Table.Th>
                            <Table.Th>Actions</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{filteredData? rows : <Text>no order found</Text>}</Table.Tbody>
                    <Table.Caption>
                        List of all recent orders
                    </Table.Caption>
                </Table>
               </Box>

                <Box className='flex w-full justify-end'>
                <Pagination  total={data.length} value={activePage} color="#7367f0" onChange={setPage} mt="sm" />
                </Box>
            </Box>
    </>
  )
}

export default Itinerary
