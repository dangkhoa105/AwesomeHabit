import React, { useState, useEffect, useRef } from 'react'
import { ScrollView, Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export default function Swiper({ index, indexScroll, setIndexScroll, children }) {
  const scrollRef = useRef()

  useEffect(() => {
    if (index !== indexScroll) {
      scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })
    }
  }, [indexScroll])

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      scrollEventThrottle={16}
      snapToAlignment={'center'}
      pagingEnabled
      ref={scrollRef}
      onScrollBeginDrag={() => setIndexScroll(index)}
    >
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
})
