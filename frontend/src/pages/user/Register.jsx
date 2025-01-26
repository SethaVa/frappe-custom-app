import { Fragment, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useLocation, useNavigate } from "react-router-dom";
import { z, ZodError } from "zod";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const signUpSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

const Register = () => {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setErrors({});

      const validatedData = signUpSchema.parse(data);

      const response = await fetch(
        "/api/method/evcar.api.user.register_user_and_customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: validatedData.email,
            password: validatedData.password,
            first_name: validatedData.firstname,
            last_name: validatedData.lastname,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      navigate("/login");
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = {};
        error.errors.forEach((err) => {
          if (err.path) {
            formattedErrors[err.path[0]] = err.message;
          }
        });
        setErrors(formattedErrors);
      } else {
        setErrors({ submit: "Failed to sign up. Please try again." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
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
            { label: "Register", path: pathname },
          ]}
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="register">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit(formData);
                              }}
                            >
                              <input
                                id="firstname"
                                name="firstname"
                                type="text"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                                placeholder="Firstname"
                                className={
                                  errors.firstname ? "border border-danger" : ""
                                }
                              />
                              <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                placeholder="Lastname"
                                className={
                                  errors.lastname ? "border border-danger" : ""
                                }
                              />
                              <input
                                placeholder="Email"
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={
                                  errors.email ? "border border-danger" : ""
                                }
                              />
                              <input
                                placeholder="Password"
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className={
                                  errors.password ? "border border-danger" : ""
                                }
                              />

                              <div className="button-box">
                                <button type="submit" disabled={isSubmitting}>
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
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

export default Register;
