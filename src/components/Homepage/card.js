import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';


const Card = (props) => {
    return (
        <div className="Card">
                <CardImg top width="100% src=" alt="Card image tap"/>
                <CardBody>
                    <CardTitle tag="h5" className="mb-2 text-muted">Saint Seiya</CardTitle>
                    <CardText>Anime</CardText>
                    
                </CardBody>
            </Card>
        </div>
    );
};

export default Card;