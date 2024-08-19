// UIPaddingBlock
import { View } from 'react-native';

interface PdBlkProps {
  pad: number;
}

const PdBlk: React.FC<PdBlkProps> = ({ pad }) => {
  return (
    <View style={{ marginVertical: pad }}></View>
  );
};

export default PdBlk;