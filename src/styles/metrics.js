import {Dimensions} from 'react-native';

//retorna a largura e o tamanho da tela do dispositivo
const {width, height} = Dimensions.get('window');

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  //if o celular tiver em pe retonar o tamanho da tela em pé
  // se tiver deitado retorna o tamanho da tela deitada
  screenWidth: width < height ? width : height,
  screenheight: width < height ? height : height,
};
