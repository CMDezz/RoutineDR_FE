import * as React from 'react';
import { useState } from 'react';
import {signInPageAction} from '@/Common/enum';
import SignUpForm from '@/Components/SignUpForm'
import SignInForm from '@/Components/SignInForm'
import {Link} from 'react-router-dom'
import UserFormWrapper from '@/Controls/UserForm/UserFormWrapper';
import './scss/index.scss'
import LabelAsLink from '@/Controls/Labels/LabelAsLink'

interface SignInPageProps {
}
interface NavigateLinksProps{
    _status:number;
    _setSatus:any;
}

const NavigateLinks:React.FunctionComponent<NavigateLinksProps>=(props)=>{
    return <>
        {props._status === signInPageAction.signIn?
        <LabelAsLink text={'Chưa có tài khoản?Đăng ký'} OnClick={()=>{props._setSatus(signInPageAction.signUp)}} />
        :
        <LabelAsLink text={'Đã có tài khoản? Đăng nhập'} OnClick={()=>{props._setSatus(signInPageAction.signIn)}} />
        // <span className='d-block asLink' onClick={()=>props._setSatus(signInPageAction.signIn)} >Đã có tài khoản? Đăng nhập</span>
        }
    </>
}

const SignInPage: React.FunctionComponent<SignInPageProps> = (props) => {
    const [status,setStatus] = useState(signInPageAction.signUp)
    
    const handleStatusSignInPage = ():React.ReactNode=>{
        switch(status){
            case signInPageAction.signIn:
                return <SignInForm  />
            case signInPageAction.signUp:
               return  <SignUpForm />
        }
    }
  return (
    <div className="SignInPage " style={{height:'100vh'}}>
        <div className="SignInContent col-6">
        <UserFormWrapper>
        {handleStatusSignInPage()}
        </UserFormWrapper>
        <NavigateLinks _status={status} _setSatus={setStatus}/>

        </div>
    </div>
  )
};

export default SignInPage;
