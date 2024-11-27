import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header>
    <div id="sticky-header" class="menu-area special-header transparent-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
      
                    <div class="mobile-nav-toggler"><i class="flaticon-menu"></i> <span>Danh mục</span></div>
                     <div class="mobile-nav-toggler"><i class="flaticon-menu"></i></div> 
                    <div class="menu-wrap">
                        <nav class="menu-nav show">
                            <div class="logo">
                                <a href="/index.html"><img src="https://sgg69.com/langding/images/logo-2.png" alt="Logo" /></a>
                            </div>
                            <div class="navbar-wrap main-menu d-none d-lg-flex">
                                <ul class="navigation">
                                    <div class="custom-left">
                                        <li class="section-link active">
                                            <a href="/index.html" class="section-link">Trang chủ</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="/products.html" class="section-link">Sản phẩm</a>
                                            <ul class="submenu">
                                                                                                <li> <a href="/products/san-pham-chuc-nang.html">SẢN PHẨM CHỨC NĂNG</a> </li>
                                                
                                            </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                        <li class="menu-item-has-children">
                                            <a href="javascript:void(0)" class="section-link">Tin tức</a>
                                            <ul class="submenu">
                                                                                                <li><a href="/news/tin-tuc.html">Tin tức</a></li>
                                                
                                            </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    </div>
                                    <div class="custom-right">
                                        <li class="section-link"><a href="/sign-in.html">Đăng nhập</a></li>
                                        <li class="section-link"><a href="/center.html">Câu lạc bộ</a></li>
                                        <li class="section-link"><a href="/contact.html">Liên hệ</a></li>
                                        <li class="section-link"><a href="/cart.html">Giỏ hàng</a></li>

                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="header-search"><a href="/sign-in.html"><i class="far fa-shopping-cart"></i><span>Mua hàng</span></a></div>
                    // Mobile Menu 
                    <div class="mobile-menu">
                        <nav class="menu-box">
                            <div class="close-btn"><i class="far fa-times"></i></div>
                            <div class="nav-logo"><a href="/index.html"><img src="/langding/images/logo-2.png" alt="" title="" /></a></div>
                            <div class="block-search-sm mb-4 position-relative">
                                <form action="/search/" method="GET">
                                <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm?" name="keyword" value="" required />
                                <button class="btn position-absolute"><img src="/langding/images/211817_search_strong_icon.svg" alt="" /></button>
                                </form>
                            </div>
                            <div class="menu-outer">
                                //Here Menu Will Come Automatically Via Javascript / Same Menu as in Header
                            
                                <ul class="navigation">
                                    <div class="custom-left">
                                        <li class="section-link active">
                                            <a href="/index.html" class="section-link">Trang chủ</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="/products.html" class="section-link">Sản phẩm</a>
                                            <ul class="submenu">
                                                                                                <li> <a href="/products/san-pham-chuc-nang.html">SẢN PHẨM CHỨC NĂNG</a> </li>
                                                
                                            </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                        <li class="menu-item-has-children">
                                            <a href="javascript:void(0)" class="section-link">Tin tức</a>
                                            <ul class="submenu">
                                                                                                <li><a href="/news/tin-tuc.html">Tin tức</a></li>
                                                
                                            </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    </div>
                                    <div class="custom-right">
                                        <li class="section-link"><a href="/sign-in.html">Đăng nhập</a></li>
                                        <li class="section-link"><a href="/center.html">Câu lạc bộ</a></li>
                                        <li class="section-link"><a href="/contact.html">Liên hệ</a></li>
                                        <li class="section-link"><a href="/cart.html">Giỏ hàng</a></li>

                                    </div>
                                </ul>
                            </div>
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li class="facebook"><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                    <li class="twitter"><a href="#"><span class="fab fa-twitter"></span></a></li>
                                    <li class="pinterest"><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                                    <li class="instagram"><a href="#"><span class="fab fa-instagram"></span></a></li>
                                    <li class="youtube"><a href="#"><span class="fab fa-youtube"></span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="menu-backdrop"></div>
                    //End Mobile Menu 
                </div>
            </div>
        </div>
    </div>
