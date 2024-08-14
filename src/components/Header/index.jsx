import {RiShutDownLine} from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles";


export function Header(){
    const { signOut } = useAuth();

    return (
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/joabsonvasconcelos.png" 
                    alt="Foto do usuário" 
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Joabson Vasconcelos</strong>
                </div>
            </Profile>

            <Logout onClick={ signOut }>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
};
