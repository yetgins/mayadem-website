import styled from 'styled-components';
import {FaLock} from 'react-icons/fa';

export const PolicyContainer=styled.div`
    background: #EBF5FB;
    width:100%;
    margin-top:30px;
    margin-bottom:10px;
    align-items:center;
    display:flex;
    flex-direction:column;
`;

export const PolicyHeading=styled.h2`
    margin-top:0px;
    color: #A93226;
`;

export const PolicyImage=styled(FaLock)`
    align-items:center;
    color:lightskyblue;
    width:100px;
    height:170px;
`;

export const PolicyList=styled.ul`
    text-align:justify;
`;