import { useFrappeAuth } from "frappe-react-sdk";
import { Fragment, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useLocation, useNavigate } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Login = () => {
  let { pathname } = useLocation();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { currentUser, isValidating, isLoading, login, logout, error } =
    useFrappeAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login({
        username: email,
        password: password,
      });
      navigate("/");
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login evcar eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: "/" },
            { label: "Login Register", path: pathname },
          ]}
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleLogin} autoComplete="off">
                              <input
                                type="email"
                                name="user-name"
                                placeholder="Username"
                                value={email}
                                required
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <input
                                type="password"
                                name="user-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="off"
                                placeholder="Password"
                              />
                              <div className="button-box">
                                {/* <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={"/"}>Forgot Password?</Link>
                                </div> */}
                                <button type="submit" disabled={isLoading}>
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                            {message && (
                              <p style={{ marginTop: "15px", color: "red" }}>
                                {message}
                              </p>
                            )}
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Login;
