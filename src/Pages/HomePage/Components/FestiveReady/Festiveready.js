import '../FestiveReady/Festiveready.scss';

function FestiveReady() {

    return (

        <>

            <div className="FestiveReady_Section">
                <div className="text">
                    <h3>Get Festive Ready</h3>
                </div>

                <div className="images">
                    <div className="image">
                        <img src={require('../../../../assets/Images/HomePageImages/FestiveReady1.jpg')} />
                    </div>
                    <div className="image">
                        <img src={require('../../../../assets/Images/HomePageImages/FestiveReady2.jpg')} />
                    </div>
                    <div className="image">
                        <img src={require('../../../../assets/Images/HomePageImages/FestiveReady3.jpg')} />
                    </div>
                    <div className="image">
                        <img src={require('../../../../assets/Images/HomePageImages/FestiveReady4.jpg')} />
                    </div>
                </div>
            </div>

        </>
    )
}


export default FestiveReady;