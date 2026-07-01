import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			mono: 'var(--font-SFMono)',
  			display: 'var(--font-SFDisplay)'
  		},
  		fontSize: {
  			c8xl: 'clamp(40px, 8vw, 80px)',
  			c6xl: 'clamp(30px, 6vw, 60px)',
  			display: 'clamp(3rem, 13vw, 13rem)',
  			mega: 'clamp(4rem, 18vw, 20rem)'
  		},
  		colors: {
  			ink: '#08080A',
  			'ink-2': '#0D0D10',
  			'ink-3': '#16161B',
  			'ink-4': '#22222A',
  			chalk: '#F4F4F2',
  			fog: '#8A8A93',
  			'fog-dim': '#5A5A63',
  			neon: '#CCFF00',
  			violet: '#7C6FF0',
  			navy_700: '#0A192F',
  			navy_500: '#112240',
  			navy_300: '#233554',
  			slate_700: '#8892B0',
  			slate_500: '#A8B2D1',
  			slate_300: '#CCD6F6',
  			green_700: '#64FFDA',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderWidth: {
  			'1': '1px'
  		},
  		boxShadow: {
  			xsm: '4px 4px 0px 0px',
  			xlg: '0 10px 30px -10px rgba(2, 12, 27, 0.7)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			marquee: {
  				'0%': { transform: 'translateX(0)' },
  				'100%': { transform: 'translateX(-50%)' }
  			},
  			'marquee-rev': {
  				'0%': { transform: 'translateX(-50%)' },
  				'100%': { transform: 'translateX(0)' }
  			},
  			'spin-slow': {
  				'0%': { transform: 'rotate(0deg)' },
  				'100%': { transform: 'rotate(360deg)' }
  			},
  			blink: {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0' }
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--marquee-duration, 30s) linear infinite',
  			'marquee-rev': 'marquee-rev var(--marquee-duration, 30s) linear infinite',
  			'spin-slow': 'spin-slow 18s linear infinite',
  			blink: 'blink 1.1s step-end infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
