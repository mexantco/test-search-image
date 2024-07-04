import { StyleSheet, View, Image, Text, TouchableOpacity} from "react-native"
import ViewTransformer from "react-native-easy-view-transformer";

const ImageView:React.FC = ({route, navigation})=>{
const uri = route.params.uri
    return(
        <View style={styles.container}>
            <ViewTransformer
            maxScale={2}
            enableScale={true}
            >
            
                <Image
                resizeMode='contain'
                style={styles.image}
                source={{uri:uri}}
                />
            
            </ViewTransformer>
            <TouchableOpacity
            onPress={()=>{navigation.pop()}}
            style={styles.close}
            >
            <Text style={styles.closeText}>&#10006;</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'stretch'
    },
    image:{
        flex:1
    },
    close:{
        position:'absolute',
        bottom:30,
        right:30,
        zIndex:1
    },
    closeText: { 
        color:'#fff',
        fontSize: 32, 
        alignSelf: 'center', 
        textAlignVertical: 'center' 
    }
})
export default ImageView