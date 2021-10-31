import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'



export default function Home() {
  return (
    <Layout>
      {/* SLIDER AREA START (slider-4) */}
    <div className="ltn__slider-area ltn__slider-4 position-relative ltn__primary-bg fix">
        <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
            
            {/* HTML5 VIDEO */}
            <video autoPlay={ true } muted={ true } loop={ true } id="myVideo">
                <source src="media/3.mp4" type="video/mp4" />
            </video>
            {/* <ReactPlayer 
              url="/media/3.mp4"
              id="myVideo"
              playing={ true }
              config={ {
                file: {
                    attributes: {
                        controlsList: "nodownload"
                    }
                }
              } }
            /> */}

            {/* YouTube VIDEO */}
            {/* <div className="ltn__youtube-video-background">
                <iframe frameborder="0" height="100%" width="100%"
                  src="https://www.youtube.com/embed/9ge5PzHSS0Y?playlist=9ge5PzHSS0Y&loop=1&controls=0&showinfo=0&autoplay=1&mute=1">
                </iframe>
            </div> */}

            {/* ltn__slide-item */}
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- bg-overlay-theme-black-10---" data-bs-bg="img/slider/41.jpg">
                <div className="ltn__slide-item-inner text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        {/* <h6 className="slide-sub-title white-color animated"><span><i className="fas fa-home"></i></span> Costa Daurada</h6> */}
                                        <h1 className="slide-title text-uppercase white-color animated ">Gestión inteligente de <br/> bienes raíces</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* SLIDER AREA END */}

    </Layout>
  )
}
