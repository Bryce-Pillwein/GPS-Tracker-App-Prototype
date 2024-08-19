// Safe Area App Wrapper
import { ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import gss from '@/globalStyles';

interface SafeAreaAppWrapperProps {
  children: ReactNode;
}

const SafeAreaAppWrapper: React.FC<SafeAreaAppWrapperProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[gss.containerScreen, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }]}>
      {children}
    </View>
  );
};

export default SafeAreaAppWrapper;