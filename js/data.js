/* Portfolio content — edit here to update the site. Consumed by js/main.js. */
window.PORTFOLIO = {
  marqueeWords: ['Flutter', 'Dart', 'Riverpod', 'Bloc', 'Clean Architecture', 'Firebase', 'GetX', 'REST APIs', 'IoT', 'Geofencing', 'Payments', 'AI Chatbots'],

  stack: [
    { label: 'LANGUAGES', items: ['Dart (Expert)', 'JavaScript', 'SQL', 'HTML5 / CSS3'] },
    { label: 'FRAMEWORKS & TOOLS', items: ['Flutter (iOS/Android/Web)', 'Flutter Bloc', 'Riverpod', 'GetX', 'Git', 'Dynamic Form Engines'] },
    { label: 'ARCHITECTURE & DB', items: ['Clean Architecture', 'MVC', 'RESTful API Clients', 'SQLite', 'Hive', 'Firebase Suite'] },
    { label: 'EXPERTISE', items: ['AI Chatbot Integration', 'Precise Geofencing', 'IoT Hardware Comms', 'Custom Platform Channels', 'Payment Gateways'] }
  ],

  jobs: [
    { company: 'Appstation', role: 'Mid Flutter Developer', dates: 'Oct 2025 – Present', points: [
      'Architecting the multi-tenant employee portal for the Qatar Olympic Committee (Kadoom) across mobile and web layers.',
      'Deployed Riverpod to decouple asynchronous operational modules, improving localized data refresh patterns.',
      'Built a metadata-driven dynamic form engine and integrated an autonomous generative AI chatbot, cutting internal service response delays.'
    ]},
    { company: 'Techjays', role: 'Software Engineer (Mobile)', dates: 'Mar 2024 – Jul 2025', points: [
      'Led mobile engineering for Bracketology, an official high-traffic fantasy tournament engine backed by Fox Media.',
      'Optimized computation runtimes and asset rendering for a verified 27% reduction in application loading times.',
      'Handled monetization via programmatic AdMob bidding and Apple/Google In-App Purchases.'
    ]},
    { company: 'Maven Technology', role: 'Flutter Developer', dates: 'Sep 2023 – Mar 2024', points: [
      'Configured cross-platform production apps on Clean Architecture, maximizing component test coverage.',
      'Implemented complex UI views and business logic via Flutter Bloc and GetX.',
      'Integrated high-throughput REST JSON endpoints and Firebase Cloud Messaging pipelines.'
    ]},
    { company: 'Datahub Technologies', role: 'Flutter Developer', dates: 'Mar 2021 – Aug 2023', points: [
      'Built reactive cross-platform apps with Flutter Bloc, keeping UX consistent across changing viewports.',
      'Authored native platform channels for low-level file-system permissions and hardware-backed storage.'
    ]}
  ],

  projects: [
    { num: '01', badge: 'ENTERPRISE', name: 'Kadoom', client: 'Qatar Olympic Committee', blurb: 'Enterprise web + mobile portal unifying admin workflows, with a server-driven dynamic form system and an inline AI assistant powered by local LLM endpoints.', tags: ['Flutter', 'Riverpod', 'AI Chatbot', 'Dynamic Forms'] },
    { num: '02', badge: 'HIGH-TRAFFIC', name: 'Bracketology', client: 'Fox Media', blurb: 'Official fantasy gaming infrastructure serving high concurrent traffic during tournaments, with real-time non-blocking live-score updates and verified billing.', tags: ['Bloc', 'AdMob', 'In-App Purchases'] },
    { num: '03', badge: 'LOGISTICS', name: 'Trackz', client: 'Vishwasamudra Engineering', blurb: 'Driver & supervisor ecosystem with real-time background geofencing to auto-log material drops, and offline-first sync over an encrypted SQLite queue.', tags: ['GetX', 'Geofencing', 'SQLite', 'REST APIs'] },
    { num: '04', badge: 'IoT', name: 'Culti Meter', client: 'IoT Companion App', blurb: 'Hardware companion monitoring live soil data streams, with native Kotlin/Swift bridges exchanging streaming binary telemetry over BLE / Wi-Fi.', tags: ['IoT', 'BLE / Wi-Fi', 'Custom Plugins'] },
    { num: '05', badge: 'WELLNESS', name: 'NutriGuide', client: 'Smart Wellness Tracker', blurb: 'Nutrition app computing custom macronutrient weights, daily calorie targets and dynamic meal logs, with live step monitoring and readable chart layouts.', tags: ['Local Storage', 'JSON', 'Charts'] },
    { num: '06', badge: 'COMMERCE', name: 'Fireworks', client: 'Australian Spice Brand', blurb: 'Direct-to-consumer e-commerce app for an Australian spice company — full product catalog, cart and secure Stripe/Razorpay checkout across web and mobile.', tags: ['D2C', 'Payments', 'Stripe / Razorpay', 'Web + Mobile'] },
    { num: '07', badge: 'COMMERCE', name: 'BookzApp', client: 'B2B Book Distribution', blurb: 'B2B e-commerce platform for volume book ordering, streamlining bulk fulfillment and logistics between publishers and retailers.', tags: ['B2B', 'E-commerce', 'Bulk Orders', 'Payments'] }
  ]
};
