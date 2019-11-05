import React from 'react';


//Virs kortelius atsirastu zanru mygtukai, paspaudus
//sarasas rodo tik to zanro filmus
export default class Card extends React.Component{

    constructor(props) {
        super();

        this.state = {
            title: props.title,
            showDescription:true,
        }
    }

    render() {
        const { showDescription} = this.state;
        const { title, backgroundImage, date, description, rating, votes, isLiked } = this.props;

        return (
        <div className="card">
        <div className="card__image"
        style={{
            backgroundImage: `url(${backgroundImage})`
        }}/>
    
        <div className="card__title">
            {title}
        </div>
    
        <div className="card__like">
            <i onClick={() => {this.setState({
                isLiked: isLiked ? false : true
            });}} className={isLiked ? "fa fa-heart" : "fa fa-heart-o"}></i>
        </div>
    
        <div className="card__subtitle">
            <span>{date}</span>
            <span>{rating} ({votes} votes)</span>
        </div>
    
        <div className="card-info">
            <div className="card-info__header">Summary</div>
            <div className="card-info__description">
                {showDescription ? description : null}
            </div>
        </div>
    </div>
    );
    }
}