import { Link, useNavigate } from 'react-router-dom'
import * as S from './auth-page.styles'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { Logo } from '../../components/logo/logo'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase.js'
import { setAuth } from '../../store/slices/auth'

export const AuthPage = ({theme}) => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const navigate = useNavigate()
  const [buttonActive, setButtonActive] = useState(false)

  const handleLogin = async ({ email, password }) => {

    if (email.length < 4) {
      setError('Логин должен быть больше 4 символов')
      return
    }

    if (email.includes('<') || email.includes('>')){
      setError('Логин не может содержать < или >')
      return
    }

    if (password.length < 4 || !/[A-Z]/.test(password)) {
      setError('Пароль должен быть больше 4 символов и иметь хотябы одну заглавную букву')
      return
    }

    if (password.includes('<') || password.includes('>')) {
      setError('Пароль не может содержать < или >')
      return
    }

    if (!email || !password) {
      setError('Заполните поле ввода')
      return
    }

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
        )
      })
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

    if (email.length < 4) {
      setError('Логин должен быть больше 4 символов')
      return
    }

    if (email.includes('<') || email.includes('>')){
      setError('Логин не может содержать < или >')
      return
    }

    if (password.length < 4 || !/[A-Z]/.test(password)) {
      setError('Пароль должен быть больше 4 символов и иметь хотябы одну заглавную букву')
      return
    }

    if (password.includes('<') || password.includes('>')) {
      setError('Пароль не может содержать < или >')
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
        )
    })
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
