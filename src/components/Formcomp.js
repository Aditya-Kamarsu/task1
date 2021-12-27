import React from "react";
import { useFormik, Field } from 'formik';
import styled, { css } from 'styled-components';
import FilteredPropsInputField from "./FilteredPropsInputField";
import * as Yup from 'yup'

const FormWrapper = styled.section`
  &,
  & * {
    box-sizing: border-box;
    display: block;
  }
  font-family: system-ui;
  font-size: 1rem;
  line-height: 1.5rem;
  max-width: 35em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  padding: 1rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
  align-items: center;
`;


const Title = styled.h1`
font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
const StyledInput = styled(FilteredPropsInputField)`
background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
  valid &&
  css`
    border: 1px solid rgb(0, 156, 38);

    &:focus,
    &:active {
      border: 1px solid rgb(0, 156, 38);
      box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
        rgb(177, 247, 160) 0px 0px 0px 3px;
      outline: none;
    }

    /* Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 1px solid rgb(0, 156, 38);
    }
  `}

${({ error }) =>
  error &&
  css`
    border: 1px solid rgb(191, 49, 12);
    outline: none;

    &:focus,
    &:active {
      box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
        rgb(251, 178, 174) 0px 0px 0px 3px;
      border: 1px solid rgb(191, 49, 12);
      outline: none;
    }

    /* Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 1px solid rgb(191, 49, 12);
    }
  `}

`

const StyledButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;

  background-color: rgb(24, 81, 187);
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

const StyledLabel = styled.label`

  margin-top: 1.5rem;
  width: 100%;
 `
const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;
  width:100%;
  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;


const Formcomp = (props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      dateOfBirth: '',
      bloodGroup: '',
      address: ''
    },
    onSubmit:  values => {
      props.getData((values));
      // alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
    .min(2, "Your name is too short")
    .required("Please enter your full name"),
  dateOfBirth: Yup.date("Enter a correct date").required("Please enter your date of birth"),
    bloodGroup: Yup.string()
    .min(2)
    .required("Please enter your full name"),
    address: Yup.string()
    .min(30)
    .required("Please enter your full address"),
  })})
  return (
    <div>
      <FormWrapper>
      <Title>Enter your details</Title>
      <StyledForm onSubmit={formik.handleSubmit}>
      <StyledLabel htmlFor="name">Name
      <StyledInput
        {...formik.getFieldProps('name')}
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        valid={formik.touched.name && !formik.errors.name}
        error={formik.touched.name && formik.errors.name}
      />
      </StyledLabel>
      {formik.errors.name && formik.touched.name && (
                  <StyledInlineErrorMessage>
                    {formik.errors.name}
                  </StyledInlineErrorMessage>
                )}
      <StyledLabel htmlFor="dateOfBirth">Date Of Birth
      <StyledInput
        {...formik.getFieldProps('dateOfBirth')}
        id="dateOfBirth"
        name="dateOfBirth"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.dateOfBirth}
        valid={formik.touched.dateOfBirth && !formik.errors.dateOfBirth}
        error={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
      />
      </StyledLabel>
      {formik.errors.dateOfBirth  && formik.touched.dateOfBirth && (
                  <StyledInlineErrorMessage>
                    {formik.errors.dateOfBirth}
                  </StyledInlineErrorMessage>
                )}
      <StyledLabel htmlFor="bloodGroup">Blood Group
      <StyledInput
      {...formik.getFieldProps('bloodGroup')}
        id="bloodGroup"
        name="bloodGroup"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.bloodGroup}
        valid={formik.touched.bloodGroup && !formik.errors.bloodGroup}
        error={formik.touched.bloodGroup && formik.errors.bloodGroup}
      />
      </StyledLabel>
      {formik.errors.bloodGroup  && formik.touched.bloodGroup && (
                  <StyledInlineErrorMessage>
                    {formik.errors.bloodGroup}
                  </StyledInlineErrorMessage>
                )}
      <StyledLabel htmlFor="address">Address
      <StyledInput
      {...formik.getFieldProps('address')}
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.address}
        valid={formik.touched.address && !formik.errors.address}
        error={formik.touched.address && formik.errors.address}
      />
      </StyledLabel>
      {formik.errors.address  && formik.touched.address && (
                  <StyledInlineErrorMessage>
                    {formik.errors.address}
                  </StyledInlineErrorMessage>
                )}
      <StyledButton type="submit" disabled={!formik.isValid }>Submit</StyledButton>
    </StyledForm>
    </FormWrapper>
    </div>
  );
};

export default Formcomp;
