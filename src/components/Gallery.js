import React, { Component } from 'react'
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

class Gallery extends Component {
  constructor(props) {
    super(props)
    const itemSize = (Dimensions.get('window').width - 12) / 3
    this.state = {
      data: this.props.items,
      itemSize,
      total: this.props.items.length
    }
  }
  extractItemKey = index => `${index}`

  renderItem = ({ item, index }) => (
    <React.Fragment>
      <TouchableOpacity onPress={() => alert('add functionality to open')}>
        <Image
          style={{
            width: this.state.itemSize,
            height: this.state.itemSize,
            margin: 1.5
          }}
          source={item}
        />
      </TouchableOpacity>
    </React.Fragment>
  )

  render() {
    return (
      <View style={styles.images}>
        <FlatList
          data={this.state.data}
          numColumns={3}
          keyExtractor={this.extractItemKey}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  images: {
    flexDirection: 'row',
    paddingHorizontal: 0.5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  }
})

export default Gallery
