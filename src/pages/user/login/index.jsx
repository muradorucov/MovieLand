import { Link } from "react-router-dom";

function Login() {
  return (
    <section id="user-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-xl-6 col-md-8 col-sm-10 col-12">
            <form>
              <fieldset>
                <legend>Login Page</legend>
                <input type="text" placeholder="username or email" />
                <input type="password" placeholder="Enter password" />
                <input type="password" placeholder="Re-Type password" />
                <input type="submit" value={"Login"} />
                <span>
                  <Link to="/register">register page</Link>
                </span>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
