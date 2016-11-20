import React from 'react';

export default function GamesList({ games }) {
    const emptyMessage = (
        <p>There are no games in your list yet. Add some games and check back again.</p>
    );

    const gamesList = (
        <p>games list</p>
    );
    return (
        <div>
            {games.length === 0 ? emptyMessage : gamesList }
        </div>
    );
}

GamesList.propTypes = {
    games: React.PropTypes.array.isRequired
}