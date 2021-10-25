window.__NUXT__=(function(a,b,c,d){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:784798,title:"Deploying Wagtail site on Digital Ocean",description:"I have been rebuilding my PHP-based site using Django-based CMS Wagtail. The Wagtail part ended up...",readable_publish_date:"Aug 11",slug:"deploying-wagtail-site-on-digital-ocean-9ec",path:"\u002Famychan331\u002Fdeploying-wagtail-site-on-digital-ocean-9ec",url:"https:\u002F\u002Fdev.to\u002Famychan331\u002Fdeploying-wagtail-site-on-digital-ocean-9ec",comments_count:0,public_reactions_count:b,collection_id:a,published_timestamp:c,positive_reactions_count:b,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--YLIe3u_x--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fjfdjjgs3e1qf0gjhrtv4.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--JjryK4cK--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fjfdjjgs3e1qf0gjhrtv4.png",canonical_url:"https:\u002F\u002Fwww.craftplustech.com\u002Fblog\u002Fdeploying-wagtail-site-on-digital-ocean\u002F",created_at:"2021-08-08T00:30:57Z",edited_at:"2021-08-11T09:29:20Z",crossposted_at:a,published_at:c,last_comment_at:c,reading_time_minutes:b,tag_list:"wagtail, digitalocean, ngnix, python",tags:["wagtail","digitalocean","ngnix","python"],body_html:"\u003Cp\u003EI have been rebuilding my PHP-based site using Django-based CMS Wagtail. The Wagtail part ended up being the easy part. Deployment, however, was another animal on its own.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"deployment-on-existing-hosting\" href=\"#deployment-on-existing-hosting\"\u003E\n  \u003C\u002Fa\u003E\n  Deployment on Existing Hosting\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EMy old site was on A2 Hosting's shared hosting environment. Their price was good, with reliable service and support. In fact, when I encountered issues trying to host a Django project - and their doc clearly stated that Django is not actually supported - they still tried to help me.\u003Cbr\u003E\nAnd it did worked! I hosted the Django site successfully... I just can't get Wagtail to load static files correctly.\u003Cbr\u003E\nThe issue, as I eventually realized, is that I need to make some changes to some of the configurations - and those are configurations NOT accessible through shared hosting. This is clearly not a fitting use of shared hosting. So, after some research, I decided to say farewell to A2 Hosting.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"deployment-on-digital-ocean-setting-up-and-the-problem\" href=\"#deployment-on-digital-ocean-setting-up-and-the-problem\"\u003E\n  \u003C\u002Fa\u003E\n  Deployment on Digital Ocean: Setting Up... And The Problem\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EDigital Ocean provides various documentations to make the whole process easier. I mainly followed two:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fwww.digitalocean.com\u002Fcommunity\u002Ftutorials\u002Fhow-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04#configure-nginx-to-proxy-pass-to-gunicorn\"\u003EHow To Set Up Django with Postgres, Nginx, and Gunicorn on Ubuntu 18.04\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fwww.digitalocean.com\u002Fcommunity\u002Ftutorials\u002Fhow-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04\"\u003EHow To Secure Nginx with Let's Encrypt on Ubuntu 20.04\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003ETo be sure that the basic setup was done correctly, I started with a clean, untouched Django project. Unfortunately, the site itself doesn't load. In addition, when I try to obtain a SSL certificate, I keep getting this little error:\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003ETo fix these errors, please make sure that your domain name was entered correctly and the DNS A\u002FAAAA record(s) for that domain contain(s) the right IP address\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EI know I already setup the domain, and it was correctly. I even redo it again just in case I missed a step or two. To my frustration, I have to wait 72 hour both time to make sure it wasn't a simple propagation issue. It was not.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"deployment-on-digital-ocean-the-missing-notes\" href=\"#deployment-on-digital-ocean-the-missing-notes\"\u003E\n  \u003C\u002Fa\u003E\n  Deployment on Digital Ocean: The Missing Notes\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EI did eventually resolved all the issues I encountered. Here are the solutions I found, and I hope they will help those new to hosting Django on Digital Ocean who are encountering similar issues:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EThe docs talked about opening firewall via ufw command, but you have to open it in the Digital Ocean dashboard too! Go to Networking -&gt; Firewall. Make sure inbound rules for HTTP\u002FHTTPS actually exist.\u003C\u002Fli\u003E\n\u003Cli\u003EThe site is now loading... but getting error messages! When I reading the gunicorn journal logs (use command \u003Ccode\u003Esudo journalctl -u gunicorn -r\u003C\u002Fcode\u003E), I learned that my environment variables are not being found in the wsgi.py file. Eventually, I find a post about the issue in StackOverflow here: \u003Ca href=\"https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F38178836\u002Fdjango-settings-secret-key-environment-variable-502-nginx\"\u003Ehttps:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F38178836\u002Fdjango-settings-secret-key-environment-variable-502-nginx\u003C\u002Fa\u003E . Basically, for Nginx, I can set up my env variable for settings-related files inside gunicorn.service file instead.\u003C\u002Fli\u003E\n\u003Cli\u003E The Django site was loading, but the stylesheet wasn't updating when I made changes. To jumpstart the changes, I did:\n\u003Ccode\u003Epython manage.py collectstatic --noinput --clear\u003C\u002Fcode\u003E and\n\u003Ccode\u003Esudo systemctl restart gunicorn\u003C\u002Fcode\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EWhen I tested the contact form, no email was sent. I needed to use ufw and update \u002Fetc\u002Fnginx\u002Fsites-available\u002Fwebsite.com for tcp port of outgoing email (587\u002Ftcp).\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n",body_markdown:"I have been rebuilding my PHP-based site using Django-based CMS Wagtail. The Wagtail part ended up being the easy part. Deployment, however, was another animal on its own.\n\n## Deployment on Existing Hosting\nMy old site was on A2 Hosting's shared hosting environment. Their price was good, with reliable service and support. In fact, when I encountered issues trying to host a Django project - and their doc clearly stated that Django is not actually supported - they still tried to help me.\nAnd it did worked! I hosted the Django site successfully... I just can't get Wagtail to load static files correctly.\nThe issue, as I eventually realized, is that I need to make some changes to some of the configurations - and those are configurations NOT accessible through shared hosting. This is clearly not a fitting use of shared hosting. So, after some research, I decided to say farewell to A2 Hosting.\n\n## Deployment on Digital Ocean: Setting Up... And The Problem\nDigital Ocean provides various documentations to make the whole process easier. I mainly followed two:\n\n- [How To Set Up Django with Postgres, Nginx, and Gunicorn on Ubuntu 18.04](https:\u002F\u002Fwww.digitalocean.com\u002Fcommunity\u002Ftutorials\u002Fhow-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04#configure-nginx-to-proxy-pass-to-gunicorn)\n- [How To Secure Nginx with Let's Encrypt on Ubuntu 20.04](https:\u002F\u002Fwww.digitalocean.com\u002Fcommunity\u002Ftutorials\u002Fhow-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)\n\nTo be sure that the basic setup was done correctly, I started with a clean, untouched Django project. Unfortunately, the site itself doesn't load. In addition, when I try to obtain a SSL certificate, I keep getting this little error:\n\n\u003E To fix these errors, please make sure that your domain name was entered correctly and the DNS A\u002FAAAA record(s) for that domain contain(s) the right IP address\n\nI know I already setup the domain, and it was correctly. I even redo it again just in case I missed a step or two. To my frustration, I have to wait 72 hour both time to make sure it wasn't a simple propagation issue. It was not.\n\n## Deployment on Digital Ocean: The Missing Notes\nI did eventually resolved all the issues I encountered. Here are the solutions I found, and I hope they will help those new to hosting Django on Digital Ocean who are encountering similar issues:\n- The docs talked about opening firewall via ufw command, but you have to open it in the Digital Ocean dashboard too! Go to Networking -\u003E Firewall. Make sure inbound rules for HTTP\u002FHTTPS actually exist.\n- The site is now loading... but getting error messages! When I reading the gunicorn journal logs (use command `sudo journalctl -u gunicorn -r`), I learned that my environment variables are not being found in the wsgi.py file. Eventually, I find a post about the issue in StackOverflow here: https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F38178836\u002Fdjango-settings-secret-key-environment-variable-502-nginx . Basically, for Nginx, I can set up my env variable for settings-related files inside gunicorn.service file instead.\n-  The Django site was loading, but the stylesheet wasn't updating when I made changes. To jumpstart the changes, I did:\n`python manage.py collectstatic --noinput --clear` and\n`sudo systemctl restart gunicorn`\n- When I tested the contact form, no email was sent. I needed to use ufw and update \u002Fetc\u002Fnginx\u002Fsites-available\u002Fwebsite.com for tcp port of outgoing email (587\u002Ftcp).",user:{name:"Amy Chan",username:d,twitter_username:"CraftPlusTech",github_username:d,website_url:"https:\u002F\u002Fcraftplustech.com",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--VSwushya--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F553623\u002Fe47932a7-a2e7-4960-a0cc-370472f52176.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--DPtgvihv--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F553623\u002Fe47932a7-a2e7-4960-a0cc-370472f52176.jpeg"}}},serverRendered:true,routePath:"\u002Farticles\u002Famychan331\u002F784798",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,3,"2021-08-11T05:53:44Z","amychan331"));