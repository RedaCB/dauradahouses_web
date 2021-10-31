import Image from 'next/image'

export default function Footer() {
    return(
        <footer className="ltn__footer-area  ">
            <div className="footer-top-area  section-bg-2 plr--5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-about-widget">
                                <div className="footer-logo">
                                    <div className="site-logo">
                                        <Image src="/logo-2.png" alt="Logo" width="201" height="33" />
                                    </div>
                                </div>
                                <p>Gestión inteligente de bienes raíces.</p>
                                <div className="footer-address">
                                    <ul>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-placeholder"></i>
                                            </div>
                                            <div className="footer-address-info">
                                                <p>Calafell, Tarragona</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-call"></i>
                                            </div>
                                            <div className="footer-address-info">
                                                <p><a href="tel:+0123-456789">+34 634 819 855</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-mail"></i>
                                            </div>
                                            <div className="footer-address-info">
                                                <p><a href="mailto:example@example.com">hola@dauradahouses.com</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ltn__social-media mt-20">
                                    <ul>
                                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                        <li><a href="#" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Empresa</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="about.html">Nosotros</a></li>
                                        <li><a href="blog.html">Servicios</a></li>
                                        {/* <li><a href="shop.html">All Products</a></li>
                                        <li><a href="locations.html">Locations Map</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="contact.html">Contact us</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Atención al cliente</h4>
                                <div className="footer-menu">
                                    <ul>
                                        {/* <li><a href="login.html">Iniciar Sesión</a></li> */}
                                        {/* <li><a href="account.html">Mi cuenta</a></li> */}
                                        {/* <li><a href="wishlist.html">Wish List</a></li> */}
                                        {/* <li><a href="order-tracking.html">Order tracking</a></li> */}
                                        <li><a href="faq.html">Preguntas frecuentes (FAQ)</a></li>
                                        <li><a href="contact.html">Contacto</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Información</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="order-tracking.html">Términos & Condicones</a></li>
                                        <li><a href="wishlist.html">Aviso Legal</a></li>
                                        <li><a href="login.html">Política de Privacidad</a></li>
                                        <li><a href="account.html">Política de Cookies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-widget footer-newsletter-widget">
                                <h4 className="footer-title">Newsletter</h4>
                                <p>Suscríbase a nuestro boletín mensual y reciba actualizaciones por correo electrónico.</p>
                                <div className="footer-newsletter">
                                    <form action="#">
                                        <input type="email" name="email" placeholder="Email*"/>
                                        <div className="btn-wrapper">
                                            <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <h5 className="mt-30">We Accept</h5>
                                <Image src="img/icons/payment-4.png" alt="Payment Image" width="201" height="33" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
                <div className="container-fluid ltn__border-top-2">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="ltn__copyright-design clearfix">
                                <p>Todos los derechos reservados © Daurada Houses <span className="current-year">2021</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 align-self-center">
                            <div className="ltn__copyright-menu text-end">
                                <ul>
                                    <li><a href="#">Terminos & Condiciones</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}