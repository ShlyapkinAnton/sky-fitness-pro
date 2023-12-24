import { Button } from "./button.style"

export const BaseButton = ({theme, text, action}) => {
    return <Button onClick={action} $theme={theme}>{text}</Button>
}