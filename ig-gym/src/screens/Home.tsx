import { useState } from 'react'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'

import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import { ExerciseCard } from '@components/ExerciceCard'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

export function Home() {

  const navigate = useNavigation<AppNavigatorRoutesProps>()


  function handleOpenExerciseDetails() {
    navigate.navigate('exercise')
  }


  const [groups, setGroups] = useState([
    'Costas',
    'Peito',
    'Perna',
    'Triceps',
    'Biceps'
  ])
  const [groupSelected, setGroupSelected] = useState('costa')
  const [exercises, setExercises] = useState(['1', '2', '3', '4', '5', '6'])
  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
            onPress={() => setGroupSelected(item)}
            isActive={groupSelected === item}
            name={item}
      
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8
        }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading   fontFamily="heading" color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>
  
        <FlatList 
        
        data={exercises}
        keyExtractor={item => item}
        renderItem={({item}) => ( <ExerciseCard onPress={handleOpenExerciseDetails}/>)}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
         px: 8
        }}
        />
       


      </VStack>
    </VStack>
  )
}
