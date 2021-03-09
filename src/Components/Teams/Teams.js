import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Teams.css';

const Teams = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams));
    }, [])

    return (
        <div>
            <div className="banner text-white d-flex justify-content-center align-items-center">
                <h1>Football Kings</h1>
            </div>
            <div className="teams-main-container">
                <div className="container py-4 teams-container d-flex flex-wrap align-items-center justify-content-around">
                    {
                        teams.map(team => <Team key={team.idTeam} team={team} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Teams;