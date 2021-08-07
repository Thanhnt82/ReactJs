import React from 'react';
import Product from '../admin/product/product';
export default function Website(props) {
    console.log(props);
    return (
        <>
            <div className="slider-area">
                <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
                    <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{ backgroundImage: 'url(assets/images/slider-image/sample-1.jpg)' }}>
                        <div className="container">
                            <div className="slider-content-1 slider-animated-1 text-left">
                                <span className="animated">NOT FRIED NOT BAKED</span>
                                <h1 className="animated">
                                    Freeze Dried Fruits <br />
                                    Pineapple Coconut
                                </h1>
                                <p className="animated">Free Shipping On Qualified Orders Over $35</p>
                                <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{ backgroundImage: 'url(assets/images/slider-image/sample-2.jpg)' }}>
                        <div className="container">
                            <div className="slider-content-1 slider-animated-1 text-left">
                                <span className="animated">100% NATURAL</span>
                                <h1 className="animated">
                                    Organic Fruits <br />
                                    Summer Drinks
                                </h1>
                                <p className="animated">fresh New pack Brusting Fruits</p>
                                <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="static-area mtb-60px">
                <div class="container">
                    <div class="static-area-wrap">
                        <div class="row">
                            <div class="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div class="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0">
                                    <img src="../assets/images/icons/static-icons-1.png" alt="" class="img-responsive" />
                                    <div class="single-static-meta">
                                        <h4>Free Shipping</h4>
                                        <p>On all orders over $75.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div class="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0 pt-res-xs-20">
                                    <img src="../assets/images/icons/static-icons-2.png" alt="" class="img-responsive" />
                                    <div class="single-static-meta">
                                        <h4>Free Returns</h4>
                                        <p>Returns are free within 9 days</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div class="single-static pt-res-md-30 pb-res-sm-30 pb-res-xs-0 pt-res-xs-20">
                                    <img src="../assets/images/icons/static-icons-3.png" alt="" class="img-responsive" />
                                    <div class="single-static-meta">
                                        <h4>100% Payment Secure</h4>
                                        <p>Your payment are safe with us.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div class="single-static pt-res-md-30 pb-res-sm-30 pt-res-xs-20">
                                    <img src="../assets/images/icons/static-icons-4.png" alt="" class="img-responsive" />
                                    <div class="single-static-meta">
                                        <h4>Support 24/7</h4>
                                        <p>Contact us 24 hours a day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="categorie-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title mt-res-sx-30px mt-res-md-30px">
                                <h2>Danh mục sản phảm</h2>
                                <p>Danh mục Phổ biến cập nhật hàng tuần</p>
                            </div>
                        </div>
                    </div>
                    <div class="category-slider owl-carousel owl-nav-style">
                        {props.category.map((items) => (
                            <div class="category-item" style={{ width: '320px', display: 'inline-block', paddingRight: '5px', paddingLeft: '5px' }}>
                                <div class="category-list">
                                    <div class="category-thumb">
                                        <a href="shop-4-column.html">
                                            <img src={items.image} alt="" />
                                        </a>
                                    </div>
                                    <div class="desc-listcategoreis">
                                        <div class="name_categories">
                                            <h4>{items.name}</h4>
                                        </div>
                                        <span class="number_product"></span>
                                        <a href="shop-4-column.html"> <i class="ion-android-arrow-dropright-circle"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div class="banner-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-xs-12">
                            <div class="banner-wrapper">
                                <a href="shop-4-column.html"><img src="assets/images/banner-image/1.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-xs-12 mt-res-sx-30px">
                            <div class="banner-wrapper">
                                <a href="shop-4-column.html"><img src="assets/images/banner-image/2.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-12 mt-res-sx-30px">
                            <div class="banner-wrapper">
                                <a href="shop-4-column.html"><img src="assets/images/banner-image/3.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="feature-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2>Featured Products</h2>
                                <p>Add products to weekly line up</p>
                            </div>
                        </div>
                    </div>
                    <div class="recent-product-slider owl-carousel owl-nav-style">
                        {props.Products.map((items) => (
                            <article class="list-product" style={{ width: '430px', display: 'inline-block', margin: '0,0,0,25px' }}>
                                <div class="img-block">
                                    <a href="single-product.html" class="thumbnail">
                                        <img class="first-img" src={items.image} alt="" width="400" />
                                        <img class="second-img" src="../assets/images/logo/logo-electronic.jpg" alt="" />
                                        <img class="second-img" src="../assets/images/logo/logo.jpg" alt="" />
                                    </a>
                                    <div class="quick-view">
                                        <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                            <i class="ion-ios-search-strong"></i>
                                        </a>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <a class="inner-link" href="shop-4-column.html"><span>{items.category}</span></a>
                                    <h2><a href="single-product.html" class="product-link">{items.name}</a></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="current-price">{items.price}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><a class="cart-btn" href="#">ADD TO CART </a></li>
                                        <li>
                                            <a href="wishlist.html"><i class="ion-android-favorite-outline"></i></a>
                                        </li>
                                        <li>
                                            <a href="compare.html"><i class="ion-ios-shuffle-strong"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <div class="banner-area-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="banner-inner">
                                <a href="shop-4-column.html"><img src="%PUBLIC_URL%assets/images/banner-image/4.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="brand-area">
                <div class="container">
                    <div class="brand-slider owl-carousel owl-nav-style owl-nav-style-2">
                        <div class="brand-slider-item">
                            <a href="#"><img src="assets/images/brand-logo/1.jpg" alt="" /></a>
                        </div>
                        <div class="brand-slider-item">
                            <a href="#"><img src="assets/images/brand-logo/2.jpg" alt="" /></a>
                        </div>
                        <div class="brand-slider-item">
                            <a href="#"><img src="assets/images/brand-logo/3.jpg" alt="" /></a>
                        </div>
                        <div class="brand-slider-item">
                            <a href="#"><img src="assets/images/brand-logo/4.jpg" alt="" /></a>
                        </div>
                        <div class="brand-slider-item">
                            <a href="#"><img src="assets/images/brand-logo/5.jpg" alt="" /></a>
                        </div>
                        <div class="brand-slider-item">
                            <a href="#"><img src="assets/images/brand-logo/1.jpg" alt="" /></a>
                        </div>
                        <div class="brand-slider-item">
                            <a href="#"><img src="assets/images/brand-logo/2.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}