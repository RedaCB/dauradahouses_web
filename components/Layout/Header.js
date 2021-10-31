import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return(
        <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-2">
            {/* ltn__header-top-area start */}
            <div className="ltn__header-top-area top-area-color-white d-none">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="ltn__top-bar-menu">
                                <ul>
                                    <li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail"></i> info@webmail.com</a></li>
                                    <li><a href="locations.html"><i className="icon-placeholder"></i> 15/A, Nest Tower, NYC</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="top-bar-right text-end">
                                <div className="ltn__top-bar-menu">
                                    <ul>
                                        <li>
                                            {/* ltn__language-menu */}
                                            <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                                <ul>
                                                    <li><a href="#" className="dropdown-toggle"><span className="active-currency">English</span></a>
                                                        <ul>
                                                            <li><a href="#">Arabic</a></li>
                                                            <li><a href="#">Bengali</a></li>
                                                            <li><a href="#">Chinese</a></li>
                                                            <li><a href="#">English</a></li>
                                                            <li><a href="#">French</a></li>
                                                            <li><a href="#">Hindi</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            {/* ltn__social-media */}
                                            <div className="ltn__social-media">
                                                <ul>
                                                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                    
                                                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ltn__header-top-area end */}
        
            {/* ltn__header-middle-area start */}
            <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="site-logo-wrap">
                                <div className="site-logo">
                                    <a href="index.html"><Image src="/logo-2.png" alt="Logo" width="201" height="33"/></a>
                                </div>
                                <div className="get-support clearfix d-none">
                                    <div className="get-support-icon">
                                        <i className="icon-call"></i>
                                    </div>
                                    <div className="get-support-info">
                                        <h6>Get Support</h6>
                                        <h4><a href="tel:+123456789">123-456-789-10</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col header-menu-column menu-color-white">
                            <div className="header-menu d-none d-xl-block">
                                <nav>
                                    <div className="ltn__main-menu">
                                        <ul>
                                            <li><Link href="/">Inicio</Link></li>
                                            <li><Link href="/nosotros">Nosotros</Link></li>
                                            <li><Link href="/servicios">Servicios</Link></li>
                                            <li><Link href="/contacto">Contacto</Link></li>
                                            <li className="special-link">
                                                <a href="add-listing.html">EMPEZAR</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col--- ltn__header-options ltn__header-options-2 ">
                            {/* Mobile Menu Button */}
                            <div className="mobile-menu-toggle d-xl-none">
                                <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                    <svg viewBox="0 0 800 600">
                                        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                        <path d="M300,320 L540,320" id="middle"></path>
                                        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ltn__header-middle-area end */}
    </header>
    )
}