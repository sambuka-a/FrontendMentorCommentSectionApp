import { sub } from "date-fns"

export const users = [
  {
    id: '0',
    username: "juliusomo",
    currentUser: false,
    image: { 
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp"
    },
  },
  {
    id: '1',
    username: "amyrobson",
    currentUser: false,
    image: { 
      "png": "./images/avatars/image-amyrobson.png",
      "webp": "./images/avatars/image-amyrobson.webp"
    },
  },
  {
    id: '2',
    username: "maxblagun",
    currentUser: false,
    image: { 
      png: "./images/avatars/image-maxblagun.png",
      webp: "./images/avatars/image-maxblagun.webp"
    },
  },
  {
    id: '3',
    username: "ramsesmiron",
    currentUser: false,
    image: { 
      png: "./images/avatars/image-ramsesmiron.png",
      webp: "./images/avatars/image-ramsesmiron.webp"
    },
  }
]

export const comments = [
  {
    id: '3dG8RwHk',
    userId: '0',
    content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: sub(new Date(), { minutes: 10 }).toISOString(),
    score: 12,
    replies: []
  },
  {
    id: '9jVcQnE4',
    userId: '3',
    content: " sdfkgjsdflkgjsd;lfjg Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: sub(new Date(), { minutes: 10 }).toISOString(),
    score: 21,
    replies: []
  },
  {
    id: '5sM6FpUa',
    userId: '1',
    content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: sub(new Date(), { minutes: 60 }).toISOString(),
    score: 5,
    replies: [
      {
        id: '2tZbXvYc',
        userId: '3',
        content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        createdAt: sub(new Date(), { minutes: 90 }).toISOString(),
        score: 4,
        replyingTo: "amyrobson",
      },
      {
        id: '7mN9KdVr',
        userId: '2',
        content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt: sub(new Date(), { minutes: 130 }).toISOString(),
        score: 2,
        replyingTo: "amyrobson",
      },
      {
        id: '1pTfGhWq',
        userId: '0',
        content: "skdlfgjsdfkjgsdlkfgj;slkdfjg;slkdfg;lkdsfj; I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt: sub(new Date(), { minutes: 140 }).toISOString(),
        score: 22,
        replyingTo: "amyrobson",
      }
    ]
  }
]