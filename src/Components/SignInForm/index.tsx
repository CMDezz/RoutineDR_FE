import * as React from "react";
import { useForm, Resolver } from "react-hook-form";
import InputForm from "@/Controls/Input/FormInput";
interface SignInFormProps {}

type FormValues = {
  account: string;
  password: string;
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
        }
      : {},
  };
};

const SignInForm: React.FunctionComponent<SignInFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="SignInForm px-2 m-auto">
      <h5 >Đăng nhập : </h5>
      <form onSubmit={onSubmit} >
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
        </div>
        <button className="btn btn-info py-2 m-2" type="submit">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
