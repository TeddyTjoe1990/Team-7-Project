import Layout from '../components/layouts/Layout';

function Register(){
  return(
    <div>
      <h1 className="font-heading text-4xl"> Register </h1>
      <form className="m-3 p-3" action="/controller/register" method="post">
        <label>
          E-Mail Address
        </label>
        <input type='email' name='email' placeholder='Type your email'></input>
        <label>
          Password
        </label>
        <input type='password' name='password' placeholder='Type your password'></input>
        <input className="outline m-3 p-2 rounded-md hover:bg-gray-200" type='submit' value='Register'></input>
      </form>

      <h1 className="font-heading text-4xl">Login</h1>
      <form className="m-3 p-3" action="/controller/register" method="post">
        <label>
          E-Mail Address
        </label>
        <input type='email' name='email' placeholder='Type your email'></input>
        <label>
          Pasword
        </label>
        <input type='password' name='password' placeholder='Type your password'></input>
        <input className="outline m-3 p-2 rounded-md hover:bg-gray-200" type='submit' value='Login'></input>

      </form>
    </div>
  )
}

Register.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Register;