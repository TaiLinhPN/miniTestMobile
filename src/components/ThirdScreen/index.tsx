import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../public/css';

function ThirdScreen() {
  const [position, setPosition] = useState('relative');
  const [justifyContent, setJustifyContent] = useState('flex-start');

  const values = ['relative', 'absolute'];
  const styleValues: string[] = [
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ];

  return (
    <View style={{padding: 10, flex: 1}}>
      <Text style={styles.label}>Set Position </Text>

      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setPosition(value)}
            style={[styles.button, position === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                position === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.label}>Set JustifyContent </Text>
      <View style={styles.row}>
        {styleValues.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setJustifyContent(value)}
            style={[
              styles.button,
              justifyContent === value && styles.selected,
            ]}>
            <Text
              style={[
                styles.buttonLabel,
                justifyContent === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 8,
          backgroundColor: 'grey',
          justifyContent: justifyContent,
        }}>
        <View
          style={[
            styles.box,
            {
              top: 25,
              left: 25,
              backgroundColor: 'powderblue',
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              top: 50,
              left: 50,
              backgroundColor: 'skyblue',
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              top: 75,
              left: 75,
              backgroundColor: 'steelblue',
            },
          ]}
        />
      </View>
    </View>
  );
}

export default ThirdScreen;
