import '../Footer/Footer.scss';

/* REACT ICONS */
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {

    return (

        <>
            <hr />
            <div className="Footer_section">

                <div className="PERIOD CARE">

                    <ul>
                        <p>PERIOD CARE</p>
                        <li><a>SHOP BY PRODUCT</a></li>
                        <li><a>MENSTRUAL CUPS</a></li>
                        <li><a>MENSTRUAL LUBRICANT</a></li>
                        <li><a>MENSTRUAL CUP INSERTION</a></li>
                        <li><a>MENSTRUAL CUP</a></li>
                        <li><a>TAMPONS</a></li>
                        <li><a>SANITARY PADS</a></li>
                        <li><a>PERIOD PANTIES</a></li>
                        <li><a>PANTY LINERS</a></li>
                        <li><a>PERIOD PAIN RELIEF</a></li>
                        <li><a>SANITARY DISPOSAL BAGS</a></li>
                        <li><a>ELECTRIC HOT WATER BAG</a></li>
                        <li><a>PERIOD STAIN REMOVER</a></li>
                        <li><a>PERIOD KITS AND COMBOS</a></li>

                    </ul>
                </div>
                <div className="PERIOD CARE">

                    <ul>
                        <p>INTIMATE CARE</p>
                        <li><a>SHOP BY PRODUCT</a></li>
                        <li><a>UNDERARM SWEAT PADS</a></li>
                        <li><a>MATERNITY BREAST PADS </a></li>
                        <li><a> RASH CREAM</a></li>
                        <li><a> INTIMATE WASH</a></li>
                        <li><a> INTIMATE WIPES</a></li>
                        <li><a>  BUM SCRUB & CREAM</a></li>
                        <li><a>  FASHION TAPE</a></li>
                        <li><a> UNDERARM DEODORANT ROLL ONS</a></li>
                        <li><a> SHOP BY CONCERN</a></li>
                        <li><a> VULVA AND BUM CARE</a></li>
                        <li><a> UNDERARM SWEAT</a></li>
                        <li><a> UNDERARM LIGHTENING</a></li>
                        <li><a> INTIMATE AREA RASHES</a></li>
                    </ul>
                </div>




                <div className="HAIR REMOVAL">

                    <ul>
                        <p>HAIR REMOVAL</p>
                        <li><a>SHOP BY PRODUCT</a></li>
                        <li><a>BODY RAZORS AND CARTRIDGES  </a></li>
                        <li><a>   FACE AND EYEBROW RAZORS</a></li>
                        <li><a>  HAIR REMOVAL CREAM</a></li>
                        <li><a>    ELECTRIC RAZORS</a></li>
                        <li><a>   SHAVING GEL</a></li>
                        <li><a>HAIR REMOVAL KITS</a></li>
                        <li><a>SHOP BY CONCERN</a></li>
                        <li><a> FACE HAIR REMOVAL</a></li>
                        <li><a> BODY HAIR REMOVAL</a></li>
                        <li><a> EYEBROW AND UPPER LIP</a></li>
                    </ul>
                </div>


                <div className="TOILET HYGIENE">

                    <ul>
                        <p>TOILET HYGIENE</p>
                        <li><a>SHOP BY PRODUCT</a></li>
                        <li><a>PEEBUDDY FEMALE.
                        </a></li>
                        <li><a>   PAPER TOILET SEAT COVERSHOP BY PRODUCT</a></li>
                        <li><a>  TOILET SANITISER SPRAY</a></li>
                        <li><a> SHOP BY CONCERN</a></li>
                        <li><a>DIRTY WASHROOMS UTIS OR INFECTIONS</a></li>
                        <li><a>
                            ODOUR AND GERMS</a></li>
                    </ul>
                </div>


                <div className="PERSONAL SAFETY">

                    <ul>
                        <p>PERSONAL SAFETY</p>
                        <li><a>PEPPER SPRAY </a></li>
                        <li><a> EMERGENCY ALARM</a></li>
                    </ul>
                </div>


                <div className="SEXUAL WELLNESS">

                    <ul>
                        <p>SEXUAL WELLNESS</p>
                        <li><a>CONDOMS </a></li>
                        <li><a> DOTTED CONDOMS</a></li>
                        <li><a> ULTRA THIN CONDOMS</a></li>
                        <li><a> RIBBED CONDOMS</a></li>
                        <li><a> LUBRICANTS</a></li>
                        <li><a> PREGNANCY TEST KIT</a></li>
                        <li><a> CONDOM DISPOSABLE BAG</a></li>
                        <li><a>INTIMATE WIPES</a></li>
                        <li><a>SEXUAL WELLNESS KIT</a></li>
                    </ul>
                </div>
            </div>

            <div className='copy_right'>
                <div className='text'>
                    <p className='fw-semibold'>© 2024 Sirona Hygiene Private Limited</p>
                </div>

                <div className='Follow_Us'>
                    <p className='fw-semibold'>Follow Us</p>
                    <FaFacebook className='fs-2 mx-1' />
                    <AiFillTwitterCircle className='fs-2 mx-1' />
                    <FaInstagramSquare className='fs-2 mx-1' />
                    <FaLinkedin className='fs-2 mx-1' />
                    <FaYoutube className='fs-2 mx-1' />
                </div>
            </div>

        </>
    )
}

export default Footer;