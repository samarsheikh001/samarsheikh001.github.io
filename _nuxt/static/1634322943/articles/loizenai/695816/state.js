window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:695816,title:"How to configure JavaMailSender with SpringBoot",description:"https:\u002F\u002Fgrokonez.com\u002Fspring-framework\u002Fspring-boot\u002Fconfigure-javamailsender-springboot  How to configu...",readable_publish_date:"May 12",slug:"how-to-configure-javamailsender-with-springboot-20lj",path:"\u002Floizenai\u002Fhow-to-configure-javamailsender-with-springboot-20lj",url:e,comments_count:0,public_reactions_count:c,collection_id:a,published_timestamp:b,positive_reactions_count:c,cover_image:a,social_image:"https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F695816.png",canonical_url:e,created_at:b,edited_at:a,crossposted_at:a,published_at:b,last_comment_at:b,reading_time_minutes:c,tag_list:"springboot, mail, javamailsender",tags:["springboot","mail","javamailsender"],body_html:"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgrokonez.com\u002Fspring-framework\u002Fspring-boot\u002Fconfigure-javamailsender-springboot\"\u003Ehttps:\u002F\u002Fgrokonez.com\u002Fspring-framework\u002Fspring-boot\u002Fconfigure-javamailsender-springboot\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EHow to configure JavaMailSender with SpringBoot\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ESpring Framework\u003C\u002Fstrong\u003E provides \u003Cstrong\u003EJavaMailSender\u003C\u002Fstrong\u003E interface &amp; \u003Cstrong\u003ESpring Boot\u003C\u002Fstrong\u003E provides auto-configuration for it. So in the tutorial, \u003Cstrong\u003EJavaSampleApproach\u003C\u002Fstrong\u003E will introduce how to configure \u003Cstrong\u003EJavaMailSender\u003C\u002Fstrong\u003E to send a gmail by a sample code.\u003C\u002Fp\u003E\n\n\n\n\u003Ch2\u003EI. Technologies\u003C\u002Fh2\u003E\n\n\u003Cp\u003E– Java 1.8\u003Cbr\u003E\n– Maven 3.3.9\u003Cbr\u003E\n– Spring Tool Suite – Version 3.8.1.RELEASE\u003Cbr\u003E\n– Spring Boot: 1.5.1.RELEASE\u003C\u002Fp\u003E\n\n\u003Ch2\u003EII. Practice\u003C\u002Fh2\u003E\n\n\u003Cp\u003E\u003Cstrong\u003E\u003Cem\u003EStep to do\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003ECreate SpringBoot project\u003C\u002Fli\u003E\n\u003Cli\u003ECreate MailSender\u003C\u002Fli\u003E\n\u003Cli\u003EDevelop a test client\u003C\u002Fli\u003E\n\u003Cli\u003ERun &amp; check results\n\u003Ch3\u003E1. Create SpringBoot project\u003C\u002Fh3\u003E\n– Using \u003Cstrong\u003ESpringToolSuite\u003C\u002Fstrong\u003E, create a SpringBoot project. Then add \u003Cstrong\u003Espring-boot-starter-mail\u003C\u002Fstrong\u003E dependency:\n\u003Cpre\u003E\u003Ccode\u003E&lt;dependency&gt;\n&lt;groupId&gt;org.springframework.boot&lt;\u002FgroupId&gt;\n&lt;artifactId&gt;spring-boot-starter-mail&lt;\u002FartifactId&gt;\n&lt;\u002Fdependency&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3\u003E2. Create MailSender\u003C\u002Fh3\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EFirstly, open \u003Cstrong\u003Eapplication.properties\u003C\u002Fstrong\u003E file, configure \u003Cstrong\u003Espring.mail\u003C\u002Fstrong\u003E for \u003Cstrong\u003EJavaMailSender\u003C\u002Fstrong\u003E:\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EMore at:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgrokonez.com\u002Fspring-framework\u002Fspring-boot\u002Fconfigure-javamailsender-springboot\"\u003Ehttps:\u002F\u002Fgrokonez.com\u002Fspring-framework\u002Fspring-boot\u002Fconfigure-javamailsender-springboot\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EHow to configure JavaMailSender with SpringBoot\u003C\u002Fp\u003E\n\n",body_markdown:"https:\u002F\u002Fgrokonez.com\u002Fspring-framework\u002Fspring-boot\u002Fconfigure-javamailsender-springboot\n\nHow to configure JavaMailSender with SpringBoot\n\n\u003Cstrong\u003ESpring Framework\u003C\u002Fstrong\u003E provides \u003Cstrong\u003EJavaMailSender\u003C\u002Fstrong\u003E interface & \u003Cstrong\u003ESpring Boot\u003C\u002Fstrong\u003E provides auto-configuration for it. So in the tutorial, \u003Cstrong\u003EJavaSampleApproach\u003C\u002Fstrong\u003E will introduce how to configure \u003Cstrong\u003EJavaMailSender\u003C\u002Fstrong\u003E to send a gmail by a sample code.\n\n\u003C!--more--\u003E\n\u003Cdiv id=\"tuttoc\" class=\"jsa-toc\"\u003E\u003C\u002Fdiv\u003E\n\n\u003Cdiv id=\"tutcontents\"\u003E\n\u003Ch2\u003EI. Technologies\u003C\u002Fh2\u003E\n– Java 1.8\n– Maven 3.3.9\n– Spring Tool Suite – Version 3.8.1.RELEASE\n– Spring Boot: 1.5.1.RELEASE\n\u003Ch2\u003EII. Practice\u003C\u002Fh2\u003E\n\u003Cstrong\u003E\u003Cem\u003EStep to do\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E\n- Create SpringBoot project\n- Create MailSender\n- Develop a test client\n- Run & check results\n\u003Ch3\u003E1. Create SpringBoot project\u003C\u002Fh3\u003E\n– Using \u003Cstrong\u003ESpringToolSuite\u003C\u002Fstrong\u003E, create a SpringBoot project. Then add \u003Cstrong\u003Espring-boot-starter-mail\u003C\u002Fstrong\u003E dependency:\n\u003Cpre\u003E\u003Ccode class=\"language-html\"\u003E&lt;dependency&gt;\n\t&lt;groupId&gt;org.springframework.boot&lt;\u002FgroupId&gt;\n\t&lt;artifactId&gt;spring-boot-starter-mail&lt;\u002FartifactId&gt;\n&lt;\u002Fdependency&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3\u003E2. Create MailSender\u003C\u002Fh3\u003E\n- Firstly, open \u003Cstrong\u003Eapplication.properties\u003C\u002Fstrong\u003E file, configure \u003Cstrong\u003Espring.mail\u003C\u002Fstrong\u003E for \u003Cstrong\u003EJavaMailSender\u003C\u002Fstrong\u003E:\n\nMore at:\n\nhttps:\u002F\u002Fgrokonez.com\u002Fspring-framework\u002Fspring-boot\u002Fconfigure-javamailsender-springboot\n\nHow to configure JavaMailSender with SpringBoot",user:{name:d,username:d,twitter_username:a,github_username:d,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--VRQs0www--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F523168\u002Fbe2e4d7b-d729-4241-96f0-a5a3313a9319.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_OWYyMXP--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F523168\u002Fbe2e4d7b-d729-4241-96f0-a5a3313a9319.jpeg"}}},serverRendered:true,routePath:"\u002Farticles\u002Floizenai\u002F695816",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2021-05-12T09:36:17Z",1,"loizenai","https:\u002F\u002Fdev.to\u002Floizenai\u002Fhow-to-configure-javamailsender-with-springboot-20lj"));