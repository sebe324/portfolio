import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useId } from "react";
import './Slider.css'
function Slider(props) {

    useEffect(() => {
        console.log(props.slides);
    }, []);
    const sliderId = useId();
    return (
        <div id={sliderId} className='carousel slide' data-bs-ride='carousel'>
            <div className="carousel-indicators">
                {props.slides.map((slide, index) => {
                    return <button key={index} type="button" data-bs-target={'#' + sliderId} data-bs-slide-to={index} className={index == 0 ? 'active' : ''} aria-current={index == 0 ? 'true' : 'false'} aria-label={"Slide " + index + 1}></button>
                })
                }
            </div>
            <div className='carousel-inner'>
                {
                    props.slides.map((slide, index) => {

                        return <a className={index == 0 ? 'carousel-item active' : 'carousel-item'} key={index} href={slide.projectUrl} target="_blank">
                            <div className='carousel-img-wrap'>
                                <img className='d-block w-100' src={slide.src} alt={slide.title}>

                                </img>
                            </div>
                            <div class="carousel-caption">
                                <h5 class='d-md-block'>{slide.title}</h5>
                                {slide.tools.map((tool)=>{
                                    return <div className='d-inline-block me-1 tool'>{tool}</div>
                                })}
                                
                            </div>
                        </a>
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={'#' + sliderId} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={'#' + sliderId} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;