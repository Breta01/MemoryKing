import React from 'react';
import moment from 'moment';

const Table = ({ stats }) => (
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--1dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Game</th>
              <th>Score</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>
            {stats.reverse().map((stat, i) =>
                <tr key={i}>
                  <td className="mdl-data-table__cell--non-numeric">{stat.game}</td>
                  <td>{stat.score}</td>
                  <td>{stat.speed / 100}</td>
                </tr>
            )}
          </tbody>
        </table>
    )


export default Table;
