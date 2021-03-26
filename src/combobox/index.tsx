import { EuiComboBox } from '@elastic/eui';
import { wrapEuiField } from '@expr/playground.wrap-field';

export const ComboBox = wrapEuiField({
  EuiComponent: EuiComboBox,
});
