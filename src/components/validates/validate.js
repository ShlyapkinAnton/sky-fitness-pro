export const Validate = ({email, password, repeatPassword, setError}) => {

    if (email?.length < 4) {
        setError('Логин должен быть больше 4 символов')
        return 
    }
    if (email?.includes('<') || email?.includes('>')){
        setError('Логин не может содержать < или >')
        return 
    }
    if (password?.length < 4 || !/[A-Z]/.test(password)) {
        setError('Пароль должен быть больше 4 символов и иметь хотябы одну заглавную букву')
        return
    }
    if (password?.includes('<') || password?.includes('>')) {
        setError('Пароль не может содержать < или >')
        return
    }
    if (!email || !password) {
        setError('Заполните поле ввода')
        return
    }
    if ( !email || !password || !repeatPassword) {
        setError('Заполните поле ввода')
        return
    }
    if (password !== repeatPassword) {
        setError('Пароли не совпадают')
        return
    }
}