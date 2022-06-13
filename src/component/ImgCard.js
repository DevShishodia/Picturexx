import { Card } from 'react-bootstrap';
import { Link  } from 'react-router-dom';

const ImgCard = (props) => {
  
    return (
        <>

            <Card className="bg-dark text-white mb-4" >
                <Link to={`/photo/${props.data.id}`}>
                    <Card.Img src={props.data?.urls?.thumb} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>{props.data?.first_name} {props.data?.last_name}</Card.Title>
                        <Card.Text>{props?.data?.description}</Card.Text>
                        <Card.Text>{props.data?.created_at}</Card.Text>
                    </Card.ImgOverlay>
                </Link>
            </Card>

        </>
    )
}

export default ImgCard;