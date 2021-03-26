import { EuiComboBox } from '@elastic/eui';
import { wrapEuiField } from './wrap-field';

export const ComboBox = wrapEuiField({
  EuiComponent: EuiComboBox,
});
