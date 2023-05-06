import React from "react"
import { CardActionArea } from "@mui/material"

const TeamItem = () => {
    return (
        <div className="col-lg-4">
            <CardActionArea href="/blog">
                <div className="team">
                    <div className="team-img">
                        <img src="/img/team.jpg" alt="team" />
                    </div>
                    <div className="team-info">
                        <h5 className="team-name">Proje Adı</h5>
                        <h6 className="team-position">Proje Açıklaması</h6>
                        <div className="social-links">
                            <div className="social-item"><i className="fab fa-facebook"></i></div>
                            <div className="social-item"><i className="fab fa-twitter"></i></div>
                            <div className="social-item"><i className="fab fa-instagram"></i></div>
                            <div className="social-item"><i className="fab fa-linkedin"></i></div>
                        </div>
                    </div>
                </div>
            </CardActionArea>
        </div>
    )
}

export default TeamItem