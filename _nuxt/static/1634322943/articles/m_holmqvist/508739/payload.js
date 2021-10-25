__NUXT_JSONP__("/articles/m_holmqvist/508739", (function(a,b,c,d,e){b.type_of="article";b.id=508739;b.title="What are Domain Events?";b.description="What is an Event?   An event in the context of software development is something that happen...";b.readable_publish_date="Nov 7 '20";b.slug="what-are-domain-events-6d6";b.path="\u002Fm_holmqvist\u002Fwhat-are-domain-events-6d6";b.url="https:\u002F\u002Fdev.to\u002Fm_holmqvist\u002Fwhat-are-domain-events-6d6";b.comments_count=3;b.public_reactions_count=c;b.collection_id=9583;b.published_timestamp=d;b.positive_reactions_count=c;b.cover_image=a;b.social_image="https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F508739.png";b.canonical_url="https:\u002F\u002Fserialized.io\u002Fddd\u002Fdomain-event";b.created_at="2020-11-07T09:34:38Z";b.edited_at="2020-11-07T09:50:41Z";b.crossposted_at=a;b.published_at=d;b.last_comment_at="2020-11-10T14:38:29Z";b.reading_time_minutes=8;b.tag_list="ddd, eventdriven, eventsourcing, domaindrivendesign";b.tags=["ddd","eventdriven","eventsourcing","domaindrivendesign"];b.body_html="\u003Ch2\u003E\n  \u003Ca name=\"what-is-an-event\" href=\"#what-is-an-event\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  What is an Event?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EAn event in the context of software development is something that happens around us that we choose to put in to our system as something noteworthy. The most common scenarios include:\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"storing-events-for-analytics-bi-purposes\" href=\"#storing-events-for-analytics-bi-purposes\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Storing events for analytics \u002F BI purposes\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003ESupporting communication between services by publishing application events\u003Cbr\u003E\nUse Event Sourcing to provide a single source of truth\u003Cbr\u003E\nEvents are building blocks that have become popular for many use cases. Many technical products base their design on events as a core building block. Just like any other building block or definition it is important to recognize that all events are not equal. First let's look at the properties of events that are ubiquitous regardless of the use case or product involved.\u003C\u002Fp\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"events-are-immutable\" href=\"#events-are-immutable\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Events are immutable\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EWhen something has happened in the world around us it is a fact. We cannot change history and bringing this realization into the design of our software is something that is very helpful for us when developing useful systems. We model the world in a way that resembles how we perceive the world around us. Things happen all the time and there is not much we can do about it. Our systems can help us record and remember the important things and this is why events are a great modeling construct.\u003C\u002Fp\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"an-event-can-only-occur-once\" href=\"#an-event-can-only-occur-once\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  An event can only occur once\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EAn event can only happen once. If the same thing happens again later, it is still a different event since it by definition happened after the first occurrence. When you visit your friends house, and you ring the bell three times because they are slow to open the door, there are three different occurrences (events) of the door bell ringing.\u003C\u002Fp\u003E\n\n\u003Cp\u003ESometimes it can be practical to technically choose to aggregate multiple fine-grained events into a larger event for performance reasons or simply because it logically makes more sense in the application we are developing. Logically it is a good start to separate events and make them as explicit as possible.\u003C\u002Fp\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"events-have-already-happened\" href=\"#events-have-already-happened\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Events have already happened\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EAn event always describes something that happened as a fact. This implies that when we look at the event we see it as it happened in the past, and this is why we always write events in past tense. It is a good practice to be strict about this naming convention since it can be easy to confuse events (facts) with requests to a system (intention). Requests can be denied, and we (normally) don't store the history of requests other than for analytical purposes in our systems.\u003C\u002Fp\u003E\n\u003Ch2\u003E\n  \u003Ca name=\"technical-implementation\" href=\"#technical-implementation\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Technical implementation\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EAt its core, an event is a collection of data. It does not hold any behavior or require any specific framework. To use events you need to be able to marshal\u002Funmarshal the data from a serializable format so that they can be sent over the wire or stored to persistent storage. A good option at this point is JSON since it is easy to read, somewhat concise in its format and generally available for all languages. Many implementations also use serialized formats such as Protobuf.\u003C\u002Fp\u003E\n\n\u003Cp\u003ETechnically, it is a good practice to include a timestamp of when the event occurred in the event data as well as an unique identifier (UUID is a good choice) to be able to differentiate events from each other. An implementation of an event using JSON could look something like this:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E{\n  \"eventId\" : \"e4f57d96-994e-4172-a3a6-9820709c87cc\",\n  \"eventType\" : \"door-bell-rung\",\n  \"timestamp\" : \"1593168851560\",\n  \"data\" : {\n    \"field1\" : \"Data here\",\n    \"field2\" : \"More data\"\n  }\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch2\u003E\n  \u003Ca name=\"what-are-domain-events\" href=\"#what-are-domain-events\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  What are Domain Events?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EDomain Events are an important concept within Domain-Driven Design. The concept of Domain Events was however not included in Eric Evans' great book about Domain-Driven Design when it was first written, but added as an appendix later, which explains how this focus around events is different from how we used to design systems.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"domain-events-are-part-of-your-domain-model\" href=\"#domain-events-are-part-of-your-domain-model\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Domain Events are part of your Domain Model\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EDomain Events are part of your \u003Ca href=\"https:\u002F\u002Fserialized.io\u002Fddd\u002Fdomain-model\"\u003EDomain Model\u003C\u002Fa\u003E, so to define them properly we must put ourselves into the correct context. In Domain-Driven Design we create a model that is valid within a Bounded Context. The context is our solution to a particular problem that we are addressing, so it can be a subsystem or a Microservice or a monolithic application. The core principle of the Domain Model is the same - it is only valid within this context.\u003C\u002Fp\u003E\n\n\u003Cp\u003EQuestions to ask while defining your domain events:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EDoes our stakeholders\u002Fbusiness care about it?\u003C\u002Fli\u003E\n\u003Cli\u003EIs it a decision made by our system or another system?\u003C\u002Fli\u003E\n\u003Cli\u003EDoes it encapsulate the why behind the change?\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"aggregates-create-your-domain-events\" href=\"#aggregates-create-your-domain-events\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Aggregates create your Domain Events\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EA Domain Event is an event that is spawned from this model that is a result of a decision within the domain. Within the model our Aggregates have the role of maintaining business rules and this is where we implement decision points in our model, so the Aggregates are also responsible for creating the Domain Events.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--LdxQ8df6--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fserialized.io\u002F_nuxt\u002Fimg\u002Fa96b575.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--LdxQ8df6--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fserialized.io\u002F_nuxt\u002Fimg\u002Fa96b575.png\" alt=\"How Aggregates Emit Domain Events\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis picture illustrates how Domain Events are part of our \u003Ca href=\"https:\u002F\u002Fserialized.io\u002Fddd\u002Fdomain-event\u002F\"\u003EDomain Model\u003C\u002Fa\u003E. They are not being sent from other systems and they are not something that the user sends to our system when performing an action. In our terminology, we call these messages commands which describes how they encapsulate the will to make our system perform a task.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"technical-implementation\" href=\"#technical-implementation\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Technical implementation\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EDomain events add little to the generic implementation of other types of events. It is useful to include the originating aggregateId, from where the event was spawned and include the \u003Ccode\u003EaggregateType\u003C\u002Fcode\u003E and \u003Ccode\u003EeventType\u003C\u002Fcode\u003E to help consumers of the event to interpret it. They should be serializable just like any other type of event, and you should not include deep references to objects in the code representation of your Domain Events.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E{\n  \"aggregateType\" : \"payment\",\n  \"aggregateId\" : \"1d0d12cd-ac5e-470a-8479-b5a871472445\",\n  \"eventType\" : \"payment-successfully-completed\",\n  \"eventId\" : \"e4f57d96-994e-4172-a3a6-9820709c87cc\",\n  \"timestamp\" : \"1593168851560\",\n  \"data\" : {\n    \"customerId\" : \"ec930ec6-063f-41e2-9ecb-581cf5e2ad06\",\n    \"amountPaid\" : 334\n  }\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"when-is-an-event-not-a-domain-event\" href=\"#when-is-an-event-not-a-domain-event\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  When is an event not a Domain Event?\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003ETo qualify as a Domain Event the event should have a deeper meaning and importance to our business. Everything that happen around us can be described as events, but that does not mean that we need to implement everything that happens in our software.\u003C\u002Fp\u003E\n\n\u003Cp\u003EExamples of things that happen that might not be suitable to model as Domain Events:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003ESomething technical (a \u003Ccode\u003EButtonClicked\u003C\u002Fcode\u003E, \u003Ccode\u003EExceptionThrown\u003C\u002Fcode\u003E etc) happened that we want to record or handle, but it is not described in the ubiquitous language of our domain.\u003C\u002Fli\u003E\n\u003Cli\u003ESomething that happened outside of our bounded context. This could a Domain Event in another system or a different bounded context.\u003C\u002Fli\u003E\n\u003Cli\u003ERequests to your system. These we define as Commands rather than events, since they can be rejected by our system.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"integrating-using-domain-events\" href=\"#integrating-using-domain-events\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Integrating using Domain Events\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EYou can use Domain Events to integrate services with each other. They are a very useful way to publish information about what happened in different parts of your system and let other parts react, aggregate or perform calculations based on them. There are however some things to consider before going all in using Domain Events as an integration mechanism.\u003C\u002Fp\u003E\n\n\u003Cp\u003EDomain Events are contextual\u003Cbr\u003E\nRemember the Domain Events are really part of the Domain Model from the context where they are spawned. That is where they have their true meaning and publishing events widely to other systems may introduce unwanted coupling between these systems. Since the Domain Events primarily have the role of storing the truth of your applications history.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn a larger system, such as for example an e-commerce system that handles both customer registration, orders, shipping and payments it can be tricky to use Domain Events from one of these contexts in the other contexts. The meaning of the event may not make sense in other contexts. The word order will likely show in all of these contexts but the meaning and importance of the word is different. This is where the knowledge of Context Mapping in Domain-Driven Design is so important ot understand that the Domain Events are part of the Domain Model.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"how-to-get-started\" href=\"#how-to-get-started\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  How to get started?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EGetting started with Domain Events does not have to be a big change to your system architecture. If you already are designing applications using DDD you can start by also saving events together with your current application state in a part of your application.\u003C\u002Fp\u003E\n\n\u003Cp\u003EWhen you start adding Domain Events to the mix of your application you might get interested in Event Sourcing, where Domain Events are the central piece of information. Programming with events as the basic building block can take some time to get used to, but the learning is often worth the time, and you will likely notice less friction when serving the needs of the business people with data. You don't have to use Event Sourcing to start using Domain Events in your software. Domain Events can be a useful addition to a more classical DDD-style architecture where they provide an extra dimension of time to certain parts of the application where this is particularly important.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"how-are-domain-events-and-event-sourcing-related\" href=\"#how-are-domain-events-and-event-sourcing-related\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  How are Domain Events and Event Sourcing related?\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EEvent Sourcing is an architectural pattern that is applied within a Bounded Context to provide the single source of truth. There are different interpretations of Event Sourcing, but we tend to keep it quite simple:\u003C\u002Fp\u003E\n\n\u003Cp\u003EEvent Sourcing is when you use Domain Events to store the state of an Aggregate within a Bounded Context.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis basically means replacing your relational data model (or other data store) with an ever-growing log of Domain Events, which is called an event store. This is the core of Event Sourcing. So to use Event Sourcing you definitely need to understand Domain Events.\u003C\u002Fp\u003E\n\n\u003Cp\u003EFor full disclosure, there are few other interpretations of the pattern, but we still think combining Event Sourcing with Domain-Driven Design and Bounded Contexts is the simplest and clearest view on what this pattern is. Mixing in other technical aspects such as pub\u002Fsub tends to blur the picture too much.\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fmartinfowler.com\u002FeaaDev\u002FEventSourcing.html\"\u003EMartin Fowler's blog\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fazure\u002Farchitecture\u002Fpatterns\u002Fevent-sourcing\"\u003EMicrosoft\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EThe transition to Event Sourcing can be a tricky change to make, but there are some big wins that come with it and this transition does not have to be a big-bang. Since Event Sourcing is a pattern that is to be applied within an application\u002Fservice and not as a system-wide architectural pattern we recommend getting started with a single microservice or application. If your company is new to these ideas it could be wise to let a single team start experimenting with these technologies and ideas.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"common-mistakes-and-pitfalls\" href=\"#common-mistakes-and-pitfalls\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Common mistakes and pitfalls\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EGetting started with Domain Events can feel awkward and there are a few things to remember in order to stay on track with your modeling, so your Domain Events bring true value to your software design.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"trying-to-model-everything\" href=\"#trying-to-model-everything\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Trying to model everything\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EThe Domain Model should be useful for the problem we're trying to solve. The model is there to enforce the business rules that we have and preferably our architecture should provide a simple enough integration support for us to be able to connect the application with other systems to make it a useful whole.\u003C\u002Fp\u003E\n\n\u003Cp\u003EA common trap that developers fall down into is to try to model everything related to the problem at hand. This is where the distinction of Domain Events and other events can come handy since many times the other events that happen (technical or peripheral) can be regarded as logging events that we can store for analytical purposes only. Often, it is evident what should be a Domain Event when we try to create these technical events from our Aggregate. It becomes quite clear that they do not belong there.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"not-breaking-out-of-the-crud-mindset\" href=\"#not-breaking-out-of-the-crud-mindset\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Not breaking out of the CRUD mindset\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EOne of the most common mistakes when starting with Domain Events and with DDD in general is to not go the whole way and figure our what is actually going on in the domain. It is easy to fall into the trap of naming all events SomethingCreated, SomethingUpdated and SomethingDeleted. While not a problem in itself it does not make use of the powerful thing we get by adding the context and meaning to the actual change that the Domain Event represent. You lose the intent of the event and reading the event log later will not provide that much value.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"next-steps\" href=\"#next-steps\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Next steps\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ETo start using Domain Events as a primary building block for your application and use them to their full extent, I recommend learning more about Event Sourcing and then trying out \u003Ca href=\"https:\u002F\u002Fserialized.io\"\u003ESerialized\u003C\u002Fa\u003E as a way to get started without any installation of software or management of infrastructure.\u003C\u002Fp\u003E\n\n";b.body_markdown="## What is an Event?\nAn event in the context of software development is something that happens around us that we choose to put in to our system as something noteworthy. The most common scenarios include:\n\n### Storing events for analytics \u002F BI purposes\nSupporting communication between services by publishing application events\nUse Event Sourcing to provide a single source of truth\nEvents are building blocks that have become popular for many use cases. Many technical products base their design on events as a core building block. Just like any other building block or definition it is important to recognize that all events are not equal. First let's look at the properties of events that are ubiquitous regardless of the use case or product involved.\n\n### Events are immutable\nWhen something has happened in the world around us it is a fact. We cannot change history and bringing this realization into the design of our software is something that is very helpful for us when developing useful systems. We model the world in a way that resembles how we perceive the world around us. Things happen all the time and there is not much we can do about it. Our systems can help us record and remember the important things and this is why events are a great modeling construct.\n\n### An event can only occur once\nAn event can only happen once. If the same thing happens again later, it is still a different event since it by definition happened after the first occurrence. When you visit your friends house, and you ring the bell three times because they are slow to open the door, there are three different occurrences (events) of the door bell ringing.\n\nSometimes it can be practical to technically choose to aggregate multiple fine-grained events into a larger event for performance reasons or simply because it logically makes more sense in the application we are developing. Logically it is a good start to separate events and make them as explicit as possible.\n\n### Events have already happened\nAn event always describes something that happened as a fact. This implies that when we look at the event we see it as it happened in the past, and this is why we always write events in past tense. It is a good practice to be strict about this naming convention since it can be easy to confuse events (facts) with requests to a system (intention). Requests can be denied, and we (normally) don't store the history of requests other than for analytical purposes in our systems.\n\n## Technical implementation\nAt its core, an event is a collection of data. It does not hold any behavior or require any specific framework. To use events you need to be able to marshal\u002Funmarshal the data from a serializable format so that they can be sent over the wire or stored to persistent storage. A good option at this point is JSON since it is easy to read, somewhat concise in its format and generally available for all languages. Many implementations also use serialized formats such as Protobuf.\n\nTechnically, it is a good practice to include a timestamp of when the event occurred in the event data as well as an unique identifier (UUID is a good choice) to be able to differentiate events from each other. An implementation of an event using JSON could look something like this:\n```\n{\n  \"eventId\" : \"e4f57d96-994e-4172-a3a6-9820709c87cc\",\n  \"eventType\" : \"door-bell-rung\",\n  \"timestamp\" : \"1593168851560\",\n  \"data\" : {\n    \"field1\" : \"Data here\",\n    \"field2\" : \"More data\"\n  }\n}\n```\n\n## What are Domain Events?\nDomain Events are an important concept within Domain-Driven Design. The concept of Domain Events was however not included in Eric Evans' great book about Domain-Driven Design when it was first written, but added as an appendix later, which explains how this focus around events is different from how we used to design systems.\n\n### Domain Events are part of your Domain Model\nDomain Events are part of your [Domain Model](https:\u002F\u002Fserialized.io\u002Fddd\u002Fdomain-model), so to define them properly we must put ourselves into the correct context. In Domain-Driven Design we create a model that is valid within a Bounded Context. The context is our solution to a particular problem that we are addressing, so it can be a subsystem or a Microservice or a monolithic application. The core principle of the Domain Model is the same - it is only valid within this context.\n\nQuestions to ask while defining your domain events:\n- Does our stakeholders\u002Fbusiness care about it?\n- Is it a decision made by our system or another system?\n- Does it encapsulate the why behind the change?\n\n### Aggregates create your Domain Events\nA Domain Event is an event that is spawned from this model that is a result of a decision within the domain. Within the model our Aggregates have the role of maintaining business rules and this is where we implement decision points in our model, so the Aggregates are also responsible for creating the Domain Events.\n\n![How Aggregates Emit Domain Events](https:\u002F\u002Fserialized.io\u002F_nuxt\u002Fimg\u002Fa96b575.png)\n\nThis picture illustrates how Domain Events are part of our [Domain Model](https:\u002F\u002Fserialized.io\u002Fddd\u002Fdomain-event\u002F). They are not being sent from other systems and they are not something that the user sends to our system when performing an action. In our terminology, we call these messages commands which describes how they encapsulate the will to make our system perform a task.\n\n### Technical implementation\nDomain events add little to the generic implementation of other types of events. It is useful to include the originating aggregateId, from where the event was spawned and include the `aggregateType` and `eventType` to help consumers of the event to interpret it. They should be serializable just like any other type of event, and you should not include deep references to objects in the code representation of your Domain Events.\n\n```\n{\n  \"aggregateType\" : \"payment\",\n  \"aggregateId\" : \"1d0d12cd-ac5e-470a-8479-b5a871472445\",\n  \"eventType\" : \"payment-successfully-completed\",\n  \"eventId\" : \"e4f57d96-994e-4172-a3a6-9820709c87cc\",\n  \"timestamp\" : \"1593168851560\",\n  \"data\" : {\n    \"customerId\" : \"ec930ec6-063f-41e2-9ecb-581cf5e2ad06\",\n    \"amountPaid\" : 334\n  }\n}\n```\n\n### When is an event not a Domain Event?\nTo qualify as a Domain Event the event should have a deeper meaning and importance to our business. Everything that happen around us can be described as events, but that does not mean that we need to implement everything that happens in our software.\n\nExamples of things that happen that might not be suitable to model as Domain Events:\n\n- Something technical (a `ButtonClicked`, `ExceptionThrown` etc) happened that we want to record or handle, but it is not described in the ubiquitous language of our domain.\n- Something that happened outside of our bounded context. This could a Domain Event in another system or a different bounded context.\n- Requests to your system. These we define as Commands rather than events, since they can be rejected by our system.\n\n### Integrating using Domain Events\nYou can use Domain Events to integrate services with each other. They are a very useful way to publish information about what happened in different parts of your system and let other parts react, aggregate or perform calculations based on them. There are however some things to consider before going all in using Domain Events as an integration mechanism.\n\nDomain Events are contextual\nRemember the Domain Events are really part of the Domain Model from the context where they are spawned. That is where they have their true meaning and publishing events widely to other systems may introduce unwanted coupling between these systems. Since the Domain Events primarily have the role of storing the truth of your applications history.\n\nIn a larger system, such as for example an e-commerce system that handles both customer registration, orders, shipping and payments it can be tricky to use Domain Events from one of these contexts in the other contexts. The meaning of the event may not make sense in other contexts. The word order will likely show in all of these contexts but the meaning and importance of the word is different. This is where the knowledge of Context Mapping in Domain-Driven Design is so important ot understand that the Domain Events are part of the Domain Model.\n\n## How to get started?\nGetting started with Domain Events does not have to be a big change to your system architecture. If you already are designing applications using DDD you can start by also saving events together with your current application state in a part of your application.\n\nWhen you start adding Domain Events to the mix of your application you might get interested in Event Sourcing, where Domain Events are the central piece of information. Programming with events as the basic building block can take some time to get used to, but the learning is often worth the time, and you will likely notice less friction when serving the needs of the business people with data. You don't have to use Event Sourcing to start using Domain Events in your software. Domain Events can be a useful addition to a more classical DDD-style architecture where they provide an extra dimension of time to certain parts of the application where this is particularly important.\n\n### How are Domain Events and Event Sourcing related?\nEvent Sourcing is an architectural pattern that is applied within a Bounded Context to provide the single source of truth. There are different interpretations of Event Sourcing, but we tend to keep it quite simple:\n\nEvent Sourcing is when you use Domain Events to store the state of an Aggregate within a Bounded Context.\n\nThis basically means replacing your relational data model (or other data store) with an ever-growing log of Domain Events, which is called an event store. This is the core of Event Sourcing. So to use Event Sourcing you definitely need to understand Domain Events.\n\nFor full disclosure, there are few other interpretations of the pattern, but we still think combining Event Sourcing with Domain-Driven Design and Bounded Contexts is the simplest and clearest view on what this pattern is. Mixing in other technical aspects such as pub\u002Fsub tends to blur the picture too much.\n\n- [Martin Fowler's blog](https:\u002F\u002Fmartinfowler.com\u002FeaaDev\u002FEventSourcing.html)\n- [Microsoft](https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fazure\u002Farchitecture\u002Fpatterns\u002Fevent-sourcing)\n\nThe transition to Event Sourcing can be a tricky change to make, but there are some big wins that come with it and this transition does not have to be a big-bang. Since Event Sourcing is a pattern that is to be applied within an application\u002Fservice and not as a system-wide architectural pattern we recommend getting started with a single microservice or application. If your company is new to these ideas it could be wise to let a single team start experimenting with these technologies and ideas.\n\n## Common mistakes and pitfalls\nGetting started with Domain Events can feel awkward and there are a few things to remember in order to stay on track with your modeling, so your Domain Events bring true value to your software design.\n\n### Trying to model everything\nThe Domain Model should be useful for the problem we're trying to solve. The model is there to enforce the business rules that we have and preferably our architecture should provide a simple enough integration support for us to be able to connect the application with other systems to make it a useful whole.\n\nA common trap that developers fall down into is to try to model everything related to the problem at hand. This is where the distinction of Domain Events and other events can come handy since many times the other events that happen (technical or peripheral) can be regarded as logging events that we can store for analytical purposes only. Often, it is evident what should be a Domain Event when we try to create these technical events from our Aggregate. It becomes quite clear that they do not belong there.\n\n### Not breaking out of the CRUD mindset\nOne of the most common mistakes when starting with Domain Events and with DDD in general is to not go the whole way and figure our what is actually going on in the domain. It is easy to fall into the trap of naming all events SomethingCreated, SomethingUpdated and SomethingDeleted. While not a problem in itself it does not make use of the powerful thing we get by adding the context and meaning to the actual change that the Domain Event represent. You lose the intent of the event and reading the event log later will not provide that much value.\n\n## Next steps\nTo start using Domain Events as a primary building block for your application and use them to their full extent, I recommend learning more about Event Sourcing and then trying out [Serialized](https:\u002F\u002Fserialized.io) as a way to get started without any installation of software or management of infrastructure.";b.user={name:"Mattias Holmqvist",username:e,twitter_username:e,github_username:a,website_url:"https:\u002F\u002Fserialized.io",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--CShQzGLg--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F509832\u002Fa5737b46-7ec7-4822-8af8-205c0e5caeb7.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--9NbD4Iud--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F509832\u002Fa5737b46-7ec7-4822-8af8-205c0e5caeb7.png"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:b}},mutations:[["SET_CURRENT_ARTICLE",b]]}}(null,{},18,"2020-11-07T09:49:46Z","m_holmqvist")));