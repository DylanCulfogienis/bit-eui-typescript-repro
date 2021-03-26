import React from 'react';
import { EuiFormRow } from '@elastic/eui';

export interface EuiFieldWrapperProps {
  name: string;
}

export interface WrapEuiFieldParams<T> {
  EuiComponent: React.ComponentType<T>;
}

type IWrapEuiField = <T>(
  params: WrapEuiFieldParams<T>
) => React.FunctionComponent<EuiFieldWrapperProps & Partial<T>>;

export const wrapEuiField: IWrapEuiField = ({ EuiComponent }) => ({ name, ...rest }) => {

  const UntypedComponent = EuiComponent as any; // Type must be stripped in order for compilation to occur.
  return (
    <EuiFormRow label={name}>
      <UntypedComponent {...rest} />
    </EuiFormRow>
  );
};
