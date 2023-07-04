import axios, {CancelToken} from 'axios'
import { Car } from '../../dto'

export class CardService {
    static async getCards(token? : CancelToken):Promise<Car[]>{
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        // const array = await response.json()        
        const response = await axios.get('../data/car-classic.json',{
            cancelToken:token
        })
        if(response.data && Array.isArray((response.data)))return response.data
        return []
    }
    static async getCar(poistId:string,token?:CancelToken):Promise<Car|null>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ poistId,{
            cancelToken:token
        })
        if(response.data)return response.data
        return null
    }
}