import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div>
      <h1>Login or Sign Up</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
      <a href="/forgot-password">Forgot Password?</a>
    </div>
  )
}