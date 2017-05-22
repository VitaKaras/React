import React from 'react';

class TeamSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        let data = [
            {title: 'Works', number: 4609, favicon: <i className="fa fa-briefcase fa-2x" />},
            {title: 'Customers', number: 3470, favicon: <i className="fa fa-user fa-2x" />},
            {title: 'Purchase', number: 2908, favicon: <i className="fa fa-shopping-cart fa-2x" />},
            {title: 'Office', number: 1908, favicon: <i className="fa fa-map-marker fa-2x" />}
        ];

        let teamData = [
            {name: 'Al Masum', position: 'Founder', src: 'img/team_member1.jpg'},
            {name: 'Mis Liza', position: 'UX Designer', src: 'img/team_member1.jpg'},
            {name: 'Hasan Mahmud', position: 'Web Designer', src: 'img/team_member1.jpg'},
            {name: 'Afifa Jannat', position: 'Web Developer', src: 'img/team_member1.jpg'}
        ];

        return (
            <section id="team">
                <div className="light-bg">
                    <div className="container clearfix section-offset-bottom">
                        <div className="title-content">
                            <h1>Meet Our Team</h1>
                            <hr /><hr />
                        </div>
                        <div className="row">
                            {teamData.map((item, index) => {
                                return (
                                     <div key={index} className="col-xs-12 col-sm-6 col-md-3">
                                        <div className="team-member clearfix">
                                            <div className="team-member-photo">
                                                <img src={item.src} />
                                                <div className="photo-mask">
                                                    <div className="circle">
                                                        <i className="fa fa-plus fa-2x" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="team-member-title">
                                                <h2 className="team-member-name">{item.name}</h2>
                                                <p className="team-member-position">{item.position}</p>
                                            </div>
                                            <div className="team-member-links">
                                                <a href="https://facebook.com"><i className="fa fa-facebook fa-lg" /></a>
                                                <a href="https://twitter.com"><i className="fa fa-twitter fa-lg" /></a>
                                                <a href="https://skype.com"><i className="fa fa-skype fa-lg" /></a>
                                                <a href="https://vimeo.com"><i className="fa fa-vimeo fa-lg" /></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}; 
                        </div>
                    </div>
                     <ul className="team-facts clearfix">
                         {data.map((item, index) => {
                            return (
                                <li className="team-facts-item" key={index}>
                                    <div className="fact-circle">
                                        {item.favicon}
                                    </div>
                                    <p className="fact-number">{item.number}</p>
                                    <h2 className="fact-title">{item.title}</h2>
                                </li>  
                            )
                        })};                          
                    </ul>
                </div>
            </section>
        )
    }
}

export default TeamSection;