window.__NUXT__=(function(a,b,c,d,e,f){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:716307,title:"Inside look: Scalable developer video production",description:"In our last post, we shared our new Stripe Developer Foundations video series where we cover nine cor...",readable_publish_date:"Jun 2",slug:"scalable-developer-video-production-43mg",path:"\u002Fstripe\u002Fscalable-developer-video-production-43mg",url:c,comments_count:1,public_reactions_count:d,collection_id:a,published_timestamp:e,positive_reactions_count:d,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--QSKRl5lS--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fjsfblmojt1wrugmxucth.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--auAp82T6--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fjsfblmojt1wrugmxucth.png",canonical_url:c,created_at:"2021-06-02T17:01:31Z",edited_at:"2021-06-03T16:49:39Z",crossposted_at:a,published_at:e,last_comment_at:"2021-07-13T08:33:18Z",reading_time_minutes:6,tag_list:"stripe, devrel, video, devjournal",tags:[b,"devrel","video","devjournal"],body_html:"\u003Cp\u003EIn our \u003Ca href=\"https:\u002F\u002Fdev.to\u002Fstripe\u002Fstripe-developer-foundations-videos-28n2\"\u003Elast post\u003C\u002Fa\u003E, we shared our new \u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fc\u002FStripeDevelopers\u002Fplaylists?view=50&amp;shelf_id=2\"\u003EStripe Developer Foundations video\u003C\u002Fa\u003E \u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fc\u002FStripeDevelopers\u002Fplaylists?view=50&amp;shelf_id=2\"\u003Eseries\u003C\u002Fa\u003E where we cover nine core topics (authentication, making requests, pagination, metadata, webhook helpers, idempotency &amp; retries, versioning, expanding objects, and environmental variables) for working with the Stripe API across seven different languages (Ruby, PHP, Python, Node, .NET, Go, and Java). \u003C\u002Fp\u003E\n\n\u003Cp\u003EHere, we are sharing our experience producing the series, challenges we faced, and how we’re working on making developer video production more scalable. By the end of this post, you’ll learn how we made 63 videos across nine topics and seven languages in less than half the usual time.  \u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"what-did-we-set-out-to-do\" href=\"#what-did-we-set-out-to-do\"\u003E\n  \u003C\u002Fa\u003E\n  What did we set out to do?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EStripe has seven main client libraries — \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-ruby\"\u003ERuby\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-php\"\u003EPHP\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-python\"\u003EPython\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-node\"\u003ENode\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-dotnet\"\u003E.NET\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-go\"\u003EGo\u003C\u002Fa\u003E, and \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-java\"\u003EJava\u003C\u002Fa\u003E — and we aim to provide junior developers a foundation of broadly applicable knowledge to help them in all of their Stripe development going forward. \u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EOur goals\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EMake sure we provide content in the programming languages a developer is most familiar with.\u003C\u002Fli\u003E\n\u003Cli\u003ECreate content covering the patterns that are applicable to all Stripe API endpoints and resources.\u003C\u002Fli\u003E\n\u003Cli\u003ESupplement the most core content in our \u003Ca href=\"https:\u002F\u002Fstripe.com\u002Fdocs\u002Fapi\"\u003EAPI Reference\u003C\u002Fa\u003E with an audiovisual learning experience.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"resources\" href=\"#resources\"\u003E\n  \u003C\u002Fa\u003E\n  Resources\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EThe developer advocacy team at Stripe is small but mighty, and this project called for contributions from all across the company. For every video, we had:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003ETechnical solutions engineers reviewing scripts for accuracy and granularity\u003C\u002Fli\u003E\n\u003Cli\u003EDocs writers reviewing scripts for information flow and knowledge scaffolding\u003C\u002Fli\u003E\n\u003Cli\u003EAn external contractor who edited the video, and\u003C\u002Fli\u003E\n\u003Cli\u003EThe actual on-screen talent of the developer advocates, who also wrote the script, created the animated explainers, and designed the basic visuals\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003ETypically a video takes us 10-20 hours of work. \u003Cstrong\u003EWe estimate that each of these videos took less than 6 hours to make.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EOur toolbox\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.telestream.net\u002Fscreenflow\u002Foverview.htm\"\u003EScreenflow\u003C\u002Fa\u003E is a lightweight tool for screen recording and video editing that we use regularly at Stripe. All of our developer advocates used it for screen, camera, and audio capture, as well as for creating animations. While it has worked well for our current video needs across the team, it is worth noting that Screenflow does not support livestreaming.  \u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.figma.com\u002F\"\u003EFigma\u003C\u002Fa\u003E is a collaborative graphic design tool that allowed us to quickly create and share design assets, such as thumbnails for each video. \u003C\u002Fp\u003E\n\n\u003Cp\u003EWhile the battle between Google Docs and Dropbox Paper rages on, we drafted scripts in \u003Ca href=\"https:\u002F\u002Fpaper.dropbox.com\u002F\"\u003ED\u003C\u002Fa\u003E\u003Ca href=\"https:\u002F\u002Fpaper.dropbox.com\u002F\"\u003Eropbox\u003C\u002Fa\u003E \u003Ca href=\"https:\u002F\u002Fpaper.dropbox.com\u002F\"\u003EP\u003C\u002Fa\u003E\u003Ca href=\"https:\u002F\u002Fpaper.dropbox.com\u002F\"\u003Eaper\u003C\u002Fa\u003E so that we could collaborate and include formatted code-snippets.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"challenges\" href=\"#challenges\"\u003E\n  \u003C\u002Fa\u003E\n  Challenges\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EWith such a small team, we ran into a number of expected and unexpected challenges, some common to video production, some specific to the quirks of working in the financial field. \u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003EChallenge 1: Seven languages, five dev advocates\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EWe want to ensure that we could cover all 7 official Stripe client libraries, but each of us was an expert in only 3 or 4 languages. \u003C\u002Fli\u003E\n\u003Cli\u003EWe started by creating standard scripts with the accompanying code around a language family we knew best, then worked together to fill in the extra correct steps and prose for other languages. This capitalized on our team’s breadth of knowledge, since we were all able to explain each concept but not necessarily be able to create scripts in every language. \u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EChallenge 2: Editors can’t edit concepts they don’t understand, and editors aren’t animators.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EWe spent a lot of time trying to explain esoteric financial\u002Ftechnical topics like idempotency to our contractor editor and finally realized we were trying to create a unicorn. \u003C\u002Fli\u003E\n\u003Cli\u003EWe had also thought our editor would be able to handle more of the animation work, but we learned the lesson that editors are not necessarily animators. \u003C\u002Fli\u003E\n\u003Cli\u003EWe decided to bring animation in-house and leaned more heavily on the editor for time-intensive work, like polishing screen captures and wrangling the longer parts of the videos.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EChallenge 3: Animations take a lot of time to create.\u003C\u002Fstrong\u003E \u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EWhen we first sat down to sketch out the resources needed for this video series, we quickly realized we wouldn’t be able to create bespoke animations for each video, otherwise this project could take a year. \u003C\u002Fli\u003E\n\u003Cli\u003EIn our biggest time-saving choice, we extracted the concepts from those standard scripts that were the same across all languages and made just one animation that could be reused. You can see an example of that in our \u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=lmrSi_0UP14&amp;list=PLy1nL-pvL2M50RmP6ie-gdcSnfOuQCRYk&amp;t=23s\"\u003Evideo on webhooks in Ruby\u003C\u002Fa\u003E.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"walkthrough-of-our-process\" href=\"#walkthrough-of-our-process\"\u003E\n  \u003C\u002Fa\u003E\n  Walkthrough of our process\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EPlanning\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EFor every video, we created a demo outline that made clear how detailed the video would be. We hope to hit the sweet spot between consumable but still comprehensive, laying a strong foundation for future integrations.\u003C\u002Fli\u003E\n\u003Cli\u003ETo start, we drafted each script in a single language and reviewed the script with Docs writers for flow and information architecture and with Technical Solutions Engineers for technical accuracy.\u003C\u002Fli\u003E\n\u003Cli\u003EWe refactored the script to front-load the conceptual pieces that were the same across all videos, since we would be using the same voice over and animation across all languages.\u003C\u002Fli\u003E\n\u003Cli\u003EThen we worked with fellow language experts on the dev advocacy team to populate the code snippets and other prose for each of the six other languages\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--hvvQGGIM--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fx36wqgs44pyyik2deqah.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--hvvQGGIM--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fx36wqgs44pyyik2deqah.png\" alt=\"snippet\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E \u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EIn the recording booth\u003C\u002Fstrong\u003E*\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EAt this point, we only had to record the conceptual piece once, since we designed it to be re-usable in both audio and visual form across all seven languages\u003C\u002Fli\u003E\n\u003Cli\u003EWe had different developer advocates own each topic across the languages, rather than the other way around.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003E*Since our entire team was remote even pre-COVID, we don’t have an actual recording booth, but you can \u003Ca href=\"https:\u002F\u002Fdev.to\u002Fstripe\u002Fremote-work-a-guide-to-ensuring-quality-video-conferencing-55fi\"\u003Elearn more about what equipment we use here\u003C\u002Fa\u003E. \u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--PPvjNq6w--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F1rcq9u33z9r5x7uy5i29.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--PPvjNq6w--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F1rcq9u33z9r5x7uy5i29.png\" alt=\"workflow diagram showing animation then screencaptures for all 7 languages then animation then screncaptures then ultimate videos\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ETo the editor\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EWe had our contractor edit the voice overs and screen captures, but then brought the footage back for the developer advocate to merge in the animations since this was the most technically complex part.\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EThis is what our contractor worked with:\u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--12quskRn--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fasdh5l7l8f02nx7hrpi3.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--12quskRn--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fasdh5l7l8f02nx7hrpi3.png\" alt=\"Screenflow editing track from editor, only audio and head\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EThis is what our developer advocates worked with. (If you’re familiar with Screenflow, you’ll know that this is a number of different tracks to have at once!) \u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--qLpgNM34--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fz8m7i9eq0bvny8apjov0.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--qLpgNM34--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fz8m7i9eq0bvny8apjov0.png\" alt=\"Screenflow editing track, lots of tracks showing animation objects\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EOur end result was that we only needed to do the heavy lifting of animation once to produce 7 consistent videos covering a topic and were able to cover a 9 x 7 matrix of topics and languages across just 5 team members. \u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EMarketing\u003C\u002Fstrong\u003E\u003Cbr\u003E\nWe’re not done yet! Once we made all the videos, we needed to make sure they got in front of the right people. \u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EWe published batches of videos weekly by topic across each language, so that we could ensure equal staggering across languages. While we could have worked on publishing all of the Python videos or all of the Ruby videos at once, we thought it more equitable to go broad rather than deep.\u003C\u002Fli\u003E\n\u003Cli\u003EWe created a \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fcjav_dev\u002Fstatus\u002F1352686325065912321\"\u003ETwitter thread for each language\u003C\u002Fa\u003E, adding a tweet for each topic as it went live. \u003C\u002Fli\u003E\n\u003Cli\u003EWe then did a big “go to market” push at the end, featuring the completed series in our \u003Ca href=\"https:\u002F\u002Fgo.stripe.global\u002Fdev-digest\"\u003Edev digest\u003C\u002Fa\u003E, on \u003Ca href=\"https:\u002F\u002Fdev.to\u002Fstripe\"\u003EDEV.to\u003C\u002Fa\u003E, and by RT-ing all of those individual threads on \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fstripedev\"\u003E@StripeDev\u003C\u002Fa\u003E. \u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EConclusion\u003C\u002Fstrong\u003E\u003Cbr\u003E\nOverall, we were able to create 63 videos across nine topics in seven languages in less than 400 hours, which is a reduction of \u003Cem\u003Eover 60%\u003C\u002Fem\u003E from the ~1000 hours this project would have normally taken. This definitely required the collaboration of a number of teammates across the company, all in different functions, but we all have the same goal of improving the Stripe developer experience. You can \u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fc\u002FStripeDevelopers\u002Fplaylists?view=50&amp;shelf_id=2\"\u003Echeck out the videos here\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAre you just getting started or trying to do something similar with video content? We’d love to any questions or comments from you below or \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fstripedev\"\u003Eon Twitter\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cem\u003ECJ Avilla is a developer advocate at Stripe and lives in Nevada. You can find him on Twitter at\u003C\u002Fem\u003E \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fcjav_dev\"\u003E\u003Cem\u003E@cjav_dev\u003C\u002Fem\u003E\u003C\u002Fa\u003E or on \u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fc\u002FCJAvilla\u002Ffeatured\"\u003EYouTube\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n",body_markdown:"In our [last post](https:\u002F\u002Fdev.to\u002Fstripe\u002Fstripe-developer-foundations-videos-28n2), we shared our new [Stripe Developer Foundations video](https:\u002F\u002Fwww.youtube.com\u002Fc\u002FStripeDevelopers\u002Fplaylists?view=50&shelf_id=2) [series](https:\u002F\u002Fwww.youtube.com\u002Fc\u002FStripeDevelopers\u002Fplaylists?view=50&shelf_id=2) where we cover nine core topics (authentication, making requests, pagination, metadata, webhook helpers, idempotency & retries, versioning, expanding objects, and environmental variables) for working with the Stripe API across seven different languages (Ruby, PHP, Python, Node, .NET, Go, and Java). \n\nHere, we are sharing our experience producing the series, challenges we faced, and how we’re working on making developer video production more scalable. By the end of this post, you’ll learn how we made 63 videos across nine topics and seven languages in less than half the usual time.  \n\n## What did we set out to do?\n\nStripe has seven main client libraries — [Ruby](https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-ruby), [PHP](https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-php), [Python](https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-python), [Node](https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-node), [.NET](https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-dotnet), [Go](https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-go), and [Java](https:\u002F\u002Fgithub.com\u002Fstripe\u002Fstripe-java) — and we aim to provide junior developers a foundation of broadly applicable knowledge to help them in all of their Stripe development going forward. \n\n**Our goals**\n\n- Make sure we provide content in the programming languages a developer is most familiar with.\n- Create content covering the patterns that are applicable to all Stripe API endpoints and resources.\n- Supplement the most core content in our [API Reference](https:\u002F\u002Fstripe.com\u002Fdocs\u002Fapi) with an audiovisual learning experience.\n\n## Resources\n\nThe developer advocacy team at Stripe is small but mighty, and this project called for contributions from all across the company. For every video, we had:\n\n\n- Technical solutions engineers reviewing scripts for accuracy and granularity\n- Docs writers reviewing scripts for information flow and knowledge scaffolding\n- An external contractor who edited the video, and\n- The actual on-screen talent of the developer advocates, who also wrote the script, created the animated explainers, and designed the basic visuals\n\nTypically a video takes us 10-20 hours of work. **We estimate that each of these videos took less than 6 hours to make.**\n\n**Our toolbox**\n\n[Screenflow](https:\u002F\u002Fwww.telestream.net\u002Fscreenflow\u002Foverview.htm) is a lightweight tool for screen recording and video editing that we use regularly at Stripe. All of our developer advocates used it for screen, camera, and audio capture, as well as for creating animations. While it has worked well for our current video needs across the team, it is worth noting that Screenflow does not support livestreaming.  \n\n[Figma](https:\u002F\u002Fwww.figma.com\u002F) is a collaborative graphic design tool that allowed us to quickly create and share design assets, such as thumbnails for each video. \n\nWhile the battle between Google Docs and Dropbox Paper rages on, we drafted scripts in [D](https:\u002F\u002Fpaper.dropbox.com\u002F)[ropbox](https:\u002F\u002Fpaper.dropbox.com\u002F) [P](https:\u002F\u002Fpaper.dropbox.com\u002F)[aper](https:\u002F\u002Fpaper.dropbox.com\u002F) so that we could collaborate and include formatted code-snippets.\n\n## Challenges\n\nWith such a small team, we ran into a number of expected and unexpected challenges, some common to video production, some specific to the quirks of working in the financial field. \n\n\n- **Challenge 1: Seven languages, five dev advocates**\n    - We want to ensure that we could cover all 7 official Stripe client libraries, but each of us was an expert in only 3 or 4 languages. \n    - We started by creating standard scripts with the accompanying code around a language family we knew best, then worked together to fill in the extra correct steps and prose for other languages. This capitalized on our team’s breadth of knowledge, since we were all able to explain each concept but not necessarily be able to create scripts in every language. \n\n\n- **Challenge 2: Editors can’t edit concepts they don’t understand, and editors aren’t animators.**\n    - We spent a lot of time trying to explain esoteric financial\u002Ftechnical topics like idempotency to our contractor editor and finally realized we were trying to create a unicorn. \n    - We had also thought our editor would be able to handle more of the animation work, but we learned the lesson that editors are not necessarily animators. \n    - We decided to bring animation in-house and leaned more heavily on the editor for time-intensive work, like polishing screen captures and wrangling the longer parts of the videos.\n        \n- **Challenge 3: Animations take a lot of time to create.** \n    - When we first sat down to sketch out the resources needed for this video series, we quickly realized we wouldn’t be able to create bespoke animations for each video, otherwise this project could take a year. \n    - In our biggest time-saving choice, we extracted the concepts from those standard scripts that were the same across all languages and made just one animation that could be reused. You can see an example of that in our [video on webhooks in Ruby](https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=lmrSi_0UP14&list=PLy1nL-pvL2M50RmP6ie-gdcSnfOuQCRYk&t=23s).\n\n\n\n## Walkthrough of our process\n\n**Planning**\n\n- For every video, we created a demo outline that made clear how detailed the video would be. We hope to hit the sweet spot between consumable but still comprehensive, laying a strong foundation for future integrations.\n- To start, we drafted each script in a single language and reviewed the script with Docs writers for flow and information architecture and with Technical Solutions Engineers for technical accuracy.\n- We refactored the script to front-load the conceptual pieces that were the same across all videos, since we would be using the same voice over and animation across all languages.\n- Then we worked with fellow language experts on the dev advocacy team to populate the code snippets and other prose for each of the six other languages\n\n![snippet](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fx36wqgs44pyyik2deqah.png) \n\n\n**In the recording booth***\n\n- At this point, we only had to record the conceptual piece once, since we designed it to be re-usable in both audio and visual form across all seven languages\n- We had different developer advocates own each topic across the languages, rather than the other way around.\n\n*Since our entire team was remote even pre-COVID, we don’t have an actual recording booth, but you can [learn more about what equipment we use here](https:\u002F\u002Fdev.to\u002Fstripe\u002Fremote-work-a-guide-to-ensuring-quality-video-conferencing-55fi). \n\n\n![workflow diagram showing animation then screencaptures for all 7 languages then animation then screncaptures then ultimate videos](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F1rcq9u33z9r5x7uy5i29.png)\n\n\n\n**To the editor**\n\n- We had our contractor edit the voice overs and screen captures, but then brought the footage back for the developer advocate to merge in the animations since this was the most technically complex part.\n- This is what our contractor worked with:\n![Screenflow editing track from editor, only audio and head](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fasdh5l7l8f02nx7hrpi3.png)\n \n\n- This is what our developer advocates worked with. (If you’re familiar with Screenflow, you’ll know that this is a number of different tracks to have at once!) \n![Screenflow editing track, lots of tracks showing animation objects](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fz8m7i9eq0bvny8apjov0.png)\n \n\nOur end result was that we only needed to do the heavy lifting of animation once to produce 7 consistent videos covering a topic and were able to cover a 9 x 7 matrix of topics and languages across just 5 team members. \n\n**Marketing**\nWe’re not done yet! Once we made all the videos, we needed to make sure they got in front of the right people. \n\n\n- We published batches of videos weekly by topic across each language, so that we could ensure equal staggering across languages. While we could have worked on publishing all of the Python videos or all of the Ruby videos at once, we thought it more equitable to go broad rather than deep.\n- We created a [Twitter thread for each language](https:\u002F\u002Ftwitter.com\u002Fcjav_dev\u002Fstatus\u002F1352686325065912321), adding a tweet for each topic as it went live. \n- We then did a big “go to market” push at the end, featuring the completed series in our [dev digest](https:\u002F\u002Fgo.stripe.global\u002Fdev-digest), on [DEV.to](https:\u002F\u002Fdev.to\u002Fstripe), and by RT-ing all of those individual threads on [@StripeDev](https:\u002F\u002Ftwitter.com\u002Fstripedev). \n\n**Conclusion**\nOverall, we were able to create 63 videos across nine topics in seven languages in less than 400 hours, which is a reduction of *over 60%* from the ~1000 hours this project would have normally taken. This definitely required the collaboration of a number of teammates across the company, all in different functions, but we all have the same goal of improving the Stripe developer experience. You can [check out the videos here](https:\u002F\u002Fwww.youtube.com\u002Fc\u002FStripeDevelopers\u002Fplaylists?view=50&shelf_id=2).\n\nAre you just getting started or trying to do something similar with video content? We’d love to any questions or comments from you below or [on Twitter](https:\u002F\u002Ftwitter.com\u002Fstripedev).\n\n*CJ Avilla is a developer advocate at Stripe and lives in Nevada. You can find him on Twitter at* [*@cjav_dev*](https:\u002F\u002Ftwitter.com\u002Fcjav_dev) or on [YouTube](https:\u002F\u002Fwww.youtube.com\u002Fc\u002FCJAvilla\u002Ffeatured).\n",user:{name:"CJ Avilla",username:f,twitter_username:f,github_username:a,website_url:"https:\u002F\u002Fcjav.dev",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--6xTp4JWZ--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F346915\u002F5852db7c-85be-41eb-b1a6-636940411821.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--vT8fTgAs--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F346915\u002F5852db7c-85be-41eb-b1a6-636940411821.png"},organization:{name:"Stripe",username:b,slug:b,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--QHgSUs31--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Forganization\u002Fprofile_image\u002F1963\u002F8edb6241-abf3-463c-83a2-2d8a7d381d75.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--DYLDm1SO--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Forganization\u002Fprofile_image\u002F1963\u002F8edb6241-abf3-463c-83a2-2d8a7d381d75.png"}}},serverRendered:true,routePath:"\u002Farticles\u002Fcjav_dev\u002F716307",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"stripe","https:\u002F\u002Fdev.to\u002Fstripe\u002Fscalable-developer-video-production-43mg",13,"2021-06-02T18:18:06Z","cjav_dev"));