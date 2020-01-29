import React from 'react';
import './Footer.css'; 
import SimpleMap from './SimpleMap';


class Footer extends React.Component {
    render () {
        return (
            <div className="footer">
                <section className="map">
                    <SimpleMap />
                </section>
                <section className="contacts">

                </section>
            </div>
        );
    }
}


export default Footer;