import Layout from "../../components/Layout"
import Breadcumb from "../../components/Breadcrumb"

export default function Nosotros() {
    return(
        <Layout>
            <Breadcumb title={"Nosotros"} />
            <div className="ltn__about-us-area pt-120--- pb-90 mt--30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="about-us-img-wrap about-img-left">
                                <img src="img/others/13.png" alt="About Us Image"/>
                                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                                    
                                    <div className="ltn__video-img ltn__animation-pulse1">
                                        <img src="img/others/8.png" alt="video popup bg image"/>
                                        {/* <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="/media/3.mp4" data-rel="lightcase:myCollection">
                                            <i className="fa fa-play"></i>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="about-us-info-wrap">
                                <div className="section-title-area ltn__section-title-2--- mb-20">
                                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Sobre Nosotros</h6>
                                    <h1 className="section-title">El principal aliado
                                        para la gestión de inmuebles<span>.</span></h1>
                                    <p>Daurada Houses gestiona en exclusiva decenas de apartamentos turísticos en la zona de la Costa Daurada, 
                                        apostando por una gestión inteligente y profesional de inmuebles.</p>
                                </div>
                                <ul className="ltn__list-item-half clearfix">
                                    <li>
                                        <i className="flaticon-home-2"></i>
                                        Gestión inteligente
                                    </li>
                                    <li>
                                        <i className="flaticon-mountain"></i>
                                        Beautiful Scene Around
                                    </li>
                                    <li>
                                        <i className="flaticon-heart"></i>
                                        Exceptional Lifestyle
                                    </li>
                                    <li>
                                        <i className="flaticon-secure"></i>
                                        Seguridad completa 24/7
                                    </li>
                                </ul>
                                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                                    <p>&quot;Enimad minim veniam quis nostrud exercitation <br/>
                                        llamco laboris. Lorem ipsum dolor sit amet&quot;</p>
                                </div>
                                <div className="btn-wrapper animated">
                                    <a href="service.html" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}