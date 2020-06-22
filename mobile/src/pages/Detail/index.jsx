import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import * as MailComposer from 'expo-mail-composer';

import styles from './style';
import logoImg from '../../assets/logo.png';


function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    function navigateBack(){
        navigation.goBack();
    }

    const message = `Olá ${incident.name}, estou entrando em contato, poís gostaria de ajudar no caso: "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}.`;

    function sendEmail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    let msg = 'Ola';

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
            </TouchableOpacity>
            <Image source={logoImg} />
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty, {marginTop: 0}}> ONG: </Text>
                <Text style={styles.incidentValue}> {incident.name} de {incident.city}/{incident.uf} </Text>
                
                <Text style={styles.incidentProperty}> Caso: </Text>
                <Text style={styles.incidentValue}> {incident.title} </Text>

                <Text style={styles.incidentProperty}> Descrição: </Text>
                <Text style={styles.incidentValue}> {incident.description} </Text>
                
                <Text style={styles.incidentProperty}> Valor: </Text>
                <Text style={styles.incidentValue}> {Intl.NumberFormat('pt-BR', {
                    style: 'currency', 
                    currency: 'BRL'
                    }).format(incident.value)} 
                </Text>
            </View>

            <View style={styles.contentBox}>
                <Text style={styles.heroTitle}> Salve o dia! </Text>
                <Text style={styles.heroTitle}> Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}> Entre em contato: </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}> WhatsApp </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}> E-mail </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Detail;