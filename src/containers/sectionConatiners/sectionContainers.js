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
   const AllProduct=props.product;
   const TrendingProducts=props.product.filter(prod=>prod.preferences);
   const SpecialOfferproducts=props.product.filter(prod=>prod.specialOffer);
   const Categories=props.categories;
   console.log(Categories)
    return(
        <Hoc class="section">
            <SliderComponent img={SlideShow}></SliderComponent>
   
            <HashLinkObserver smoothScroll={false} />

           { <CategoriesCardComponent title="Top Categories" id="#top" link={[]}
             product={Categories}/>}
            <CategoriesCardComponent title="All Products" link={[{title:'Baby & Care',id:'1'},{title:'Diary & Bakery',id:'5'},{title:'oil & Spices',id:'8'},{title:'Cleaning & HouseHolds',id:'3'}]}
             product={AllProduct}/>
            <SliderComponent img={img}></SliderComponent>

            <CategoriesCardComponent title="Trendings Products" link={[{title:'Featured',id:'11'},{title:'Best Seller',id:'12'},{title:'Latest',id:'13'}]}
             product={TrendingProducts}/>
             <CategoriesCardComponent id="specials" title="Special Offer" link={[{title:'Baby & Care',id:'1'},{title:'Diary & Bakery',id:'5'},{title:'oil & Spices',id:'8'},{title:'Cleaning & HouseHolds',id:'3'}]}
             product={SpecialOfferproducts}/>
          
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