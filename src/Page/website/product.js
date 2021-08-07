import { Link } from "react-router-dom";
const SanPham = (props) => {
    console.log(props);
    return (
        <>
            <section class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="breadcrumb-content">
                                <h1 class="breadcrumb-hrading">Danh sách sản phẩm</h1>
                                <ul class="breadcrumb-links">
                                    <li><a href="/trangchu">Trang Chủ</a></li>
                                    <li>Sản phẩm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="shop-category-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="shop-top-bar">
                                <div class="shop-tab nav mb-res-sm-15">
                                    <a class="active" href="#shop-1" data-toggle="tab">
                                        <i class="fa fa-th show_grid"></i>
                                    </a>
                                    <a href="#shop-2" data-toggle="tab">
                                        <i class="fa fa-list-ul"></i>
                                    </a>
                                    <p>There Are 17 Products.</p>
                                </div>
                                <div class="select-shoing-wrap">
                                    <div class="shot-product">
                                        <p>Sort By:</p>
                                    </div>
                                    <div class="shop-select">
                                        <select>
                                            <option value="">Sort by newness</option>
                                            <option value="">A to Z</option>
                                            <option value=""> Z to A</option>
                                            <option value="">In stock</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="shop-bottom-area mt-35">
                                <div class="tab-content jump">
                                    <div id="shop-1" class="tab-pane active">
                                        <div class="row">
                                            {props.Products.map((items) => (
                                                <div class="col-md-3 col-sm-6" style= {{width: '24.933333%,'}} >
                                                    <article class="list-product">
                                                        <div class="img-block">
                                                            <Link
                                                                to={`sanphamchitiet/${items.id}`}
                                                                class="thumbnail"
                                                            >
                                                                <img class="first-img" src={items.image} alt="" />
                                                                <img class="second-img" src="../assets/images/logo/logo-electronic.jpg" alt="" />
                                                                <img class="second-img" src="../assets/images/logo/logo.jpg" alt="" />
                                                            </Link>
                                                            <div class="quick-view">
                                                                <Link class="quick_view" to={`sanphamchitiet/${items.id}`} data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                                    <i class="ion-ios-search-strong"></i>
                                                                </Link>
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
                                                                    <p>Giá : <li class="current-price">{items.price} Đồng</li></p>
                                                                    {/* <li class="current-price">€34.21</li>
                                                                    <li class="discount-price">-5%</li> */}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-link">
                                                            <ul>
                                                                <li class="cart"><a class="cart-btn" href="#">ADD TO CART</a></li>
                                                                <li>
                                                                    <a href="wishlist.html"><i class="ion-android-favorite-outline"></i></a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html"><i class="ion-ios-shuffle-strong"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </article>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div class="pro-pagination-style text-center">
                                    <ul>
                                        <li>
                                            <a class="prev" href="#"><i class="ion-ios-arrow-left"></i></a>
                                        </li>
                                        <li><a class="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li>
                                            <a class="next" href="#"><i class="ion-ios-arrow-right"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SanPham