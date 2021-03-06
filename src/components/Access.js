import React from "react"
import styled from "styled-components"

const AccessWrapper = styled.div`
  background-color: hsl(238, 22%, 44%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  @media (max-width: 770px) {
    padding: 4.5rem 0 6rem;
  }
`
const AccessContainer = styled.div`
  padding: 0 5rem;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 770px) {
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0 3rem;
  }
`
const StyledSection = styled.div`
  color: #fff;
  width: 45%;

  @media (max-width: 770px) {
    width: 100%;
    form {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    p {
      margin-top: 1.75rem;
      margin-bottom: 1rem;
      text-align: center;
      font-size: 1.1rem;
      letter-spacing: 0.5px;
      line-height: 1.8rem;
    }
  }
`

const H2 = styled.h2`
  font-size: 2rem;
  font-family: "Open Sans" "Roboto" "Montserrat" sans-serif;
  @media (max-width: 770px) {
    font-size: 1.4rem;
    text-align: center;
  }
`

const StyledInput = styled.input`
  font-size: 0.8rem;
  margin-top: 0;
  height: 100%;
  min-width: 11rem;
  padding: 0.85rem 0.9rem;
  border-radius: 5px;
  box-shadow: 0 10px 20px -15px hsl(233, 82%, 25%);
  transition: box-shadow 0.2s ease-in-out;

  :hover,
  :active,
  :focus {
    box-shadow: 0 10px 20px -10px hsl(233, 82%, 25%);
  }
`
const EmailInput = styled(StyledInput)`
  width: 80%;
  border: 1px solid hsl(238, 22%, 44%);
  ::placeholder {
    font-size: 0.85rem;
    color: lighten(hsl(238, 22%, 44%), 30%);
  }

  :focus {
    color: darken(hsl(238, 22%, 44%), 50%);
    border: 1px solid black;
  }

  @media (max-width: 770px) {
    width: 80%;
  }
`

const SubmitInput = styled(StyledInput)`
  width: 40%;
  
  border: 1px solid hsl(224, 93%, 58%);
  margin-top: 1rem;
  color: #fff;
  font-weight: 700;
  background-color: hsl(224, 93%, 58%);
  box-shadow: 1px 1px 4px 0px darken(hsl(224, 93%, 58%), 70%);
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;
  @media (max-width: 770px) {
    width: 80%;
  }
`
export default () => (
  <AccessWrapper>
    <AccessContainer>
      <StyledSection>
        <H2>Get early access today</H2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </StyledSection>
      <StyledSection>
        <form>
          <EmailInput
            type="email"
            name="user_email"
            placeholder="email@example.com"
          />
          <SubmitInput type="submit" value="Get Started For Free" />
        </form>
      </StyledSection>
    </AccessContainer>
  </AccessWrapper>
)
