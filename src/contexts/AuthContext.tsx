import { v4 as uuid } from 'uuid';
import { createContext, useState, useEffect } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'
import { api } from '@/services/api'

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data) => Promise<void>;
  signOut: any;
  user: any
}

export const AuthContext = createContext({

} as AuthContextType)

export function AuthProvider({children}){
  const [ user, setUser ] = useState(null)

  const isAuthenticated = !!user
  const authenticated = {
    token: uuid(),
    user: {
      name: 'Douglas Prado',
    }
  }
  useEffect(() => {
    const { 'trading.token': token } = parseCookies()
    if(token) {
      setUser(authenticated.user)
    }
  }, [])


  async function signIn({ email, password }) {
    setCookie(null, 'trading.token', authenticated.token, {
      maxAge: 60 * 60 * 1, //1 hour
      path: '/',
    })

    setUser(authenticated.user)
    Router.push('/');
  }

  function signOut(){
    destroyCookie(null, 'trading.token')
    Router.push('/authentication/login');
  }

  api.defaults.headers['Authorization'] = `Bearer ${authenticated.token}`

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}


