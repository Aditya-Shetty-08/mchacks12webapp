import React from 'react';
import '../../App.css';
import CardItem from '../CardItem.js';

function Services() {
  return (
    <div>
      <h1 className='services'>SERVICES</h1>
      <h2 className='h2-services'> Best Hospitals all around Montreal </h2>
      <ul className='cards__items'>
        <CardItem
                    src='images/img-10.jpg'
                    text='Average Waiting Time: N/A'
                    label='Montreal General Hospital'
                    className="hospital"
                  />
        <CardItem
                    src='images/img-11.jpg'
                    text='Average Waiting Time: N/A '
                    label='CHUM - Centre hospitalier de Université de Montréal'
                    className="hospital"
                  />
      </ul>
      <ul className='cards__items'>            
        <CardItem
                    src='images/img-12.jpg'
                    text='Average Waiting Time: N/A '
                    label='Jewish General Hospital'
                    className="hospital"
                  />
        <CardItem
                    src='images/img-13.jpg'
                    text='Average Waiting Time: N/A '
                    label='VM-Med'
                    className="hospital"
                  />                
          
        </ul>
        <h5> Photos taken from https://www.google.com/maps/contrib/111688945165591346095 </h5>
        <h5> https://www.google.com/maps/contrib/110532904122844443699 </h5>
        <h5> https://www.google.com/maps/contrib/102325394035443955725/photos/@45.50276,-73.6054577,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D</h5>
        <h5> https://www.google.com/maps/contrib/111327079529465334763 </h5>

    </div>
  );
}

export default Services;