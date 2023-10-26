import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

const Home = () => {
     const [data, setData] = useState([]);
     const [SelectedItem, setSelectedItem] = useState(null);

     useEffect(() => {
          axios.get("https://jsonplaceholder.typicode.com/todos")
               .then((res) => {
                    console.log(res.data);
                    setData(res.data);
               });
     }, []);
     console.log(data, "data");

     const handleClick = () => {
          setSelectedItem()
     }


     return (
          <div>
               <Navigation />

               <div className="card-container row bg-light-subtle">

                    {data.map((e, item) => {
                         return (
                              <>
                                   <div className="card" key={e.id}>
                                        <h4>Id: {e.id}</h4>
                                        <h6>Title: {e.title}</h6>
                                        <Link type='button' className='view' to={`/${e.id}`} onClick={handleClick}>View</Link>
                                   </div>

                                   <div>
                                        <div>
                                             {SelectedItem && (<>

                                                  <div>
                                                       <h4>Id : {SelectedItem.id}</h4>
                                                       <h6>Title : { SelectedItem.id}</h6>
                                                  </div>
                                             </>
                                             )}

                                        </div>
                                   </div>
                              </>
                         )
                    })}
               </div>

          </div>
     )
}

export default Home
