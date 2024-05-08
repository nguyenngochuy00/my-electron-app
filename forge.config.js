const { FusesPlugin } = require("@electron-forge/plugin-fuses");
const { FuseV1Options, FuseVersion } = require("@electron/fuses");

module.exports = {
  packagerConfig: {
    asar: true,
    icon: "./assets/icons/fpt_logo",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        options: {
          // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
          iconUrl:
            "https://raw.githubusercontent.com/nguyenngochuy00/my-electron-app/master/assets/icons/fpt_logo.ico",
          // The ICO file to use as the icon for the generated Setup.exe
          setupIcon: "./assets/icons/fpt_logo.ico",
        },
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin", "linux"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          icon: "./assets/icons/fpt_logo.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
    // {
    //   // Path to the icon to use for the app in the DMG window
    //   name: "@electron-forge/maker-dmg",
    //   config: {
    //     icon: "./assets/icons/chrome_icon.icns",
    //   },
    // },
    // {
    //   name: "@electron-forge/maker-wix",
    //   config: {
    //     icon: "./assets/icons/chrome_icon.ico",
    //   },
    // },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
