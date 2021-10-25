window.__NUXT__=(function(a,b,c,d){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:498988,title:"How to add RTL support in Figma",description:"Around 20 countries in the world speak a language that is written RTL (right-to-left). Thus, RTL supp...",readable_publish_date:"Nov 2 '20",slug:"how-to-add-rtl-support-in-figma-39gp",path:"\u002Faimenbatool\u002Fhow-to-add-rtl-support-in-figma-39gp",url:c,comments_count:0,public_reactions_count:d,collection_id:a,published_timestamp:b,positive_reactions_count:d,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--wGXCXAi_--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fs6filze03ze2sju10gd4.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--H6XKnPgL--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fs6filze03ze2sju10gd4.png",canonical_url:c,created_at:"2020-10-27T11:21:44Z",edited_at:a,crossposted_at:a,published_at:b,last_comment_at:b,reading_time_minutes:2,tag_list:"figma, rtl, uiweekly, reactnative",tags:["figma","rtl","uiweekly","reactnative"],body_html:"\u003Cp\u003EAround 20 countries in the world speak a language that is written RTL (right-to-left). Thus, RTL support is necessary for any digital device either web or mobile.\u003Cbr\u003E\nCurrently, Figma doesn't support RTL language but there are a few community plugins that help us achieve the goal. Let's look into it.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"problem\" href=\"#problem\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Problem:\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EBy default when we write an RTL text in Figma it does the following:\u003Cbr\u003E\nIt won't show the text IF you haven't selected an RTL supporting font.\u003Cbr\u003E\nIt won't automatically make the text RTL. Rather, the individual characters of your text will be written LTR.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--hMNCNUuT--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Ftacgoyh2yw0cngks6udv.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--hMNCNUuT--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Ftacgoyh2yw0cngks6udv.png\" alt=\"Alt Text\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"solution\" href=\"#solution\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Solution:\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ETo fix the issue above we need to install a third-party plugin developed by Figma community members. I have selected the \u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fr\u002F?url=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Fplugin%2F732290356467065314%2FArabic-%2526-RTL-Support\"\u003EArabic &amp; RTL Support\u003C\u002Fa\u003E plugin developed by \u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fr\u002F?url=https%3A%2F%2Fwww.figma.com%2F%40ah\"\u003EAhmad Alhaddad\u003C\u002Fa\u003E for this tutorial.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"steps\" href=\"#steps\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Steps:\n\u003C\u002Fh2\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EClick on the mentioned link and it will take you to the plugin page\u003C\u002Fli\u003E\n\u003Cli\u003EClick on install and it will automatically load into the Figma\u003C\u002Fli\u003E\n\u003Cli\u003EIn Figma, write some RTL and from plugins select the installed plugin to fix the direction of the text\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--YJssIFxH--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Furl1wu95q0lky4lsq2p3.gif\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--YJssIFxH--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Furl1wu95q0lky4lsq2p3.gif\" alt=\"Alt Text\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EThere is a list of a few more RTL plugins in the library you can find and install the best that suits your requirements.\u003Cbr\u003E\nLearn \u003Ca href=\"https:\u002F\u002Fdev.to\u002Faimenbatool\u002Fan-intro-to-redux-and-how-the-state-is-updated-in-a-redux-application-k97\"\u003Ewhat is Redux and how it manages the state\u003C\u002Fa\u003E Or tweet me \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002FAimenBatool\"\u003E@aimenbatool\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n",body_markdown:"Around 20 countries in the world speak a language that is written RTL (right-to-left). Thus, RTL support is necessary for any digital device either web or mobile.\nCurrently, Figma doesn't support RTL language but there are a few community plugins that help us achieve the goal. Let's look into it.\n\n## Problem:\nBy default when we write an RTL text in Figma it does the following:\nIt won't show the text IF you haven't selected an RTL supporting font.\nIt won't automatically make the text RTL. Rather, the individual characters of your text will be written LTR.\n\n![Alt Text](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Ftacgoyh2yw0cngks6udv.png)\n\n## Solution:\nTo fix the issue above we need to install a third-party plugin developed by Figma community members. I have selected the [Arabic & RTL Support](https:\u002F\u002Fmedium.com\u002Fr\u002F?url=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Fplugin%2F732290356467065314%2FArabic-%2526-RTL-Support) plugin developed by [Ahmad Alhaddad](https:\u002F\u002Fmedium.com\u002Fr\u002F?url=https%3A%2F%2Fwww.figma.com%2F%40ah) for this tutorial.\n\n## Steps:\n* Click on the mentioned link and it will take you to the plugin page\n* Click on install and it will automatically load into the Figma\n* In Figma, write some RTL and from plugins select the installed plugin to fix the direction of the text\n\n![Alt Text](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Furl1wu95q0lky4lsq2p3.gif)\n\nThere is a list of a few more RTL plugins in the library you can find and install the best that suits your requirements.\nLearn [what is Redux and how it manages the state](https:\u002F\u002Fdev.to\u002Faimenbatool\u002Fan-intro-to-redux-and-how-the-state-is-updated-in-a-redux-application-k97) Or tweet me [@aimenbatool](https:\u002F\u002Ftwitter.com\u002FAimenBatool).",user:{name:"Syeda Aimen Batool",username:"aimenbatool",twitter_username:"AimenBatool",github_username:a,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--JUG-8Lb3--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F96893\u002Fb6a307f1-f6d2-4282-9c0c-ff61d9f6a7e0.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--y-6ZPrvB--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F96893\u002Fb6a307f1-f6d2-4282-9c0c-ff61d9f6a7e0.jpg"}}},serverRendered:true,routePath:"\u002Farticles\u002Faimenbatool\u002F498988",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2020-11-02T20:09:20Z","https:\u002F\u002Fdev.to\u002Faimenbatool\u002Fhow-to-add-rtl-support-in-figma-39gp",3));