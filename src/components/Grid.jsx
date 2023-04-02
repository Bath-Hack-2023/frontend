// import react stuff
import React, { useState } from "react";

// import rfcs
import { Rating } from "react-simple-star-rating";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Rating.css";
import "../css/List.css";

export default function Grid(props) {
	const { recommendationData } = props;
	console.log(recommendationData);

	// const carbon_scalar_dict = {
	// 	10000:
	// }

	const [rating, setRating] = useState(25);
	const handleRating = (rate) => {
		setRating(rate);
	};
	return (
		<div className="results">
			{/* <Container className="star-container">
        <Row>
          
        </Row>
      </Container> */}

			<Container className="details-container">
				<Row className="col-heading colour">
					<Col xs={2}>Co2</Col>
					<Col xs={10}>Details</Col>
				</Row>
				{console.log("before recommendation map")}
				{recommendationData &&
					recommendationData.map((recommendation, n) => {
						return (
							<Row className="details-row">
								{console.log("in recommendation loop")}
								<Col xs={2}>
									KG of CO2: {recommendation.product_co2}
									<img src="../logos/co2_1.png" alt="co2" />
								</Col>
								<Col xs={10}>
									<div class="uvp-list list">
										<ul>
											<li>
												{recommendation.product_title}
											</li>
											<li>
												{recommendation.manufacturer}
											</li>
											<li>
												Number of trees need to be
												planted to offset this purchase:
												{recommendation.product_co2 /
													22.2}
											</li>
											<li>
												<Rating
													onClick={handleRating}
													size="20"
													allowFraction
													readonly={true}
													initialValue={rating}
												/>
											</li>
										</ul>
									</div>
									<div className="badge-container">
										<Badge bg="info">
											Recommendation {n}
										</Badge>
									</div>
								</Col>
							</Row>
						);
					})}
				{/* <Row className="details-row">
					<Col xs={2}>
						72.9 kgco2
						<img src="../logos/co2_1.png" alt="co2" />
					</Col>
					<Col xs={10}>
						<div class="uvp-list list">
							<ul>
								<li>Title: Apple Iphone</li>
								<li>Manufacture: Apple</li>
								<li>Number of trees need to be planted: 50</li>
								<li>
									<Rating
										onClick={handleRating}
										size="20"
										allowFraction
										readonly={true}
										initialValue={2.5}
									/>
								</li>
							</ul>
						</div>
						<div className="badge-container">
							<Badge bg="success">Co2 Winner</Badge>
						</div>
					</Col>
				</Row>

				<Row className="details-row">
					<Col xs={2}>
						72.9 kgco2
						<img src="../logos/co2_1.png" alt="co2" />
					</Col>
					<Col xs={10}>
						<div class="uvp-list list">
							<ul>
								<li>Title: Apple Iphone</li>
								<li>Manufacture: Apple</li>
								<li>Number of trees need to be planted: 50</li>
								<li>
									<Rating
										onClick={handleRating}
										size="20"
										allowFraction
										readonly={true}
										initialValue={2.5}
									/>
								</li>
							</ul>
						</div>
						<div className="badge-container">
							<Badge bg="primary">Statisfaction Winner</Badge>
						</div>
					</Col>
				</Row>

				<Row className="details-row">
					<Col xs={2}>
						72.9 kgco2
						<img src="../logos/co2_1.png" alt="co2" />
					</Col>
					<Col xs={10}>
						<div class="uvp-list list">
							<ul>
								<li>Title: Apple Iphone</li>
								<li>Manufacture: Apple</li>
								<li>Number of trees need to be planted: 50</li>
								<li>
									<Rating
										onClick={handleRating}
										size="20"
										allowFraction
										readonly={true}
										initialValue={2.5}
									/>
								</li>
							</ul>
						</div>
						<div className="badge-container">
							<Badge bg="warning">Best Value</Badge>
						</div>
					</Col>
				</Row>

				<Row className="details-row">
					<Col xs={2}>
						72.9 kgco2
						<img src="../logos/co2_1.png" alt="co2" />
					</Col>
					<Col xs={10}>
						<div class="uvp-list list">
							<ul>
								<li>Title: Apple Iphone</li>
								<li>Manufacture: Apple</li>
								<li>Number of trees need to be planted: 50</li>
								<li>
									<Rating
										onClick={handleRating}
										size="20"
										allowFraction
										readonly={true}
										initialValue={2.5}
									/>
								</li>
							</ul>
						</div>
						<div className="badge-container">
							<Badge bg="danger">Highest Co2</Badge>
						</div>
					</Col>
				</Row> */}
			</Container>
		</div>
	);
}
