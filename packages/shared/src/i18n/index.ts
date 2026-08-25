import { EventType } from '../types/index.js';

export type SupportedLocale = 'en' | 'ko';

export interface TranslationSchema {
  appName: string;
  tagline: string;
  nav: {
    today: string;
    map: string;
    analytics: string;
    settings: string;
    import: string;
  };
  events: Record<EventType, { name: string; action: string; desc: string }>;
  streak: {
    badge: (days: number) => string;
    subtitle: string;
  };
  home: {
    greeting: (petName: string) => string;
    vibeLine: string;
    todayStats: string;
    quickLog: string;
    recentActivity: string;
    noEventsToday: string;
    tapToLogFirst: string;
    offlineMode: string;
    pendingSync: (count: number) => string;
  };
  logger: {
    title: (eventName: string) => string;
    time: string;
    notesPlaceholder: string;
    locationTag: string;
    addLocation: string;
    save: string;
    cancel: string;
    saving: string;
    loggedSuccess: (eventName: string) => string;
  };
  analytics: {
    title: string;
    subtitle: string;
    clock24hTitle: string;
    clock24hDesc: string;
    frequencyTitle: string;
    periods: {
      days7: string;
      days30: string;
      allTime: string;
    };
    healthWatch: string;
    vomitCount: (count: number) => string;
    medCount: (count: number) => string;
    daysNoPoop: (days: number) => string;
    streakTitle: string;
    totalLogs: string;
  };
  map: {
    title: string;
    startWalk: string;
    pauseWalk: string;
    resumeWalk: string;
    stopWalk: string;
    distance: string;
    duration: string;
    logPoopOnWalk: string;
    logPeeOnWalk: string;
    noLocationsYet: string;
  };
  importer: {
    title: string;
    subtitle: string;
    dropText: string;
    selectFile: string;
    dryRunTitle: string;
    totalEvents: string;
    targetPet: string;
    dateSpan: string;
    confirmImport: string;
    importing: string;
    success: (count: number) => string;
  };
  settings: {
    back: string;
    title: string;
    signedInPlan: string;
    language: string;
    english: string;
    korean: string;
    household: string;
    householdCount: (people: number, pets: number) => string;
    invite: string;
    people: string;
    inviteSomeone: string;
    pets: string;
    addPet: string;
    nudges: string;
    walkReminders: string;
    walkRemindersSub: string;
    weeklyDigest: string;
    weeklyDigestSub: string;
    unusualGap: string;
    unusualGapSub: string;
    vetShare: string;
    vetShareSub: string;
    yourData: string;
    importCsv: string;
    importCsvSub: string;
    exportCsv: string;
    exportCsvSub: string;
    signOut: string;
    version: string;
    logsUnit: string;
    // Legacy support keys
    activeHousehold: string;
    switchHousehold: string;
    members: string;
    invitePartner: string;
    inviteDesc: string;
    copyCode: string;
    copied: string;
    joinHousehold: string;
    joinAnotherHousehold: string;
    enterCode: string;
    joinBtn: string;
    currentPet: string;
    syncStatus: string;
    online: string;
    offline: string;
    signedOutSuccess: string;
  };
  invite: {
    back: string;
    title: string;
    subtitle: string;
    theyJoinAs: string;
    roles: {
      full: { name: string; sub: string };
      logOnly: { name: string; sub: string };
    };
    inviteCode: string;
    expiresIn7Days: string;
    copyCode: string;
    shareLink: string;
    pending: string;
    revoke: string;
    pendingHelp: string;
    codeCopied: string;
    codeCopiedSub: (code: string) => string;
    inviteRevoked: string;
    inviteRevokedSub: (code: string) => string;
  };
  auth: {
    welcomeTitle: string;
    welcomeSubtitle: string;
    tagline: string;
    tabLogIn: string;
    tabSignUp: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    logInBtn: string;
    loggingIn: string;
    forgotPassword: string;
    or: string;
    googleBtn: string;
    newHere: string;
    makeAccount: string;
    gotInviteCode: string;
    show: string;
    hide: string;
    // Multi-Step SignUp
    signupStep1: {
      back: string;
      stepCount: string;
      title: string;
      subtitle: string;
      yourName: string;
      yourNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      password: string;
      passwordPlaceholder: string;
      weak: string;
      good: string;
      strong: string;
      nextTheDog: string;
      disclaimer: string;
    };
    signupStep2: {
      back: string;
      stepCount: string;
      title: string;
      subtitle: string;
      photo: string;
      name: string;
      namePlaceholder: string;
      householdName: string;
      householdNamePlaceholder: string;
      householdHelp: string;
      size: string;
      sizes: {
        S: { label: string; kg: string };
        M: { label: string; kg: string };
        L: { label: string; kg: string };
        XL: { label: string; kg: string };
      };
      whatTrack: string;
      trackingOptions: Record<string, string>;
      startTracking: string;
      alreadyTracking: string;
      importHistory: string;
    };
    // Multi-Step Join
    joinStep1: {
      back: string;
      title: string;
      subtitle: string;
      enterCode: string;
      continueBtn: string;
      perksTitle: string;
      perks: string[];
    };
    joinStep2: {
      back: string;
      codeAccepted: string;
      summarySubtitle: (count: string, role: string) => string;
      title: string;
      subtitle: string;
      yourName: string;
      yourNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      password: string;
      passwordPlaceholder: string;
      howTheySeeYou: string;
      joinHouseholdBtn: string;
      footerDisclaimer: string;
    };
    // Legacy fallback keys
    signUpBtn: string;
    signingUp: string;
    signUpModeCreate: string;
    signUpModeJoin: string;
    noAccountPrompt: string;
    hasAccountPrompt: string;
    ownerNameLabel: string;
    ownerNamePlaceholder: string;
    householdNameLabel: string;
    householdNamePlaceholder: string;
    petNameLabel: string;
    petNamePlaceholder: string;
    speciesLabel: string;
    speciesDog: string;
    speciesCat: string;
    speciesOther: string;
    breedLabel: string;
    breedPlaceholder: string;
    inviteCodeLabel: string;
    inviteCodePlaceholder: string;
    inviteCodeHint: string;
    yourNameLabel: string;
    yourNamePlaceholder: string;
    yourRoleLabel: string;
    yourRolePlaceholder: string;
    errors: {
      emailRequired: string;
      invalidEmail: string;
      passwordRequired: string;
      passwordTooShort: string;
      logInFailed: string;
      signUpFailed: string;
      ownerNameRequired: string;
      householdNameRequired: string;
      petNameRequired: string;
      inviteCodeRequired: string;
      yourNameRequired: string;
      joinFailed: string;
      createFailed: string;
    };
  };
}

