import { Appearance, FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import MENU_IMAGES from '@/constants/MenuImages';
import { MENU_ITEMS } from '@/constants/MenuItems';

export default function MenuScreen(){
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = creatStyles(theme, colorScheme);

    const Container= Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const seperatorComp = <View style = {styles.seperator}/>
    // const headerComp = <Text>Top of List</Text>
    const footerComp = <Text style={{color:theme.text}}>End of Menu</Text>

    return(
        <Container style={styles.contentContainer}>
            <FlatList 
            data={MENU_ITEMS}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding: 10}}
            ItemSeparatorComponent={seperatorComp}
            // ListHeaderComponent={headerComp}
            ListFooterComponent={footerComp}
            ListFooterComponentStyle={styles.footerComp}
            ListEmptyComponent={<Text style={{textAlign:'center', color: theme.text}}>No items available</Text>}

            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View style={styles.row}>
                    <View style={styles.menuTextRow}>
                        <Text style={[styles.menuItemTitle,styles.menuItemText]}>{item.title}</Text>
                        <Text style={styles.menuItemText}>{item.description}</Text>
                    </View>
                    <Image style={styles.menuImage} source={MENU_IMAGES[item.id - 1]} />
                </View>
            )}
            />

        </Container>
    )
}

function creatStyles(theme,colorScheme){
    return StyleSheet.create({
        contentContainer: {
            paddingTop:10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
            // tintColor: theme.text,
            color: theme.text,
            paddingTop: Platform.OS === 'android' ? 25 : 0,
        },
        seperator:{
            height: 1,
            backgroundColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            width: '50%',
            maxWidth: 300,
            marginHorizontal:'auto',
            marginBottom:10,

        },
        footerComp:{
            marginHorizontal: 'auto',
        },
        row:{
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
            // alignItems: 'center',
            // justifyContent: 'space-between',
            // paddingVertical: 10,
        },
        menuTextRow:{
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow:1,
        },
        menuItemTitle:{
            fontSize: 18,
            textDecorationLine:'underline',
        },
        menuItemText:{
            color: theme.text,
        },
        menuImage: {
            width: 100,
            height: 100,
        }

    })
}