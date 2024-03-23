import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/icons/Logo.svg'
import { Plus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';


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
                    <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                            <Dialog.Title>Nova transação</Dialog.Title>
                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>

                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}