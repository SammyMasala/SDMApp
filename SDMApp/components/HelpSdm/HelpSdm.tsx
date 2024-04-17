import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { View, Text, Image } from 'react-native';
import search from 'assets/images/search.png';

export interface HelpSdmProps {
  testID?: string,
}

export function HelpSdm(props: HelpSdmProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <View style={styles.frame} testID="28:40" />
      <Text style={styles.bantuSdm} testID="28:39">
        {`Bantu SDM!`}
      </Text>
      <Image source={{ uri: search }} style={{ width: 90, height: 90 }} resizeMode="cover" />
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: 241,
    height: 94.031,
    flexShrink: 0,
    shadowColor: 'rgba(0, 0, 0, 0.250980406999588)',
    shadowRadius: 4,
    shadowOffset: { "width": 0, "height": 4 },
  },
  frame: {
    width: 241,
    height: 94.031,
    flexShrink: 0,
    borderRadius: 5,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: theme.colors.background100,
    backgroundColor: 'rgba(217, 217, 217, 0.4000000059604645)',
  },
  bantuSdm: {
    width: 143.96001,
    height: 27.825,
    flexShrink: 0,
    color: theme.colors.background100,
    textAlign: 'center',
    fontFamily: 'Irish Grover',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
  },
}));

