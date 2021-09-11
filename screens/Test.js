import React, {useState, useEffect} from 'react'
import { Text, View, Button } from 'react-native'
import { signIn, signOut, onAuthStateChanged } from '../api/auth';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { getUser } from '../api/users';
import { sendMessage, onConversationChange } from '../api/messaging';
export default function Test() {
    const [signInStatus, setSignInStatus] = useState(false);
    const [signInProgress, setSignInProgress] = useState(false);
    const [user, setUser] = useState(null);
    const [userAuth, setUserAuth] = useState(null);
    const [userType, setUserType] = useState('currently userType is not set')
    
    useEffect(() => {
        var unsubscribe1 = onAuthStateChanged(user => {
            if (user) {
                setUserAuth(user);
            } else {
                setUserAuth(null);
            }
            
        })
        var unsubscribe2 = onConversationChange("123", conversation => {
            console.log(conversation)
        })

        return () => {
            unsubscribe1();
            unsubscribe2();
        }
    })
    

    return (
        <View style={{paddingTop:100}}>
            {/* <Text>{signInStatus ? 'Signed In' : 'No Account detected'}</Text> */}
            <Text>{userAuth ? userAuth.email : 'No User'}</Text>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={async () => {
                    await signIn().catch(err => {
                        console.log(err)
                    })
                }}
                disabled={userAuth ? true : false}
                />
                <Button 
                    title="Sign Out"
                    onPress={async ()=> {
                        await signOut();
                }}
                    disabled={!userAuth}
                />

                <Button title="get public value firestore"
                onPress={async () => {
                    if (!userAuth) {
                        setUserType('currentUser is not detected')
                    } else {
                        const {_data} = await getUser(userAuth.uid);
                        if (_data) {
                            setUserType(_data.type);
                        } else {
                            console.error('something is wrong')
                        }
                    }
                }}/>
                <Text>From firestore database: {userType}</Text>
                <Button title="send Message"
                onPress={async () => {
                    await sendMessage("testing append", "123", "senderId123")
                }}/>
        </View>
    )
}
