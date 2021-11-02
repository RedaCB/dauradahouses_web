export default function Breadcumb({ title }) {
    return(
        <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__breadcrumb-inner">
                            <h1 className="page-title">{title}</h1>
                            <div className="ltn__breadcrumb-list">
                                <ul>
                                    <li><a href="index.html"><span className="ltn__secondary-color"><i className="fas fa-home"></i></span> Inicio</a></li>
                                    <li>{title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
