import React from 'react';
import './Footer.css'; 
import SimpleMap from './SimpleMap';
import fb from '../../image/icons/fb.png';
import viber from '../../image/icons/viber.png';
import instagram from '../../image/icons/instagram.png';
import FormConts from './FormCont/FormCont';


class Footer extends React.Component {
    render () {
        return (
            <div className="footer">
                <div className="footer-1">
                    <section className="map">
                        <SimpleMap />
                    </section>
                    <section className="contacts">
                        <FormConts />
                    </section>
            </div>
            <div className="footer-2">
                <div className="phone">
                    <p>Вы можете связаться с нами по телефону</p>
                    <a href="tel:+380936345650">+38(093)634-56-50</a>
                 </div>
                <div className="soc-net">
                    <div>
                        <p>Мы в социальных сетях</p>
                        <div className="icons">  
                            <a href='https://www.facebook.com/kadyrovasabina?ref=bookmarks'>
                                <img className="soc-img" src={fb} alt="/"/>
                            </a>
                            <a href="viber://chat?number=+380936345650">
                                <img className="soc-img" src={viber} alt="/"/>
                            </a>
                            <a href='https://www.instagram.com/memet_qiziyim/'>
                                <img className="soc-img" src={instagram} alt="/"/>
                          </a>
                        </div>
                    </div>            
                </div>
            </div>
            </div>
            
        );
    }
}


export default Footer;