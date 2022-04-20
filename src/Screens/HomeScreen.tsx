import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import TodoItem from '../Components/ModuleComponents/todoItem'

type Props = {}

interface ItoDoObject {
    _id: string,
    work: string,
    active: boolean
}

const HomeScreen: React.FC<Props> = ({ }) => {

    const [value, setValue] = useState<string>('')
    const [todoArray, setTodoArray] = useState<ItoDoObject[]>([])

    const addToDo = (): void => {
        if(value != ''){
        setValue('')
        const todoObj: ItoDoObject = {
            _id: `${Math.floor(Math.random() * 200000)}`,
            work: value,
            active: false
        }
        setTodoArray([...todoArray, todoObj])
    }
    }


    const removeTodo = (selectedId:string):void => {
        const newArr:ItoDoObject[] = [...todoArray]
        const filterdResults:ItoDoObject[] = newArr.filter((item)=>item._id != selectedId)
        setTodoArray(filterdResults)
    }

    const updateTodo = (selectedId:string):void => {
        const newArr:ItoDoObject[] = [...todoArray]

        newArr.map((item)=>{
          item._id == selectedId
              item.work = 'hamza'
        })   
        
        setTodoArray(newArr)

    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.viewOne}>
                <Text style={styles.txtOne}>TODO APP</Text>
            </View>
            <View style={styles.viewTwo}>
                <TextInput
                    style={{
                        width: '100%',
                        height: 40,
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10
                    }}
                    placeholder={'Add Todo Here....'}
                    value={value}
                    onChangeText={(txt) => setValue(txt)}
                />
            </View>
            <View style={styles.viewThree} >
                <TouchableOpacity
                    onPress={addToDo}
                    style={styles.btnView} >
                    <Text style={styles.txtTwo}>Confirm</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewFour}>
                {todoArray.map((item, index) => {
                    return <TodoItem item={item} key={index} removeTodo={removeTodo} updateTodo={updateTodo} />
                })}

            </View>


        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    viewOne: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewTwo: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    viewThree: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10
    },
    viewFour: {
        width: '90%',
        flex: 1,
        alignSelf: 'center',
        paddingTop:20
    },
    btnView: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#685044',
        borderRadius: 10,
    },
    txtOne: {
        fontSize: 15,
        fontWeight: '800'
    },
    txtTwo: {
        color: 'white'
    }
})