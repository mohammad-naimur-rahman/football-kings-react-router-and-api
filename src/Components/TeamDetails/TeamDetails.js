import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import maleImg from '../../Images/male.png';
import femaleImg from '../../Images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamDetails = () => {
    const { teamID } = useParams();

    const [teamDetail, setTeamDetail] = useState([]);
    const { strCountry, strSport, strTeamBadge, strTeam, strDescriptionEN, strGender, intFormedYear, strFacebook, strTwitter, strYoutube, strStadiumDescription, strTeamBanner } = teamDetail;

    const teamDetailsStyle = {
        height: '30vh',
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${strTeamBanner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]));

    }, [teamID]);
    return (
        <div className='container-fluid' style={{ margin: 0, padding: 0 }}>
            <div className="team-details-banner d-flex justify-content-start align-items-center" style={teamDetailsStyle}>
                <img src={strTeamBadge} className='team-details-badge mx-5' alt="" />
            </div>
            <div className="details">
                <div className="container">
                    <div className="details-info-box px-3 py-2 d-flex align-items-center justify-content-between bg-primary">
                        <div className="details-info text-white">
                            <h4>{strTeam}</h4>
                            <h6><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h6>
                            <h6><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                            <h6><FontAwesomeIcon icon={faFutbol} /> Sport type: {strSport}</h6>
                            <h6><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h6>
                        </div>
                        {
                            strGender === 'Male' && <img src={maleImg} className='details-img' alt="" />
                        }
                        {
                            strGender === 'Female' && <img src={femaleImg} className='details-img' alt="" />
                        }

                    </div>
                    <div className="details-text py-5 px-4">
                        <p className='text-white text-justify'>{strDescriptionEN}</p>
                        <p className='text-white text-justify'>{strStadiumDescription}</p>
                    </div>
                    <div className="social-icons">
                        <a href={'https://' + strTwitter} target="_blank" rel="noreferrer"><span className='twitter'><FontAwesomeIcon icon={faTwitter} /></span></a>
                        <a href={'https://' + strFacebook} target="_blank" rel="noreferrer"><span className='facebook'><FontAwesomeIcon icon={faFacebook} /></span></a>
                        <a href={'https://' + strYoutube} target="_blank" rel="noreferrer"><span className='youtube'><FontAwesomeIcon icon={faYoutube} /></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;