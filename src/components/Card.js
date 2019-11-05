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

    // sendState (title) {
    //     this.props.favorites.includes(title) ? this.props.addFavorite() : this.props.removeFavorite();
    // }

    render() {
        const { showDescription} = this.state;
        const { title, backgroundImage, date, description, rating, votes } = this.props;

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
            {/*<i onClick={() => {this.sendState(title)}} className={favorites.includes(title) ? "fa fa-heart" : "fa fa-heart-o"}></i>*/}
            <i className={false ? "fa fa-heart" : "fa fa-heart-o"}></i>
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