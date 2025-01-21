export default function SignIn() {
    return (
      <div>
        <h1>Sign In</h1>
        <form method="post" action="/api/auth/callback/credentials">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
  