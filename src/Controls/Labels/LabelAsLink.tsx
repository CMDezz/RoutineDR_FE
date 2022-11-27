import * as React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  &:hover{
    text-decoration:underline;
    cursor:pointer
  }
`

interface  LabelAsLinkProps {
  className?:string;
  OnClick?:any;
  text:string;
}

const LabelAsLink: React.FunctionComponent< LabelAsLinkProps> = ({className='',text='',OnClick}) => {
  return <>
  <StyledSpan className={className} onClick={()=>OnClick()}>{text} </StyledSpan>
  </>
};

export default LabelAsLink;
