// openInAppBrowser.js
import { Linking } from 'react-native';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

export const openInAppBrowser = async (url, type) => {
  //console.log("ARG = ", url);
  if (type==="TEL")
    {
        try {
        await Linking.openURL(url);
        } catch (error) {
        console.error("ERROR ALERTE ",error);
      }
      return;
    }

  try {
    const isAvailable = await InAppBrowser.isAvailable();
    if (isAvailable) {
      await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        hasBackButton: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right'
        },
        headers: {
          'my-custom-header': 'my custom header value'
        }
      });
    } else {
      console.log("NON VALABLE = ", url);
      Linking.openURL(url);
    }
  } catch (error) {
    console.error(error);
    Linking.openURL(url);
  }
};
