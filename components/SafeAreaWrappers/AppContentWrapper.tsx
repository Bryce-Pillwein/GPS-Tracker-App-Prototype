// App Content Wrapper
import { ReactNode } from 'react';
import { View } from 'react-native';
import gss from '@/globalStyles';

interface AppContentWrapperProps {
  children: ReactNode;
}

const AppContentWrapper: React.FC<AppContentWrapperProps> = ({ children }) => {
  return (
    <View style={gss.containerScreen}>
      <View style={gss.containerContent}>
        {children}
      </View>
    </View>
  );
};

export default AppContentWrapper;