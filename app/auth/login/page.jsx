import { LoginForm } from '@/components/login-form'
export const metadata = {
  metadataBase: new URL("https://textcognito.click/auth/login"),
  title: "Textcognito | Login ",
  description: 'Receive anonymous messages from friends safely. Create your unique link for Instagram, Snapchat, and Twitter.',
  keywords: [
    'anonymous messaging', 
    'secret messages', 
    'instagram anonymous link', 
    'snapchat questions', 
    'anonymous feedback', 
    'textcognito'
  ],
  authors: [{ name: "Adedeji Adebayo" }],
  openGraph: {
    title: "Textcognito - Anonymous Messaging",
    description: "Send and receive anonymous messages safely.",
    type: "website",
    url: "https://textcognito.click",
    siteName: 'Textcognito',
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Textcognito - Send and receive anonymous messages safely" }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Textcognito - Anonymous Messaging',
    description: 'Get honest feedback and secret messages from your friends.',
    creator: '@theebayo', // Replace if you have a Twitter handle
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};
export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
