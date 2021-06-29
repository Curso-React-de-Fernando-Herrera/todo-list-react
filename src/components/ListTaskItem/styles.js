import styled from '@emotion/styled'
import { popup } from 'helpers/styles/animations/popup'
import { popupTick } from 'helpers/styles/animations/popupTick'

export const BoxTask = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const ImportantInput = styled.input`
  display: none;

  &:not(:checked) ~ label::before {
    content: "";
    display: inline-block;
    position: relative;
    width: 94%;
    height: 94%;
    background-color: #fff;
    border-radius: 50%;
  }

  &:checked ~ label::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 30%;
    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;
    box-sizing: border-box;
    transform: rotate(-45deg) translate(4%, -4%) scale(1);
    transition: transform 0.3s;
    animation: popupTick 0.3s;
  }
`

export const ImportantIcon = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
  background: linear-gradient(
    45deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(1, 119, 251, 1) 100%
  );
  box-shadow: 0 0 15px 0px #cccccc;

  &:hover {
    transform: scale(1);
    animation: popup 0.3s ease-in-out;
  }

  &::after {
    content: "";
    transform: rotate(-45deg) translate(4%, -4%) scale(0);
  }

  ${popup}
  ${popupTick}
`

