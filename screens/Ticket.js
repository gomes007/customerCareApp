import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const Ticket = () => {
  const [ticket, setTicket] = useState({
    contactName: '',
    subject: '',
    description: '',
    openingDate: '',
    dueDate: '',
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
    // Adicione aqui a lógica de envio para o backend
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Ticket</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome do Contato</Text>
        <TextInput
          style={styles.input}
          value={ticket.contactName}
          onChangeText={(text) => handleChange('contactName', text)}
          placeholder="Digite o nome do contato"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Assunto</Text>
        <TextInput
          style={styles.input}
          value={ticket.subject}
          onChangeText={(text) => handleChange('subject', text)}
          placeholder="Digite o assunto"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          value={ticket.description}
          onChangeText={(text) => handleChange('description', text)}
          placeholder="Digite a descrição"
          multiline
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Abertura</Text>
        <TextInput
          style={styles.input}
          value={ticket.openingDate}
          onChangeText={(text) => handleChange('openingDate', text)}
          placeholder="YYYY-MM-DD"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Vencimento</Text>
        <TextInput
          style={styles.input}
          value={ticket.dueDate}
          onChangeText={(text) => handleChange('dueDate', text)}
          placeholder="YYYY-MM-DD"
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
          {/* Adicione mais opções conforme necessário */}
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
          {/* Adicione mais opções conforme necessário */}
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
          {/* Adicione mais opções conforme necessário */}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Solução</Text>
        <TextInput
          style={styles.input}
          value={ticket.solution}
          onChangeText={(text) => handleChange('solution', text)}
          placeholder="Digite a solução"
          multiline
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>ID do Proprietário do Ticket</Text>
        <TextInput
          style={styles.input}
          value={ticket.ticketOwnerId}
          onChangeText={(text) => handleChange('ticketOwnerId', text)}
          placeholder="Digite o ID do proprietário do ticket"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>ID do Cliente</Text>
        <TextInput
          style={styles.input}
          value={ticket.customerId}
          onChangeText={(text) => handleChange('customerId', text)}
          placeholder="Digite o ID do cliente"
        />
      </View>

      <View style={styles.inputContainer}>
        <Button title="Selecionar Arquivos" onPress={handleFilePick} />
        {ticket.files.length > 0 && (
          <Text style={styles.fileInfo}>
            Arquivos Selecionados: {ticket.files.map(file => file.name).join(', ')}
          </Text>
        )}
      </View>

      <Button title="Cadastrar" onPress={handleCadastro} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  fileInfo: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default Ticket;
