/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#1F2937",
        "bg-light": "#374151",
        "text-main": "#F9FAFB",
        "text-secondary": "#D1D5DB",
        "status-error": "#DC2626",
        "status-warning": "#F97316",
        "status-caution": "#FACC15",
        "status-info": "#93C5FD",
        "status-inactive": "#9CA3AF",
        "status-success": "#10B981",
        "interactive-blue": "#3B82F6",
        "highlight-active": "#06B6D4",
      },
    },
  },
  plugins: [],
};
