import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css';
import { Link } from 'react-router-dom';

const Team = ({ team }) => {
    const { idTeam, strTeamBadge, strTeam, strSport } = team;
    return (
        <div className='text-center bg-white team p-3 m-3 rounded'>
            <img className='team-badge' src={strTeamBadge} alt="" />
            <h5 className='py-2'>{strTeam}</h5>
            <p className='text-secondary'>Sports type: {strSport}</p>
            <Link to={`/team/${idTeam}`}>
                <button className="btn btn-primary">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
            </Link>
        </div>
    );
};

export default Team;