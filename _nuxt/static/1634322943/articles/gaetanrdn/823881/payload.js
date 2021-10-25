__NUXT_JSONP__("/articles/gaetanrdn/823881", (function(a,b,c,d,e){c.type_of="article";c.id=823881;c.title="Creating a New Angular Project";c.description="ANGULAR FOR EVERYONE: PART 00            How to create a new Angular project?     To be able...";c.readable_publish_date="Sep 15";c.slug="creating-a-new-angular-project-g5h";c.path="\u002Fgaetanrdn\u002Fcreating-a-new-angular-project-g5h";c.url="https:\u002F\u002Fdev.to\u002Fgaetanrdn\u002Fcreating-a-new-angular-project-g5h";c.comments_count=b;c.public_reactions_count=b;c.collection_id=a;c.published_timestamp=d;c.positive_reactions_count=b;c.cover_image=a;c.social_image="https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F823881.png";c.canonical_url="https:\u002F\u002Fmedium.com\u002F@redin.gaetan\u002Fangular-for-every-one-chapter-0-c234ce982187";c.created_at="2021-09-14T17:25:20Z";c.edited_at=a;c.crossposted_at=d;c.published_at=e;c.last_comment_at=e;c.reading_time_minutes=3;c.tag_list="angularcli, projects, creation, angular";c.tags=["angularcli","projects","creation","angular"];c.body_html="\u003Ch4\u003E\n  \u003Ca name=\"angular-for-everyone-part-00\" href=\"#angular-for-everyone-part-00\"\u003E\n  \u003C\u002Fa\u003E\n  ANGULAR FOR EVERYONE: PART 00\n\u003C\u002Fh4\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"how-to-create-a-new-angular-project\" href=\"#how-to-create-a-new-angular-project\"\u003E\n  \u003C\u002Fa\u003E\n  How to create a new Angular project?\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--dJATbWkf--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1%2ApuxEM436yWsEh8Qcj32O2Q.jpeg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--dJATbWkf--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1%2ApuxEM436yWsEh8Qcj32O2Q.jpeg\" alt=\"\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003ETo be able to code an Angular application, we need to install some tools before. I will try to define an easy guideline to follow.\u003C\u002Fp\u003E\n\n\u003Cp\u003EI use \u003Ca href=\"https:\u002F\u002Fwww.jetbrains.com\u002Ffr-fr\u002Fidea\u002F\"\u003EIntelliJ\u003C\u002Fa\u003E as IDE for professional developments, and sometimes I use \u003Ca href=\"https:\u002F\u002Fstackblitz.com\u002F\"\u003EStackBlitz\u003C\u002Fa\u003E, an online editor. Both simplified the project creation, and if you use it, you don’t need to follow the steps below. But maybe it could be interesting to have an overview of the installation process for an Angular project.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"step-1-nodejs-amp-npm\" href=\"#step-1-nodejs-amp-npm\"\u003E\n  \u003C\u002Fa\u003E\n  Step 1: Node.js &amp; npm\n\u003C\u002Fh3\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"method-1-classic-way\" href=\"#method-1-classic-way\"\u003E\n  \u003C\u002Fa\u003E\n  Method 1: Classic way\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003EFirst, we need to install \u003Cem\u003ENode.js\u003C\u002Fem\u003E. It is a JavaScript runtime that you can download \u003Ca href=\"https:\u002F\u002Fnodejs.org\u002Fen\u002Fdownload\u002F\"\u003Ehere\u003C\u002Fa\u003E. You should always prefer an active LTS version (which is required by Angular).\u003C\u002Fp\u003E\n\n\u003Cp\u003Enpm is provided when you install Node.js. To verify, you can run node -v and npm -v in a terminal, and you will see the current version for each one.\u003C\u002Fp\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"method-2-nvm\" href=\"#method-2-nvm\"\u003E\n  \u003C\u002Fa\u003E\n  Method 2: nvm\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003EI use this method. Why? Because I can work on several projects which don’t have the same version of Node.js. That isn’t very pleasant to handle which version of Node.js to use. Thanks to nvm, I can install all versions I want and just switch on the version I need.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnvm-sh\u002Fnvm\"\u003EHere\u003C\u002Fa\u003E is the official documentation.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"step-2-angularcli\" href=\"#step-2-angularcli\"\u003E\n  \u003C\u002Fa\u003E\n  Step 2: angular\u002Fcli\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EIn a terminal, just run this command: npm install -g \u003Ca href=\"http:\u002F\u002Ftwitter.com\u002Fangular\u002Fcli\"\u003E@angular\u002Fcli\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou will use it to create projects and generate code for your applications, libraries.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"step-3-create-a-new-project\" href=\"#step-3-create-a-new-project\"\u003E\n  \u003C\u002Fa\u003E\n  Step 3: create a new project\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EIn a terminal, you must run: ng new \u003C\u002Fp\u003E\n\n\u003Cp\u003EYou will be prompt for information about features to include in the initial app. If you are not sure about a feature, you can say no it will still be reversible later. I prefer not to include what I don’t need now, and it allows you to avoid dead code in your application. The list of features below (I said “Y” and then “CSS”):\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EWould you like to add Angular routing?\u003C\u002Fli\u003E\n\u003Cli\u003EWhich stylesheet format would you like to use? (CSS, SCSS, Sass, Less, Stylus)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EThat’s all your project is created and ready to be launched. Just run:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003Ecd \u003C\u002Fli\u003E\n\u003Cli\u003Eng serve — open\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EThat will open a window in your default browser with this URL: \u003Ca href=\"http:\u002F\u002Flocalhost:4200\u002F\"\u003Ehttp:\u002F\u002Flocalhost:4200\u002F\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--eQnn5cV---\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1%2Ah02VY94gw96oJUlVKoRUnw.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--eQnn5cV---\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1%2Ah02VY94gw96oJUlVKoRUnw.png\" alt=\"\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"bonus\" href=\"#bonus\"\u003E\n  \u003C\u002Fa\u003E\n  Bonus\n\u003C\u002Fh3\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"ng-new-options\" href=\"#ng-new-options\"\u003E\n  \u003C\u002Fa\u003E\n  ng new options\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003ESome options can help create your project and could avoid having some refactor later.\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E— minimal Create a workspace without any testing frameworks. As I’m sure you always test your code, I assume this can be used for learning purposes.\u003C\u002Fli\u003E\n\u003Cli\u003E— prefix The prefix to apply to generated selectors for the initial project. Default is “app.”\u003C\u002Fli\u003E\n\u003Cli\u003E— strict Enables stricter type checking and stricter bundle budgets settings. I recommend it.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EThere are a lot of others options described \u003Ca href=\"https:\u002F\u002Fangular.io\u002Fcli\u002Fnew\"\u003Ehere\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"i-made-a-mistake-and-i-wanted-scss-rather-than-css\" href=\"#i-made-a-mistake-and-i-wanted-scss-rather-than-css\"\u003E\n  \u003C\u002Fa\u003E\n  I made a mistake, and I wanted SCSS rather than CSS\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EDon’t worry, and it’s never too late. Run this command to update the schematics stylesheet option:\u003C\u002Fp\u003E\n\n\u003Cp\u003Eng config schematics.@schematics\u002Fangular:component.stylesheet SCSS\u003C\u002Fp\u003E\n\n\u003Cp\u003Eand think to rename your *.css files into *.scss. It would be best if you also renamed the reference of styles.css into angular.json.\u003C\u002Fp\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"angular-cli-commands-list\" href=\"#angular-cli-commands-list\"\u003E\n  \u003C\u002Fa\u003E\n  Angular CLI commands list.\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003E\u003Ca href=\"http:\u002F\u002Fng%20config%20schematics.@schematics\u002Fangular:component.stylesheet%20scss\"\u003EHere\u003C\u002Fa\u003E is the list of all CLI commands.\u003C\u002Fp\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"tslint-to-eslint\" href=\"#tslint-to-eslint\"\u003E\n  \u003C\u002Fa\u003E\n  tsLint to esLint\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003ERun the following commands:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003Eng add @angular-eslint\u002Fschematics\u003C\u002Fli\u003E\n\u003Cli\u003Eng g @angular-eslint\u002Fschematics:convert-tslint-to-eslint\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003ERemove the tslint.json file.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"conclusion\" href=\"#conclusion\"\u003E\n  \u003C\u002Fa\u003E\n  Conclusion\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EMost of the IDEs facilitate the creation of Angular projects now. But understanding this part and investigate it will make you better and help you make better decisions from the design of your projects.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf you have any questions, don’t hesitate. Thanks for reading.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"learn-more\" href=\"#learn-more\"\u003E\n  \u003C\u002Fa\u003E\n  Learn More\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Flink.medium.com\u002FSXPQgRn7xjb\"\u003EAngular for everyone: All about it\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n";c.body_markdown="---\ntitle: Creating a New Angular Project\npublished: true\ndate: 2021-08-21 12:31:27 UTC\ntags: angularcli,projects,creation,angular\ncanonical_url: https:\u002F\u002Fmedium.com\u002F@redin.gaetan\u002Fangular-for-every-one-chapter-0-c234ce982187\n---\n\n#### ANGULAR FOR EVERYONE: PART 00\n\n#### How to create a new Angular project?\n\n![](https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*puxEM436yWsEh8Qcj32O2Q.jpeg)\n\nTo be able to code an Angular application, we need to install some tools before. I will try to define an easy guideline to follow.\n\nI use [IntelliJ](https:\u002F\u002Fwww.jetbrains.com\u002Ffr-fr\u002Fidea\u002F) as IDE for professional developments, and sometimes I use [StackBlitz](https:\u002F\u002Fstackblitz.com\u002F), an online editor. Both simplified the project creation, and if you use it, you don’t need to follow the steps below. But maybe it could be interesting to have an overview of the installation process for an Angular project.\n\n### Step 1: Node.js & npm\n\n#### Method 1: Classic way\n\nFirst, we need to install _Node.js_. It is a JavaScript runtime that you can download [here](https:\u002F\u002Fnodejs.org\u002Fen\u002Fdownload\u002F). You should always prefer an active LTS version (which is required by Angular).\n\nnpm is provided when you install Node.js. To verify, you can run node -v and npm -v in a terminal, and you will see the current version for each one.\n\n#### Method 2: nvm\n\nI use this method. Why? Because I can work on several projects which don’t have the same version of Node.js. That isn’t very pleasant to handle which version of Node.js to use. Thanks to nvm, I can install all versions I want and just switch on the version I need.\n\n[Here](https:\u002F\u002Fgithub.com\u002Fnvm-sh\u002Fnvm) is the official documentation.\n\n### Step 2: angular\u002Fcli\n\nIn a terminal, just run this command: npm install -g [@angular\u002Fcli](http:\u002F\u002Ftwitter.com\u002Fangular\u002Fcli)\n\nYou will use it to create projects and generate code for your applications, libraries.\n\n### Step 3: create a new project\n\nIn a terminal, you must run: ng new \u003Capp\\_name\u003E\n\nYou will be prompt for information about features to include in the initial app. If you are not sure about a feature, you can say no it will still be reversible later. I prefer not to include what I don’t need now, and it allows you to avoid dead code in your application. The list of features below (I said “Y” and then “CSS”):\n\n- Would you like to add Angular routing?\n- Which stylesheet format would you like to use? (CSS, SCSS, Sass, Less, Stylus)\n\nThat’s all your project is created and ready to be launched. Just run:\n\n- cd \u003Capp\\_name\u003E\n- ng serve — open\n\nThat will open a window in your default browser with this URL: [http:\u002F\u002Flocalhost:4200\u002F](http:\u002F\u002Flocalhost:4200\u002F)\n\n![](https:\u002F\u002Fcdn-images-1.medium.com\u002Fmax\u002F1024\u002F1*h02VY94gw96oJUlVKoRUnw.png)\n\n### Bonus\n\n#### ng new options\n\nSome options can help create your project and could avoid having some refactor later.\n\n- — minimal Create a workspace without any testing frameworks. As I’m sure you always test your code, I assume this can be used for learning purposes.\n- — prefix The prefix to apply to generated selectors for the initial project. Default is “app.”\n- — strict Enables stricter type checking and stricter bundle budgets settings. I recommend it.\n\nThere are a lot of others options described [here](https:\u002F\u002Fangular.io\u002Fcli\u002Fnew).\n\n### I made a mistake, and I wanted SCSS rather than CSS\n\nDon’t worry, and it’s never too late. Run this command to update the schematics stylesheet option:\n\nng config schematics.@schematics\u002Fangular:component.stylesheet SCSS\n\nand think to rename your \\*.css files into \\*.scss. It would be best if you also renamed the reference of styles.css into angular.json.\n\n#### Angular CLI commands list.\n\n[Here](http:\u002F\u002Fng%20config%20schematics.@schematics\u002Fangular:component.stylesheet%20scss) is the list of all CLI commands.\n\n#### tsLint to esLint\n\nRun the following commands:\n\n- ng add @angular-eslint\u002Fschematics\n- ng g @angular-eslint\u002Fschematics:convert-tslint-to-eslint\n\nRemove the tslint.json file.\n\n### Conclusion\n\nMost of the IDEs facilitate the creation of Angular projects now. But understanding this part and investigate it will make you better and help you make better decisions from the design of your projects.\n\nIf you have any questions, don’t hesitate. Thanks for reading.\n\n### Learn More\n\n[Angular for everyone: All about it](https:\u002F\u002Flink.medium.com\u002FSXPQgRn7xjb)";c.user={name:"Gaëtan Redin",username:"gaetanrdn",twitter_username:a,github_username:"GaetanRdn",website_url:"https:\u002F\u002Flink.medium.com\u002Fxr9XcmXRfjb",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--ngRTkhli--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F698644\u002F86d52bec-6b19-4383-a838-1811b70e1fef.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--q5LUgIG8--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F698644\u002F86d52bec-6b19-4383-a838-1811b70e1fef.jpeg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}(null,0,{},"2021-09-15T13:34:03Z","2021-08-21T12:31:27Z")));