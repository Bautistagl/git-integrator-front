import { useSession, signIn, signOut } from "next-auth/react"


const  Component = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {console.log(session)}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      {console.log(session)}
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Component