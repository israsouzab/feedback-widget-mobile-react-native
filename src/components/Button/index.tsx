import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { theme } from '../../theme'
import { styles } from './styles'

interface ButtonProps extends TouchableOpacityProps {
   isLoading: boolean
}

export function Button ({ isLoading }: ButtonProps) {
   return (
      <TouchableOpacity style={styles.container}>
         {isLoading
            ?
            <ActivityIndicator
               color={theme.colors.text_on_brand_color}
            />
            :
            <Text style={styles.title}>
               Enviar Feedback
            </Text>
         }
      </TouchableOpacity>
   )
}