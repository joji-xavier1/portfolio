/* Portfolio content — edit here to update the site. Consumed by js/main.js. */
window.PORTFOLIO = {
  /* Set to a PDF path (e.g. 'assets/Joji-Xavier-Resume.pdf') to reveal the
     "Download résumé" buttons across the site. */
  resumeUrl: '',

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
    { num: '01', badge: 'ENTERPRISE', name: 'Kadoom', client: 'Qatar Olympic Committee', blurb: 'Enterprise web + mobile portal unifying admin workflows, with a server-driven dynamic form system and an inline AI assistant powered by local LLM endpoints.', outcome: 'Cut internal service response delays for a national sports body with AI-assisted, server-driven workflows.', tags: ['Flutter', 'Riverpod', 'AI Chatbot', 'Dynamic Forms'] },
    { num: '02', badge: 'HIGH-TRAFFIC', name: 'Bracketology', client: 'Fox Media', blurb: 'Official fantasy gaming infrastructure serving high concurrent traffic during tournaments, with real-time non-blocking live-score updates and verified billing.', outcome: 'Verified 27% faster load times while serving tournament-day traffic spikes.', tags: ['Bloc', 'AdMob', 'In-App Purchases'] },
    { num: '03', badge: 'LOGISTICS', name: 'Trackz', client: 'Vishwasamudra Engineering', blurb: 'Driver & supervisor ecosystem with real-time background geofencing to auto-log material drops, and offline-first sync over an encrypted SQLite queue.', outcome: 'Material drops logged automatically with zero driver input — even fully offline.', tags: ['GetX', 'Geofencing', 'SQLite', 'REST APIs'] },
    { num: '04', badge: 'IoT', name: 'Culti Meter', client: 'IoT Companion App', blurb: 'Hardware companion monitoring live soil data streams, with native Kotlin/Swift bridges exchanging streaming binary telemetry over BLE / Wi-Fi.', outcome: 'Live soil telemetry from field hardware straight to the grower’s phone.', tags: ['IoT', 'BLE / Wi-Fi', 'Custom Plugins'] },
    { num: '05', badge: 'WELLNESS', name: 'NutriGuide', client: 'Smart Wellness Tracker', blurb: 'Nutrition app computing custom macronutrient weights, daily calorie targets and dynamic meal logs, with live step monitoring and readable chart layouts.', outcome: 'Personalized daily nutrition targets with no manual calculation for the user.', tags: ['Local Storage', 'JSON', 'Charts'] },
    { num: '06', badge: 'COMMERCE', name: 'Fireworks', client: 'Australian Spice Brand', blurb: 'Direct-to-consumer e-commerce app for an Australian spice company — full product catalog, cart and secure Stripe/Razorpay checkout across web and mobile.', outcome: 'Took the brand direct-to-consumer with secure checkout on web and mobile.', tags: ['D2C', 'Payments', 'Stripe / Razorpay', 'Web + Mobile'] },
    { num: '07', badge: 'COMMERCE', name: 'BookzApp', client: 'B2B Book Distribution', blurb: 'B2B e-commerce platform for volume book ordering, streamlining bulk fulfillment and logistics between publishers and retailers.', outcome: 'Bulk ordering and fulfillment between publishers and retailers in one flow.', tags: ['B2B', 'E-commerce', 'Bulk Orders', 'Payments'] },
    { num: '08', badge: 'AGRITECH', name: 'Agro-Net', client: 'Farmer Carbon-Credit Platform', blurb: 'Agri-tech app where farmers register land and crop details and join carbon-credit projects — earning income through sustainable cultivation while connecting to a wider agricultural network.', outcome: 'Opened a new carbon-credit income stream for participating farmers.', tags: ['Flutter', 'AgriTech', 'Carbon Credits', 'Sustainability'] }
  ],

  /* Freelance engagement process — shown in the "How I work" section. */
  process: [
    { num: '01', title: 'Discovery call', text: 'A free 20–30 minute call about what you want to build, who it’s for, and what success looks like. No obligation.' },
    { num: '02', title: 'Fixed-scope proposal', text: 'A clear written scope, timeline and price within 48 hours — no vague estimates, no surprise invoices later.' },
    { num: '03', title: 'Weekly builds', text: 'An installable build on your phone every week from week one, so you watch the app take shape and course-correct early.' },
    { num: '04', title: 'Launch & handover', text: 'App Store / Play Store release, full source code ownership, docs, and support after launch.' }
  ],

  /* Add real quotes here to reveal the testimonials section, e.g.:
     { quote: 'Joji shipped our app ahead of schedule…', name: 'Jane Doe', role: 'Founder, Acme' } */
  testimonials: []
};
