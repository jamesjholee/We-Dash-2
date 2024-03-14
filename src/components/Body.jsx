import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";

const Body = () => {
  const [listOfResturatnts, setListOfResturants] = useState([])

  useEffect(() => {
    fetchResturantData()
  }, [])

  const fetchResturantData = async () => {
    const url = 'https://restaurants222.p.rapidapi.com/search';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '76fed98f2fmsh16888481dc68fdap101c16jsne879e66e2075',
        'X-RapidAPI-Host': 'restaurants222.p.rapidapi.com'
      },
      body: new URLSearchParams({
        location_id: '60763',
        language: 'en_US',
        currency: 'USD',
        offset: '0'
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.results?.data);
      setListOfResturants(result.results.data)
    } catch (error) {
      console.error(error);
    }
  }

  return listOfResturatnts.length === 0 ? <div>loading....</div> : (
    <div className="body">
      <div className="filter">
        <button onClick={() => {
          console.log('button click')
        }}>
          Top rated Resturants
        </button>
      </div>
      <div className="resturant__containter">
        {listOfResturatnts.map((resData, idx) => {
          return <ResturantCard resData={resData} key={idx}/>
        })}
      </div>
    </div>
  )
}

export default Body