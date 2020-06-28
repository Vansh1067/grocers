import React from 'react';

import './sectionComponent.css'
import Hoc from '../Hoc/hoc'
import SliderComponent from './SliderComponent/slidercomponent';
import CategoriesCardComponent from './categoriesCardComponent/categoriesCardComponent'
import img from '../assest/promo.jpg';
import SlideShow from '../assest/1.jpg';

const SectionComponent=(props)=>{
    return(
        <Hoc class="section">
            <SliderComponent img={SlideShow}></SliderComponent>
            <CategoriesCardComponent title="Top Categories" link={[]}
             product={[{title:'Baby Care'},{title:'Banana'},{title:'Oil'},{title:'Chips'},{title:'Baby Care'},{title:'Banana'},{title:'Oil'},{title:'Chips'}]}/>
            <CategoriesCardComponent title="All Products" link={['Baby & Care','Diary & Bakery','oil & Spices','Cleaning & HouseHolds']}
             product={[{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Oil',price:250},{title:'Chips',price:5},{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Oil',price:250},{title:'Chips',price:5}]}/>
            <SliderComponent img={img}></SliderComponent>

            <CategoriesCardComponent title="Trendings Products" link={['Featured','Best Seller','Latest']}
             product={[{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Oil',price:250},{title:'Chips',price:5},{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Oil',price:250},{title:'Chips',price:5}]}/>
          
        </Hoc>
    );
}
export default SectionComponent