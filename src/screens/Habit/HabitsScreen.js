import React, { useState, useEffect, useRef } from 'react'
import { FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import { Box } from '../../components'
import { getImage } from '../../theme/images'
import { colors } from '../../theme/color'
import { arrayIsEmpty, objectIsNull } from '../../components/Function'
import IconText from './Custom/Header/IconText'
import Header from './Custom/Header/Header'
import Loading from '../../components/Loading'

const { width, height } = Dimensions.get('window')

export default function HabitsScreen(props) {
  const { title, idCategory } = props.route.params
  const prevProps = useRef({ dataGetHabits: props.dataGetHabits }).current

  const [habits, setHabits] = useState([])

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getHabitsAction()
    })

    return unsubscribe
  }, [props.navigation])

  useEffect(() => {
    if (!objectIsNull(props.dataGetHabits) && prevProps.dataGetHabits !== props.dataGetHabits) {
      if (!arrayIsEmpty(props.dataGetHabits)) {
        const list = props.dataGetHabits.data.filter((item) => item.idCategory === idCategory)
        setHabits(list)
      }
    }
  }, [props.dataGetHabits])

  console.log('idCategory', idCategory)
  return (
    <Box flex={1} paddingLeft={8} paddingRight={8} paddingTop={5} backgroundColor="white">
      {/* HEADER */}
      <Header title={title} type="other" navigation={props.navigation} />

      {/* CONTENT */}
      {/* TITLE */}
      <IconText
        label="Create a custom habit"
        iconName="edit-outline"
        iconFill={colors['color-primary-500']}
        onPress={() => props.navigation.navigate('CreateNewHabitContainer', { idCategory })}
      />

      {/* LIST CATEGORY */}
      {/* TITLE */}
      <IconText label="Popular healthy habit:" color="color-gray-400" paddingTop={0} />

      {/* LIST */}
      {props.fetchingGetHabits ? (
        <Loading />
      ) : (
        <Box height={height / 2}>
          <FlatList
            data={habits}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <IconText
                  label={item.title}
                  iconName={item.iconName}
                  iconFill={colors[item.iconFill]}
                  paddingTop={0}
                  onPress={() => console.log('aa')}
                />
              )
            }}
          />
        </Box>
      )}

      {/* IMAGE */}
      <Box position="absolute" bottom={30} right={20}>
        <Image resizeMode="contain" style={styles.imgFooter} source={getImage.footer_category} />
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  imgFooter: {
    height: width / 2,
    width: width / 2 + 100,
  },
})
