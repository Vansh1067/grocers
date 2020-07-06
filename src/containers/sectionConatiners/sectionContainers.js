import React,{useEffect} from 'react';
import HashLinkObserver from 'react-hash-link';
import {connect} from 'react-redux'
import './sectionContainers.css'
import Hoc from '../../Hoc/hoc'
import SliderComponent from '../../component/SliderComponent/slidercomponent';
import CategoriesCardComponent from '../../component/categoriesCardComponent/categoriesCardComponent'
import img from '../../assest/promo.jpg';
import SlideShow from '../../assest/1.jpg';
import * as Action from '../../store/product/action'
const SectionComponent=(props)=>{
    useEffect(()=>{
            props.Product();
            props.Categories();
    },[])
    console.log(props)
    return(
        <Hoc class="section">
            <SliderComponent img={SlideShow}></SliderComponent>
   
            <HashLinkObserver smoothScroll={false} />

            <CategoriesCardComponent title="Top Categories" id="#top" link={[]}
             product={props.categories}/>
            <CategoriesCardComponent title="All Products" link={[{title:'Baby & Care',id:'1'},{title:'Diary & Bakery',id:'5'},{title:'oil & Spices',id:'7'},{title:'Cleaning & HouseHolds',id:'3'}]}
             product={props.product}/>
            <SliderComponent img={img}></SliderComponent>

            <CategoriesCardComponent title="Trendings Products" link={[{title:'Featured',id:'11'},{title:'Best Seller',id:'12'},{title:'Latest',id:'13'}]}
             product={props.product}/>
             <CategoriesCardComponent id="specials" title="Special Offer" link={[{title:'Baby & Care',id:'1'},{title:'Diary & Bakery',id:'5'},{title:'oil & Spices',id:'7'},{title:'Cleaning & HouseHolds',id:'3'}]}
             product={[{title:'Baby Care',price:25,discPrice:30},{title:'Banana',price:15,discPrice:30},{title:'Oil',price:250,discPrice:300},{title:'Chips',price:5,discPrice:10},{title:'Baby Care',price:25,discPrice:30},{title:'Banana',price:15,discPrice:30},{title:'Oil',price:250,discPrice:280},{title:'Chips',price:5,discPrice:10}]}/>
          
        </Hoc>
    );
}
const mapStateToProps=(state)=>{
 
    return{
        product:state.products.product,
        categories:state.products.categories
    }
}
const mapDispatchToProps=dispatch=>{
    return {

        Product:()=>dispatch(Action.fetchProduct()),
        Categories:()=>dispatch(Action.fetchCategories()),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SectionComponent)