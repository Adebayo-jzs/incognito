import React from 'react';
import Link from 'next/link';
import { Security, Bolt, Favorite, VisibilityOff, Lock, Groups } from '@mui/icons-material';

export const metadata = {
    title: "About Textcognito | Safe Anonymous Messaging",
    description: "Learn about Textcognito's mission to provide a safe, fun, and anonymous messaging platform for friends.",
};

export default function About() {
    // Reuse the card logic and styles from page.js
    const cardSectionClass = "relative";

    const values = [
        {
            id: 1,
            title: "Privacy First",
            text: "We believe privacy is a fundamental right. Your identity receives iron-clad protection, and we never sell your data.",
            color: "text-indigo-400",
            bg: "bg-indigo-500/10",
            Icon: Security
        },
        {
            id: 2,
            title: "Safe Expression",
            text: "Our advanced moderation filters block bullying and harmful content before it reaches you. Safety is our priority.",
            color: "text-[#8f48ec]",
            bg: "bg-[#8f48ec]/10",
            Icon: Lock
        },
        {
            id: 3,
            title: "Community Driven",
            text: "Built for friends to connect authentically. We focus on positive interactions and genuine feedback.",
            color: "text-pink-400",
            bg: "bg-pink-500/10",
            Icon: Groups
        }
    ];

    return (
        <div className="transition-colors duration-300 font-display overflow-x-hidden min-h-screen text-white">
            {/* Hero Section */}
            <section className={`${cardSectionClass} pt-32 pb-20 bg-gradient-to-tr from-[#15121a] via-[#141118] to-[#1c1425]`}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f48ec]/10 border border-[#8f48ec]/20 text-[#8f48ec] text-xs font-semibold mb-8">
                        <span className="text-sm"><Bolt fontSize='15' /></span>
                        About Us
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
                        Connecting Friends, <br />
                        <span className="bg-gradient-to-br from-[#8f48ec] to-[#a855f7] bg-clip-text text-transparent">
                            Anonymously & Safely
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Textcognito was born from a simple idea: honest feedback helps us grow, but social pressure often holds it back.
                        We created a safe space for genuine connection.
                    </p>
                </div>
            </section>

            {/* Mission/Values Section */}
            <section className={`${cardSectionClass} py-20 relative z-10 bg-[#121212] px-6`}>
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h2>
                    <p className="text-gray-400 text-lg">
                        To empower authentic communication by removing the barriers of identity, while maintaining a safe and positive environment.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item) => (
                        <div key={item.id} className="bg-[#1a1a1a] p-10 rounded-3xl border border-white/5 hover:border-[#8f48ec]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8f48ec]/10 group">
                            <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.Icon className={`${item.color} text-3xl`} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team/Story Section (simplified) */}
            <section className="py-24 bg-[#0f0f0f] px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">The Story</h2>
                    <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-white/5">
                        <p className="text-gray-300 leading-loose text-lg">
                            Started in 2024, Textcognito set out to solve the problem of anonymous messaging apps becoming toxic.
                            By implementing AI-driven moderation and strictly enforcing positive community guidelines, we've built a platform
                            where millions of messages are exchanged safely every day. We are a small, passionate team dedicated to
                            keeping the internet fun and safe.
                        </p>
                        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-2 text-gray-500 text-sm font-medium uppercase tracking-wider">
                            Made with <Favorite className="text-red-500 text-sm animate-pulse" /> for the internet
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer (Reused from page.js style) */}
            <footer className="w-full">
                <div className="bg-[#0a080c] pt-16 pb-8 border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand Column */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-[#8e46ec] w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg">T</div>
                                <span className="text-white font-bold text-xl">Textcognito</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                The safest way to receive anonymous messages from friends.
                            </p>
                            <div className="flex gap-3">
                                {['tw', 'ig', 'fb'].map((social) => (
                                    <div key={social} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">
                                        <span className="text-slate-400 text-xs font-bold uppercase">{social}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div>
                            <h3 className="text-white font-bold mb-6">Product</h3>
                            <div className="flex flex-col space-y-3 text-slate-500 text-sm">
                                <Link href="/" className="hover:text-[#8f48ec] cursor-pointer transition-colors">Features</Link>
                                <Link href="/" className="hover:text-[#8f48ec] cursor-pointer transition-colors">Pricing</Link>
                                <Link href="/" className="hover:text-[#8f48ec] cursor-pointer transition-colors">FAQ</Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-6">Company</h3>
                            <div className="flex flex-col space-y-3 text-slate-500 text-sm">
                                <Link href="/about" className="text-[#8f48ec] font-medium cursor-pointer transition-colors">About Us</Link>
                                <Link href="/" className="hover:text-[#8f48ec] cursor-pointer transition-colors">Contact</Link>
                                <Link href="/" className="hover:text-[#8f48ec] cursor-pointer transition-colors">Privacy Policy</Link>
                            </div>
                        </div>

                        <div className="md:col-span-1">
                            {/* Spacer or extra column if needed */}
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/5 text-center">
                        <p className="text-slate-600 text-sm">
                            © 2026 Textcognito. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}