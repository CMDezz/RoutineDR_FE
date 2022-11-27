import * as React from 'react';

interface  InputFormProps {
    className?:string;
    placeholder?:string;
    register?: any;
    type?:string;
    autoComplete?:string
}

const InputForm: React.FunctionComponent< InputFormProps> =
 ({
    className='form-control px-3 py-2 my-2',
    placeholder='',
    type='text',
    register={},
    autoComplete='new-password'
}) => {
  return (
    <input type={type} className={className} placeholder={placeholder} autoComplete={autoComplete}
    {...register}
  />
  )
};

export default InputForm;
