export const translations = {
  ja: {
    // ヘッダー
    home: "ホーム",
    about: "概要",
    tech: "技術スタック",
    detail: "内容詳細",
    faq: "よくあるご質問",
    japanese: "日本語",
    english: "English",
    download: "DOWNLOAD",
    followUs: "FOLLOW US",

    // ホームページ
    heroTitle: "遅刻リンピック",
    heroSubtitle: "遅刻王を決める",
    viewCompetition: "競技を見る",
    readDetails: "詳細を読む",

    // 特徴セクション
    featuresTitle: "遅刻リンピックの特徴",
    uniqueCompetition: "ユニークな競技",
    uniqueCompetitionDesc: "遅刻をテーマにした、iOSアプリです。",
    laughterAndEmpathy: "笑いと共感",
    laughterAndEmpathyDesc: "グループ内での遅刻者を特定できます。",
    visualization: "遅刻の可視化",
    visualizationDesc:
      "遅刻度を可視化することで、遅刻者に焦りをもたらすことができます。",

    // 競技種目
    competitionTitle: "主な競技種目",
    lastMinuteRace: "ギリギリ到着レース",
    lastMinuteRaceDesc: "制限時間ギリギリに到着できるかを競う",
    oversleepMarathon: "寝坊マラソン",
    oversleepMarathonDesc: "どれだけ自然に寝坊できるかを競う",
    excusePresentation: "言い訳プレゼンテーション",
    excusePresentationDesc: "遅刻の言い訳をユーモアたっぷりに発表",
    alarmSnoozeChampionship: "アラームスヌーズ選手権",
    alarmSnoozeChampionshipDesc: "アラームを何度スヌーズできるか",

    // フッター
    copyright: "遅刻リンピック実行委員会",

    // About ページ
    aboutTitle: "遅刻リンピック 概要",
    aboutDescription:
      '遅刻リンピックは、現代社会の"遅刻"という現象をポジティブに捉え直し、ユーモアと競技性を融合させた新感覚アプリケーションです。',
    uniqueCompetitionAbout: "ユニークな競技",
    uniqueCompetitionAboutDesc:
      "遅刻をテーマにした多彩な競技で、参加者の創造性とユーモアを競い合います。",
    openAtmosphere: "オープンな雰囲気",
    openAtmosphereDesc:
      "グループIDとパスワードで誰でも参加できる、笑いと共感を生むコミュニティを形成します。",
    newValues: "新しい価値観",
    newValuesDesc:
      "遅刻を前向きに捉えることで、社会問題への新しいアプローチを提案します。",
    communityBuilding: "コミュニティ形成",
    communityBuildingDesc:
      "遅刻者が多くても参加者同士が笑い合い、共感し合える新しいコミュニティを作ります。",
    ourVision: "私たちのビジョン",
    ourVisionDesc:
      "遅刻リンピックを通じて、現代社会の時間に対するプレッシャーを軽減し、遅刻という現象を楽しく、前向きに捉える文化を創造します。また、誰もが経験する遅刻を、競技として楽しむことで、新しい価値観とコミュニティを生み出していきます。",

    // Tech ページ
    techTitle: "技術スタック",
    techDescription:
      "遅刻リンピックを構築するために使用している最新の技術スタックをご紹介します。",
    // Techページ カード
    techFrontend: [
      {
        icon: "🍎",
        title: "Swift",
        description:
          "iOSアプリ開発用の言語。型安全で高速なネイティブアプリを構築。",
        tag: "ネイティブ開発",
      },
      {
        icon: "🔥",
        title: "Firebase",
        description: "Google認証とFCMトークン発行による通知機能を実装。",
        tag: "認証・通知",
      },
      {
        icon: "🔐",
        title: "Google認証",
        description:
          "Firebase Authenticationを使用した安全なユーザー認証システム。",
        tag: "セキュリティ",
      },
      {
        icon: "📱",
        title: "FCM通知",
        description:
          "Firebase Cloud Messagingによるリアルタイムプッシュ通知機能。",
        tag: "リアルタイム",
      },
      {
        icon: "🎨",
        title: "SwiftUI",
        description:
          "宣言的UIフレームワークで、モダンなインターフェースを構築。",
        tag: "モダンUI",
      },
      {
        icon: "⚡",
        title: "Core Data",
        description: "ローカルデータ管理とオフライン対応機能を実装。",
        tag: "データ管理",
      },
    ],
    techBackend: [
      {
        icon: "🐹",
        title: "Go",
        description: "高性能で並行処理に優れた言語。APIサーバーの構築に使用。",
        tag: "高速・軽量",
      },
      {
        icon: "⚡",
        title: "Echo",
        description: "軽量で高速なWebフレームワーク。RESTful APIの構築に最適。",
        tag: "高パフォーマンス",
      },
      {
        icon: "🐳",
        title: "Docker",
        description:
          "コンテナ化技術で環境の一貫性を保証。デプロイメントを効率化。",
        tag: "環境統一",
      },
      {
        icon: "☁️",
        title: "Google Cloud Run",
        description:
          "サーバーレスコンテナプラットフォーム。自動スケーリング対応。",
        tag: "サーバーレス",
      },
      {
        icon: "🍃",
        title: "MongoDB",
        description:
          "ユーザー、イベント、グループ管理と到着予定時刻の比較セグメント。",
        tag: "ドキュメントDB",
      },
      {
        icon: "🔴",
        title: "Redis",
        description:
          "インメモリデータベース。WebSocket通信でのランキング保持に使用。",
        tag: "高速キャッシュ",
      },
    ],

    // Detail ページ
    detailTitle: "内容詳細",
    detailDescription:
      "遅刻リンピックの具体的な競技内容やルール、楽しみ方を詳しくご紹介します。",
    lastMinuteRaceDetail: "ギリギリ到着レース",
    lastMinuteRaceDetailDesc: "制限時間ギリギリに到着できるかを競う競技です。",
    timeLimit: "制限時間：30分",
    arrivalTimeScore: "到着時間が制限時間に近いほど高得点",
    earlyLatePenalty: "早すぎても遅すぎても減点",
    oversleepMarathonDetail: "寝坊マラソン",
    oversleepMarathonDetailDesc: "どれだけ自然に寝坊できるかを競う競技です。",
    targetWakeTime: "目標起床時間：8:00",
    naturalOversleep: "自然な寝坊具合を審査",
    excuseCredibility: "言い訳の説得力も評価",
    excusePresentationDetail: "言い訳プレゼンテーション",
    excusePresentationDetailDesc:
      "遅刻の言い訳をユーモアたっぷりに発表する競技です。",
    presentationTime: "発表時間：3分",
    creativityHumor: "創造性とユーモアを評価",
    audienceLaughter: "観客の笑い声で判定",
    alarmSnoozeChampionshipDetail: "アラームスヌーズ選手権",
    alarmSnoozeChampionshipDetailDesc:
      "アラームを何度スヌーズできるかを競う競技です。",
    timeLimit1Hour: "制限時間：1時間",
    snoozeCount: "スヌーズ回数を記録",
    finalWakeTime: "最終的な起床時間も評価",
    howToEnjoy: "楽しみ方",
    asParticipant: "参加者として",
    asParticipantDesc: "自分の遅刻力を競技で試してみましょう。",
    asSpectator: "観客として",
    asSpectatorDesc: "他の参加者のユニークな競技を楽しみましょう。",
    asCommunity: "コミュニティ",
    asCommunityDesc: "新しい価値観を共有する仲間を見つけましょう。",
    joinUs: "参加してみませんか？",
    joinUsDesc: "遅刻リンピックで、新しい自分を発見しましょう。",
    applyToJoin: "参加申し込み",
  },
  en: {
    // ヘッダー
    home: "Home",
    about: "About",
    tech: "Tech Stack",
    detail: "Details",
    faq: "FAQ",
    japanese: "日本語",
    english: "English",
    download: "DOWNLOAD",
    followUs: "FOLLOW US",

    // ホームページ
    heroTitle: "Chikokulympic",
    heroSubtitle: "Determining the Late King",
    viewCompetition: "View Competition",
    readDetails: "Read Details",

    // 特徴セクション
    featuresTitle: "Features of Chikokulympic",
    uniqueCompetition: "Unique Competition",
    uniqueCompetitionDesc: "An iOS app themed around being late.",
    laughterAndEmpathy: "Laughter and Empathy",
    laughterAndEmpathyDesc: "Identify latecomers within the group.",
    visualization: "Visualization of Lateness",
    visualizationDesc: "Visualizing lateness creates urgency for latecomers.",

    // 競技種目
    competitionTitle: "Main Competition Events",
    lastMinuteRace: "Last Minute Arrival Race",
    lastMinuteRaceDesc: "Compete to arrive just in time",
    oversleepMarathon: "Oversleep Marathon",
    oversleepMarathonDesc: "Compete to oversleep naturally",
    excusePresentation: "Excuse Presentation",
    excusePresentationDesc: "Present late excuses with humor",
    alarmSnoozeChampionship: "Alarm Snooze Championship",
    alarmSnoozeChampionshipDesc: "How many times you can snooze the alarm",

    // フッター
    copyright: "Chikokulympic Executive Committee",

    // About ページ
    aboutTitle: "Chikokulympic Overview",
    aboutDescription:
      "Chikokulympic is a new sensation application that positively reinterprets the phenomenon of 'being late' in modern society, combining humor and competitiveness.",
    uniqueCompetitionAbout: "Unique Competition",
    uniqueCompetitionAboutDesc:
      "We compete with participants' creativity and humor through diverse competitions themed around being late.",
    openAtmosphere: "Open Atmosphere",
    openAtmosphereDesc:
      "Anyone can join with a group ID and password, forming a community that creates laughter and empathy.",
    newValues: "New Values",
    newValuesDesc:
      "By positively viewing lateness, we propose new approaches to social issues.",
    communityBuilding: "Community Building",
    communityBuildingDesc:
      "Even if there are many latecomers, participants can laugh and empathize with each other, creating a new community.",
    ourVision: "Our Vision",
    ourVisionDesc:
      "Through Chikokulympic, we reduce the pressure of time in modern society and create a culture that views the phenomenon of being late in a fun and positive way. Also, by enjoying lateness as a competition that everyone experiences, we create new values and communities.",

    // Tech ページ
    techTitle: "Tech Stack",
    techDescription:
      "We introduce the latest technology stack used to build Chikokulympic.",
    // Techページ カード
    techFrontend: [
      {
        icon: "🍎",
        title: "Swift",
        description:
          "Language for iOS app development. Type-safe and fast for building native apps.",
        tag: "Native Development",
      },
      {
        icon: "🔥",
        title: "Firebase",
        description:
          "Implements notification features with Google Auth and FCM token issuance.",
        tag: "Auth & Notification",
      },
      {
        icon: "🔐",
        title: "Google Auth",
        description:
          "Secure user authentication system using Firebase Authentication.",
        tag: "Security",
      },
      {
        icon: "📱",
        title: "FCM Notification",
        description:
          "Real-time push notification feature with Firebase Cloud Messaging.",
        tag: "Real-time",
      },
      {
        icon: "🎨",
        title: "SwiftUI",
        description: "Declarative UI framework for building modern interfaces.",
        tag: "Modern UI",
      },
      {
        icon: "⚡",
        title: "Core Data",
        description: "Implements local data management and offline support.",
        tag: "Data Management",
      },
    ],
    techBackend: [
      {
        icon: "🐹",
        title: "Go",
        description:
          "High-performance language with excellent concurrency. Used for API server.",
        tag: "Fast & Lightweight",
      },
      {
        icon: "⚡",
        title: "Echo",
        description:
          "Lightweight and fast web framework. Ideal for building RESTful APIs.",
        tag: "High Performance",
      },
      {
        icon: "🐳",
        title: "Docker",
        description:
          "Containerization technology ensures environment consistency and efficient deployment.",
        tag: "Unified Environment",
      },
      {
        icon: "☁️",
        title: "Google Cloud Run",
        description: "Serverless container platform with auto-scaling support.",
        tag: "Serverless",
      },
      {
        icon: "🍃",
        title: "MongoDB",
        description:
          "Manages users, events, groups, and arrival time comparison segments.",
        tag: "Document DB",
      },
      {
        icon: "🔴",
        title: "Redis",
        description:
          "In-memory database. Used for ranking in WebSocket communication.",
        tag: "Fast Cache",
      },
    ],

    // Detail ページ
    detailTitle: "Details",
    detailDescription:
      "We introduce in detail the specific competition content, rules, and ways to enjoy Chikokulympic.",
    lastMinuteRaceDetail: "Last Minute Arrival Race",
    lastMinuteRaceDetailDesc:
      "A competition to see if you can arrive just in time.",
    timeLimit: "Time limit: 30 minutes",
    arrivalTimeScore: "Higher score for arrival time closer to the limit",
    earlyLatePenalty: "Penalty for being too early or too late",
    oversleepMarathonDetail: "Oversleep Marathon",
    oversleepMarathonDetailDesc:
      "A competition to see how naturally you can oversleep.",
    targetWakeTime: "Target wake time: 8:00",
    naturalOversleep: "Judging natural oversleeping",
    excuseCredibility: "Also evaluating the persuasiveness of excuses",
    excusePresentationDetail: "Excuse Presentation",
    excusePresentationDetailDesc:
      "A competition to present late excuses with humor.",
    presentationTime: "Presentation time: 3 minutes",
    creativityHumor: "Evaluating creativity and humor",
    audienceLaughter: "Judging by audience laughter",
    alarmSnoozeChampionshipDetail: "Alarm Snooze Championship",
    alarmSnoozeChampionshipDetailDesc:
      "A competition to see how many times you can snooze the alarm.",
    timeLimit1Hour: "Time limit: 1 hour",
    snoozeCount: "Recording snooze count",
    finalWakeTime: "Also evaluating final wake time",
    howToEnjoy: "How to Enjoy",
    asParticipant: "As a Participant",
    asParticipantDesc: "Try your lateness skills in competition.",
    asSpectator: "As a Spectator",
    asSpectatorDesc: "Enjoy the unique competitions of other participants.",
    asCommunity: "Community",
    asCommunityDesc: "Find friends who share new values.",
    joinUs: "Join Us?",
    joinUsDesc: "Discover a new self at Chikokulympic.",
    applyToJoin: "Apply to Join",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.ja;
