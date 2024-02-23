import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import CustomInput from "../components/CustomInput";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Email should be valid"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Login</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-2"
                >
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <div className="input-error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                  <div className="input-error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password ?</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button type="submit" className="button border-0">
                        Login
                      </button>
                      <Link to="/sign-up" className="button signup">
                        SignUp
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
