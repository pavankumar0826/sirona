
import '../BestSellers/Bestsellers.scss';

function BestSellers() {

    return (

        <>

            <div className="BestSelles_section">
                <div className='Heading'>
                    <h3>Our Bestsellers</h3>
                </div>
                <div className='images'>
                    <div className="image">
                        <img src={require('../../../../assets/Images/HomePageImages/BestSeller1.png')} />
                        <p>Reusable Menstrual Cup with Pouch for w...</p>
                        <h5>₹399</h5>
                    </div>
                    <div className="image">
                        <img src={require('../../../../assets/Images/HomePageImages/BestSeller2.png')} />
                        <p>Stretch Marks Body Butter (100gm)</p>
                        <h5>₹499</h5>
                    </div>
                    <div className="image">
                        <img src={require('../../../../assets/Images/HomePageImages/BestSeller3.jpg')} />
                        <p>PeeBuddy Female Urination Stand and Pee..</p>
                        <h5>₹307 <strike className="fw-light fs-6"> ₹325</strike></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSellers;