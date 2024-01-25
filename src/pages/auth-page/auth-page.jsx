import { Link, useNavigate } from 'react-router-dom'
import * as S from './auth-page.styles'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { Logo } from '../../components/logo/logo'
import { Validate } from '../../components/validates/validate.js'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, app } from '../../firebase.js'
// import { getAuth } from "firebase/auth"
import { setAuth } from '../../store/slices/auth'
// import firebase from '../../firebase';

export const AuthPage = ({theme, setUser}) => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const navigate = useNavigate()
  const [buttonActive, setButtonActive] = useState(false)
  // const auth = getAuth()

  const handleLogin = async ({ email, password }) => {

    Validate({email, password, setError})

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setAuth({
              accessToken: user.accessToken,
              email: user.email,
              uid: user.uid,
              refreshToken: user.stsTokenManager.refreshToken,
          }),
          setUser(user.email)
        )
      })
      setButtonActive(true)
      navigate('/', { replace: true })
      setError(null)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      if (error.message === 'Firebase: Error (auth/invalid-credential).') {
        setError('Ошибка авторизации: Недопустимые учетные данные')
      } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Ошибка авторизации: Неверный адрес электронной почты')
      } else {
        setError(`Ошибка авторизации: ${error.message}`)
      }
    } finally {
      setButtonActive(false)
    }
  }

  const handleRegister = async ({ email, password, repeatPassword }) => {

    Validate({email, password, repeatPassword, setError});

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
            setAuth({
              accessToken: user.accessToken,
              email: user.email,
              uid: user.uid,
              refreshToken: user.stsTokenManager.refreshToken,
            }),
            setUser(user.email)
        )
    })
      setButtonActive(true)
      navigate('/', { replace: true })
      setError(null)
      setIsLoginMode(true)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      if (error.message === 'Firebase: Error (auth/invalid-credential).') {
        setError('Ошибка авторизации: Недопустимые учетные данные')
      } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Ошибка авторизации: Неверный адрес электронной почты')
      } else {
        setError(`Ошибка авторизации: ${error.message}`)
      }
    } finally {
      setButtonActive(false)
    }
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <MainLayout theme={theme} isShowButton = {false}>
    <S.PageContainer>

        <S.ModalForm>
            <Logo theme="black" onClick={() => setIsLoginMode(true)}/>
            {isLoginMode ? (
            <>
                <S.Inputs>
                    <S.ModalInput
                      type="email"
                      name="login"
                      placeholder="Логин"
                      value={email}
                      onChange={(event) => {
                      setEmail(event.target.value)
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
                    onClick={() => handleLogin({ email, password })}
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
                    type="email"
                    name="login"
                    placeholder="Логин"
                    value={email}
                    onChange={(event) => {setEmail(event.target.value)}}
                  />
                  <S.ModalInput
                    type="new-password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(event) => {setPassword(event.target.value)}}
                  />
                  <S.ModalInput
                    type="new-password"
                    name="password"
                    placeholder="Повторите пароль"
                    value={repeatPassword}
                    onChange={(event) => {setRepeatPassword(event.target.value)}}
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
