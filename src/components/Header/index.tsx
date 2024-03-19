import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/icons/Logo.svg'
import { Plus } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <NewTransactionButton>
                    <Plus size={20} />
                    Nova transação
                </NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}