</header>
  );
};

export default Header;

<header>
    <div id="sticky-header" class="menu-area special-header transparent-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
      
                    <div class="mobile-nav-toggler"><i class="flaticon-menu"></i> <span>Danh mục</span></div>
                     <div class="mobile-nav-toggler"><i class="flaticon-menu"></i></div> 
                    <div class="menu-wrap">
                        <nav class="menu-nav show">
                            <div class="logo">
                                <a href="/index.html"><img src="/langding/images/logo-2.png" alt="Logo" /></a>
                            </div>
                            <div class="navbar-wrap main-menu d-none d-lg-flex">
                                <ul class="navigation">
                                    <div class="custom-left">
                                        <li class="section-link active">
                                            <a href="/index.html" class="section-link">Trang chủ</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="/products.html" class="section-link">Sản phẩm</a>
                                            <ul class="submenu">
                                                                                                <li> <a href="/products/san-pham-chuc-nang.html">SẢN PHẨM CHỨC NĂNG</a> </li>
                                                
                                            </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                        <li class="menu-item-has-children">
                                            <a href="javascript:void(0)" class="section-link">Tin tức</a>
                                            <ul class="submenu">
                                                                                                <li><a href="/news/tin-tuc.html">Tin tức</a></li>
                                                
                                            </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    </div>
                                    <div class="custom-right">
                                        <li class="section-link"><a href="/sign-in.html">Đăng nhập</a></li>
                                        <li class="section-link"><a href="/center.html">Câu lạc bộ</a></li>
                                        <li class="section-link"><a href="/contact.html">Liên hệ</a></li>
                                        <li class="section-link"><a href="/cart.html">Giỏ hàng</a></li>

                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="header-search"><a href="/sign-in.html"><i class="far fa-shopping-cart"></i><span>Mua hàng</span></a></div>
                    // Mobile Menu 
                    <div class="mobile-menu">
                        <nav class="menu-box">
                            <div class="close-btn"><i class="far fa-times"></i></div>
                            <div class="nav-logo"><a href="/index.html"><img src="/langding/images/logo-2.png" alt="" title="" /></a></div>
                            <div class="block-search-sm mb-4 position-relative">
                                <form action="/search/" method="GET">
                                <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm?" name="keyword" value="" required />
                                <button class="btn position-absolute"><img src="/langding/images/211817_search_strong_icon.svg" alt="" /></button>
                                </form>
                            </div>
                            <div class="menu-outer">
                                //Here Menu Will Come Automatically Via Javascript / Same Menu as in Header
                            
                                <ul class="navigation">
                                    <div class="custom-left">
                                        <li class="section-link active">
                                            <a href="/index.html" class="section-link">Trang chủ</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="/products.html" class="section-link">Sản phẩm</a>
                                            <ul class="submenu">
                                                                                                <li> <a href="/products/san-pham-chuc-nang.html">SẢN PHẨM CHỨC NĂNG</a> </li>
                                                
                                            </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                        <li class="menu-item-has-children">
                                            <a href="javascript:void(0)" class="section-link">Tin tức</a>
                                            <ul class="submenu">
                                                                                                <li><a href="/news/tin-tuc.html">Tin tức</a></li>
                                                
                                            </ul>
                                        <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    </div>
                                    <div class="custom-right">
                                        <li class="section-link"><a href="/sign-in.html">Đăng nhập</a></li>
                                        <li class="section-link"><a href="/center.html">Câu lạc bộ</a></li>
                                        <li class="section-link"><a href="/contact.html">Liên hệ</a></li>
                                        <li class="section-link"><a href="/cart.html">Giỏ hàng</a></li>

                                    </div>
                                </ul>
                            </div>
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li class="facebook"><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                    <li class="twitter"><a href="#"><span class="fab fa-twitter"></span></a></li>
                                    <li class="pinterest"><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                                    <li class="instagram"><a href="#"><span class="fab fa-instagram"></span></a></li>
                                    <li class="youtube"><a href="#"><span class="fab fa-youtube"></span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="menu-backdrop"></div>
                    //End Mobile Menu 
                </div>
            </div>
        </div>
    </div>
</header>