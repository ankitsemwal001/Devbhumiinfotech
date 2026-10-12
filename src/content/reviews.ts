export interface ReviewItem {
  id: string;
  source: "google" | "direct";
  author: string;
  text: string;
  date: string;
  url?: string;
  rating?: number;
  permissionGranted: boolean;
  serviceSlug?: string;
  industrySlug?: string;
}

/**
 * Single source of truth for verified client reviews and testimonials.
 * Rules:
 * - Render ONLY reviews where permissionGranted === true and text is verified.
 * - Never fabricate or display placeholder ratings in production.
 */
export const clientReviews: ReviewItem[] = [
  {
    id: "review-ankit-semwal",
    source: "google",
    author: "Ankit Semwal",
    text: "Devbhoomi Infotech – Complete Digital Solutions se apni website banwayi aur bilkul satisfied hoon! Unhone time pe deliver kiya, website bhi fast load hoti hai aur SEO friendly hai. Team bahut cooperative thi aur business grow karne ke liye...",
    date: "",
    rating: 5,
    permissionGranted: true,
  },
  {
    id: "review-raft-in-rishikesh",
    source: "google",
    author: "Raft In Rishikesh",
    text: "I am the owner of Raft In Rishikesh. Our website was designed and developed by Dev Bhoomi Infotech - Digital Solution. I was referred to Bipin by a friend, and the experience has been excellent.",
    date: "6 months ago",
    rating: 5,
    permissionGranted: true,
  },
  {
    id: "review-manish-kandari",
    source: "google",
    author: "Manish Kandari",
    text: "I had an amazing experience with Devbhomi Infotech in Rishikesh. They designed my trip and trek website to be very clean and professional. The design is simple, modern, and budget-friendly. The team is very cooperative, supportive, and...",
    date: "8 months ago",
    rating: 5,
    permissionGranted: true,
  },
  {
    id: "review-aman",
    source: "google",
    author: "Aman",
    text: "Great experience learning React and the MERN stack at DevBhoomi Infotech. The training was hands-on, and building real projects really helped me understand full-stack development. The mentors were very supportive throughout the journey. Highly recommended!",
    date: "2 months ago",
    rating: 5,
    permissionGranted: true,
  },
  {
    id: "review-dangwal-ji",
    source: "google",
    author: "Dangwal Ji",
    text: "Devbhoomi Infotech Rishikesh is a one-stop solution for digital services. From website development to complete digital solutions, their work quality and support are excellent. The owner is knowledgeable, responsive, and truly understands client requirements. Great experience overall.",
    date: "8 months ago",
    rating: 5,
    permissionGranted: true,
  },
];

export function getPermittedReviews(): ReviewItem[] {
  return clientReviews.filter((r) => r.permissionGranted);
}
