import { Link, useNavigate } from 'react-router-dom'
import * as S from './auth-page.styles'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { getSignUp, getSignIn } from '../../Api'
// import { useAccessTokenUserMutation } from '../../serviceQuery/token'
// import { setAuth } from '../../store/slices/authorizationSlice'
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { Logo } from '../../components/logo/logo'

export const AuthPage = ({theme}) => {
  const [isLoginMode, setIsLoginMode] = useState(true)
//   const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const navigate = useNavigate()
  const [buttonActive, setButtonActive] = useState(false)

//   const [postToken] = useAccessTokenUserMutation()

//   const responseToken = async () => {
//     await postToken({ login, password })
//       .unwrap()
//       .then((token) => {
//         dispatch(
//           setAuth({
//             access: token.access,
//             refresh: token.refresh,
//             user: JSON.parse(localStorage.getItem('user')),
//           })
//         )
//       })
//   }

  const handleLogin = async ({ login, password }) => {
    if (!login || !password) {
      setError('Заполните поле ввода')
      return
    }
    try {
      const response = await getSignIn({ login, password })
      // dispatch(setAuth(response))
      setUser(response)
      localStorage.setItem('user', JSON.stringify(response))
      responseToken()
      setButtonActive(true)
      navigate('/', { replace: true })
      setError(null)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      setError(error.message)
    } finally {
      setButtonActive(false)
    }
  }

  const handleRegister = async () => {
    if ( !login || !password || !repeatPassword) {
      setError('Заполните поле ввода')
      return
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }
    try {
      const response = await getSignUp({ login, password })
      setUser(response)
      localStorage.setItem('user', JSON.stringify(response))
      responseToken()
      setButtonActive(true)
      navigate('/', { replace: true })
      setError(null)
      setIsLoginMode(true)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      setError(error.message)
    } finally {
      setButtonActive(false)
    }
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, login, password, repeatPassword])

  return (
    <MainLayout theme={theme} isShowButton = {false}>
    <S.PageContainer>

        <S.ModalForm>
            <Logo theme="black" onClick={() => setIsLoginMode(true)}/>
            {isLoginMode ? (
            <>
                <S.Inputs>
                    <S.ModalInput
                        type="text"
                        name="login"
                        placeholder="Логин"
                        value={login}
                        onChange={(event) => {
                        setLogin(event.target.value)
                        }}
                    />
                    <S.ModalInput
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(event) => {
                        setPassword(event.target.value)
                        }}
                    />
                </S.Inputs>
                {error && <S.Error>{error}</S.Error>}
                <S.Buttons>
                <S.PrimaryButton
                    disabled={buttonActive}
                    onClick={() => handleLogin({ login, password })}
                >
                    {buttonActive ? 'Выполняется вход...' : 'Войти'}
                </S.PrimaryButton>
                <Link onClick={() => setIsLoginMode(false)} to="/auth">
                    <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
                </Link>
                </S.Buttons>
            </>
            ) : (
            <>
                <S.Inputs>
                    <S.ModalInput
                        type="text"
                        name="login"
                        placeholder="Логин"
                        value={login}
                        onChange={(event) => {
                        setLogin(event.target.value)
                        }}
                    />
                    <S.ModalInput
                        type="new-password"
                        name="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(event) => {
                        setPassword(event.target.value)
                        }}
                    />
                    <S.ModalInput
                        type="new-password"
                        name="password"
                        placeholder="Повторите пароль"
                        value={repeatPassword}
                        onChange={(event) => {
                        setRepeatPassword(event.target.value)
                        }}
                    />
                </S.Inputs>
                {error && <S.Error>{error}</S.Error>}
                <S.Buttons>
                <S.PrimaryButton disabled={buttonActive} onClick={handleRegister}>
                    {buttonActive
                    ? 'Выполняется регистрация...'
                    : 'Зарегистрироваться'}
                </S.PrimaryButton>
                </S.Buttons>
            </>
            )}
        </S.ModalForm>   
    </S.PageContainer>
    </MainLayout> 
  )
}
