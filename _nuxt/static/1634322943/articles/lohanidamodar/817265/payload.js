__NUXT_JSONP__("/articles/lohanidamodar/817265", (function(a,b,c,d,e,f,g){c.type_of="article";c.id=817265;c.title="Magic URL authentication with Flutter + Appwrite ";c.description="Appwrite 0.10 introduced Magic URL a password-less authentication method. This allows developers to...";c.readable_publish_date="Sep 8";c.slug="magic-url-authentication-with-flutter-appwrite-349g";c.path="\u002Fappwrite\u002Fmagic-url-authentication-with-flutter-appwrite-349g";c.url=d;c.comments_count=0;c.public_reactions_count=e;c.collection_id=a;c.published_timestamp=b;c.positive_reactions_count=e;c.cover_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--NPr3KW14--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F9p15djbgfz4swnj7sowf.jpg";c.social_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--qzBadU_a--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F9p15djbgfz4swnj7sowf.jpg";c.canonical_url=d;c.created_at="2021-09-08T08:11:28Z";c.edited_at=a;c.crossposted_at=a;c.published_at=b;c.last_comment_at=b;c.reading_time_minutes=4;c.tag_list="flutter, opensource, news, serverless";c.tags=["flutter","opensource",f,"serverless"];c.body_html="\u003Cp\u003EAppwrite 0.10 introduced \u003Cstrong\u003EMagic URL\u003C\u002Fstrong\u003E a password-less authentication method. This allows developers to authenticate their users using an email and a URL sent via an E-Mail.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--k_2Mf60p--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fnxh1ut0173dso0r3kwh4.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--k_2Mf60p--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fnxh1ut0173dso0r3kwh4.png\" alt=\"Frame 30 (2)\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"setup\" href=\"#setup\"\u003E\n  \u003C\u002Fa\u003E\n  ⚙️ Setup\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EIn this tutorial we will learn how we can use Magic URL Authentication in our Flutter applications using Appwrite's \u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fgetting-started-for-flutter\"\u003EFlutter SDK\u003C\u002Fa\u003E. The same can be done with our \u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fgetting-started-for-web\"\u003EWeb SDK\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fgetting-started-for-android\"\u003EAndroid SDK\u003C\u002Fa\u003E. As this feature needs to send an email, you must properly setup SMTP service in Appwrite. If you have not already, you can follow \u003Ca href=\"https:\u002F\u002Fdev.to\u002Fappwrite\u002F30daysofappwrite-getting-started-with-smtp-1e2e\"\u003Ethis guide to setup SMTP\u003C\u002Fa\u003E in your Appwrite server.\u003C\u002Fp\u003E\n\n\u003Cp\u003EFirst, add the Flutter SDK to our Flutter project. From the terminal, in your project's directory enter the following command to add the SDK\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight shell\"\u003E\u003Ccode\u003Eflutter pub add appwrite\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ENext, import and initialize the SDK with your project ID which can be found in your project settings page in Appwrite's console:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight dart\"\u003E\u003Ccode\u003E\u003Cspan class=\"kn\"\u003Eimport\u003C\u002Fspan\u003E \u003Cspan class=\"s\"\u003E'package:appwrite\u002Fappwrite.dart'\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E;\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"kd\"\u003Efinal\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eclient\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Enew\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EClient\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E();\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"n\"\u003Eclient\u003C\u002Fspan\u003E\n    \u003Cspan class=\"o\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003EsetEndpoint\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E'http:\u002F\u002Flocalhost\u002Fv1'\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"c1\"\u003E\u002F\u002F Your Appwrite Endpoint\u003C\u002Fspan\u003E\n    \u003Cspan class=\"o\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003EsetProject\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E'455x34dfkj'\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"c1\"\u003E\u002F\u002F Your Appwrite Project ID\u003C\u002Fspan\u003E\n\u003Cspan class=\"o\"\u003E;\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EFinally, update the \u003Cstrong\u003EAndroidManifest.xml\u003C\u002Fstrong\u003E file if you are on Android to handle the redirection after handling the login with magic URL as follows:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight xml\"\u003E\u003Ccode\u003E\u003Cspan class=\"nt\"\u003E&lt;manifest&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nt\"\u003E&lt;application&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"c\"\u003E&lt;!-- ... --&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nt\"\u003E&lt;activity\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eandroid:name=\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E\"com.linusu.flutter_web_auth.CallbackActivity\"\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003E&gt;\u003C\u002Fspan\u003E\n      \u003Cspan class=\"nt\"\u003E&lt;intent-filter\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eandroid:label=\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E\"flutter_web_auth\"\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003E&gt;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"nt\"\u003E&lt;action\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eandroid:name=\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E\"android.intent.action.VIEW\"\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003E\u002F&gt;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"nt\"\u003E&lt;category\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eandroid:name=\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E\"android.intent.category.DEFAULT\"\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003E\u002F&gt;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"nt\"\u003E&lt;category\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eandroid:name=\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E\"android.intent.category.BROWSABLE\"\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003E\u002F&gt;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"nt\"\u003E&lt;data\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eandroid:scheme=\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E\"appwrite-callback-[PROJECT_ID]\"\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003E\u002F&gt;\u003C\u002Fspan\u003E\n      \u003Cspan class=\"nt\"\u003E&lt;\u002Fintent-filter&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nt\"\u003E&lt;\u002Factivity&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"c\"\u003E&lt;!-- ... --&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nt\"\u003E&lt;\u002Fapplication&gt;\u003C\u002Fspan\u003E\n\u003Cspan class=\"nt\"\u003E&lt;\u002Fmanifest&gt;\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch2\u003E\n  \u003Ca name=\"create-a-magic-url\" href=\"#create-a-magic-url\"\u003E\n  \u003C\u002Fa\u003E\n  🎩 Create a Magic URL\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EOnce your SDK is setup, access the \u003Cstrong\u003EAccount service\u003C\u002Fstrong\u003E and call the \u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fclient\u002Faccount?sdk=web#accountCreateMagicURLSession\"\u003E\u003Ccode\u003EcreateMagicURLSession()\u003C\u002Fcode\u003E\u003C\u002Fa\u003E method. This method accepts an e-mail address and a redirect URL as arguments. The redirect URL is optional, but should be provided if you want to handle the completion of magic URL session and redirection yourself.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"c1\"\u003E\u002F\u002F Initiate the Magic URL login\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Efinal\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eaccount\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EAccount\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eclient\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Etry\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Efinal\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eres\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eawait\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eaccount\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EcreateMagicURLSession\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003Eemail\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Ename@example.com\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Eprint\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eres\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Edata\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eon\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EAppwriteException\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Ecatch\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ee\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Eprint\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ee\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emessage\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EIf the \u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fclient\u002Faccount?sdk=web#accountCreateMagicURLSession\"\u003E\u003Ccode\u003EcreateMagicURLSession()\u003C\u002Fcode\u003E\u003C\u002Fa\u003E method completes without error, the request sends the user an email with a URL containing a secret key for the next step. If the URL is not provided, the URL of your Appwrite instance is used where there is an inbuilt function to handle the \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fappwrite\u002Fappwrite\u002Fblob\u002Fmaster\u002Fapp\u002Fviews\u002Fhome\u002Fauth\u002FmagicURL.phtml\"\u003Ecompletion of magic URL session\u003C\u002Fa\u003E. When the user clicks the link, they are redirected back to the URL provided with the secret \u003Ccode\u003Ekey\u003C\u002Fcode\u003E and \u003Ccode\u003EuserId\u003C\u002Fcode\u003E values attached to the URL query string. This link is valid for 1 hour. If the e-mail passed did not belong to any existing user - this request will also create a user for the passed e-mail address.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf you do not provide a redirect URL, your Appwrite instance will automatically handle the completion and redirection and you should be redirected back to your mobile App. For this, make sure you are able to access the Appwrite instance from your mobile. It's best to host it somewhere with a proper domain. If not use services like \u003Ca href=\"https:\u002F\u002Fngrok.com\u002F\"\u003Engrok\u003C\u002Fa\u003E to tunnel your localhost to a temporary domain.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"login-with-a-magic-url\" href=\"#login-with-a-magic-url\"\u003E\n  \u003C\u002Fa\u003E\n  🔐 Login with a Magic URL\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EIf you do want to handle the completion of magic URL session and redirection yourself, you need to build a web app that can handle the process. And you need to pass the URL of this web app in the URL parameter while calling \u003Ccode\u003EcreateMagicURLSession\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EFor that, use the \u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fclient\u002Faccount?sdk=web#accountUpdateMagicURLSession\"\u003E\u003Ccode\u003EupdateMagicURLSession()\u003C\u002Fcode\u003E\u003C\u002Fa\u003E method and call it with the secret and userId values from the URL's query string.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EPlease note that in order to avoid a \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FOWASP\u002FCheatSheetSeries\u002Fblob\u002Fmaster\u002Fcheatsheets\u002FUnvalidated_Redirects_and_Forwards_Cheat_Sheet.md\"\u003ERedirect Attack\u003C\u002Fa\u003E the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EurlParams\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Enew\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EURLSearchParams\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nb\"\u003Ewindow\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elocation\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Esearch\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EuserId\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EurlParams\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Eget\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003EuserId\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Esecret\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EurlParams\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Eget\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Esecret\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Epromise\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eappwrite\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eaccount\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EupdateMagicURLSession\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EuserId\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Esecret\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nx\"\u003Epromise\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ethen\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Efunction\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eresponse\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eresponse\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E \u003Cspan class=\"c1\"\u003E\u002F\u002F Success\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E \u003Cspan class=\"kd\"\u003Efunction\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eerror\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eerror\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E \u003Cspan class=\"c1\"\u003E\u002F\u002F Failure\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EIf the \u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fclient\u002Faccount?sdk=web#accountUpdateMagicURLSession\"\u003E\u003Ccode\u003EupdateMagicURLSession()\u003C\u002Fcode\u003E\u003C\u002Fa\u003E succeeded, the user is now logged in. \u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003ENote that once a link is used, it cannot be used again.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"conclusion\" href=\"#conclusion\"\u003E\n  \u003C\u002Fa\u003E\n  🏁 Conclusion\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EWe hope you will enjoy this new Appwrite feature and hope this will be useful for lots of applications. If you need help or encounter any difficulties setting up Magic URL Login with Appwrite, please \u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdiscord\"\u003Ejoin our Discord\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"references\" href=\"#references\"\u003E\n  \u003C\u002Fa\u003E\n  🔖 References\n\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdiscord\"\u003EAppwrite Discord\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fgetting-started-for-flutter\"\u003EGetting Started with Flutter\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdocs\"\u003EAppwrite Documentation\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n";c.body_markdown="Appwrite 0.10 introduced **Magic URL** a password-less authentication method. This allows developers to authenticate their users using an email and a URL sent via an E-Mail.\n\n![Frame 30 (2)](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fnxh1ut0173dso0r3kwh4.png)\n \n\n## ⚙️ Setup\nIn this tutorial we will learn how we can use Magic URL Authentication in our Flutter applications using Appwrite's [Flutter SDK](https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fgetting-started-for-flutter). The same can be done with our [Web SDK](https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fgetting-started-for-web) and [Android SDK](https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fgetting-started-for-android). As this feature needs to send an email, you must properly setup SMTP service in Appwrite. If you have not already, you can follow [this guide to setup SMTP](https:\u002F\u002Fdev.to\u002Fappwrite\u002F30daysofappwrite-getting-started-with-smtp-1e2e) in your Appwrite server.\n\nFirst, add the Flutter SDK to our Flutter project. From the terminal, in your project's directory enter the following command to add the SDK\n\n```bash\nflutter pub add appwrite\n```\nNext, import and initialize the SDK with your project ID which can be found in your project settings page in Appwrite's console:\n\n```dart\nimport 'package:appwrite\u002Fappwrite.dart';\n\nfinal client = new Client();\n\nclient\n    .setEndpoint('http:\u002F\u002Flocalhost\u002Fv1') \u002F\u002F Your Appwrite Endpoint\n    .setProject('455x34dfkj') \u002F\u002F Your Appwrite Project ID\n;\n```\n\nFinally, update the **AndroidManifest.xml** file if you are on Android to handle the redirection after handling the login with magic URL as follows:\n\n```xml\n\u003Cmanifest\u003E\n  \u003Capplication\u003E\n    \u003C!-- ... --\u003E\n    \u003Cactivity android:name=\"com.linusu.flutter_web_auth.CallbackActivity\" \u003E\n      \u003Cintent-filter android:label=\"flutter_web_auth\"\u003E\n        \u003Caction android:name=\"android.intent.action.VIEW\" \u002F\u003E\n        \u003Ccategory android:name=\"android.intent.category.DEFAULT\" \u002F\u003E\n        \u003Ccategory android:name=\"android.intent.category.BROWSABLE\" \u002F\u003E\n        \u003Cdata android:scheme=\"appwrite-callback-[PROJECT_ID]\" \u002F\u003E\n      \u003C\u002Fintent-filter\u003E\n    \u003C\u002Factivity\u003E\n    \u003C!-- ... --\u003E\n  \u003C\u002Fapplication\u003E\n\u003C\u002Fmanifest\u003E\n```\n\n## 🎩 Create a Magic URL\n\nOnce your SDK is setup, access the **Account service** and call the [`createMagicURLSession()`](https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fclient\u002Faccount?sdk=web#accountCreateMagicURLSession) method. This method accepts an e-mail address and a redirect URL as arguments. The redirect URL is optional, but should be provided if you want to handle the completion of magic URL session and redirection yourself.\n\n```js\n\u002F\u002F Initiate the Magic URL login\nfinal account = Account(client);\ntry {\n    final res = await account.createMagicURLSession(email: 'name@example.com');\n    print(res.data);\n} on AppwriteException catch(e) {\n    print(e.message);\n}\n```\n\nIf the [`createMagicURLSession()`](https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fclient\u002Faccount?sdk=web#accountCreateMagicURLSession) method completes without error, the request sends the user an email with a URL containing a secret key for the next step. If the URL is not provided, the URL of your Appwrite instance is used where there is an inbuilt function to handle the [completion of magic URL session](https:\u002F\u002Fgithub.com\u002Fappwrite\u002Fappwrite\u002Fblob\u002Fmaster\u002Fapp\u002Fviews\u002Fhome\u002Fauth\u002FmagicURL.phtml). When the user clicks the link, they are redirected back to the URL provided with the secret `key` and `userId` values attached to the URL query string. This link is valid for 1 hour. If the e-mail passed did not belong to any existing user - this request will also create a user for the passed e-mail address.\n\nIf you do not provide a redirect URL, your Appwrite instance will automatically handle the completion and redirection and you should be redirected back to your mobile App. For this, make sure you are able to access the Appwrite instance from your mobile. It's best to host it somewhere with a proper domain. If not use services like [ngrok](https:\u002F\u002Fngrok.com\u002F) to tunnel your localhost to a temporary domain.\n\n## 🔐 Login with a Magic URL\n\nIf you do want to handle the completion of magic URL session and redirection yourself, you need to build a web app that can handle the process. And you need to pass the URL of this web app in the URL parameter while calling `createMagicURLSession`.\n\nFor that, use the [`updateMagicURLSession()`](https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fclient\u002Faccount?sdk=web#accountUpdateMagicURLSession) method and call it with the secret and userId values from the URL's query string.\n\n\u003E Please note that in order to avoid a [Redirect Attack](https:\u002F\u002Fgithub.com\u002FOWASP\u002FCheatSheetSeries\u002Fblob\u002Fmaster\u002Fcheatsheets\u002FUnvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.\n\n\n```js\nconst urlParams = new URLSearchParams(window.location.search);\nconst userId = urlParams.get('userId');\nconst secret = urlParams.get('secret');\n\nlet promise = appwrite.account.updateMagicURLSession(userId, secret);\n\npromise.then(function (response) {\n    console.log(response); \u002F\u002F Success\n}, function (error) {\n    console.log(error); \u002F\u002F Failure\n});\n```\n\nIf the [`updateMagicURLSession()`](https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fclient\u002Faccount?sdk=web#accountUpdateMagicURLSession) succeeded, the user is now logged in. \n\n\u003E Note that once a link is used, it cannot be used again.\n\n## 🏁 Conclusion\n\nWe hope you will enjoy this new Appwrite feature and hope this will be useful for lots of applications. If you need help or encounter any difficulties setting up Magic URL Login with Appwrite, please [join our Discord](https:\u002F\u002Fappwrite.io\u002Fdiscord).\n\n### 🔖 References\n\n- [Appwrite Discord](https:\u002F\u002Fappwrite.io\u002Fdiscord)\n- [Getting Started with Flutter](https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fgetting-started-for-flutter)\n- [Appwrite Documentation](https:\u002F\u002Fappwrite.io\u002Fdocs)";c.user={name:"Damodar Lohani",username:"lohanidamodar",twitter_username:"LohaniDamodar",github_username:a,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Y2Vg3V3b--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F551623\u002Fd6834701-4563-4984-8f1d-7c6735acd3b6.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--WbIqGPLg--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F551623\u002Fd6834701-4563-4984-8f1d-7c6735acd3b6.jpg"};c.organization={name:"Appwrite",username:g,slug:g,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--MwfZh3wG--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Forganization\u002Fprofile_image\u002F2225\u002Feb541cf9-84f4-4101-987c-c219cd4b34fc.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--5xS_iZdD--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Forganization\u002Fprofile_image\u002F2225\u002Feb541cf9-84f4-4101-987c-c219cd4b34fc.png"};c.flare_tag={name:f,bg_color_hex:"#111111",text_color_hex:"#fff9ac"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}(null,"2021-09-08T09:40:27Z",{},"https:\u002F\u002Fdev.to\u002Fappwrite\u002Fmagic-url-authentication-with-flutter-appwrite-349g",97,"news","appwrite")));