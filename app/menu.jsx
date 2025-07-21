import { Appearance, FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import MENU_IMAGES from '@/constants/MenuImages';
import { MENU_ITEMS } from '@/constants/MenuItems';

export default function MenuScreen(){
    const colorScheme = Appearance.getColorScheme() || 'dark';
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = creatStyles(theme, colorScheme);

    const Container= Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return(
        <Container style={styles.container}>
            <FlatList 
            data={MENU_ITEMS}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding: 10}}
            
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View style={styles.itemContainer}>
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                    <Image source={MENU_IMAGES[item.id - 1]} />
                </View>
            )}
            />

        </Container>
    )
}

function creatStyles(theme,colorScheme){
    return StyleSheet.create({
        container: {
            flex: 1,
            // margin:'auto',
            backgroundColor: theme.background,
            tintColor: theme.text,
            color: theme.text,
            paddingTop: Platform.OS === 'android' ? 25 : 0,
        },
        itemContainer: {
            marginBottom: 20,
            padding: 10,
            borderRadius: 10,
            backgroundColor: theme.cardBackground,
        },
        itemTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.text,
        },
        itemDescription: {
            fontSize: 14,
            color: theme.textSecondary,
        },
        image: {
            width: '100%',
            height: 200,
            borderRadius: 10,
        }
    })
}