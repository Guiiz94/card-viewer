import { useEffect, useState } from "react"
import Card from "./Card"
import '../style/deck.scss'
import axios from "axios"
import { Car } from "../dto"


const Deck = () => {

    const [collection, setCollection] = useState<Car[]>([])

    useEffect(() => {
        const cancelTokenSrc = axios.CancelToken.source();
        
        const fetchData = async () => {
          try {
            // const uri = 'http://localhost:3001/cards/'
            const uri = './data/new-collection.json'
            const response = await axios.get(uri, {
              cancelToken: cancelTokenSrc.token,
            });
            console.log(response);
            // setCollection(response.data);
            setCollection(response.data.cards);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      
        return () => cancelTokenSrc.cancel();
      }, []);
      

    return (
        <div className="deck">
            {collection.map((card, index) =>(
                <Card key={index} description={card.description} name={card.name as string} rarity_index={1} rarity={card.attributes[1].value as string} image={card.image as string}/>
            ))}
        </div>
    )
}

export default Deck