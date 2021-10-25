window.__NUXT__=(function(a,b,c,d){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:528620,title:"Deep linking in React Native app with React Navigation v5",description:"Deep linking is when a link sends users directly into a specific point in the app experience, rather...",readable_publish_date:"Nov 30 '20",slug:"deep-linking-in-react-native-app-with-react-navigation-v5-41id",path:"\u002Ftechtalks\u002Fdeep-linking-in-react-native-app-with-react-navigation-v5-41id",url:c,comments_count:2,public_reactions_count:d,collection_id:a,published_timestamp:b,positive_reactions_count:d,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--M5ySWlDc--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fk8ad7p8ek0a42uwksqf1.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--JcLqsshw--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fk8ad7p8ek0a42uwksqf1.png",canonical_url:c,created_at:b,edited_at:"2020-11-30T08:55:25Z",crossposted_at:a,published_at:b,last_comment_at:"2021-06-24T21:46:19Z",reading_time_minutes:4,tag_list:"javascript, reactnative, react, mobile",tags:["javascript","reactnative","react","mobile"],body_html:"\u003Cp\u003EDeep linking is when a link sends users directly into a specific point in the app experience, rather than an external website or app homepage.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"whats-is-deeplink\" href=\"#whats-is-deeplink\"\u003E\n  \u003C\u002Fa\u003E\n  Whats is Deeplink\n\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EA deep link is a link that takes you to content.\u003C\u002Fli\u003E\n\u003Cli\u003EDeep linking is when a link sends users directly into a specific point in the app experience, rather than an external website or app homepage.\u003C\u002Fli\u003E\n\u003Cli\u003EMost web links are deep links.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003Chr\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"types-of-deep-linking\" href=\"#types-of-deep-linking\"\u003E\n  \u003C\u002Fa\u003E\n  Types of Deep Linking\n\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003ECustom URI Schemes\u003C\u002Fli\u003E\n\u003Cli\u003EiOS Universal Links\u003C\u002Fli\u003E\n\u003Cli\u003EAndroid App Links\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003Chr\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"uri-schemes\" href=\"#uri-schemes\"\u003E\n  \u003C\u002Fa\u003E\n  URI Schemes\n\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003ECustom URI schemes were the original form of deep linking for mobile apps.\u003C\u002Fli\u003E\n\u003Cli\u003EThey are like creating a “private internet” for your app, with links that look like \u003Ccode\u003Edemo:\u002F\u002Fpath\u002Fto\u002Fcontent\u003C\u002Fcode\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003EThe advantage of custom URI schemes is they are easy to set up.\u003C\u002Fli\u003E\n\u003Cli\u003EThe disadvantage is a user’s device only knows about this “private internet” if the corresponding app is already installed, and there is no graceful fallback option by default.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"universal-links\" href=\"#universal-links\"\u003E\n  \u003C\u002Fa\u003E\n  Universal Links\n\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EApple introduced Universal Links in iOS 9 as a solution to the lack of graceful fallback functionality in custom URI scheme deep links.\u003C\u002Fli\u003E\n\u003Cli\u003EUniversal Links are standard web links (\u003Ccode\u003Ehttps:\u002F\u002Fankitkumar.dev\u003C\u002Fcode\u003E) that point to both a web page and a piece of content inside an app.\u003C\u002Fli\u003E\n\u003Cli\u003EWhen a Universal Link is opened, iOS checks to see if any installed app on the device is registered for that domain.\n\n\u003Cul\u003E\n\u003Cli\u003EIf so, the app is launched immediately without ever loading the web page.\u003C\u002Fli\u003E\n\u003Cli\u003EIf not, the web URL (which can be a simple redirect to the App Store) is loaded in Safari.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"android-app-links\" href=\"#android-app-links\"\u003E\n  \u003C\u002Fa\u003E\n  Android App Links\n\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EGoogle built App Links as the Android equivalent to iOS Universal Links.\u003C\u002Fli\u003E\n\u003Cli\u003EThey operate in a very similar way:\n\n\u003Cul\u003E\n\u003Cli\u003Ea standard web link that points to both a web page and a piece of content inside an app.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003C\u002Fli\u003E\n\u003Cli\u003EThis results in a smoother user experience.\u003C\u002Fli\u003E\n\u003Cli\u003ESince custom URI schemes are still fully supported by every version of Android, App Links have seen very low adoption.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003Chr\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"what-are-we-building\" href=\"#what-are-we-building\"\u003E\n  \u003C\u002Fa\u003E\n  What are we building?\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EI am declaring deep link URLs for our application, which will open our app from anywhere in the os on Android and iOS devices.\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Ccode\u003Edemo:\u002F\u002Fapp\u002Fhome\u002F:id\u003C\u002Fcode\u003E - This deep link will open the home screen of the app and will pass \u003Ccode\u003Eid\u003C\u002Fcode\u003E as param\u002Fprops to the home screen\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ccode\u003Edemo:\u002F\u002Fapp\u002Fprofile\u002F:id\u003C\u002Fcode\u003E - This deep link will open the profile screen of the app and will pass \u003Ccode\u003Eid\u003C\u002Fcode\u003E as param\u002Fprops to the profile screen\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ccode\u003Edemo:\u002F\u002Fapp\u002Fnotifications\u003C\u002Fcode\u003E - This deep link will open the notifications screen of the app\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ccode\u003Edemo:\u002F\u002Fapp\u002Fsettings\u003C\u002Fcode\u003E - This deep link will open the notifications screen of the app\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EAfter the implementation of the deep-link, the app will behave as shown here at (0:55) in the video.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ciframe width=\"710\" height=\"399\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002Fs8YaclRknYw\" allowfullscreen loading=\"lazy\"\u003E\n\u003C\u002Fiframe\u003E\n\u003C\u002Fp\u003E\n\n\n\u003Chr\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"lets-do-some-code-now\" href=\"#lets-do-some-code-now\"\u003E\n  \u003C\u002Fa\u003E\n  Let's do some code now!\n\u003C\u002Fh1\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"setting-up-the-project\" href=\"#setting-up-the-project\"\u003E\n  \u003C\u002Fa\u003E\n  Setting up the project\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EI am assuming that you already have a project in which deep links need to be integrated.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf you don't have any project, I have created a small app with four screens and explained here at (0:05) in the video.\u003Cbr\u003E\n\u003Ciframe width=\"710\" height=\"399\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002Fs8YaclRknYw\" allowfullscreen loading=\"lazy\"\u003E\n\u003C\u002Fiframe\u003E\n\u003C\u002Fp\u003E\n\n\n\u003Chr\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"setting-up-custom-uri-scheme-for-ios-in-xcode\" href=\"#setting-up-custom-uri-scheme-for-ios-in-xcode\"\u003E\n  \u003C\u002Fa\u003E\n  Setting up custom uri scheme for iOS in Xcode\n\u003C\u002Fh3\u003E\n\n\u003Col\u003E\n\u003Cli\u003EOpen your \u003Ccode\u003Ereact-native\u003C\u002Fcode\u003E(\u003Ccode\u003Edeeplinkreactnavigation\u003C\u002Fcode\u003E) project and go to the \u003Ccode\u003Eios\u003C\u002Fcode\u003E folder.\u003C\u002Fli\u003E\n\u003Cli\u003EOpen the file with extension \u003Ccode\u003E.xcworkspace\u003C\u002Fcode\u003E by double-clicking on it. In this project \u003Ccode\u003Edeeplinkreactnavigation.xcworkspace\u003C\u002Fcode\u003E is the file.\u003C\u002Fli\u003E\n\u003Cli\u003EAfter opening in Xcode, follow the steps from the screenshot below and add \u003Ccode\u003Edemo\u003C\u002Fcode\u003E to \u003Ccode\u003EURL Schemes\u003C\u002Fcode\u003E and \u003Ccode\u003Etarget name\u003C\u002Fcode\u003E(\u003Ccode\u003Edeeplinkreactnavigation\u003C\u002Fcode\u003E) to the Identifier.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_vErF7f9--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fraw.githubusercontent.com\u002FAnkitDroidGit\u002Fankitdroidgit.github.io\u002Fmaster\u002Fassets\u002Fimages\u002Fpost\u002Freact-native\u002Fdeeplink\u002Fios_setup.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_vErF7f9--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fraw.githubusercontent.com\u002FAnkitDroidGit\u002Fankitdroidgit.github.io\u002Fmaster\u002Fassets\u002Fimages\u002Fpost\u002Freact-native\u002Fdeeplink\u002Fios_setup.png\" alt=\"\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"setting-up-custom-uri-scheme-for-android-in-android-studio\" href=\"#setting-up-custom-uri-scheme-for-android-in-android-studio\"\u003E\n  \u003C\u002Fa\u003E\n  Setting up custom URI scheme for Android in Android Studio\n\u003C\u002Fh3\u003E\n\n\u003Col\u003E\n\u003Cli\u003EOpen your \u003Ccode\u003Ereact-native\u003C\u002Fcode\u003E(\u003Ccode\u003Edeeplinkreactnavigation\u003C\u002Fcode\u003E) project and go to the \u003Ccode\u003Eandroid\u003C\u002Fcode\u003E folder.\u003C\u002Fli\u003E\n\u003Cli\u003EOpen file \u003Ccode\u003Ebuild.gradle\u003C\u002Fcode\u003E with \u003Ccode\u003EAndroid Studio\u003C\u002Fcode\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003EAfter opening in \u003Ccode\u003EAndroid Studio\u003C\u002Fcode\u003E, open \u003Ccode\u003EAndroidmanifest.xml\u003C\u002Fcode\u003E and add \u003Ccode\u003Eintent-filter\u003C\u002Fcode\u003E as shown below.\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E    &lt;intent-filter&gt;\n        &lt;action android:name=\"android.intent.action.VIEW\" \u002F&gt;\n        &lt;category android:name=\"android.intent.category.DEFAULT\" \u002F&gt;\n        &lt;category android:name=\"android.intent.category.BROWSABLE\" \u002F&gt;\n\n        &lt;data\n          android:host=\"app\"\n          android:scheme=\"demo\" \u002F&gt;\n      &lt;\u002Fintent-filter&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\n\u003Chr\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"handling-deep-link-in-react-native\" href=\"#handling-deep-link-in-react-native\"\u003E\n  \u003C\u002Fa\u003E\n  Handling deep link in react native\n\u003C\u002Fh3\u003E\n\n\u003Col\u003E\n\u003Cli\u003ECreate a new file \u003Ccode\u003Elinking.js\u003C\u002Fcode\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EAdd \u003Ccode\u003Eprefixes\u003C\u002Fcode\u003E as an array of \u003Ccode\u003Edemo:\u002F\u002Fapp\u003C\u002Fcode\u003E and all \u003Ccode\u003Edeep link\u003C\u002Fcode\u003E URLs as described above to the file as shown below\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Econst config = {\n  screens: {\n    Home: {\n      path: \"home\u002F:id\",\n      parse: {\n        id: (id) =&gt; `${id}`,\n      },\n    },\n    Profile: {\n      path: \"profile\u002F:id\",\n      parse: {\n        id: (id) =&gt; `${id}`,\n      },\n    },\n    Notifications: \"notifications\",\n    Settings: \"settings\",\n  },\n};\n\nconst linking = {\n  prefixes: [\"demo:\u002F\u002Fapp\"],\n  config,\n};\n\nexport default linking;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"using-raw-linkingjs-endraw-in-raw-appjs-endraw-\" href=\"#using-raw-linkingjs-endraw-in-raw-appjs-endraw-\"\u003E\n  \u003C\u002Fa\u003E\n  Using \u003Ccode\u003Elinking.js\u003C\u002Fcode\u003E in \u003Ccode\u003EApp.js\u003C\u002Fcode\u003E\n\u003C\u002Fh3\u003E\n\n\u003Col\u003E\n\u003Cli\u003Eimport \u003Ccode\u003Elinking\u003C\u002Fcode\u003E in \u003Ccode\u003EApp.js\u003C\u002Fcode\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EAdd it to \u003Ccode\u003ENavigationContainer\u003C\u002Fcode\u003E as shown below\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E&lt;NavigationContainer linking={linking}&gt;\n      &lt;MyStack \u002F&gt;\n&lt;\u002FNavigationContainer&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\n\u003Chr\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EWe are done with the coding part\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EIt was easy, wasn't it?\u003C\u002Fp\u003E\n\n\n\u003Chr\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"testing-deep-link\" href=\"#testing-deep-link\"\u003E\n  \u003C\u002Fa\u003E\n  Testing deep link\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EIts always easy and better to test deep link on physical devices, so\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EInstall the app on devices(\u003Ccode\u003EAndroid\u003C\u002Fcode\u003E or \u003Ccode\u003EiOS\u003C\u002Fcode\u003E or \u003Ccode\u003Eboth\u003C\u002Fcode\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003EHave the deep link URL in any other app\u003C\u002Fli\u003E\n\u003Cli\u003ETap on deep link URL as a normal URL\u003C\u002Fli\u003E\n\u003Cli\u003EIts should take you our app's respective screen\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EIf you want to test deep link on virtual devices, then\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EInstall the app on virtual devices(\u003Ccode\u003EAndroid\u003C\u002Fcode\u003E or \u003Ccode\u003EiOS\u003C\u002Fcode\u003E or \u003Ccode\u003Eboth\u003C\u002Fcode\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003EType command \u003Ccode\u003Enpx uri-scheme open demo:\u002F\u002Fapp\u002Fnotifications --android\u003C\u002Fcode\u003E for \u003Ccode\u003Eandroid\u003C\u002Fcode\u003E to deeplink to \u003Ccode\u003Enotifications\u003C\u002Fcode\u003E screen\u003C\u002Fli\u003E\n\u003Cli\u003EType command \u003Ccode\u003Enpx uri-scheme open demo:\u002F\u002Fapp\u002Fnotifications --ios\u003C\u002Fcode\u003E for \u003Ccode\u003Eios\u003C\u002Fcode\u003E to deeplink to \u003Ccode\u003Enotifications\u003C\u002Fcode\u003E screen\u003C\u002Fli\u003E\n\u003Cli\u003EAnd see the magic\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"testing-video-at-934-in-the-video\" href=\"#testing-video-at-934-in-the-video\"\u003E\n  \u003C\u002Fa\u003E\n  Testing Video at (9:34) in the video.\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003E\u003Ciframe width=\"710\" height=\"399\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002Fs8YaclRknYw\" allowfullscreen loading=\"lazy\"\u003E\n\u003C\u002Fiframe\u003E\n\u003C\u002Fp\u003E\n\n\n\u003Chr\u003E\n\n\u003Cp\u003EOriginally posted on \u003Ca href=\"https:\u002F\u002Fankitkumar.dev\u002Freact-native-deeplink-with-react-navigation\"\u003Eankitkumar.dev\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Chr\u003E\n\n\u003Cp\u003EAlso, to be notified about my new articles and stories:\u003C\u002Fp\u003E\n\n\u003Cp\u003ESubscribe to my \u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fc\u002FTechTalksByAnkitKumar\"\u003EYouTube Channel\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EFollow me on \u003Ca href=\"https:\u002F\u002Fankitdeveloper.medium.com\u002F\"\u003EMedium\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FAnkitDroidGit\"\u003EGithub\u003C\u002Fa\u003E, and \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002FKumarrAnkitt\"\u003ETwitter\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou can find me on \u003Ca href=\"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fkumarankitkumar\u002F\"\u003ELinkedIn\u003C\u002Fa\u003E as well.\u003C\u002Fp\u003E\n\n\u003Cp\u003EI am quite active on \u003Ca href=\"https:\u002F\u002Fdev.to\u002Fankitkumar\"\u003EDev Community\u003C\u002Fa\u003E as well and write small topics over there.\u003C\u002Fp\u003E\n\n\u003Cp\u003ECheers!!\u003C\u002Fp\u003E\n\n",body_markdown:"Deep linking is when a link sends users directly into a specific point in the app experience, rather than an external website or app homepage.\n\n### Whats is Deeplink\n\n- A deep link is a link that takes you to content.\n- Deep linking is when a link sends users directly into a specific point in the app experience, rather than an external website or app homepage.\n- Most web links are deep links.\n\n---\n\n### Types of Deep Linking\n\n- Custom URI Schemes\n- iOS Universal Links\n- Android App Links\n\n---\n\n### URI Schemes\n\n- Custom URI schemes were the original form of deep linking for mobile apps.\n- They are like creating a “private internet” for your app, with links that look like `demo:\u002F\u002Fpath\u002Fto\u002Fcontent`.\n- The advantage of custom URI schemes is they are easy to set up.\n- The disadvantage is a user’s device only knows about this “private internet” if the corresponding app is already installed, and there is no graceful fallback option by default.\n\n### Universal Links\n\n- Apple introduced Universal Links in iOS 9 as a solution to the lack of graceful fallback functionality in custom URI scheme deep links.\n- Universal Links are standard web links (`https:\u002F\u002Fankitkumar.dev`) that point to both a web page and a piece of content inside an app.\n- When a Universal Link is opened, iOS checks to see if any installed app on the device is registered for that domain.\n  - If so, the app is launched immediately without ever loading the web page.\n  - If not, the web URL (which can be a simple redirect to the App Store) is loaded in Safari.\n\n### Android App Links\n\n- Google built App Links as the Android equivalent to iOS Universal Links.\n- They operate in a very similar way:\n  - a standard web link that points to both a web page and a piece of content inside an app.\n- This results in a smoother user experience.\n- Since custom URI schemes are still fully supported by every version of Android, App Links have seen very low adoption.\n\n---\n\n### What are we building?\n\nI am declaring deep link URLs for our application, which will open our app from anywhere in the os on Android and iOS devices.\n\n- `demo:\u002F\u002Fapp\u002Fhome\u002F:id` - This deep link will open the home screen of the app and will pass `id` as param\u002Fprops to the home screen\n- `demo:\u002F\u002Fapp\u002Fprofile\u002F:id` - This deep link will open the profile screen of the app and will pass `id` as param\u002Fprops to the profile screen\n- `demo:\u002F\u002Fapp\u002Fnotifications` - This deep link will open the notifications screen of the app\n- `demo:\u002F\u002Fapp\u002Fsettings` - This deep link will open the notifications screen of the app\n\nAfter the implementation of the deep-link, the app will behave as shown here at (0:55) in the video.\n\n{% youtube s8YaclRknYw %}\n\n---\n\n# Let's do some code now!\n\n### Setting up the project\n\nI am assuming that you already have a project in which deep links need to be integrated.\n\nIf you don't have any project, I have created a small app with four screens and explained here at (0:05) in the video.\n{% youtube s8YaclRknYw %}\n\n---\n\n### Setting up custom uri scheme for iOS in Xcode\n\n1. Open your `react-native`(`deeplinkreactnavigation`) project and go to the `ios` folder.\n2. Open the file with extension `.xcworkspace` by double-clicking on it. In this project `deeplinkreactnavigation.xcworkspace` is the file.\n3. After opening in Xcode, follow the steps from the screenshot below and add `demo` to `URL Schemes` and `target name`(`deeplinkreactnavigation`) to the Identifier.\n\n![](https:\u002F\u002Fraw.githubusercontent.com\u002FAnkitDroidGit\u002Fankitdroidgit.github.io\u002Fmaster\u002Fassets\u002Fimages\u002Fpost\u002Freact-native\u002Fdeeplink\u002Fios_setup.png)\n\n### Setting up custom URI scheme for Android in Android Studio\n\n1. Open your `react-native`(`deeplinkreactnavigation`) project and go to the `android` folder.\n2. Open file `build.gradle` with `Android Studio`.\n3. After opening in `Android Studio`, open `Androidmanifest.xml` and add `intent-filter` as shown below.\n\n\n```\n    \u003Cintent-filter\u003E\n        \u003Caction android:name=\"android.intent.action.VIEW\" \u002F\u003E\n        \u003Ccategory android:name=\"android.intent.category.DEFAULT\" \u002F\u003E\n        \u003Ccategory android:name=\"android.intent.category.BROWSABLE\" \u002F\u003E\n\n        \u003Cdata\n          android:host=\"app\"\n          android:scheme=\"demo\" \u002F\u003E\n      \u003C\u002Fintent-filter\u003E\n``` \n\n\n\n---\n\n### Handling deep link in react native\n\n1. Create a new file `linking.js`\n2. Add `prefixes` as an array of `demo:\u002F\u002Fapp` and all `deep link` URLs as described above to the file as shown below\n\n```\nconst config = {\n  screens: {\n    Home: {\n      path: \"home\u002F:id\",\n      parse: {\n        id: (id) =\u003E `${id}`,\n      },\n    },\n    Profile: {\n      path: \"profile\u002F:id\",\n      parse: {\n        id: (id) =\u003E `${id}`,\n      },\n    },\n    Notifications: \"notifications\",\n    Settings: \"settings\",\n  },\n};\n\nconst linking = {\n  prefixes: [\"demo:\u002F\u002Fapp\"],\n  config,\n};\n\nexport default linking;\n```\n\n### Using `linking.js` in `App.js`\n\n1. import `linking` in `App.js`\n2. Add it to `NavigationContainer` as shown below\n\n```\n\u003CNavigationContainer linking={linking}\u003E\n      \u003CMyStack \u002F\u003E\n\u003C\u002FNavigationContainer\u003E\n```\n\n---\n\n**We are done with the coding part**\n\nIt was easy, wasn't it?\n\n---\n\n### Testing deep link\n\nIts always easy and better to test deep link on physical devices, so\n\n- Install the app on devices(`Android` or `iOS` or `both`)\n- Have the deep link URL in any other app\n- Tap on deep link URL as a normal URL\n- Its should take you our app's respective screen\n\nIf you want to test deep link on virtual devices, then\n\n- Install the app on virtual devices(`Android` or `iOS` or `both`)\n- Type command `npx uri-scheme open demo:\u002F\u002Fapp\u002Fnotifications --android` for `android` to deeplink to `notifications` screen\n- Type command `npx uri-scheme open demo:\u002F\u002Fapp\u002Fnotifications --ios` for `ios` to deeplink to `notifications` screen\n- And see the magic\n\n## Testing Video at (9:34) in the video.\n\n{% youtube s8YaclRknYw %}\n\n---\nOriginally posted on [ankitkumar.dev](https:\u002F\u002Fankitkumar.dev\u002Freact-native-deeplink-with-react-navigation)\n\n---\n\nAlso, to be notified about my new articles and stories:\n\nSubscribe to my [YouTube Channel](https:\u002F\u002Fwww.youtube.com\u002Fc\u002FTechTalksByAnkitKumar)\n\nFollow me on [Medium](https:\u002F\u002Fankitdeveloper.medium.com\u002F), [Github](https:\u002F\u002Fgithub.com\u002FAnkitDroidGit), and [Twitter](https:\u002F\u002Ftwitter.com\u002FKumarrAnkitt).\n\nYou can find me on [LinkedIn](https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fkumarankitkumar\u002F) as well.\n\nI am quite active on [Dev Community](https:\u002F\u002Fdev.to\u002Fankitkumar) as well and write small topics over there.\n\nCheers!!",user:{name:"Ankit Kumar",username:"techtalks",twitter_username:"KumarAnkitRKE",github_username:"AnkitDroidGit",website_url:"https:\u002F\u002Fankitkumar.dev",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--MQVhdsp_--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F89963\u002F1f622fa8-60d1-4948-8866-96499cb8839d.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--DtF2zjwF--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F89963\u002F1f622fa8-60d1-4948-8866-96499cb8839d.jpg"}}},serverRendered:true,routePath:"\u002Farticles\u002Ftechtalks\u002F528620",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2020-11-30T08:53:43Z","https:\u002F\u002Fdev.to\u002Ftechtalks\u002Fdeep-linking-in-react-native-app-with-react-navigation-v5-41id",30));