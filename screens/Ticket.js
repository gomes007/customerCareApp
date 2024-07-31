import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../navigation/theme';

const Ticket = () => {
  const [ticket, setTicket] = useState({
    contactName: '',
    subject: '',
    description: '',
    openingDate: new Date(),
    dueDate: new Date(),
    classification: '',
    priority: '',
    status: '',
    solution: '',
    ticketOwnerId: '',
    customerId: '',
    files: [],
  });



  const handleChange = (name, value) => {
    setTicket({ ...ticket, [name]: value });
  };

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setTicket({ ...ticket, files: [...ticket.files, result] });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCadastro = () => {
    console.log('Dados do Ticket:', ticket);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome do Contato</Text>
        <TextInput
          style={styles.input}
          value={ticket.contactName}
          onChangeText={(text) => handleChange('contactName', text)}
          placeholder="Digite o nome do contato"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Assunto</Text>
        <TextInput
          style={styles.input}
          value={ticket.subject}
          onChangeText={(text) => handleChange('subject', text)}
          placeholder="Digite o assunto"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={ticket.description}
          onChangeText={(text) => handleChange('description', text)}
          placeholder="Digite a descrição"
          placeholderTextColor="#888"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Abertura</Text>
        <TextInput
          style={styles.input}
          value={ticket.openingDate}
          onChangeText={(text) => handleChange('openingDate', text)}
          placeholder="YYYY-MM-DD"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Vencimento</Text>
        <TextInput
          style={styles.input}
          value={ticket.dueDate}
          onChangeText={(text) => handleChange('dueDate', text)}
          placeholder="YYYY-MM-DD"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Classificação</Text>
        <Picker
          selectedValue={ticket.classification}
          style={styles.picker}
          onValueChange={(itemValue) => handleChange('classification', itemValue)}
        >
          <Picker.Item label="Selecionar..." value="" />
          <Picker.Item label="Classificação 1" value="classification1" />
          <Picker.Item label="Classificação 2" value="classification2" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Prioridade</Text>
        <Picker
          selectedValue={ticket.priority}
          style={styles.picker}
          onValueChange={(itemValue) => handleChange('priority', itemValue)}
        >
          <Picker.Item label="Selecionar..." value="" />
          <Picker.Item label="Baixa" value="low" />
          <Picker.Item label="Média" value="medium" />
          <Picker.Item label="Alta" value="high" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Status</Text>
        <Picker
          selectedValue={ticket.status}
          style={styles.picker}
          onValueChange={(itemValue) => handleChange('status', itemValue)}
        >
          <Picker.Item label="Selecionar..." value="" />
          <Picker.Item label="Aberto" value="open" />
          <Picker.Item label="Em Progresso" value="in_progress" />
          <Picker.Item label="Fechado" value="closed" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Solução</Text>
        <TextInput
          style={styles.input}
          value={ticket.solution}
          onChangeText={(text) => handleChange('solution', text)}
          placeholder="Digite a solução"
          placeholderTextColor="#888"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>ID do Proprietário do Ticket</Text>
        <TextInput
          style={styles.input}
          value={ticket.ticketOwnerId}
          onChangeText={(text) => handleChange('ticketOwnerId', text)}
          placeholder="Digite o ID do proprietário do ticket"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>ID do Cliente</Text>
        <TextInput
          style={styles.input}
          value={ticket.customerId}
          onChangeText={(text) => handleChange('customerId', text)}
          placeholder="Digite o ID do cliente"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button} onPress={handleFilePick}>
          <Text style={styles.buttonText}>Selecionar Arquivos</Text>
        </TouchableOpacity>
        {ticket.files.length > 0 && (
          <Text style={styles.fileInfo}>
            Arquivos Selecionados: {ticket.files.map(file => file.name).join(', ')}
          </Text>
        )}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.cadastrarButton} onPress={handleCadastro}>
          <Text style={styles.cadastrarButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.primary,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: theme.colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: theme.colors.text,
    backgroundColor: theme.colors.card,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  picker: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    color: theme.colors.text,
    backgroundColor: theme.colors.card,
    paddingVertical: 10,
  },
  fileInfo: {
    marginTop: 10,
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginVertical: 10,
  },
  cadastrarButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastrarButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default Ticket;
