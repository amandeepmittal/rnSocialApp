import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { PinchGestureHandler, State } from 'react-native-gesture-handler'

const screen = Dimensions.get('window')

const PinchableBox = ({ imageUri }) => {
  scale = new Animated.Value(1)

  onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale: this.scale }
      }
    ],
    {
      useNativeDriver: true
    }
  )

  onPinchStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true
      }).start()
    }
  }

  return (
    <PinchGestureHandler
      onGestureEvent={this.onPinchEvent}
      onHandlerStateChange={this.onPinchStateChange}>
      <Animated.Image
        source={{ uri: imageUri }}
        style={{
          width: screen.width,
          height: 300,
          transform: [{ scale: this.scale }]
        }}
        resizeMode='contain'
      />
    </PinchGestureHandler>
  )
}

export default PinchableBox
