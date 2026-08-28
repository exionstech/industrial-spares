# Phase 1: Framer Exploration & Planning

## Objective
Extract design specifications, component structures, assets, colors, typography, and copy from the Framer workspace to plan the Next.js conversion.

## Key Actions & Discoveries
1. **Framer MCP Integration**:
   - Fetched Framer project XML (`getProjectXml`) and focused home page XML (`getNodeXml` for node `augiA20Il`).
   - Identified 6 main page sections: Header/Navbar, Hero, ISO Certification Banner, Core Products & Materials, Value Propositions Grid, and Contact/RFQ Banner.

2. **Design Tokens & CDN Assets Extracted**:
   - **Primary Brand Red**: `#C8102E` (`rgba(200, 16, 46, 1)`) & Deep Red `#C2030D`.
   - **Dark Neutral**: `#111111` & `#191919`.
   - **Background Light**: `#F5F5F5`.
   - **Typography**: Inter (Bold, SemiBold, Medium, Regular).
   - **Framer CDN Images**:
     - Logo: `https://framerusercontent.com/images/89Bw1SUJN6l6dCYPaK2kgonGcY.png`
     - Hero BG: `https://framerusercontent.com/images/WvGdIGyATWIlEz7kZUiQLgQ1U.png`
     - ISO Badges: `Ai3HZn7GbIZ0RccOeeLvy7QDq1I.png`, `u3WkuxjeJSdVqlav0VVymBPxUYA.png`, `4lsaKj9dacZrVZ6wxPJtKuJPSI.png`
     - Shaft Collars: `https://framerusercontent.com/images/7NK8fGuyqF3aF57JhRu3voq3as.jpg`
     - Couplings: `https://framerusercontent.com/images/2Z9NNE37lFh4DbRfaqWXEtpLg.jpg`
     - CNC Components: `https://framerusercontent.com/images/wB1KiLMHIYo09P80qNe31sCC3Ok.jpg`
     - Sprockets: `https://framerusercontent.com/images/YXBuRm7MJWyhtTHo8eowKlJN3Y.jpg`
     - Valves: `https://framerusercontent.com/images/DPBbZ84YG3OVXfnNsR7VjWX7WL0.jpg`
     - Other Machine Parts: `https://framerusercontent.com/images/t19XdPCjkGMjuCR75bZgJuyUSnY.jpg`
     - Engineer Portrait: `https://framerusercontent.com/images/ctUfi20e5c3UghihvWBXApxVG6c.png`

3. **Planning & Approval**:
   - Created `implementation_plan.md` artifact detailing proposed component breakdown, tech stack, and verification steps.
   - Obtained explicit user approval.
