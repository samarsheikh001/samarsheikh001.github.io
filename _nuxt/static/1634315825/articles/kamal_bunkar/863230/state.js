window.__NUXT__=(function(a,b,c,d){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634315825",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:863230,title:"How to Remove White Splash Screen from Flutter App?",description:"Flutter App by Default shows a white screen on app startup. I know you want a custom splash screen on...",readable_publish_date:"Oct 14",slug:"how-to-remove-white-splash-screen-from-flutter-app-410e",path:"\u002Fkamal_bunkar\u002Fhow-to-remove-white-splash-screen-from-flutter-app-410e",url:"https:\u002F\u002Fdev.to\u002Fkamal_bunkar\u002Fhow-to-remove-white-splash-screen-from-flutter-app-410e",comments_count:0,public_reactions_count:c,collection_id:a,published_timestamp:b,positive_reactions_count:c,cover_image:a,social_image:"https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F863230.png",canonical_url:"https:\u002F\u002Fkamalbunkar.medium.com\u002Fhow-to-remove-white-splash-screen-from-flutter-app-1f240bd154c",created_at:b,edited_at:"2021-10-14T08:03:52Z",crossposted_at:a,published_at:b,last_comment_at:b,reading_time_minutes:3,tag_list:"flutter, dart, flutterdev, android",tags:["flutter","dart","flutterdev","android"],body_html:"\u003Cp\u003EFlutter App by Default shows a white screen on app startup. I know you want a custom splash screen on the app start. That’s why I am writing this article to help you out with this problem.\u003Cbr\u003E\nWhen you work on flutter, the very first thing you will notice is the White Screen on app startup. Flutter is best for app development, app performance and cross-platform development. But by default flutter splash screen background colour is white. The white splash screen will be shown to the user for at least two seconds. I am sure that you don’t want to see that white screen on app startup. So how to remove default splash screen in flutter? You can easily fix the white splash screen on the flutter app. If you will look for the solution to this problem in Flutter &amp; dart only, So you will not find anything. Actual solution lias on native android &amp; iOS development. So you will to just use the same tactic on flutter as well.\u003Cbr\u003E\nCheckout — \u003Ca href=\"https:\u002F\u002Fwww.dripcoding.com\u002F\"\u003Ekamal bunkar\u003C\u002Fa\u003E to know more about me. Read the Complete Article Here. You can watch it on Youtube as well.\u003Cbr\u003E\n\u003Cstrong\u003EFor Android App\u003C\u002Fstrong\u003E\u003Cbr\u003E\nIf you are a native android app developer, then you definitely know that to show any custom splash screen on app startup, add the splash screen image inside the drawable folder. If you will look into the flutter project &amp; android folder.\u003Cbr\u003E\n\u003Ccode\u003Eapp -&gt; src -&gt; main -&gt; res\u003C\u002Fcode\u003E\u003Cbr\u003E\nInside the drawable folder, you will find launch_background.xml file. Here you can choose from two options. Both are working fine, it is just a matter of writing the code.\u003Cbr\u003E\n\u003Cstrong\u003EOption 1)\u003C\u002Fstrong\u003E Edit this launch_background.xml by adding a new item and set the splash screen image as an item value(see below).\u003Cbr\u003E\n\u003Ccode\u003E&lt;?xml version=\"1.0\" encoding=\"utf-8\"?&gt;\u003Cbr\u003E\n&lt;!-- Modify this file to customize your launch splash screen --&gt;\u003C\u002Fcode\u003E\u003Cbr\u003E\n\u003Ccode\u003E&lt;layer-list xmlns:android=\"http:\u002F\u002Fschemas.android.com\u002Fapk\u002Fres\u002Fandroid\"&gt;\u003Cbr\u003E\n    &lt;item android:drawable=\"@color\u002Fcustom_color_here\" \u002F&gt;    &lt;!-- You can insert your own splash image assets here --&gt;\u003Cbr\u003E\n    &lt;item&gt;\u003Cbr\u003E\n        &lt;bitmap\u003Cbr\u003E\n            android:gravity=\"center\"\u003Cbr\u003E\n            android:src=\"@drawable\u002Fsplash_screen\" \u002F&gt;\u003Cbr\u003E\n    &lt;\u002Fitem&gt;\u003Cbr\u003E\n&lt;\u002Flayer-list&gt;\u003C\u002Fcode\u003E\u003Cbr\u003E\nThat’s it …… Super Easy\u003Cbr\u003E\n\u003Cstrong\u003EOption 2)\u003C\u002Fstrong\u003E — Another way is — don’t make changes on launch_background.xml, Just replace the reference of the launch_background.xml file with the new splash screen file that you want to display on the app startup. I am assuming you already added a new splash screen image into the drawable folder. Now open the AndroidManifest.xml file &amp; look for the meta tag \u003Ccode\u003Eandroid:name=”io.flutter.embedding.android.SplashScreenDrawable”\u003C\u002Fcode\u003E Just replace the launch_background name with your splash screen image name. ( change meta tag like below)\u003Cbr\u003E\n\u003Ccode\u003E&lt;meta-data\u003Cbr\u003E\n              android:name=\"io.flutter.embedding.android.SplashScreenDrawable\"\u003Cbr\u003E\n              android:resource=\"@drawable\u002Fsplashscreen\"\u003Cbr\u003E\n              \u002F&gt;\u003C\u002Fcode\u003E\u003Cbr\u003E\nGo inside res –&gt; values folder and here also replace the launch_background name with your splash screen image name. Do this action on both folder values and values-night.\u003Cbr\u003E\nWell Done … Run the Flutter Project on Android\u003Cbr\u003E\n\u003Cstrong\u003EFor iOS app\u003C\u002Fstrong\u003E\u003Cbr\u003E\nOpen flutter project on Xcode for Adding splash screen to flutter ios app. To open the iOS module on Xcode, open android studio and on the top menu select tools. Go to flutter –&gt; open ios module on Xcode.\u003Cbr\u003E\nOn Xcode window, Click on Runner-&gt; Runner -&gt; Assets.xcassets folder. Here you can see LaunchImage paste your splash screen image with all three different dimensions in this folder.\u003C\u002Fp\u003E\n\n\u003Cp\u003EOpen \u003Ccode\u003ELaunchScreen.storyboard\u003C\u002Fcode\u003E\u003Cbr\u003E\nAgain on the left side menu just below the Assets.xcassets folder, you will see LaunchScreen.Storyboard. Click on view controller scene -&gt; view controller -&gt; view. Note: — select (click on ) view only don’t click on LaunchImage. You already paste the new splash screen in the LaunchImage folder in the previous step. So you will see the same new image here in this window. When you select (click on ) view then on the right side window you can see options to change view settings like content mode, background, alpha etc. change the background colour as you want and set content mode to scale to fill.\u003Cbr\u003E\nAdjust Splash Screen\u003Cbr\u003E\nYou can adjust the splash screen position, size &amp; background colour on the same window. Just click on launchImage OR select the image on the preview window. You can resize the image and can adjust the image position. On the Right side window, you can make another setting as well.\u003Cbr\u003E\niOS App Splash Screen is Ready.\u003Cbr\u003E\nNow flutter white splash screen problem has been resolved successfully for both android and iOS. You can change the flutter splash screen background colour as per your requirements.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EYou can also watch the video tutorial on my channel — \u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fchannel\u002FUC0tb4vuqPimSCWdnJailrTw\"\u003Ehttps:\u002F\u002Fwww.youtube.com\u002Fchannel\u002FUC0tb4vuqPimSCWdnJailrTw\u003C\u002Fa\u003E\u003Cbr\u003E\nLearn Complete Flutter App Development — \u003Ca href=\"https:\u002F\u002Fwww.dripcoding.com\u002Fbest-flutter-online-course\u002F\"\u003Ehttps:\u002F\u002Fwww.dripcoding.com\u002Fbest-flutter-online-course\u002F\u003C\u002Fa\u003E\u003Cbr\u003E\nTweeter — \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fkamal_bunkar\"\u003Ehttps:\u002F\u002Ftwitter.com\u002Fkamal_bunkar\u003C\u002Fa\u003E\u003Cbr\u003E\nFacebook — \u003Ca href=\"https:\u002F\u002Fwww.facebook.com\u002Fdripcoding\"\u003Ehttps:\u002F\u002Fwww.facebook.com\u002Fdripcoding\u003C\u002Fa\u003E\u003Cbr\u003E\nLinkedin — \u003Ca href=\"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fkamal-bunkar\u002F\"\u003Ehttps:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fkamal-bunkar\u002F\u003C\u002Fa\u003E\u003Cbr\u003E\nTelegram — t.me\u002Fdricoding\u003Cbr\u003E\nInstagram — \u003Ca href=\"https:\u002F\u002Fwww.instagram.com\u002Fthe_kamal_bunkar\u002F\"\u003Ehttps:\u002F\u002Fwww.instagram.com\u002Fthe_kamal_bunkar\u002F\u003C\u002Fa\u003E\u003Cbr\u003E\nIf you have any doubts, Feel Free to contact us.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n",body_markdown:"Flutter App by Default shows a white screen on app startup. I know you want a custom splash screen on the app start. That’s why I am writing this article to help you out with this problem.\nWhen you work on flutter, the very first thing you will notice is the White Screen on app startup. Flutter is best for app development, app performance and cross-platform development. But by default flutter splash screen background colour is white. The white splash screen will be shown to the user for at least two seconds. I am sure that you don’t want to see that white screen on app startup. So how to remove default splash screen in flutter? You can easily fix the white splash screen on the flutter app. If you will look for the solution to this problem in Flutter & dart only, So you will not find anything. Actual solution lias on native android & iOS development. So you will to just use the same tactic on flutter as well.\nCheckout — [kamal bunkar](https:\u002F\u002Fwww.dripcoding.com\u002F) to know more about me. Read the Complete Article Here. You can watch it on Youtube as well.\n**For Android App**\nIf you are a native android app developer, then you definitely know that to show any custom splash screen on app startup, add the splash screen image inside the drawable folder. If you will look into the flutter project & android folder.\n`app -\u003E src -\u003E main -\u003E res`\nInside the drawable folder, you will find launch_background.xml file. Here you can choose from two options. Both are working fine, it is just a matter of writing the code.\n**Option 1)** Edit this launch_background.xml by adding a new item and set the splash screen image as an item value(see below).\n`\u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\n\u003C!-- Modify this file to customize your launch splash screen --\u003E`\n`\u003Clayer-list xmlns:android=\"http:\u002F\u002Fschemas.android.com\u002Fapk\u002Fres\u002Fandroid\"\u003E\n    \u003Citem android:drawable=\"@color\u002Fcustom_color_here\" \u002F\u003E    \u003C!-- You can insert your own splash image assets here --\u003E\n    \u003Citem\u003E\n        \u003Cbitmap\n            android:gravity=\"center\"\n            android:src=\"@drawable\u002Fsplash_screen\" \u002F\u003E\n    \u003C\u002Fitem\u003E\n\u003C\u002Flayer-list\u003E`\nThat’s it …… Super Easy\n**Option 2)** — Another way is — don’t make changes on launch_background.xml, Just replace the reference of the launch_background.xml file with the new splash screen file that you want to display on the app startup. I am assuming you already added a new splash screen image into the drawable folder. Now open the AndroidManifest.xml file & look for the meta tag `android:name=”io.flutter.embedding.android.SplashScreenDrawable”` Just replace the launch_background name with your splash screen image name. ( change meta tag like below)\n`\u003Cmeta-data\n              android:name=\"io.flutter.embedding.android.SplashScreenDrawable\"\n              android:resource=\"@drawable\u002Fsplashscreen\"\n              \u002F\u003E`\nGo inside res –\u003E values folder and here also replace the launch_background name with your splash screen image name. Do this action on both folder values and values-night.\nWell Done … Run the Flutter Project on Android\n**For iOS app**\nOpen flutter project on Xcode for Adding splash screen to flutter ios app. To open the iOS module on Xcode, open android studio and on the top menu select tools. Go to flutter –\u003E open ios module on Xcode.\nOn Xcode window, Click on Runner-\u003E Runner -\u003E Assets.xcassets folder. Here you can see LaunchImage paste your splash screen image with all three different dimensions in this folder.\n\nOpen `LaunchScreen.storyboard`\nAgain on the left side menu just below the Assets.xcassets folder, you will see LaunchScreen.Storyboard. Click on view controller scene -\u003E view controller -\u003E view. Note: — select (click on ) view only don’t click on LaunchImage. You already paste the new splash screen in the LaunchImage folder in the previous step. So you will see the same new image here in this window. When you select (click on ) view then on the right side window you can see options to change view settings like content mode, background, alpha etc. change the background colour as you want and set content mode to scale to fill.\nAdjust Splash Screen\nYou can adjust the splash screen position, size & background colour on the same window. Just click on launchImage OR select the image on the preview window. You can resize the image and can adjust the image position. On the Right side window, you can make another setting as well.\niOS App Splash Screen is Ready.\nNow flutter white splash screen problem has been resolved successfully for both android and iOS. You can change the flutter splash screen background colour as per your requirements.\n\u003EYou can also watch the video tutorial on my channel — https:\u002F\u002Fwww.youtube.com\u002Fchannel\u002FUC0tb4vuqPimSCWdnJailrTw\nLearn Complete Flutter App Development — https:\u002F\u002Fwww.dripcoding.com\u002Fbest-flutter-online-course\u002F\nTweeter — https:\u002F\u002Ftwitter.com\u002Fkamal_bunkar\nFacebook — https:\u002F\u002Fwww.facebook.com\u002Fdripcoding\nLinkedin — https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fkamal-bunkar\u002F\nTelegram — t.me\u002Fdricoding\nInstagram — https:\u002F\u002Fwww.instagram.com\u002Fthe_kamal_bunkar\u002F\nIf you have any doubts, Feel Free to contact us.",user:{name:"kamal bunkar",username:d,twitter_username:d,github_username:a,website_url:"https:\u002F\u002Fwww.dripcoding.com",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--wjEP9T2O--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F652493\u002Fc04bc691-e4cf-43fd-8675-3a66f3f0ac23.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--5MBJ9TL1--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F652493\u002Fc04bc691-e4cf-43fd-8675-3a66f3f0ac23.png"}}},serverRendered:true,routePath:"\u002Farticles\u002Fkamal_bunkar\u002F863230",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2021-10-14T08:03:00Z",1,"kamal_bunkar"));