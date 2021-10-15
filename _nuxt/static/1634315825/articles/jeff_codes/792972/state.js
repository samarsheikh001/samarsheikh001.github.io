window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634315825",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:792972,title:"How I built and Published My First React Native App (Daily Discomfort)",description:"🏃🏻‍♂️TLDR    React Native + Redux + NodeJs + MongoDB Atlas + Heroku = Daily Discomfort     ...",readable_publish_date:"Aug 15",slug:"how-i-built-and-published-my-first-react-native-app-daily-discomfort-311d",path:"\u002Fjeff_codes\u002Fhow-i-built-and-published-my-first-react-native-app-daily-discomfort-311d",url:b,comments_count:8,public_reactions_count:c,collection_id:a,published_timestamp:d,positive_reactions_count:c,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--aG1eL9FP--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F6ia8rr30xv3nkb0c868x.jpeg",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--eHdKFMP2--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F6ia8rr30xv3nkb0c868x.jpeg",canonical_url:b,created_at:"2021-08-15T22:28:46Z",edited_at:a,crossposted_at:a,published_at:d,last_comment_at:"2021-08-21T05:27:18Z",reading_time_minutes:6,tag_list:"javascript, react, reactnative, typescript",tags:["javascript","react","reactnative","typescript"],body_html:"\u003Ch2\u003E\n  \u003Ca name=\"tldr\" href=\"#tldr\"\u003E\n  \u003C\u002Fa\u003E\n  🏃🏻‍♂️TLDR\n\u003C\u002Fh2\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EReact Native + Redux + NodeJs + MongoDB Atlas + Heroku = Daily Discomfort\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"what-is-it\" href=\"#what-is-it\"\u003E\n  \u003C\u002Fa\u003E\n  🤨 What is it?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EDaily Discomfort is an app that allows users to swipe on different prompts that are designed to get them out of their comfort zones. After the user swipes right on a prompt their mission is to go out into the real word to complete the challenge. Once completed, or failed, the user comes back to the app to journal about their experiences trying to complete the prompt.  It can be found on  the \u003Ca href=\"https:\u002F\u002Fapps.apple.com\u002Fus\u002Fapp\u002Fdaily-discomfort\u002Fid1535108054\"\u003EApple AppStore\u003C\u002Fa\u003E &amp; \u003Ca href=\"https:\u002F\u002Fplay.google.com\u002Fstore\u002Fapps\u002Fdetails?id=com.jeffedmondson.dailydiscomfort\"\u003EGoogle Play Store\u003C\u002Fa\u003E.\u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_L_BPKOF--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fcm7f9iptp3zt9gfaveqk.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_L_BPKOF--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fcm7f9iptp3zt9gfaveqk.png\" alt=\"Daily Discomfort Swiping Page\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch2\u003E\n  \u003Ca name=\"%EF%B8%8F-motivation\" href=\"#%EF%B8%8F-motivation\"\u003E\n  \u003C\u002Fa\u003E\n  ☕️ Motivation\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EThe whole reason that I created this app is because I recognize I am terrified to get out of my own comfort zone. I wanted something that would force me each and every day to try something new and to experience things that I might have not had the chance to otherwise. After realizing that there didn't seem to be anything on the market that met my requirements I did what any nerd would do, I opened my laptop and started planning. \u003C\u002Fp\u003E\n\u003Ch2\u003E\n  \u003Ca name=\"requirements-features\" href=\"#requirements-features\"\u003E\n  \u003C\u002Fa\u003E\n  🤔 Requirements \u002F Features\n\u003C\u002Fh2\u003E\n\n\u003Col\u003E\n\u003Cli\u003EAllow users to select the prompts that they wanted to try out.\u003C\u002Fli\u003E\n\u003Cli\u003EAllow users to journal about their experiences after they have completed or attempted the prompt. \u003C\u002Fli\u003E\n\u003Cli\u003EAllow users to submit prompts that once reviewed, will display for other users. \u003C\u002Fli\u003E\n\u003Cli\u003EAllow users to see a notification to remember to complete the prompt and journal about their experiences afterwards.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2\u003E\n  \u003Ca name=\"%F0%9F%8F%97-project-architecture\" href=\"#%F0%9F%8F%97-project-architecture\"\u003E\n  \u003C\u002Fa\u003E\n  🏗 Project Architecture\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EThe overall architecture for this project is extremely simple. My react native application is talking to a NodeJS api through two different REST endpoints. One is to retrieve a certain amount of approved prompt from the database, and the other to submit a prompt for consideration. I won't be going in to too much detail about the backend I may create another article for that purpose.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--QaVpPJ1t--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fwnm2pm8ujyo5qmwpblvb.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--QaVpPJ1t--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fwnm2pm8ujyo5qmwpblvb.png\" alt=\"Project Architecture\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch2\u003E\n  \u003Ca name=\"technology\" href=\"#technology\"\u003E\n  \u003C\u002Fa\u003E\n  📱 Technology\n\u003C\u002Fh2\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"to-expo-or-to-not-expo-that-is-the-question\" href=\"#to-expo-or-to-not-expo-that-is-the-question\"\u003E\n  \u003C\u002Fa\u003E\n  To Expo Or To Not Expo, That Is the Question\n\u003C\u002Fh3\u003E\n\n\u003Col\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EBare Workflow\u003C\u002Fstrong\u003E - This workflows requires you to use Android Studio &amp; xCode. You will have to build and deploy your app by yourself. However you get \u003Cstrong\u003EFull Control\u003C\u002Fstrong\u003E of your entire project. \u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003EExpo\u003C\u002Fstrong\u003E \u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EExpo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript\u002FTypeScript codebase. - Expo\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EExpo allows you to very quickly get started with react native. You won't ever have to open up Xcode or Android Studio. Expo will also take care of building, and signing the App Bundles &amp; IPA files that you submit to Google Play and the Apple AppStore.  However, there is the trade off is not being able to use native modules or native code in your app. The cool thing with expo is that if you realize you need to write some native code or use some native module that there is not an expo package for, you can simply \u003Ccode\u003Eeject\u003C\u002Fcode\u003E from expo. Ejecting will allow you to then write or use any native code that you might need. \u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003EI ended up deciding to use Expo because I wanted to try and build this as fast as possible. \u003C\u002Fp\u003E\n\n\u003Cp\u003EI also used Typescript instead of Javascript for this project. I haven't worked with Typescript before and I thought it was the perfect time to get started with it. Now that the project is launched, I can say that I am a huge fan. I don't know if I will be able to go back to normal Javascript now. \u003C\u002Fp\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"npm-packages\" href=\"#npm-packages\"\u003E\n  \u003C\u002Fa\u003E\n  NPM Packages\n\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Ccode\u003Ereact-navigation\u003C\u002Fcode\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EUtilized this package to create different screens &amp; a bottom navigation bar\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ccode\u003Eredux\u003C\u002Fcode\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EFor a global data store\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ccode\u003Eredux-persist\u003C\u002Fcode\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EAllows me to save my global data store onto the users devices\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ccode\u003Ereact-native-deck-swiper\u003C\u002Fcode\u003E\n\n\u003Cul\u003E\n\u003Cli\u003ETinder like swiping component. I did face some struggles with this and had to make some changes to its source code, namely having the cards refresh after an API call was made. Unfortunately it does not seem that this project is being actively maintained.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ccode\u003Eexpo-notification\u003C\u002Fcode\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EAllows me to send scheduled local notifications on the users devices.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"react-native-app-structure\" href=\"#react-native-app-structure\"\u003E\n  \u003C\u002Fa\u003E\n  React Native App Structure\n\u003C\u002Fh3\u003E\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Edaily-discomfort\u002F\n├─ actions\u002F                     \u002F\u002F all redux actions that are dispatched\n├─ assets\u002F                      \u002F\u002F all images\n├─ components\u002F                  \u002F\u002F all components \n│  ├─ common\u002F\n│  ├─ homescreen\u002F\n│  ├─ submitscreen\u002F\n│  ├─ historyscreen\u002F\n├─ constants\u002F \n│  ├─ colors.ts                \u002F\u002F typescript object that contains all color hex codes\n│  ├─ types.ts                 \u002F\u002F redux types \n├─ navigation\u002F\n│  ├─ bottomtabbarnavigator.tsx    \u002F\u002F bottom tab bar for navigation \n├─ networking\u002F\n│  ├─ apiRepository.ts         \u002F\u002F methods to interact with server\n├─ notifications\u002F\n│  ├─ notificationManager.ts   \u002F\u002F Handles local notification logic\n├─ reducers\u002F                   \u002F\u002F basic redux reducer\n├─ screens\u002F\n│  ├─ history.tsx \n│  ├─ home.tsx\n│  ├─ submit.tsx \n├─ store\u002F                     \u002F\u002F Basic redux store\n├─ utils\u002F                     \u002F\u002F static helper functions\n├─ App.tsx                    \u002F\u002F main entry point\n├─ app.json                   \u002F\u002F expo configuration file\n├─ package.json\n├─ config.ts                  \u002F\u002F config values \n├─ types.ts                   \u002F\u002F typescript types\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"implementation-of-features\" href=\"#implementation-of-features\"\u003E\n  \u003C\u002Fa\u003E\n  🧑🏻‍💻 Implementation of Features\n\u003C\u002Fh2\u003E\n\n\u003Col\u003E\n\u003Cli\u003EAllow users to select the prompts that they wanted to try out.\n\n\u003Cul\u003E\n\u003Cli\u003EI wanted the users to make a selection on what prompt they wanted to try out instead of just giving them one. This makes the app more engaging while also taking into account the restrictions that a certain user might have with completing the challenge. The second point is also why I incorporated categories. Swiping appears to be the cool and fun thing today so it made sense for that to be the mechanism that allows users to select a prompt. I was able to use the NPM package \u003Ccode\u003Ereact-native-deck-swiper\u003C\u002Fcode\u003E to implement this rather quickly.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_Ru2CXJb--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fpqbrcstnllmn1cvq6d38.gif\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_Ru2CXJb--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fpqbrcstnllmn1cvq6d38.gif\" alt=\"Daily Discomfort Gif\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003EAllow users to journal about their experiences after they have completed the prompt. \n\n\u003Col\u003E\n\u003Cli\u003EThis allows users to look back on their previous experiences and be able to grow. While this feature was simple and didn't require a lot of work to implement, the value is immense. I simply saved an array of previous challenges into redux which then persists onto the device with redux-persist \u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EAllow users to submit prompts that once reviewed, will display for other users. \n\n\u003Col\u003E\n\u003Cli\u003EThis was an extremely important feature for this app. I wanted it to be a community driven app that allows the community to help each other. To implement this feature I created a new route in the in API that would accept \u003Ccode\u003EPOST\u003C\u002Fcode\u003E requests with the data for the new prompt. However, these prompts won't be automatically added into the prompts that the user is currently seeing. I have to go into the DB and approve this newly submitted prompts. This helps to ensure that only quality prompts are being shown to the user.\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EAllow users to see a notification to remind them to complete the prompt and journal about their experiences afterwards.\n\n\u003Col\u003E\n\u003Cli\u003EThis was a breeze to setup with \u003Ca href=\"https:\u002F\u002Fdocs.expo.dev\u002Fversions\u002Flatest\u002Fsdk\u002Fnotifications\u002F\"\u003EExpo's great documentation\u003C\u002Fa\u003E. You first have to check to make sure that the user has granted your app access to show notifications. Once you do have access you can simply fire off a local notification whenever you want. For my use case, I used scheduled notifications that allowed you to schedule a notification for a future date. I used this to remind users to complete the challenge that they have selected for that day.\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight tsx\"\u003E\u003Ccode\u003E    \u003Cspan class=\"k\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EscheduleNotification\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Easync\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Etitle\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kr\"\u003Estring\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Ebody\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kr\"\u003Estring\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"nx\"\u003ENotifications\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EscheduleNotificationAsync\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({\u003C\u002Fspan\u003E\n            \u003Cspan class=\"na\"\u003Econtent\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n                \u003Cspan class=\"na\"\u003Etitle\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Etitle\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n                \u003Cspan class=\"na\"\u003Ebody\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Ebody\u003C\u002Fspan\u003E\n            \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E\n            \u003Cspan class=\"na\"\u003Etrigger\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n                \u003Cspan class=\"na\"\u003Eseconds\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003ENOTIFICATION_REMINDER_SECONDS\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \n                \u003Cspan class=\"na\"\u003Erepeats\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Efalse\u003C\u002Fspan\u003E\n            \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n        \u003Cspan class=\"p\"\u003E})\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E};\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"shipping-the-final-product\" href=\"#shipping-the-final-product\"\u003E\n  \u003C\u002Fa\u003E\n  🚀 Shipping the Final Product\n\u003C\u002Fh2\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"backend\" href=\"#backend\"\u003E\n  \u003C\u002Fa\u003E\n  Backend\n\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EMongoDB Atlas for the database\u003C\u002Fli\u003E\n\u003Cli\u003EHeroku for running the server. Deploying to heroku is extremely simple. You can integrate with your Github repository and automatically deploy once a PR is merged into your main branch.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"react-native-app\" href=\"#react-native-app\"\u003E\n  \u003C\u002Fa\u003E\n  React Native App\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EThe thing that I love about Expo the most is how it handles the whole build process for you. You don't have to worry about signing your app as well, Expo takes care of that for you. It only takes two commands to build for both Android and iOS:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight shell\"\u003E\u003Ccode\u003Eexpo build:android\nexpo build:ios\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EAfter running these commands the Expo build servers take care of the rest of the work for you and will give you a link where you can download the App Bundle or the IPA file. Once you have these you are able to put them up on both the Google Play store and the Apple App store 🎉\u003C\u002Fp\u003E\n\n\u003Cp\u003EThanks for reading, I can be found on twitter here \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fjeff_codes\"\u003Ehttps:\u002F\u002Ftwitter.com\u002Fjeff_codes\u003C\u002Fa\u003E and my personal site is\u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Fwww.jeffedmondson.dev\u002F\"\u003Ehttps:\u002F\u002Fwww.jeffedmondson.dev\u002F\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n",body_markdown:"---\ntitle: How I built and Published My First React Native App (Daily Discomfort)\npublished: true\ndescription: \ntags: javascript, react, reactnative, typescript\ncover_image: https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F6ia8rr30xv3nkb0c868x.jpeg\n---\n## 🏃🏻‍♂️TLDR\n\n- React Native + Redux + NodeJs + MongoDB Atlas + Heroku = Daily Discomfort\n\n## 🤨 What is it?\n\nDaily Discomfort is an app that allows users to swipe on different prompts that are designed to get them out of their comfort zones. After the user swipes right on a prompt their mission is to go out into the real word to complete the challenge. Once completed, or failed, the user comes back to the app to journal about their experiences trying to complete the prompt.  It can be found on  the [Apple AppStore](https:\u002F\u002Fapps.apple.com\u002Fus\u002Fapp\u002Fdaily-discomfort\u002Fid1535108054) & [Google Play Store](https:\u002F\u002Fplay.google.com\u002Fstore\u002Fapps\u002Fdetails?id=com.jeffedmondson.dailydiscomfort).\n![Daily Discomfort Swiping Page](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fcm7f9iptp3zt9gfaveqk.png)\n\n## ☕️ Motivation\n\nThe whole reason that I created this app is because I recognize I am terrified to get out of my own comfort zone. I wanted something that would force me each and every day to try something new and to experience things that I might have not had the chance to otherwise. After realizing that there didn't seem to be anything on the market that met my requirements I did what any nerd would do, I opened my laptop and started planning. \n\n  \n\n## 🤔 Requirements \u002F Features\n\n1. Allow users to select the prompts that they wanted to try out.\n2. Allow users to journal about their experiences after they have completed or attempted the prompt. \n3. Allow users to submit prompts that once reviewed, will display for other users. \n4. Allow users to see a notification to remember to complete the prompt and journal about their experiences afterwards.\n\n## 🏗 Project Architecture\n\nThe overall architecture for this project is extremely simple. My react native application is talking to a NodeJS api through two different REST endpoints. One is to retrieve a certain amount of approved prompt from the database, and the other to submit a prompt for consideration. I won't be going in to too much detail about the backend I may create another article for that purpose.\n\n![Project Architecture](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fwnm2pm8ujyo5qmwpblvb.png)\n\n## 📱 Technology\n\n### To Expo Or To Not Expo, That Is the Question\n\n1. **Bare Workflow** - This workflows requires you to use Android Studio & xCode. You will have to build and deploy your app by yourself. However you get **Full Control** of your entire project. \n2. **Expo** \n\n    \u003E Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript\u002FTypeScript codebase. - Expo\n\n    Expo allows you to very quickly get started with react native. You won't ever have to open up Xcode or Android Studio. Expo will also take care of building, and signing the App Bundles & IPA files that you submit to Google Play and the Apple AppStore.  However, there is the trade off is not being able to use native modules or native code in your app. The cool thing with expo is that if you realize you need to write some native code or use some native module that there is not an expo package for, you can simply `eject` from expo. Ejecting will allow you to then write or use any native code that you might need. \n\nI ended up deciding to use Expo because I wanted to try and build this as fast as possible. \n\nI also used Typescript instead of Javascript for this project. I haven't worked with Typescript before and I thought it was the perfect time to get started with it. Now that the project is launched, I can say that I am a huge fan. I don't know if I will be able to go back to normal Javascript now. \n\n### NPM Packages\n\n- `react-navigation`\n    - Utilized this package to create different screens & a bottom navigation bar\n- `redux`\n    - For a global data store\n- `redux-persist`\n    - Allows me to save my global data store onto the users devices\n- `react-native-deck-swiper`\n    - Tinder like swiping component. I did face some struggles with this and had to make some changes to its source code, namely having the cards refresh after an API call was made. Unfortunately it does not seem that this project is being actively maintained.\n- `expo-notification`\n    - Allows me to send scheduled local notifications on the users devices.\n\n### React Native App Structure\n\n```\ndaily-discomfort\u002F\n├─ actions\u002F                     \u002F\u002F all redux actions that are dispatched\n├─ assets\u002F                      \u002F\u002F all images\n├─ components\u002F                  \u002F\u002F all components \n│  ├─ common\u002F\n│  ├─ homescreen\u002F\n│  ├─ submitscreen\u002F\n│  ├─ historyscreen\u002F\n├─ constants\u002F \n│  ├─ colors.ts                \u002F\u002F typescript object that contains all color hex codes\n│  ├─ types.ts                 \u002F\u002F redux types \n├─ navigation\u002F\n│  ├─ bottomtabbarnavigator.tsx    \u002F\u002F bottom tab bar for navigation \n├─ networking\u002F\n│  ├─ apiRepository.ts         \u002F\u002F methods to interact with server\n├─ notifications\u002F\n│  ├─ notificationManager.ts   \u002F\u002F Handles local notification logic\n├─ reducers\u002F                   \u002F\u002F basic redux reducer\n├─ screens\u002F\n│  ├─ history.tsx \n│  ├─ home.tsx\n│  ├─ submit.tsx \n├─ store\u002F                     \u002F\u002F Basic redux store\n├─ utils\u002F                     \u002F\u002F static helper functions\n├─ App.tsx                    \u002F\u002F main entry point\n├─ app.json                   \u002F\u002F expo configuration file\n├─ package.json\n├─ config.ts                  \u002F\u002F config values \n├─ types.ts                   \u002F\u002F typescript types\n```\n\n## 🧑🏻‍💻 Implementation of Features\n\n1. Allow users to select the prompts that they wanted to try out.\n    - I wanted the users to make a selection on what prompt they wanted to try out instead of just giving them one. This makes the app more engaging while also taking into account the restrictions that a certain user might have with completing the challenge. The second point is also why I incorporated categories. Swiping appears to be the cool and fun thing today so it made sense for that to be the mechanism that allows users to select a prompt. I was able to use the NPM package `react-native-deck-swiper` to implement this rather quickly.\n\n![Daily Discomfort Gif](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fpqbrcstnllmn1cvq6d38.gif)\n\n2. Allow users to journal about their experiences after they have completed the prompt. \n    1. This allows users to look back on their previous experiences and be able to grow. While this feature was simple and didn't require a lot of work to implement, the value is immense. I simply saved an array of previous challenges into redux which then persists onto the device with redux-persist \n3. Allow users to submit prompts that once reviewed, will display for other users. \n    1. This was an extremely important feature for this app. I wanted it to be a community driven app that allows the community to help each other. To implement this feature I created a new route in the in API that would accept `POST` requests with the data for the new prompt. However, these prompts won't be automatically added into the prompts that the user is currently seeing. I have to go into the DB and approve this newly submitted prompts. This helps to ensure that only quality prompts are being shown to the user.  \n4. Allow users to see a notification to remind them to complete the prompt and journal about their experiences afterwards.\n    1. This was a breeze to setup with [Expo's great documentation](https:\u002F\u002Fdocs.expo.dev\u002Fversions\u002Flatest\u002Fsdk\u002Fnotifications\u002F). You first have to check to make sure that the user has granted your app access to show notifications. Once you do have access you can simply fire off a local notification whenever you want. For my use case, I used scheduled notifications that allowed you to schedule a notification for a future date. I used this to remind users to complete the challenge that they have selected for that day. \n\n```tsx\n    export const scheduleNotification = async (title: string, body: string) =\u003E {\n        Notifications.scheduleNotificationAsync({\n            content: {\n                title: title,\n                body: body\n            },\n            trigger: {\n                seconds: NOTIFICATION_REMINDER_SECONDS, \n                repeats: false\n            }\n        })\n    };\n```\n\n## 🚀 Shipping the Final Product\n\n### Backend\n\n- MongoDB Atlas for the database\n- Heroku for running the server. Deploying to heroku is extremely simple. You can integrate with your Github repository and automatically deploy once a PR is merged into your main branch.\n\n### React Native App\n\nThe thing that I love about Expo the most is how it handles the whole build process for you. You don't have to worry about signing your app as well, Expo takes care of that for you. It only takes two commands to build for both Android and iOS:\n\n```bash\nexpo build:android\nexpo build:ios\n```\n\nAfter running these commands the Expo build servers take care of the rest of the work for you and will give you a link where you can download the App Bundle or the IPA file. Once you have these you are able to put them up on both the Google Play store and the Apple App store 🎉\n\nThanks for reading, I can be found on twitter here https:\u002F\u002Ftwitter.com\u002Fjeff_codes and my personal site is\nhttps:\u002F\u002Fwww.jeffedmondson.dev\u002F",user:{name:"Jeff Edmondson",username:e,twitter_username:e,github_username:"edmondso006",website_url:"https:\u002F\u002Fwww.jeffedmondson.dev\u002F",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--C1kjB4wW--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F100176\u002Febd4ed13-88d8-4ad4-b22d-64a517a3310c.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Csm5seRt--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F100176\u002Febd4ed13-88d8-4ad4-b22d-64a517a3310c.png"}}},serverRendered:true,routePath:"\u002Farticles\u002Fjeff_codes\u002F792972",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"https:\u002F\u002Fdev.to\u002Fjeff_codes\u002Fhow-i-built-and-published-my-first-react-native-app-daily-discomfort-311d",271,"2021-08-15T22:35:06Z","jeff_codes"));