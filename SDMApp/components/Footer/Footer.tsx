import { useStyles, createStyleSheet } from 'styles';
import { View } from 'react-native';
import Ellipse1 from '../../assets/vectors/Ellipse1.svg';
import Rectangle7 from 'assets/vectors/Rectangle7.svg';
import Vector from 'assets/vectors/Vector.svg';

export interface FooterProps {
  testID?: string,
}

export function Footer(props: FooterProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <Rectangle7 />
      <Ellipse1 />
      <Vector />
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: 390,
    height: 127,
    flexShrink: 0,
    shadowColor: 'rgba(0, 0, 0, 0.250980406999588)',
    shadowRadius: 8,
    shadowOffset: { "width": 0, "height": 5 },
  },
}));

