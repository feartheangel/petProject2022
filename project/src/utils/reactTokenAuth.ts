import { createAuthProvider } from 'react-token-auth'
export interface AuthResponse {
  detail: string
  access_token: string
  refresh_token: string
  token_type: string
}

export const { useAuth, login, logout } = createAuthProvider<AuthResponse>({
  getAccessToken: session => session.access_token,
  storage: localStorage,
  onUpdateToken: token =>
    fetch('/api/auth/refresh', {
      method: 'POST',
      body: token.refresh_token
    }).then(response => response.json())
})
