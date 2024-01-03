// vite.config.ts
import { defineConfig } from "file:///C:/Users/%D0%9C%D0%B8%D0%BB%D0%B0/Desktop/git/rs_2023/final-task/graphiql-app/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/%D0%9C%D0%B8%D0%BB%D0%B0/Desktop/git/rs_2023/final-task/graphiql-app/node_modules/@vitejs/plugin-react/dist/index.mjs";

// tailwind.config.ts
import defaultTheme from "file:///C:/Users/%D0%9C%D0%B8%D0%BB%D0%B0/Desktop/git/rs_2023/final-task/graphiql-app/node_modules/tailwindcss/defaultTheme.js";
var tailwind_config_default = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonColor: {
          400: "#2F79F0",
          600: "#1f5dc0",
          900: "#1c478b"
        }
      },
      backgroundColor: {
        buttonBg: {
          400: "#2F79F0",
          600: "#1f5dc0",
          900: "#1c478b"
        },
        disabledButton: "#b9b5bb"
      },
      keyframes: {
        fadeinout: {
          "0%": { opacity: 0 },
          "25%": { opacity: 1 },
          "75%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      },
      animation: {
        fadeinout: "fadeinout 4s linear forwards"
      }
    },
    screens: {
      xs: "320px",
      ...defaultTheme.screens
    }
  },
  plugins: []
};

