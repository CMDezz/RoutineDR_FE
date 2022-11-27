import * as React from "react";
import { useForm, Resolver } from "react-hook-form";
import InputForm from "@/Controls/Input/FormInput";
import "./scss/index.scss";
interface SignUpFormProps {}

type FormValues = {
  account: string;
  password: string;
  email: string;
  phoneNumber: string;
  fullName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.account ? values : {},
    errors: !values.password
      ? {
          account: {
            type: "required",
            message: "Vui lòng nhập tài khoản.",
          },
          password: {
            type: "required",
            message: "Vui lòng nhập mật khẩu.",
          },
          email: {
            type: "required",
            message: "Vui lòng nhập email.",
          },
          phoneNumber: {
            type: "required",
            message: "Vui lòng nhập số điện thoại.",
          },
          fullName: {
            type: "required",
            message: "Vui lòng nhập họ và tên.",
          },
        }
      : {},
  };
};

const SignUpForm: React.FunctionComponent<SignUpFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="SignUpForm px-2 m-auto">
      <h5>Đăng ký : </h5>
      <form onSubmit={onSubmit}>
        <div className="text-start">
          <InputForm register={register("account")} placeholder="Account" />
          {errors?.account && (
            <p className="text-danger">{errors.account.message}</p>
          )}

          <InputForm
            type={"password"}
            register={register("password")}
            placeholder="Password"
          />
          {errors?.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}

          <InputForm register={register("fullName")} placeholder="Họ và Tên" />
          {errors?.fullName && (
            <p className="text-danger">{errors.fullName.message}</p>
          )}
          <InputForm
            type={"email"}
            register={register("email")}
            placeholder="Email"
          />
          {errors?.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
          <InputForm
            register={register("phoneNumber")}
            placeholder="Số điện thoại"
          />
          {errors?.phoneNumber && (
            <p className="text-danger">{errors.phoneNumber.message}</p>
          )}
        </div>

        <button className="btn btn-info py-2 m-2" type="submit">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
