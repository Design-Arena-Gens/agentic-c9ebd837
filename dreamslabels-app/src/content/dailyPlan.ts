export type ReelIdea = {
  hook: string;
  concept: string;
  shotList: string[];
  caption: string;
};

export type StoryIdea = {
  headline: string;
  frames: { title: string; prompt: string }[];
  cta: string;
};

export type CommentReply = {
  trigger: string;
  tone: string;
  reply: string;
};

export type DMScript = {
  scenario: string;
  goal: string;
  message: string;
};

export type FacebookPost = {
  headline: string;
  post: string;
  visualCue: string;
  hashtags: string[];
};

export type SalesBooster = {
  title: string;
  detail: string;
};

export type DailyPlan = {
  focus: string;
  reel: ReelIdea;
  story: StoryIdea;
  hashtags: string[];
  commentReplies: CommentReply[];
  dmScripts: DMScript[];
  facebookPost: FacebookPost;
  salesBoosters: SalesBooster[];
  trustBuilder: string;
};

export const dailyPlan: DailyPlan = {
  focus:
    "Highlight the new pastel festive kurtas featuring breathable cotton and hand-detailed gota work. Encourage DMs for size/price while building trust with behind-the-scenes storytelling.",
  reel: {
    hook: "When your festive look feels as light as your mood ✨",
    concept:
      "Transition reel showing the same woman moving from daily chores to a festive-ready look wearing DreamsLabels pastel gota kurta set.",
    shotList: [
      "Clip 1 (2s): Woman tying hair in a simple bun in casual homewear. Overlay text: 'Festive invite? No time?'",
      "Clip 2 (3s): Quick transition — she twirls, screen wipe reveals pastel gota kurta. Overlay: 'Slide into comfort glam ✨'",
      "Clip 3 (3s): Close-up of gota detailing + breathable lining. Overlay: 'Soft cotton • Hand detailed'",
      "Clip 4 (3s): Final pose with dupatta swirl, smiling. Overlay: 'DM “Festive Glow” for offer 🎁'",
    ],
    caption:
      "Festive invite on your mind but zero time to plan the look? Our pastel gota kurta sets feel buttery soft, look celebration-ready and come with comfy cotton lining 💕\n\nDM “Festive Glow” for a special WhatsApp-only offer + size guide 💌",
  },
  story: {
    headline: "Stories that convert today",
    frames: [
      {
        title: "Frame 1 — Poll",
        prompt:
          "Photo of two pastel kurtas on a rack. Text: 'Pastel glam or classic maroon for festive lunch?' Poll options: 'Pastel glam 💖' / 'Classic maroon 🔥'",
      },
      {
        title: "Frame 2 — BTS",
        prompt:
          "Quick boomerang of steam-ironing the kurta. Text: 'Hand-finished just for you. DM for size suggestions 😍'",
      },
      {
        title: "Frame 3 — CTA",
        prompt:
          "Selfie in mirror wearing the kurta, add sticker 'Swipe Up?' replaced with 'DM for price & sizes 💬'.",
      },
    ],
    cta: "Add link sticker directing to WhatsApp number with pre-filled message: 'Hi DreamsLabelsByHarshita, I loved the pastel kurta! Can you share price & sizes?'",
  },
  hashtags: [
    "#DreamsLabelsByHarshita",
    "#PastelKurtas",
    "#FestiveReady",
    "#EthnicWearIndia",
    "#WomenWhoLead",
    "#ComfortMeetsStyle",
    "#CottonKurtaSet",
    "#DMForPrice",
    "#AffordableFestiveLook",
    "#HandFinishedLove",
  ],
  commentReplies: [
    {
      trigger: "Price?",
      tone: "Warm + informative",
      reply:
        "Hi lovely! 💖 This pastel gota kurta set starts at ₹2490 with matching dupatta. I’m DM-ing you the full price + size chart so we can pick your perfect fit!",
    },
    {
      trigger: "Interested!",
      tone: "Excited + guiding",
      reply:
        "Yay! So happy you love it 🤗 I’ve just sent you a DM with the colour options + WhatsApp details. Let’s get your festive look sorted!",
    },
    {
      trigger: "Available?",
      tone: "Reassuring",
      reply:
        "Absolutely! We have S to XL ready to ship within 24 hours. Check your DMs for fabric details, plus a WhatsApp link for quicker checkout. 💌",
    },
    {
      trigger: "Is there lining?",
      tone: "Trust-building",
      reply:
        "Yes queen! 👑 The kurta has soft cotton lining end-to-end so it stays breathable even in humid weather. Sending a DM with close-up pics now!",
    },
    {
      trigger: "Cash on delivery?",
      tone: "Solution-focused",
      reply:
        "We currently accept prepaid via UPI/cards for safe & speedy dispatch. DM coming your way with the WhatsApp number + easy payment steps ❤️",
    },
  ],
  dmScripts: [
    {
      scenario: "New inquiry from Instagram DM or WhatsApp",
      goal: "Acknowledge interest, share key value, move towards size confirmation",
      message:
        "Hey beautiful! 💕 Thank you for messaging DreamsLabelsByHarshita. The pastel gota kurta set you loved is ₹2490 with dupatta. We have breathable cotton lining + hand-done gota. Could you please share your usual kurta size or bust measurement? I’ll suggest the best fit and share ready-to-ship colours! ✨",
    },
    {
      scenario: "After sharing size guide, nudging to close",
      goal: "Reinforce urgency and offer support",
      message:
        "Sharing your size recommendation: M will drape the best on you 🤗 We have just 6 pieces left in pastel mint and blush peach. I can reserve yours for the next 2 hours — would you like me to send the secure UPI link here or on WhatsApp?",
    },
    {
      scenario: "Customer silent for 12 hours",
      goal: "Reignite interest with gentle urgency",
      message:
        "Hi love! Just checking in before the pastel set flies out ✨ We’re down to the last few pieces in your size. I’d hate for you to miss it, so let me know if you want me to keep one aside or if you need any styling help! 💛",
    },
  ],
  facebookPost: {
    headline: "Facebook group share idea",
    post:
      "Festive brunch look sorted! 💕\n\nI’ve been personally styling women who love comfort + glam, and this pastel gota kurta set is everyone’s favourite right now. Breathable cotton lining, hand-finished gota detailing, ready to ship across India.\n\nDrop a 💖 if you’d like me to DM the price, available colours, and a special group-only festive offer!",
    visualCue:
      "Use a bright flat-lay of the kurta set with jewellery & mojris placed neatly. Ensure natural light and add a soft sparkle filter.",
    hashtags: [
      "#WomenInEthnic",
      "#FestiveWardrobe",
      "#EthnicWearFinds",
      "#SupportSmallBusiness",
    ],
  },
  salesBoosters: [
    {
      title: "Urgency hook for today’s posts",
      detail:
        "Highlight 'Only 6 pieces left in mint & blush. Ready to ship in 24 hrs.' Add it to captions + stories for faster conversions.",
    },
    {
      title: "DM-only bundle",
      detail:
        "Offer dupatta tassel customisation + free oxidised earrings for the first 5 prepaid orders received via WhatsApp.",
    },
    {
      title: "Trust builder",
      detail:
        "Share a 15-sec reel/story of Harshita packing the order with a handwritten note saying 'Made with love for you'. Adds authenticity without needing a website.",
    },
  ],
  trustBuilder:
    "End every DM with “I’m Harshita, the designer behind DreamsLabels. Message me anytime if you need styling help — I personally reply to every bride & bestie.” This reinforces personal connection and reliability.",
};

