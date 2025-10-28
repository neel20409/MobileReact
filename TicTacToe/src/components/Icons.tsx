import React from 'react'
import { Circle, X, Edit } from 'lucide-react-native'

type IconsProps = {
  name: string;
}

const Icons: React.FC<IconsProps> = ({ name }) => {
  switch (name) {
    
    case 'circle':
      return <Circle size={38} color="#F7CD2E" />
      break;
    case 'cross':
      return <X size={38} color="#38CC77" />
      break
    default:
      return <Edit size={38} color="#0D0D0D" />
  }
}

export default Icons;