window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:692562,title:"#30DaysofAppwrite : OAuth Providers",description:"Intro   Appwrite is an open-source, self-hosted Backend-as-a-Service that makes app developm...",readable_publish_date:"May 10",slug:"30daysofappwrite-oauth-providers-3jf6",path:"\u002Fappwrite\u002F30daysofappwrite-oauth-providers-3jf6",url:c,comments_count:0,public_reactions_count:d,collection_id:a,published_timestamp:b,positive_reactions_count:d,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--GLVA_Bnv--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fvamtyve23aafhmfixwhy.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--izRGXAVc--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fvamtyve23aafhmfixwhy.png",canonical_url:c,created_at:"2021-05-09T07:21:16Z",edited_at:a,crossposted_at:a,published_at:b,last_comment_at:b,reading_time_minutes:3,tag_list:"30daysofappwrite, webdev, flutter, javascript",tags:["30daysofappwrite","webdev","flutter","javascript"],body_html:"\u003Ch2\u003E\n  \u003Ca name=\"intro\" href=\"#intro\"\u003E\n  \u003C\u002Fa\u003E\n  Intro\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EAppwrite is an open-source, self-hosted Backend-as-a-Service that makes app development \u003Cstrong\u003Eeasier\u003C\u002Fstrong\u003E with a suite of SDKs and APIs to accelerate app development. \u003Ca href=\"http:\u002F\u002F30days.appwrite.io\u002F\"\u003E#30DaysOfAppwrite\u003C\u002Fa\u003E is a month long event focussed at giving developers a walkthrough of all of Appwrite's features, starting from the basics to more advanced features like cloud functions! Alongside we will also be building a fully featured Medium Clone to demonstrate how these concepts can be applied when building a real world app. We also have some exciting prizes for developers who follow along with us!\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"oauth-providers\" href=\"#oauth-providers\"\u003E\n  \u003C\u002Fa\u003E\n  OAuth Providers\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EWith Appwrite, it's super easy to setup many OAuth2 providers to provide your users to authenticate with their social accounts. Appwrite supports tons of OAuth2 providers including \u003Cstrong\u003EGoogle\u003C\u002Fstrong\u003E, \u003Cstrong\u003EFacebook\u003C\u002Fstrong\u003E, \u003Cstrong\u003ETwitter\u003C\u002Fstrong\u003E, \u003Cstrong\u003EGitHub\u003C\u002Fstrong\u003E and many more. The best part: most of the OAuth2 providers came as pull requests from the open-source community! ❤️\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn today's session we will look into how we can set up and use Google Sign In with our Appwrite-powered application.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"setting-up-google-oauth2-settings\" href=\"#setting-up-google-oauth2-settings\"\u003E\n  \u003C\u002Fa\u003E\n  Setting up Google OAuth2 Settings\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EIn the Appwrite console, visit the \u003Ccode\u003EUsers-&gt;OAuth2 Providers\u003C\u002Fcode\u003E page. There, find Google from the list and turn the switch on. In order to complete this you will need \u003Ccode\u003EApp ID\u003C\u002Fcode\u003E and \u003Ccode\u003EApp Secret\u003C\u002Fcode\u003E which you can easily setup from Google API Console. Check out \u003Ca href=\"https:\u002F\u002Fsupport.google.com\u002Fgoogleapi\u002Fanswer\u002F6158849\"\u003Etheir official documentation\u003C\u002Fa\u003E for more details.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--DLqhw861--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F2if2943xck7vtntuay8g.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--DLqhw861--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F2if2943xck7vtntuay8g.png\" alt=\"OAuth2 Setup Dialog\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EOnce you get and fill the Google \u003Ccode\u003EApp ID\u003C\u002Fcode\u003E and the \u003Ccode\u003EApp Secret\u003C\u002Fcode\u003E, you need to provide the callback URL shown in the dialog to the Google OAuth2's Authorized redirect URIs.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--OlIWCUPq--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fr10wg01azw35qcno7iwn.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--OlIWCUPq--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fr10wg01azw35qcno7iwn.png\" alt=\"Google oAuth2 Authorized redirect URIs\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"logging-in-using-oauth2-provider\" href=\"#logging-in-using-oauth2-provider\"\u003E\n  \u003C\u002Fa\u003E\n  Logging In using OAuth2 Provider\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ENow that we have set up OAuth2 login, we can make a request to log in our user. First, in \u003Ccode\u003Esrc\u002Froutes\u002FLogin.svelte\u003C\u002Fcode\u003E let's add a \u003Ccode\u003ELogin with Google\u003C\u002Fcode\u003E button.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight html\"\u003E\u003Ccode\u003E\u003Cspan class=\"nt\"\u003E&lt;button\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eon:click\u003C\u002Fspan\u003E\u003Cspan class=\"err\"\u003E|\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003EpreventDefault=\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E{loginWithGoogle}\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003E&gt;\u003C\u002Fspan\u003ELogin With Google\u003Cspan class=\"nt\"\u003E&lt;\u002Fbutton&gt;\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ENow we need to add a \u003Ccode\u003EloginWithGoogle\u003C\u002Fcode\u003E method to the our Login component's script:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EloginWithGoogle\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Easync\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Etry\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n      \u003Cspan class=\"k\"\u003Eawait\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EloginWithGoogle\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E();\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Ecatch\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eerror\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n      \u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eerror\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emessage\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EFinally, in \u003Ccode\u003Esrc\u002Fappwrite.js\u003C\u002Fcode\u003E we need to add \u003Ccode\u003EloginWithGoogle\u003C\u002Fcode\u003E:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"c1\"\u003E\u002F\u002F....existing code\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003EloginWithGoogle\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Easync\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"k\"\u003Etry\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n            \u003Cspan class=\"k\"\u003Eawait\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Esdk\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eaccount\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EcreateOAuth2Session\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Egoogle\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Ehttp:\u002F\u002Flocalhost:3000\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Ehttp:\u002F\u002Flocalhost:3000\u002F#\u002Flogin\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n        \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Ecatch\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eerror\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n            \u003Cspan class=\"k\"\u003Ethrow\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eerror\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EHere, we are calling the \u003Ccode\u003Esdk.account.createOAuth2Session\u003C\u002Fcode\u003E and we are passing in few parameters. The first parameter is the \u003Cstrong\u003EProvider\u003C\u002Fstrong\u003E. For us, it's \u003Ccode\u003Egoogle\u003C\u002Fcode\u003E. The second parameter is the URL to redirect to if the login is successful. The third parameter is the URL to redirect to if the login fails. Here we are providing localhost, for we are testing the app locally. Once we host our app online, we need to provide the updated URLs for successful and failed logins.\u003C\u002Fp\u003E\n\n\u003Cp\u003ENow, if you tap Login with Google, you should be taken to the Google OAuth Consent screen. Once you select your valid Google account, you should be able to login and are redirected back to \u003Ccode\u003Ehttp:\u002F\u002Flocalhost:3000\u003C\u002Fcode\u003E. You can check our app's navigation bar to see if the new account name has loaded successfully. \u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"credits\" href=\"#credits\"\u003E\n  \u003C\u002Fa\u003E\n  Credits\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EWe hope you liked this write up. You can follow \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fsearch?q=%2330daysofappwrite\"\u003E#30DaysOfAppwrite\u003C\u002Fa\u003E on Social Media to keep up with all of our posts. The complete event timeline can be found \u003Ca href=\"http:\u002F\u002F30days.appwrite.io\"\u003Ehere\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdiscord\"\u003EDiscord Server\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ca href=\"https:\u002F\u002Fappwrite.io\u002F\"\u003EAppwrite Homepage\u003C\u002Fa\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fappwrite\"\u003EAppwrite's Github\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EFeel free to reach out to us on Discord if you would like to learn more about Appwrite, Aliens or Unicorns 🦄. Stay tuned for tomorrow's article! Until then 👋\u003C\u002Fp\u003E\n\n",body_markdown:"## Intro\nAppwrite is an open-source, self-hosted Backend-as-a-Service that makes app development **easier** with a suite of SDKs and APIs to accelerate app development. [#30DaysOfAppwrite](http:\u002F\u002F30days.appwrite.io\u002F) is a month long event focussed at giving developers a walkthrough of all of Appwrite's features, starting from the basics to more advanced features like cloud functions! Alongside we will also be building a fully featured Medium Clone to demonstrate how these concepts can be applied when building a real world app. We also have some exciting prizes for developers who follow along with us!\n\n## OAuth Providers\nWith Appwrite, it's super easy to setup many OAuth2 providers to provide your users to authenticate with their social accounts. Appwrite supports tons of OAuth2 providers including **Google**, **Facebook**, **Twitter**, **GitHub** and many more. The best part: most of the OAuth2 providers came as pull requests from the open-source community! ❤️\n\nIn today's session we will look into how we can set up and use Google Sign In with our Appwrite-powered application.\n\n## Setting up Google OAuth2 Settings\nIn the Appwrite console, visit the `Users-\u003EOAuth2 Providers` page. There, find Google from the list and turn the switch on. In order to complete this you will need `App ID` and `App Secret` which you can easily setup from Google API Console. Check out [their official documentation](https:\u002F\u002Fsupport.google.com\u002Fgoogleapi\u002Fanswer\u002F6158849) for more details.\n\n![OAuth2 Setup Dialog](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F2if2943xck7vtntuay8g.png)\n \n\nOnce you get and fill the Google `App ID` and the `App Secret`, you need to provide the callback URL shown in the dialog to the Google OAuth2's Authorized redirect URIs.\n\n![Google oAuth2 Authorized redirect URIs](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fr10wg01azw35qcno7iwn.png)\n \n\n## Logging In using OAuth2 Provider\nNow that we have set up OAuth2 login, we can make a request to log in our user. First, in `src\u002Froutes\u002FLogin.svelte` let's add a `Login with Google` button.\n\n```html\n\u003Cbutton on:click|preventDefault={loginWithGoogle}\u003ELogin With Google\u003C\u002Fbutton\u003E\n```\nNow we need to add a `loginWithGoogle` method to the our Login component's script:\n```js\nconst loginWithGoogle = async () =\u003E {\n    try {\n      await api.loginWithGoogle();\n    } catch(error) {\n      console.log(error.message);\n    }\n}\n```\n\nFinally, in `src\u002Fappwrite.js` we need to add `loginWithGoogle`:\n```js\nexport const api = {\n    \u002F\u002F....existing code\n    loginWithGoogle: async () =\u003E {\n        try {\n            await sdk.account.createOAuth2Session('google', 'http:\u002F\u002Flocalhost:3000', 'http:\u002F\u002Flocalhost:3000\u002F#\u002Flogin');\n        } catch (error) {\n            throw error;\n        }\n    },\n}\n```\nHere, we are calling the `sdk.account.createOAuth2Session` and we are passing in few parameters. The first parameter is the **Provider**. For us, it's `google`. The second parameter is the URL to redirect to if the login is successful. The third parameter is the URL to redirect to if the login fails. Here we are providing localhost, for we are testing the app locally. Once we host our app online, we need to provide the updated URLs for successful and failed logins.\n\nNow, if you tap Login with Google, you should be taken to the Google OAuth Consent screen. Once you select your valid Google account, you should be able to login and are redirected back to `http:\u002F\u002Flocalhost:3000`. You can check our app's navigation bar to see if the new account name has loaded successfully. \n\n## Credits \nWe hope you liked this write up. You can follow [#30DaysOfAppwrite](https:\u002F\u002Ftwitter.com\u002Fsearch?q=%2330daysofappwrite) on Social Media to keep up with all of our posts. The complete event timeline can be found [here](http:\u002F\u002F30days.appwrite.io)\n\n* [Discord Server](https:\u002F\u002Fappwrite.io\u002Fdiscord)\n* [Appwrite Homepage](https:\u002F\u002Fappwrite.io\u002F)  \n* [Appwrite's Github](https:\u002F\u002Fgithub.com\u002Fappwrite)\n\nFeel free to reach out to us on Discord if you would like to learn more about Appwrite, Aliens or Unicorns 🦄. Stay tuned for tomorrow's article! Until then 👋",user:{name:"Damodar Lohani",username:"lohanidamodar",twitter_username:"LohaniDamodar",github_username:a,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Y2Vg3V3b--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F551623\u002Fd6834701-4563-4984-8f1d-7c6735acd3b6.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--WbIqGPLg--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F551623\u002Fd6834701-4563-4984-8f1d-7c6735acd3b6.jpg"},organization:{name:"Appwrite",username:e,slug:e,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--MwfZh3wG--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Forganization\u002Fprofile_image\u002F2225\u002Feb541cf9-84f4-4101-987c-c219cd4b34fc.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--5xS_iZdD--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Forganization\u002Fprofile_image\u002F2225\u002Feb541cf9-84f4-4101-987c-c219cd4b34fc.png"}}},serverRendered:true,routePath:"\u002Farticles\u002Flohanidamodar\u002F692562",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2021-05-10T13:22:34Z","https:\u002F\u002Fdev.to\u002Fappwrite\u002F30daysofappwrite-oauth-providers-3jf6",16,"appwrite"));