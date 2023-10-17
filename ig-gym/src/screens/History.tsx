import { HistoryCard } from '@components/HistoryCard'
import { ScreenHeader } from '@components/ScreenHeader'
import {Heading,  VStack, SectionList, Text} from 'native-base'
import { useState } from 'react'


export function History() {
  const [exercices, setExercises] = useState([{
    title: "Treino 17/10/2023",
    data: ["Costas", "Ombro"]
  }])
  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de exercício' />

    <SectionList 
    px={8}
    sections={exercices}
    keyExtractor={item => item}
    renderItem={({item}) => ( <HistoryCard />)}
    renderSectionHeader={({section}) => (
      <Heading color="gray.200" fontSize="md" mt={10} mb={10}>
        {section.title}
      </Heading>
    )}
    contentContainerStyle={exercices.length === 0  && { flex: 1, justifyContent: "center"} }
    ListEmptyComponent={() => (
      <Text color="gray.100" fontSize="md" textAlign="center" >Não há exercicios registrados ainda!{'\n'}
        vamos treinar hoje?
      </Text>
    )}
    showsVerticalScrollIndicator={false}
    />

     
 
    </VStack>
  )
}