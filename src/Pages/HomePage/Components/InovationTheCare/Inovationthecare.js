
import '../InovationTheCare/Inovationthecare.scss';

function Inovationthecare() {

    return (

        <>
            <div className="Inovation_section">
                <div className="Inovation_text">
                    <h3>Innovations That Care</h3>
                </div>

                <div className="images">
                    <div className="image">
                        <img src={require('../../../../assets/Images/HomePageImages/Inovationthecare1.jpg')} />
                    </div>
                    <div className="image">
                        <img src={require('../../../../assets/Images/HomePageImages/Inovationthecare2.jpg')} />
                    </div>
                    <div className="image">
                        <img src={require('../../../../assets/Images/HomePageImages/Inovationthecare3.jpg')} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inovationthecare;