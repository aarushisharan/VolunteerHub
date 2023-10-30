import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
import Menu from './Tab';

const GalleryReact = () => {

    const [items,setItems]=useState(Menu);

    const filterItem= (categItem)=>{
        const updatedItems= Menu.filter((curElem)=>
        {
            return curElem.category === categItem;
        });
        setItems(updatedItems);

    }
    return (
        <div className="d-flex flex-column align-items-center bg-warning-subtle vh-100">
            <blockquote class="blockquote">
          <p >Volunteer Now!!</p>
          </blockquote>
            {/* Menu tabs section */}
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={()=> filterItem('Community')}>Community</button>
                    <button className="btn btn-warning" onClick={()=> filterItem('Tree Plantation')}>Tree Plantation</button>
                    <button className="btn btn-warning" onClick={()=> filterItem('Cleaning')}>Cleaning</button>
                    <button className="btn btn-warning"onClick={()=> setItems(Menu)}>All</button>
                </div>
            </div>

            {/* Main items section */}
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                items.map((elem)=>{
                                    const {id,name,image,category,description}=elem;
                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="row Item-inside">
                                            {/* For images */}
                                            <div className="col-12 col-md-12 col-lg-4 img-div">
                                                <img src={image} alt={name} className="img-fluid" style={{ width: '400px', height: '100px' }}/>
                                            </div>
                                            {/* Menu items description */}
                                            <div className="col-12 col-md-12 col-lg-8">
                                                <div className="main-title pt-4 pb-3">
                                                    <h1>{name}</h1>
                                                    <p>{description}</p>
                                                </div>
                                                <div className="menu-price-book">
                                                    <div className="price-book-divide d-flex justify-content-between">
                                                        <a href="/register">
                                                            <button className="btn btn-primary">Volunteer Now</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                         
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default GalleryReact;
