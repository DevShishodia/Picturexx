import { Container, Row, Col } from 'react-bootstrap'
import ImgCard from "./ImgCard";
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};


const ImageList = (props) => {
   
    return (
        <>
            <Container>
                <Row>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {props?.imageData?.map((item, idx) => {
                            return (<Col  key={idx} > <ImgCard data={item} /> </Col>)
                        }

                        )}
                    </Masonry>
                </Row>
            </Container>
        </>
    )
}

export default ImageList;