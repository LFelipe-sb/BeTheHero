import React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './style';

function Incidents(){

    const navigation = useNavigation();
    function navigateToDetail(){
        navigation.navigate('Detail');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> 0 casos </Text>
                </Text>
                <Image source={logoImg} />
            </View>

            <Text style={styles.title}> Bem-Vindos! </Text>
            <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia. </Text>
        
            <FlatList
                data={[1,2,3]}
                style={styles.incidentList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentPropriety}> ONG: </Text>
                        <Text style={styles.incidentValue}> APAD </Text>
                        
                        <Text style={styles.incidentPropriety}> Caso: </Text>
                        <Text style={styles.incidentValue}> Cachorro Atropelado </Text>
                        
                        <Text style={styles.incidentPropriety}> Valor: </Text>
                        <Text style={styles.incidentValue}> 120,00 </Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02141" />
                        </TouchableOpacity>
                    </View>
                )}/>
        </View>
       
    );
}

export default Incidents;