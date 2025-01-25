import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email",
             type: "text",
              required: true,
               placeholder: "your email",},

        password: { label: "Password",
             required: true,
              type: "password", 
               placeholder: "your password" }, 

        // Username: { label: "UserName",
        //      type: "text",
        //      required: true,
        //     name: 'username',
        //      placeholder: "your Username" ,
            
        //     }, 
      },
      async authorize(credentials) {
        if (!credentials) {
          return null; // Return null if no credentials provided
        }

        // Example: Validate the credentials (replace with actual logic)
        const { email, password } = credentials;

        // Mock user authentication (replace this with real user validation, e.g., database query)
        if (email === "admin@example.com" && password === "password123") {
          return {
            id: "1", // User ID
            name: "Admin User", // User's name
            email: "admin@example.com", // User's email
          };
        }

        return null; // Return null for invalid credentials
      },
    }),
  ],
});

export { handler as GET, handler as POST };
