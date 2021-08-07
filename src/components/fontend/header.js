import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, signOut } from '../../auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
export const Header = () => {
    const { pathname } = useLocation(); console.log(pathname)
    const [isLogged, setIsLogged] = useState(false);
    const history = useHistory();
    useEffect(() => {
        isAuthenticated() && setIsLogged(true);
        console.log(isAuthenticated);
    }, [pathname, isLogged]);
    return (
        <header class="main-header">
            <div class="header-navigation sticky-nav">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2 col-sm-2">
                            <div class="logo">
                                <a href="index-2.html"><img src="../assets/images/logo/logo.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div class="col-md-10 col-sm-10">
                            <div class="main-navigation d-none d-lg-block">
                                <ul>
                                    <li class="menu-dropdown">
                                        <a href="/trangchu">Trang Chủ</a>
                                    </li>
                                    <li class="menu-dropdown">
                                        <Link to="/sanpham">Sản Phẩm</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Liên Hệ</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="header_account_area">
                            <ul>
                            {!isLogged && (
                                <>
                                    <li className=" after-n">
                                        <a className="angle" style={{ fontSize: '16px' }} href="/signin">Đăng nhập</a>
                                    </li>
                                    <li className="after-n">
                                        <a className="angle" style={{ fontSize: '16px' }} href="/signup">Đăng ký</a>
                                    </li>
                                </>
                            )}
                            {isLogged && (
                                <>
                                    <li class="dropdown after-n" style={{ marginTop: '20px' }}>
                                        <p style={{ fontSize: '16px' }}>Xin chào <a class="angle-icon" style={{ fontSize: '18px', marginTop: '16px' }} href="#">{isAuthenticated().user.name}</a></p>
                                        <ul class="dropdown-nav">
                                            {isAuthenticated().user.id == 1 && (
                                                <>
                                                    <li><a href="/admin" style={{ fontSize: '16px' }}>Trang quản trị</a></li>
                                                    <li className="after-n">
                                                        <a className="angle" onClick={() => signOut(() => {
                                                            setIsLogged(false);
                                                            history.push("/trangchu");
                                                        })} style={{ fontSize: '16px' }} href="#">Đăng xuất</a>
                                                    </li>
                                                </>
                                            )}
                                            {isAuthenticated().user.id != 1 && (
                                                <>
                                                    <li className="after-n">
                                                        <a className="angle" onClick={() => signOut(() => {
                                                            setIsLogged(false);
                                                            history.push("/trangchu");
                                                        })} style={{ fontSize: '16px' }} href="#">Đăng xuất</a>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </li>
                                </>
                            )}
                        </ul>
                                <div>
                            </div>

                                <div class="cart-info d-flex">
                                    <div class="mini-cart-warp">
                                        <a href="#" class="count-cart"><span>$20.00</span></a>
                                        <div class="mini-cart-content">
                                            <ul>
                                                <li class="single-shopping-cart">
                                                    <div class="shopping-cart-img">
                                                        <a href="single-product.html"><img alt="" src="assets/images/product-image/mini-cart/1.jpg" /></a>
                                                        <span class="product-quantity">1x</span>
                                                    </div>
                                                    <div class="shopping-cart-title">
                                                        <h4><a href="single-product.html">Juicy Couture...</a></h4>
                                                        <span>$9.00</span>
                                                        <div class="shopping-cart-delete">
                                                            <a href="#"><i class="ion-android-cancel"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="single-shopping-cart">
                                                    <div class="shopping-cart-img">
                                                        <a href="single-product.html"><img alt="" src="assets/images/product-image/mini-cart/2.jpg" /></a>
                                                        <span class="product-quantity">1x</span>
                                                    </div>
                                                    <div class="shopping-cart-title">
                                                        <h4><a href="single-product.html">Water and Wind...</a></h4>
                                                        <span>$11.00</span>
                                                        <div class="shopping-cart-delete">
                                                            <a href="#"><i class="ion-android-cancel"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="shopping-cart-total">
                                                <h4>Subtotal : <span>$20.00</span></h4>
                                                <h4>Shipping : <span>$7.00</span></h4>
                                                <h4>Taxes : <span>$0.00</span></h4>
                                                <h4 class="shop-total">Total : <span>$27.00</span></h4>
                                            </div>
                                            <div class="shopping-cart-btn text-center">
                                                <a class="default-btn" href="checkout.html">checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-menu-area">
                        <div class="mobile-menu">
                            <nav id="mobile-menu-active">
                                <ul class="menu-overflow">
                                    <li>
                                        <a href="index-2.html">HOME</a>
                                        <ul>
                                            <li>
                                                <a href="#">Home Organic</a>
                                                <ul>
                                                    <li><a href="index-2.html">Organic 1</a></li>
                                                    <li><a href="index-3.html">Organic 2</a></li>
                                                    <li><a href="index-4.html">Organic 3</a></li>
                                                    <li><a href="index-5.html">Organic 4</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Home Cosmetic</a>
                                                <ul>
                                                    <li><a href="index-6.html">Cosmetic 1</a></li>
                                                    <li><a href="index-7.html">Cosmetic 2</a></li>
                                                    <li><a href="index-8.html">Cosmetic 3</a></li>
                                                    <li><a href="index-9.html">Cosmetic 4</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Home Digital</a>
                                                <ul>
                                                    <li><a href="index-10.html">Digital 1</a></li>
                                                    <li><a href="index-11.html">Digital 2</a></li>
                                                    <li><a href="index-12.html">Digital 3</a></li>
                                                    <li><a href="index-13.html">Digital 4</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Home Furniture</a>
                                                <ul>
                                                    <li><a href="index-14.html">Furniture 1</a></li>
                                                    <li><a href="index-15.html">Furniture 2</a></li>
                                                    <li><a href="index-16.html">Furniture 3</a></li>
                                                    <li><a href="index-17.html">Furniture 4</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Home Medical</a>
                                                <ul>
                                                    <li><a href="index-18.html">Medical 1</a></li>
                                                    <li><a href="index-19.html">Medical 2</a></li>
                                                    <li><a href="index-20.html">Medical 3</a></li>
                                                    <li><a href="index-21.html">Medical 4</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Shop</a>
                                        <ul>
                                            <li>
                                                <a href="#">Shop Grid</a>
                                                <ul>
                                                    <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                                                    <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                                                    <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Shop List</a>
                                                <ul>
                                                    <li><a href="shop-list.html">Shop List</a></li>
                                                    <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                                    <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Single Shop</a>
                                                <ul>
                                                    <li><a href="single-product.html">Shop Single</a></li>
                                                    <li><a href="single-product-variable.html">Shop Variable</a></li>
                                                    <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                                                    <li><a href="single-product-group.html">Shop Group</a></li>
                                                    <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                                                    <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Single Shop</a>
                                                <ul>
                                                    <li><a href="single-product-slider.html">Shop Slider</a></li>
                                                    <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                                                    <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                                                    <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                                                    <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul>
                                            <li><a href="about.html">About Page</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout Page</a></li>
                                            <li><a href="compare.html">Compare Page</a></li>
                                            <li><a href="login.html">Login & Regiter Page</a></li>
                                            <li><a href="my-account.html">Account Page</a></li>
                                            <li><a href="wishlist.html">Wishlist Page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                                            <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                                            <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                                            <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                            <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                                            <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header