export const translations: Record<SupportedLocale, TranslationSchema> = {
  en: {
    appName: 'Dooty',
    tagline: 'Track your pet’s daily potty, walks, meals, and health.',
    nav: {
      today: 'Today',
      map: 'Map',
      analytics: 'Analytics',
      settings: 'Settings',
      import: 'Import',
    },
    events: {
      poop: { name: 'Poop', action: 'Log Poop', desc: 'Bathroom break' },
      pee: { name: 'Pee', action: 'Log Pee', desc: 'Bathroom break' },
      walk: { name: 'Walk', action: 'Log Walk', desc: 'Outdoor exercise' },
      food: { name: 'Food', action: 'Log Food', desc: 'Meals & kibble' },
      water: { name: 'Water', action: 'Log Water', desc: 'Fresh hydration' },
      medicine: { name: 'Medicine', action: 'Log Medicine', desc: 'Pills & treatments' },
      grooming: { name: 'Grooming', action: 'Log Grooming', desc: 'Bath & brushing' },
      playing: { name: 'Playing', action: 'Log Play', desc: 'Fetch & fun' },
      vomit: { name: 'Vomit', action: 'Log Vomit', desc: 'Upset stomach' },
      weight: { name: 'Weight', action: 'Log Weight', desc: 'Body mass tracking' },
      vet: { name: 'Vet visit', action: 'Log Vet Visit', desc: 'Appointments & checkups' },
      symptom: { name: 'Symptom', action: 'Log Symptom', desc: 'Health anomalies & issues' },
      nap: { name: 'Nap / Sleep', action: 'Log Nap', desc: 'Sleep & rest' },
      training: { name: 'Training', action: 'Log Training', desc: 'Commands & practice' },
    },
    streak: {
      badge: (days: number) => `${days} DAY STREAK`,
      subtitle: 'Keep logging daily to build your pet’s routine!',
    },
    home: {
      greeting: (petName: string) => `Hey, ${petName}! 🐾`,
      vibeLine: 'Ready for another great day together.',
      todayStats: 'Today’s Log',
      quickLog: 'Quick Log',
      recentActivity: 'Recent Timeline',
      noEventsToday: 'No logs yet today!',
      tapToLogFirst: 'Tap any icon above to record your first entry.',
      offlineMode: 'Offline Mode',
      pendingSync: (count: number) => `${count} pending offline sync`,
    },
    logger: {
      title: (eventName: string) => `Log ${eventName}`,
      time: 'Time of Event',
      notesPlaceholder: 'Add optional details (e.g. consistency, brand, dosage)...',
      locationTag: 'Location',
      addLocation: 'Add GPS Coordinates',
      save: 'Save Log',
      cancel: 'Cancel',
      saving: 'Saving...',
      loggedSuccess: (eventName: string) => `${eventName} logged successfully!`,
    },
    analytics: {
      title: 'Pet Analytics & Habits',
      subtitle: 'Understand your pet’s daily rhythm and health trends',
      clock24hTitle: '24-Hour Potty Clock',
      clock24hDesc: 'Most frequent hours of the day for bathroom breaks',
      frequencyTitle: 'Activity Breakdown',
      periods: {
        days7: 'Last 7 Days',
        days30: 'Last 30 Days',
        allTime: 'All Time',
      },
      healthWatch: 'Health Watch',
      vomitCount: (count: number) => `${count} vomiting incidents recorded`,
      medCount: (count: number) => `${count} medications administered`,
      daysNoPoop: (days: number) => `${days} days without poop recorded`,
      streakTitle: 'Consistency Streak',
      totalLogs: 'Total Logged Events',
    },
    map: {
      title: 'Potty & Walk Map',
      startWalk: 'Start Walk',
      pauseWalk: 'Pause Walk',
      resumeWalk: 'Resume Walk',
      stopWalk: 'Finish Walk',
      distance: 'Distance',
      duration: 'Duration',
      logPoopOnWalk: '💩 Poop Here',
      logPeeOnWalk: '💧 Pee Here',
      noLocationsYet: 'No geo-tagged events yet. Start a walk or tag your next log!',
    },
    importer: {
      title: 'Import History',
      subtitle: 'From a spreadsheet, Notion, or another tracker',
      dropText: 'Drop your CSV or JSON file here, or click to browse',
      selectFile: 'Select File',
      dryRunTitle: 'Import Preview (Dry-Run)',
      totalEvents: 'Total Records Detected',
      targetPet: 'Target Pet',
      dateSpan: 'Date Span',
      confirmImport: 'Import All Events',
      importing: 'Importing records...',
      success: (count: number) => `Successfully imported ${count} historical events!`,
    },
    settings: {
      back: 'Today',
      title: 'Settings',
      signedInPlan: 'Signed in · free plan',
      language: 'Language',
      english: 'English',
      korean: '한국어',
      household: 'Household',
      householdCount: (people: number, pets: number) =>
        `${people} ${people === 1 ? 'person' : 'people'} · ${pets} ${pets === 1 ? 'pet' : 'pets'}`,
      invite: 'Invite',
      people: 'People',
      inviteSomeone: '+ Invite someone',
      pets: 'Pets',
      addPet: '+ Add a pet',
      nudges: 'Nudges',
      walkReminders: 'Walk reminders',
      walkRemindersSub: 'Nudge me at the usual times',
      weeklyDigest: 'Weekly digest',
      weeklyDigestSub: 'Sunday night, one card',
      unusualGap: 'Unusual gap alert',
      unusualGapSub: 'If nothing for 20 hours',
      vetShare: 'Share with my vet',
      vetShareSub: 'Read-only link to the summary',
      yourData: 'Your data',
      importCsv: 'Import from CSV',
      importCsvSub: 'From a spreadsheet, Notion, or another tracker',
      exportCsv: 'Export all data (CSV)',
      exportCsvSub: 'Everything, including photos',
      signOut: 'Sign out',
      version: 'Dooty v0.4 · installable PWA',
      logsUnit: 'logs',
      // Legacy
      activeHousehold: 'Active Household',
      switchHousehold: 'Switch Household',
      members: 'Family Members',
      invitePartner: 'Invite Partner / Roommate',
      inviteDesc: 'Share this code so they can view and log for this pet from their phone:',
      copyCode: 'Copy Invite Code',
      copied: 'Copied!',
      joinHousehold: 'Join Existing Household',
      joinAnotherHousehold: '+ Join Another Household',
      enterCode: 'Enter 6-digit Invite Code',
      joinBtn: 'Join Household',
      currentPet: 'Pet Profile',
      syncStatus: 'Cloud Sync Status',
      online: 'Connected & Live',
      offline: 'Offline (Queued locally)',
      signedOutSuccess: 'Signed out. See you next walk!',
    },
    invite: {
      back: 'Settings',
      title: 'Invite to',
      subtitle: "Share the code below. It works once, then it's dead.",
      theyJoinAs: 'They join as',
      roles: {
        full: { name: 'Full member', sub: 'Log, edit, see everything' },
        logOnly: { name: 'Log only', sub: 'Can add events, cannot see history' },
      },
      inviteCode: 'Invite code',
      expiresIn7Days: 'Expires in 7 days',
      copyCode: 'Copy code',
      shareLink: 'Share link',
      pending: 'Pending',
      revoke: 'Revoke',
      pendingHelp:
        'Anyone with the code can log events. Only you can rename the household or remove people.',
      codeCopied: 'Code copied',
      codeCopiedSub: (code: string) => `${code} · expires in 7 days`,
      inviteRevoked: 'Invite revoked',
      inviteRevokedSub: (code: string) => `${code} will no longer work.`,
    },
    auth: {
      welcomeTitle: 'Dooty',
      welcomeSubtitle: 'Poop, pills and everything else. One tap, then get on with the walk.',
      tagline: 'Simple, tactile pet habit tracking for your family.',
      tabLogIn: 'Log In',
      tabSignUp: 'Sign Up',
      emailLabel: 'Email',
      emailPlaceholder: 'sam@jellyfish.dog',
      passwordLabel: 'Password',
      passwordPlaceholder: '••••••••',
      logInBtn: 'Log in',
      loggingIn: 'Logging in...',
      forgotPassword: 'Forgot your password?',
      or: 'OR',
      googleBtn: 'Continue with Google',
      newHere: 'New here?',
      makeAccount: 'Make an account',
      gotInviteCode: 'Got an invite code?',
      show: 'Show',
      hide: 'Hide',
      signupStep1: {
        back: 'Back',
        stepCount: '1 / 2',
        title: "Let's get you set up",
        subtitle: 'Takes about forty seconds. Faster than the average walk.',
        yourName: 'Your name',
        yourNamePlaceholder: 'Sam',
        email: 'Email',
        emailPlaceholder: 'sam@jellyfish.dog',
        password: 'Password',
        passwordPlaceholder: '••••••••',
        weak: 'Weak',
        good: 'Good',
        strong: 'Strong',
        nextTheDog: 'Next: the dog',
        disclaimer:
          'By continuing you agree we will store an unreasonable amount of data about your dog’s bowels.',
      },
      signupStep2: {
        back: 'Back',
        stepCount: '2 / 2',
        title: 'Who are we tracking?',
        subtitle: 'You can add more dogs later. We will not judge you for it.',
        photo: 'photo',
        name: 'Name',
        namePlaceholder: 'Nacho',
        householdName: 'Household name',
        householdNamePlaceholder: 'The Nacho Household',
        householdHelp:
          'Everyone you invite joins this household and can log for any pet in it.',
        size: 'Size',
        sizes: {
          S: { label: 'S', kg: '– 10kg' },
          M: { label: 'M', kg: '10–20' },
          L: { label: 'L', kg: '20–35' },
          XL: { label: 'XL', kg: '35kg +' },
        },
        whatTrack: 'What should we track?',
        trackingOptions: {
          poop: 'Poop',
          pee: 'Pee',
          vomit: 'Vomit',
          meds: 'Medicine',
          weight: 'Weight',
          walk: 'Walks',
          vet: 'Vet visits',
          symptom: 'Symptoms',
        },
        startTracking: 'Start tracking',
        alreadyTracking: 'Already tracking somewhere else?',
        importHistory: 'Import your history',
      },
      joinStep1: {
        back: 'Back',
        title: 'Join a household',
        subtitle: 'Whoever set it up can find the code in Settings, under People.',
        enterCode: 'Enter the code',
        continueBtn: 'Continue',
        perksTitle: 'What you’ll be able to do',
        perks: [
          'Log poops, walks, meds and everything else',
          'See the streak, the map and the stats',
          'Get the same reminders as everyone else',
        ],
      },
      joinStep2: {
        back: 'Code',
        codeAccepted: 'Code accepted · joining',
        summarySubtitle: (count: string, role: string) => `${count} · you'll be ${role}`,
        title: 'Tell them who you are',
        subtitle:
          'Your name shows up next to every event you log, so pick what the household will recognise.',
        yourName: 'Your name',
        yourNamePlaceholder: 'Dan',
        email: 'Email',
        emailPlaceholder: 'dan@thewalks.co',
        password: 'Password',
        passwordPlaceholder: '••••••••',
        howTheySeeYou: 'How they’ll see you',
        joinHouseholdBtn: 'Join the household',
        footerDisclaimer:
          'The owner will be told you joined. You can leave the household at any time.',
      },
      signUpBtn: 'Create Account',
      signingUp: 'Creating account...',
      signUpModeCreate: '✨ Create New Household',
      signUpModeJoin: '🔑 Join with Invite Code',
      noAccountPrompt: 'Don’t have an account? Sign Up',
      hasAccountPrompt: 'Already have an account? Log In',
      ownerNameLabel: 'Your Name',
      ownerNamePlaceholder: 'e.g. Reynold',
      householdNameLabel: 'Household Name',
      householdNamePlaceholder: 'e.g. Happy Paws Family',
      petNameLabel: 'Pet Name',
      petNamePlaceholder: 'e.g. Jjols',
      speciesLabel: 'Pet Type',
      speciesDog: 'Dog 🐶',
      speciesCat: 'Cat 🐱',
      speciesOther: 'Other 🐾',
      breedLabel: 'Breed (Optional)',
      breedPlaceholder: 'e.g. Golden Retriever',
      inviteCodeLabel: '6-Digit Invite Code',
      inviteCodePlaceholder: 'e.g. AB12CD',
      inviteCodeHint:
        'Ask your household owner to generate an invite code from their Settings > Family Members tab.',
      yourNameLabel: 'Your Name',
      yourNamePlaceholder: 'e.g. Alex, Sarah',
      yourRoleLabel: 'Role / Relationship (Optional)',
      yourRolePlaceholder: 'e.g. Partner, Mom, Dog Walker',
      errors: {
        emailRequired: 'Please enter your email address',
        invalidEmail: 'Please enter a valid email address',
        passwordRequired: 'Please enter your password',
        passwordTooShort: 'Password must be at least 6 characters',
        logInFailed: 'Invalid email or password',
        signUpFailed: 'Could not complete sign up. Please try again.',
        ownerNameRequired: 'Please enter your name',
        householdNameRequired: 'Please enter a household name',
        petNameRequired: 'Please enter your pet’s name',
        inviteCodeRequired: 'Please enter a 6-digit invite code',
        yourNameRequired: 'Please enter your name',
        joinFailed: 'Invalid invite code or server error',
        createFailed: 'Failed to create household. Please check connection.',
      },
    },
  },
  ko: {
    appName: '두티 (Dooty)',
    tagline: '반려견의 배변, 산책, 식사, 건강을 쉽고 재미있게 기록하세요.',
    nav: {
      today: '오늘',
      map: '지도',
      analytics: '통계',
      settings: '설정',
      import: '불러오기',
    },
    events: {
      poop: { name: '응가', action: '응가 기록', desc: '배변 활동' },
      pee: { name: '쉬야', action: '쉬야 기록', desc: '배뇨 활동' },
      walk: { name: '산책', action: '산책 기록', desc: '야외 산책' },
      food: { name: '밥/사료', action: '식사 기록', desc: '사료 및 간식' },
      water: { name: '물', action: '물 마심', desc: '수분 섭취' },
      medicine: { name: '약', action: '투약 기록', desc: '영양제 및 처방약' },
      grooming: { name: '목욕/미용', action: '목욕/미용', desc: '위생 케어' },
      playing: { name: '놀이', action: '놀이 기록', desc: '터그놀이 & 공놀이' },
      vomit: { name: '토/구토', action: '구토 기록', desc: '소화 이상' },
      weight: { name: '몸무게', action: '몸무게 기록', desc: '체중 변화 측정' },
      vet: { name: '병원 진료', action: '진료 기록', desc: '정기 검진 및 진료' },
      symptom: { name: '증상 메모', action: '증상 기록', desc: '이상 징후 기록' },
      nap: { name: '수면/낮잠', action: '낮잠 기록', desc: '수면 및 휴식' },
      training: { name: '훈련/교육', action: '훈련 기록', desc: '훈련 및 기본 교육' },
    },
    streak: {
      badge: (days: number) => `${days}일 연속 기록 중!`,
      subtitle: '매일 꾸준히 기록해서 건강한 루틴을 만들어요!',
    },
    home: {
      greeting: (petName: string) => `안녕, ${petName}! 🐾`,
      vibeLine: '오늘도 건강하고 행복한 하루 보내요.',
      todayStats: '오늘의 기록',
      quickLog: '빠른 기록',
      recentActivity: '최근 활동 타임라인',
      noEventsToday: '오늘 아직 등록된 기록이 없어요!',
      tapToLogFirst: '위 아이콘을 눌러 첫 번째 활동을 기록해보세요.',
      offlineMode: '오프라인 모드',
      pendingSync: (count: number) => `${count}개 항목 동기화 대기 중`,
    },
    logger: {
      title: (eventName: string) => `${eventName} 기록하기`,
      time: '기록 시간',
      notesPlaceholder: '메모를 입력하세요 (변 상태, 사료량, 약 종류 등)...',
      locationTag: '위치 정보',
      addLocation: '현재 GPS 위치 추가',
      save: '저장하기',
      cancel: '취소',
      saving: '저장 중...',
      loggedSuccess: (eventName: string) => `${eventName} 기록이 저장되었습니다!`,
    },
    analytics: {
      title: '배변 및 활동 분석',
      subtitle: '반려견의 일일 생활 패턴과 건강 추이를 확인하세요',
      clock24hTitle: '24시간 배변 시계',
      clock24hDesc: '하루 중 가장 응가/쉬야를 많이 하는 시간대',
      frequencyTitle: '활동별 통계',
      periods: {
        days7: '최근 7일',
        days30: '최근 30일',
        allTime: '전체 기간',
      },
      healthWatch: '건강 모니터링',
      vomitCount: (count: number) => `최근 구토 ${count}회 발생`,
      medCount: (count: number) => `최근 투약 ${count}회 완료`,
      daysNoPoop: (days: number) => `응가 미기록 ${days}일째`,
      streakTitle: '연속 기록 스트릭',
      totalLogs: '총 기록 건수',
    },
    map: {
      title: '배변 & 산책 지도',
      startWalk: '산책 시작',
      pauseWalk: '일시정지',
      resumeWalk: '산책 재개',
      stopWalk: '산책 종료',
      distance: '산책 거리',
      duration: '산책 시간',
      logPoopOnWalk: '💩 여기서 응가',
      logPeeOnWalk: '💧 여기서 쉬야',
      noLocationsYet: '위치 기록이 아직 없습니다. 산책을 시작하거나 위치를 태그해보세요!',
    },
    importer: {
      title: '데이터 불러오기',
      subtitle: '스프레드시트, 노션, 다른 트래커에서 데이터 이전',
      dropText: 'CSV 또는 JSON 파일을 여기에 끌어다 놓거나 클릭하여 선택하세요',
      selectFile: '파일 선택',
      dryRunTitle: '가져오기 미리보기 (검증)',
      totalEvents: '총 감지된 기록 수',
      targetPet: '대상 반려견',
      dateSpan: '기록 기간',
      confirmImport: '데이터 일괄 가져오기',
      importing: '데이터를 가져오는 중...',
      success: (count: number) => `${count}개의 과거 기록을 성공적으로 가져왔습니다!`,
    },
    settings: {
      back: '오늘',
      title: '설정',
      signedInPlan: '로그인됨 · 무료 플랜',
      language: '언어',
      english: 'English',
      korean: '한국어',
      household: '가족 공간',
      householdCount: (people: number, pets: number) => `${people}명 · 반려견 ${pets}마리`,
      invite: '초대',
      people: '구성원',
      inviteSomeone: '+ 초대하기',
      pets: '반려동물',
      addPet: '+ 반려동물 추가',
      nudges: '알림 설정',
      walkReminders: '산책 알림',
      walkRemindersSub: '평소 산책 시간에 알려드려요',
      weeklyDigest: '주간 요약',
      weeklyDigestSub: '일요일 밤 한 장의 요약 카드',
      unusualGap: '이상 공백 알림',
      unusualGapSub: '20시간 동안 기록이 없으면 알림',
      vetShare: '수의사와 공유',
      vetShareSub: '수의사용 읽기 전용 요약 링크',
      yourData: '내 데이터',
      importCsv: 'CSV에서 가져오기',
      importCsvSub: '스프레드시트, 노션, 다른 트래커에서 이전',
      exportCsv: '전체 데이터 내보내기 (CSV)',
      exportCsvSub: '사진을 포함한 모든 기록 다운로드',
      signOut: '로그아웃',
      version: 'Dooty v0.4 · 설치형 PWA',
      logsUnit: '회',
      // Legacy
      activeHousehold: '현재 가족 공간',
      switchHousehold: '가족 공간 변경',
      members: '참여 멤버',
      invitePartner: '가족/동거인 초대하기',
      inviteDesc: '이 초대 코드를 공유하면 가족도 함께 기록을 확인하고 추가할 수 있습니다:',
      copyCode: '초대 코드 복사',
      copied: '복사 완료!',
      joinHousehold: '기존 가족에 참여하기',
      joinAnotherHousehold: '+ 다른 가족 공간 참가하기',
      enterCode: '6자리 초대 코드 입력',
      joinBtn: '가족 참여',
      currentPet: '반려견 프로필',
      syncStatus: '클라우드 동기화 상태',
      online: '정상 연결됨',
      offline: '오프라인 (로컬 저장 중)',
      signedOutSuccess: '로그아웃되었습니다. 다음 산책 때 만나요!',
    },
    invite: {
      back: '설정',
      title: '초대하기',
      subtitle: '아래 코드를 공유하세요. 한 번 사용하면 만료됩니다.',
      theyJoinAs: '초대 권한',
      roles: {
        full: { name: '전체 멤버', sub: '기록, 수정, 전체 내역 확인 가능' },
        logOnly: { name: '기록 전용', sub: '기록 추가만 가능, 과거 내역 열람 불가' },
      },
      inviteCode: '초대 코드',
      expiresIn7Days: '7일 후 만료',
      copyCode: '코드 복사',
      shareLink: '링크 공유',
      pending: '대기 중인 초대',
      revoke: '취소',
      pendingHelp:
        '코드를 가진 사람은 누구나 기록할 수 있습니다. 가족 관리자만 이름을 바꾸거나 구성원을 삭제할 수 있습니다.',
      codeCopied: '코드 복사 완료',
      codeCopiedSub: (code: string) => `${code} · 7일 후 만료`,
      inviteRevoked: '초대 취소됨',
      inviteRevokedSub: (code: string) => `${code} 코드는 더 이상 사용할 수 없습니다.`,
    },
    auth: {
      welcomeTitle: 'Dooty',
      welcomeSubtitle: '응가, 약, 그 외 모든 것. 한 번만 누르고 산책을 계속하세요.',
      tagline: '직관적이고 재미있는 우리 가족 펫 다이어리',
      tabLogIn: '로그인',
      tabSignUp: '회원가입',
      emailLabel: '이메일',
      emailPlaceholder: 'sam@jellyfish.dog',
      passwordLabel: '비밀번호',
      passwordPlaceholder: '••••••••',
      logInBtn: '로그인',
      loggingIn: '로그인 중...',
      forgotPassword: '비밀번호를 잊으셨나요?',
      or: '또는',
      googleBtn: 'Google로 계속하기',
      newHere: '처음이신가요?',
      makeAccount: '계정 만들기',
      gotInviteCode: '초대 코드가 있나요?',
      show: '보기',
      hide: '숨기기',
      signupStep1: {
        back: '뒤로',
        stepCount: '1 / 2',
        title: '시작해 볼까요',
        subtitle: '40초쯤 걸립니다. 평균 산책보다 빠릅니다.',
        yourName: '이름',
        yourNamePlaceholder: 'Sam',
        email: '이메일',
        emailPlaceholder: 'sam@jellyfish.dog',
        password: '비밀번호',
        passwordPlaceholder: '••••••••',
        weak: '취약',
        good: '적정',
        strong: '안전',
        nextTheDog: '다음: 강아지',
        disclaimer:
          '계속 진행하면 강아지의 배변에 관한 상당한 양의 데이터를 저장하는 데 동의하게 됩니다.',
      },
      signupStep2: {
        back: '뒤로',
        stepCount: '2 / 2',
        title: '누구를 추적할까요?',
        subtitle: '나중에 강아지를 더 추가할 수 있습니다.',
        photo: '사진',
        name: '이름',
        namePlaceholder: '나초 (Nacho)',
        householdName: '가족(Household) 이름',
        householdNamePlaceholder: '나초네 가족',
        householdHelp:
          '초대한 모든 사람이 이 가족에 합류하여 모든 반려동물에 대해 기록할 수 있습니다.',
        size: '크기',
        sizes: {
          S: { label: 'S', kg: '– 10kg' },
          M: { label: 'M', kg: '10–20' },
          L: { label: 'L', kg: '20–35' },
          XL: { label: 'XL', kg: '35kg +' },
        },
        whatTrack: '어떤 항목을 추적할까요?',
        trackingOptions: {
          poop: '응가',
          pee: '쉬야',
          vomit: '구토',
          meds: '약',
          weight: '체중',
          walk: '산책',
          vet: '병원 진료',
          symptom: '이상 증상',
        },
        startTracking: '추적 시작하기',
        alreadyTracking: '다른 곳에서 이미 추적 중이신가요?',
        importHistory: '기록 가져오기',
      },
      joinStep1: {
        back: '뒤로',
        title: '가족에 참여하기',
        subtitle: '설정한 사람은 설정의 구성원에서 코드를 찾을 수 있습니다.',
        enterCode: '코드 입력',
        continueBtn: '계속',
        perksTitle: '할 수 있는 일',
        perks: [
          '응가, 산책, 약 및 기타 모든 활동 기록',
          '연속 스트릭, 산책 지도, 통계 확인',
          '가족 구성원과 동일한 실시간 알림 수신',
        ],
      },
      joinStep2: {
        back: '코드',
        codeAccepted: '코드 승인됨 · 참여 중',
        summarySubtitle: (count: string, role: string) => `${count} · 역할: ${role}`,
        title: '자신을 알려주세요',
        subtitle:
          '내가 기록한 모든 활동 옆에 내 이름이 표시되므로 가족이 알아볼 수 있는 이름을 선택하세요.',
        yourName: '이름',
        yourNamePlaceholder: '민지 (Dan)',
        email: '이메일',
        emailPlaceholder: 'dan@thewalks.co',
        password: '비밀번호',
        passwordPlaceholder: '••••••••',
        howTheySeeYou: '가족에게 표시될 호칭',
        joinHouseholdBtn: '가족에 참여하기',
        footerDisclaimer:
          '가족 관리자에게 참여 알림이 전송됩니다. 언제든지 가족에서 나갈 수 있습니다.',
      },
      signUpBtn: '회원가입 완료',
      signingUp: '가입 처리 중...',
      signUpModeCreate: '✨ 새 가족 공간 만들기',
      signUpModeJoin: '🔑 초대 코드로 참여하기',
      noAccountPrompt: '계정이 없으신가요? 회원가입',
      hasAccountPrompt: '이미 계정이 있으신가요? 로그인',
      ownerNameLabel: '보호자 이름',
      ownerNamePlaceholder: '예: 레이놀드',
      householdNameLabel: '가족(Household) 이름',
      householdNamePlaceholder: '예: 우리집 강아지네',
      petNameLabel: '반려동물 이름',
      petNamePlaceholder: '예: 쪼올스',
      speciesLabel: '종류',
      speciesDog: '강아지 🐶',
      speciesCat: '고양이 🐱',
      speciesOther: '기타 🐾',
      breedLabel: '품종 (선택)',
      breedPlaceholder: '예: 골든 리트리버',
      inviteCodeLabel: '6자리 초대 코드',
      inviteCodePlaceholder: '예: AB12CD',
      inviteCodeHint:
        '가족 관리자의 [설정 > 가족 멤버]에서 생성한 6자리 초대 코드를 입력하세요.',
      yourNameLabel: '내 이름',
      yourNamePlaceholder: '예: 민지, 준호',
      yourRoleLabel: '역할 / 호칭 (선택)',
      yourRolePlaceholder: '예: 엄마, 아빠, 산책도우미, 룸메이트',
      errors: {
        emailRequired: '이메일 주소를 입력해주세요',
        invalidEmail: '올바른 이메일 형식을 입력해주세요',
        passwordRequired: '비밀번호를 입력해주세요',
        passwordTooShort: '비밀번호는 6자 이상이어야 합니다',
        logInFailed: '이메일 또는 비밀번호가 올바르지 않습니다',
        signUpFailed: '회원가입에 실패했습니다. 다시 시도해주세요.',
        ownerNameRequired: '보호자 이름을 입력해주세요',
        householdNameRequired: '가족 이름을 입력해주세요',
        petNameRequired: '반려동물 이름을 입력해주세요',
        inviteCodeRequired: '6자리 초대 코드를 입력해주세요',
        yourNameRequired: '이름을 입력해주세요',
        joinFailed: '유효하지 않은 초대 코드이거나 서버 오류가 발생했습니다',
        createFailed: '가족 생성에 실패했습니다. 네트워크를 확인해주세요.',
      },
    },
  },
};
