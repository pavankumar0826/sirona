import React from 'react';

function Productdetails() {

    function imagechanging(image) {
        let x = document.getElementsByClassName("image");
        let changingimage = document.getElementById("destination");
        changingimage.src = image;

    }



    return (

        <>

            <div class="container">

                <h1 class="text-center">Product Details</h1>
                <div className='row'>
                    <div class="col-lg-6">

                        <div className='image'>
                            <img className='w-25 image' src='https://s3.me-south-1.amazonaws.com/pubfiles-are.thesirona.com/site-images/1200x1200/menstrual-cup-medium-en-1.jpg' onClick={imagechanging('https://www.thesirona.com/_next/image?url=https%3A%2F%2Fs3.me-south-1.amazonaws.com%2Fpubfiles-are.thesirona.com%2Fsite-images%2F800x800%2Fmenstrual-cup-medium-en-2.jpg&w=384&q=75')} />
                        </div><br />

                        <div className='image'>
                            <img className='w-25 image' src='https://s3.me-south-1.amazonaws.com/pubfiles-are.thesirona.com/site-images/1200x1200/menstrual-cup-medium-en-2.jpg' />
                        </div><br />

                        <div className='image'>
                            <img className='w-25 image' src='https://s3.me-south-1.amazonaws.com/pubfiles-are.thesirona.com/site-images/1200x1200/menstrual-cup-medium-en-3.jpg' />
                        </div><br />

                        <div className='image'>
                            <img className='w-25 image' src='https://s3.me-south-1.amazonaws.com/pubfiles-are.thesirona.com/site-images/1200x1200/menstrual-cup-medium-en-4.jpg' />
                        </div><br />
                    </div>



                    <div className='destination_image col-lg-6'>
                        <img id='destination' src='https://www.thesirona.com/_next/image?url=https%3A%2F%2Fs3.me-south-1.amazonaws.com%2Fpubfiles-are.thesirona.com%2Fsite-images%2F800x800%2Fmenstrual-cup-medium-en-1.jpg&w=384&q=75'/>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Productdetails;