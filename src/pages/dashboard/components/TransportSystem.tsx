import { Tabs } from "@mantine/core"
import { GiCommercialAirplane } from "react-icons/gi";

const TransportSystem = () => {
  return (
    <>
      <Tabs>
        <Tabs.List>
            <Tabs.Tab value="Flight" leftSection={<GiCommercialAirplane />}>
            
            </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </>
  )
}

export default TransportSystem
