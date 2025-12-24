import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Luxury experience colors
        luxury: {
          cream: "hsl(var(--luxury-cream))",
          beige: "hsl(var(--luxury-beige))",
          peach: "hsl(var(--luxury-peach))",
          gold: "hsl(var(--luxury-gold))",
          "gold-muted": "hsl(var(--luxury-gold-muted))",
          amber: "hsl(var(--luxury-amber))",
          "warm-white": "hsl(var(--luxury-warm-white))",
        },
        room: {
          dark: "hsl(var(--room-dark))",
          wall: "hsl(var(--room-wall))",
          "wall-lit": "hsl(var(--room-wall-lit))",
          "light-source": "hsl(var(--warm-light-source))",
          "light-glow": "hsl(var(--warm-light-glow))",
        },
        decoration: {
          balloon: "hsl(var(--balloon-latex))",
          "balloon-highlight": "hsl(var(--balloon-highlight))",
          fairy: "hsl(var(--fairy-light))",
          "fairy-glow": "hsl(var(--fairy-glow))",
          streamer: "hsl(var(--streamer-gold))",
          "confetti-gold": "hsl(var(--confetti-gold))",
          "confetti-cream": "hsl(var(--confetti-cream))",
        },
        // Cake-specific colors
        cake: {
          vanilla: "hsl(var(--cake-vanilla))",
          "vanilla-dark": "hsl(var(--cake-vanilla-dark))",
          cream: "hsl(var(--cake-cream))",
          "cream-shadow": "hsl(var(--cake-cream-shadow))",
          caramel: "hsl(var(--cake-caramel))",
          cocoa: "hsl(var(--cake-cocoa))",
          frosting: "hsl(var(--cake-frosting))",
          "frosting-shadow": "hsl(var(--cake-frosting-shadow))",
        },
        candle: {
          wax: "hsl(var(--candle-wax))",
          "wax-shadow": "hsl(var(--candle-wax-shadow))",
        },
        flame: {
          core: "hsl(var(--flame-core))",
          mid: "hsl(var(--flame-mid))",
          outer: "hsl(var(--flame-outer))",
          glow: "hsl(var(--flame-glow))",
        },
        scene: {
          table: "hsl(var(--table-surface))",
          "table-highlight": "hsl(var(--table-highlight))",
          shadow: "hsl(var(--ambient-shadow))",
          "warm-light": "hsl(var(--warm-light))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "drift": {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(4px)" },
        },
        "twinkle": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "fall": {
          "0%": { transform: "translateY(-20px) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 4s ease-in-out infinite",
        "drift": "drift 6s ease-in-out infinite",
        "twinkle": "twinkle 2s ease-in-out infinite",
        "fall": "fall 4s linear forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
