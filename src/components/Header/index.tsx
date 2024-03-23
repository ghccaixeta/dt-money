import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/icons/Logo.svg'
import { Plus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import { TransactionModal } from "../TransactionModal";


export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>

                        <NewTransactionButton>
                            <Plus size={20} />
                            Nova transação
                        </NewTransactionButton>
                    </Dialog.Trigger>
                    <TransactionModal />

                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}