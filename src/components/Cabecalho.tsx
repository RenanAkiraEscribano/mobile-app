import React from 'react'
import { Text, View, Image } from 'native-base'
import imagemPadrao from '../assets/logo.png'

export default Cabecalho => {
  return (
    <View style={Cabecalho.style}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={imagemPadrao} style={{ height: 60, width: 60 }} alt='logo'/>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text numberOfLines={1} style={Cabecalho.styleText}>{Cabecalho.title}</Text>
          <Text style={{ color: '#fff' }} numberOfLines={1}>{Cabecalho.subtitle}</Text>
        </View>
      </View>
    </View>
  )
}