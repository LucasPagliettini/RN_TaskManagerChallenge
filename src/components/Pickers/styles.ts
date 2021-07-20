import { StyleSheet } from 'react-native';
import { LayOutValues } from '../../utils/UtilConstants';

const styles = StyleSheet.create({
  containerIos: {
    paddingHorizontal: 0,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: LayOutValues.fontSize,
    color: LayOutValues.fontColor,
  },
  placeHolder: {
    color: LayOutValues.placeholderColor,
  },
  pickerStyle: {
    height: 50,
    fontSize: LayOutValues.fontSize,
  },
});

export default styles;
