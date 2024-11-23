
/* SCSS LINK */
import '../Shopbycategories/Categories.scss';

function ShopByCategories(){

    return(

        <>
        
        <div className="ShopByCategories_Section"> 

            <div className="text">
                <h3>Shop by categories
                </h3>
            </div>
            <div className="images">
                <div className="image">
                    <img src={require('../../../../assets/Images/HomePageImages/ShopByCategory1.gif')}/>
                    <p>Sexual Wellness</p>
                </div>

                <div className="image">
                    <img src={require('../../../../assets/Images/HomePageImages/ShopByCategory2.png')}/>
                    <p>Period care</p>
                </div>

                <div className="image">
                    <img src={require('../../../../assets/Images/HomePageImages/ShopByCategory3.png')}/>
                    <p>Intimate care</p>
                </div>
                <div className="image">
                    <img src={require('../../../../assets/Images/HomePageImages/ShopByCategory4.png')}/>
                    <p>Hair Removal</p>
                </div>
                <div className="image">
                    <img src={require('../../../../assets/Images/HomePageImages/ShopByCategory5.png')}/>
                    <p>Kits & Combos</p>
                </div>
                <div className="image">
                    <img src={require('../../../../assets/Images/HomePageImages/ShopByCategory6.png')}/>
                    <p>Toilet Hygiene</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopByCategories;