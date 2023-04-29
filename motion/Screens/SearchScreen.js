import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, TextInput,  } from 'react-native'
import React,{useState, useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const SearchScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [currentTab, setCurrentTab] = useState("Trending")

  const [data, setData] = useState([])
   const [keyword, setKeyword] = useState("")

   const fun = () => {
  
      fetch('https://social-backend-three.vercel.app/finduser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ keyword: keyword })
      })
          .then(res => res.json())
          .then(data => {
                  setData(data.user)
          })
          
   }
//   axios.post('https://social-backend-three.vercel.app/finduser', {keyword: keyword})
//   .then(function (response) {
//     setData(response.data.user);
//   })}

   useEffect(() => {
    fun()
}, [keyword])
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, borderRadius: 12}}>
      
<TouchableOpacity onPress={() => navigation.goBack()}>
<Entypo name="chevron-left" size={24} color="white" />
  </TouchableOpacity>      
        <TextInput   placeholder="Search Beyond Possibilities...." style={{ flex: 1, marginRight: 8, marginLeft: 8, color: 'white' }} 
        onChangeText={(text) => {
          setKeyword(text)
       
      }}
       placeholderTextColor='white'
      
      />
<TouchableOpacity onPress={fun}>
<Entypo name="magnifying-glass" size={24} color="white" /> 
  </TouchableOpacity>       
      </View>

      <View style={{ flexDirection: 'row', marginTop: 4, justifyContent: 'space-evenly'}}>
      {currentTab == "Trending" ? (
             <TouchableOpacity style={{ borderBottomWidth: 2, }}>
               <Text style={{ padding: 5, color: '#399FFF', fontWeight: 'bold' , backgroundColor: '#1C1E20',borderRadius: 6 }}>Trending</Text>
             </TouchableOpacity>
           ) : (
             <TouchableOpacity style={{}} onPress={() => setCurrentTab('Trending')}>
               <Text style={{ padding: 5, color: 'white', fontWeight: 'bold' , }}>Trending</Text>
             </TouchableOpacity>
           )}
           {currentTab == "Accounts" ? (
             <TouchableOpacity style={{ borderBottomWidth: 2, }}>
               <Text style={{ padding: 5, color: '#399FFF', fontWeight: 'bold' , backgroundColor: '#1C1E20', borderRadius: 6}}>Accounts</Text>
             </TouchableOpacity>
           ) : (
             <TouchableOpacity style={{}} onPress={() => setCurrentTab('Accounts')}>
               <Text style={{ padding: 5, color: 'white', fontWeight: 'bold'  }}>Accounts</Text>
             </TouchableOpacity>
           )}
           {currentTab == "Media" ? (
             <TouchableOpacity style={{ borderBottomWidth: 2, }}>
               <Text style={{ padding: 5, color: '#399FFF', fontWeight: 'bold' , backgroundColor: '#1C1E20',borderRadius: 6}}>Tags</Text>
             </TouchableOpacity>
           ) : (
             <TouchableOpacity onPress={() => setCurrentTab('Media')}>
               <Text style={{ padding: 5, color: 'white', fontWeight: 'bold' ,borderRadius: 6}}>Tags</Text>
             </TouchableOpacity>
           )}
           {currentTab == "Places" ? (
             <TouchableOpacity style={{ borderBottomWidth: 2, }}>
               <Text style={{ padding: 5, color: '#399FFF', fontWeight: 'bold' , backgroundColor: '#1C1E20', borderRadius: 6}}>Places</Text>
             </TouchableOpacity>
           ) : (
             <TouchableOpacity onPress={() => setCurrentTab('Places')}>
               <Text style={{ padding: 5, color: 'white', fontWeight: 'bold' , borderRadius: 6}}>Places</Text>
             </TouchableOpacity>
           )}
      </View>
      <View style={{marginTop: 8}}>
{/* <Text style={{color: 'white', fontWeight: 'bold' , fontSize: 18, margin: 4, marginLeft: 6, marginRight: 6}}>People You May Know : </Text> */}
     <ScrollView>
     {data.map((user,index) => (
        <TouchableOpacity  key={user._id} style={{ padding: 10, borderRadius: 9, margin: 4, flexDirection: 'row', alignItems: 'center', marginLeft: 6, marginRight: 6  }} 
        onPress={() =>
          navigation.navigate("UserProfile", {
            username: user.username,
            lowerUsername: user.lowerUsername,
            profile: user.profile,
            email: user.email,
            about: '',
            _id: user._id
          })
        }
        >
        <View>
        <View style={{borderWidth: 2, borderColor: '#0078E9', borderRadius: 50}}>
        <Image
          style={{ width: 48, height: 48, borderRadius: 50, paddingLeft: 4 }}
        source={{ uri: !user.profile  ? "https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200" : user.profile }}
        />
      </View>
        </View>
        <View style={{ marginLeft: 8, flex: 1 }}>  
 <View style={{flexDirection: 'row', marginLeft: 4, alignItems: 'center'}}>
 <Text style={{ fontSize: 14.2, fontWeight: '700', color: 'white' }}>{user.username}</Text>
 <Image style={{ width: 16, height: 16, marginLeft: 2,  }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/768px-Twitter_Verified_Badge.svg.png' }} />

 </View>
        
            <View style={{  marginLeft: 4 }}>
                
              <Text  style={{ fontSize: 12, color: '#D9D9D9', }}>{user.lowerUsername}</Text>
              <Text  style={{ fontSize: 13, color: 'white',marginTop: 2,  }}>{user.descritption}</Text>
             
            </View>
          
          
        </View>
        <View style={{}}>
       <TouchableOpacity style={{backgroundColor: 'white', width: 70, height: 30, alignItems: 'center', justifyContent: 'center',borderRadius: 18, }}>
       <Text style={{padding: 6, fontWeight: 'bold', paddingLeft: 6, paddingRight: 6, }} >Follow</Text>

       </TouchableOpacity>
        {/* <MaterialCommunityIcons name="account-check-outline" size={24} color="white" />
         */}
        </View>
      </TouchableOpacity>
))}

     </ScrollView>



      </View>
    </View>
  )
}

export default SearchScreen