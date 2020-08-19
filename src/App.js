import React from 'react'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import {CardDeck,Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment'
function App(props)
{
    return (
        <div>
            
                <h2>Suggested Topic</h2>
                <Button variant='dark' style={{paddingRight:'2'}}>More</Button>
                <div className='card'>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={image1} width='250px' height='160px'/>
                        <Card.Body>
                            <Card.Title style={{fontFamily:'arial'}}><b><center>Geography</center> </b></Card.Title>
                            <Card.Text>
                                10 Questions 2hr-30min.<br/>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated  {moment().startOf('hour').fromNow()}</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={image2} width='250px' height='160px' />
                        <Card.Body>
                            <Card.Title><b><center>Economics</center></b></Card.Title>
                            <Card.Text>
                            10 Questions 2hr.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated {moment().startOf('hour').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={image3} width='250px' height='160px' />
                        <Card.Body>
                            <Card.Title><b><center>History</center></b></Card.Title>
                            <Card.Text> 
                            10 Questions 2hr.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated {moment().startOf('hour').fromNow()}</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={image4} width='250px' height='160px' />
                        <Card.Body>
                            <Card.Title><b><center>Politics</center></b></Card.Title>
                            <Card.Text>
                            10 Questions 2hr-30min.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated {moment().startOf('hour').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                </div>

                 <hr/>
                
                <h2>Modules</h2>
                <Button variant='dark' style={{paddingRight:'2'}}>More</Button>
                <div className='card'>
                <CardDeck>
                    <Card width='300px' height='300px'>
                        <Card.Body>
                            <Card.Title style={{fontFamily:'arial'}}><b><center>Computer Graphics</center></b>
                            </Card.Title>
                        </Card.Body>
                    </Card>

                    <Card width='300px' height='300px'>

                        <Card.Body>
                            <Card.Title><b><center>Communication-Systems</center></b></Card.Title>

                        </Card.Body>

                    </Card>
                    <Card width='300px' height='300px'>

                        <Card.Body>
                            <Card.Title><b><center>Database-Management-System</center></b></Card.Title>

                        </Card.Body>

                    </Card>

                    <Card width='300px' height='300px'>
                       
                        <Card.Body>
                            <Card.Title><b><center>Computer Architecture</center></b></Card.Title>

                        </Card.Body>

                    </Card>
                </CardDeck>
                </div>

                <hr/>

         <h2>Flash Cards</h2>
         <Button variant='dark' style={{paddingRight:'2'}}>More</Button>
                <div className='card'>
                <CardDeck>

                    <Card width='300px' height='300px'>
                        <Card.Body>
                            <Card.Title><b><center>Chemistry</center></b></Card.Title>

                        </Card.Body>

                    </Card>
                    <Card width='300px' height='300px'>

                        <Card.Body>
                            <Card.Title><b><center>Physics</center></b></Card.Title>

                        </Card.Body>

                    </Card>

                    <Card width='300px' height='300px'>
                        <Card.Body>
                            <Card.Title><b><center>Biology</center></b></Card.Title>
                        </Card.Body>

                    </Card>
                    <Card width='300px' height='300px'>

           <Card.Body>
              <Card.Title><b><center>Mathematics</center></b></Card.Title>

           </Card.Body>

            </Card>
                </CardDeck>
            </div>            
            <div className='footer d-inline-block' style={{width:'100%',height:'80px', backgroundColor:'black',color:'white', fontSize:'20px'}}>
            <div className='copyright'>
                    <h5 className="text-center pt-3">© 2020 - 2021, All rights reserved.</h5>
                </div>
            </div>
            </div>
)
}
export default App
