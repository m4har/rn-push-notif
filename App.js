import React,{useEffect, useCallback} from 'react'
import {View, Button} from 'react-native'
import PushNotification from 'react-native-push-notification'

const App = () => {
  useEffect(()=>{
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log("TOKEN:", token);
      },
    
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
    
        // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    
      // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: "781328842893",
    
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
    
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
      
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       */
      requestPermissions: true
    });
    
  },[])
  const onClickNotif = useCallback(()=>{
    PushNotification.localNotification({
      title:'promo',
      subText:'murah murah',
      message:'123',
      color:'red',
      actions:`['OK','NO']`
    })
  },[false])

  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button title='notif' onPress={onClickNotif}/>
    </View>
  )
}

export default App