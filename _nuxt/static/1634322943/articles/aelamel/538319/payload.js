__NUXT_JSONP__("/articles/aelamel/538319", (function(a,b,c,d,e,f){c.type_of="article";c.id=538319;c.title="[Symfony]: Empty token storage when injecting service in an event listener";c.description="Another Symfony mistery  You might have been struggling to fetch the logged-in user from a listener t...";c.readable_publish_date="Dec 10 '20";c.slug="symfony-empty-token-storage-when-injecting-service-in-an-event-listener-4fh7";c.path="\u002Faelamel\u002Fsymfony-empty-token-storage-when-injecting-service-in-an-event-listener-4fh7";c.url=d;c.comments_count=0;c.public_reactions_count=e;c.collection_id=a;c.published_timestamp=b;c.positive_reactions_count=e;c.cover_image=a;c.social_image="https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F538319.png";c.canonical_url=d;c.created_at=b;c.edited_at=a;c.crossposted_at=a;c.published_at=b;c.last_comment_at=b;c.reading_time_minutes=2;c.tag_list="symfony, dependencyinjection, php";c.tags=["symfony","dependencyinjection","php"];c.body_html="\u003Cp\u003EAnother Symfony mistery\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou might have been struggling to fetch the logged-in user from a listener that includes a UserService class which contains the logic of fetching the logged-in user.\u003C\u002Fp\u003E\n\n\u003Cp\u003ELet's take the below code as an example:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E\u002F\u002FUserService.php\n\n&lt;?php\n\nnamespace App\\Service;\nuse Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface;\n\n\nclass UserService {\n\n  private $tokenStorage;\n\n  private $currentUser;\n\n  \u002F**\n  * @required\n  *\u002F\n  public function setSecurityContext(TokenStorageInterface $tokenStorage) {\n    $token = $tokenStorage-&gt;getToken();\n    if ($token) {\n      $this-&gt;currentUser = $token-&gt;getUser();\n    }\n  }\n\n  public function getCurrentUser() {\n    return $this-&gt;currentUser;\n  }\n}\n\n?&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E\u002F\u002FMyListner\n\n&lt;?php\nnamespace App\\Listener;\nuse Doctrine\\Persistence\\Event\\LifecycleEventArgs;\n\nclass MyListener {\n\n  private $userService;\n\n  public function __construct(UserService $userService) {\n    $this-&gt;userService = $userService;\n  }\n\n  public function onFlush(LifecycleEventArgs $args) {\n\n    $currentUser = $this-&gt;userService-&gt;getCurrentUser();\n\n    var_dump($currentUser); \u002F\u002F prints NULL\n  }\n\n}\n?&gt;\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EWhy the currentUser is NULL ?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe answer: Doctrine listeners are called whenever a corresponding event occurs. Initialization of them may occur before the security context.\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou have two options here:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EThe first one\u003C\u002Fstrong\u003E: inject your TokenStorage directly in your Listener and retrieve the token inside your event handler.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E\u002F\u002FMyListner\n\n&lt;?php\nnamespace App\\Listener;\nuse Doctrine\\Persistence\\Event\\LifecycleEventArgs;\nuse Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface;\n\n\nclass MyListener {\n\n  private $tokenStorage;\n\n  public function __construct(TokenStorageInterface $tokenStorage) {\n    $this-&gt;tokenStorage = $tokenStorage;\n  }\n\n  public function onFlush(LifecycleEventArgs $args) {\n\n    $currentUser = $this-&gt;tokenStorage-&gt;getToken()-&gt;getUser();\n\n    var_dump($currentUser); \u002F\u002F prints a UserInterface object\n  }\n\n}\n?&gt;\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EThe second one\u003C\u002Fstrong\u003E: Fetch the token inside the \u003Ccode\u003EgetCurrentUser\u003C\u002Fcode\u003E method.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E\u002F\u002FUserService.php\n\n&lt;?php\n\nnamespace App\\Service;\n\nuse Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface;\n\nclass UserService {\n\n  private $tokenStorage;\n\n  private $currentUser;\n\n  public function __construct(TokenStorageInterface $tokenStorage) {\n    $this-&gt;tokenStorage = $tokenStorage;\n  }\n\n\n  public function getCurrentUser(TokenStorageInterface $tokenStorage) {\n    $token = $tokenStorage-&gt;getToken();\n    if ($token &amp;&amp; is_null($this-&gt;currentUser)) {\n      $this-&gt;currentUser = $token-&gt;getUser();\n    }\n\n    return $this-&gt;currentUser;\n  }\n\n}\n\n?&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThe hidden trick is that you have to call the \u003Ccode\u003EgetToken\u003C\u002Fcode\u003E method in order to get a fresh token.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThat was it, I hope this blog post was helpful.\u003C\u002Fp\u003E\n\n\u003Cp\u003ECheers\u003C\u002Fp\u003E\n\n";c.body_markdown="Another Symfony mistery\n\nYou might have been struggling to fetch the logged-in user from a listener that includes a UserService class which contains the logic of fetching the logged-in user.\n\nLet's take the below code as an example:\n\n```\n\u002F\u002FUserService.php\n\n\u003C?php\n\nnamespace App\\Service;\nuse Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface;\n\n\nclass UserService {\n\n  private $tokenStorage;\n\n  private $currentUser;\n\n  \u002F**\n  * @required\n  *\u002F\n  public function setSecurityContext(TokenStorageInterface $tokenStorage) {\n    $token = $tokenStorage-\u003EgetToken();\n    if ($token) {\n      $this-\u003EcurrentUser = $token-\u003EgetUser();\n    }\n  }\n\n  public function getCurrentUser() {\n    return $this-\u003EcurrentUser;\n  }\n}\n\n?\u003E\n```\n\n\n```\n\u002F\u002FMyListner\n\n\u003C?php\nnamespace App\\Listener;\nuse Doctrine\\Persistence\\Event\\LifecycleEventArgs;\n\nclass MyListener {\n\n  private $userService;\n\n  public function __construct(UserService $userService) {\n    $this-\u003EuserService = $userService;\n  }\n\n  public function onFlush(LifecycleEventArgs $args) {\n\n    $currentUser = $this-\u003EuserService-\u003EgetCurrentUser();\n\n    var_dump($currentUser); \u002F\u002F prints NULL\n  }\n\n}\n?\u003E\n\n```\n\n**Why the currentUser is NULL ?**\n\nThe answer: Doctrine listeners are called whenever a corresponding event occurs. Initialization of them may occur before the security context.\n\nYou have two options here:\n\n**The first one**: inject your TokenStorage directly in your Listener and retrieve the token inside your event handler.\n\n\n```\n\u002F\u002FMyListner\n\n\u003C?php\nnamespace App\\Listener;\nuse Doctrine\\Persistence\\Event\\LifecycleEventArgs;\nuse Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface;\n\n\nclass MyListener {\n\n  private $tokenStorage;\n\n  public function __construct(TokenStorageInterface $tokenStorage) {\n    $this-\u003EtokenStorage = $tokenStorage;\n  }\n\n  public function onFlush(LifecycleEventArgs $args) {\n\n    $currentUser = $this-\u003EtokenStorage-\u003EgetToken()-\u003EgetUser();\n\n    var_dump($currentUser); \u002F\u002F prints a UserInterface object\n  }\n\n}\n?\u003E\n\n```\n\n**The second one**: Fetch the token inside the `getCurrentUser` method.\n\n\n```\n\u002F\u002FUserService.php\n\n\u003C?php\n\nnamespace App\\Service;\n\nuse Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface;\n\nclass UserService {\n\n  private $tokenStorage;\n\n  private $currentUser;\n\n  public function __construct(TokenStorageInterface $tokenStorage) {\n    $this-\u003EtokenStorage = $tokenStorage;\n  }\n\n\n  public function getCurrentUser(TokenStorageInterface $tokenStorage) {\n    $token = $tokenStorage-\u003EgetToken();\n    if ($token && is_null($this-\u003EcurrentUser)) {\n      $this-\u003EcurrentUser = $token-\u003EgetUser();\n    }\n\n    return $this-\u003EcurrentUser;\n  }\n\n}\n\n?\u003E\n```\n\nThe hidden trick is that you have to call the `getToken` method in order to get a fresh token.\n\n\nThat was it, I hope this blog post was helpful.\n\nCheers\n\n";c.user={name:"Abdelkarim ELAMEL",username:f,twitter_username:a,github_username:f,website_url:"https:\u002F\u002Ftechyard.netlify.app\u002F",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--vOUBAZgk--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F537637\u002F8e90230c-655d-46ba-a6e0-35a63e2f1800.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--kadN8JER--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F537637\u002F8e90230c-655d-46ba-a6e0-35a63e2f1800.png"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}(null,"2020-12-10T09:38:22Z",{},"https:\u002F\u002Fdev.to\u002Faelamel\u002Fsymfony-empty-token-storage-when-injecting-service-in-an-event-listener-4fh7",11,"aelamel")));