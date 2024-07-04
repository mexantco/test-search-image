import { useEffect, useState } from "react";
import { useRootStore } from "../stores/hook/useRootStore";
import { observer } from "mobx-react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Text, SafeAreaView } from "react-native";
import { SearchBar } from "../componets/searchBar";
import MasonryList from "@ducdh-origin/react-native-masonry-list";

const ImagesList:React.FC = observer(({navigation})=>{
    const {imagesStore:{images, fetchImages, clearSearch,q}} = useRootStore() 
    
    const onSubmit = async(text:string)=>{
      await fetchImages(text,false)
    }
 

    return(
      <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <SearchBar  q={q} clearSearch={()=>{clearSearch()}} onSubmit={onSubmit}/>
        
        {images.length>0?(<>
        <MasonryList
        onPressImage={(event:any)=>{
          
          navigation.push('imageView', {uri:event.uri})
        }}
        onEndReached={async()=>{await fetchImages(q,true)}}
        style={{flex:1, borderWidth:2, borderColor:'blue'}}
        images={images.length>0?images.map(el=>{return{uri:el}}):[]}
        /></>):(<></>)}
      </View>
      </SafeAreaView>
    )
})
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',

  }
})
export default ImagesList