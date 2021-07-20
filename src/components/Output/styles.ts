import { StyleSheet } from 'react-native';
import { LayOutValues } from '../../utils/UtilConstants';

const styles = StyleSheet.create({
  localContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: LayOutValues.fontSize,
    color: LayOutValues.fontColor,
  },
  placeHolder: {
    color: LayOutValues.placeholderColor,
  },
});

export default styles;
