import { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageSlideshow.css';

function Slideshow() {

    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    function fetchGalleryList() {
        axios({
            method: 'GET',
            url: '/gallery'
        }).then((response) => {
            console.log('GET successful', response.data)
            setImages(response.data);
        }).catch((error) => {
            console.log('error in GET', error);
        })
    }

    function changeImageNext() {
        if (index === images.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function changeImagePrevious() {
        if (index === 0) {
            setIndex(4);
        }
        else {
            setIndex(index - 1);
        }
    }

    useEffect(() => {
        fetchGalleryList();
    }, []);

    return (
        <div className='parentDiv'>
            <div className='slideshowContainer'>
                <img src={images[index]?.path} />
                <button onClick={changeImageNext} className='next'>Next</button>
                <button onClick={changeImagePrevious} className='previous'>Previous</button>
            </div>
        </div>
    )
}

export default Slideshow;