// postcss.config.ts
import autoprefixer from "file:///C:/Users/%D0%9C%D0%B8%D0%BB%D0%B0/Desktop/git/rs_2023/final-task/graphiql-app/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwind from "file:///C:/Users/%D0%9C%D0%B8%D0%BB%D0%B0/Desktop/git/rs_2023/final-task/graphiql-app/node_modules/tailwindcss/lib/index.js";
var postcss = {
  plugins: [tailwind(tailwind_config_default), autoprefixer]
};
var postcss_config_default = postcss;

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"]
  },
  css: {
    postcss: postcss_config_default
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidGFpbHdpbmQuY29uZmlnLnRzIiwgInBvc3Rjc3MuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcXHUwNDFDXHUwNDM4XHUwNDNCXHUwNDMwXFxcXERlc2t0b3BcXFxcZ2l0XFxcXHJzXzIwMjNcXFxcZmluYWwtdGFza1xcXFxncmFwaGlxbC1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFx1MDQxQ1x1MDQzOFx1MDQzQlx1MDQzMFxcXFxEZXNrdG9wXFxcXGdpdFxcXFxyc18yMDIzXFxcXGZpbmFsLXRhc2tcXFxcZ3JhcGhpcWwtYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8lRDAlOUMlRDAlQjglRDAlQkIlRDAlQjAvRGVza3RvcC9naXQvcnNfMjAyMy9maW5hbC10YXNrL2dyYXBoaXFsLWFwcC92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZS9jbGllbnRcIiAvPlxuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcG9zdGNzcyBmcm9tICcuL3Bvc3Rjc3MuY29uZmlnJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgc2V0dXBGaWxlczogWycuL3NyYy9zZXR1cFRlc3RzLnRzJ10sXG4gIH0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3MsXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcXHUwNDFDXHUwNDM4XHUwNDNCXHUwNDMwXFxcXERlc2t0b3BcXFxcZ2l0XFxcXHJzXzIwMjNcXFxcZmluYWwtdGFza1xcXFxncmFwaGlxbC1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFx1MDQxQ1x1MDQzOFx1MDQzQlx1MDQzMFxcXFxEZXNrdG9wXFxcXGdpdFxcXFxyc18yMDIzXFxcXGZpbmFsLXRhc2tcXFxcZ3JhcGhpcWwtYXBwXFxcXHRhaWx3aW5kLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvJUQwJTlDJUQwJUI4JUQwJUJCJUQwJUIwL0Rlc2t0b3AvZ2l0L3JzXzIwMjMvZmluYWwtdGFzay9ncmFwaGlxbC1hcHAvdGFpbHdpbmQuY29uZmlnLnRzXCI7LyoqIEB0eXBlIHtpbXBvcnQoJ3RhaWx3aW5kY3NzJykuQ29uZmlnfSAqL1xuXG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJ3RhaWx3aW5kY3NzL2RlZmF1bHRUaGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGVudDogWycuL2luZGV4Lmh0bWwnLCAnLi9zcmMvKiovKi57anMsdHMsanN4LHRzeH0nXSxcbiAgdGhlbWU6IHtcbiAgICBleHRlbmQ6IHtcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBidXR0b25Db2xvcjoge1xuICAgICAgICAgIDQwMDogJyMyRjc5RjAnLFxuICAgICAgICAgIDYwMDogJyMxZjVkYzAnLFxuICAgICAgICAgIDkwMDogJyMxYzQ3OGInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgICBidXR0b25CZzoge1xuICAgICAgICAgIDQwMDogJyMyRjc5RjAnLFxuICAgICAgICAgIDYwMDogJyMxZjVkYzAnLFxuICAgICAgICAgIDkwMDogJyMxYzQ3OGInLFxuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZEJ1dHRvbjogJyNiOWI1YmInLFxuICAgICAgfSxcbiAgICAgIGtleWZyYW1lczoge1xuICAgICAgICBmYWRlaW5vdXQ6IHtcbiAgICAgICAgICAnMCUnOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgICAnMjUlJzogeyBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgJzc1JSc6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgICAgICcxMDAlJzogeyBvcGFjaXR5OiAwIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIGZhZGVpbm91dDogJ2ZhZGVpbm91dCA0cyBsaW5lYXIgZm9yd2FyZHMnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNjcmVlbnM6IHtcbiAgICAgIHhzOiAnMzIwcHgnLFxuICAgICAgLi4uZGVmYXVsdFRoZW1lLnNjcmVlbnMsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW10sXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTA0MUNcdTA0MzhcdTA0M0JcdTA0MzBcXFxcRGVza3RvcFxcXFxnaXRcXFxccnNfMjAyM1xcXFxmaW5hbC10YXNrXFxcXGdyYXBoaXFsLWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcXHUwNDFDXHUwNDM4XHUwNDNCXHUwNDMwXFxcXERlc2t0b3BcXFxcZ2l0XFxcXHJzXzIwMjNcXFxcZmluYWwtdGFza1xcXFxncmFwaGlxbC1hcHBcXFxccG9zdGNzcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLyVEMCU5QyVEMCVCOCVEMCVCQiVEMCVCMC9EZXNrdG9wL2dpdC9yc18yMDIzL2ZpbmFsLXRhc2svZ3JhcGhpcWwtYXBwL3Bvc3Rjc3MuY29uZmlnLnRzXCI7aW1wb3J0IHRhaWx3aW5kQ29uZmlnIGZyb20gJy4vdGFpbHdpbmQuY29uZmlnJztcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcbmltcG9ydCB0YWlsd2luZCBmcm9tICd0YWlsd2luZGNzcyc7XG5cbmNvbnN0IHBvc3Rjc3MgPSB7XG4gIHBsdWdpbnM6IFt0YWlsd2luZCh0YWlsd2luZENvbmZpZyksIGF1dG9wcmVmaXhlcl0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0Y3NzO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUdBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVzs7O0FDRmxCLE9BQU8sa0JBQWtCO0FBRXpCLElBQU8sMEJBQVE7QUFBQSxFQUNiLFNBQVMsQ0FBQyxnQkFBZ0IsNEJBQTRCO0FBQUEsRUFDdEQsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sUUFBUTtBQUFBLFFBQ04sYUFBYTtBQUFBLFVBQ1gsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsTUFDQSxpQkFBaUI7QUFBQSxRQUNmLFVBQVU7QUFBQSxVQUNSLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1QsV0FBVztBQUFBLFVBQ1QsTUFBTSxFQUFFLFNBQVMsRUFBRTtBQUFBLFVBQ25CLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFBQSxVQUNwQixPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQUEsVUFDcEIsUUFBUSxFQUFFLFNBQVMsRUFBRTtBQUFBLFFBQ3ZCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1QsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixHQUFHLGFBQWE7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQztBQUNaOzs7QUN4Q0EsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxjQUFjO0FBRXJCLElBQU0sVUFBVTtBQUFBLEVBQ2QsU0FBUyxDQUFDLFNBQVMsdUJBQWMsR0FBRyxZQUFZO0FBQ2xEO0FBRUEsSUFBTyx5QkFBUTs7O0FGQWYsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVksQ0FBQyxxQkFBcUI7QUFBQSxFQUNwQztBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
