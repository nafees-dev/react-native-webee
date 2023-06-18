import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Button, Title, Paragraph, PaperProvider, HelperText, Text, TextInput, IconButton } from 'react-native-paper';
import { ICategory } from '../../commonInterfaces';

interface PropsType {
  item: ICategory;
	onDeleteField: (index: number, itemIndex: number) => void;
	itemIndex: number;
}

const CustomCard = (props: PropsType) => {
  const { item, onDeleteField, itemIndex } = props;

	// const onDeleteField = (fieldIndex: number) => {
		
	// }

  return (
    <Card style={styles.cardWrapper}>
      <Card.Title title={item.name} />
      <Card.Content>
        {item.fields.map((field, fieldIndex) => (
          <View style={styles.fieldWrapper} key={field.label}>
            <TextInput label="Field" value={field.label} style={styles.textInput} />
            <Text style={styles.fieldType}>{field.type.toUpperCase()}</Text>
						<IconButton icon="delete" size={20} onPress={() => onDeleteField(fieldIndex, itemIndex)}/>
          </View>
        ))}
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => console.log('Button pressed!')}>Action</Button>
      </Card.Actions>
    </Card>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  cardWrapper: {
    margin: 10,
  },
  fieldWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  textInput: {
    flex: 1,
    marginRight: 8,
  },
  fieldType: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
