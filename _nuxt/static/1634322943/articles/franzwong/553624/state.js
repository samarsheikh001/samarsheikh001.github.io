window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:553624,title:"Stupid but common security vulnerability in web app ",description:"Image from https:\u002F\u002Fwww.irasutoya.com\u002F   I can't remember how many times I see this securit...",readable_publish_date:"Dec 27 '20",slug:"stupid-but-common-security-vulnerability-in-web-app-24fd",path:"\u002Ffranzwong\u002Fstupid-but-common-security-vulnerability-in-web-app-24fd",url:c,comments_count:3,public_reactions_count:d,collection_id:a,published_timestamp:b,positive_reactions_count:d,cover_image:a,social_image:"https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F553624.png",canonical_url:c,created_at:b,edited_at:a,crossposted_at:a,published_at:b,last_comment_at:"2021-01-07T11:39:42Z",reading_time_minutes:2,tag_list:"api, rest, security",tags:["api","rest","security"],body_html:"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--4kJrILzi--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fw2t51lq0s8y6g9o52b3a.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--4kJrILzi--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fw2t51lq0s8y6g9o52b3a.png\" alt=\"Alt Text\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch6\u003E\n  \u003Ca name=\"image-from-httpswwwirasutoyacom\" href=\"#image-from-httpswwwirasutoyacom\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Image from \u003Ca href=\"https:\u002F\u002Fwww.irasutoya.com\u002F\"\u003Ehttps:\u002F\u002Fwww.irasutoya.com\u002F\u003C\u002Fa\u003E\n\u003C\u002Fh6\u003E\n\n\u003Cp\u003EI can't remember how many times I see this security vulnerability. When we design REST API, we usually put some IDs in URL. For example, we have a REST API returning user profile.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003EGET \u002Fusers\u002F1234\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThere is nothing wrong with the design. The problem is people forgetting to check the ID in the URL against the ID in the cookie or JWT. It means that even I log in as user \u003Ccode\u003E1234\u003C\u002Fcode\u003E, I am able to get the profile of user \u003Ccode\u003E7890\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThere is another case when we have multiple IDs in URL. Just like a REST API returning transaction details.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003EGET \u002Fusers\u002F1234\u002Ftransactions\u002F123-456-789\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EIt is not enough to check user ID only. I can do something like this.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003EGET \u002Fusers\u002F1234\u002Ftransactions\u002F987-654-321\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Ccode\u003E987-654-321\u003C\u002Fcode\u003E is the transaction ID not belonging to user \u003Ccode\u003E1234\u003C\u002Fcode\u003E. We must check the ownership or access permission of the item.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThings can go further complicated if we allow some users (e.g. staff, admin) to access other users' information. But I don't want to talk about it here.\u003C\u002Fp\u003E\n\n\u003Cp\u003EI heard people arguing that user is not able to access URL containing other user ID through the \u003Cstrong\u003EFRONTEND\u003C\u002Fstrong\u003E, so it is safe not to check. But of course, we all know a simple curl command can do it.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ECHECK ANYTHING FROM FRONTEND\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003ETo be more defensive, we can simply not putting user ID in URL and let the backend to get the ID from the cookie.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003EGET \u002Fusers\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EBut for the item ownership case, we can't use this trick.\u003C\u002Fp\u003E\n\n\u003Cp\u003EOf course, if you want to apply load balancing or analysis based on URL, this design is not good for you too.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis vulnerability is really stupid you may think. I think so too. But we can also see this problem from another point of view.\u003C\u002Fp\u003E\n\n\u003Cp\u003EUsually we have multiple layers in our system. It is common to have a web layer handling traffic from internet and a service layer handling the business logic and talking with the database.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--k2p7LZQ1--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002F85sb57emruo93fxdbz6m.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--k2p7LZQ1--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002F85sb57emruo93fxdbz6m.png\" alt=\"Alt Text\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch6\u003E\n  \u003Ca name=\"image-created-with-httpsexcalidrawcom\" href=\"#image-created-with-httpsexcalidrawcom\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Image created with \u003Ca href=\"https:\u002F\u002Fexcalidraw.com\u002F\"\u003Ehttps:\u002F\u002Fexcalidraw.com\u002F\u003C\u002Fa\u003E\n\u003C\u002Fh6\u003E\n\n\u003Cp\u003ESo who should check the permission? Web layer? Service layer? There is no standard answer.\u003C\u002Fp\u003E\n\n\u003Cp\u003EReviewing design is also important because you may start from a single team to multiple teams or system design is changed.\u003C\u002Fp\u003E\n\n",body_markdown:"![Alt Text](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fw2t51lq0s8y6g9o52b3a.png)\n###### Image from https:\u002F\u002Fwww.irasutoya.com\u002F\n\nI can't remember how many times I see this security vulnerability. When we design REST API, we usually put some IDs in URL. For example, we have a REST API returning user profile.\n\n```\nGET \u002Fusers\u002F1234\n```\n\nThere is nothing wrong with the design. The problem is people forgetting to check the ID in the URL against the ID in the cookie or JWT. It means that even I log in as user `1234`, I am able to get the profile of user `7890`.\n\nThere is another case when we have multiple IDs in URL. Just like a REST API returning transaction details.\n\n```\nGET \u002Fusers\u002F1234\u002Ftransactions\u002F123-456-789\n```\n\nIt is not enough to check user ID only. I can do something like this. \n\n```\nGET \u002Fusers\u002F1234\u002Ftransactions\u002F987-654-321\n```\n\n`987-654-321` is the transaction ID not belonging to user `1234`. We must check the ownership or access permission of the item.\n\nThings can go further complicated if we allow some users (e.g. staff, admin) to access other users' information. But I don't want to talk about it here.\n\nI heard people arguing that user is not able to access URL containing other user ID through the **FRONTEND**, so it is safe not to check. But of course, we all know a simple curl command can do it.\n\n**CHECK ANYTHING FROM FRONTEND**\n\nTo be more defensive, we can simply not putting user ID in URL and let the backend to get the ID from the cookie.\n\n```\nGET \u002Fusers\n```\n\nBut for the item ownership case, we can't use this trick.\n\nOf course, if you want to apply load balancing or analysis based on URL, this design is not good for you too.\n\nThis vulnerability is really stupid you may think. I think so too. But we can also see this problem from another point of view.\n\nUsually we have multiple layers in our system. It is common to have a web layer handling traffic from internet and a service layer handling the business logic and talking with the database.\n\n![Alt Text](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002F85sb57emruo93fxdbz6m.png)\n###### Image created with https:\u002F\u002Fexcalidraw.com\u002F\n\nSo who should check the permission? Web layer? Service layer? There is no standard answer.\n\nReviewing design is also important because you may start from a single team to multiple teams or system design is changed.\n",user:{name:"Franz Wong",username:e,twitter_username:a,github_username:e,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--iqvxwwiI--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F313362\u002F2a6aa577-7564-424e-8f7d-30bf1cb273a8.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--bIB47MWn--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F313362\u002F2a6aa577-7564-424e-8f7d-30bf1cb273a8.jpeg"}}},serverRendered:true,routePath:"\u002Farticles\u002Ffranzwong\u002F553624",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2020-12-27T05:02:54Z","https:\u002F\u002Fdev.to\u002Ffranzwong\u002Fstupid-but-common-security-vulnerability-in-web-app-24fd",202,"franzwong"));