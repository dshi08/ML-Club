import React from 'react'


function CardItem(props) {
    return (
        <li className='cards-item'>
            <a
            href={props.path}
            className='cards-item-link'
            target="_blank"
            rel="noopener noreferrer"
            >
                <figure className='cards-item-pic-wrap' data-category={props.label}>
                    <img src={props.src} alt="alt" className='cards-item-img'/>
                </figure>
                <div className='cards-item-info'>
                    <h5 className='cards-item-text'>
                        {props.text}
                    </h5>
                </div>
            </a>
        </li>
    );
}

export default CardItem;