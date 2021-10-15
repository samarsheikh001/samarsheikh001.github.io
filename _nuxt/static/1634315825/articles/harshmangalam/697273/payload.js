__NUXT_JSONP__("/articles/harshmangalam/697273", (function(a,b,c,d,e,f){b.type_of="article";b.id=697273;b.title="Journey to the real world by cloning DEV.to backend server(part 4)";b.description="In the last series we have created our first server but we have not tested it in our machine locally....";b.readable_publish_date="May 13";b.slug="journey-to-the-real-world-by-cloning-dev-to-backend-server-part-4-1cb3";b.path="\u002Fharshmangalam\u002Fjourney-to-the-real-world-by-cloning-dev-to-backend-server-part-4-1cb3";b.url=c;b.comments_count=0;b.public_reactions_count=d;b.collection_id=12683;b.published_timestamp=a;b.positive_reactions_count=d;b.cover_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--EmxrP5D_--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Faw64dv01e8hfza0csy7j.png";b.social_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--SRgDEWYu--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Faw64dv01e8hfza0csy7j.png";b.canonical_url=c;b.created_at=a;b.edited_at="2021-05-13T16:32:14Z";b.crossposted_at=e;b.published_at=a;b.last_comment_at=a;b.reading_time_minutes=3;b.tag_list="node, apollo, express, prisma";b.tags=["node","apollo","express","prisma"];b.body_html="\u003Cp\u003E\u003Cstrong\u003EIn the last series we have created our first server but we have not tested it in our machine locally. so in this series we will work more on creating better project structure and much more with prisma\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003Eopen the \u003Ccode\u003Eprisma\u002Fschema.prisma\u003C\u002Fcode\u003E file and now lets create our User model which will represent our readers , admin and moderators of our platform\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003Edevblog_server\u002Fprisma\u002Fschema.prisma\u003C\u002Fcode\u003E\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Emodel User {\n  id             Int         @id @default(autoincrement())\n  email          String      @unique\n  name           String?\n  username       String      @unique\n  password       String\n  createdAt      DateTime    @default(now())\n  updatedAt      DateTime    @updatedAt\n  avatar                String?\n  bio                   String?\n  displayEmailOnProfile Boolean   @default(false)\n  location              Decimal[]\n  role                  UserRole  @default(USER)\n}\n\n\n\nenum UserRole {\n  USER \u002F\u002F normal reader \n  MODERTOR \u002F\u002F handle and verify posts\n  ADMIN \u002F\u002F handle USER and MODERATOR\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"explanation\" href=\"#explanation\"\u003E\n  \u003C\u002Fa\u003E\n  Explanation\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EAbove \u003Ccode\u003Eid\u003C\u002Fcode\u003E is our unique field and it will auto increment when a new row will be added hence we provided \u003Ccode\u003E@id\u003C\u002Fcode\u003E which tells it  a id field. \u003Ccode\u003E@default\u003C\u002Fcode\u003E is used to add default data during row creation we provided \u003Ccode\u003Eautoincrement()\u003C\u002Fcode\u003E which will increment by one when new row will be created.You can use \u003Ccode\u003Ecuid()\u003C\u002Fcode\u003E and \u003Ccode\u003Euuid()\u003C\u002Fcode\u003E for unique id creation. You can can learn more the difference between \u003Ccode\u003Euuid()\u003C\u002Fcode\u003E and \u003Ccode\u003Ecuid()\u003C\u002Fcode\u003E \u003Ca href=\"https:\u002F\u002Fhashnode.com\u002Fpost\u002Fwhat-is-the-difference-between-cuid-and-uuid-cilkdlykh005djz53hticmc58\"\u003Ehere\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003E@unique()\u003C\u002Fcode\u003E  provide a constraint validation for our schema that the no two row will have same data in field. In the above we provided \u003Ccode\u003Eemail\u003C\u002Fcode\u003E and \u003Ccode\u003Eusername\u003C\u002Fcode\u003E should be unique.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003Enow()\u003C\u002Fcode\u003E function return current DateTime hence we used this in createdAt field so that it will automatically populated with the DateTime when a new user will register in our platform\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003E@updatedAt\u003C\u002Fcode\u003E attribute will automatically provide the timestamp when our model will updated . In this way we can track the user when they have updated their profile.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003EInt\u003C\u002Fcode\u003E, \u003Ccode\u003EString\u003C\u002Fcode\u003E , \u003Ccode\u003EBoolean\u003C\u002Fcode\u003E , \u003Ccode\u003EDateTime\u003C\u002Fcode\u003E, \u003Ccode\u003EDecimal\u003C\u002Fcode\u003E are data types provided by prisma it map with data type of databases in background . Recent version of prisma provide capability to map native data type directly in prisma schema like @db.VarChar(255).\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003E?\u003C\u002Fcode\u003E it make the fields optional by default all fields are required.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003EDecimal[]\u003C\u002Fcode\u003E here we have stored coordinate of user lat and lng so that we can easily show user location on map.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAt last i have created \u003Ccode\u003Erole\u003C\u002Fcode\u003E field which will be an enum. \u003Cbr\u003E\nyou can read more about enum in prism \u003Ca href=\"https:\u002F\u002Fwww.prisma.io\u002Fdocs\u002Freference\u002Fapi-reference\u002Fprisma-schema-reference#enum\"\u003Ehere\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"now-we-will-apply-migrations-for-our-user-model\" href=\"#now-we-will-apply-migrations-for-our-user-model\"\u003E\n  \u003C\u002Fa\u003E\n  Now we will apply migrations for our user model.\n\u003C\u002Fh3\u003E\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Enpx prisma migrate dev --name user_model\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003E\u003Ccode\u003Edev\u003C\u002Fcode\u003E is compulsory if you are in development environment.\u003Cbr\u003E\nIt will create new \u003Ccode\u003Emigration\u003C\u002Fcode\u003E directory inside   \u003Ccode\u003Eprisma\u003C\u002Fcode\u003E  directory and there it will generate migration file and suffix with the user_model.\u003C\u002Fp\u003E\n\n\u003Cp\u003EWe have completed most of the stuff with prisma but the last things is we have not generated prisma client yet. When we will generate prisma client it will provide type for our model which helps to improve our development fast.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Enpx prisma generate\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"now-we-will-start-our-development-server-and-will-test-both-rest-endpoint-and-graphql-endpoints\" href=\"#now-we-will-start-our-development-server-and-will-test-both-rest-endpoint-and-graphql-endpoints\"\u003E\n  \u003C\u002Fa\u003E\n  Now we will start our development server and will test both REST endpoint and GraphQL endpoints\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EIf you have remembered we have imported prisma in context from \u003Ccode\u003Eprisma.js\u003C\u002Fcode\u003E but we have not created this file yet. Lets create this and import \u003Ccode\u003E@prisma\u002Fclient\u003C\u002Fcode\u003E here.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003Eprisma.js\u003C\u002Fcode\u003E\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Econst { PrismaClient } = require(\"@prisma\u002Fclient\");\n\nconst prisma = new PrismaClient();\n\nmodule.exports = prisma;\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EAbove i have imported @prisma\u002Fclient and created their install and export from this file so that our application can use only one instance of prisma client.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EI have talk about the downside of initialize more than one prisma client instance in previous post.Here we are safe because we have only one instance of prisma client which we will provide to context so that all resolvers will use this instance for db stuff.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"start-development-server\" href=\"#start-development-server\"\u003E\n  \u003C\u002Fa\u003E\n  Start development server\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ETo start development server we will setup nodemon in \u003Ccode\u003Epackage.json\u003C\u002Fcode\u003E so that we have not headed to start dev server again again on every change. Nodemon will do for us\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003Epackage.json\u003C\u002Fcode\u003E\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E{\n  \"name\": \"devblog_server\",\n  \"version\": \"1.0.0\",\n  \"main\": \"src\u002Fserver.js\",\n  \"license\": \"MIT\",\n  \"scripts\": {\n    \"start\": \"node src\u002Fserver.js\",\n    \"dev\": \"nodemon src\u002Fserver.js\"\n  },\n\n...\n}\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch4\u003E\n  \u003Ca name=\"now-start-server\" href=\"#now-start-server\"\u003E\n  \u003C\u002Fa\u003E\n  Now start server\n\u003C\u002Fh4\u003E\n\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Epnpm run dev\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EOpen your favourite browser and browse \u003Ccode\u003Ehttp:\u002F\u002Flocalhost:3000\u003C\u002Fcode\u003E will give you json response from express server and \u003Ccode\u003Ehttp:\u002F\u002Flocalhost:3000\u002Fgraphql\u003C\u002Fcode\u003E will open graphql playground provided by apollo server\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003Ewrite first query\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E{\n   hello\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--2HxT5VMl--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fbzlgtzmvztq2n6ioa6kz.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--2HxT5VMl--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fbzlgtzmvztq2n6ioa6kz.png\" alt=\"Alt Text\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003Ethis will resolve hello query and you will get results in right section.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EIn our next post we will implement authentication in graphql server and we will see how we will secure our api with JWT  token authentication\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n";b.body_markdown="**In the last series we have created our first server but we have not tested it in our machine locally. so in this series we will work more on creating better project structure and much more with prisma**\n\n\nopen the `prisma\u002Fschema.prisma` file and now lets create our User model which will represent our readers , admin and moderators of our platform\n\n\n`devblog_server\u002Fprisma\u002Fschema.prisma`\n```\nmodel User {\n  id             Int         @id @default(autoincrement())\n  email          String      @unique\n  name           String?\n  username       String      @unique\n  password       String\n  createdAt      DateTime    @default(now())\n  updatedAt      DateTime    @updatedAt\n  avatar                String?\n  bio                   String?\n  displayEmailOnProfile Boolean   @default(false)\n  location              Decimal[]\n  role                  UserRole  @default(USER)\n}\n\n\n\nenum UserRole {\n  USER \u002F\u002F normal reader \n  MODERTOR \u002F\u002F handle and verify posts\n  ADMIN \u002F\u002F handle USER and MODERATOR\n}\n```\n\n### Explanation\n\nAbove `id` is our unique field and it will auto increment when a new row will be added hence we provided `@id` which tells it  a id field. `@default` is used to add default data during row creation we provided `autoincrement()` which will increment by one when new row will be created.You can use `cuid()` and `uuid()` for unique id creation. You can can learn more the difference between `uuid()` and `cuid()` [here](https:\u002F\u002Fhashnode.com\u002Fpost\u002Fwhat-is-the-difference-between-cuid-and-uuid-cilkdlykh005djz53hticmc58).\n\n`@unique()`  provide a constraint validation for our schema that the no two row will have same data in field. In the above we provided `email` and `username` should be unique.\n\n`now()` function return current DateTime hence we used this in createdAt field so that it will automatically populated with the DateTime when a new user will register in our platform\n\n`@updatedAt` attribute will automatically provide the timestamp when our model will updated . In this way we can track the user when they have updated their profile.\n\n`Int`, `String` , `Boolean` , `DateTime`, `Decimal` are data types provided by prisma it map with data type of databases in background . Recent version of prisma provide capability to map native data type directly in prisma schema like @db.VarChar(255).\n\n`?` it make the fields optional by default all fields are required.\n\n`Decimal[]` here we have stored coordinate of user lat and lng so that we can easily show user location on map.\n\nAt last i have created `role` field which will be an enum. \nyou can read more about enum in prism [here](https:\u002F\u002Fwww.prisma.io\u002Fdocs\u002Freference\u002Fapi-reference\u002Fprisma-schema-reference#enum).\n\n### Now we will apply migrations for our user model.\n\n```\nnpx prisma migrate dev --name user_model\n```\n\n`dev` is compulsory if you are in development environment.\nIt will create new `migration` directory inside   `prisma `  directory and there it will generate migration file and suffix with the user_model.\n\nWe have completed most of the stuff with prisma but the last things is we have not generated prisma client yet. When we will generate prisma client it will provide type for our model which helps to improve our development fast.\n\n```\nnpx prisma generate\n```\n### Now we will start our development server and will test both REST endpoint and GraphQL endpoints\n\nIf you have remembered we have imported prisma in context from `prisma.js` but we have not created this file yet. Lets create this and import `@prisma\u002Fclient` here.\n\n\n`prisma.js`\n\n```\nconst { PrismaClient } = require(\"@prisma\u002Fclient\");\n\nconst prisma = new PrismaClient();\n\nmodule.exports = prisma;\n\n```\n\nAbove i have imported @prisma\u002Fclient and created their install and export from this file so that our application can use only one instance of prisma client.\n\n\u003E I have talk about the downside of initialize more than one prisma client instance in previous post.Here we are safe because we have only one instance of prisma client which we will provide to context so that all resolvers will use this instance for db stuff.\n\n\n\n## Start development server\n\nTo start development server we will setup nodemon in `package.json` so that we have not headed to start dev server again again on every change. Nodemon will do for us\n\n`package.json`\n\n```\n{\n  \"name\": \"devblog_server\",\n  \"version\": \"1.0.0\",\n  \"main\": \"src\u002Fserver.js\",\n  \"license\": \"MIT\",\n  \"scripts\": {\n    \"start\": \"node src\u002Fserver.js\",\n    \"dev\": \"nodemon src\u002Fserver.js\"\n  },\n \n...\n}\n\n```\n\n####Now start server\n\n\n```\npnpm run dev\n\n```\n\nOpen your favourite browser and browse `http:\u002F\u002Flocalhost:3000` will give you json response from express server and `http:\u002F\u002Flocalhost:3000\u002Fgraphql` will open graphql playground provided by apollo server\n\n**write first query**\n\n```\n{\n   hello\n}\n```\n\n![Alt Text](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fbzlgtzmvztq2n6ioa6kz.png)\n\nthis will resolve hello query and you will get results in right section.\n\n\u003E In our next post we will implement authentication in graphql server and we will see how we will secure our api with JWT  token authentication\n\n\n\n\n\n\n\n\n\n\n\n\n";b.user={name:"Harsh Mangalam",username:f,twitter_username:"HarshMangalam6",github_username:f,website_url:e,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--XBBpsCAU--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F366422\u002F8842954e-6181-4377-ac14-56e6f0942c27.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--yUI4CTlm--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F366422\u002F8842954e-6181-4377-ac14-56e6f0942c27.jpeg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:b}},mutations:[["SET_CURRENT_ARTICLE",b]]}}("2021-05-13T15:10:36Z",{},"https:\u002F\u002Fdev.to\u002Fharshmangalam\u002Fjourney-to-the-real-world-by-cloning-dev-to-backend-server-part-4-1cb3",6,null,"harshmangalam")));