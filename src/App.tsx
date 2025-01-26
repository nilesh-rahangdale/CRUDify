import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, Button, View, StatusBar, ScrollView } from 'react-native'

export default function App(): JSX.Element {
  const [data, setData] = useState<any>(null)
  const [id, setId] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [mail, setMail] = useState<string>("")
  const [delId, setDelId] = useState<string>("")
  const [found,setFound]=useState<string>("")

  const getApi = async () => {
    const url = "http://192.168.192.187:3000/profile"
    const response = await fetch(url, { method: "GET" })
    const dt = await response.json()
    setData(dt)
  }

  const postApi = async () => {
    const dataToBePost = {
      "id": id,
      "name": name,
      "email": mail
    }
    const url = "http://192.168.192.187:3000/profile"
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(dataToBePost)
    })
    getApi()
  }

  const putApi = async () => {
    const dataToBePost = {
      "id": id,
      "name": name,
      "email": mail
    }
    const url = "http://192.168.192.187:3000/profile/"+id
    const resp = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(dataToBePost)
    })
    getApi()
  }

  const patchApi = async () => {
    const dataToBePost = {
      "id": id,
      "name": name,
      "email": mail
    }
    const url = "http://192.168.192.187:3000/profile/"+id
    const resp = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(dataToBePost)
    })
    getApi()
  }

  const deleteApi = async () => {
    const url = "http://192.168.192.187:3000/profile/" + delId
    const resp = await fetch(url, { method: "DELETE" })
    getApi()
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgb(2,0,36)" />
      <Text style={styles.head}>CRUDify </Text>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Enter Id'
          onChangeText={(txt) => setId(txt)}
        />
        <TextInput 
          style={styles.input}
          placeholder='Enter Name'
          onChangeText={(txt) => setName(txt)}
        />
        <TextInput 
          style={styles.input}
          placeholder='Enter email'
          onChangeText={(txt) => setMail(txt)}
        />
        <View style={styles.btnContainer}>
        <Button 
          title='Post Data'
          onPress={() => postApi()}
          color="green"
        />
        <Button 
          title='Replace Data'
          onPress={() => putApi()}
          color="orange"
        />
        <Button 
          title='Edit Data'
          onPress={() => patchApi()}
          color="red"
        />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Enter Id to be deleted'
          onChangeText={(txt) => setDelId(txt)}
        />
        <Button 
          title='Delete Some Data'
          onPress={() => deleteApi()}
          color="#841584"
        />
      </View>

      

      {data ? (
        <FlatList 
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.id}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
              <Text style={styles.cardText}>{item.email}</Text>
            </View>
          )}
        />
      ) : (
        <ActivityIndicator size="large" color="red" />
      )}
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(2,0,36)', // Dark blue background
  },
  head: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#a597a8', // White text for contrast
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor: '#1c1c3a', // Slightly lighter dark shade for inputs container
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 45,
    borderColor: '#555', // Dark gray border
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#2e2e50', // Dark grayish-blue input background
    color: '#97a89c', // White text for better visibility
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#1c1c3a', // Match input container for consistency
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#97a89c', // White text for contrast against the dark card background
    fontWeight: '500',
  },
});
