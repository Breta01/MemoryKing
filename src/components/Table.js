import React from 'react';
import moment from 'moment';

const Table = ({ stats }) => (
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Date</th>
              <th className="mdl-data-table__cell--non-numeric">Game</th>
              <th>Score</th>
              <th>Speed</th>
              <th>Correct</th>
              <th>Mistakes</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, i) =>
                <tr key={i}>
                  <td className="mdl-data-table__cell--non-numeric">{moment(stat.timestamp).format("MMM Do YY")}</td>
                  <td className="mdl-data-table__cell--non-numeric">{stat.game}</td>
                  <td>{stat.score}</td>
                  <td>{stat.speed / 100}</td>
                  <td>{stat.correct}</td>
                  <td>{stat.mistakes}</td>
                </tr>
            )}
          </tbody>
        </table>
    )


export default Table;
