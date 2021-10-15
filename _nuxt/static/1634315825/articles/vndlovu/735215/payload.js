__NUXT_JSONP__("/articles/vndlovu/735215", (function(a,b,c,d,e){c.type_of="article";c.id=735215;c.title="How to connect and use two different networks simultaneously on Windows";c.description="At the time of writing this, I am getting ready to give a live talk at a Python meetup. The talk will...";c.readable_publish_date="Jun 22";c.slug="how-to-connect-and-use-two-different-networks-simultaneously-on-windows-4oli";c.path="\u002Fvndlovu\u002Fhow-to-connect-and-use-two-different-networks-simultaneously-on-windows-4oli";c.url="https:\u002F\u002Fdev.to\u002Fvndlovu\u002Fhow-to-connect-and-use-two-different-networks-simultaneously-on-windows-4oli";c.comments_count=b;c.public_reactions_count=b;c.collection_id=a;c.published_timestamp=d;c.positive_reactions_count=b;c.cover_image=a;c.social_image="https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F735215.png";c.canonical_url="https:\u002F\u002Fvuyisile.com\u002Fhow-to-connect-and-use-two-different-networks-simultaneously-on-windows\u002F";c.created_at="2021-06-22T05:09:22Z";c.edited_at=a;c.crossposted_at=d;c.published_at=e;c.last_comment_at=e;c.reading_time_minutes=3;c.tag_list="tech, connection, ipv4, metric";c.tags=["tech","connection","ipv4","metric"];c.body_html="\u003Cp\u003EAt the time of writing this, I am getting ready to give a live talk at a Python meetup. The talk will feature a live demo of my \u003Ca href=\"https:\u002F\u002Fvuyisile.com\u002Fpypi-in-a-box-using-a-raspberry-pi-as-a-portable-pypi-server\u002F\"\u003EPyPi in a Box project\u003C\u002Fa\u003E. To do the demo, I’ll need to be connected to the Internet in order to stream my talk and also be able to SSH into the PyPi server which is not accessible via the internet and is on it’s own network.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe PyPi server is a raspberry pi that creates a stand alone wifi network. When I connect to it, my computer is assigned an IP address. I also tether my phone using a USB cable to my computer to access the phone’s 4G network. The phone also assigns my computer an IP address. Connecting to these two networks makes it difficult to use them simultaneously because Windows will always prefer one over the other. In this post I’ll show you what I did to enable me to use both connections at the same time.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn Windows, each network interface receives a priority value automatically based on its network metric. This works well in most cases, for example if you connect to an Ethernet network and a WiFi network at the same time, Windows will almost always prefer the Ethernet network as it is likely to perform better than the WiFi connection.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn my case, the automatic metric isn’t something I wanted so I set the priority of the adapters manually in the Control Panel. Here’s how to do it:\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003EOpen \u003Cstrong\u003ESettings\u003C\u002Fstrong\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EClick on \u003Cstrong\u003ENetwork &amp; Internet\u003C\u002Fstrong\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EClick on \u003Cstrong\u003EStatus\u003C\u002Fstrong\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EClick “ \u003Cstrong\u003EChange Adapter options\u003C\u002Fstrong\u003E “\u003C\u002Fli\u003E\n\u003Cli\u003ERight click the network adapter you want to change priority for and select its \u003Cstrong\u003EProperties\u003C\u002Fstrong\u003E :\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--sIe0J31G--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi2.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fadapter.png%3Fresize%3D632.4%252C494%26ssl%3D1\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--sIe0J31G--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi2.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fadapter.png%3Fresize%3D632.4%252C494%26ssl%3D1\" alt=\"\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003ESelect \u003Cstrong\u003EInternet Protocol Version 4 (TCP\u002FIPv4)\u003C\u002Fstrong\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--QgNb8PAA--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi1.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fipv4_settings.jpg%3Fresize%3D365%252C472\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--QgNb8PAA--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi1.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fipv4_settings.jpg%3Fresize%3D365%252C472\" alt=\"ipv4 settings\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003EClick on the \u003Cstrong\u003EProperties\u003C\u002Fstrong\u003E button.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_Ne_QunW--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi1.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fipv4_properties.jpg%3Fresize%3D405%252C459\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_Ne_QunW--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi1.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fipv4_properties.jpg%3Fresize%3D405%252C459\" alt=\"\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003EClick \u003Cstrong\u003EAdvanced\u003C\u002Fstrong\u003E. In this section, uncheck the box that says \u003Cstrong\u003EAutomatic metric\u003C\u002Fstrong\u003E and enter a number in the Interface metric box.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--cIZaoeLB--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi0.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fadvanced_metrics.jpg%3Fresize%3D405%252C496\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--cIZaoeLB--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi0.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fadvanced_metrics.jpg%3Fresize%3D405%252C496\" alt=\"\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe number you enter here is the priority of the network interface, the lower the number, the higher the priority. A high number means low priority.\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003EClick OK to save this dialog and the one that comes after it. Repeat the steps above for any other network adapters you need to configure. In my case, I gave the WiFi adapter a higher priority than the adapter used for Internet. This means that Windows will attempt to use that connection first to reach hosts and if it fails, it switches over to the second connection.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"conclusion\" href=\"#conclusion\"\u003E\n  \u003C\u002Fa\u003E\n  Conclusion\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EThis method of configuring your network adapters is the easiest I found and it doesn’t involve using the command prompt or setting up routes for each adapter. It is pretty easy to undo as well as all you have to do to undo is to check the Automatic metric box in Advanced TCP\u002FIP settings again.\u003C\u002Fp\u003E\n\n";c.body_markdown="---\ntitle: How to connect and use two different networks simultaneously on Windows\npublished: true\ndate: 2020-11-17 06:00:56 UTC\ntags: Tech,connection,ipv4,metric\ncanonical_url: https:\u002F\u002Fvuyisile.com\u002Fhow-to-connect-and-use-two-different-networks-simultaneously-on-windows\u002F\n---\n\nAt the time of writing this, I am getting ready to give a live talk at a Python meetup. The talk will feature a live demo of my [PyPi in a Box project](https:\u002F\u002Fvuyisile.com\u002Fpypi-in-a-box-using-a-raspberry-pi-as-a-portable-pypi-server\u002F). To do the demo, I’ll need to be connected to the Internet in order to stream my talk and also be able to SSH into the PyPi server which is not accessible via the internet and is on it’s own network.\n\nThe PyPi server is a raspberry pi that creates a stand alone wifi network. When I connect to it, my computer is assigned an IP address. I also tether my phone using a USB cable to my computer to access the phone’s 4G network. The phone also assigns my computer an IP address. Connecting to these two networks makes it difficult to use them simultaneously because Windows will always prefer one over the other. In this post I’ll show you what I did to enable me to use both connections at the same time.\n\nIn Windows, each network interface receives a priority value automatically based on its network metric. This works well in most cases, for example if you connect to an Ethernet network and a WiFi network at the same time, Windows will almost always prefer the Ethernet network as it is likely to perform better than the WiFi connection.\n\nIn my case, the automatic metric isn’t something I wanted so I set the priority of the adapters manually in the Control Panel. Here’s how to do it:\n\n1. Open **Settings**\n2. Click on **Network & Internet**\n3. Click on **Status**\n4. Click “ **Change Adapter options** “\n5. Right click the network adapter you want to change priority for and select its **Properties** :  \n\n![](https:\u002F\u002Fi2.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fadapter.png?resize=632.4%2C494&ssl=1)\n\n6. Select **Internet Protocol Version 4 (TCP\u002FIPv4)**\n\n![ipv4 settings](https:\u002F\u002Fi1.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fipv4_settings.jpg?resize=365%2C472)\n\n7. Click on the **Properties** button.\n\n![](https:\u002F\u002Fi1.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fipv4_properties.jpg?resize=405%2C459)\n\n8. Click **Advanced**. In this section, uncheck the box that says **Automatic metric** and enter a number in the Interface metric box.\n\n![](https:\u002F\u002Fi0.wp.com\u002Fvuyisile.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fadvanced_metrics.jpg?resize=405%2C496)\n\nThe number you enter here is the priority of the network interface, the lower the number, the higher the priority. A high number means low priority.\n\n9. Click OK to save this dialog and the one that comes after it. Repeat the steps above for any other network adapters you need to configure. In my case, I gave the WiFi adapter a higher priority than the adapter used for Internet. This means that Windows will attempt to use that connection first to reach hosts and if it fails, it switches over to the second connection.\n\n### Conclusion\n\nThis method of configuring your network adapters is the easiest I found and it doesn’t involve using the command prompt or setting up routes for each adapter. It is pretty easy to undo as well as all you have to do to undo is to check the Automatic metric box in Advanced TCP\u002FIP settings again.";c.user={name:"Vuyisile Ndlovu",username:"vndlovu",twitter_username:a,github_username:"terrameijar",website_url:"https:\u002F\u002Fvuyisile.com",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--esTL2IoX--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F631893\u002F5b472209-723c-444b-9e89-f4a0ffa937fb.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--y3FI-kvG--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F631893\u002F5b472209-723c-444b-9e89-f4a0ffa937fb.jpeg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}(null,0,{},"2021-06-22T05:42:41Z","2020-11-17T06:00:56Z")));