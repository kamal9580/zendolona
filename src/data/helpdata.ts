

   import { HelpData } from '../types/helpdata';

  export const  helpData : HelpData = {
  "title": "World-Map-Explorer – Explore the World with Ease",
  "description": "Welcome to World-Map-Explorer, an inclusive and educational mapping tool designed for both visually impaired and sighted users, powered by OpenStreetMap. This manual provides an overview of the application’s key features, ensuring a seamless and engaging experience while exploring the world.",
  "contents": [
      "Feature List",
      "Opening the Map and Getting Started",
      "Search Around the World",
      "How to Move Through Places",
      "Zooming",
      "Inbound Navigation",
      "Exploring the Surroundings (Adjustable Pointer)",
      "Finding Distance",
      "Credits"
  ],
  "feature_list": {
      "title": "Feature List",
      "features": [
          "Discover any location using the search feature to explore countries, states, rivers, and historical monuments.",
          "Navigate the map effortlessly using arrow keys with audio assist.",
          "Get real-time alerts when crossing borders for an interactive experience.",
          "Instantly know the distance to borders in north, south, east, and west at district, state, or country levels.",
          "Access the altitude of your current cursor location.",
          "Select a place to learn more about it.",
          "Customize the distance and angle of a pointer to explore nearby locations.",
          "Reset the cursor to your starting location with a single click.",
          "Receive coordinates of your current location for an interactive experience.",
          "Zoom in and out with announcements for accessibility.",
          "Find the shortest distance between two places.",
          "Switch between political and geographical views."
      ]
  },
  "opening_map": {
      "title": "Opening the Map and Getting Started",
      "description": "Type map.zendalona.com in the browser’s address bar. A basic details window with disclaimers and key controls will appear. After reviewing, close the window using the tab key to focus on the close button and press Enter. A sound indicates the map is loading. Press Alt + M to focus on the map and activate focus mode in your screen reader to start exploring. Use Alt + K to hear all key functions."
  },
  "search": {
      "title": "Search Around the World",
      "description": "Press Alt + S to focus on the search bar. Type the name of a place, river, state, or country, then press Enter. Select a result to receive details about the location. If the result is a bounded area (e.g., a country), navigation will be restricted within its borders. Use the tab key to access the information box and arrow keys to navigate details. Press Alt + M to refocus on the map. Press Escape to close the search selection."
  },
  "movement": {
      "title": "How to Move Through Places",
      "description": "The map starts with a cursor near your approximate location. Press Alt + M to focus on the map, activate focus mode, and use arrow keys to navigate. Arrow key presses trigger sound cues. A water splash sound indicates entering a water body. Crossing borders triggers an announcement of previous and new locations. After a second of inactivity, the cursor’s current location is announced.",
      "controls": [
          "Press F to hear the cursor's current location.",
          "Press Shift + Arrow Key to find the distance to the border in that direction.",
          "Press D to hear the distance to the border in east and west directions.",
          "Double press D to hear the distance to the border in north and south directions.",
          "Press A to announce the altitude of the cursor’s current location.",
          "Press Enter to select the cursor’s location and view details.",
          "Press L to reset the cursor to your exact location (requires location permissions).",
          "Press Shift + F to get the exact coordinates of the cursor.",
          "Press Z to learn the scale of distance traveled per key press."
      ]
  },
  "zooming": {
      "title": "Zooming",
      "description": "Zooming adjusts the map's detail level. Zooming in shows smaller regions, while zooming out provides a broader perspective. The level of zoom also affects border-crossing alerts: districts at close zoom, states at medium zoom, and international borders at maximum zoom. Cursor movement distance per arrow key press also changes with zoom level.",
      "control": "Press Z to hear the distance traveled by the cursor with each arrow key press."
  },
  "inbound_navigation": {
      "title": "Inbound Navigation",
      "description": "Inbound navigation keeps you within a selected area, preventing boundary crossings. It activates when selecting a search result with boundaries (e.g., a country) or pressing Enter while navigating. The selected area varies by zoom level: a small region at close zoom and a larger area at far zoom. Press Alt + M to refocus on the map. Press Escape to exit the boundary and continue normal exploration."
  },
  "adjustable_pointer": {
      "title": "Exploring the Surroundings (Adjustable Pointer)",
      "description": "The adjustable pointer allows exploration of nearby locations by setting an angle and distance from the cursor. North is 0°, east is 90°, south is 180°, and west is 270°. Press J to activate the adjustable pointer, use arrow keys to adjust distance and angle, and press F to hear details of the pointed location. Press Enter to move the cursor to the pointed location or press J again to exit."
  },
  "distance_finder": {
      "title": "Finding Distance",
      "description": "The Distance Finder calculates road distances between two locations (up to 1500 km). Press Control + Shift + D to open the panel, enter the starting point and destination, and press Enter to view results. Press Alt + L to set the cursor’s location as the starting point or destination. Press Enter to calculate and announce the total road distance and estimated travel time. Press Escape to close the panel and continue exploring."
  },
  "credits": {
      "title": "Credits",
      "developers": ["Athuldas S", "Azhar Abdulla C K", "Jyothir Adithya P", "Saju Suresh S"],
      "mentors": ["Aswathy Palakkal", "Dr. Rani M R", "K Sathyaseelan", "Mukundhan Annamalai", "Nalin Sathyan"],
      "testers": ["Abhiram P S", "Ajayakumar A", "Akshay S Dinesh", "Balaraman P", "Jinu John", "K H Musthafal Mukthar", "K Sathyaseelan", "Shadil A M", "Vinod B"]
  }
};

