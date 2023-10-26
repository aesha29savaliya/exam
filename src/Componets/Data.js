import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Data = () => {
     const params = useParams();
     const [connect, setConnect] = useState();
     const [data, setData] = useState([]);

     useEffect(() => {
          setConnect(params.id);
          axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
               setData(res.data);
          });
     }, [params.id]);

     const filter = data.filter((data) => data.id == connect);
     return (
          <div>
               {
                    filter.map((i, id) => (
                         <h1 key={id}>{i.id}.{i.title}</h1>
                    ))
               }
          </div>
     );
}

export default Data
