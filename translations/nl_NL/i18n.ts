/// <reference path="../../client/app-slim/translations.d.ts"/>

// Note:
// - If the first char in the field name is Uppercase, then the
//   textual value also starts with an Uppercase letter.
//   E.g. `Close: "Close"`, and `close: "close"`.
// - The text value of a field that ends with ...Q, ends with ?. E.g. `DeleteQ: "Delete?"`.
// - The text value of a field that ends with ...C, ends with :. E.g. `PasswordC: "Password:"`.
// - If the field ends with an N, then it's a noun (not a verb). Example:
//   In English, the word "chat" is both a noun and a verb, but in other languages,
//   two different words might be needed — and then there're two fields for the translators
//   `ChatN: "(noun here)"` and `ChatV: "(verb here)"`.
// - If the field ends with an V, then it's a verb (not a noun)

var t: TalkyardTranslations;

var t_nl_NL: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Actief",
  Activity: "Activiteit",
  Add: "Voeg toe",
  AddingDots: "Toevoegen ...",
  AddComment: "Geef commentaar",  // MISSING, & dupl t.e.AddCommentC
  Admin: "Admin",
  AdvSearch: "Geavanceerd zoeken",
  Away: "Afwezig",
  Back: "Terug",
  BlogN: "Blog",
  Bookmarks: "Bladwijzers",
  Cancel: "Annuleer",
  Categories: "Categoriën",
  Category: "Categorie",
  ChangeV: "Wijzig",
  ClickToShow: "Klik om te zien",
  ChangeDots: "Wijzig ...",
  ChatN: "Chat",
  Chatting: "Chatten",
  CheckYourEmail: "E-mail nazien",
  Close: "Sluiten",
  closed: "gesloten",
  comments: "commentaren",   // as in:  "123 comments"
  Continue: "Ga verder",
  Created: "Gemaakt",
  Delete: "Verwijder",
  Deleted: "Verwijderd",
  DirectMessage: "Direct bericht",
  Discussion: "Discussie",
  discussion: "discussie",
  done: "gedaan",
  EditV: "Wijzig",
  Editing: "Wijzigen",
  EmailC: "E-mail: ",   // MISSING  copy t.cud.EmailC to here
  EmailAddress: "E-mail adres",
  EmailAddresses: "E-mail adressen",
  EmailSentD: "E-mail verzonden.",
  Forum: "Forum",
  GetNotifiedAbout: "Krijg meldingen over",
  GroupsC: "Groepen:",
  Hide: "Verberg",
  Home: "Begin",
  Idea: "Idee",
  Join: "Neem deel",
  KbdShrtcsC: "Toetsenbord shortcuts: ",
  Loading: "Laden...",
  LoadMore: "Toon meer ...",
  LogIn: "Log In",
  LoggedInAs: "Ingelogd als ",
  LogOut: "Log uit",
  Maybe: "Misschien",
  Manage: "Beheer",
  Members: "Leden",
  MessageN: "Bericht",
  MoreDots: "Meer...",
  Move: "Verhuis",
  Name: "Naam",
  NameC: "Naam:",
  NewTopic: "Nieuw onderwerp",
  NoCancel: "Nee, annuleer",
  Notifications: "Meldingen",
  NotImplemented: "(Niet geïmplementeerd)",
  NotYet: "Nog niet",
  NoTitle: "Geen titel",
  NoTopics: "Geen onderwerpen.",
  Okay: "Ok",
  OkayDots: "Ok ...",
  Online: "Online",
  onePerLine: "één per lijn",
  PreviewV: "Voorbeeld",
  Problem: "Probleem",
  progressN: "vooruitgang",
  Question: "Vraag",
  Recent: "Recent",
  Remove: "Verwijder",
  Reopen: "Heropenen",
  ReplyV: "Antwoord",
  Replying: "Antwoorden",
  Replies: "Antwoorden",
  replies: "antwoorden",
  Save: "Bewaar",
  SavingDots: "Bewaren ...",
  SavedDot: "Bewaard.",
  Search: "Zoek",
  SendMsg: "Bericht versturen",
  ShowPreview: "Toon voorbeeld",  // MISSING
  SignUp: "Registreer",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Oplossing",
  started: "Begonnen",
  Summary: "Overzicht",
  Submit: "Verzenden",
  Tag: "Tag",  // MISSING
  Tags: "Tags",  // MISSING
  Tools: "Gereedschap",
  Topics: "Onderwerpen",
  TopicTitle: "Onderwerp titel",
  TopicType: "Onderwerp type",
  UploadingDots: "Opladen...",
  Username: "Gebruikersnaam",
  Users: "Gebruikers",
  Welcome: "Welkom",
  Wiki: "Wiki",
  Yes: "Ja",
  YesBye: "Ja, tot ziens",
  YesDoThat: "Ja, doe dit",
  You: "U",
  you: "u",

  // Trust levels.
  Guest:  "Gast",
  NewMember: "Nieuw lid",
  BasicMember: "Basis lid",
  FullMember: "Volledig lid",
  TrustedMember: "Vertrouwd lid",
  RegularMember: "Vertrouwd regelmatig",  // MISSING renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "Kern lid",

  // Periods.
  PastDay: "Gisteren",
  PastWeek: "Verleden week",
  PastMonth: "Verleden maand",
  PastQuarter: "Verleden kwartaal",
  PastYear: "Verleden jaar",
  AllTime: "Altijd",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "m",  // months
  daysLtr: "d",      // days
  hoursLtr: "u",     // hours
  minsLtr: "min",      // minutes
  secsLtr: "sec",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 dag geleden" : `${numDays} dagen geleden`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 uur geleden" : `${numHours} uren geleden`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 minuut geleden" : `${numMins} minuten geleden`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 second geleden" : `${numSecs} seconden geleden`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-mail vereist",
    NoSpcs: "Gelieve geen spaties te gebruiken",
    InvldAddr: "Geen geldig e-mail adres",
    NoBadChrs: "Gelieve geen vreemde tekens te gebruiken",

    // Full name input field:
    NotOnlSpcs: "Niet enkel spaties gebruiken",
    NoAt: "Gelieve geen @ gebruiken",

    // Username input field:
    NoDash: "Gelieve geen (-) gebruiken",
    DontInclAt: "Zonder de @",
    StartEndLtrDgt: "Start and end with a letter or a digit",
    OnlLtrNumEtc: "Alleen letters (a-z, A-Z) en nummers, en _ (laag streepje)",
    // This shown just below the username input:
    UnUnqShrt_1: "Uw ",
    UnUnqShrt_2: "@gebruikersnaam",
    UnUnqShrt_3: ", uniek en kort",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Moet minimum ${minLength} karakters bevatten`,
    TooLong: (maxLength: number) => `Te lang. Mag maximum ${maxLength} karakters bevatten`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Elk bericht",
    EveryPostInTopic: "U zal een melding krijgen voor elk nieuw antwoord in dit onderwerp.",
    EveryPostInCat: "U zal een melding krijgen voor alle nieuwe onderwerpen en antwoorden, in deze categorie.",
    EveryPostInTopicsWithTag: "U zal een melding krijgen voor alle nieuwe onderwerpen met deze tag, en alle antwoorden in deze onderwerpen.",
    EveryPostWholeSite: "U zal een melding krijgen voor alle nieuwe onderwerpen en alle antwoorden, overal.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Nieuwe onderwerpen",
    NewTopicsInCat: "U zal een notificatie krijgen voor alle nieuwe onderwerpen in deze categorie.",
    NewTopicsWithTag: "U zal een melding krijgen voor alle nieuwe onderwerpen met deze tag.",
    NewTopicsWholeSite: "U zal een melding krijgen voor alle nieuwe onderwerpen, overal.",

    Tracking: "Tracking",

    Normal: "Normaal",
    NormalDescr: "U zal een melding krijgen als iemand met U praat, alsook indirect, bijv. een " +
        "antwoord op een uw antwoord.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Beperkt",
    HushedDescr: "U zal een melding krijgen, alleen als iemand rechtstreeks met u praat.",

    Muted: "Geen",
    MutedTopic: "Geen meldingen.",   // MISSING removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "Bewerk",
    Hide_1: "Verberg",
    Hide_2: ", klik ",
    Hide_3: " heropenen",
  },


  // Forum categories

  fcs: {
    All: "Alle", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Onderwerpen lijst",

    // Select category dropdown

    from: "van",  // MISSING used like so:  "From <Category Name>" or "From All Categories"
    in: "in",      // MISSING used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Alle categorieën",

    // Topic sort order

    Active: "Recent actieve eerst",      // MISSING didn't add "first" yet to transls
    ActiveDescr: "Toont de recent actieve onderwerpen eerst",

    New: "Nieuw",
    NewDescr: "Toont de nieuwste onderwerpen eerst",

    Top: "Populair",              // MISSING didn't rename from Top to Popular in transls
    TopDescr: "Toont de populairste onderwerpen eerst",

    // Topic filter dropdown

    AllTopics: "Alle onderwerpen",

    ShowAllTopics: "Toon alle onderwerpen",
    ShowAllTopicsDescr: "Evenwel niet verwijderde onderwerpen",

    WaitingTopics: "Onderwerpen in afwachting",          // MISSING
    OnlyWaitingDescr_1: "Toon alleen onderwerpen ", // MISSING changed "questions" to "topics"
    OnlyWaitingDescr_2: "wachtend ",
    OnlyWaitingDescr_3: "op een oplossing of geïmplementeerd te worden",  // MISSING rewrote

    YourTopics: "Uw onderwerpen",       // MISSING
    AssignedToYou: "Toegewezen aan jou", // MISSING

    DeletedTopics: "Toon verwijderde",   // MISSING
    ShowDeleted: "Toon verwijderde",
    ShowDeletedDescr: "Toont alle onderwerpen, inclusief verwijderde",

    // Rightmost buttons

    ViewCategories: "Overzicht categorieën",  // MISSING
    EditCat: "Bewerk categorie",
    CreateCat: "Maak categorie",
    CreateTopic: "Maak onderwerp",
    PostIdea: "Waar denk u aan",
    AskQuestion: "Stel een vraag",
    ReportProblem: "Meld een probleem",
    CreateMindMap: "Maak een Mind Map",
    CreatePage: "Maak pagina",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Uitleg icons...",
    IconExplanation: "Icon uitleg:",
    ExplGenDisc: "Een algemene discussie.",
    ExplQuestion: "Een vraag zonder aanvaard antwoord.",
    ExplAnswer: "Een vraag met een aanvaard antwoord.",
    ExplIdea: "Een idee / suggestie.",
    ExplProblem: "Een probleem.",
    ExplPlanned: "Iets dat we plannen om te doen of te herstellen.",
    ExplDone: "Iets dat gedaan of hersteld werd.",
    ExplClosed: "Onderwerp gesloten.",
    ExplPinned: "Onderwerp altijd bovenaan (misschien alleen in zijn eigen categorie).",

    PopularTopicsComma: "Populaire onderwerpen, ",
    TopFirstAllTime: "Toont de populaire onderwerpen eerst, altijd.",
    TopFirstPastDay: "Toont de populaire onderwerpen van de verleden dag.",

    CatHasBeenDeleted: "Deze categorie werd verwijderd",

    TopicsActiveFirst: "Onderwerpen, recent actieve eerst",
    TopicsNewestFirst: "Onderwerpen, nieuw eerst",

    CreatedOn: "Gemaakt op ",
    LastReplyOn: "\nLaatste antwoord op ",
    EditedOn: "\nGwijzigd op ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "maakte het onderwerp",
    frequentPoster: "frequente poster",
    mostRecentPoster: "meest recente poster",

    inC: "in: ",

    TitleFixed: "Dit werd hersteld",
    TitleDone: "Dit werd gedaan",
    TitleStarted: "We zijn hiermee begonnen",
    TitleStartedFixing: "We zijn begonnen met de herstelling",
    TitleUnsolved: "Dit is een niet opgelost probleem",
    TitleIdea: "Dit is een idee",
    TitlePlanningFix: "We gaan dit herstellen",
    TitlePlanningDo: "We gaan dit doen",
    TitleChat: "Dit is een chat kanaal",
    TitlePrivateChat: "Dit is een privé chat kanaal",
    TitlePrivateMessage: "Een privé bericht",
    TitleInfoPage: "Dit is een info pagina",
    TitleDiscussion: "Een discussie",
    IsPinnedGlobally: "\nHet werd gepind, dus het staat bovenaan.",
    IsPinnedInCat: "\nHet werd gepind in de categorie, dus het staat bovenaan in de categorie.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Recente onderwerpen (die wachten)",
    RecentTopicsInclDel: "Recente onderwerpen (inclusief verwijderde)",
    RecentTopics: "Recente onderwerpen",
    _replies: " antwoorden",
    _deleted: " (verwijderd)",
    _defCat: " (standaard categorie)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Recente berichten",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " online in deze chat",    // example: "5 online in this chat"
    NumOnlForum: " online in dit forum",

    // Open left-sidebar button title.
    WatchbBtn: "Uw onderwerpen",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Uw recente onderwerpen, toegetreden chats, directe berichten",

    // Title shown on user profile pages.
    AbtUsr: "Over gebruiker",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Terug naar gebruikers profiel",
    BackFromAdm: "Terug naar admin omgeving",

    // Title shown on full text search page.
    SearchPg: "Zoek pagina",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Voeg toe ...",
    RecentlyViewed: "Recent bekeken onderwerpen",  // MISSING " topics"
    JoinedChats: "Deelgenomen Chats",
    ChatChannels: "Chat kanalen",
    CreateChat: "Maak chat kanaal",
    DirectMsgs: "Directe berichten",
    NoChats: "Geen",    // meaning: "No chat messages"
    NoDirMsgs: "Geen",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Onderwerp acties",
    ViewPeopleHere: "Overzicht personen",
    ViewAddRemoveMembers: "Overzicht / toevoegen / verwijder leden",
    ViewChatMembers: "Overzicht chat leden",
    EditChat: "Bewerk chat omschrijving",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Verlaat deze chat",
    LeaveThisCommunity: "Verlaat deze gemeenschap",
    JoinThisCommunity: "Deelnemen aan deze gemeenschap",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Recente opmerkingen in dit onderwerp:",
    NoComments: "Geen opmerkingen.",

    YourBookmarks: "Uw boekwijzers:",

    UsersOnline: "Gebruikers online:",
    UsersOnlineForum: "Gebruikers online in dit forum:",
    UsersInThisChat: "Gebruikers in deze chat:",
    UsersInThisTopic: "Gebruikers in dit onderwerp:",

    GettingStartedGuide: "Admin gids", // MISSING in other langs, was: "Getting Started Guide".
    AdminGuide: "Admin gids",          // ... but what? It's here already, just reuse this transl field
    Guide: "Gids",

    // How to hide the sidebar.
    CloseShortcutS: "Sluit (keyboard shortcut: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Meer personen toevoegen",

    // Shown next to one's own username, in a list of users.
    thatsYou: "dat bent u",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "U bent hier blijkbaar alleen",
    YouAnd: "U, en ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " persoon" : " personen";
      //const have = numStrangers === 1 ? "heeft" : "hebben";
      const zijn = numStrangers === 1 ? "is" : "zijn";
      return numStrangers + people + " die niet ingelogd" + zijn;
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "De antwoorden links zijn gesorteerd volgens ",
    bestFirst: "beste-eerst.",
    ButBelow: "Maar beneden ",
    insteadBy: " dezelfde antwoorden zijn in plaats daarvan gesorteerd volgens ",
    newestFirst: "nieuwste-eerst.",

    SoIfLeave: "Indien u verlaat en later terug komt, vind u hieronder ",
    allNewReplies: "alle nieuwe antwoorden.",
    Click: "Klik",
    aReplyToReadIt: " een antwoord hieronder om te lezen — omdat er alleen een uittreksel getoond wordt, onderaan.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Klik om status te wijzigen",
    ClickToViewAnswer: "Klik om het antwoord te zien",
    ViewAnswer: "Antwoord zien",
    ChangeStatusC: "Verander status naar:",
    ChangeCatC: "Verander categorie:",
    ChangeTopicTypeC: "Verander onderwerp type:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "een vraag",
    hasAccptAns: "heeft een aanvaard antwoord",
    aProblem: "een probleem",
    planToFix: "plan om te herstellen",
    anIdea: "een idee",
    planToDo: "plan om te doen",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Dit formulier werd ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "gesloten; u kan het niet langer invullen noch er berichten in plaatsen.",

    ThisTopicClosed_1: "Dit onderwerp werd ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". U kan nog opmerkingen plaatsen.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Deze pagina werd verwijderd",
    CatDeldPageToo: "Ze behoorde tot een verwijderde categorie, dus deze pagina is ook verwijderd",

    ThreadDeld: "Draad verwijderd",
    CmntDeld: "Opmerking verwijderd",
    PostDeld: "Bericht verwijderd",
    DiscDeld: "Discussie verwijderd",
    PageDeld: "Pagina verwijderd",
    PagePendAppr: "Pagina wachtend op goedkeuring",
    TitlePendAppr: "Titel wachtend op goedkeuring",
    TextPendingApproval: "Tekst wachtend op goedkeuring",

    TooltipQuestClosedNoAnsw: "Deze vraag werd afgesloten zonder een aanvaard antwoord.",
    TooltipTopicClosed: "Dit onderwerp is gesloten.",

    TooltipQuestSolved: "Deze vraag werd opgelost",
    TooltipQuestUnsolved: "Deze vraag is niet opgelost",

    StatusDone: "Gedaan",
    TooltipProblFixed: "Dit werd hersteld",
    TooltipDone: "Dit werd gedaan",

    StatusStarted: "Gestart",
    TooltipFixing: "We zijn begonnen met de herstelling",      // MISSING "We're currently" —> "We've started"
    TooltipImplementing: "We begonnen met de implementatie", // MISSING  -""-

    StatusPlanned: "Gepland",
    TooltipProblPlanned: "We gaan dit herstellen",
    TooltipIdeaPlanned: "We gaan dit doen",   // or "to implement this"?

    StatusNew: "Nieuw",
    StatusNewDtl: "Nieuw onderwerp, onder discussie",
    TooltipUnsProbl: "Dit is een niet opgelost probleem",
    TooltipIdea: "Dit is een idee",

    TooltipPersMsg: "Persoonlijk bericht",
    TooltipChat: "# betekent chat kanaal",
    TooltipPrivChat: "Dit is een privé chat kanaal",

    TooltipPinnedGlob: "\nGlobaal gepind.",
    TooltipPinnedCat: "\nGepind in deze categorie.",

    SolvedClickView_1: "Opgelost in bericht #",
    SolvedClickView_2: ", klik om te zien",

    PostHiddenClickShow: "Bericht verborgen; klik om te tonen",
    ClickSeeMoreRepls: "Toon meer antwoorden",      // MISSING  removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Toon meer opmerkingen",  // MISSING
    ClickSeeThisComment: "Klik om deze opmerking te tonen",
    clickToShow: "klik om te tonen",

    ManyDisagree: "Velen zijn niet akkoord met:",
    SomeDisagree: "Sommigen zijn niet akkoord met:",

    PendAppr: "Wachtend op goedkeuring",
    CmtPendAppr: "Opmerking in afwachting goedkeuring, gepost ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Uw" : "De") + " onderstaande opmerking is in afwachting van goedkeuring.",

    _and: " en",

    repliesTo: "antwoorden op",
    InReplyTo: "In antwoord op",
    YourReplyTo: "Uw antwoord op ",  // MISSING
    YourChatMsg: "Uw chat bericht: ",   // MISSING
    YourDraft: "Uw concept",    // MISSING
    YourEdits: "Uw bewerkingen: ",   // MISSING
    YourProgrNoteC: "Uw vooruitgang nota:",  // MISSING
    aProgrNote: "een vooruitgang nota: ",  // MISSING

    ReplyingToC: "Antwoorden op:",    // MISSING
    ScrollToPrevw_1: "Scroll naar ",  // MISSING
    ScrollToPrevw_2: "voorbeeld",     // MISSING

    UnfinEdits: "Niet beëindigde bewerkingen",  // MISSING
    ResumeEdting: "Hervat bewerken",  // MISSING
    DelDraft: "Verwijder concept",   // MISSING

    ClickViewEdits: "Klik om oude bewerkingen te zien",

    By: "Door ", // ... someones name

    // Discussion ...
    aboutThisIdea: "over als en hoe we dit idee uitvoeren",
    aboutThisProbl: "over als en hoe we dit gaan herstellen",

    AddProgrNote: "Voeg vooruitgang nota toe",
    // Progress ...
    withThisIdea: "met de uitvoering van dit idee",
    withThisProbl: "met de afhandeling van dit probleem",
    withThis: "met de uitvoering van dit",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Meldingen over dit onderwerp:",

    // If is a direct message topic, members listed below this text.
    Msg: "Bericht",

    SmrzRepls: "Samenvatting antwoorden",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Aantal antwoorden = ${numReplies} . Geschatte leestijd: ${minutes} minutes`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Gedaan. Samengevat ${numSummarized} antwoorden, van de ${numShownBefore} voordien getoonde antwoorden.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Sluit onderwerp",  // MISSING
    CloseOwnQuestionTooltip: "Sluit deze vraag als u geen antwoord meer nodig hebt.",
    CloseOthersQuestionTooltip: "Sluit deze vraag als het geen antwoord nodig heeft, bijv. als " +
        "het buiten het onderwerp valt of reeds beantwoord werd in een ander onderwerp.",
    CloseToDoTooltip: "Sluit deze To-Do als het niet moet gedaan of hersteld worden.",
    CloseTopicTooltip: "Sluit dit onderwerp als het verder overwogen moet worden.",

    AcceptBtnExpl: "Aanvaard dit als een antwoord op de vraag of het probleem",
    SolutionQ: "Oplossing?",
    ClickUnaccept: "Klik om aanvaarden van het antwoord ongedaan te maken.",
    PostAccepted: "Deze post werd aanvaard als antwoord.",

    NumLikes: (num: number) => num === 1 ? "1 Vind-ik-leuk" : num + " Vind-ik-leuks",
    NumDisagree: (num: number) => num + " Oneens",
    NumBury: (num: number) => num === 1 ? "1 Begraving" : num + " Begravingen",
    NumUnwanted: (num: number) => num === 1 ? "1 Ongewenst" : num + " Ongewenste",

    MoreVotes: "Meer stemmen...",
    LikeThis: "Zoals dit",
    LinkToPost: "Link naar deze post",
    Report: "Rapport",
    ReportThisPost: "Rapporteer deze post",
    Admin: "Admin",
    DiscIx: "Discussies index",

    Disagree: "Oneens",
    DisagreeExpl: "Klik hier als u oneens bent met deze post, of om anderen te waarschuwen voor feitelijke fouten.",
    Bury: "Begraven",
    BuryExpl: "Klik om andere posts voor deze te sorteren. Alleen forummedewerkers kunnen uw stem zien.",
    Unwanted: "Ongewenst",
    UnwantedExpl: "Als u deze post niet op deze website wilt. Dit kan mijn vertrouwen verkleinen " +
            "in de auteur van deze post author. Alleen forummedewerkers kunnen uw stem zien.",

    AddTags: "Toevoegen/verwijderen tags",
    UnWikify: "Un-Wikify",
    Wikify: "Wikify",
    PinDeleteEtc: "Pin / Verwijder / Categorie ...",
  },


  // Share dialog

  sd: {
    Copied: "Gekopieerd.",
    CtrlCToCopy: "CTRL+C om te kopiëren.",
    ClickToCopy: "Klik om link te kopiëren.",
  },


  // Chat

  c: {
    About_1: "Dit is het ",
    About_2: " chat kanaal, gemaakt door ",
    ScrollUpViewComments: "Omhoog scrollen om oudere opmerkingen te zien",
    Purpose: "Doel:",
    edit: "bewerk",
    'delete': "verwijder",
    MessageDeleted: "(Bericht verwijderd)",
    JoinThisChat: "Doe mee aan deze chat",
    PostMessage: "Post bericht",
    AdvancedEditor: "Geavanceerde editor",
    TypeHere: "Typ hier. Je kan Markdown en HTML gebruiken.",
  },


  // My Menu

  mm: {
    NeedsReview: "Moet worden herzien ",
    AdminHelp: "Admin help ",
    StaffHelp: "Forummedewerkers help ",
    DraftsEtc: "Concepten, boekwijzers, taken",
    MoreNotfs: "Alle meldingen bekijken",
    DismNotfs: "Alles als gelezen markeren",
    ViewProfile: "Uw profiel bekijken",
    ViewGroups: "Bekijk groepen",
    LogOut: "Uitloggen",
    UnhideHelp: "Toon help berichten",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Scrollen naar:",
    Scroll: "Scrollen",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "B",
    Back_2: "ack",
    BackExpl: "Scroll back naar uw voorgaande positie op deze pagina",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Pagina bovenkant",
    PgTopHelp: "Ga naar de bovenkant van de pagina. Toetsenbord shortcut: 1",
    Repl: "Antwoorden",
    ReplHelp: "Ga naar de antwoorden sectie. Shortcut: 2",
    Progr: "Vooruitgang",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Ga naar de vooruitgang sectie. Shortcut: 3",
    PgBtm: "Pagina onderkant",
    Btm: "Onderkant",
    BtmHelp: "Ga naar de onderkant van de pagina. Shortcut: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", en ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " om terug te scrollen",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Gebruikers selecteren",
    AddUsers: "Gebruikers toevoegen",
  },


  // About user dialog

  aud: {
    IsMod: "Is moderator.",
    IsAdm: "Is administrator.",
    IsDeld: "Is gedeactiveerd of verwijderd.",
    ThisIsGuest: "Dit is een gast, het kan iedereen zijn.",
    ViewInAdm: "Admin omgeving bekijken",
    ViewProfl: "Profiel bekijken",
    ViewComments: "Andere opmerkingen bekijken",
    RmFromTpc: "Uit het onderwerp verwijderen",
    EmAdrUnkn: "Onbekend e-mail adres — deze gast zal geen meldingen krijgen over de antwoorden.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Voorkeuren",
    Invites: "Uitnodigingen",
    DraftsEtc: "Concepten etc",
    About: "Over",
    Privacy: "Privacy",
    Account: "Account",
    Interface: "Interface",

    // ----- Overview stats

    JoinedC: "Deel genomen: ",
    PostsMadeC: "Gepost: ",
    LastPostC: "Laatste post: ",
    LastSeenC: "Laatst gezien: ",
    TrustLevelC: "Vertrouwings niveau: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Foto uploaden",
    ChangePhoto: "Foto kiezen",
    ImgTooSmall: "Afbeelding te klein: moet ten minste 100 x 100 zijn",

    // ----- Activity

    OnlyStaffCanSee: "Alleen forummedewerkers en vertrouwde kernleden kunnen dit zien.",
    OnlyMbrsCanSee: "Alleen mensen die een tijdje actief waren kunnen dit zien.",
    Nothing: "Niets om te tonen",
    Posts: "Posts",
    NoPosts: "Geen posts.",
    Topics: "Onderwerpen",
    NoTopics: "Geen onderwerpen.",

    // ----- User status

    UserBanned: "Deze gebruiker werd uitgesloten",
    UserSuspended: (dateUtc: string) => `Deze gebruiker werd geschorst tot ${dateUtc} UTC`,
    ReasonC: "Reden: ",

    DeactOrDeld: "Werd gedesactiveerd or verwijderd.",
    isGroup: " (een groep)",
    isGuest: " — een gast gebruiker, kan iedereen zijn",
    isMod: " – moderator",
    isAdmin: " – administrator",
    you: "(U)",

    // ----- Notifications page

    NoNotfs: "Geen meldingen",
    NotfsToYouC: "Meldingen aan u:",
    NotfsToOtherC: (name: string) => `Meldingen aan ${name}:`,
    DefNotfsSiteWide: "Standaard meldingen, volledige site",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "voor",

    // ----- Drafts Etc page

    NoDrafts: "Geen concepten",
    YourDraftsC: "Uw concepten:",
    DraftsByC: (name: string) => `Concepten van ${name}:`,

    // ----- Invites page

    InvitesIntro: "Hier kan je mensen uitnodigen om deel te nemen aan deze site. ",
    InvitesListedBelow: "Reeds verstuurde uitnodingingen staan hieronder.",
    NoInvites: "U hebt nog niemand uitgenodigd.",

    InvitedEmail: "Uitgenodigd e-mail",
    WhoAccepted: "Aanvaard door lid",
    InvAccepted: "Uitnodiging aanvaard",
    InvSent: "Uitnodiging verstuurd",
    JoinedAlready: "Deelnemend",

    SendAnInv: "Nodig uit", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "Uitnoding versturen",   // MISSING I18N is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // MISSING I18N changed to pluralis
        "Al uw vrienden krijgen een e-mail, met een link." +
        "onmiddellijk deelnemen, geen login vereist. " +
        "Ze worden gewone leden, geen moderators of admins.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Gedaan. Ik verstuur ze een e-mail.",
    NoOneToInv: "Niemand om uit te nodigen.",
    InvNotfLater: "Ik stuur u een melding, als ik ze uitgenodigd heb.",
    AlreadyInvSendAgainQ: "Deze werden reeds uitgenodigd — wilt u ze  opnieuw uitnodigen?",
    InvErr_1: "Dit gaf ",
    InvErr_2: "foutmeldingen",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Deze zijn al deelnemers, ze werden niet opnieuw uitgenodigd:",
    ResendInvsQ: "Uitnodigingen opnieuw versturen aan deze personen? Ze werden reeds uitgenodigd.",
    InvAgain: "Opnieuw uitnodigen",

    // ----- Preferences, About

    AboutYou: "Over u",
    WebLink: "Elke website of pagina van u.",

    NotShownCannotChange: "Niet publiek getoond. Kan niet gewijzigd worden.",

    // The full name or alias:
    NameOpt: "Naam (optioneel)",

    NotShown: "Niet publiek getoond.",

    // The username:
    MayChangeFewTimes: "U mag deze maar enkele keren wijzigen.",
    notSpecified: "(niet gespecifieerd)",
    ChangeUsername_1: "U mag uw gebruikersnaam maar enkele keren wijzigen.",
    ChangeUsername_2: "Het teveel wijzigen kan verwarringen teweeg brengen — " +
        "men zal niet meer weten hoe u te @vernoemen.",

    NotfAboutAll: "Krijg melding over elke nieuwe post (tenzij meldingen uitgeschakeld zijn voor het onderwerp of categorie)",
    NotfAboutNewTopics: "Krijg melding over nieuwe onderwerpen (tenzij meldingen uitgeschakeld zijn voor deze categorie)",

    ActivitySummaryEmails: "E-mails met activiteitenoverzicht",

    EmailSummariesToGroup:
        "Als leden van deze groep hier niet bezoeken, stuur ze standaard een e-mail " +
        "overzichten van populaire onderwerpen en andere dingen.",
    EmailSummariesToMe:
        "Als ik hier niet bezoek, stuur me een e-mail " +
        "overzichten van populaire onderwerpen en andere dingen.",

    AlsoIfTheyVisit: "Stuur ook een e-mail als ze regelmatige bezoekers zijn.",
    AlsoIfIVisit: "Stuur me ook een e-mail als ik hier regelmatig kom.",

    HowOftenWeSend: "Hoe dikwijls dienen we dezz e-mails te versturen?",
    HowOftenYouWant: "Hoe dikwijls wenst u deze e-mails te ontvangen?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Uw recente activiteiten voor vreemden en nieuwe leden verbergen?",
    HideActivityStrangers_2: "(Maar voor de leden die een tijdje actief waren.)",
    HideActivityAll_1: "Uw recente activiteit voor iedereen verbergen?",
    HideActivityAll_2: "(Behalve voor forummedewerkers en vertrouwde kernleden.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "E-mail adressen",
    PrimaryDot: "Primair. ",
    VerifiedDot: "Gecontroleerd. ",
    NotVerifiedDot: "Niet gecontroleerd. ",
    ForLoginWithDot: (provider: string) => `Om in te loggen met ${provider}. `,
    MakePrimary: "Primair maken",
    AddEmail: "E-mail adres toevoegen",
    TypeNewEmailC: "Typ een nieuw e-mail adres:",
    MaxEmailsInfo: (numMax: number) => `(Niet meer dan ${numMax} adressen toevoegen.)`,
    EmailAdded_1: "Toegevoegd. We hebben u een e-mail gestuurd ter controle — ",
    EmailAdded_2: "check uw e-mail postvak IN.",
    SendVerifEmail: "Verzend verificatie e-mail",

    EmailStatusExpl:
        "('Primair' betekent dat u kan inloggen via dit adres, en we sturen er meldingen naar. " +
        "'Gecontroleerd' betekent dat u op de verificatie link geklikt hebt in de verificatie mail.)",

    // Password:
    ChangePwdQ: "Wijzig wachtwoord?",
    CreatePwdQ: "Maak wachtwoord?",
    WillGetPwdRstEml: "U zal een e-mail krijgen om het wachtwoord te resetten.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Geen",

    // Logins:
    LoginMethods: "Inlog methoden",
    commaAs: ", als: ",

    // One's data:
    YourContent: "Uw inhoud",
    DownloadPosts: "Posts downloaden",
    DownloadPostsHelp: "Maakt een JSON bestand met een kopie van onderwerpen en reacties dat je gepost hebt.",
    DownloadPersData: "Persoonlijke data downloaden",
    DownloadPersDataHelp: "Maakt een JSON bestand met een kopie van uw persoonlijke dat, bijv. uw naam " +
        "(indien u een naam vermeldde) en een e-mail adres.",


    // Delete account:
    DangerZone: "Gevaren zone",
    DeleteAccount: "Verwijder account",
    DeleteYourAccountQ:
        "Uw account verwijderen? We verwijderen uw naam, vergeten uw e-mail adres, wachtwoord en " +
        "alle online identificaties (zoals Facebook of Twitter login). " +
        "U hierna niet meer inloggen. U kunt dit niet ongedaan maken.",
    DeleteUserQ:
        "Deze gebruiker verwijderen? We verwijderen de naam, vergeten het e-mail adres, wachtwoord en " +
        "alle online identificaties (zoals Facebook of Twitter login). " +
        "De gebruiker kan hierna niet meer inloggen. Dit niet ongedaan gemaakt worden.",
    YesDelete: "JA, verwijderen",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Groepsleden",
    NoMembers: "Geen leden.",
    MayNotListMembers: "Mag geen leden vermelden.",
    AddMembers: "Leden toevoegen",
    BuiltInCannotModify: "Dit is een ingebouwde groep; ze kan niet gewijzigd worden.",
    NumMembers: (num: number) => `${num} leden`,
    YouAreMember: "U bent lid.",
    CustomGroupsC: "Aangepaste groepen:",
    BuiltInGroupsC: "Ingebouwde groepen:",
    DeleteGroup: "Verwijder deze groep",
  },


  // Create user dialog

  cud: {
    CreateUser: "Maak gebruiker",
    CreateAccount: "Maak account",
    EmailC: "E-mail:",  // REMOVE move to t.EmailC instead
    keptPriv: "Zal privé blijven",
    forNotfsKeptPriv: "voor het melden van antwoorden, blijft privé",
    EmailVerifBy_1: "Uw e-mail werd geverificeerd door ",
    EmailVerifBy_2: ".",
    UsernameC: "Gebruikersnaam:",
    FullNameC: "Naam:",
    optName: "optioneel",

    OrCreateAcct_1: "of ",
    OrCreateAcct_2: "Maak een account",
    OrCreateAcct_3: " met ",
    OrCreateAcct_4: "@gebruikersnaam",
    OrCreateAcct_5: " & wachtwoord",

    DoneLoggedIn: "Account aangemaakt. U werd ingelogd.",  // COULD say if verif email sent too?
    AlmostDone:
        "Bijna gedaan! U moet uw e-mail adres bevestigen. We hebben " +
        "u een e-mail verstuurd. klik op de link om te activeren " +
        "Uw account. U kan deze pagina sluiten.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Voorwaarden en Privacy",

    Accept_1: "Aanvaard u onze ",
    TermsOfService: "Service voorwaarden",
    TermsOfUse: "Gebruiksvoorwaarden",
    Accept_2: " en ",
    PrivPol: "Privacybeleid",
    Accept_3_User: "?",
    Accept_3_Owner: " voor site eigenaars?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "JA ik aanvaard",
  },


  // Password input

  pwd: {
    PasswordC: "Wachtwoord:",
    StrengthC: "Sterkte: ",
    FairlyWeak: "Redelijk zwak.",
    toShort: "te kort",
    TooShort: (minLength: number) => `Te kort. Moet ten minste ${minLength} karakters zijn`,
    PlzInclDigit: "Voeg een cijfer of speciaal teken toe",
    TooWeak123abc: "Te zwak. Gebruik geen wachtwoorden zoals '12345' of 'abcde'.",
    AvoidInclC: "Vermijd het opnemen van (delen van) uw naam of e-mailadres in het wachtwoord:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Pagina niet gevonden of toegang geweigerd.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "U doet zich voor als iemand die misschien geen toegang heeft tot alle delen " +
        "van deze website.",

    IfYouThinkExistsThen: "Als u denkt dat de pagina bestaat, log dan in als iemand die er toegang toe heeft. ",
    LoggedInAlready: "(U bent al ingelogd, maar misschien is het het verkeerde account?) ",
    ElseGoToHome_1: "U kan anders ",
    ElseGoToHome_2: "naar de startpagina gaan.",

    CreateAcconut: "Account maken",
    ContinueWithDots: "Ga verder met ...",
    SignUp: "Deelnemen",
    LogIn: "Inloggen",
    LogInWithPwd: "Inloggen met wachtwoord",
    CreateAdmAcct: "Maak een admin account:",
    AuthRequired: "Authentificatie vereist om deze site te bezoeken",
    LogInToLike: "Log in om deze post leuk te vinden",
    LogInToSubmit: "Log in en dien in",
    LogInToComment: "Log in om te reageren",
    LogInToCreateTopic: "Log in om een onderwerp te aan te maken",

    AlreadyHaveAcctQ: "Hebt u een account? ",  // MISSING changed "Already have...?" to "You have...?"
    LogInInstead_1: "",
    LogInInstead_2: "Log in",   // "Log in" (this is a button)
    LogInInstead_3: " anders", // "instead"

    NewUserQ: "Nieuwe gebruiker? ",
    SignUpInstead_1: "",
    SignUpInstead_2: "Account aanmaken", // (this is a button)
    SignUpInstead_3: " anders",

    OrCreateAcctHere: "Of account aanmaken:",
    OrTypeName: "Of typ uw naam:",
    OrLogIn: "Of log in:",
    YourNameQ: "Uw naam?",

    BadCreds: "Verkeerde gebruikersnaam of wachtwoord",

    UsernameOrEmailC: "Gebruikersnaam of e-mail:",
    PasswordC: "Wachtwoord:",
    ForgotPwd: "Wachtwoord vergeten?",

    NoPwd: "U hebt nog geen wachtwoord gekozen.",
    CreatePwd: "Wachtwoord maken",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Vertel ons waarover u zich zorgen maakt.",
    ThanksHaveReported: "Bedankt. U heeft het gemeld. De forummedewerkers zullen een kijkje nemen. ",
    ReportComment: "Reactie rapporteren",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Dit bericht bevat persoonlijke gegevens, bijvoorbeeld iemands echte naam.",
    OptOffensive: "Dit bericht bevat aanstootgevende of beledigende inhoud.",
    OptSpam: "Dit bericht is een ongewenste advertentie.",
    OptOther: "Stel het personeel om een andere reden op de hoogte van dit bericht.",
  },


  // Help message dialog
  help: {
    YouCanShowAgain_1: "U kunt hulpberichten opnieuw laten zien, als u bent ingelogd, door " +
        "te klikken op uw naam en dan",
    YouCanShowAgain_2: "Help berichten verbergen",
  },


  // Editor

  e: {
    SimilarTopicsC: "Gelijkaardige onderwerpen:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Sorry, maar momenteel kunt u slechts één bestand tegelijk uploaden",
    PleaseFinishPost: "Voltooi eerst het schrijven van uw bericht",
    PleaseFinishChatMsg: "Voltooi eerst het schrijven van uw chatbericht",
    PleaseFinishMsg: "Maak eerst uw bericht af",
    PleaseSaveEdits: "Sla eerst uw huidige bewerkingen op",
    PleaseSaveOrCancel: "Sla eerst uw nieuwe onderwerp op of annuleer het",
    CanContinueEditing: "U kunt doorgaan met het bewerken van uw tekst als u de editor opnieuw opent.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Verwijder niet alle tekst. Schrijf iets.",
    PleaseWriteSth: "Schrijf iets.",
    PleaseWriteTitle: "Schrijf een onderwerptitel.",
    PleaseWriteMsgTitle: "Schrijf een berichttitel.",
    PleaseWriteMsg: "Schrijf een bericht.",

    exBold: "vetgedrukte tekst",
    exEmph: "benadrukte tekst",
    exPre: "vooraf opgemaakte tekst",
    exQuoted: "geciteerde tekst",
    ExHeading: "Rubriek",

    TitlePlaceholder: "Typ een titel - waar gaat dit over, in één korte zin?",

    EditPost_1: "Bewerk ",
    EditPost_2: "post ",

    TypeChatMsg: "Typ een chatbericht:",
    YourMsg: "Uw bericht:",
    CreateTopic: "Maak een nieuw onderwerp",
    CreateCustomHtml: "Maak een aangepaste HTML-pagina (voeg uw eigen <h1> titel)",
    CreateInfoPage: "Maak een info-pagina",
    CreateCode: "Maak een broncodepagina",
    AskQuestion: "Stel een vraag",
    ReportProblem: "Meld een probleem",
    SuggestIdea: "Stel een idee voor",
    NewChat: "Nieuwe titel en doel van chatkanalen",
    NewPrivChat: "Nieuwe titel en doel voor privéchat",
    AppendComment: "Voeg een opmerking toe onderaan de pagina:",

    ReplyTo: "Antwoord aan ",
    ReplyTo_theOrigPost: "het oorspronkelijke bericht",
    ReplyTo_post: "bericht ",
    AddCommentC: "Voeg een reactie toe:",   // MISSING, & dupl t.AddComment

    PleaseSelectPosts: "Selecteer een of meer berichten om op te reageren.",

    Save: "Bewaar",
    edits: "wijzigingen",

    PostReply: "Antwoord posten",
    PostComment: "Reactie posten",

    Post: "Bericht",
    comment: "reactie",
    question: "vraag",

    PostMessage: "Bericht posten",
    SimpleEditor: "Eenvoudige editor",

    Send: "Verstuur",
    message: "bericht",

    Create: "Maak",
    page: "pagina",
    chat: "chat",
    idea: "idee",
    topic: "onderwerp",

    Submit: "Indienen",
    problem: "probleem",

    ViewOldEdits: "Overzicht oude wijzigingen",

    UploadBtnTooltip: "Upload een bestand of afbeelding",
    BoldBtnTooltip: "Maak tekst vetgedrukt",
    EmBtnTooltip: "Benadrukken",
    QuoteBtnTooltip: "Citaat",
    PreBtnTooltip: "Voorgeformatteerde tekst",
    HeadingBtnTooltip: "Rubriek",

    TypeHerePlaceholder: "Typ hier. U kunt Markdown en HTML gebruiken. Sleep en zet neer om afbeeldingen te plakken.",

    Maximize: "Maximaliseren",
    ToNormal: "Terug naar normaal",
    TileHorizontally: "Tegel horizontaal",

    PreviewC: "Voorbeeld:",
    TitleExcl: " (titel uitgesloten)",
    ShowEditorAgain: "Toon editor opnieuw",
    Minimize: "Minimaliseren",

    IPhoneKbdSpace_1: "(Deze grijze ruimte is gereserveerd",
    IPhoneKbdSpace_2: "voor het iPhone-toetsenbord.)",

    PreviewInfo: "Hier kunt u een voorbeeld bekijken van hoe uw bericht eruit zal zien.",
    CannotType: "U kunt hier niet typen.",

    LoadingDraftDots: "Een concept laden ...",
    DraftUnchanged: "Ongewijzigd.",
    CannotSaveDraftC: "Kan concept niet opslaan:",
    DraftSavedBrwsr: "Concept opgeslagen in browser.",   // MISSING
    DraftSaved: (nr: string | number) => `Concept ${nr} bewaard.`,
    DraftDeleted: (nr: string | number) => `Concept ${nr} verwijderd.`,
    WillSaveDraft: (nr: string | number) => `Zal concept ${nr} bewaren...`,
    SavingDraft: (nr: string | number) => `Bewaren van concept ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Verwijderen van concept ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Categorie selecteren",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Selecteer onderwerptype:",
    DiscussionExpl: "Een discussie over iets.",
    QuestionExpl: "Een antwoord kan worden gemarkeerd als het geaccepteerde antwoord.",
    ProblExpl: "Als er iets kapot is of niet werkt. Kan worden gemarkeerd als opgelost / opgelost.",
    IdeaExpl: "Een suggestie. Kan worden gemarkeerd als klaar / geïmplementeerd.",
    ChatExpl: "Een misschien nooit eindigend gesprek.",
    PrivChatExpl: "Alleen zichtbaar voor mensen die worden uitgenodigd om deel te nemen aan de chat.",

    CustomHtml: "Aangepaste HTML-pagina",
    InfoPage: "Info pagina",
    Code: "Code",
    EmbCmts: "Ingesloten opmerkingen",
    About: "Over",
    PrivChat: "Private Chat",
    Form: "Formulier",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Geen communities meer om lid te worden.",
    SelCmty: "Selecteer community ...",
  },


  // Search dialogs and the search page.

  s: {
    TxtToFind: "Tekst om naar te zoeken",
  },


  // No internet

  ni: {
    NoInet: "Geen internet verbinding",
    PlzRefr: "Vernieuw de pagina om de laatste wijzigingen te zien. (De verbinding was verbroken)",
    RefrNow: "Nu vernieuwen",
  },


  PostDeleted: (postNr: number) => `Bericht, nr ${postNr}, is verwijderd.`,
  NoSuchPost: (postNr: number) => `Er is geen bericht met nr ${postNr} op deze pagina.`,
  NoPageHere: "Deze pagina is verwijderd, of heeft nooit bestaan, of u hebt er misschien geen toegang toe.",
  GoBackToLastPage: "Ga terug naar de laatste pagina",

};


