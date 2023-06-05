import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #152850;
`
export const LoginContentContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  background-color: #e0eefe;
  border-radius: 10px;
  height: 500px;
`
export const ImageContainer = styled.div`
  flex-basis: 60%;
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 100%;
`
export const Form = styled.form`
  flex-basis: 40%;
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Heading = styled.h1`
  font-size: 30px;
  color: #152850;
`
export const Input = styled.input`
  display: block;
  width: 100%;
  padding-left: 10px;
  outline: none;
  margin-bottom: 20px;
  height: 40px;
`
export const Label = styled.label`
  display: block;
  width: 80%;
  outline: none;
  margin-bottom: 8px;
`
export const LoginButton = styled.button`
  padding: 10px 20px;
  width: 100%;
  display: block;
  border-radius: 10px;
  background-color: #1565d8;
  color: white;
  margin-top: 30px;
  height: 40px;
`
export const ErrorMsg = styled.p`
  color: red;
`
