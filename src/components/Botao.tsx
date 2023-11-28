import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    autoSize?: boolean;
    color?: string;
}

export function Botao ({ children, autoSize= false, color, ...rest}: ButtonProps){
    return(
        <Button 
            width={autoSize ? 'auto' : '100%'}
            bg={color || '#005478'}
            borderRadius='lg'
            _text={{color: 'white'}}
            {...rest}
        >
            {children}
        </Button>
    )
}