import { useStyles, createStyleSheet } from 'react-native-unistyles'
import { View } from 'react-native';
import { Ellipse1, Rectangle7, Vector } from '../../assets/vectors/';
import React from 'react';

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

