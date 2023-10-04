import { StyleSheet, Text, SafeAreaView, Image, View, VirtualizedList, TextInput, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function createCategory() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.logo}>
                    <Image
                        style={styles.talkmeLogo}
                        source={require('../image/talkme.png')}
                    />
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Crie uma categoria para seu perfil.</Text>
                </View>

                <View style={styles.containerTextInputCat}>

                    <MaterialIcons name='email' size={20} color={'#666'} />
                    <TextInput
                        style={styles.input}
                        placeholder='Nome da categoria'
                        placeholderTextColor='#ccc'
                        keyboardType='email-adress'
                    />
                </View>

                <View style={styles.containerTextInputDesc}>

                    <MaterialIcons
                        name='text-box-outline'
                        size={20}
                        color={'#666'}
                        paddingTop={11} />
                    <TextInput
                        style={styles.input}
                        textAlignVertical="top"
                        placeholder='Descrição da categoria'
                        placeholderTextColor='#ccc'
                        keyboardType='email-adress'
                        multiline={true}
                        numberOfLines={5}
                    />
                </View>


                <TouchableOpacity>
                    <Text style={styles.buttonCriar}> Cria categoria </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.createAccount}>Editar categorias</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },

    logo:{
        alignItems: 'flex-end',
    },

    talkmeLogo: {
        width: 150,
        height: 42,
    },

    title: {
        alignItems: 'center',
        marginBottom: 100,
        marginTop: 100,
    },

    titleText: {
        color: '#00b2ff',
        width: 300,
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',
    },

    containerTextInputCat: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 40,
        padding: 6,
        paddingLeft: 20,
        marginBottom: 25,
    },

    containerTextInputDesc: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#ccc',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 40,
        padding: 6,
        paddingLeft: 20,
        marginBottom: 25,
    },

    input: {
        padding: 10,
    },

    buttonCriar: {
        margin: 16,
        padding: 18,
        color: '#fff',
        backgroundColor: '#00b2ff',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 40,
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
    },

    createAccount: {
        color: '#00b2ff',
        fontWeight: '700',
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    }
});