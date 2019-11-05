import React from 'react'
import Card from './Card';
import axios from 'axios';
import { endpoints, getImageUrl } from '../config';

class App extends React.Component {
    //gauti sarasa filmu
    // pastorinti siuos duomenis
    // isvesti korteles priklausomai nuo duomenu savo

    constructor() {
        super();

        this.state = {
            list: [],
            genres_list: [],
            // favorites: [],
        };
    }

    // onAddItem = (newmovie) => {
    //     this.setState(state => {
    //         const favorites = state.favorites.concat(newmovie);
    //         return {
    //             favorites,
    //         };
    //     });
    // };

    // onRemoveItem = (title) => {
    //     this.setState(state => {
    //         const favorites = state.favorites.filter(item => item !== title);
    //         return {
    //             favorites,
    //         };
    //     });
    // };

    componentDidMount() {
        const request = axios
        .get(endpoints.mostPopularMovies())
        .then((data) => {
            this.setState({
                list: data.data.results,
            });
        });

        axios.get(endpoints.genres())
        .then((data) => {

            this.setState({
                genres_list: data.data.genres,
            });
        });
    }

    activateGenres(id) {
        axios.get(endpoints.genreMovies(id))
        .then((data) => {
            this.setState({
                list: data.data.results,
            });
        });
    }

    //Vienintelis, kas reikalinga
    render() {
        return(
            <div>
                <div>
                    {this.state.genres_list.map((gen) => (
                        <button onClick={() => {this.activateGenres(gen.id)}}>
                            {gen.name}
                        </button>
                    ))}
                </div>
                {this.state.list.map((card) => (
                    <Card
                        key={card.original_title}
                        backgroundImage={getImageUrl(card.backdrop_path)}
                        title={card.original_title}
                        date={card.release_date}
                        rating={card.vote_average}
                        description={card.overview}
                        votes={card.vote_count}
                        // addFavorite={this.onAddItem(card.title)}
                        // removeFavorite={this.onRemoveItem(card.title)}
                        // favoritesList = {this.state.favorites}
                    />
                ))}
            </div>
        );
    }
}

export default App;