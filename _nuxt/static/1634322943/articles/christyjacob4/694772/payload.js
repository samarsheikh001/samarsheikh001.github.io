__NUXT_JSONP__("/articles/christyjacob4/694772", (function(a,b,c,d,e,f,g){b.type_of="article";b.id=694772;b.title="#30DaysOfAppwrite : Getting Started with SMTP";b.description="Intro   #30DaysOfAppwrite is a month long event focused at giving developers a walkthrough o...";b.readable_publish_date="May 11";b.slug="30daysofappwrite-getting-started-with-smtp-1e2e";b.path="\u002Fappwrite\u002F30daysofappwrite-getting-started-with-smtp-1e2e";b.url=c;b.comments_count=1;b.public_reactions_count=d;b.collection_id=a;b.published_timestamp=e;b.positive_reactions_count=d;b.cover_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--5uu7ttX5--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fvdinc7s1g235lcji904b.png";b.social_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--TR-JQ82h--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fvdinc7s1g235lcji904b.png";b.canonical_url=c;b.created_at="2021-05-11T12:43:40Z";b.edited_at="2021-05-11T14:53:58Z";b.crossposted_at=a;b.published_at=e;b.last_comment_at="2021-08-29T07:08:06Z";b.reading_time_minutes=3;b.tag_list="javascript, flutter, webdev, 30daysofappwrite";b.tags=["javascript","flutter","webdev","30daysofappwrite"];b.body_html="\u003Ch1\u003E\n  \u003Ca name=\"intro\" href=\"#intro\"\u003E\n  \u003C\u002Fa\u003E\n  Intro\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003E\u003Ca href=\"http:\u002F\u002F30days.appwrite.io\u002F\"\u003E#30DaysOfAppwrite\u003C\u002Fa\u003E is a month long event focused at giving developers a walkthrough of all of Appwrite's features, starting from the basics to more advanced features like Cloud Functions! Alongside we will also be building a fully featured Medium Clone to demonstrate how these \u003Cbr\u003E\nconcepts can be applied when building a real world app. We also have some exciting prizes for developers who follow along with us!\u003C\u002Fp\u003E\n\u003Ch2\u003E\n  \u003Ca name=\"getting-started-with-smtp\" href=\"#getting-started-with-smtp\"\u003E\n  \u003C\u002Fa\u003E\n  Getting Started with SMTP\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EWelcome to Day 11 👋. \u003Cstrong\u003ESMTP\u003C\u002Fstrong\u003E stands for \u003Cstrong\u003ESimple Mail Transfer Protocol\u003C\u002Fstrong\u003E. As with any other protocol, it defines some steps and guidelines that need to be adhered to, by all the computers on a network. SMTP is an application layer protocol in the TCP\u002FIP stack and works closely with something called the \u003Cstrong\u003EMail Transfer Agent (MTA)\u003C\u002Fstrong\u003E to send your communication to the right computer and email inbox.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn order to enable email functionality in Appwrite, you will need to setup a proper SMTP configuration. Because email deliverability can be both tricky and hard, it is often easier to delegate this responsibility to a 3rd-party SMTP provider like \u003Ca href=\"https:\u002F\u002Fwww.mailgun.com\u002F\"\u003EMailGun\u003C\u002Fa\u003E or \u003Ca href=\"https:\u002F\u002Fsendgrid.com\u002F\"\u003ESendGrid\u003C\u002Fa\u003E. These providers help you abstract the complexity of passing SPAM filters by doing a lot of the advanced configuration and validation for you.\u003C\u002Fp\u003E\n\n\u003Cp\u003EFeel free to register with any provider of your choice and skip to the \u003Cstrong\u003EConfiguration\u003C\u002Fstrong\u003E section, otherwise follow along to learn how to get the SMTP credentials from Sendgrid.\u003C\u002Fp\u003E\n\u003Ch2\u003E\n  \u003Ca name=\"setting-up-sendgrid\" href=\"#setting-up-sendgrid\"\u003E\n  \u003C\u002Fa\u003E\n  Setting up SendGrid\n\u003C\u002Fh2\u003E\n\n\u003Col\u003E\n\u003Cli\u003E\u003Cp\u003ECreate a SendGrid account \u003Ca href=\"https:\u002F\u002Fsignup.sendgrid.com\u002F\"\u003Ehere\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EVerify ownership of a single email address to use as a sender. Instructions can be found \u003Ca href=\"https:\u002F\u002Fsendgrid.com\u002Fdocs\u002Fui\u002Fsending-email\u002Fsender-verification\u002F\"\u003Ehere\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003ESetup a SMTP Relay under \u003Ca href=\"https:\u002F\u002Fapp.sendgrid.com\u002Fguide\u002Fintegrate\"\u003EEmail API -&gt; Integration Guide\u003C\u002Fa\u003E and create an API Key.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EDown below you should see all the credentials you need to setup SendGrid with Appwrite in the next step.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2\u003E\n  \u003Ca name=\"configuration\" href=\"#configuration\"\u003E\n  \u003C\u002Fa\u003E\n  Configuration\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EAppwrite offers multiple \u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fenvironment-variables#smtp\"\u003Eenvironment variables\u003C\u002Fa\u003E to customize your server setup to your needs. In order to enable SMTP, you need to change the Appwrite container's environment variables. The following are important for us:\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"table-wrapper-paragraph\"\u003E\u003Ctable\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth\u003EName\u003C\u002Fth\u003E\n\u003Cth\u003EDescription\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E_APP_SMTP_HOST\u003C\u002Ftd\u003E\n\u003Ctd\u003ESMTP server host name address. Use an empty string to disable all mail sending from the server. The default value for this variable is an empty string\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E_APP_SMTP_PORT\u003C\u002Ftd\u003E\n\u003Ctd\u003ESMTP server TCP port. Empty by default.\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E_APP_SMTP_SECURE\u003C\u002Ftd\u003E\n\u003Ctd\u003ESMTP secure connection protocol. Empty by default, change to 'tls' if running on a secure connection.\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E_APP_SMTP_USERNAME\u003C\u002Ftd\u003E\n\u003Ctd\u003ESMTP server user name. Empty by default.\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E_APP_SMTP_PASSWORD\u003C\u002Ftd\u003E\n\u003Ctd\u003ESMTP server user password. Empty by default.\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E\n\n\u003Cp\u003ETo change these variables according to your needs, navigate to the \u003Ccode\u003Eappwrite\u003C\u002Fcode\u003E directory where Appwrite was installed and edit the hidden \u003Ccode\u003E.env\u003C\u002Fcode\u003E file.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E_APP_SMTP_HOST=smtp.sendgrid.net\n_APP_SMTP_PORT=587\n_APP_SMTP_SECURE=tls\n_APP_SMTP_USERNAME=YOUR-SMTP-USERNAME\n_APP_SMTP_PASSWORD=YOUR-SMTP-PASSWORD\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EAfter you finished updating you need to restart your Appwrite stack using the following command from your terminal:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight shell\"\u003E\u003Ccode\u003Edocker-compose up \u003Cspan class=\"nt\"\u003E-d\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003E--remove-orphans\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003E--build\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003E--force-recreate\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch2\u003E\n  \u003Ca name=\"thats-it\" href=\"#thats-it\"\u003E\n  \u003C\u002Fa\u003E\n  That’s it!\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EGo to your Appwrite console, logout from your account and try to recover your password by navigating to \u003Cstrong\u003EForgot password?\u003C\u002Fstrong\u003E. If you have followed along setting up the SMTP Server using SendGrid - this should also verify your integration.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf everything went well, you should receive an E-Mail with instructions to reset your password. Obviously this is not necessary and only a test to check if the SMTP server is working.\u003C\u002Fp\u003E\n\n\u003Cp\u003ETomorrow we will discuss how we can use our SMTP server to allow our users to verify their account with the associated email address.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"credits\" href=\"#credits\"\u003E\n  \u003C\u002Fa\u003E\n  Credits\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EWe hope you liked this write up. You can follow \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fsearch?q=%2330daysofappwrite\"\u003E#30DaysOfAppwrite\u003C\u002Fa\u003E on Social Media to keep up with all of our posts. The complete event timeline can be found \u003Ca href=\"http:\u002F\u002F30days.appwrite.io\"\u003Ehere\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fappwrite.io\u002Fdiscord\"\u003EDiscord Server\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ca href=\"https:\u002F\u002Fappwrite.io\u002F\"\u003EAppwrite Homepage\u003C\u002Fa\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fappwrite\"\u003EAppwrite's Github\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EFeel free to reach out to us on Discord if you would like to learn more about Appwrite, Aliens or Unicorns 🦄. Stay tuned for tomorrow's article! Until then 👋\u003C\u002Fp\u003E\n\n";b.body_markdown="# Intro\n[#30DaysOfAppwrite](http:\u002F\u002F30days.appwrite.io\u002F) is a month long event focused at giving developers a walkthrough of all of Appwrite's features, starting from the basics to more advanced features like Cloud Functions! Alongside we will also be building a fully featured Medium Clone to demonstrate how these \nconcepts can be applied when building a real world app. We also have some exciting prizes for developers who follow along with us!\n\n## Getting Started with SMTP\nWelcome to Day 11 👋. **SMTP** stands for **Simple Mail Transfer Protocol**. As with any other protocol, it defines some steps and guidelines that need to be adhered to, by all the computers on a network. SMTP is an application layer protocol in the TCP\u002FIP stack and works closely with something called the **Mail Transfer Agent (MTA)** to send your communication to the right computer and email inbox.\n\nIn order to enable email functionality in Appwrite, you will need to setup a proper SMTP configuration. Because email deliverability can be both tricky and hard, it is often easier to delegate this responsibility to a 3rd-party SMTP provider like [MailGun](https:\u002F\u002Fwww.mailgun.com\u002F) or [SendGrid](https:\u002F\u002Fsendgrid.com\u002F). These providers help you abstract the complexity of passing SPAM filters by doing a lot of the advanced configuration and validation for you.\n\nFeel free to register with any provider of your choice and skip to the **Configuration** section, otherwise follow along to learn how to get the SMTP credentials from Sendgrid.\n\n## Setting up SendGrid\n\n1. Create a SendGrid account [here](https:\u002F\u002Fsignup.sendgrid.com\u002F).\n\n2. Verify ownership of a single email address to use as a sender. Instructions can be found [here](https:\u002F\u002Fsendgrid.com\u002Fdocs\u002Fui\u002Fsending-email\u002Fsender-verification\u002F).\n\n3. Setup a SMTP Relay under [Email API -\u003E Integration Guide](https:\u002F\u002Fapp.sendgrid.com\u002Fguide\u002Fintegrate) and create an API Key.\n\n4. Down below you should see all the credentials you need to setup SendGrid with Appwrite in the next step.\n\n## Configuration\n\nAppwrite offers multiple [environment variables](https:\u002F\u002Fappwrite.io\u002Fdocs\u002Fenvironment-variables#smtp) to customize your server setup to your needs. In order to enable SMTP, you need to change the Appwrite container's environment variables. The following are important for us:\n\n| Name               | Description                                                                                                                                            |\n|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|\n| _APP_SMTP_HOST     | SMTP server host name address. Use an empty string to disable all mail sending from the server. The default value for this variable is an empty string |\n| _APP_SMTP_PORT     | SMTP server TCP port. Empty by default.                                                                                                                |\n| _APP_SMTP_SECURE   | SMTP secure connection protocol. Empty by default, change to 'tls' if running on a secure connection.                                                  |\n| _APP_SMTP_USERNAME | SMTP server user name. Empty by default.                                                                                                               |\n| _APP_SMTP_PASSWORD | SMTP server user password. Empty by default.                                                                                                           |\n\nTo change these variables according to your needs, navigate to the `appwrite` directory where Appwrite was installed and edit the hidden `.env` file.\n\n```\n_APP_SMTP_HOST=smtp.sendgrid.net\n_APP_SMTP_PORT=587\n_APP_SMTP_SECURE=tls\n_APP_SMTP_USERNAME=YOUR-SMTP-USERNAME\n_APP_SMTP_PASSWORD=YOUR-SMTP-PASSWORD\n```\n\nAfter you finished updating you need to restart your Appwrite stack using the following command from your terminal:\n```sh\ndocker-compose up -d --remove-orphans --build --force-recreate\n```\n\n## That’s it! \n\nGo to your Appwrite console, logout from your account and try to recover your password by navigating to **Forgot password?**. If you have followed along setting up the SMTP Server using SendGrid - this should also verify your integration.\n\nIf everything went well, you should receive an E-Mail with instructions to reset your password. Obviously this is not necessary and only a test to check if the SMTP server is working.\n\nTomorrow we will discuss how we can use our SMTP server to allow our users to verify their account with the associated email address.\n\n## Credits \nWe hope you liked this write up. You can follow [#30DaysOfAppwrite](https:\u002F\u002Ftwitter.com\u002Fsearch?q=%2330daysofappwrite) on Social Media to keep up with all of our posts. The complete event timeline can be found [here](http:\u002F\u002F30days.appwrite.io)\n\n* [Discord Server](https:\u002F\u002Fappwrite.io\u002Fdiscord)\n* [Appwrite Homepage](https:\u002F\u002Fappwrite.io\u002F)  \n* [Appwrite's Github](https:\u002F\u002Fgithub.com\u002Fappwrite)\n\nFeel free to reach out to us on Discord if you would like to learn more about Appwrite, Aliens or Unicorns 🦄. Stay tuned for tomorrow's article! Until then 👋";b.user={name:"Christy Jacob",username:f,twitter_username:a,github_username:f,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--xsn7j9ry--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F119691\u002F5be2bcad-e1ee-4ef8-928b-d71f4e355af6.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--IX4ROHsY--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F119691\u002F5be2bcad-e1ee-4ef8-928b-d71f4e355af6.png"};b.organization={name:"Appwrite",username:g,slug:g,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--MwfZh3wG--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Forganization\u002Fprofile_image\u002F2225\u002Feb541cf9-84f4-4101-987c-c219cd4b34fc.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--5xS_iZdD--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Forganization\u002Fprofile_image\u002F2225\u002Feb541cf9-84f4-4101-987c-c219cd4b34fc.png"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:b}},mutations:[["SET_CURRENT_ARTICLE",b]]}}(null,{},"https:\u002F\u002Fdev.to\u002Fappwrite\u002F30daysofappwrite-getting-started-with-smtp-1e2e",20,"2021-05-11T14:53:01Z","christyjacob4","appwrite")));