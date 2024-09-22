// import usePrivateApi from "../hooks/usePrivateApi";
// import { CreateTripType } from "../types";


// const privateApi = usePrivateApi()
// class TripServices {

//     async CreateTrip(data: CreateTripType) {
//         try {
//             const response = await privateApi.post('/trip/', {
//                 trip_name: data.trip_name,
//                 destination: data.destination,
//                 start_date: data.start_date,
//                 end_date: data.end_date,
//                 budget: data.budget
//             },
//         {
//             withCredentials: true
//         })
//         console.log(response.data)
//         return response;
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

// export default TripServices;