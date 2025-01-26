import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your email" },
        password: { label: "Password", type: "password", placeholder: "your password" },
      },
      async authorize(credentials) {
        console.log('Credentials received:', credentials); // Debugging log

        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        // Example: Static validation
        if (email === "admin@example.com" && password === "password123") {
          return { id: "1", name: "Admin User", email: "admin@example.com" };
        }

        return null; // Return null for invalid credentials
      },
    }),
  ],
  debug: true, // Enable debugging
});

export { handler as GET, handler as POST };
    