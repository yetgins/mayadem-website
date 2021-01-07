import styled from 'styled-components';
import { FaHome,FaPhoneAlt,FaRegEnvelope } from "react-icons/fa";

export const ContactContainer=styled.div`
    background-color:ghostwhite;
    margin-bottom:50px;
    display:flex;
    justify-content:center;
`;

export const ContactContent=styled.div`
    margin-top:40px;
    margin-bottom:40px;
    margin-left:70px;
`;

export const ContactHeading=styled.h2`
    color: #A93226;
    font-size:28px;
    font-weight:500;
`;

export const ContactAdress=styled.div`
    text-align:left;
`;

export const ContactImg=styled.img`
    width:90%;
`;

export const ContactFaHome=styled(FaHome)`
    color:cornflowerblue;
`;

export const ContactFaPhoneAlt=styled(FaPhoneAlt)`
    color:orange;
`;

export const ContactFaRegEnvelope=styled(FaRegEnvelope)`
    color:firebrick;
`;