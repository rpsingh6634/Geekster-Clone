import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { sliderData } from "../../slider-data";
import "./Slider.css";
import youtube from './logo/youtube.svg';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

   const CurrentSlide = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/new-testimonial/Saurabh-Garg.webp" ? 0 : "https://images.geekster.in/new-testimonial/Saurabh-Garg.webp");
  }
  const CurrentSlide1 = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/new-testimonial/Naveen-Katiyar.webp" ? 1 : "https://images.geekster.in/new-testimonial/Naveen-Katiyar.webp");
  }
  const CurrentSlide2 = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/new-testimonial/Kaushal-Sorathiya.webp" ? 2 : "https://images.geekster.in/new-testimonial/Kaushal-Sorathiya.webp");
  }
  const CurrentSlide3 = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp" ? 3 : "https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp");
  }
  const CurrentSlide4 = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/new-testimonial/Gajendra-Malviya.webp" ? 4 : "https://images.geekster.in/new-testimonial/Gajendra-Malviya.webp");
  }
  const CurrentSlide5 = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/new-testimonial/Nipun-Sinha.webp" ? 5 : "https://images.geekster.in/new-testimonial/Nipun-Sinha.webp");
  }
  const CurrentSlide6 = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/new-testimonial/Utkarsh-singh.webp" ? 6 : "https://images.geekster.in/new-testimonial/Utkarsh-singh.webp");
  }
  const CurrentSlide7 = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/new-testimonial/Prakhar-Agarwal.webp" ? 7 : "https://images.geekster.in/new-testimonial/Prakhar-Agarwal.webp");
  }
  const CurrentSlide8 = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/new-testimonial/Karri-Devi.webp" ? 8 : "https://images.geekster.in/new-testimonial/Karri-Devi.webp");
  }
  const CurrentSlide9 = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/new-testimonial/Pawan-Kumar.webp" ? 9 : "https://images.geekster.in/new-testimonial/Pawan-Kumar.webp");
  }
  const CurrentSlide10 = () => {
    setCurrentSlide(sliderData !== "https://images.geekster.in/placed/Vamsi-Krishna.webp" ? 10 : "https://images.geekster.in/placed/Vamsi-Krishna.webp");
  }


  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);
  return (
    <div>
      <center><h1 className="hone"><span className="span">Thousands</span> of lives changed</h1></center>
      <center><h4 className="hfour">Hear it from the ones who have been on this journey already</h4></center>
      <div className="row">
        <div className="column1" >
          <div className="one" >
            <img className="img1" src={"https://images.geekster.in/new-testimonial/Saurabh-Garg.webp"} alt="logo" onClick={() => { CurrentSlide(); }} />
            <img className="img2" src={"https://images.geekster.in/new-testimonial/Naveen-Katiyar.webp"} alt="logo" onClick={() => { CurrentSlide1(); }} />
          </div>
          <div className="two">
            <img className="img3" src={"https://images.geekster.in/new-testimonial/Kaushal-Sorathiya.webp"} alt="logo" onClick={() => { CurrentSlide2(); }} />
          </div>
          <div className="three">
            <img className="img4" src={"https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp"} alt="logo" onClick={() => { CurrentSlide3(); }} />
            <img className="img5" src={"https://images.geekster.in/new-testimonial/Gajendra-Malviya.webp"} alt="logo" onClick={() => { CurrentSlide4(); }} />
          </div>
          <div className="seven">
            <img className="img6" src={"https://images.geekster.in/new-testimonial/Nipun-Sinha.webp"} alt="logo" onClick={() => { CurrentSlide5(); }} />
          </div>
        </div>

        <div className="column2">
          <AiOutlineLeft className="arrow prev" onClick={prevSlide} />
          <AiOutlineRight className="arrow next" onClick={nextSlide} />
          <div className="slider" id="sliderdata">
            {sliderData.map((slide, index) => {
              return (
                <div>
                  <div className="row1">
                    <div
                      className={index === currentSlide ? "slide current" : "slide"}
                      key={index}>
                      <div className="column3">
                        {index === currentSlide && (
                          <div>
                            <img src={slide.image} alt="slide" className="image" />
                            <h4 className="name">{slide.title}</h4>
                            <img src={slide.subTitle} alt="slide" id="company" />
                          </div>
                        )}</div>
                      <div className="column4">
                        <img className="youtube" src={youtube} alt="logo" />
                        <span>
                        <a rel="noreferrer" className="visit" href="https://www.youtube.com/watch?v=D_Tz9LOzX6Q&feature=emb_imp_woyt" target="_blank">Watch Testimonial</a>
                        </span>
                        <p className="description" >{slide.desc}</p>
                        <br />
                        <a rel="noreferrer" className="readmore" href="https://geekster.in/student-testimony?name=Kaushal+Sorathiya" target="_blank">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="more">Read More Testimonials</button>
        </div>
        <div className="column5">
          <div className="four">
            <img className="img7 " src={"https://images.geekster.in/new-testimonial/Utkarsh-singh.webp"} alt="logo" onClick={() => { CurrentSlide6(); }} />
            <img className="img8" src={"https://images.geekster.in/new-testimonial/Prakhar-Agarwal.webp"} alt="logo" onClick={() => { CurrentSlide7(); }} />
          </div>
          <div className="five">
            <img className="img9" src={"https://images.geekster.in/new-testimonial/Karri-Devi.webp"} alt="logo" onClick={() => { CurrentSlide8(); }} />
          </div>
          <div className="six">
            <img className="img10" src={"https://images.geekster.in/new-testimonial/Pawan-Kumar.webp"} alt="logo" onClick={() => { CurrentSlide9(); }} />
            <img className="img11" src={"https://images.geekster.in/placed/Vamsi-Krishna.webp"} alt="logo" onClick={() => { CurrentSlide10(); }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;