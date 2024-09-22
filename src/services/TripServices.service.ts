import { privateApi } from "../api";


class TripServices{

    async CreateTrip(){
        try{
            privateApi.post('')
        }catch(error){
            console.log(error)
        }
    }
}

export default TripServices;