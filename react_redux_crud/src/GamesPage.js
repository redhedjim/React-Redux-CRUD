import React from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList.js';
import { fetchGames } from './actions'
class GamesPage extends React.Component {
    componentDidMount() {
        this.props.fetchGames();
    }
    render() {
        return(
            <div>
                <h1>Games list</h1>
                <GamesList games={this.props.games} />
            </div>
        )
    }
}

GamesPage.propTypes = {
    games: React.PropTypes.array.isRequired,
    fetchGames: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        games: state.games
    }
}
export default connect(mapStateToProps, {fetchGames})(GamesPage);