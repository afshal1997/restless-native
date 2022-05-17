import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const MainBanner = () => {
    let history = useHistory();
    return (
        <div className="mobileViewPadding">
            <Container>
                <div className='MainBanner my-5'>
                    <Col lg={4}>
                        <button className='backBtn' onClick={() => history.goBack()}>
                            <FontAwesomeIcon icon={faArrowLeftLong} /> BACK
                        </button>
                    </Col>
                    <Col lg={8} className='m-auto'>
                        <h2>Sailing Rules</h2>
                        <h3>Thank you for joining us on The sea with Restless Native!!</h3>
                        <div className="rules">
                            <h4>
                                To make your expedition as fun and as safe as possible, we ask that you adhere to the following “dues and don’ts“ while aboard any of our vessels.
                            </h4>
                            <h4>
                                NO smoking-all of our vessels are strictly a non-smoking environment. If you have a severe nicotine addiction, we would kindly request using a vape outside on the aft deck only.
                            </h4>
                            <h4>
                                NO red wine-on boats, drinks spill. Red wine mixes with salt water and becomes…PAINT!
                                We have taken the time to paint our boats in the colors that we prefer, red isn’t one of them.
                            </h4>
                            <h4>
                                NO glass-on boats, items spill and can fall off of tables in the cockpit or Galley and shatter. Since this is a “barefoot“ environment, injuries are likely. If glass is the only method of transportation, we can transfer it to a shatterproof or plastic container for you.
                            </h4>
                            <h4>
                                NO Shoes-this is a “barefoot environment.”  You will find that Barefeet give way better traction!
                            </h4>
                            <h4>
                                NO pets-we love our pets, too! But a yacht is not the place for our furry friends.  If you’re traveling with your pets, we can help make arrangements for them to be looked after while you are on the High Seas!
                            </h4>
                            <h4>
                                NO hairdryers or flat irons-don’t worry, you already look great! Those appliances are going to blow a fuse and make Poseidon really angry.
                            </h4>
                            <h4>
                                NO hard luggage-suitcases, roller bags or any type of hard-shell luggage is prohibited. It doesn’t collapse, moves around and damages the boat interior. Soft luggage, hand luggage, and duffel bags are the way to go!
                            </h4>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
    )
}

export default MainBanner