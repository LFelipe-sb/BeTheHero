import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as MailComposer from 'expo-mail-composer';

import styles from './style';
import logoImg from '../../assets/logo.png';


function Detail(){
    const navigation = useNavigation();
    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cachorro Atropelado',
            recipients: ['felip.face@gmail.com'],
            body: 'Teste do email',
        })
    }

    let msg = 'Ola';

    function sendWhatsapp(){
        Linking.openURL("whatsapp://send?phone=+5511962439192&text=Ola");
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
                <Text style={styles.incidentProperty}> ONG: </Text>
                <Text style={styles.incidentValue}> APAD </Text>
                
                <Text style={styles.incidentProperty}> Caso: </Text>
                <Text style={styles.incidentValue}> Cachorro Atropelado </Text>
                
                <Text style={styles.incidentProperty}> Valor: </Text>
                <Text style={styles.incidentValue}> 120,00 </Text>
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