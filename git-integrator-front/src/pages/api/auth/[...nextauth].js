import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  
  providers: [
    GithubProvider({
      clientId: 'Iv1.dc11b1e22135af26',
      clientSecret: 'c640ddfd4d07be575ee5c9e069daf218a9ea0e34',
    }),
    
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }
}


export default NextAuth(authOptions)