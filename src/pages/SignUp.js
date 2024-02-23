import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput";

import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";

const signUpSchema = yup.object({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .nullable()
    .required("Email is required")
    .email("Email should be valid"),
  mobile: yup.string().required("Mobile is required"),
  password: yup.string().required("Password is required"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Sign Up</h3>
                <form
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-2"
                >
                  <CustomInput
                    type="text"
                    name="fristname"
                    placeholder="First Name"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                  />
                  <div className="input-error">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                  <CustomInput
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                  />
                  <div className="input-error">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                  <CustomInput
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                  />
                  <div className="input-error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
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
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button type="submit" className="button border-0">
                        Sign Up
                      </button>
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

export default SignUp;
