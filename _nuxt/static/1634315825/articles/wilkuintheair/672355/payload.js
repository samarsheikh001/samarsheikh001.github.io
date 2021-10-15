__NUXT_JSONP__("/articles/wilkuintheair/672355", (function(a,b,c,d,e,f){c.type_of="article";c.id=672355;c.title="How my React Native app died";c.description="“Nah, gimme just this one feature, do not upgrade anything.” - Said a man who suddenly lost $5000 for...";c.readable_publish_date="Apr 20";c.slug="how-my-react-native-app-died-277i";c.path="\u002Fwilkuintheair\u002Fhow-my-react-native-app-died-277i";c.url=d;c.comments_count=0;c.public_reactions_count=e;c.collection_id=a;c.published_timestamp=b;c.positive_reactions_count=e;c.cover_image=a;c.social_image="https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F672355.png";c.canonical_url=d;c.created_at="2021-04-20T06:20:47Z";c.edited_at="2021-04-20T11:48:44Z";c.crossposted_at=a;c.published_at=b;c.last_comment_at=b;c.reading_time_minutes=2;c.tag_list="reactnative, upgrade, maintenance, 5days5blogposts";c.tags=["reactnative","upgrade","maintenance","5days5blogposts"];c.body_html="\u003Cp\u003E“Nah, gimme just this one feature, do not upgrade anything.” - Said a man who suddenly lost $5000 for a feature worth $50. This is a sad and, well, a bit of a fake story, because I was the sucker who promised to deliver a really small feature to a rotten app without proper research.\u003C\u002Fp\u003E\n\n\u003Cp\u003ENow, WTF happened here? The story begins a long time ago but I remember it like it was today. Let’s go back in time to 1994.. I mean to 2018. Well, the technology world moves fast. It was early December when I started this project so it was a good old version \u003Ccode\u003E0.57\u003C\u002Fcode\u003E of React Native. Believe me. This. Is. Old. Really old.\u003C\u002Fp\u003E\n\n\u003Cp\u003ESo a man has an app which once in a year needs to be updated with some fresh info. You can guess if there was a budget for making it loading dynamically from the server. We were happily updating this very important info for 2 years. Each update required going through a publishing process in both of the stores. \u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EBut this time something happened.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis time it was different. So I cloned this old app from the repo. Did I already say it was old? Nevermind. Okay let’s do it. \u003Ccode\u003Eyarn install\u003C\u002Fcode\u003E, update the info, \u003Ccode\u003Egit commit\u003C\u002Fcode\u003E, \u003Ccode\u003Egit push\u003C\u002Fcode\u003E, send an invoice. This should be enough because I had a nice CI\u002FCD in place.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ENope.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EI couldn’t even do \u003Ccode\u003Eyarn install\u003C\u002Fcode\u003E because I had too new version of node. But nvm. Or actually \u003Ccode\u003Envm use v9.something.0\u003C\u002Fcode\u003E\u003Cbr\u003E\nThis did the trick. I still had some issues running it but resolved it quickly with some help from my good buddy called Stack Overflow.\u003Cbr\u003E\nDamn! It was supposed to be a quick job and I’ve already spent over 2 hours on it.\u003Cbr\u003E\nQuick test on android and iOS, \u003Ccode\u003Egit commit\u003C\u002Fcode\u003E, \u003Ccode\u003Egit push\u003C\u002Fcode\u003E aaaand it’s done.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ENope.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe AppCenter build was successful. It still had the correct node version. What a nice surprise. But when it tried to deploy to stores.. A small, not looking very bad error occurred. I had to target higher versions of SDKs. These small, not looking very bad errors started being annoying. Let’s deal with it and forget about this nightmare.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003E2 days later.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EI gave up. After fighting with all these still-not-compatible-with-something-elses. This is how it died. I went to the man, said I’m very sorry. We both cried. He said go and bury it in the woods.\u003C\u002Fp\u003E\n\n\u003Cp\u003EOkay, this actually didn’t happen, but as you can guess there was no budget to properly fix it and make it great again.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"whats-the-lesson-here\" href=\"#whats-the-lesson-here\"\u003E\n  \u003C\u002Fa\u003E\n  What’s the lesson here?\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003ERemember to always remind your client how upgrading the app constantly is important. It’s not a big deal if you do this regularly. But if you do it once in a few years it may be very difficult and expensive to bring it back to life. \u003C\u002Fp\u003E\n\n";c.body_markdown="“Nah, gimme just this one feature, do not upgrade anything.” - Said a man who suddenly lost $5000 for a feature worth $50. This is a sad and, well, a bit of a fake story, because I was the sucker who promised to deliver a really small feature to a rotten app without proper research.\n\nNow, WTF happened here? The story begins a long time ago but I remember it like it was today. Let’s go back in time to 1994.. I mean to 2018. Well, the technology world moves fast. It was early December when I started this project so it was a good old version `0.57` of React Native. Believe me. This. Is. Old. Really old.\n\nSo a man has an app which once in a year needs to be updated with some fresh info. You can guess if there was a budget for making it loading dynamically from the server. We were happily updating this very important info for 2 years. Each update required going through a publishing process in both of the stores. \n\n**But this time something happened.**\n\nThis time it was different. So I cloned this old app from the repo. Did I already say it was old? Nevermind. Okay let’s do it. `yarn install`, update the info, `git commit`, `git push`, send an invoice. This should be enough because I had a nice CI\u002FCD in place.\n\n**Nope.**\n\nI couldn’t even do `yarn install` because I had too new version of node. But nvm. Or actually `nvm use v9.something.0`\nThis did the trick. I still had some issues running it but resolved it quickly with some help from my good buddy called Stack Overflow.\nDamn! It was supposed to be a quick job and I’ve already spent over 2 hours on it.\nQuick test on android and iOS, `git commit`, `git push` aaaand it’s done.\n\n**Nope.**\n\nThe AppCenter build was successful. It still had the correct node version. What a nice surprise. But when it tried to deploy to stores.. A small, not looking very bad error occurred. I had to target higher versions of SDKs. These small, not looking very bad errors started being annoying. Let’s deal with it and forget about this nightmare.\n\n**2 days later.**\n\nI gave up. After fighting with all these still-not-compatible-with-something-elses. This is how it died. I went to the man, said I’m very sorry. We both cried. He said go and bury it in the woods.\n\nOkay, this actually didn’t happen, but as you can guess there was no budget to properly fix it and make it great again.\n\n### What’s the lesson here?\n\nRemember to always remind your client how upgrading the app constantly is important. It’s not a big deal if you do this regularly. But if you do it once in a few years it may be very difficult and expensive to bring it back to life. \n";c.user={name:"Piotr Wilk",username:f,twitter_username:a,github_username:f,website_url:"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fwilkpiotr\u002F",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--LjN8BPhd--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F614618\u002Fbe31ac3e-baa7-4e57-8101-8a881307e43d.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--BY6MDUHl--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F614618\u002Fbe31ac3e-baa7-4e57-8101-8a881307e43d.jpeg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}(null,"2021-04-20T06:39:35Z",{},"https:\u002F\u002Fdev.to\u002Fwilkuintheair\u002Fhow-my-react-native-app-died-277i",6,"wilkuintheair")));