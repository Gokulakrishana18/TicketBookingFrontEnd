import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import{Card,
CardHeader,
CardBody,
CardFooter,
Typography,
Button,
} from "@material-tailwind/react";

const TheaterListCard = ({ theaterList, toparent }) => {

  const [id, setId] = useState();
  const getTheId = (id) => {
    setId(id);
    toparent(id);
  }


  return (
    <div className='conatiner'>
     
        {theaterList?.map((e) => (
          <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
            // <div className='card-body'>
            //   <h5 className='card-text'>{e.name}</h5>
            //   <p className='card-text'>{e.location}</p>
            //   <button className="btn btn-primary" onClick={getTheId.bind(null, e.id)}>Book  the ticket</button>
            // </div>
          
        ))}
      </div>
   
  );
}
export default TheaterListCard;