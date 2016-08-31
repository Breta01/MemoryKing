import React from 'react';

const Table = ({ stat }) => (
            <div className="statTable">
                <p><strong>{stat.game} Score:</strong> {stat.score}</p>
            </div>
        )


export default Table;
