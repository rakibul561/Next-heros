import NextAuth, { User } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: { label: "Email", type: "text", required: true, placeholder: "your email" },
        password: { label: "Password", type: "password", required: true, placeholder: "your Password" },
      },
      async authorize(credentials) {
        // টাইপ চেক: credentials থাকতে হবে এবং তাতে email এবং password থাকতে হবে
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        // উদাহরণস্বরূপ ইউজার যাচাই লজিক (ডাটাবেস ব্যবহার করুন)
        if (credentials.email === "test@example.com" && credentials.password === "password") {
          const user: User = {
            id: "1",
            name: "John Doe",
            email: credentials.email,
          };
          return user; // সঠিক টাইপ রিটার্ন করা হচ্ছে
        }

        return null; // যাচাই ব্যর্থ হলে null রিটার্ন
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // সাইন-ইন পেজের রুট
  },
});

export { handler as POST };
