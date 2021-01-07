import React from 'react';
import {ContactAdress,ContactContainer,ContactContent,ContactHeading,ContactFaHome, ContactFaPhoneAlt, ContactFaRegEnvelope,ContactImg} from './Contact.styles';

const Contact = () => {
    return (
        <ContactContainer>
            <ContactContent>
                <ContactHeading>Merkez Ofis</ContactHeading>
                <ContactAdress> 
                    <div><ContactFaHome />Kuşbakışı Caddesi,</div>
                    <div>17 – 1 Altunizade</div>
                    <div>Üsküdar / İstanbul</div>
                    <br/>
                    <div><ContactFaPhoneAlt />0216 504 20 55</div>
                    <div><ContactFaRegEnvelope /><a href='mailto:iletisim@mayadem.com' >iletisim@mayadem.com</a></div>
                </ContactAdress>
            </ContactContent>

            <ContactContent>
                <ContactHeading>AR-GE Merkezi</ContactHeading>
                <ContactAdress> 
                    <div><ContactFaHome />Acibadem Mahallesi Gayretli</div>
                    <div>Sokak Dişlioğlu apt. Kat:2 No:3</div>
                    <div>Üsküdar / İstanbul</div>
                    <br/>
                    <div><ContactFaPhoneAlt />0216 504 20 55</div>
                    <div><ContactFaRegEnvelope /><a href='mailto:iletisim@mayadem.com' >iletisim@mayadem.com</a></div>
                </ContactAdress>
            </ContactContent>
            <ContactContent>
                <ContactImg src='https://lh3.googleusercontent.com/proxy/PCuFtzbLbPNpntJDtdqBDnHIoW0-XDS1-2uuo5eMbbzdwSQDAfdzOYxMEyFw-jItk-1lx0RhbYcWAhtNDRw8ckb9xpZ7IsDBlA4Puwd_MlueSfafOmLEgmGmlZs' alt='' />
            </ContactContent>
           
        </ContactContainer>
    )
}

export default Contact
