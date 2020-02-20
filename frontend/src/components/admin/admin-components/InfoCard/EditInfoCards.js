import React from "react";
import { withRouter } from 'react-router-dom'
import InfoCard from "./EditInfoCard";
import './EditInfoCards.css'

const EditInfoCards = (props) => {
    console.log(props.token);

    return <div className='info-cards'>
        {Object.keys(props.fetchData).map((item, index) =>
            <InfoCard data={{ ...props.fetchData[item] }}
             token={props.token} 
             category={props.categories[index]} 
             className="card"
             key={index} />
       )}
    </div>
}

export default withRouter(EditInfoCards);