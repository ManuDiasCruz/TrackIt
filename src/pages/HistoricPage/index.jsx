/* import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components"; */

import { useState, useEffect, useContext } from "react";

import UserContext from "../../contexts/UserContext";

export default function HistoricPage(){
    const context = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${context.token}`
            }
        };

    }, []);

    return(
        <h1>Historic</h1>
    );
}