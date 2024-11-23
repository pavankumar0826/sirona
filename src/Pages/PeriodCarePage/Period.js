import { Link } from 'react-router-dom';
import '../PeriodCarePage/Period.scss';


function PeriodCare() {



    return (

        <div className="PeriodCare_Section">

            <div className='nav_links'>
                <Link to="/" className="nav-item text-black">Home /</Link>
                <Link to="/periodcare" className='nav-item text-black fw-bold'> Period Care</Link>
                <hr />
            </div>

            <div className="text">
                <h2>PERIOD CARE</h2>
            </div>

            <div className="products">

                <div className="product">

                    <img src={require('../../assets/Images/PeriodCareImages/Image1.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>

                </div>


                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image2.png')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>


                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image3.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>


                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image4.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>

                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image5.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>


                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image6.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>

                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image7.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>

                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image8.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>

                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image9.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>


                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image10.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>


                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image11.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>

                <div className="product">
                    <img src={require('../../assets/Images/PeriodCareImages/Image12.jpg')} />
                    <h5 className="mt-5">Stretch Marks Body Butter – With Avocado Oil, Shea Butter...</h5>
                    <p>StretchMarks Body Butter (100gm)</p>
                    <h5>₹499</h5>
                </div>

            </div>

        </div >
    )
}

export default PeriodCare;