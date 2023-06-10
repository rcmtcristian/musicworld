interface ImportMetaEnv {
  VITE_REACT_APP_SPOTIFY_CLIENT_ID: string
  VITE_REACT_APP_CLIENT_SECRET: string
  // Add other environment variables here...
}

interface ImportMeta {
  env: ImportMetaEnv
}
