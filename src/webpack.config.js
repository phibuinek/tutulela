const JavaScriptObfuscator = require("javascript-obfuscator");

module.exports = {
  // Các cấu hình khác của webpack (entry, output, loaders, etc.)
  mode: "production",
  plugins: [
    new JavaScriptObfuscator(
      {
        rotateStringArray: true,
        stringArray: true,
        stringArrayThreshold: 0.75,
      },
      ["excluded_bundle_name.js"]
    ), // Tùy chọn exclude file
  ],
};
