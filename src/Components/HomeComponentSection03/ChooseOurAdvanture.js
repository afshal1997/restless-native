import React from 'react'
import BookNowButton from './../Common/BookNowButton';
const ChooseOurAdvanture = ({ linkPage, subTitle, title, img, paraGraph }) => {
    return (
        <a href={linkPage ?? 'javascript:void(0)'} >
            <img
                src={img}
                alt="HomeSection03Img01"
            />
            <h3><i>{title}</i></h3>
            <h6><i>{subTitle}</i></h6>
            <BookNowButton />
            <p>{paraGraph}</p>
        </a>
    )
}

export default ChooseOurAdvanture