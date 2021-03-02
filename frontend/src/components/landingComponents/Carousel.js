import React, { useEffect, useState, useRef } from 'react'

const Carousel = () => {
    const [images, setImages] = useState([])
    const arrowRef1 = useRef();
    const arrowRef2 = useRef();
    const imageRef1 = useRef();
    const imageRef2 = useRef();


    const slideInArrows = () => {
        const arrow1 = arrowRef1.current;
        const arrow2 = arrowRef2.current;
        arrow1.classList.remove('next-button-hidden');
        arrow2.classList.remove('prev-button-hidden');
        arrow1.classList.add('next-button');
        arrow2.classList.add('prev-button');

    }

    const hideSlideArrows = () => {
        const arrow1 = arrowRef1.current;
        const arrow2 = arrowRef2.current;
        arrow1.classList.remove('next-button');
        arrow2.classList.remove('prev-button');
        arrow1.classList.add('next-button-hidden');
        arrow2.classList.add('prev-button-hidden');
    }

    useEffect(() => {
        const startingImages = [
            <div className='div-image1' key={1} ref={imageRef1}>
                <div className='image-banner'>Build your own teams.</div></div>,
            <div className='div-image2' key={2} ref={imageRef2}>
                <div className='image-banner2'>Find people on your system.</div></div>
        ]
        setImages(startingImages);
    }, [])

    const rotateRight = () => {
        const image1 = imageRef1.current;
        const image2 = imageRef2.current;
        const amount1 = document.querySelector(".div-image1").clientWidth;
        const amount2 = document.querySelector(".div-image2").clientWidth;
        // image1.classList.add('div-image1-rotate-right')
        // image2.classList.add('div-image2-rotate-right')
        // setTimeout(() => {
        //     const copy = images.slice();
        //     const removed = copy.shift();
        //     copy.push(removed);
        //     setImages(copy);
        //     image1.classList.remove('div-image1-rotate-right')
        //     image2.classList.remove('div-image2-rotate-right')
        // }, 1000);

    }

    return (
        <div className='carousel-wrapper' onMouseOver={slideInArrows} onMouseLeave={hideSlideArrows}>
            <i className="far fa-caret-square-right prev-button-hidden" ref={arrowRef2}></i>
                <div className='carousel-container'>
                    {images}
                </div>
            <i className="far fa-caret-square-left next-button-hidden" ref={arrowRef1} onClick={rotateRight}></i>
        </div>
    )
}

export default Carousel;
