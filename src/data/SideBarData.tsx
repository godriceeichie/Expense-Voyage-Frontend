import { IoCartOutline, IoBagAddOutline} from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { TbShoppingBag, TbCategoryPlus,TbListDetails  } from "react-icons/tb";
import { CiBoxList } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleGroup  } from "react-icons/fa6";



export const Menus =[
   
    
    {
        controlIcon: <IoCartOutline />,
        controlTxt: 'eCommerce',
        panel: [
            {
                icon: <IoCartOutline />,
                text: 'Dashboard',
                list: []
            },
            {
                icon: <FiBookOpen />,
                text: 'Products',
                list: [
                    {
                        subSecIcon: <TbShoppingBag />,
                        subText: 'Product List',
                        link: 'product-list'
                    },
                    {
                        subSecIcon: <IoBagAddOutline />,
                        subText: 'Add Product',
                        link: 'add-product'
                    },
                    {
                        subSecIcon: <TbCategoryPlus />,
                        subText: 'Category List',
                        link: 'category-list'
                    },
                ]
            },
            {
                icon: <TbTruckDelivery />,
                text: 'Order',
                list: [
                    {
                        subSecIcon: <CiBoxList  />,
                        subText: 'Order List',
                        link: 'order-list'
                    },
                    {
                        subSecIcon: <TbListDetails  />,
                        subText: 'Order Details',
                        link: 'order-details'
                    },
                ]
            },
            {
                icon: <IoIosPeople  />,
                text: 'Customer',
                list: [
                    {
                        subSecIcon: <FaPeopleGroup    />,
                        subText: 'Customer List',
                        link: 'customer-list'
                    },
                    {
                        subSecIcon: <TbListDetails  />,
                        subText: 'Customer Details',
                        link: 'customer-details'
                    },
                ]
            }
        ]
    }
]