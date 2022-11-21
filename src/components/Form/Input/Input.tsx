import {
  Input as BaseInput
} from './styles'
import {InputHTMLAttributes} from 'react';

export function Input(props: InputHTMLAttributes<any>) {
  return (
      <BaseInput
        type="text"
        {...props}
      />
  );
}